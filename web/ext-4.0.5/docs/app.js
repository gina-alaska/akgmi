// All functions that need access to the editor's state live inside
// the CodeMirror function. Below that, at the bottom of the file,
// some utilities are defined.

// CodeMirror is the only global var we claim
var CodeMirror = (function() {
  // This is the function that produces an editor instance. It's
  // closure is used to store the editor state.
  function CodeMirror(place, givenOptions) {
    // Determine effective options based on given values and defaults.
    var options = {}, defaults = CodeMirror.defaults;
    for (var opt in defaults)
      if (defaults.hasOwnProperty(opt))
        options[opt] = (givenOptions && givenOptions.hasOwnProperty(opt) ? givenOptions : defaults)[opt];

    var targetDocument = options["document"];
    // The element in which the editor lives.
    var wrapper = targetDocument.createElement("div");
    wrapper.className = "CodeMirror";
    // This mess creates the base DOM structure for the editor.
    wrapper.innerHTML =
      '<div style="overflow: hidden; position: relative; width: 1px; height: 0px;">' + // Wraps and hides input textarea
        '<textarea style="position: absolute; width: 2px;" wrap="off"></textarea></div>' +
      '<div class="CodeMirror-scroll cm-s-' + options.theme + '">' +
        '<div style="position: relative">' + // Set to the height of the text, causes scrolling
          '<div style="position: absolute; height: 0; width: 0; overflow: hidden;"></div>' +
          '<div style="position: relative">' + // Moved around its parent to cover visible view
            '<div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div>' +
            // Provides positioning relative to (visible) text origin
            '<div class="CodeMirror-lines"><div style="position: relative">' +
              '<pre class="CodeMirror-cursor">&#160;</pre>' + // Absolutely positioned blinky cursor
              '<div></div>' + // This DIV contains the actual code
            '</div></div></div></div></div>';
    if (place.appendChild) place.appendChild(wrapper); else place(wrapper);
    // I've never seen more elegant code in my life.
    var inputDiv = wrapper.firstChild, input = inputDiv.firstChild,
        scroller = wrapper.lastChild, code = scroller.firstChild,
        measure = code.firstChild, mover = measure.nextSibling,
        gutter = mover.firstChild, gutterText = gutter.firstChild,
        lineSpace = gutter.nextSibling.firstChild,
        cursor = lineSpace.firstChild, lineDiv = cursor.nextSibling;
    if (options.tabindex != null) input.tabindex = options.tabindex;
    if (!options.gutter && !options.lineNumbers) gutter.style.display = "none";

    // Delayed object wrap timeouts, making sure only one is active. blinker holds an interval.
    var poll = new Delayed(), highlight = new Delayed(), blinker;

    // mode holds a mode API object. lines an array of Line objects
    // (see Line constructor), work an array of lines that should be
    // parsed, and history the undo history (instance of History
    // constructor).
    var mode, lines = [new Line("")], work, history = new History(), focused;
    loadMode();
    // The selection. These are always maintained to point at valid
    // positions. Inverted is used to remember that the user is
    // selecting bottom-to-top.
    var sel = {from: {line: 0, ch: 0}, to: {line: 0, ch: 0}, inverted: false};
    // Selection-related flags. shiftSelecting obviously tracks
    // whether the user is holding shift. reducedSelection is a hack
    // to get around the fact that we can't create inverted
    // selections. See below.
    var shiftSelecting, reducedSelection, lastDoubleClick;
    // Variables used by startOperation/endOperation to track what
    // happened during the operation.
    var updateInput, changes, textChanged, selectionChanged, leaveInputAlone;
    // Current visible range (may be bigger than the view window).
    var showingFrom = 0, showingTo = 0, lastHeight = 0, curKeyId = null;
    // editing will hold an object describing the things we put in the
    // textarea, to help figure out whether something changed.
    // bracketHighlighted is used to remember that a backet has been
    // marked.
    var editing, bracketHighlighted;
    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    var maxLine = "";

    // Initialize the content. Somewhat hacky (delayed prepareInput)
    // to work around browser issues.
    operation(function(){setValue(options.value || ""); updateInput = false;})();
    setTimeout(prepareInput, 20);

    // Register our event handlers.
    connect(scroller, "mousedown", operation(onMouseDown));
    // Gecko browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for Gecko.
    if (!gecko) connect(scroller, "contextmenu", operation(onContextMenu));
    connect(code, "dblclick", operation(onDblClick));
    connect(scroller, "scroll", function() {updateDisplay([]); if (options.onScroll) options.onScroll(instance);});
    connect(window, "resize", function() {updateDisplay(true);});
    connect(input, "keyup", operation(onKeyUp));
    connect(input, "keydown", operation(onKeyDown));
    connect(input, "keypress", operation(onKeyPress));
    connect(input, "focus", onFocus);
    connect(input, "blur", onBlur);

    connect(scroller, "dragenter", function(e){e.stop();});
    connect(scroller, "dragover", function(e){e.stop();});
    connect(scroller, "drop", operation(onDrop));
    connect(scroller, "paste", function(){focusInput(); fastPoll();});
    connect(input, "paste", function(){fastPoll();});
    connect(input, "cut", function(){fastPoll();});
    
    // IE throws unspecified error in certain cases, when 
    // trying to access activeElement before onload
    var hasFocus; try { hasFocus = (targetDocument.activeElement == input); } catch(e) { }
    if (hasFocus) onFocus();
    else onBlur();

    function isLine(l) {return l >= 0 && l < lines.length;}
    // The instance object that we'll return. Mostly calls out to
    // local functions in the CodeMirror function. Some do some extra
    // range checking and/or clipping. operation is used to wrap the
    // call so that changes it makes are tracked, and the display is
    // updated afterwards.
    var instance = {
      getValue: getValue,
      setValue: operation(setValue),
      getSelection: getSelection,
      replaceSelection: operation(replaceSelection),
      focus: function(){focusInput(); onFocus(); prepareInput(); fastPoll();},
      setOption: function(option, value) {
        options[option] = value;
        if (option == "lineNumbers" || option == "gutter") gutterChanged();
        else if (option == "mode" || option == "indentUnit") loadMode();
        else if (option == "readOnly" && value == "nocursor") input.blur();
        else if (option == "theme") scroller.className = scroller.className.replace(/cm-s-\w+/, "cm-s-" + value);
      },
      getOption: function(option) {return options[option];},
      undo: operation(undo),
      redo: operation(redo),
      indentLine: operation(function(n) {if (isLine(n)) indentLine(n, "smart");}),
      historySize: function() {return {undo: history.done.length, redo: history.undone.length};},
      matchBrackets: operation(function(){matchBrackets(true);}),
      getTokenAt: function(pos) {
        pos = clipPos(pos);
        return lines[pos.line].getTokenAt(mode, getStateBefore(pos.line), pos.ch);
      },
      cursorCoords: function(start){
        if (start == null) start = sel.inverted;
        return pageCoords(start ? sel.from : sel.to);
      },
      charCoords: function(pos){return pageCoords(clipPos(pos));},
      coordsChar: function(coords) {
        var off = eltOffset(lineSpace);
        var line = clipLine(Math.min(lines.length - 1, showingFrom + Math.floor((coords.y - off.top) / lineHeight())));
        return clipPos({line: line, ch: charFromX(clipLine(line), coords.x - off.left)});
      },
      getSearchCursor: function(query, pos, caseFold) {return new SearchCursor(query, pos, caseFold);},
      markText: operation(function(a, b, c){return operation(markText(a, b, c));}),
      setMarker: addGutterMarker,
      clearMarker: removeGutterMarker,
      setLineClass: operation(setLineClass),
      lineInfo: lineInfo,
      addWidget: function(pos, node, scroll) {
        var pos = localCoords(clipPos(pos), true);
        node.style.top = (showingFrom * lineHeight() + pos.yBot + paddingTop()) + "px";
        node.style.left = (pos.x + paddingLeft()) + "px";
        code.appendChild(node);
        if (scroll)
          scrollIntoView(pos.x, pos.yBot, pos.x + node.offsetWidth, pos.yBot + node.offsetHeight);
      },

      lineCount: function() {return lines.length;},
      getCursor: function(start) {
        if (start == null) start = sel.inverted;
        return copyPos(start ? sel.from : sel.to);
      },
      somethingSelected: function() {return !posEq(sel.from, sel.to);},
      setCursor: operation(function(line, ch) {
        if (ch == null && typeof line.line == "number") setCursor(line.line, line.ch);
        else setCursor(line, ch);
      }),
      setSelection: operation(function(from, to) {setSelection(clipPos(from), clipPos(to || from));}),
      getLine: function(line) {if (isLine(line)) return lines[line].text;},
      setLine: operation(function(line, text) {
        if (isLine(line)) replaceRange(text, {line: line, ch: 0}, {line: line, ch: lines[line].text.length});
      }),
      removeLine: operation(function(line) {
        if (isLine(line)) replaceRange("", {line: line, ch: 0}, clipPos({line: line+1, ch: 0}));
      }),
      replaceRange: operation(replaceRange),
      getRange: function(from, to) {return getRange(clipPos(from), clipPos(to));},

      operation: function(f){return operation(f)();},
      refresh: function(){updateDisplay(true);},
      getInputField: function(){return input;},
      getWrapperElement: function(){return wrapper;}
    };

    function setValue(code) {
      history = null;
      var top = {line: 0, ch: 0};
      updateLines(top, {line: lines.length - 1, ch: lines[lines.length-1].text.length},
                  splitLines(code), top, top);
      history = new History();
    }
    function getValue(code) {
      var text = [];
      for (var i = 0, l = lines.length; i < l; ++i)
        text.push(lines[i].text);
      return text.join("\n");
    }

    function onMouseDown(e) {
      var ld = lastDoubleClick; lastDoubleClick = null;
      // First, see if this is a click in the gutter
      for (var n = e.target(); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) {
          if (options.onGutterClick)
            options.onGutterClick(instance, indexOf(gutterText.childNodes, n) + showingFrom);
          return e.stop();
        }

      if (gecko && e.button() == 3) onContextMenu(e);
      if (e.button() != 1) return;
      // For button 1, if it was clicked inside the editor
      // (posFromMouse returning non-null), we have to adjust the
      // selection.
      var start = posFromMouse(e), last = start, going;
      if (!start) {if (e.target() == scroller) e.stop(); return;}

      if (!focused) onFocus();
      e.stop();
      if (ld && +new Date - ld < 400) return selectLine(start.line);

      setCursor(start.line, start.ch, true);
      // And then we have to see if it's a drag event, in which case
      // the dragged-over text must be selected.
      function end() {
        focusInput();
        updateInput = true;
        move(); up();
      }
      function extend(e) {
        var cur = posFromMouse(e, true);
        if (cur && !posEq(cur, last)) {
          if (!focused) onFocus();
          last = cur;
          setSelectionUser(start, cur);
          updateInput = false;
          var visible = visibleLines();
          if (cur.line >= visible.to || cur.line < visible.from)
            going = setTimeout(operation(function(){extend(e);}), 150);
        }
      }

      var move = connect(targetDocument, "mousemove", operation(function(e) {
        clearTimeout(going);
        e.stop();
        extend(e);
      }), true);
      var up = connect(targetDocument, "mouseup", operation(function(e) {
        clearTimeout(going);
        var cur = posFromMouse(e);
        if (cur) setSelectionUser(start, cur);
        e.stop();
        end();
      }), true);
    }
    function onDblClick(e) {
      var pos = posFromMouse(e);
      if (!pos) return;
      selectWordAt(pos);
      e.stop();
      lastDoubleClick = +new Date;
    }
    function onDrop(e) {
      var pos = posFromMouse(e, true), files = e.e.dataTransfer.files;
      if (!pos || options.readOnly) return;
      if (files && files.length && window.FileReader && window.File) {
        var n = files.length, text = Array(n), read = 0;
        for (var i = 0; i < n; ++i) loadFile(files[i], i);
        function loadFile(file, i) {
          var reader = new FileReader;
          reader.onload = function() {
            text[i] = reader.result;
            if (++read == n) replaceRange(text.join(""), clipPos(pos), clipPos(pos));
          };
          reader.readAsText(file);
        }
      }
      else {
        try {
          var text = e.e.dataTransfer.getData("Text");
          if (text) replaceRange(text, pos, pos);
        }
        catch(e){}
      }
    }
    function onKeyDown(e) {
      if (!focused) onFocus();

      var code = e.e.keyCode;
      // IE does strange things with escape.
      if (ie && code == 27) { e.e.returnValue = false; }
      // Tries to detect ctrl on non-mac, cmd on mac.
      var mod = (mac ? e.e.metaKey : e.e.ctrlKey) && !e.e.altKey, anyMod = e.e.ctrlKey || e.e.altKey || e.e.metaKey;
      if (code == 16 || e.e.shiftKey) shiftSelecting = shiftSelecting || (sel.inverted ? sel.to : sel.from);
      else shiftSelecting = null;
      // First give onKeyEvent option a chance to handle this.
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e.e))) return;

      if (code == 33 || code == 34) {scrollPage(code == 34); return e.stop();} // page up/down
      if (mod && ((code == 36 || code == 35) || // ctrl-home/end
                  mac && (code == 38 || code == 40))) { // cmd-up/down
        scrollEnd(code == 36 || code == 38); return e.stop();
      }
      if (mod && code == 65) {selectAll(); return e.stop();} // ctrl-a
      if (!options.readOnly) {
        if (!anyMod && code == 13) {return;} // enter
        if (!anyMod && code == 9 && handleTab(e.e.shiftKey)) return e.stop(); // tab
        if (mod && code == 90) {undo(); return e.stop();} // ctrl-z
        if (mod && ((e.e.shiftKey && code == 90) || code == 89)) {redo(); return e.stop();} // ctrl-shift-z, ctrl-y
      }

      // Key id to use in the movementKeys map. We also pass it to
      // fastPoll in order to 'self learn'. We need this because
      // reducedSelection, the hack where we collapse the selection to
      // its start when it is inverted and a movement key is pressed
      // (and later restore it again), shouldn't be used for
      // non-movement keys.
      curKeyId = (mod ? "c" : "") + code;
      if (sel.inverted && movementKeys.hasOwnProperty(curKeyId)) {
        var range = selRange(input);
        if (range) {
          reducedSelection = {anchor: range.start};
          setSelRange(input, range.start, range.start);
        }
      }
      fastPoll(curKeyId);
    }
    function onKeyUp(e) {
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e.e))) return;
      if (reducedSelection) {
        reducedSelection = null;
        updateInput = true;
      }
      if (e.e.keyCode == 16) shiftSelecting = null;
    }
    function onKeyPress(e) {
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e.e))) return;
      if (options.electricChars && mode.electricChars) {
        var ch = String.fromCharCode(e.e.charCode == null ? e.e.keyCode : e.e.charCode);
        if (mode.electricChars.indexOf(ch) > -1)
          setTimeout(operation(function() {indentLine(sel.to.line, "smart");}), 50);
      }
      var code = e.e.keyCode;
      // Re-stop tab and enter. Necessary on some browsers.
      if (code == 13) {if (!options.readOnly) handleEnter(); e.stop();}
      else if (!e.e.ctrlKey && !e.e.altKey && !e.e.metaKey && code == 9 && options.tabMode != "default") e.stop();
      else fastPoll(curKeyId);
    }

    function onFocus() {
      if (options.readOnly == "nocursor") return;
      if (!focused && options.onFocus) options.onFocus(instance);
      focused = true;
      slowPoll();
      if (wrapper.className.search(/\bCodeMirror-focused\b/) == -1)
        wrapper.className += " CodeMirror-focused";
      restartBlink();
    }
    function onBlur() {
      if (focused && options.onBlur) options.onBlur(instance);
      clearInterval(blinker);
      shiftSelecting = null;
      focused = false;
      wrapper.className = wrapper.className.replace(" CodeMirror-focused", "");
    }

    // Replace the range from from to to by the strings in newText.
    // Afterwards, set the selection to selFrom, selTo.
    function updateLines(from, to, newText, selFrom, selTo) {
      if (history) {
        var old = [];
        for (var i = from.line, e = to.line + 1; i < e; ++i) old.push(lines[i].text);
        history.addChange(from.line, newText.length, old);
        while (history.done.length > options.undoDepth) history.done.shift();
      }
      updateLinesNoUndo(from, to, newText, selFrom, selTo);
      if (newText.length < 5)
        highlightLines(from.line, from.line + newText.length)
    }
    function unredoHelper(from, to) {
      var change = from.pop();
      if (change) {
        var replaced = [], end = change.start + change.added;
        for (var i = change.start; i < end; ++i) replaced.push(lines[i].text);
        to.push({start: change.start, added: change.old.length, old: replaced});
        var pos = clipPos({line: change.start + change.old.length - 1,
                           ch: editEnd(replaced[replaced.length-1], change.old[change.old.length-1])});
        updateLinesNoUndo({line: change.start, ch: 0}, {line: end - 1, ch: lines[end-1].text.length}, change.old, pos, pos);
      }
    }
    function undo() {unredoHelper(history.done, history.undone);}
    function redo() {unredoHelper(history.undone, history.done);}

    function updateLinesNoUndo(from, to, newText, selFrom, selTo) {
      var recomputeMaxLength = false, maxLineLength = maxLine.length;
      for (var i = from.line; i <= to.line; ++i) {
        if (lines[i].text.length == maxLineLength) {recomputeMaxLength = true; break;}
      }

      var nlines = to.line - from.line, firstLine = lines[from.line], lastLine = lines[to.line];
      // First adjust the line structure, taking some care to leave highlighting intact.
      if (firstLine == lastLine) {
        if (newText.length == 1)
          firstLine.replace(from.ch, to.ch, newText[0]);
        else {
          lastLine = firstLine.split(to.ch, newText[newText.length-1]);
          var spliceargs = [from.line + 1, nlines];
          firstLine.replace(from.ch, firstLine.text.length, newText[0]);
          for (var i = 1, e = newText.length - 1; i < e; ++i) spliceargs.push(new Line(newText[i]));
          spliceargs.push(lastLine);
          lines.splice.apply(lines, spliceargs);
        }
      }
      else if (newText.length == 1) {
        firstLine.replace(from.ch, firstLine.text.length, newText[0] + lastLine.text.slice(to.ch));
        lines.splice(from.line + 1, nlines);
      }
      else {
        var spliceargs = [from.line + 1, nlines - 1];
        firstLine.replace(from.ch, firstLine.text.length, newText[0]);
        lastLine.replace(0, to.ch, newText[newText.length-1]);
        for (var i = 1, e = newText.length - 1; i < e; ++i) spliceargs.push(new Line(newText[i]));
        lines.splice.apply(lines, spliceargs);
      }


      for (var i = from.line, e = i + newText.length; i < e; ++i) {
        var l = lines[i].text;
        if (l.length > maxLineLength) {
          maxLine = l; maxLineLength = l.length;
          recomputeMaxLength = false;
        }
      }
      if (recomputeMaxLength) {
        maxLineLength = 0; maxLine = "";
        for (var i = 0, e = lines.length; i < e; ++i) {
          var l = lines[i].text;
          if (l.length > maxLineLength) {
            maxLineLength = l.length; maxLine = l;
          }
        }
      }

      // Add these lines to the work array, so that they will be
      // highlighted. Adjust work lines if lines were added/removed.
      var newWork = [], lendiff = newText.length - nlines - 1;
      for (var i = 0, l = work.length; i < l; ++i) {
        var task = work[i];
        if (task < from.line) newWork.push(task);
        else if (task > to.line) newWork.push(task + lendiff);
      }
      if (newText.length) newWork.push(from.line);
      work = newWork;
      startWorker(100);
      // Remember that these lines changed, for updating the display
      changes.push({from: from.line, to: to.line + 1, diff: lendiff});
      textChanged = {from: from, to: to, text: newText};

      // Update the selection
      function updateLine(n) {return n <= Math.min(to.line, to.line + lendiff) ? n : n + lendiff;}
      setSelection(selFrom, selTo, updateLine(sel.from.line), updateLine(sel.to.line));

      // Make sure the scroll-size div has the correct height.
      code.style.height = (lines.length * lineHeight() + 2 * paddingTop()) + "px";
    }

    function replaceRange(code, from, to) {
      from = clipPos(from);
      if (!to) to = from; else to = clipPos(to);
      code = splitLines(code);
      function adjustPos(pos) {
        if (posLess(pos, from)) return pos;
        if (!posLess(to, pos)) return end;
        var line = pos.line + code.length - (to.line - from.line) - 1;
        var ch = pos.ch;
        if (pos.line == to.line)
          ch += code[code.length-1].length - (to.ch - (to.line == from.line ? from.ch : 0));
        return {line: line, ch: ch};
      }
      var end;
      replaceRange1(code, from, to, function(end1) {
        end = end1;
        return {from: adjustPos(sel.from), to: adjustPos(sel.to)};
      });
      return end;
    }
    function replaceSelection(code, collapse) {
      replaceRange1(splitLines(code), sel.from, sel.to, function(end) {
        if (collapse == "end") return {from: end, to: end};
        else if (collapse == "start") return {from: sel.from, to: sel.from};
        else return {from: sel.from, to: end};
      });
    }
    function replaceRange1(code, from, to, computeSel) {
      var endch = code.length == 1 ? code[0].length + from.ch : code[code.length-1].length;
      var newSel = computeSel({line: from.line + code.length - 1, ch: endch});
      updateLines(from, to, code, newSel.from, newSel.to);
    }

    function getRange(from, to) {
      var l1 = from.line, l2 = to.line;
      if (l1 == l2) return lines[l1].text.slice(from.ch, to.ch);
      var code = [lines[l1].text.slice(from.ch)];
      for (var i = l1 + 1; i < l2; ++i) code.push(lines[i].text);
      code.push(lines[l2].text.slice(0, to.ch));
      return code.join("\n");
    }
    function getSelection() {
      return getRange(sel.from, sel.to);
    }

    var pollingFast = false; // Ensures slowPoll doesn't cancel fastPoll
    function slowPoll() {
      if (pollingFast) return;
      poll.set(2000, function() {
        startOperation();
        readInput();
        if (focused) slowPoll();
        endOperation();
      });
    }
    function fastPoll(keyId) {
      var missed = false;
      pollingFast = true;
      function p() {
        startOperation();
        var changed = readInput();
        if (changed == "moved" && keyId) movementKeys[keyId] = true;
        if (!changed && !missed) {missed = true; poll.set(80, p);}
        else {pollingFast = false; slowPoll();}
        endOperation();
      }
      poll.set(20, p);
    }

    // Inspects the textarea, compares its state (content, selection)
    // to the data in the editing variable, and updates the editor
    // content or cursor if something changed.
    function readInput() {
      if (leaveInputAlone) return;
      var changed = false, text = input.value, sr = selRange(input);
      if (!sr) return false;
      var changed = editing.text != text, rs = reducedSelection;
      var moved = changed || sr.start != editing.start || sr.end != (rs ? editing.start : editing.end);
      if (!moved && !rs) return false;
      if (changed) {
        shiftSelecting = reducedSelection = null;
        if (options.readOnly) {updateInput = true; return "changed";}
      }

      // Compute selection start and end based on start/end offsets in textarea
      function computeOffset(n, startLine) {
        var pos = 0;
        for (;;) {
          var found = text.indexOf("\n", pos);
          if (found == -1 || (text.charAt(found-1) == "\r" ? found - 1 : found) >= n)
            return {line: startLine, ch: n - pos};
          ++startLine;
          pos = found + 1;
        }
      }
      var from = computeOffset(sr.start, editing.from),
          to = computeOffset(sr.end, editing.from);
      // Here we have to take the reducedSelection hack into account,
      // so that you can, for example, press shift-up at the start of
      // your selection and have the right thing happen.
      if (rs) {
        var head = sr.start == rs.anchor ? to : from;
        var tail = shiftSelecting ? sel.to : sr.start == rs.anchor ? from : to;
        if (sel.inverted = posLess(head, tail)) { from = head; to = tail; }
        else { reducedSelection = null; from = tail; to = head; }
      }

      // In some cases (cursor on same line as before), we don't have
      // to update the textarea content at all.
      if (from.line == to.line && from.line == sel.from.line && from.line == sel.to.line && !shiftSelecting)
        updateInput = false;

      // Magic mess to extract precise edited range from the changed
      // string.
      if (changed) {
        var start = 0, end = text.length, len = Math.min(end, editing.text.length);
        var c, line = editing.from, nl = -1;
        while (start < len && (c = text.charAt(start)) == editing.text.charAt(start)) {
          ++start;
          if (c == "\n") {line++; nl = start;}
        }
        var ch = nl > -1 ? start - nl : start, endline = editing.to - 1, edend = editing.text.length;
        for (;;) {
          c = editing.text.charAt(edend);
          if (text.charAt(end) != c) {++end; ++edend; break;}
          if (c == "\n") endline--;
          if (edend <= start || end <= start) break;
          --end; --edend;
        }
        var nl = editing.text.lastIndexOf("\n", edend - 1), endch = nl == -1 ? edend : edend - nl - 1;
        updateLines({line: line, ch: ch}, {line: endline, ch: endch}, splitLines(text.slice(start, end)), from, to);
        if (line != endline || from.line != line) updateInput = true;
      }
      else setSelection(from, to);

      editing.text = text; editing.start = sr.start; editing.end = sr.end;
      return changed ? "changed" : moved ? "moved" : false;
    }

    // Set the textarea content and selection range to match the
    // editor state.
    function prepareInput() {
      var text = [];
      var from = Math.max(0, sel.from.line - 1), to = Math.min(lines.length, sel.to.line + 2);
      for (var i = from; i < to; ++i) text.push(lines[i].text);
      text = input.value = text.join(lineSep);
      var startch = sel.from.ch, endch = sel.to.ch;
      for (var i = from; i < sel.from.line; ++i)
        startch += lineSep.length + lines[i].text.length;
      for (var i = from; i < sel.to.line; ++i)
        endch += lineSep.length + lines[i].text.length;
      editing = {text: text, from: from, to: to, start: startch, end: endch};
      setSelRange(input, startch, reducedSelection ? startch : endch);
    }
    function focusInput() {
      if (options.readOnly != "nocursor") input.focus();
    }

    function scrollCursorIntoView() {
      var cursor = localCoords(sel.inverted ? sel.from : sel.to);
      return scrollIntoView(cursor.x, cursor.y, cursor.x, cursor.yBot);
    }
    function scrollIntoView(x1, y1, x2, y2) {
      var pl = paddingLeft(), pt = paddingTop(), lh = lineHeight();
      y1 += pt; y2 += pt; x1 += pl; x2 += pl;
      var screen = scroller.clientHeight, screentop = scroller.scrollTop, scrolled = false, result = true;
      if (y1 < screentop) {scroller.scrollTop = Math.max(0, y1 - 2*lh); scrolled = true;}
      else if (y2 > screentop + screen) {scroller.scrollTop = y2 + lh - screen; scrolled = true;}

      var screenw = scroller.clientWidth, screenleft = scroller.scrollLeft;
      if (x1 < screenleft) {
        if (x1 < 50) x1 = 0;
        scroller.scrollLeft = Math.max(0, x1 - 10);
        scrolled = true;
      }
      else if (x2 > screenw + screenleft) {
        scroller.scrollLeft = x2 + 10 - screenw;
        scrolled = true;
        if (x2 > code.clientWidth) result = false;
      }
      if (scrolled && options.onScroll) options.onScroll(instance);
      return result;
    }

    function visibleLines() {
      var lh = lineHeight(), top = scroller.scrollTop - paddingTop();
      return {from: Math.min(lines.length, Math.max(0, Math.floor(top / lh))),
              to: Math.min(lines.length, Math.ceil((top + scroller.clientHeight) / lh))};
    }
    // Uses a set of changes plus the current scroll position to
    // determine which DOM updates have to be made, and makes the
    // updates.
    function updateDisplay(changes) {
      if (!scroller.clientWidth) {
        showingFrom = showingTo = 0;
        return;
      }
      // First create a range of theoretically intact lines, and punch
      // holes in that using the change info.
      var intact = changes === true ? [] : [{from: showingFrom, to: showingTo, domStart: 0}];
      for (var i = 0, l = changes.length || 0; i < l; ++i) {
        var change = changes[i], intact2 = [], diff = change.diff || 0;
        for (var j = 0, l2 = intact.length; j < l2; ++j) {
          var range = intact[j];
          if (change.to <= range.from)
            intact2.push({from: range.from + diff, to: range.to + diff, domStart: range.domStart});
          else if (range.to <= change.from)
            intact2.push(range);
          else {
            if (change.from > range.from)
              intact2.push({from: range.from, to: change.from, domStart: range.domStart})
            if (change.to < range.to)
              intact2.push({from: change.to + diff, to: range.to + diff,
                            domStart: range.domStart + (change.to - range.from)});
          }
        }
        intact = intact2;
      }

      // Then, determine which lines we'd want to see, and which
      // updates have to be made to get there.
      var visible = visibleLines();
      var from = Math.min(showingFrom, Math.max(visible.from - 3, 0)),
          to = Math.min(lines.length, Math.max(showingTo, visible.to + 3)),
          updates = [], domPos = 0, domEnd = showingTo - showingFrom, pos = from, changedLines = 0;

      for (var i = 0, l = intact.length; i < l; ++i) {
        var range = intact[i];
        if (range.to <= from) continue;
        if (range.from >= to) break;
        if (range.domStart > domPos || range.from > pos) {
          updates.push({from: pos, to: range.from, domSize: range.domStart - domPos, domStart: domPos});
          changedLines += range.from - pos;
        }
        pos = range.to;
        domPos = range.domStart + (range.to - range.from);
      }
      if (domPos != domEnd || pos != to) {
        changedLines += Math.abs(to - pos);
        updates.push({from: pos, to: to, domSize: domEnd - domPos, domStart: domPos});
      }

      if (!updates.length) return;
      lineDiv.style.display = "none";
      // If more than 30% of the screen needs update, just do a full
      // redraw (which is quicker than patching)
      if (changedLines > (visible.to - visible.from) * .3)
        refreshDisplay(from = Math.max(visible.from - 10, 0), to = Math.min(visible.to + 7, lines.length));
      // Otherwise, only update the stuff that needs updating.
      else
        patchDisplay(updates);
      lineDiv.style.display = "";

      // Position the mover div to align with the lines it's supposed
      // to be showing (which will cover the visible display)
      var different = from != showingFrom || to != showingTo || lastHeight != scroller.clientHeight;
      showingFrom = from; showingTo = to;
      mover.style.top = (from * lineHeight()) + "px";
      if (different) {
        lastHeight = scroller.clientHeight;
        code.style.height = (lines.length * lineHeight() + 2 * paddingTop()) + "px";
        updateGutter();
      }

      var textWidth = stringWidth(maxLine);
      lineSpace.style.width = textWidth > scroller.clientWidth ? textWidth + "px" : "";

      // Since this is all rather error prone, it is honoured with the
      // only assertion in the whole file.
      if (lineDiv.childNodes.length != showingTo - showingFrom)
        throw new Error("BAD PATCH! " + JSON.stringify(updates) + " size=" + (showingTo - showingFrom) +
                        " nodes=" + lineDiv.childNodes.length);
      updateCursor();
    }

    function refreshDisplay(from, to) {
      var html = [], start = {line: from, ch: 0}, inSel = posLess(sel.from, start) && !posLess(sel.to, start);
      for (var i = from; i < to; ++i) {
        var ch1 = null, ch2 = null;
        if (inSel) {
          ch1 = 0;
          if (sel.to.line == i) {inSel = false; ch2 = sel.to.ch;}
        }
        else if (sel.from.line == i) {
          if (sel.to.line == i) {ch1 = sel.from.ch; ch2 = sel.to.ch;}
          else {inSel = true; ch1 = sel.from.ch;}
        }
        html.push(lines[i].getHTML(ch1, ch2, true));
      }
      lineDiv.innerHTML = html.join("");
    }
    function patchDisplay(updates) {
      // Slightly different algorithm for IE (badInnerHTML), since
      // there .innerHTML on PRE nodes is dumb, and discards
      // whitespace.
      var sfrom = sel.from.line, sto = sel.to.line, off = 0,
          scratch = badInnerHTML && targetDocument.createElement("div");
      for (var i = 0, e = updates.length; i < e; ++i) {
        var rec = updates[i];
        var extra = (rec.to - rec.from) - rec.domSize;
        var nodeAfter = lineDiv.childNodes[rec.domStart + rec.domSize + off] || null;
        if (badInnerHTML)
          for (var j = Math.max(-extra, rec.domSize); j > 0; --j)
            lineDiv.removeChild(nodeAfter ? nodeAfter.previousSibling : lineDiv.lastChild);
        else if (extra) {
          for (var j = Math.max(0, extra); j > 0; --j)
            lineDiv.insertBefore(targetDocument.createElement("pre"), nodeAfter);
          for (var j = Math.max(0, -extra); j > 0; --j)
            lineDiv.removeChild(nodeAfter ? nodeAfter.previousSibling : lineDiv.lastChild);
        }
        var node = lineDiv.childNodes[rec.domStart + off], inSel = sfrom < rec.from && sto >= rec.from;
        for (var j = rec.from; j < rec.to; ++j) {
          var ch1 = null, ch2 = null;
          if (inSel) {
            ch1 = 0;
            if (sto == j) {inSel = false; ch2 = sel.to.ch;}
          }
          else if (sfrom == j) {
            if (sto == j) {ch1 = sel.from.ch; ch2 = sel.to.ch;}
            else {inSel = true; ch1 = sel.from.ch;}
          }
          if (badInnerHTML) {
            scratch.innerHTML = lines[j].getHTML(ch1, ch2, true);
            lineDiv.insertBefore(scratch.firstChild, nodeAfter);
          }
          else {
            node.innerHTML = lines[j].getHTML(ch1, ch2, false);
            node.className = lines[j].className || "";
            node = node.nextSibling;
          }
        }
        off += extra;
      }
    }

    function updateGutter() {
      if (!options.gutter && !options.lineNumbers) return;
      var hText = mover.offsetHeight, hEditor = scroller.clientHeight;
      gutter.style.height = (hText - hEditor < 2 ? hEditor : hText) + "px";
      var html = [];
      for (var i = showingFrom; i < Math.max(showingTo, showingFrom + 1); ++i) {
        var marker = lines[i].gutterMarker;
        var text = options.lineNumbers ? i + options.firstLineNumber : null;
        if (marker && marker.text)
          text = marker.text.replace("%N%", text != null ? text : "");
        else if (text == null)
          text = "\u00a0";
        html.push((marker && marker.style ? '<pre class="' + marker.style + '">' : "<pre>"), text, "</pre>");
      }
      gutter.style.display = "none";
      gutterText.innerHTML = html.join("");
      var minwidth = String(lines.length).length, firstNode = gutterText.firstChild, val = eltText(firstNode), pad = "";
      while (val.length + pad.length < minwidth) pad += "\u00a0";
      if (pad) firstNode.insertBefore(targetDocument.createTextNode(pad), firstNode.firstChild);
      gutter.style.display = "";
      lineSpace.style.marginLeft = gutter.offsetWidth + "px";
    }
    function updateCursor() {
      var head = sel.inverted ? sel.from : sel.to, lh = lineHeight();
      var x = charX(head.line, head.ch) + "px", y = (head.line - showingFrom) * lh + "px";
      inputDiv.style.top = (head.line * lh - scroller.scrollTop) + "px";
      if (posEq(sel.from, sel.to)) {
        cursor.style.top = y; cursor.style.left = x;
        cursor.style.display = "";
      }
      else cursor.style.display = "none";
    }

    function setSelectionUser(from, to) {
      var sh = shiftSelecting && clipPos(shiftSelecting);
      if (sh) {
        if (posLess(sh, from)) from = sh;
        else if (posLess(to, sh)) to = sh;
      }
      setSelection(from, to);
    }
    // Update the selection. Last two args are only used by
    // updateLines, since they have to be expressed in the line
    // numbers before the update.
    function setSelection(from, to, oldFrom, oldTo) {
      if (posEq(sel.from, from) && posEq(sel.to, to)) return;
      if (posLess(to, from)) {var tmp = to; to = from; from = tmp;}

      if (posEq(from, to)) sel.inverted = false;
      else if (posEq(from, sel.to)) sel.inverted = false;
      else if (posEq(to, sel.from)) sel.inverted = true;

      // Some ugly logic used to only mark the lines that actually did
      // see a change in selection as changed, rather than the whole
      // selected range.
      if (oldFrom == null) {oldFrom = sel.from.line; oldTo = sel.to.line;}
      if (posEq(from, to)) {
        if (!posEq(sel.from, sel.to))
          changes.push({from: oldFrom, to: oldTo + 1});
      }
      else if (posEq(sel.from, sel.to)) {
        changes.push({from: from.line, to: to.line + 1});
      }
      else {
        if (!posEq(from, sel.from)) {
          if (from.line < oldFrom)
            changes.push({from: from.line, to: Math.min(to.line, oldFrom) + 1});
          else
            changes.push({from: oldFrom, to: Math.min(oldTo, from.line) + 1});
        }
        if (!posEq(to, sel.to)) {
          if (to.line < oldTo)
            changes.push({from: Math.max(oldFrom, from.line), to: oldTo + 1});
          else
            changes.push({from: Math.max(from.line, oldTo), to: to.line + 1});
        }
      }
      sel.from = from; sel.to = to;
      selectionChanged = true;
    }
    function setCursor(line, ch, user) {
      var pos = clipPos({line: line, ch: ch || 0});
      (user ? setSelectionUser : setSelection)(pos, pos);
    }

    function clipLine(n) {return Math.max(0, Math.min(n, lines.length-1));}
    function clipPos(pos) {
      if (pos.line < 0) return {line: 0, ch: 0};
      if (pos.line >= lines.length) return {line: lines.length-1, ch: lines[lines.length-1].text.length};
      var ch = pos.ch, linelen = lines[pos.line].text.length;
      if (ch == null || ch > linelen) return {line: pos.line, ch: linelen};
      else if (ch < 0) return {line: pos.line, ch: 0};
      else return pos;
    }

    function scrollPage(down) {
      var linesPerPage = Math.floor(scroller.clientHeight / lineHeight()), head = sel.inverted ? sel.from : sel.to;
      setCursor(head.line + (Math.max(linesPerPage - 1, 1) * (down ? 1 : -1)), head.ch, true);
    }
    function scrollEnd(top) {
      var pos = top ? {line: 0, ch: 0} : {line: lines.length - 1, ch: lines[lines.length-1].text.length};
      setSelectionUser(pos, pos);
    }
    function selectAll() {
      var endLine = lines.length - 1;
      setSelection({line: 0, ch: 0}, {line: endLine, ch: lines[endLine].text.length});
    }
    function selectWordAt(pos) {
      var line = lines[pos.line].text;
      var start = pos.ch, end = pos.ch;
      while (start > 0 && /\w/.test(line.charAt(start - 1))) --start;
      while (end < line.length && /\w/.test(line.charAt(end))) ++end;
      setSelectionUser({line: pos.line, ch: start}, {line: pos.line, ch: end});
    }
    function selectLine(line) {
      setSelectionUser({line: line, ch: 0}, {line: line, ch: lines[line].text.length});
    }
    function handleEnter() {
      replaceSelection("\n", "end");
      if (options.enterMode != "flat")
        indentLine(sel.from.line, options.enterMode == "keep" ? "prev" : "smart");
    }
    function handleTab(shift) {
      shiftSelecting = null;
      switch (options.tabMode) {
      case "default":
        return false;
      case "indent":
        for (var i = sel.from.line, e = sel.to.line; i <= e; ++i) indentLine(i, "smart");
        break;
      case "classic":
        if (posEq(sel.from, sel.to)) {
          if (shift) indentLine(sel.from.line, "smart");
          else replaceSelection("\t", "end");
          break;
        }
      case "shift":
        for (var i = sel.from.line, e = sel.to.line; i <= e; ++i) indentLine(i, shift ? "subtract" : "add");
        break;
      }
      return true;
    }

    function indentLine(n, how) {
      if (how == "smart") {
        if (!mode.indent) how = "prev";
        else var state = getStateBefore(n);
      }

      var line = lines[n], curSpace = line.indentation(), curSpaceString = line.text.match(/^\s*/)[0], indentation;
      if (how == "prev") {
        if (n) indentation = lines[n-1].indentation();
        else indentation = 0;
      }
      else if (how == "smart") indentation = mode.indent(state, line.text.slice(curSpaceString.length));
      else if (how == "add") indentation = curSpace + options.indentUnit;
      else if (how == "subtract") indentation = curSpace - options.indentUnit;
      indentation = Math.max(0, indentation);
      var diff = indentation - curSpace;

      if (!diff) {
        if (sel.from.line != n && sel.to.line != n) return;
        var indentString = curSpaceString;
      }
      else {
        var indentString = "", pos = 0;
        if (options.indentWithTabs)
          for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
        while (pos < indentation) {++pos; indentString += " ";}
      }

      replaceRange(indentString, {line: n, ch: 0}, {line: n, ch: curSpaceString.length});
    }

    function loadMode() {
      mode = CodeMirror.getMode(options, options.mode);
      for (var i = 0, l = lines.length; i < l; ++i)
        lines[i].stateAfter = null;
      work = [0];
      startWorker();
    }
    function gutterChanged() {
      var visible = options.gutter || options.lineNumbers;
      gutter.style.display = visible ? "" : "none";
      if (visible) updateGutter();
      else lineDiv.parentNode.style.marginLeft = 0;
    }

    function markText(from, to, className) {
      from = clipPos(from); to = clipPos(to);
      var accum = [];
      function add(line, from, to, className) {
        var line = lines[line], mark = line.addMark(from, to, className);
        mark.line = line;
        accum.push(mark);
      }
      if (from.line == to.line) add(from.line, from.ch, to.ch, className);
      else {
        add(from.line, from.ch, null, className);
        for (var i = from.line + 1, e = to.line; i < e; ++i)
          add(i, 0, null, className);
        add(to.line, 0, to.ch, className);
      }
      changes.push({from: from.line, to: to.line + 1});
      return function() {
        var start, end;
        for (var i = 0; i < accum.length; ++i) {
          var mark = accum[i], found = indexOf(lines, mark.line);
          mark.line.removeMark(mark);
          if (found > -1) {
            if (start == null) start = found;
            end = found;
          }
        }
        if (start != null) changes.push({from: start, to: end + 1});
      };
    }

    function addGutterMarker(line, text, className) {
      if (typeof line == "number") line = lines[clipLine(line)];
      line.gutterMarker = {text: text, style: className};
      updateGutter();
      return line;
    }
    function removeGutterMarker(line) {
      if (typeof line == "number") line = lines[clipLine(line)];
      line.gutterMarker = null;
      updateGutter();
    }
    function setLineClass(line, className) {
      if (typeof line == "number") {
        var no = line;
        line = lines[clipLine(line)];
      }
      else {
        var no = indexOf(lines, line);
        if (no == -1) return null;
      }
      if (line.className != className) {
        line.className = className;
        changes.push({from: no, to: no + 1});
      }
      return line;
    }

    function lineInfo(line) {
      if (typeof line == "number") {
        var n = line;
        line = lines[line];
        if (!line) return null;
      }
      else {
        var n = indexOf(lines, line);
        if (n == -1) return null;
      }
      var marker = line.gutterMarker;
      return {line: n, text: line.text, markerText: marker && marker.text, markerClass: marker && marker.style};
    }

    function stringWidth(str) {
      measure.innerHTML = "<pre><span>x</span></pre>";
      measure.firstChild.firstChild.firstChild.nodeValue = str;
      return measure.firstChild.firstChild.offsetWidth || 10;
    }
    // These are used to go from pixel positions to character
    // positions, taking varying character widths into account.
    function charX(line, pos) {
      if (pos == 0) return 0;
      measure.innerHTML = "<pre><span>" + lines[line].getHTML(null, null, false, pos) + "</span></pre>";
      return measure.firstChild.firstChild.offsetWidth;
    }
    function charFromX(line, x) {
      if (x <= 0) return 0;
      var lineObj = lines[line], text = lineObj.text;
      function getX(len) {
        measure.innerHTML = "<pre><span>" + lineObj.getHTML(null, null, false, len) + "</span></pre>";
        return measure.firstChild.firstChild.offsetWidth;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil(x / stringWidth("x")));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return to;
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return (toX - x > x - fromX) ? from : to;
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }

    function localCoords(pos, inLineWrap) {
      var lh = lineHeight(), line = pos.line - (inLineWrap ? showingFrom : 0);
      return {x: charX(pos.line, pos.ch), y: line * lh, yBot: (line + 1) * lh};
    }
    function pageCoords(pos) {
      var local = localCoords(pos, true), off = eltOffset(lineSpace);
      return {x: off.left + local.x, y: off.top + local.y, yBot: off.top + local.yBot};
    }

    function lineHeight() {
      var nlines = lineDiv.childNodes.length;
      if (nlines) return (lineDiv.offsetHeight / nlines) || 1;
      measure.innerHTML = "<pre>x</pre>";
      return measure.firstChild.offsetHeight || 1;
    }
    function paddingTop() {return lineSpace.offsetTop;}
    function paddingLeft() {return lineSpace.offsetLeft;}

    function posFromMouse(e, liberal) {
      var offW = eltOffset(scroller, true), x = e.e.clientX, y = e.e.clientY;
      // This is a mess of a heuristic to try and determine whether a
      // scroll-bar was clicked or not, and to return null if one was
      // (and !liberal).
      if (!liberal && (x - offW.left > scroller.clientWidth || y - offW.top > scroller.clientHeight))
        return null;
      var offL = eltOffset(lineSpace, true);
      var line = showingFrom + Math.floor((y - offL.top) / lineHeight());
      return clipPos({line: line, ch: charFromX(clipLine(line), x - offL.left)});
    }
    function onContextMenu(e) {
      var pos = posFromMouse(e);
      if (!pos || window.opera) return; // Opera is difficult.
      if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to))
        setCursor(pos.line, pos.ch);

      var oldCSS = input.style.cssText;
      input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.pageY() - 1) +
        "px; left: " + (e.pageX() - 1) + "px; z-index: 1000; background: white; " +
        "border-width: 0; outline: none; overflow: hidden; opacity: .05;";
      var val = input.value = getSelection();
      focusInput();
      setSelRange(input, 0, input.value.length);
      leaveInputAlone = true;
      function rehide() {
        if (input.value != val) operation(replaceSelection)(input.value, "end");
        input.style.cssText = oldCSS;
        leaveInputAlone = false;
        prepareInput();
        slowPoll();
      }
      
      if (gecko) {
        e.stop()
        var mouseup = connect(window, "mouseup", function() {
          mouseup();
          setTimeout(rehide, 20);
        }, true);
      }
      else {
        setTimeout(rehide, 50);
      }
    }

    // Cursor-blinking
    function restartBlink() {
      clearInterval(blinker);
      var on = true;
      cursor.style.visibility = "";
      blinker = setInterval(function() {
        cursor.style.visibility = (on = !on) ? "" : "hidden";
      }, 650);
    }

    var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};
    function matchBrackets(autoclear) {
      var head = sel.inverted ? sel.from : sel.to, line = lines[head.line], pos = head.ch - 1;
      var match = (pos >= 0 && matching[line.text.charAt(pos)]) || matching[line.text.charAt(++pos)];
      if (!match) return;
      var ch = match.charAt(0), forward = match.charAt(1) == ">", d = forward ? 1 : -1, st = line.styles;
      for (var off = pos + 1, i = 0, e = st.length; i < e; i+=2)
        if ((off -= st[i].length) <= 0) {var style = st[i+1]; break;}

      var stack = [line.text.charAt(pos)], re = /[(){}[\]]/;
      function scan(line, from, to) {
        if (!line.text) return;
        var st = line.styles, pos = forward ? 0 : line.text.length - 1, cur;
        for (var i = forward ? 0 : st.length - 2, e = forward ? st.length : -2; i != e; i += 2*d) {
          var text = st[i];
          if (st[i+1] != null && st[i+1] != style) {pos += d * text.length; continue;}
          for (var j = forward ? 0 : text.length - 1, te = forward ? text.length : -1; j != te; j += d, pos+=d) {
            if (pos >= from && pos < to && re.test(cur = text.charAt(j))) {
              var match = matching[cur];
              if (match.charAt(1) == ">" == forward) stack.push(cur);
              else if (stack.pop() != match.charAt(0)) return {pos: pos, match: false};
              else if (!stack.length) return {pos: pos, match: true};
            }
          }
        }
      }
      for (var i = head.line, e = forward ? Math.min(i + 50, lines.length) : Math.max(-1, i - 50); i != e; i+=d) {
        var line = lines[i], first = i == head.line;
        var found = scan(line, first && forward ? pos + 1 : 0, first && !forward ? pos : line.text.length);
        if (found) {
          var style = found.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
          var one = markText({line: head.line, ch: pos}, {line: head.line, ch: pos+1}, style),
              two = markText({line: i, ch: found.pos}, {line: i, ch: found.pos + 1}, style);
          var clear = operation(function(){one(); two();});
          if (autoclear) setTimeout(clear, 800);
          else bracketHighlighted = clear;
          break;
        }
      }
    }

    // Finds the line to start with when starting a parse. Tries to
    // find a line with a stateAfter, so that it can start with a
    // valid state. If that fails, it returns the line with the
    // smallest indentation, which tends to need the least context to
    // parse correctly.
    function findStartLine(n) {
      var minindent, minline;
      for (var search = n, lim = n - 40; search > lim; --search) {
        if (search == 0) return 0;
        var line = lines[search-1];
        if (line.stateAfter) return search;
        var indented = line.indentation();
        if (minline == null || minindent > indented) {
          minline = search;
          minindent = indented;
        }
      }
      return minline;
    }
    function getStateBefore(n) {
      var start = findStartLine(n), state = start && lines[start-1].stateAfter;
      if (!state) state = startState(mode);
      else state = copyState(mode, state);
      for (var i = start; i < n; ++i) {
        var line = lines[i];
        line.highlight(mode, state);
        line.stateAfter = copyState(mode, state);
      }
      if (!lines[n].stateAfter) work.push(n);
      return state;
    }
    function highlightLines(start, end) {
      var state = getStateBefore(start);
      for (var i = start; i < end; ++i) {
        var line = lines[i];
        line.highlight(mode, state);
        line.stateAfter = copyState(mode, state);
      }
    }
    function highlightWorker() {
      var end = +new Date + options.workTime;
      var foundWork = work.length;
      while (work.length) {
        if (!lines[showingFrom].stateAfter) var task = showingFrom;
        else var task = work.pop();
        if (task >= lines.length) continue;
        var start = findStartLine(task), state = start && lines[start-1].stateAfter;
        if (state) state = copyState(mode, state);
        else state = startState(mode);

        var unchanged = 0;
        for (var i = start, l = lines.length; i < l; ++i) {
          var line = lines[i], hadState = line.stateAfter;
          if (+new Date > end) {
            work.push(i);
            startWorker(options.workDelay);
            changes.push({from: task, to: i});
            return;
          }
          var changed = line.highlight(mode, state);
          line.stateAfter = copyState(mode, state);
          if (changed || !hadState) unchanged = 0;
          else if (++unchanged > 3) break;
        }
        changes.push({from: task, to: i});
      }
      if (foundWork && options.onHighlightComplete)
        options.onHighlightComplete(instance);
    }
    function startWorker(time) {
      if (!work.length) return;
      highlight.set(time, operation(highlightWorker));
    }

    // Operations are used to wrap changes in such a way that each
    // change won't have to update the cursor and display (which would
    // be awkward, slow, and error-prone), but instead updates are
    // batched and then all combined and executed at once.
    function startOperation() {
      updateInput = null; changes = []; textChanged = selectionChanged = false;
    }
    function endOperation() {
      var reScroll = false;
      if (selectionChanged) reScroll = !scrollCursorIntoView();
      if (changes.length) updateDisplay(changes);
      else if (selectionChanged) updateCursor();
      if (reScroll) scrollCursorIntoView();
      if (selectionChanged) restartBlink();

      // updateInput can be set to a boolean value to force/prevent an
      // update.
      if (!leaveInputAlone && (updateInput === true || (updateInput !== false && selectionChanged)))
        prepareInput();

      if (selectionChanged && options.matchBrackets)
        setTimeout(operation(function() {
          if (bracketHighlighted) {bracketHighlighted(); bracketHighlighted = null;}
          matchBrackets(false);
        }), 20);
      var tc = textChanged; // textChanged can be reset by cursoractivity callback
      if (selectionChanged && options.onCursorActivity)
        options.onCursorActivity(instance);
      if (tc && options.onChange && instance)
        options.onChange(instance, tc);
    }
    var nestedOperation = 0;
    function operation(f) {
      return function() {
        if (!nestedOperation++) startOperation();
        try {var result = f.apply(this, arguments);}
        finally {if (!--nestedOperation) endOperation();}
        return result;
      };
    }

    function SearchCursor(query, pos, caseFold) {
      this.atOccurrence = false;
      if (caseFold == null) caseFold = typeof query == "string" && query == query.toLowerCase();

      if (pos && typeof pos == "object") pos = clipPos(pos);
      else pos = {line: 0, ch: 0};
      this.pos = {from: pos, to: pos};

      // The matches method is filled in based on the type of query.
      // It takes a position and a direction, and returns an object
      // describing the next occurrence of the query, or null if no
      // more matches were found.
      if (typeof query != "string") // Regexp match
        this.matches = function(reverse, pos) {
          if (reverse) {
            var line = lines[pos.line].text.slice(0, pos.ch), match = line.match(query), start = 0;
            while (match) {
              var ind = line.indexOf(match[0]);
              start += ind;
              line = line.slice(ind + 1);
              var newmatch = line.match(query);
              if (newmatch) match = newmatch;
              else break;
              start++;
            }
          }
          else {
            var line = lines[pos.line].text.slice(pos.ch), match = line.match(query),
                start = match && pos.ch + line.indexOf(match[0]);
          }
          if (match)
            return {from: {line: pos.line, ch: start},
                    to: {line: pos.line, ch: start + match[0].length},
                    match: match};
        };
      else { // String query
        if (caseFold) query = query.toLowerCase();
        var fold = caseFold ? function(str){return str.toLowerCase();} : function(str){return str;};
        var target = query.split("\n");
        // Different methods for single-line and multi-line queries
        if (target.length == 1)
          this.matches = function(reverse, pos) {
            var line = fold(lines[pos.line].text), len = query.length, match;
            if (reverse ? (pos.ch >= len && (match = line.lastIndexOf(query, pos.ch - len)) != -1)
                        : (match = line.indexOf(query, pos.ch)) != -1)
              return {from: {line: pos.line, ch: match},
                      to: {line: pos.line, ch: match + len}};
          };
        else
          this.matches = function(reverse, pos) {
            var ln = pos.line, idx = (reverse ? target.length - 1 : 0), match = target[idx], line = fold(lines[ln].text);
            var offsetA = (reverse ? line.indexOf(match) + match.length : line.lastIndexOf(match));
            if (reverse ? offsetA >= pos.ch || offsetA != match.length
                        : offsetA <= pos.ch || offsetA != line.length - match.length)
              return;
            for (;;) {
              if (reverse ? !ln : ln == lines.length - 1) return;
              line = fold(lines[ln += reverse ? -1 : 1].text);
              match = target[reverse ? --idx : ++idx];
              if (idx > 0 && idx < target.length - 1) {
                if (line != match) return;
                else continue;
              }
              var offsetB = (reverse ? line.lastIndexOf(match) : line.indexOf(match) + match.length);
              if (reverse ? offsetB != line.length - match.length : offsetB != match.length)
                return;
              var start = {line: pos.line, ch: offsetA}, end = {line: ln, ch: offsetB};
              return {from: reverse ? end : start, to: reverse ? start : end};
            }
          };
      }
    }

    SearchCursor.prototype = {
      findNext: function() {return this.find(false);},
      findPrevious: function() {return this.find(true);},

      find: function(reverse) {
        var self = this, pos = clipPos(reverse ? this.pos.from : this.pos.to);
        function savePosAndFail(line) {
          var pos = {line: line, ch: 0};
          self.pos = {from: pos, to: pos};
          self.atOccurrence = false;
          return false;
        }

        for (;;) {
          if (this.pos = this.matches(reverse, pos)) {
            this.atOccurrence = true;
            return this.pos.match || true;
          }
          if (reverse) {
            if (!pos.line) return savePosAndFail(0);
            pos = {line: pos.line-1, ch: lines[pos.line-1].text.length};
          }
          else {
            if (pos.line == lines.length - 1) return savePosAndFail(lines.length);
            pos = {line: pos.line+1, ch: 0};
          }
        }
      },

      from: function() {if (this.atOccurrence) return copyPos(this.pos.from);},
      to: function() {if (this.atOccurrence) return copyPos(this.pos.to);}
    };

    for (var ext in extensions)
      if (extensions.propertyIsEnumerable(ext) &&
          !instance.propertyIsEnumerable(ext))
        instance[ext] = extensions[ext];
    return instance;
  } // (end of function CodeMirror)

  // The default configuration options.
  CodeMirror.defaults = {
    value: "",
    mode: null,
    theme: "default",
    indentUnit: 2,
    indentWithTabs: false,
    tabMode: "classic",
    enterMode: "indent",
    electricChars: true,
    onKeyEvent: null,
    lineNumbers: false,
    gutter: false,
    firstLineNumber: 1,
    readOnly: false,
    onChange: null,
    onCursorActivity: null,
    onGutterClick: null,
    onHighlightComplete: null,
    onFocus: null, onBlur: null, onScroll: null,
    matchBrackets: false,
    workTime: 100,
    workDelay: 200,
    undoDepth: 40,
    tabindex: null,
    document: window.document
  };

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};
  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    modes[name] = mode;
  };
  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };
  CodeMirror.getMode = function(options, spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec))
      spec = mimeModes[spec];
    if (typeof spec == "string")
      var mname = spec, config = {};
    else if (spec != null)
      var mname = spec.name, config = spec;
    var mfactory = modes[mname];
    if (!mfactory) {
      if (window.console) console.warn("No mode " + mname + " found, falling back to plain text.");
      return CodeMirror.getMode(options, "text/plain");
    }
    return mfactory(options, config || {});
  }
  CodeMirror.listModes = function() {
    var list = [];
    for (var m in modes)
      if (modes.propertyIsEnumerable(m)) list.push(m);
    return list;
  };
  CodeMirror.listMIMEs = function() {
    var list = [];
    for (var m in mimeModes)
      if (mimeModes.propertyIsEnumerable(m)) list.push(m);
    return list;
  };

  var extensions = {};
  CodeMirror.defineExtension = function(name, func) {
    extensions[name] = func;
  };

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;

    function save() {textarea.value = instance.getValue();}
    if (textarea.form) {
      // Deplorable hack to make the submit method do the right thing.
      var rmSubmit = connect(textarea.form, "submit", save, true);
      if (typeof textarea.form.submit == "function") {
        var realSubmit = textarea.form.submit;
        function wrappedSubmit() {
          save();
          textarea.form.submit = realSubmit;
          textarea.form.submit();
          textarea.form.submit = wrappedSubmit;
        }
        textarea.form.submit = wrappedSubmit;
      }
    }

    textarea.style.display = "none";
    var instance = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    instance.save = save;
    instance.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(instance.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        rmSubmit();
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return instance;
  };

  // Utility functions for working with state. Exported because modes
  // sometimes need to do this.
  function copyState(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  }
  CodeMirror.startState = startState;
  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  }
  CodeMirror.copyState = copyState;

  // The character stream used by a mode's parser.
  function StringStream(string) {
    this.pos = this.start = 0;
    this.string = string;
  }
  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == 0;},
    peek: function() {return this.string.charAt(this.pos);},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.start;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {return countColumn(this.string, this.start);},
    indentation: function() {return countColumn(this.string);},
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}
        if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      }
      else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);}
  };
  CodeMirror.StringStream = StringStream;

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  function Line(text, styles) {
    this.styles = styles || [text, null];
    this.stateAfter = null;
    this.text = text;
    this.marked = this.gutterMarker = this.className = null;
  }
  Line.prototype = {
    // Replace a piece of a line, keeping the styles around it intact.
    replace: function(from, to, text) {
      var st = [], mk = this.marked;
      copyStyles(0, from, this.styles, st);
      if (text) st.push(text, null);
      copyStyles(to, this.text.length, this.styles, st);
      this.styles = st;
      this.text = this.text.slice(0, from) + text + this.text.slice(to);
      this.stateAfter = null;
      if (mk) {
        var diff = text.length - (to - from), end = this.text.length;
        function fix(n) {return n <= Math.min(to, to + diff) ? n : n + diff;}
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i], del = false;
          if (mark.from >= end) del = true;
          else {mark.from = fix(mark.from); if (mark.to != null) mark.to = fix(mark.to);}
          if (del || mark.from >= mark.to) {mk.splice(i, 1); i--;}
        }
      }
    },
    // Split a line in two, again keeping styles intact.
    split: function(pos, textBefore) {
      var st = [textBefore, null];
      copyStyles(pos, this.text.length, this.styles, st);
      return new Line(textBefore + this.text.slice(pos), st);
    },
    addMark: function(from, to, style) {
      var mk = this.marked, mark = {from: from, to: to, style: style};
      if (this.marked == null) this.marked = [];
      this.marked.push(mark);
      this.marked.sort(function(a, b){return a.from - b.from;});
      return mark;
    },
    removeMark: function(mark) {
      var mk = this.marked;
      if (!mk) return;
      for (var i = 0; i < mk.length; ++i)
        if (mk[i] == mark) {mk.splice(i, 1); break;}
    },
    // Run the given mode's parser over a line, update the styles
    // array, which contains alternating fragments of text and CSS
    // classes.
    highlight: function(mode, state) {
      var stream = new StringStream(this.text), st = this.styles, pos = 0;
      var changed = false, curWord = st[0], prevWord;
      if (this.text == "" && mode.blankLine) mode.blankLine(state);
      while (!stream.eol()) {
        var style = mode.token(stream, state);
        var substr = this.text.slice(stream.start, stream.pos);
        stream.start = stream.pos;
        if (pos && st[pos-1] == style)
          st[pos-2] += substr;
        else if (substr) {
          if (!changed && (st[pos+1] != style || (pos && st[pos-2] != prevWord))) changed = true;
          st[pos++] = substr; st[pos++] = style;
          prevWord = curWord; curWord = st[pos];
        }
        // Give up when line is ridiculously long
        if (stream.pos > 5000) {
          st[pos++] = this.text.slice(stream.pos); st[pos++] = null;
          break;
        }
      }
      if (st.length != pos) {st.length = pos; changed = true;}
      if (pos && st[pos-2] != prevWord) changed = true;
      // Short lines with simple highlights always count as changed,
      // because they are likely to highlight the same way in various
      // contexts.
      return changed || (st.length < 5 && this.text.length < 10);
    },
    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(mode, state, ch) {
      var txt = this.text, stream = new StringStream(txt);
      while (stream.pos < ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = mode.token(stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              className: style || null,
              state: state};
    },
    indentation: function() {return countColumn(this.text);},
    // Produces an HTML fragment for the line, taking selection,
    // marking, and highlighting into account.
    getHTML: function(sfrom, sto, includePre, endAt) {
      var html = [];
      if (includePre)
        html.push(this.className ? '<pre class="' + this.className + '">': "<pre>");
      function span(text, style) {
        if (!text) return;
        if (style) html.push('<span class="cm-', style, '">', htmlEscape(text), "</span>");
        else html.push(htmlEscape(text));
      }
      var st = this.styles, allText = this.text, marked = this.marked;
      if (sfrom == sto) sfrom = null;
      var len = allText.length;
      if (endAt != null) len = Math.min(endAt, len);

      if (!allText && endAt == null)
        span(" ", sfrom != null && sto == null ? "CodeMirror-selected" : null);
      else if (!marked && sfrom == null)
        for (var i = 0, ch = 0; ch < len; i+=2) {
          var str = st[i], l = str.length;
          if (ch + l > len) str = str.slice(0, len - ch);
          ch += l;
          span(str, st[i+1]);
        }
      else {
        var pos = 0, i = 0, text = "", style, sg = 0;
        var markpos = -1, mark = null;
        function nextMark() {
          if (marked) {
            markpos += 1;
            mark = (markpos < marked.length) ? marked[markpos] : null;
          }
        }
        nextMark();
        while (pos < len) {
          var upto = len;
          var extraStyle = "";
          if (sfrom != null) {
            if (sfrom > pos) upto = sfrom;
            else if (sto == null || sto > pos) {
              extraStyle = " CodeMirror-selected";
              if (sto != null) upto = Math.min(upto, sto);
            }
          }
          while (mark && mark.to != null && mark.to <= pos) nextMark();
          if (mark) {
            if (mark.from > pos) upto = Math.min(upto, mark.from);
            else {
              extraStyle += " " + mark.style;
              if (mark.to != null) upto = Math.min(upto, mark.to);
            }
          }
          for (;;) {
            var end = pos + text.length;
            var apliedStyle = style;
            if (extraStyle) apliedStyle = style ? style + extraStyle : extraStyle;
            span(end > upto ? text.slice(0, upto - pos) : text, apliedStyle);
            if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
            pos = end;
            text = st[i++]; style = st[i++];
          }
        }
        if (sfrom != null && sto == null) span(" ", "CodeMirror-selected");
      }
      if (includePre) html.push("</pre>");
      return html.join("");
    }
  };
  // Utility used by replace and split above
  function copyStyles(from, to, source, dest) {
    for (var i = 0, pos = 0, state = 0; pos < to; i+=2) {
      var part = source[i], end = pos + part.length;
      if (state == 0) {
        if (end > from) dest.push(part.slice(from - pos, Math.min(part.length, to - pos)), source[i+1]);
        if (end >= from) state = 1;
      }
      else if (state == 1) {
        if (end > to) dest.push(part.slice(0, to - pos), source[i+1]);
        else dest.push(part, source[i+1]);
      }
      pos = end;
    }
  }

  // The history object 'chunks' changes that are made close together
  // and at almost the same time into bigger undoable units.
  function History() {
    this.time = 0;
    this.done = []; this.undone = [];
  }
  History.prototype = {
    addChange: function(start, added, old) {
      this.undone.length = 0;
      var time = +new Date, last = this.done[this.done.length - 1];
      if (time - this.time > 400 || !last ||
          last.start > start + added || last.start + last.added < start - last.added + last.old.length)
        this.done.push({start: start, added: added, old: old});
      else {
        var oldoff = 0;
        if (start < last.start) {
          for (var i = last.start - start - 1; i >= 0; --i)
            last.old.unshift(old[i]);
          last.added += last.start - start;
          last.start = start;
        }
        else if (last.start < start) {
          oldoff = start - last.start;
          added += oldoff;
        }
        for (var i = last.added - oldoff, e = old.length; i < e; ++i)
          last.old.push(old[i]);
        if (last.added < added) last.added = added;
      }
      this.time = time;
    }
  };

  // Event stopping compatibility wrapper.
  function stopEvent() {
    if (this.preventDefault) {this.preventDefault(); this.stopPropagation();}
    else {this.returnValue = false; this.cancelBubble = true;}
  }
  // Ensure an event has a stop method.
  function addStop(event) {
    if (!event.stop) event.stop = stopEvent;
    return event;
  }

  // Event wrapper, exposing the few operations we need.
  function Event(orig) {this.e = orig;}
  Event.prototype = {
    stop: function() {stopEvent.call(this.e);},
    target: function() {return this.e.target || this.e.srcElement;},
    button: function() {
      if (this.e.which) return this.e.which;
      else if (this.e.button & 1) return 1;
      else if (this.e.button & 2) return 3;
      else if (this.e.button & 4) return 2;
    },
    pageX: function() {
      if (this.e.pageX != null) return this.e.pageX;
      var doc = this.target().ownerDocument;
      return this.e.clientX + doc.body.scrollLeft + doc.documentElement.scrollLeft;
    },
    pageY: function() {
      if (this.e.pageY != null) return this.e.pageY;
      var doc = this.target().ownerDocument;
      return this.e.clientY + doc.body.scrollTop + doc.documentElement.scrollTop;
    }
  };

  // Event handler registration. If disconnect is true, it'll return a
  // function that unregisters the handler.
  function connect(node, type, handler, disconnect) {
    function wrapHandler(event) {handler(new Event(event || window.event));}
    if (typeof node.addEventListener == "function") {
      node.addEventListener(type, wrapHandler, false);
      if (disconnect) return function() {node.removeEventListener(type, wrapHandler, false);};
    }
    else {
      node.attachEvent("on" + type, wrapHandler);
      if (disconnect) return function() {node.detachEvent("on" + type, wrapHandler);};
    }
  }

  function Delayed() {this.id = null;}
  Delayed.prototype = {set: function(ms, f) {clearTimeout(this.id); this.id = setTimeout(f, ms);}};

  // Some IE versions don't preserve whitespace when setting the
  // innerHTML of a PRE tag.
  var badInnerHTML = (function() {
    var pre = document.createElement("pre");
    pre.innerHTML = " "; return !pre.innerHTML;
  })();

  var gecko = /gecko\/\d{7}/i.test(navigator.userAgent);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);

  var lineSep = "\n";
  // Feature-detect whether newlines in textareas are converted to \r\n
  (function () {
    var te = document.createElement("textarea");
    te.value = "foo\nbar";
    if (te.value.indexOf("\r") > -1) lineSep = "\r\n";
  }());

  var tabSize = 8;
  var mac = /Mac/.test(navigator.platform);
  var movementKeys = {};
  for (var i = 35; i <= 40; ++i)
    movementKeys[i] = movementKeys["c" + i] = true;

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = 0, n = 0; i < end; ++i) {
      if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
      else ++n;
    }
    return n;
  }

  // Find the position of an element by following the offsetParent chain.
  // If screen==true, it returns screen (rather than page) coordinates.
  function eltOffset(node, screen) {
    var doc = node.ownerDocument.body;
    var x = 0, y = 0, hitDoc = false;
    for (var n = node; n; n = n.offsetParent) {
      x += n.offsetLeft; y += n.offsetTop;
      // Fixed-position elements don't have the document in their offset chain
      if (n == doc) hitDoc = true;
    }
    var e = screen && hitDoc ? null : doc;
    for (var n = node.parentNode; n != e; n = n.parentNode)
      if (n.scrollLeft != null) { x -= n.scrollLeft; y -= n.scrollTop;}
    return {left: x, top: y};
  }
  // Get a node's text content.
  function eltText(node) {
    return node.textContent || node.innerText || node.nodeValue || "";
  }

  // Operations on {line, ch} objects.
  function posEq(a, b) {return a.line == b.line && a.ch == b.ch;}
  function posLess(a, b) {return a.line < b.line || (a.line == b.line && a.ch < b.ch);}
  function copyPos(x) {return {line: x.line, ch: x.ch};}

  function htmlEscape(str) {
    return str.replace(/[<>&]/g, function(str) {
      return str == "&" ? "&amp;" : str == "<" ? "&lt;" : "&gt;";
    });
  }
  CodeMirror.htmlEscape = htmlEscape;

  // Used to position the cursor after an undo/redo by finding the
  // last edited character.
  function editEnd(from, to) {
    if (!to) return from ? from.length : 0;
    if (!from) return to.length;
    for (var i = from.length, j = to.length; i >= 0 && j >= 0; --i, --j)
      if (from.charAt(i) != to.charAt(j)) break;
    return j + 1;
  }

  function indexOf(collection, elt) {
    if (collection.indexOf) return collection.indexOf(elt);
    for (var i = 0, e = collection.length; i < e; ++i)
      if (collection[i] == elt) return i;
    return -1;
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  if ("\n\nb".split(/\n/).length != 3)
    var splitLines = function(string) {
      var pos = 0, nl, result = [];
      while ((nl = string.indexOf("\n", pos)) > -1) {
        result.push(string.slice(pos, string.charAt(nl-1) == "\r" ? nl - 1 : nl));
        pos = nl + 1;
      }
      result.push(string.slice(pos));
      return result;
    };
  else
    var splitLines = function(string){return string.split(/\r?\n/);};
  CodeMirror.splitLines = splitLines;

  // Sane model of finding and setting the selection in a textarea
  if (window.getSelection) {
    var selRange = function(te) {
      try {return {start: te.selectionStart, end: te.selectionEnd};}
      catch(e) {return null;}
    };
    if (safari)
      // On Safari, selection set with setSelectionRange are in a sort
      // of limbo wrt their anchor. If you press shift-left in them,
      // the anchor is put at the end, and the selection expanded to
      // the left. If you press shift-right, the anchor ends up at the
      // front. This is not what CodeMirror wants, so it does a
      // spurious modify() call to get out of limbo.
      var setSelRange = function(te, start, end) {
        if (start == end)
          te.setSelectionRange(start, end);
        else {
          te.setSelectionRange(start, end - 1);
          window.getSelection().modify("extend", "forward", "character");
        }
      };
    else
      var setSelRange = function(te, start, end) {
        try {te.setSelectionRange(start, end);}
        catch(e) {} // Fails on Firefox when textarea isn't part of the document
      };
  }
  // IE model. Don't ask.
  else {
    var selRange = function(te) {
      try {var range = te.ownerDocument.selection.createRange();}
      catch(e) {return null;}
      if (!range || range.parentElement() != te) return null;
      var val = te.value, len = val.length, localRange = te.createTextRange();
      localRange.moveToBookmark(range.getBookmark());
      var endRange = te.createTextRange();
      endRange.collapse(false);

      if (localRange.compareEndPoints("StartToEnd", endRange) > -1)
        return {start: len, end: len};

      var start = -localRange.moveStart("character", -len);
      for (var i = val.indexOf("\r"); i > -1 && i < start; i = val.indexOf("\r", i+1), start++) {}

      if (localRange.compareEndPoints("EndToEnd", endRange) > -1)
        return {start: start, end: len};

      var end = -localRange.moveEnd("character", -len);
      for (var i = val.indexOf("\r"); i > -1 && i < end; i = val.indexOf("\r", i+1), end++) {}
      return {start: start, end: end};
    };
    var setSelRange = function(te, start, end) {
      var range = te.createTextRange();
      range.collapse(true);
      var endrange = range.duplicate();
      var newlines = 0, txt = te.value;
      for (var pos = txt.indexOf("\n"); pos > -1 && pos < start; pos = txt.indexOf("\n", pos + 1))
        ++newlines;
      range.move("character", start - newlines);
      for (; pos > -1 && pos < end; pos = txt.indexOf("\n", pos + 1))
        ++newlines;
      endrange.move("character", end - newlines);
      range.setEndPoint("EndToEnd", endrange);
      range.select();
    };
  }

  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  return CodeMirror;
})();

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var jsonMode = parserConfig.json;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};
    return {
      "if": A, "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": C, "break": C, "continue": C, "new": C, "delete": C, "throw": C,
      "var": kw("var"), "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|]/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next == end && !escaped)
        return false;
      escaped = !escaped && next == "\\";
    }
    return escaped;
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }

  function jsTokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'")
      return chain(stream, state, jsTokenString(ch));
    else if (/[\[\]{}\(\),;\:\.]/.test(ch))
      return ret(ch);
    else if (ch == "0" && stream.eat(/x/i)) {
      stream.eatWhile(/[\da-f]/i);
      return ret("number", "atom");
    }      
    else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:\.\d*)?(?:e[+\-]?\d+)?/);
      return ret("number", "atom");
    }
    else if (ch == "/") {
      if (stream.eat("*")) {
        return chain(stream, state, jsTokenComment);
      }
      else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      }
      else if (state.reAllowed) {
        nextUntilUnescaped(stream, "/");
        stream.eatWhile(/[gimy]/); // 'y' is "sticky" option in Mozilla
        return ret("regexp", "string");
      }
      else {
        stream.eatWhile(isOperatorChar);
        return ret("operator", null, stream.current());
      }
    }
    else if (isOperatorChar.test(ch)) {
      stream.eatWhile(isOperatorChar);
      return ret("operator", null, stream.current());
    }
    else {
      stream.eatWhile(/[\w\$_]/);
      var word = stream.current(), known = keywords.propertyIsEnumerable(word) && keywords[word];
      return known ? ret(known.type, known.style, word) :
                     ret("variable", "variable", word);
    }
  }

  function jsTokenString(quote) {
    return function(stream, state) {
      if (!nextUntilUnescaped(stream, quote))
        state.tokenize = jsTokenBase;
      return ret("string", "string");
    };
  }

  function jsTokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc;
  
    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function register(varname) {
    var state = cx.state;
    if (state.context) {
      cx.marked = "def";
      for (var v = state.localVars; v; v = v.next)
        if (v.name == varname) return;
      state.localVars = {name: varname, next: state.localVars};
    }
  }

  // Combinators

  var defaultVars = {name: "this", next: {name: "arguments"}};
  function pushcontext() {
    if (!cx.state.context) cx.state.localVars = defaultVars;
    cx.state.context = {prev: cx.state.context, vars: cx.state.localVars};
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars;
    cx.state.context = cx.state.context.prev;
  }
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state;
      state.lexical = new JSLexical(state.indented, cx.stream.column(), type, null, state.lexical, info)
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    return function expecting(type) {
      if (type == wanted) return cont();
      else if (wanted == ";") return pass();
      else return cont(arguments.callee);
    };
  }

  function statement(type) {
    if (type == "var") return cont(pushlex("vardef"), vardef1, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), expression, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "{") return cont(pushlex("}"), block, poplex);
    if (type == ";") return cont();
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), expect("("), pushlex(")"), forspec1, expect(")"),
                                      poplex, statement, poplex);
    if (type == "variable") return cont(pushlex("stat"), maybelabel);
    if (type == "switch") return cont(pushlex("form"), expression, pushlex("}", "switch"), expect("{"),
                                         block, poplex, poplex);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, expect("("), funarg, expect(")"),
                                        statement, poplex, popcontext);
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function expression(type) {
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeoperator);
    if (type == "function") return cont(functiondef);
    if (type == "keyword c") return cont(expression);
    if (type == "(") return cont(pushlex(")"), expression, expect(")"), poplex, maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == "[") return cont(pushlex("]"), commasep(expression, "]"), poplex, maybeoperator);
    if (type == "{") return cont(pushlex("}"), commasep(objprop, "}"), poplex, maybeoperator);
    return cont();
  }
  function maybeoperator(type, value) {
    if (type == "operator" && /\+\+|--/.test(value)) return cont(maybeoperator);
    if (type == "operator") return cont(expression);
    if (type == ";") return;
    if (type == "(") return cont(pushlex(")"), commasep(expression, ")"), poplex, maybeoperator);
    if (type == ".") return cont(property, maybeoperator);
    if (type == "[") return cont(pushlex("]"), expression, expect("]"), poplex, maybeoperator);
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperator, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type) {
    if (type == "variable") cx.marked = "property";
    if (atomicTypes.hasOwnProperty(type)) return cont(expect(":"), expression);
  }
  function commasep(what, end) {
    function proceed(type) {
      if (type == ",") return cont(what, proceed);
      if (type == end) return cont();
      return cont(expect(end));
    }
    return function commaSeparated(type) {
      if (type == end) return cont();
      else return pass(what, proceed);
    };
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function vardef1(type, value) {
    if (type == "variable"){register(value); return cont(vardef2);}
    return cont();
  }
  function vardef2(type, value) {
    if (value == "=") return cont(expression, vardef2);
    if (type == ",") return cont(vardef1);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef1, forspec2);
    if (type == ";") return pass(forspec2);
    if (type == "variable") return cont(formaybein);
    return pass(forspec2);
  }
  function formaybein(type, value) {
    if (value == "in") return cont(expression);
    return cont(maybeoperator, forspec2);
  }
  function forspec2(type, value) {
    if (type == ";") return cont(forspec3);
    if (value == "in") return cont(expression);
    return cont(expression, expect(";"), forspec3);
  }
  function forspec3(type) {
    if (type != ")") cont(expression);
  }
  function functiondef(type, value) {
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushlex(")"), pushcontext, commasep(funarg, ")"), poplex, statement, popcontext);
  }
  function funarg(type, value) {
    if (type == "variable") {register(value); return cont();}
  }

  // Interface

  return {
    startState: function(basecolumn) {
      return {
        tokenize: jsTokenBase,
        reAllowed: true,
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: null,
        context: null,
        indented: 0
      };
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
      }
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.reAllowed = type == "operator" || type == "keyword c" || type.match(/^[\[{}\(,;:]$/);
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize != jsTokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical,
          type = lexical.type, closing = firstChar == type;
      if (type == "vardef") return lexical.indented + 4;
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "stat" || type == "form") return lexical.indented + indentUnit;
      else if (lexical.info == "switch" && !closing)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricChars: ":{}"
  };
});

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});

/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
(function(){var e=this,a=Object.prototype,g=a.toString,b=true,d={toString:1},c;if(typeof Ext==="undefined"){e.Ext={}}Ext.global=e;for(c in d){b=null}if(b){b=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"]}Ext.enumerables=b;Ext.apply=function(n,m,q){if(q){Ext.apply(n,q)}if(n&&m&&typeof m==="object"){var p,l,h;for(p in m){n[p]=m[p]}if(b){for(l=b.length;l--;){h=b[l];if(m.hasOwnProperty(h)){n[h]=m[h]}}}}return n};Ext.buildSettings=Ext.apply({baseCSSPrefix:"x-",scopeResetCSS:false},Ext.buildSettings||{});Ext.apply(Ext,{emptyFn:function(){},baseCSSPrefix:Ext.buildSettings.baseCSSPrefix,applyIf:function(i,h){var j;if(i){for(j in h){if(i[j]===undefined){i[j]=h[j]}}}return i},iterate:function(h,j,i){if(Ext.isEmpty(h)){return}if(i===undefined){i=h}if(Ext.isIterable(h)){Ext.Array.each.call(Ext.Array,h,j,i)}else{Ext.Object.each.call(Ext.Object,h,j,i)}}});Ext.apply(Ext,{extend:function(){var h=a.constructor,i=function(k){for(var j in k){if(!k.hasOwnProperty(j)){continue}this[j]=k[j]}};return function(j,p,m){if(Ext.isObject(p)){m=p;p=j;j=m.constructor!==h?m.constructor:function(){p.apply(this,arguments)}}var l=function(){},k,n=p.prototype;l.prototype=n;k=j.prototype=new l();k.constructor=j;j.superclass=n;if(n.constructor===h){n.constructor=p}j.override=function(q){Ext.override(j,q)};k.override=i;k.proto=k;j.override(m);j.extend=function(q){return Ext.extend(j,q)};return j}}(),override:function(h,i){if(h.prototype.$className){return h.override(i)}else{Ext.apply(h.prototype,i)}}});Ext.apply(Ext,{valueFrom:function(j,h,i){return Ext.isEmpty(j,i)?h:j},typeOf:function(i){if(i===null){return"null"}var h=typeof i;if(h==="undefined"||h==="string"||h==="number"||h==="boolean"){return h}var j=g.call(i);switch(j){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Boolean]":return"boolean";case"[object Number]":return"number";case"[object RegExp]":return"regexp"}if(h==="function"){return"function"}if(h==="object"){if(i.nodeType!==undefined){if(i.nodeType===3){return(/\S/).test(i.nodeValue)?"textnode":"whitespace"}else{return"element"}}return"object"}},isEmpty:function(h,i){return(h===null)||(h===undefined)||(!i?h==="":false)||(Ext.isArray(h)&&h.length===0)},isArray:("isArray" in Array)?Array.isArray:function(h){return g.call(h)==="[object Array]"},isDate:function(h){return g.call(h)==="[object Date]"},isObject:(g.call(null)==="[object Object]")?function(h){return h!==null&&h!==undefined&&g.call(h)==="[object Object]"&&h.ownerDocument===undefined}:function(h){return g.call(h)==="[object Object]"},isPrimitive:function(i){var h=typeof i;return h==="string"||h==="number"||h==="boolean"},isFunction:(typeof document!=="undefined"&&typeof document.getElementsByTagName("body")==="function")?function(h){return g.call(h)==="[object Function]"}:function(h){return typeof h==="function"},isNumber:function(h){return typeof h==="number"&&isFinite(h)},isNumeric:function(h){return !isNaN(parseFloat(h))&&isFinite(h)},isString:function(h){return typeof h==="string"},isBoolean:function(h){return typeof h==="boolean"},isElement:function(h){return h?h.nodeType===1:false},isTextNode:function(h){return h?h.nodeName==="#text":false},isDefined:function(h){return typeof h!=="undefined"},isIterable:function(h){return(h&&typeof h!=="string")?h.length!==undefined:false}});Ext.apply(Ext,{clone:function(q){if(q===null||q===undefined){return q}if(q.nodeType&&q.cloneNode){return q.cloneNode(true)}var p=g.call(q);if(p==="[object Date]"){return new Date(q.getTime())}var n,l,h,r,m;if(p==="[object Array]"){n=q.length;r=[];while(n--){r[n]=Ext.clone(q[n])}}else{if(p==="[object Object]"&&q.constructor===Object){r={};for(m in q){r[m]=Ext.clone(q[m])}if(b){for(l=b.length;l--;){h=b[l];r[h]=q[h]}}}}return r||q},getUniqueGlobalNamespace:function(){var j=this.uniqueGlobalNamespace;if(j===undefined){var h=0;do{j="ExtBox"+(++h)}while(Ext.global[j]!==undefined);Ext.global[j]=Ext;this.uniqueGlobalNamespace=j}return j},functionFactory:function(){var h=Array.prototype.slice.call(arguments);if(h.length>0){h[h.length-1]="var Ext=window."+this.getUniqueGlobalNamespace()+";"+h[h.length-1]}return Function.prototype.constructor.apply(Function.prototype,h)}});Ext.type=Ext.typeOf})();(function(){var a="4.0.5",b;Ext.Version=b=Ext.extend(Object,{constructor:function(c){var e,d;if(c instanceof b){return c}this.version=this.shortVersion=String(c).toLowerCase().replace(/_/g,".").replace(/[\-+]/g,"");d=this.version.search(/([^\d\.])/);if(d!==-1){this.release=this.version.substr(d,c.length);this.shortVersion=this.version.substr(0,d)}this.shortVersion=this.shortVersion.replace(/[^\d]/g,"");e=this.version.split(".");this.major=parseInt(e.shift()||0,10);this.minor=parseInt(e.shift()||0,10);this.patch=parseInt(e.shift()||0,10);this.build=parseInt(e.shift()||0,10);return this},toString:function(){return this.version},valueOf:function(){return this.version},getMajor:function(){return this.major||0},getMinor:function(){return this.minor||0},getPatch:function(){return this.patch||0},getBuild:function(){return this.build||0},getRelease:function(){return this.release||""},isGreaterThan:function(c){return b.compare(this.version,c)===1},isLessThan:function(c){return b.compare(this.version,c)===-1},equals:function(c){return b.compare(this.version,c)===0},match:function(c){c=String(c);return this.version.substr(0,c.length)===c},toArray:function(){return[this.getMajor(),this.getMinor(),this.getPatch(),this.getBuild(),this.getRelease()]},getShortVersion:function(){return this.shortVersion}});Ext.apply(b,{releaseValueMap:{dev:-6,alpha:-5,a:-5,beta:-4,b:-4,rc:-3,"#":-2,p:-1,pl:-1},getComponentValue:function(c){return !c?0:(isNaN(c)?this.releaseValueMap[c]||c:parseInt(c,10))},compare:function(h,g){var d,e,c;h=new b(h).toArray();g=new b(g).toArray();for(c=0;c<Math.max(h.length,g.length);c++){d=this.getComponentValue(h[c]);e=this.getComponentValue(g[c]);if(d<e){return -1}else{if(d>e){return 1}}}return 0}});Ext.apply(Ext,{versions:{},lastRegisteredVersion:null,setVersion:function(d,c){Ext.versions[d]=new b(c);Ext.lastRegisteredVersion=Ext.versions[d];return this},getVersion:function(c){if(c===undefined){return Ext.lastRegisteredVersion}return Ext.versions[c]},deprecate:function(c,e,g,d){if(b.compare(Ext.getVersion(c),e)<1){g.call(d)}}});Ext.setVersion("core",a)})();Ext.String={trimRegex:/^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,escapeRe:/('|\\)/g,formatRe:/\{(\d+)\}/g,escapeRegexRe:/([-.*+?^${}()|[\]\/\\])/g,htmlEncode:(function(){var d={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;"},b=[],c,a;for(c in d){b.push(c)}a=new RegExp("("+b.join("|")+")","g");return function(e){return(!e)?e:String(e).replace(a,function(h,g){return d[g]})}})(),htmlDecode:(function(){var d={"&amp;":"&","&gt;":">","&lt;":"<","&quot;":'"'},b=[],c,a;for(c in d){b.push(c)}a=new RegExp("("+b.join("|")+"|&#[0-9]{1,5};)","g");return function(e){return(!e)?e:String(e).replace(a,function(h,g){if(g in d){return d[g]}else{return String.fromCharCode(parseInt(g.substr(2),10))}})}})(),urlAppend:function(b,a){if(!Ext.isEmpty(a)){return b+(b.indexOf("?")===-1?"?":"&")+a}return b},trim:function(a){return a.replace(Ext.String.trimRegex,"")},capitalize:function(a){return a.charAt(0).toUpperCase()+a.substr(1)},ellipsis:function(c,a,d){if(c&&c.length>a){if(d){var e=c.substr(0,a-2),b=Math.max(e.lastIndexOf(" "),e.lastIndexOf("."),e.lastIndexOf("!"),e.lastIndexOf("?"));if(b!==-1&&b>=(a-15)){return e.substr(0,b)+"..."}}return c.substr(0,a-3)+"..."}return c},escapeRegex:function(a){return a.replace(Ext.String.escapeRegexRe,"\\$1")},escape:function(a){return a.replace(Ext.String.escapeRe,"\\$1")},toggle:function(b,c,a){return b===c?a:c},leftPad:function(b,c,d){var a=String(b);d=d||" ";while(a.length<c){a=d+a}return a},format:function(b){var a=Ext.Array.toArray(arguments,1);return b.replace(Ext.String.formatRe,function(c,d){return a[d]})},repeat:function(e,d,b){for(var a=[],c=d;c--;){a.push(e)}return a.join(b||"")}};(function(){var a=(0.9).toFixed()!=="1";Ext.Number={constrain:function(d,c,b){d=parseFloat(d);if(!isNaN(c)){d=Math.max(d,c)}if(!isNaN(b)){d=Math.min(d,b)}return d},snap:function(e,c,d,h){var g=e,b;if(!(c&&e)){return e}b=e%c;if(b!==0){g-=b;if(b*2>=c){g+=c}else{if(b*2<-c){g-=c}}}return Ext.Number.constrain(g,d,h)},toFixed:function(d,b){if(a){b=b||0;var c=Math.pow(10,b);return(Math.round(d*c)/c).toFixed(b)}return d.toFixed(b)},from:function(c,b){if(isFinite(c)){c=parseFloat(c)}return !isNaN(c)?c:b}}})();Ext.num=function(){return Ext.Number.from.apply(this,arguments)};(function(){var g=Array.prototype,p=g.slice,r=function(){var B=[],e,A=20;if(!B.splice){return false}while(A--){B.push("A")}B.splice(15,0,"F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F");e=B.length;B.splice(13,0,"XXX");if(e+1!=B.length){return false}return true}(),j="forEach" in g,v="map" in g,q="indexOf" in g,z="every" in g,c="some" in g,d="filter" in g,n=function(){var e=[1,2,3,4,5].sort(function(){return 0});return e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4&&e[4]===5}(),k=true,a;try{if(typeof document!=="undefined"){p.call(document.getElementsByTagName("body"))}}catch(t){k=false}function m(A,e){return(e<0)?Math.max(0,A.length+e):Math.min(A.length,e)}function y(H,G,A,K){var L=K?K.length:0,C=H.length,I=m(H,G);if(I===C){if(L){H.push.apply(H,K)}}else{var F=Math.min(A,C-I),J=I+F,B=J+L-F,e=C-J,D=C-F,E;if(B<J){for(E=0;E<e;++E){H[B+E]=H[J+E]}}else{if(B>J){for(E=e;E--;){H[B+E]=H[J+E]}}}if(L&&I===D){H.length=D;H.push.apply(H,K)}else{H.length=D+L;for(E=0;E<L;++E){H[I+E]=K[E]}}}return H}function i(C,e,B,A){if(A&&A.length){if(e<C.length){C.splice.apply(C,[e,B].concat(A))}else{C.push.apply(C,A)}}else{C.splice(e,B)}return C}function b(B,e,A){return y(B,e,A)}function s(B,e,A){B.splice(e,A);return B}function l(D,e,B){var C=m(D,e),A=D.slice(e,m(D,C+B));if(arguments.length<4){y(D,C,B)}else{y(D,C,B,p.call(arguments,3))}return A}function h(e){return e.splice.apply(e,p.call(arguments,1))}var x=r?s:b,u=r?i:y,w=r?h:l;a=Ext.Array={each:function(E,C,B,e){E=a.from(E);var A,D=E.length;if(e!==true){for(A=0;A<D;A++){if(C.call(B||E[A],E[A],A,E)===false){return A}}}else{for(A=D-1;A>-1;A--){if(C.call(B||E[A],E[A],A,E)===false){return A}}}return true},forEach:function(D,B,A){if(j){return D.forEach(B,A)}var e=0,C=D.length;for(;e<C;e++){B.call(A,D[e],e,D)}},indexOf:function(D,B,C){if(q){return D.indexOf(B,C)}var e,A=D.length;for(e=(C<0)?Math.max(0,A+C):C||0;e<A;e++){if(D[e]===B){return e}}return -1},contains:function(C,B){if(q){return C.indexOf(B)!==-1}var e,A;for(e=0,A=C.length;e<A;e++){if(C[e]===B){return true}}return false},toArray:function(B,D,e){if(!B||!B.length){return[]}if(typeof B==="string"){B=B.split("")}if(k){return p.call(B,D||0,e||B.length)}var C=[],A;D=D||0;e=e?((e<0)?B.length+e:e):B.length;for(A=D;A<e;A++){C.push(B[A])}return C},pluck:function(E,e){var A=[],B,D,C;for(B=0,D=E.length;B<D;B++){C=E[B];A.push(C[e])}return A},map:function(E,D,C){if(v){return E.map(D,C)}var B=[],A=0,e=E.length;for(;A<e;A++){B[A]=D.call(C,E[A],A,E)}return B},every:function(D,B,A){if(z){return D.every(B,A)}var e=0,C=D.length;for(;e<C;++e){if(!B.call(A,D[e],e,D)){return false}}return true},some:function(D,B,A){if(c){return D.some(B,A)}var e=0,C=D.length;for(;e<C;++e){if(B.call(A,D[e],e,D)){return true}}return false},clean:function(D){var A=[],e=0,C=D.length,B;for(;e<C;e++){B=D[e];if(!Ext.isEmpty(B)){A.push(B)}}return A},unique:function(D){var C=[],e=0,B=D.length,A;for(;e<B;e++){A=D[e];if(a.indexOf(C,A)===-1){C.push(A)}}return C},filter:function(E,C,B){if(d){return E.filter(C,B)}var A=[],e=0,D=E.length;for(;e<D;e++){if(C.call(B,E[e],e,E)){A.push(E[e])}}return A},from:function(A,e){if(A===undefined||A===null){return[]}if(Ext.isArray(A)){return(e)?p.call(A):A}if(A&&A.length!==undefined&&typeof A!=="string"){return Ext.toArray(A)}return[A]},remove:function(B,A){var e=a.indexOf(B,A);if(e!==-1){x(B,e,1)}return B},include:function(A,e){if(!a.contains(A,e)){A.push(e)}},clone:function(e){return p.call(e)},merge:function(){var e=p.call(arguments),C=[],A,B;for(A=0,B=e.length;A<B;A++){C=C.concat(e[A])}return a.unique(C)},intersect:function(){var B=[],e=p.call(arguments),F,D,C,H,I,L,K,J,A,E;if(!e.length){return B}for(F=L=0,J=e.length;F<J,I=e[F];F++){if(!H||I.length<H.length){H=I;L=F}}H=a.unique(H);x(e,L,1);for(F=0,J=H.length;F<J,L=H[F];F++){var G=0;for(D=0,A=e.length;D<A,I=e[D];D++){for(C=0,E=I.length;C<E,K=I[C];C++){if(L===K){G++;break}}}if(G===A){B.push(L)}}return B},difference:function(A,e){var F=p.call(A),D=F.length,C,B,E;for(C=0,E=e.length;C<E;C++){for(B=0;B<D;B++){if(F[B]===e[C]){x(F,B,1);B--;D--}}}return F},slice:function(B,A,e){return p.call(B,A,e)},sort:function(G,F){if(n){if(F){return G.sort(F)}else{return G.sort()}}var D=G.length,C=0,E,e,B,A;for(;C<D;C++){B=C;for(e=C+1;e<D;e++){if(F){E=F(G[e],G[B]);if(E<0){B=e}}else{if(G[e]<G[B]){B=e}}}if(B!==C){A=G[C];G[C]=G[B];G[B]=A}}return G},flatten:function(B){var A=[];function e(C){var E,F,D;for(E=0,F=C.length;E<F;E++){D=C[E];if(Ext.isArray(D)){e(D)}else{A.push(D)}}return A}return e(B)},min:function(E,D){var A=E[0],e,C,B;for(e=0,C=E.length;e<C;e++){B=E[e];if(D){if(D(A,B)===1){A=B}}else{if(B<A){A=B}}}return A},max:function(E,D){var e=E[0],A,C,B;for(A=0,C=E.length;A<C;A++){B=E[A];if(D){if(D(e,B)===-1){e=B}}else{if(B>e){e=B}}}return e},mean:function(e){return e.length>0?a.sum(e)/e.length:undefined},sum:function(D){var A=0,e,C,B;for(e=0,C=D.length;e<C;e++){B=D[e];A+=B}return A},erase:x,insert:function(B,A,e){return u(B,A,0,e)},replace:u,splice:w};Ext.each=a.each;a.union=a.merge;Ext.min=a.min;Ext.max=a.max;Ext.sum=a.sum;Ext.mean=a.mean;Ext.flatten=a.flatten;Ext.clean=a.clean;Ext.unique=a.unique;Ext.pluck=a.pluck;Ext.toArray=function(){return a.toArray.apply(a,arguments)}})();Ext.Function={flexSetter:function(a){return function(d,c){var e,g;if(d===null){return this}if(typeof d!=="string"){for(e in d){if(d.hasOwnProperty(e)){a.call(this,e,d[e])}}if(Ext.enumerables){for(g=Ext.enumerables.length;g--;){e=Ext.enumerables[g];if(d.hasOwnProperty(e)){a.call(this,e,d[e])}}}}else{a.call(this,d,c)}return this}},bind:function(d,c,b,a){var g=d,e=Array.prototype.slice;return function(){var h=b||arguments;if(a===true){h=e.call(arguments,0);h=h.concat(b)}else{if(Ext.isNumber(a)){h=e.call(arguments,0);Ext.Array.insert(h,a,b)}}return g.apply(c||window,h)}},pass:function(c,a,b){if(a){a=Ext.Array.from(a)}return function(){return c.apply(b,a.concat(Ext.Array.toArray(arguments)))}},alias:function(b,a){return function(){return b[a].apply(b,arguments)}},createInterceptor:function(d,c,b,a){var e=d;if(!Ext.isFunction(c)){return d}else{return function(){var h=this,g=arguments;c.target=h;c.method=d;return(c.apply(b||h||window,g)!==false)?d.apply(h||window,g):a||null}}},createDelayed:function(e,c,d,b,a){if(d||b){e=Ext.Function.bind(e,d,b,a)}return function(){var g=this;setTimeout(function(){e.apply(g,arguments)},c)}},defer:function(d,c,e,b,a){d=Ext.Function.bind(d,e,b,a);if(c>0){return setTimeout(d,c)}d();return 0},createSequence:function(c,b,a){if(!Ext.isFunction(b)){return c}else{return function(){var d=c.apply(this||window,arguments);b.apply(a||this||window,arguments);return d}}},createBuffered:function(d,a,c,b){return function(){var e;return function(){var g=this;if(e){clearInterval(e);e=null}e=setTimeout(function(){d.apply(c||g,b||arguments)},a)}}()},createThrottled:function(e,b,d){var g,a,c,i,h=function(){e.apply(d||this,c);g=new Date().getTime()};return function(){a=new Date().getTime()-g;c=arguments;clearTimeout(i);if(!g||(a>=b)){h()}else{i=setTimeout(h,b-a)}}}};Ext.defer=Ext.Function.alias(Ext.Function,"defer");Ext.pass=Ext.Function.alias(Ext.Function,"pass");Ext.bind=Ext.Function.alias(Ext.Function,"bind");(function(){var a=Ext.Object={toQueryObjects:function(d,j,c){var b=a.toQueryObjects,h=[],e,g;if(Ext.isArray(j)){for(e=0,g=j.length;e<g;e++){if(c){h=h.concat(b(d+"["+e+"]",j[e],true))}else{h.push({name:d,value:j[e]})}}}else{if(Ext.isObject(j)){for(e in j){if(j.hasOwnProperty(e)){if(c){h=h.concat(b(d+"["+e+"]",j[e],true))}else{h.push({name:d,value:j[e]})}}}}else{h.push({name:d,value:j})}}return h},toQueryString:function(e,c){var g=[],d=[],k,h,l,b,m;for(k in e){if(e.hasOwnProperty(k)){g=g.concat(a.toQueryObjects(k,e[k],c))}}for(h=0,l=g.length;h<l;h++){b=g[h];m=b.value;if(Ext.isEmpty(m)){m=""}else{if(Ext.isDate(m)){m=Ext.Date.toString(m)}}d.push(encodeURIComponent(b.name)+"="+encodeURIComponent(String(m)))}return d.join("&")},fromQueryString:function(c,r){var l=c.replace(/^\?/,"").split("&"),u={},s,h,w,m,q,e,n,p,b,g,t,k,v,d;for(q=0,e=l.length;q<e;q++){n=l[q];if(n.length>0){h=n.split("=");w=decodeURIComponent(h[0]);m=(h[1]!==undefined)?decodeURIComponent(h[1]):"";if(!r){if(u.hasOwnProperty(w)){if(!Ext.isArray(u[w])){u[w]=[u[w]]}u[w].push(m)}else{u[w]=m}}else{g=w.match(/(\[):?([^\]]*)\]/g);t=w.match(/^([^\[]+)/);w=t[0];k=[];if(g===null){u[w]=m;continue}for(p=0,b=g.length;p<b;p++){v=g[p];v=(v.length===2)?"":v.substring(1,v.length-1);k.push(v)}k.unshift(w);s=u;for(p=0,b=k.length;p<b;p++){v=k[p];if(p===b-1){if(Ext.isArray(s)&&v===""){s.push(m)}else{s[v]=m}}else{if(s[v]===undefined||typeof s[v]==="string"){d=k[p+1];s[v]=(Ext.isNumeric(d)||d==="")?[]:{}}s=s[v]}}}}}return u},each:function(b,d,c){for(var e in b){if(b.hasOwnProperty(e)){if(d.call(c||b,e,b[e],b)===false){return}}}},merge:function(j,d,h){if(typeof d==="string"){if(h&&h.constructor===Object){if(j[d]&&j[d].constructor===Object){a.merge(j[d],h)}else{j[d]=Ext.clone(h)}}else{j[d]=h}return j}var c=1,e=arguments.length,b,g;for(;c<e;c++){b=arguments[c];for(g in b){if(b.hasOwnProperty(g)){a.merge(j,g,b[g])}}}return j},getKey:function(b,d){for(var c in b){if(b.hasOwnProperty(c)&&b[c]===d){return c}}return null},getValues:function(c){var b=[],d;for(d in c){if(c.hasOwnProperty(d)){b.push(c[d])}}return b},getKeys:("keys" in Object.prototype)?Object.keys:function(b){var c=[],d;for(d in b){if(b.hasOwnProperty(d)){c.push(d)}}return c},getSize:function(b){var c=0,d;for(d in b){if(b.hasOwnProperty(d)){c++}}return c}};Ext.merge=Ext.Object.merge;Ext.urlEncode=function(){var b=Ext.Array.from(arguments),c="";if((typeof b[1]==="string")){c=b[1]+"&";b[1]=false}return c+Ext.Object.toQueryString.apply(Ext.Object,b)};Ext.urlDecode=function(){return Ext.Object.fromQueryString.apply(Ext.Object,arguments)}})();(function(){function b(d){var c=Array.prototype.slice.call(arguments,1);return d.replace(/\{(\d+)\}/g,function(e,g){return c[g]})}Ext.Date={now:Date.now||function(){return +new Date()},toString:function(c){var d=Ext.String.leftPad;return c.getFullYear()+"-"+d(c.getMonth()+1,2,"0")+"-"+d(c.getDate(),2,"0")+"T"+d(c.getHours(),2,"0")+":"+d(c.getMinutes(),2,"0")+":"+d(c.getSeconds(),2,"0")},getElapsed:function(d,c){return Math.abs(d-(c||new Date()))},useStrict:false,formatCodeToRegex:function(d,c){var e=a.parseCodes[d];if(e){e=typeof e=="function"?e():e;a.parseCodes[d]=e}return e?Ext.applyIf({c:e.c?b(e.c,c||"{0}"):e.c},e):{g:0,c:null,s:Ext.String.escapeRegex(d)}},parseFunctions:{MS:function(d,c){var e=new RegExp("\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/");var g=(d||"").match(e);return g?new Date(((g[1]||"")+g[2])*1):null}},parseRegexes:[],formatFunctions:{MS:function(){return"\\/Date("+this.getTime()+")\\/"}},y2kYear:50,MILLI:"ms",SECOND:"s",MINUTE:"mi",HOUR:"h",DAY:"d",MONTH:"mo",YEAR:"y",defaults:{},dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNumbers:{Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},defaultFormat:"m/d/Y",getShortMonthName:function(c){return a.monthNames[c].substring(0,3)},getShortDayName:function(c){return a.dayNames[c].substring(0,3)},getMonthNumber:function(c){return a.monthNumbers[c.substring(0,1).toUpperCase()+c.substring(1,3).toLowerCase()]},formatContainsHourInfo:(function(){var d=/(\\.)/g,c=/([gGhHisucUOPZ]|MS)/;return function(e){return c.test(e.replace(d,""))}})(),formatContainsDateInfo:(function(){var d=/(\\.)/g,c=/([djzmnYycU]|MS)/;return function(e){return c.test(e.replace(d,""))}})(),formatCodes:{d:"Ext.String.leftPad(this.getDate(), 2, '0')",D:"Ext.Date.getShortDayName(this.getDay())",j:"this.getDate()",l:"Ext.Date.dayNames[this.getDay()]",N:"(this.getDay() ? this.getDay() : 7)",S:"Ext.Date.getSuffix(this)",w:"this.getDay()",z:"Ext.Date.getDayOfYear(this)",W:"Ext.String.leftPad(Ext.Date.getWeekOfYear(this), 2, '0')",F:"Ext.Date.monthNames[this.getMonth()]",m:"Ext.String.leftPad(this.getMonth() + 1, 2, '0')",M:"Ext.Date.getShortMonthName(this.getMonth())",n:"(this.getMonth() + 1)",t:"Ext.Date.getDaysInMonth(this)",L:"(Ext.Date.isLeapYear(this) ? 1 : 0)",o:"(this.getFullYear() + (Ext.Date.getWeekOfYear(this) == 1 && this.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(this) >= 52 && this.getMonth() < 11 ? -1 : 0)))",Y:"Ext.String.leftPad(this.getFullYear(), 4, '0')",y:"('' + this.getFullYear()).substring(2, 4)",a:"(this.getHours() < 12 ? 'am' : 'pm')",A:"(this.getHours() < 12 ? 'AM' : 'PM')",g:"((this.getHours() % 12) ? this.getHours() % 12 : 12)",G:"this.getHours()",h:"Ext.String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')",H:"Ext.String.leftPad(this.getHours(), 2, '0')",i:"Ext.String.leftPad(this.getMinutes(), 2, '0')",s:"Ext.String.leftPad(this.getSeconds(), 2, '0')",u:"Ext.String.leftPad(this.getMilliseconds(), 3, '0')",O:"Ext.Date.getGMTOffset(this)",P:"Ext.Date.getGMTOffset(this, true)",T:"Ext.Date.getTimezone(this)",Z:"(this.getTimezoneOffset() * -60)",c:function(){for(var k="Y-m-dTH:i:sP",h=[],g=0,d=k.length;g<d;++g){var j=k.charAt(g);h.push(j=="T"?"'T'":a.getFormatCode(j))}return h.join(" + ")},U:"Math.round(this.getTime() / 1000)"},isValid:function(p,c,n,k,g,j,e){k=k||0;g=g||0;j=j||0;e=e||0;var l=a.add(new Date(p<100?100:p,c-1,n,k,g,j,e),a.YEAR,p<100?p-100:0);return p==l.getFullYear()&&c==l.getMonth()+1&&n==l.getDate()&&k==l.getHours()&&g==l.getMinutes()&&j==l.getSeconds()&&e==l.getMilliseconds()},parse:function(d,g,c){var e=a.parseFunctions;if(e[g]==null){a.createParser(g)}return e[g](d,Ext.isDefined(c)?c:a.useStrict)},parseDate:function(d,e,c){return a.parse(d,e,c)},getFormatCode:function(d){var c=a.formatCodes[d];if(c){c=typeof c=="function"?c():c;a.formatCodes[d]=c}return c||("'"+Ext.String.escape(d)+"'")},createFormat:function(h){var g=[],c=false,e="";for(var d=0;d<h.length;++d){e=h.charAt(d);if(!c&&e=="\\"){c=true}else{if(c){c=false;g.push("'"+Ext.String.escape(e)+"'")}else{g.push(a.getFormatCode(e))}}}a.formatFunctions[h]=Ext.functionFactory("return "+g.join("+"))},createParser:(function(){var c=["var dt, y, m, d, h, i, s, ms, o, z, zz, u, v,","def = Ext.Date.defaults,","results = String(input).match(Ext.Date.parseRegexes[{0}]);","if(results){","{1}","if(u != null){","v = new Date(u * 1000);","}else{","dt = Ext.Date.clearTime(new Date);","y = Ext.Number.from(y, Ext.Number.from(def.y, dt.getFullYear()));","m = Ext.Number.from(m, Ext.Number.from(def.m - 1, dt.getMonth()));","d = Ext.Number.from(d, Ext.Number.from(def.d, dt.getDate()));","h  = Ext.Number.from(h, Ext.Number.from(def.h, dt.getHours()));","i  = Ext.Number.from(i, Ext.Number.from(def.i, dt.getMinutes()));","s  = Ext.Number.from(s, Ext.Number.from(def.s, dt.getSeconds()));","ms = Ext.Number.from(ms, Ext.Number.from(def.ms, dt.getMilliseconds()));","if(z >= 0 && y >= 0){","v = Ext.Date.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);","v = !strict? v : (strict === true && (z <= 364 || (Ext.Date.isLeapYear(v) && z <= 365))? Ext.Date.add(v, Ext.Date.DAY, z) : null);","}else if(strict === true && !Ext.Date.isValid(y, m + 1, d, h, i, s, ms)){","v = null;","}else{","v = Ext.Date.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), Ext.Date.YEAR, y < 100 ? y - 100 : 0);","}","}","}","if(v){","if(zz != null){","v = Ext.Date.add(v, Ext.Date.SECOND, -v.getTimezoneOffset() * 60 - zz);","}else if(o){","v = Ext.Date.add(v, Ext.Date.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));","}","}","return v;"].join("\n");return function(m){var e=a.parseRegexes.length,n=1,g=[],l=[],k=false,d="";for(var j=0;j<m.length;++j){d=m.charAt(j);if(!k&&d=="\\"){k=true}else{if(k){k=false;l.push(Ext.String.escape(d))}else{var h=a.formatCodeToRegex(d,n);n+=h.g;l.push(h.s);if(h.g&&h.c){g.push(h.c)}}}}a.parseRegexes[e]=new RegExp("^"+l.join("")+"$","i");a.parseFunctions[m]=Ext.functionFactory("input","strict",b(c,e,g.join("")))}})(),parseCodes:{d:{g:1,c:"d = parseInt(results[{0}], 10);\n",s:"(\\d{2})"},j:{g:1,c:"d = parseInt(results[{0}], 10);\n",s:"(\\d{1,2})"},D:function(){for(var c=[],d=0;d<7;c.push(a.getShortDayName(d)),++d){}return{g:0,c:null,s:"(?:"+c.join("|")+")"}},l:function(){return{g:0,c:null,s:"(?:"+a.dayNames.join("|")+")"}},N:{g:0,c:null,s:"[1-7]"},S:{g:0,c:null,s:"(?:st|nd|rd|th)"},w:{g:0,c:null,s:"[0-6]"},z:{g:1,c:"z = parseInt(results[{0}], 10);\n",s:"(\\d{1,3})"},W:{g:0,c:null,s:"(?:\\d{2})"},F:function(){return{g:1,c:"m = parseInt(Ext.Date.getMonthNumber(results[{0}]), 10);\n",s:"("+a.monthNames.join("|")+")"}},M:function(){for(var c=[],d=0;d<12;c.push(a.getShortMonthName(d)),++d){}return Ext.applyIf({s:"("+c.join("|")+")"},a.formatCodeToRegex("F"))},m:{g:1,c:"m = parseInt(results[{0}], 10) - 1;\n",s:"(\\d{2})"},n:{g:1,c:"m = parseInt(results[{0}], 10) - 1;\n",s:"(\\d{1,2})"},t:{g:0,c:null,s:"(?:\\d{2})"},L:{g:0,c:null,s:"(?:1|0)"},o:function(){return a.formatCodeToRegex("Y")},Y:{g:1,c:"y = parseInt(results[{0}], 10);\n",s:"(\\d{4})"},y:{g:1,c:"var ty = parseInt(results[{0}], 10);\ny = ty > Ext.Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"},a:{g:1,c:"if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",s:"(am|pm|AM|PM)"},A:{g:1,c:"if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",s:"(AM|PM|am|pm)"},g:function(){return a.formatCodeToRegex("G")},G:{g:1,c:"h = parseInt(results[{0}], 10);\n",s:"(\\d{1,2})"},h:function(){return a.formatCodeToRegex("H")},H:{g:1,c:"h = parseInt(results[{0}], 10);\n",s:"(\\d{2})"},i:{g:1,c:"i = parseInt(results[{0}], 10);\n",s:"(\\d{2})"},s:{g:1,c:"s = parseInt(results[{0}], 10);\n",s:"(\\d{2})"},u:{g:1,c:"ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",s:"(\\d+)"},O:{g:1,c:["o = results[{0}];","var sn = o.substring(0,1),","hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),","mn = o.substring(3,5) % 60;","o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"].join("\n"),s:"([+-]\\d{4})"},P:{g:1,c:["o = results[{0}];","var sn = o.substring(0,1),","hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),","mn = o.substring(4,6) % 60;","o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n"].join("\n"),s:"([+-]\\d{2}:\\d{2})"},T:{g:0,c:null,s:"[A-Z]{1,4}"},Z:{g:1,c:"zz = results[{0}] * 1;\nzz = (-43200 <= zz && zz <= 50400)? zz : null;\n",s:"([+-]?\\d{1,5})"},c:function(){var e=[],c=[a.formatCodeToRegex("Y",1),a.formatCodeToRegex("m",2),a.formatCodeToRegex("d",3),a.formatCodeToRegex("h",4),a.formatCodeToRegex("i",5),a.formatCodeToRegex("s",6),{c:"ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n"},{c:["if(results[8]) {","if(results[8] == 'Z'){","zz = 0;","}else if (results[8].indexOf(':') > -1){",a.formatCodeToRegex("P",8).c,"}else{",a.formatCodeToRegex("O",8).c,"}","}"].join("\n")}];for(var g=0,d=c.length;g<d;++g){e.push(c[g].c)}return{g:1,c:e.join(""),s:[c[0].s,"(?:","-",c[1].s,"(?:","-",c[2].s,"(?:","(?:T| )?",c[3].s,":",c[4].s,"(?::",c[5].s,")?","(?:(?:\\.|,)(\\d+))?","(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?",")?",")?",")?"].join("")}},U:{g:1,c:"u = parseInt(results[{0}], 10);\n",s:"(-?\\d+)"}},dateFormat:function(c,d){return a.format(c,d)},format:function(d,e){if(a.formatFunctions[e]==null){a.createFormat(e)}var c=a.formatFunctions[e].call(d);return c+""},getTimezone:function(c){return c.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/,"$1$2").replace(/[^A-Z]/g,"")},getGMTOffset:function(c,d){var e=c.getTimezoneOffset();return(e>0?"-":"+")+Ext.String.leftPad(Math.floor(Math.abs(e)/60),2,"0")+(d?":":"")+Ext.String.leftPad(Math.abs(e%60),2,"0")},getDayOfYear:function(g){var e=0,j=Ext.Date.clone(g),c=g.getMonth(),h;for(h=0,j.setDate(1),j.setMonth(0);h<c;j.setMonth(++h)){e+=a.getDaysInMonth(j)}return e+g.getDate()-1},getWeekOfYear:(function(){var c=86400000,d=7*c;return function(g){var h=Date.UTC(g.getFullYear(),g.getMonth(),g.getDate()+3)/c,e=Math.floor(h/7),i=new Date(e*d).getUTCFullYear();return e-Math.floor(Date.UTC(i,0,7)/d)+1}})(),isLeapYear:function(c){var d=c.getFullYear();return !!((d&3)==0&&(d%100||(d%400==0&&d)))},getFirstDayOfMonth:function(d){var c=(d.getDay()-(d.getDate()-1))%7;return(c<0)?(c+7):c},getLastDayOfMonth:function(c){return a.getLastDateOfMonth(c).getDay()},getFirstDateOfMonth:function(c){return new Date(c.getFullYear(),c.getMonth(),1)},getLastDateOfMonth:function(c){return new Date(c.getFullYear(),c.getMonth(),a.getDaysInMonth(c))},getDaysInMonth:(function(){var c=[31,28,31,30,31,30,31,31,30,31,30,31];return function(e){var d=e.getMonth();return d==1&&a.isLeapYear(e)?29:c[d]}})(),getSuffix:function(c){switch(c.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},clone:function(c){return new Date(c.getTime())},isDST:function(c){return new Date(c.getFullYear(),0,1).getTimezoneOffset()!=c.getTimezoneOffset()},clearTime:function(e,j){if(j){return Ext.Date.clearTime(Ext.Date.clone(e))}var h=e.getDate();e.setHours(0);e.setMinutes(0);e.setSeconds(0);e.setMilliseconds(0);if(e.getDate()!=h){for(var g=1,i=a.add(e,Ext.Date.HOUR,g);i.getDate()!=h;g++,i=a.add(e,Ext.Date.HOUR,g)){}e.setDate(h);e.setHours(i.getHours())}return e},add:function(h,g,i){var j=Ext.Date.clone(h),c=Ext.Date;if(!g||i===0){return j}switch(g.toLowerCase()){case Ext.Date.MILLI:j.setMilliseconds(j.getMilliseconds()+i);break;case Ext.Date.SECOND:j.setSeconds(j.getSeconds()+i);break;case Ext.Date.MINUTE:j.setMinutes(j.getMinutes()+i);break;case Ext.Date.HOUR:j.setHours(j.getHours()+i);break;case Ext.Date.DAY:j.setDate(j.getDate()+i);break;case Ext.Date.MONTH:var e=h.getDate();if(e>28){e=Math.min(e,Ext.Date.getLastDateOfMonth(Ext.Date.add(Ext.Date.getFirstDateOfMonth(h),"mo",i)).getDate())}j.setDate(e);j.setMonth(h.getMonth()+i);break;case Ext.Date.YEAR:j.setFullYear(h.getFullYear()+i);break}return j},between:function(d,g,c){var e=d.getTime();return g.getTime()<=e&&e<=c.getTime()},compat:function(){var g=window.Date,e,c,h=["useStrict","formatCodeToRegex","parseFunctions","parseRegexes","formatFunctions","y2kYear","MILLI","SECOND","MINUTE","HOUR","DAY","MONTH","YEAR","defaults","dayNames","monthNames","monthNumbers","getShortMonthName","getShortDayName","getMonthNumber","formatCodes","isValid","parseDate","getFormatCode","createFormat","createParser","parseCodes"],d=["dateFormat","format","getTimezone","getGMTOffset","getDayOfYear","getWeekOfYear","isLeapYear","getFirstDayOfMonth","getLastDayOfMonth","getDaysInMonth","getSuffix","clone","isDST","clearTime","add","between"];Ext.Array.forEach(h,function(i){g[i]=a[i]});Ext.Array.forEach(d,function(i){g.prototype[i]=function(){var j=Array.prototype.slice.call(arguments);j.unshift(this);return a[i].apply(a,j)}})}};var a=Ext.Date})();(function(a){var b=Ext.Base=function(){};b.prototype={$className:"Ext.Base",$class:b,self:b,constructor:function(){return this},initConfig:function(c){if(!this.$configInited){this.config=Ext.Object.merge({},this.config||{},c||{});this.applyConfig(this.config);this.$configInited=true}return this},setConfig:function(c){this.applyConfig(c||{});return this},applyConfig:a(function(c,d){var e="set"+Ext.String.capitalize(c);if(typeof this[e]==="function"){this[e].call(this,d)}return this}),callParent:function(d){var g=this.callParent.caller,e,c;if(!g.$owner){g=g.caller}e=g.$owner.superclass;c=g.$name;return e[c].apply(this,d||[])},statics:function(){var d=this.statics.caller,c=this.self;if(!d){return c}return d.$owner},callOverridden:function(c){var d=this.callOverridden.caller;return d.$previous.apply(this,c||[])},destroy:function(){}};Ext.apply(Ext.Base,{create:function(){return Ext.create.apply(Ext,[this].concat(Array.prototype.slice.call(arguments,0)))},own:a(function(c,d){if(typeof d==="function"){this.ownMethod(c,d)}else{this.prototype[c]=d}}),ownMethod:function(c,d){var e;if(d.$owner!==undefined&&d!==Ext.emptyFn){e=d;d=function(){return e.apply(this,arguments)}}d.$owner=this;d.$name=c;this.prototype[c]=d},addStatics:function(c){for(var d in c){if(c.hasOwnProperty(d)){this[d]=c[d]}}return this},implement:function(d){var g=this.prototype,e,h,k,j;for(e in d){if(d.hasOwnProperty(e)){k=d[e];if(typeof k==="function"){k.$owner=this;k.$name=e}g[e]=k}}if(Ext.enumerables){var c=Ext.enumerables;for(h=c.length;h--;){e=c[h];if(d.hasOwnProperty(e)){k=d[e];k.$owner=this;k.$name=e;g[e]=k}}}},borrow:function(h,d){var c=h.prototype,e,g,j;d=Ext.Array.from(d);for(e=0,g=d.length;e<g;e++){j=d[e];this.own(j,c[j])}return this},override:function(d){var g=this.prototype,e,h,k,j;for(e in d){if(d.hasOwnProperty(e)){k=d[e];if(typeof k==="function"){if(typeof g[e]==="function"){j=g[e];k.$previous=j}this.ownMethod(e,k)}else{g[e]=k}}}if(Ext.enumerables){var c=Ext.enumerables;for(h=c.length;h--;){e=c[h];if(d.hasOwnProperty(e)){if(g[e]!==undefined){j=g[e];d[e].$previous=j}this.ownMethod(e,d[e])}}}return this},mixin:a(function(e,c){var d=c.prototype,j=this.prototype,g,h;for(g in d){if(d.hasOwnProperty(g)){if(j[g]===undefined){if(typeof d[g]==="function"){h=d[g];if(h.$owner===undefined){this.ownMethod(g,h)}else{j[g]=h}}else{j[g]=d[g]}}else{if(g==="config"&&j.config&&d.config){Ext.Object.merge(j.config,d.config)}}}}if(j.mixins===undefined){j.mixins={}}j.mixins[e]=d}),getName:function(){return Ext.getClassName(this)},createAlias:a(function(d,c){this.prototype[d]=this.prototype[c]})})})(Ext.Function.flexSetter);(function(){var c,d=Ext.Base,b=[],a;for(a in d){if(d.hasOwnProperty(a)){b.push(a)}}Ext.Class=c=function(m,t,r){if(typeof m!=="function"){r=t;t=m;m=function(){return this.constructor.apply(this,arguments)}}if(!t){t={}}var g=t.preprocessors||c.getDefaultPreprocessors(),n=c.getPreprocessors(),l=0,q=[],u,q,s,e,k,h,p;for(k=0,p=b.length;k<p;k++){s=b[k];m[s]=d[s]}delete t.preprocessors;for(h=0,p=g.length;h<p;h++){u=g[h];if(typeof u==="string"){u=n[u];if(!u.always){if(t.hasOwnProperty(u.name)){q.push(u.fn)}}else{q.push(u.fn)}}else{q.push(u)}}t.onClassCreated=r;t.onBeforeClassCreated=function(i,j){r=j.onClassCreated;delete j.onBeforeClassCreated;delete j.onClassCreated;i.implement(j);if(r){r.call(i,i)}};e=function(i,j){u=q[l++];if(!u){j.onBeforeClassCreated.apply(this,arguments);return}if(u.call(this,i,j,e)!==false){e.apply(this,arguments)}};e.call(c,m,t);return m};Ext.apply(c,{preprocessors:{},registerPreprocessor:function(g,h,e){this.preprocessors[g]={name:g,always:e||false,fn:h};return this},getPreprocessor:function(e){return this.preprocessors[e]},getPreprocessors:function(){return this.preprocessors},getDefaultPreprocessors:function(){return this.defaultPreprocessors||[]},setDefaultPreprocessors:function(e){this.defaultPreprocessors=Ext.Array.from(e);return this},setDefaultPreprocessorPosition:function(h,j,i){var e=this.defaultPreprocessors,g;if(typeof j==="string"){if(j==="first"){e.unshift(h);return this}else{if(j==="last"){e.push(h);return this}}j=(j==="after")?1:-1}g=Ext.Array.indexOf(e,i);if(g!==-1){Ext.Array.splice(e,Math.max(0,g+j),0,h)}return this}});c.registerPreprocessor("extend",function(v,j){var q=j.extend,e=Ext.Base,n=e.prototype,s=function(){},t,l,h,p,u,g,r,m;if(q&&q!==Object){t=q}else{t=e}r=t.prototype;s.prototype=r;m=v.prototype=new s();if(!("$class" in t)){for(l in n){if(!r[l]){r[l]=n[l]}}}m.self=v;v.superclass=m.superclass=r;delete j.extend;g=r.$inheritableStatics;if(g){for(h=0,p=g.length;h<p;h++){u=g[h];if(!v.hasOwnProperty(u)){v[u]=t[u]}}}if(r.config){m.config=Ext.Object.merge({},r.config)}else{m.config={}}if(m.$onExtended){m.$onExtended.call(v,v,j)}if(j.onClassExtended){m.$onExtended=j.onClassExtended;delete j.onClassExtended}},true);c.registerPreprocessor("statics",function(e,h){var i=h.statics,g;for(g in i){if(i.hasOwnProperty(g)){e[g]=i[g]}}delete h.statics});c.registerPreprocessor("inheritableStatics",function(e,j){var k=j.inheritableStatics,i,h=e.prototype,g;i=h.$inheritableStatics;if(!i){i=h.$inheritableStatics=[]}for(g in k){if(k.hasOwnProperty(g)){e[g]=k[g];i.push(g)}}delete j.inheritableStatics});c.registerPreprocessor("mixins",function(e,g){e.mixin(g.mixins);delete g.mixins});c.registerPreprocessor("config",function(e,h){var g=e.prototype;Ext.Object.each(h.config,function(m){var j=m.charAt(0).toUpperCase()+m.substr(1),k=m,l="apply"+j,n="set"+j,i="get"+j;if(!(l in g)&&!h.hasOwnProperty(l)){h[l]=function(p){return p}}if(!(n in g)&&!h.hasOwnProperty(n)){h[n]=function(q){var p=this[l].call(this,q,this[k]);if(p!==undefined){this[k]=p}return this}}if(!(i in g)&&!h.hasOwnProperty(i)){h[i]=function(){return this[k]}}});Ext.Object.merge(g.config,h.config);delete h.config});c.setDefaultPreprocessors(["extend","statics","inheritableStatics","mixins","config"]);Ext.extend=function(g,i,h){if(arguments.length===2&&Ext.isObject(i)){h=i;i=g;g=null}var e;if(!i){Ext.Error.raise("Attempting to extend from a class which has not been loaded on the page.")}h.extend=i;h.preprocessors=["extend","mixins","config","statics"];if(g){e=new c(g,h)}else{e=new c(h)}e.prototype.override=function(k){for(var j in k){if(k.hasOwnProperty(j)){this[j]=k[j]}}};return e}})();(function(b,c){var d=Array.prototype.slice;var a=Ext.ClassManager={classes:{},existCache:{},namespaceRewrites:[{from:"Ext.",to:Ext}],maps:{alternateToName:{},aliasToName:{},nameToAliases:{}},enableNamespaceParseCache:true,namespaceParseCache:{},instantiators:[],isCreated:function(j){var h,k,g,e,l;if(this.classes.hasOwnProperty(j)||this.existCache.hasOwnProperty(j)){return true}e=Ext.global;l=this.parseNamespace(j);for(h=0,k=l.length;h<k;h++){g=l[h];if(typeof g!=="string"){e=g}else{if(!e||!e[g]){return false}e=e[g]}}Ext.Loader.historyPush(j);this.existCache[j]=true;return true},parseNamespace:function(g){var e=this.namespaceParseCache;if(this.enableNamespaceParseCache){if(e.hasOwnProperty(g)){return e[g]}}var h=[],k=this.namespaceRewrites,q,n,p,j,l,m=Ext.global;for(j=0,l=k.length;j<l;j++){q=k[j];n=q.from;p=q.to;if(g===n||g.substring(0,n.length)===n){g=g.substring(n.length);if(typeof p!=="string"){m=p}else{h=h.concat(p.split("."))}break}}h.push(m);h=h.concat(g.split("."));if(this.enableNamespaceParseCache){e[g]=h}return h},setNamespace:function(j,m){var g=Ext.global,n=this.parseNamespace(j),l=n.length-1,e=n[l],k,h;for(k=0;k<l;k++){h=n[k];if(typeof h!=="string"){g=h}else{if(!g[h]){g[h]={}}g=g[h]}}g[e]=m;return g[e]},createNamespaces:function(){var e=Ext.global,m,h,k,g,l,n;for(k=0,l=arguments.length;k<l;k++){m=this.parseNamespace(arguments[k]);for(g=0,n=m.length;g<n;g++){h=m[g];if(typeof h!=="string"){e=h}else{if(!e[h]){e[h]={}}e=e[h]}}}return e},set:function(e,h){var g=this.getName(h);this.classes[e]=this.setNamespace(e,h);if(g&&g!==e){this.maps.alternateToName[e]=g}return this},get:function(h){if(this.classes.hasOwnProperty(h)){return this.classes[h]}var e=Ext.global,l=this.parseNamespace(h),g,j,k;for(j=0,k=l.length;j<k;j++){g=l[j];if(typeof g!=="string"){e=g}else{if(!e||!e[g]){return null}e=e[g]}}return e},setAlias:function(e,g){var i=this.maps.aliasToName,j=this.maps.nameToAliases,h;if(typeof e==="string"){h=e}else{h=this.getName(e)}if(g&&i[g]!==h){i[g]=h}if(!j[h]){j[h]=[]}if(g){Ext.Array.include(j[h],g)}return this},getByAlias:function(e){return this.get(this.getNameByAlias(e))},getNameByAlias:function(e){return this.maps.aliasToName[e]||""},getNameByAlternate:function(e){return this.maps.alternateToName[e]||""},getAliasesByName:function(e){return this.maps.nameToAliases[e]||[]},getName:function(e){return e&&e.$className||""},getClass:function(e){return e&&e.self||null},create:function(h,i,e){var g=this;i.$className=h;return new b(i,function(){var r=i.postprocessors||g.defaultPostprocessors,q=g.postprocessors,l=0,k=[],j,p,m,n;delete i.postprocessors;for(m=0,n=r.length;m<n;m++){j=r[m];if(typeof j==="string"){j=q[j];if(!j.always){if(i[j.name]!==undefined){k.push(j.fn)}}else{k.push(j.fn)}}else{k.push(j)}}p=function(t,s,u){j=k[l++];if(!j){g.set(h,s);Ext.Loader.historyPush(h);if(e){e.call(s,s)}return}if(j.call(this,t,s,u,p)!==false){p.apply(this,arguments)}};p.call(g,h,this,i)})},instantiateByAlias:function(){var g=arguments[0],e=d.call(arguments),h=this.getNameByAlias(g);if(!h){h=this.maps.aliasToName[g];Ext.syncRequire(h)}e[0]=h;return this.instantiate.apply(this,e)},instantiate:function(){var h=arguments[0],g=d.call(arguments,1),i=h,j,e;if(typeof h!=="function"){e=this.get(h)}else{e=h}if(!e){j=this.getNameByAlias(h);if(j){h=j;e=this.get(h)}}if(!e){j=this.getNameByAlternate(h);if(j){h=j;e=this.get(h)}}if(!e){Ext.syncRequire(h);e=this.get(h)}return this.getInstantiator(g.length)(e,g)},dynInstantiate:function(g,e){e=Ext.Array.from(e,true);e.unshift(g);return this.instantiate.apply(this,e)},getInstantiator:function(h){if(!this.instantiators[h]){var g=h,e=[];for(g=0;g<h;g++){e.push("a["+g+"]")}this.instantiators[h]=new Function("c","a","return new c("+e.join(",")+")")}return this.instantiators[h]},postprocessors:{},defaultPostprocessors:[],registerPostprocessor:function(g,h,e){this.postprocessors[g]={name:g,always:e||false,fn:h};return this},setDefaultPostprocessors:function(e){this.defaultPostprocessors=Ext.Array.from(e);return this},setDefaultPostprocessorPosition:function(g,j,i){var h=this.defaultPostprocessors,e;if(typeof j==="string"){if(j==="first"){h.unshift(g);return this}else{if(j==="last"){h.push(g);return this}}j=(j==="after")?1:-1}e=Ext.Array.indexOf(h,i);if(e!==-1){Ext.Array.splice(h,Math.max(0,e+j),0,g)}return this},getNamesByExpression:function(n){var l=this.maps.nameToAliases,p=[],e,k,h,g,q,j,m;if(n.indexOf("*")!==-1){n=n.replace(/\*/g,"(.*?)");q=new RegExp("^"+n+"$");for(e in l){if(l.hasOwnProperty(e)){h=l[e];if(e.search(q)!==-1){p.push(e)}else{for(j=0,m=h.length;j<m;j++){k=h[j];if(k.search(q)!==-1){p.push(e);break}}}}}}else{g=this.getNameByAlias(n);if(g){p.push(g)}else{g=this.getNameByAlternate(n);if(g){p.push(g)}else{p.push(n)}}}return p}};a.registerPostprocessor("alias",function(j,g,n){var e=n.alias,h="widget.",l,m,k;if(!(e instanceof Array)){e=[e]}for(l=0,m=e.length;l<m;l++){k=e[l];this.setAlias(g,k)}for(l=0,m=e.length;l<m;l++){k=e[l];if(k.substring(0,h.length)===h){g.xtype=g.$xtype=k.substring(h.length);break}}});a.registerPostprocessor("singleton",function(g,e,i,h){h.call(this,g,new e(),i);return false});a.registerPostprocessor("alternateClassName",function(g,e,l){var j=l.alternateClassName,h,k,m;if(!(j instanceof Array)){j=[j]}for(h=0,k=j.length;h<k;h++){m=j[h];this.set(m,e)}});a.setDefaultPostprocessors(["alias","singleton","alternateClassName"]);Ext.apply(Ext,{create:c(a,"instantiate"),factory:function(m,k){if(m instanceof Array){var j,l;for(j=0,l=m.length;j<l;j++){m[j]=Ext.factory(m[j],k)}return m}var e=(typeof m==="string");if(e||(m instanceof Object&&m.constructor===Object)){var h,g={};if(e){h=m}else{h=m.className;g=m;delete g.className}if(k!==undefined&&h.indexOf(k)===-1){h=k+"."+Ext.String.capitalize(h)}return Ext.create(h,g)}if(typeof m==="function"){return Ext.create(m)}return m},widget:function(g){var e=d.call(arguments);e[0]="widget."+g;return a.instantiateByAlias.apply(a,e)},createByAlias:c(a,"instantiateByAlias"),define:c(a,"create"),getClassName:c(a,"getName"),getDisplayName:function(e){if(e.displayName){return e.displayName}if(e.$name&&e.$class){return Ext.getClassName(e.$class)+"#"+e.$name}if(e.$className){return e.$className}return"Anonymous"},getClass:c(a,"getClass"),namespace:c(a,"createNamespaces")});Ext.createWidget=Ext.widget;Ext.ns=Ext.namespace;b.registerPreprocessor("className",function(e,g){if(g.$className){e.$className=g.$className}},true);b.setDefaultPreprocessorPosition("className","first")})(Ext.Class,Ext.Function.alias);(function(c,b,a,e){var d=["extend","mixins","requires"],g;g=Ext.Loader={documentHead:typeof document!=="undefined"&&(document.head||document.getElementsByTagName("head")[0]),isLoading:false,queue:[],isFileLoaded:{},readyListeners:[],optionalRequires:[],requiresMap:{},numPendingFiles:0,numLoadedFiles:0,hasFileLoadError:false,classNameToFilePathMap:{},history:[],config:{enabled:false,disableCaching:true,disableCachingParam:"_dc",paths:{Ext:"."}},setConfig:function(h,i){if(Ext.isObject(h)&&arguments.length===1){Ext.Object.merge(this.config,h)}else{this.config[h]=(Ext.isObject(i))?Ext.Object.merge(this.config[h],i):i}return this},getConfig:function(h){if(h){return this.config[h]}return this.config},setPath:a(function(h,i){this.config.paths[h]=i;return this}),getPath:function(h){var j="",k=this.config.paths,i=this.getPrefix(h);if(i.length>0){if(i===h){return k[i]}j=k[i];h=h.substring(i.length+1)}if(j.length>0){j+="/"}return j.replace(/\/\.\//g,"/")+h.replace(/\./g,"/")+".js"},getPrefix:function(i){var k=this.config.paths,j,h="";if(k.hasOwnProperty(i)){return i}for(j in k){if(k.hasOwnProperty(j)&&j+"."===i.substring(0,j.length+1)){if(j.length>h.length){h=j}}}return h},refreshQueue:function(){var n=this.queue.length,k,m,h,l;if(n===0){this.triggerReady();return}for(k=0;k<n;k++){m=this.queue[k];if(m){l=m.requires;if(l.length>this.numLoadedFiles){continue}h=0;do{if(c.isCreated(l[h])){Ext.Array.erase(l,h,1)}else{h++}}while(h<l.length);if(m.requires.length===0){Ext.Array.erase(this.queue,k,1);m.callback.call(m.scope);this.refreshQueue();break}}}return this},injectScriptElement:function(j,l,n,k){var i=document.createElement("script"),m=this,h=function(){m.cleanupScriptElement(i);l.call(k)},p=function(){m.cleanupScriptElement(i);n.call(k)};i.type="text/javascript";i.src=j;i.onload=h;i.onerror=p;i.onreadystatechange=function(){if(this.readyState==="loaded"||this.readyState==="complete"){h()}};this.documentHead.appendChild(i);return i},cleanupScriptElement:function(h){h.onload=null;h.onreadystatechange=null;h.onerror=null;return this},loadScriptFile:function(i,q,m,t,h){var p=this,u=i+(this.getConfig("disableCaching")?("?"+this.getConfig("disableCachingParam")+"="+Ext.Date.now()):""),l=i.split("/").pop(),j=false,s,k,r;t=t||this;this.isLoading=true;if(!h){r=function(){m.call(t,"Failed loading '"+i+"', please verify that the file exists",h)};if(!Ext.isReady&&Ext.onDocumentReady){Ext.onDocumentReady(function(){p.injectScriptElement(u,q,r,t)})}else{this.injectScriptElement(u,q,r,t)}}else{if(typeof XMLHttpRequest!=="undefined"){s=new XMLHttpRequest()}else{s=new ActiveXObject("Microsoft.XMLHTTP")}try{s.open("GET",u,false);s.send(null)}catch(n){j=true}k=(s.status===1223)?204:s.status;if(!j){j=(k===0)}if(j){m.call(this,"Failed loading synchronously via XHR: '"+i+"'; It's likely that the file is either being loaded from a different domain or from the local file system whereby cross origin requests are not allowed due to security reasons. Use asynchronous loading with Ext.require instead.",h)}else{if(k>=200&&k<300){new Function(s.responseText+"\n//@ sourceURL="+l)();q.call(t)}else{m.call(this,"Failed loading synchronously via XHR: '"+i+"'; please verify that the file exists. XHR status code: "+k,h)}}s=null}},exclude:function(i){var h=this;return{require:function(l,k,j){return h.require(l,k,j,i)},syncRequire:function(l,k,j){return h.syncRequire(l,k,j,i)}}},syncRequire:function(){this.syncModeEnabled=true;this.require.apply(this,arguments);this.refreshQueue();this.syncModeEnabled=false},require:function(s,y,A,z){var n,w,k,x,u={},l=[],m=[],r,h=[],q,p,v,t;s=Ext.Array.from(s);z=Ext.Array.from(z);y=y||Ext.emptyFn;A=A||Ext.global;for(q=0,v=z.length;q<v;q++){k=z[q];if(typeof k==="string"&&k.length>0){l=c.getNamesByExpression(k);for(p=0,t=l.length;p<t;p++){u[l[p]]=true}}}for(q=0,v=s.length;q<v;q++){w=s[q];if(typeof w==="string"&&w.length>0){m=c.getNamesByExpression(w);for(p=0,t=m.length;p<t;p++){r=m[p];if(!u.hasOwnProperty(r)&&!c.isCreated(r)){Ext.Array.include(h,r)}}}}if(!this.config.enabled){if(h.length>0){Ext.Error.raise({sourceClass:"Ext.Loader",sourceMethod:"require",msg:"Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. Missing required class"+((h.length>1)?"es":"")+": "+h.join(", ")})}}if(h.length===0){y.call(A);return this}this.queue.push({requires:h,callback:y,scope:A});h=h.slice();for(q=0,v=h.length;q<v;q++){x=h[q];if(!this.isFileLoaded.hasOwnProperty(x)){this.isFileLoaded[x]=false;n=this.getPath(x);this.classNameToFilePathMap[x]=n;this.numPendingFiles++;this.loadScriptFile(n,Ext.Function.pass(this.onFileLoaded,[x,n],this),Ext.Function.pass(this.onFileLoadError,[x,n]),this,this.syncModeEnabled)}}return this},onFileLoaded:function(i,h){this.numLoadedFiles++;this.isFileLoaded[i]=true;this.numPendingFiles--;if(this.numPendingFiles===0){this.refreshQueue()}},onFileLoadError:function(j,i,h,k){this.numPendingFiles--;this.hasFileLoadError=true},addOptionalRequires:function(k){var m=this.optionalRequires,j,l,h;k=Ext.Array.from(k);for(j=0,l=k.length;j<l;j++){h=k[j];Ext.Array.include(m,h)}return this},triggerReady:function(i){var k=this.readyListeners,j,h;if(this.isLoading||i){this.isLoading=false;if(this.optionalRequires.length){j=Ext.Array.clone(this.optionalRequires);this.optionalRequires.length=0;this.require(j,Ext.Function.pass(this.triggerReady,[true],this),this);return this}while(k.length){h=k.shift();h.fn.call(h.scope);if(this.isLoading){return this}}}return this},onReady:function(k,j,l,h){var i;if(l!==false&&Ext.onDocumentReady){i=k;k=function(){Ext.onDocumentReady(i,j,h)}}if(!this.isLoading){k.call(j)}else{this.readyListeners.push({fn:k,scope:j})}},historyPush:function(h){if(h&&this.isFileLoaded.hasOwnProperty(h)){Ext.Array.include(this.history,h)}return this}};Ext.require=e(g,"require");Ext.syncRequire=e(g,"syncRequire");Ext.exclude=e(g,"exclude");Ext.onReady=function(j,i,h){g.onReady(j,i,true,h)};b.registerPreprocessor("loader",function(w,l,v){var t=this,r=[],s=c.getName(w),m,k,q,p,u,n,h;for(m=0,q=d.length;m<q;m++){n=d[m];if(l.hasOwnProperty(n)){h=l[n];if(typeof h==="string"){r.push(h)}else{if(h instanceof Array){for(k=0,p=h.length;k<p;k++){u=h[k];if(typeof u==="string"){r.push(u)}}}else{for(k in h){if(h.hasOwnProperty(k)){u=h[k];if(typeof u==="string"){r.push(u)}}}}}}}if(r.length===0){return}g.require(r,function(){for(m=0,q=d.length;m<q;m++){n=d[m];if(l.hasOwnProperty(n)){h=l[n];if(typeof h==="string"){l[n]=c.get(h)}else{if(h instanceof Array){for(k=0,p=h.length;k<p;k++){u=h[k];if(typeof u==="string"){l[n][k]=c.get(u)}}}else{for(var i in h){if(h.hasOwnProperty(i)){u=h[i];if(typeof u==="string"){l[n][i]=c.get(u)}}}}}}}v.call(t,w,l)});return false},true);b.setDefaultPreprocessorPosition("loader","after","className");c.registerPostprocessor("uses",function(l,j,q){var h=Ext.Array.from(q.uses),k=[],m,p,n;for(m=0,p=h.length;m<p;m++){n=h[m];if(typeof n==="string"){k.push(n)}}g.addOptionalRequires(k)});c.setDefaultPostprocessorPosition("uses","last")})(Ext.ClassManager,Ext.Class,Ext.Function.flexSetter,Ext.Function.alias);Ext.Error=Ext.extend(Error,{statics:{ignore:false,raise:function(a){a=a||{};if(Ext.isString(a)){a={msg:a}}var c=this.raise.caller;if(c){if(c.$name){a.sourceMethod=c.$name}if(c.$owner){a.sourceClass=c.$owner.$className}}if(Ext.Error.handle(a)!==true){var b=Ext.Error.prototype.toString.call(a);Ext.log({msg:b,level:"error",dump:a,stack:true});throw new Ext.Error(a)}},handle:function(){return Ext.Error.ignore}},name:"Ext.Error",constructor:function(a){if(Ext.isString(a)){a={msg:a}}var b=this;Ext.apply(b,a);b.message=b.message||b.msg},toString:function(){var c=this,b=c.className?c.className:"",a=c.methodName?"."+c.methodName+"(): ":"",d=c.msg||"(No description provided)";return b+a+d}});Ext.JSON=new (function(){var useHasOwn=!!{}.hasOwnProperty,isNative=function(){var useNative=null;return function(){if(useNative===null){useNative=Ext.USE_NATIVE_JSON&&window.JSON&&JSON.toString()=="[object JSON]"}return useNative}}(),pad=function(n){return n<10?"0"+n:n},doDecode=function(json){return eval("("+json+")")},doEncode=function(o){if(!Ext.isDefined(o)||o===null){return"null"}else{if(Ext.isArray(o)){return encodeArray(o)}else{if(Ext.isDate(o)){return Ext.JSON.encodeDate(o)}else{if(Ext.isString(o)){return encodeString(o)}else{if(typeof o=="number"){return isFinite(o)?String(o):"null"}else{if(Ext.isBoolean(o)){return String(o)}else{if(Ext.isObject(o)){return encodeObject(o)}else{if(typeof o==="function"){return"null"}}}}}}}}return"undefined"},m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\","\x0b":"\\u000b"},charToReplace=/[\\\"\x00-\x1f\x7f-\uffff]/g,encodeString=function(s){return'"'+s.replace(charToReplace,function(a){var c=m[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"'},encodeArray=function(o){var a=["[",""],len=o.length,i;for(i=0;i<len;i+=1){a.push(doEncode(o[i]),",")}a[a.length-1]="]";return a.join("")},encodeObject=function(o){var a=["{",""],i;for(i in o){if(!useHasOwn||o.hasOwnProperty(i)){a.push(doEncode(i),":",doEncode(o[i]),",")}}a[a.length-1]="}";return a.join("")};this.encodeDate=function(o){return'"'+o.getFullYear()+"-"+pad(o.getMonth()+1)+"-"+pad(o.getDate())+"T"+pad(o.getHours())+":"+pad(o.getMinutes())+":"+pad(o.getSeconds())+'"'};this.encode=function(){var ec;return function(o){if(!ec){ec=isNative()?JSON.stringify:doEncode}return ec(o)}}();this.decode=function(){var dc;return function(json,safe){if(!dc){dc=isNative()?JSON.parse:doDecode}try{return dc(json)}catch(e){if(safe===true){return null}Ext.Error.raise({sourceClass:"Ext.JSON",sourceMethod:"decode",msg:"You're trying to decode an invalid JSON String: "+json})}}}()})();Ext.encode=Ext.JSON.encode;Ext.decode=Ext.JSON.decode;Ext.apply(Ext,{userAgent:navigator.userAgent.toLowerCase(),cache:{},idSeed:1000,BLANK_IMAGE_URL:"data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",isStrict:document.compatMode=="CSS1Compat",windowId:"ext-window",documentId:"ext-document",isReady:false,enableGarbageCollector:true,enableListenerCollection:true,id:function(a,c){var b=this,d="";a=Ext.getDom(a,true)||{};if(a===document){a.id=b.documentId}else{if(a===window){a.id=b.windowId}}if(!a.id){if(b.isSandboxed){if(!b.uniqueGlobalNamespace){b.getUniqueGlobalNamespace()}d=b.uniqueGlobalNamespace+"-"}a.id=d+(c||"ext-gen")+(++Ext.idSeed)}return a.id},getBody:function(){return Ext.get(document.body||false)},getHead:function(){var a;return function(){if(a==undefined){a=Ext.get(document.getElementsByTagName("head")[0])}return a}}(),getDoc:function(){return Ext.get(document)},getCmp:function(a){return Ext.ComponentManager.get(a)},getOrientation:function(){return window.innerHeight>window.innerWidth?"portrait":"landscape"},destroy:function(){var c=arguments.length,b,a;for(b=0;b<c;b++){a=arguments[b];if(a){if(Ext.isArray(a)){this.destroy.apply(this,a)}else{if(Ext.isFunction(a.destroy)){a.destroy()}else{if(a.dom){a.remove()}}}}}},callback:function(d,c,b,a){if(Ext.isFunction(d)){b=b||[];c=c||window;if(a){Ext.defer(d,a,c,b)}else{d.apply(c,b)}}},htmlEncode:function(a){return Ext.String.htmlEncode(a)},htmlDecode:function(a){return Ext.String.htmlDecode(a)},urlAppend:function(a,b){if(!Ext.isEmpty(b)){return a+(a.indexOf("?")===-1?"?":"&")+b}return a}});Ext.ns=Ext.namespace;window.undefined=window.undefined;(function(){var B=function(e){return e.test(Ext.userAgent)},i=function(N,M){var e;return(N&&(e=M.exec(Ext.userAgent)))?parseFloat(e[1]):0},p=document.documentMode,G=B(/opera/),r=G&&B(/version\/10\.5/),g=B(/\bchrome\b/),y=B(/webkit/),A=!g&&B(/safari/),d=A&&B(/applewebkit\/4/),c=A&&B(/version\/3/),L=A&&B(/version\/4/),J=A&&B(/version\/5/),w=!G&&B(/msie/),u=w&&(B(/msie 7/)||p==7),t=w&&(B(/msie 8/)&&p!=7&&p!=9||p==8),s=w&&(B(/msie 9/)&&p!=7&&p!=8||p==9),v=w&&B(/msie 6/),q=!y&&B(/gecko/),b=q&&B(/rv:1\.9/),K=q&&B(/rv:2\.0/),I=q&&B(/rv:5\./),a=b&&B(/rv:1\.9\.0/),F=b&&B(/rv:1\.9\.1/),E=b&&B(/rv:1\.9\.2/),D=B(/windows|win32/),m=B(/macintosh|mac os x/),n=B(/linux/),x=null,l=i(true,/\bchrome\/(\d+\.\d+)/),h=i(true,/\bfirefox\/(\d+\.\d+)/),j=i(w,/msie (\d+\.\d+)/),C=i(G,/version\/(\d+\.\d+)/),H=i(A,/version\/(\d+\.\d+)/),k=i(y,/webkit\/(\d+\.\d+)/);try{document.execCommand("BackgroundImageCache",false,true)}catch(z){}Ext.setVersion("extjs","4.0.5");Ext.apply(Ext,{SSL_SECURE_URL:Ext.isSecure&&w?'javascript:""':"about:blank",scopeResetCSS:Ext.buildSettings.scopeResetCSS,enableNestedListenerRemoval:false,USE_NATIVE_JSON:false,getDom:function(N,M){if(!N||!document){return null}if(N.dom){return N.dom}else{if(typeof N=="string"){var O=document.getElementById(N);if(O&&w&&M){if(N==O.getAttribute("id")){return O}else{return null}}return O}else{return N}}},removeNode:v||u?function(){var e;return function(M){if(M&&M.tagName!="BODY"){(Ext.enableNestedListenerRemoval)?Ext.EventManager.purgeElement(M):Ext.EventManager.removeAll(M);e=e||document.createElement("div");e.appendChild(M);e.innerHTML="";delete Ext.cache[M.id]}}}():function(e){if(e&&e.parentNode&&e.tagName!="BODY"){(Ext.enableNestedListenerRemoval)?Ext.EventManager.purgeElement(e):Ext.EventManager.removeAll(e);e.parentNode.removeChild(e);delete Ext.cache[e.id]}},isOpera:G,isOpera10_5:r,isWebKit:y,isChrome:g,isSafari:A,isSafari3:c,isSafari4:L,isSafari5:J,isSafari2:d,isIE:w,isIE6:v,isIE7:u,isIE8:t,isIE9:s,isGecko:q,isGecko3:b,isGecko4:K,isGecko5:I,isFF3_0:a,isFF3_5:F,isFF3_6:E,isFF4:4<=h&&h<5,isFF5:5<=h&&h<6,isLinux:n,isWindows:D,isMac:m,chromeVersion:l,firefoxVersion:h,ieVersion:j,operaVersion:C,safariVersion:H,webKitVersion:k,BLANK_IMAGE_URL:(v||u)?"http://www.sencha.com/s.gif":"data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",value:function(N,e,M){return Ext.isEmpty(N,M)?e:N},escapeRe:function(e){return e.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},addBehaviors:function(P){if(!Ext.isReady){Ext.onReady(function(){Ext.addBehaviors(P)})}else{var M={},O,e,N;for(e in P){if((O=e.split("@"))[1]){N=O[0];if(!M[N]){M[N]=Ext.select(N)}M[N].on(O[1],P[e])}}M=null}},getScrollbarSize:function(P){if(!Ext.isReady){return 0}if(P===true||x===null){var N=Ext.isIE9?"":Ext.baseCSSPrefix+"hide-offsets",R=Ext.getBody().createChild('<div class="'+N+'" style="width:100px;height:50px;overflow:hidden;"><div style="height:200px;"></div></div>'),Q=R.child("div",true),M=Q.offsetWidth;R.setStyle("overflow",(Ext.isWebKit||Ext.isGecko)?"auto":"scroll");var e=Q.offsetWidth,O=M-e;R.remove();x={width:O,height:O}}return x},getScrollBarWidth:function(M){var e=Ext.getScrollbarSize(M);return e.width+2},copyTo:function(e,M,O,N){if(typeof O=="string"){O=O.split(/[,;\s]/)}Ext.each(O,function(P){if(N||M.hasOwnProperty(P)){e[P]=M[P]}},this);return e},destroyMembers:function(O){for(var N=1,M=arguments,e=M.length;N<e;N++){Ext.destroy(O[M[N]]);delete O[M[N]]}},log:Ext.emptyFn,partition:function(e,M){var N=[[],[]];Ext.each(e,function(P,Q,O){N[(M&&M(P,Q,O))||(!M&&P)?0:1].push(P)});return N},invoke:function(e,M){var O=[],N=Array.prototype.slice.call(arguments,2);Ext.each(e,function(P,Q){if(P&&typeof P[M]=="function"){O.push(P[M].apply(P,N))}else{O.push(undefined)}});return O},zip:function(){var S=Ext.partition(arguments,function(T){return typeof T!="function"}),P=S[0],R=S[1][0],e=Ext.max(Ext.pluck(P,"length")),O=[];for(var Q=0;Q<e;Q++){O[Q]=[];if(R){O[Q]=R.apply(R,Ext.pluck(P,Q))}else{for(var N=0,M=P.length;N<M;N++){O[Q].push(P[N][Q])}}}return O},toSentence:function(M,e){var P=M.length;if(P<=1){return M[0]}else{var O=M.slice(0,P-1),N=M[P-1];return Ext.util.Format.format("{0} {1} {2}",O.join(", "),e||"and",N)}},useShims:v})})();Ext.application=function(a){Ext.require("Ext.app.Application");Ext.onReady(function(){Ext.create("Ext.app.Application",a)})};(function(){Ext.ns("Ext.util");Ext.util.Format={};var g=Ext.util.Format,e=/<\/?[^>]+>/gi,c=/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,b=/\r?\n/g,d=/[^\d\.]/g,a;Ext.apply(g,{thousandSeparator:",",decimalSeparator:".",currencyPrecision:2,currencySign:"$",currencyAtEnd:false,undef:function(h){return h!==undefined?h:""},defaultValue:function(i,h){return i!==undefined&&i!==""?i:h},substr:function(i,j,h){return String(i).substr(j,h)},lowercase:function(h){return String(h).toLowerCase()},uppercase:function(h){return String(h).toUpperCase()},usMoney:function(h){return g.currency(h,"$",2)},currency:function(k,m,j,h){var p="",n=",0",l=0;k=k-0;if(k<0){k=-k;p="-"}j=j||g.currencyPrecision;n+=n+(j>0?".":"");for(;l<j;l++){n+="0"}k=g.number(k,n);if((h||g.currencyAtEnd)===true){return Ext.String.format("{0}{1}{2}",p,k,m||g.currencySign)}else{return Ext.String.format("{0}{1}{2}",p,m||g.currencySign,k)}},date:function(h,i){if(!h){return""}if(!Ext.isDate(h)){h=new Date(Date.parse(h))}return Ext.Date.dateFormat(h,i||Ext.Date.defaultFormat)},dateRenderer:function(h){return function(i){return g.date(i,h)}},stripTags:function(h){return !h?h:String(h).replace(e,"")},stripScripts:function(h){return !h?h:String(h).replace(c,"")},fileSize:function(h){if(h<1024){return h+" bytes"}else{if(h<1048576){return(Math.round(((h*10)/1024))/10)+" KB"}else{return(Math.round(((h*10)/1048576))/10)+" MB"}}},math:function(){var h={};return function(j,i){if(!h[i]){h[i]=Ext.functionFactory("v","return v "+i+";")}return h[i](j)}}(),round:function(j,i){var h=Number(j);if(typeof i=="number"){i=Math.pow(10,i);h=Math.round(j*i)/i}return h},number:function(z,t){if(!t){return z}z=Ext.Number.from(z,NaN);if(isNaN(z)){return""}var B=g.thousandSeparator,r=g.decimalSeparator,A=false,s=z<0,k,h;z=Math.abs(z);if(t.substr(t.length-2)=="/i"){if(!a){a=new RegExp("[^\\d\\"+g.decimalSeparator+"]","g")}t=t.substr(0,t.length-2);A=true;k=t.indexOf(B)!=-1;h=t.replace(a,"").split(r)}else{k=t.indexOf(",")!=-1;h=t.replace(d,"").split(".")}if(1<h.length){z=z.toFixed(h[1].length)}else{if(2<h.length){}else{z=z.toFixed(0)}}var y=z.toString();h=y.split(".");if(k){var x=h[0],q=[],u=x.length,p=Math.floor(u/3),l=x.length%3||3,w;for(w=0;w<u;w+=l){if(w!==0){l=3}q[q.length]=x.substr(w,l);p-=1}y=q.join(B);if(h[1]){y+=r+h[1]}}else{if(h[1]){y=h[0]+r+h[1]}}if(s){s=y.replace(/[^1-9]/g,"")!==""}return(s?"-":"")+t.replace(/[\d,?\.?]+/,y)},numberRenderer:function(h){return function(i){return g.number(i,h)}},plural:function(h,i,j){return h+" "+(h==1?i:(j?j:i+"s"))},nl2br:function(h){return Ext.isEmpty(h)?"":h.replace(b,"<br/>")},capitalize:Ext.String.capitalize,ellipsis:Ext.String.ellipsis,format:Ext.String.format,htmlDecode:Ext.String.htmlDecode,htmlEncode:Ext.String.htmlEncode,leftPad:Ext.String.leftPad,trim:Ext.String.trim,parseBox:function(i){if(Ext.isNumber(i)){i=i.toString()}var j=i.split(" "),h=j.length;if(h==1){j[1]=j[2]=j[3]=j[0]}else{if(h==2){j[2]=j[0];j[3]=j[1]}else{if(h==3){j[3]=j[1]}}}return{top:parseInt(j[0],10)||0,right:parseInt(j[1],10)||0,bottom:parseInt(j[2],10)||0,left:parseInt(j[3],10)||0}},escapeRegex:function(h){return h.replace(/([\-.*+?\^${}()|\[\]\/\\])/g,"\\$1")}})})();Ext.ns("Ext.util");Ext.util.TaskRunner=function(e){e=e||10;var g=[],a=[],b=0,h=false,d=function(){h=false;clearInterval(b);b=0},i=function(){if(!h){h=true;b=setInterval(j,e)}},c=function(k){a.push(k);if(k.onStop){k.onStop.apply(k.scope||k)}},j=function(){var m=a.length,p=new Date().getTime(),r;if(m>0){for(r=0;r<m;r++){Ext.Array.remove(g,a[r])}a=[];if(g.length<1){d();return}}r=0;var q,l,n,k=g.length;for(;r<k;++r){q=g[r];l=p-q.taskRunTime;if(q.interval<=l){n=q.run.apply(q.scope||q,q.args||[++q.taskRunCount]);q.taskRunTime=p;if(n===false||q.taskRunCount===q.repeat){c(q);return}}if(q.duration&&q.duration<=(p-q.taskStartTime)){c(q)}}};this.start=function(k){g.push(k);k.taskStartTime=new Date().getTime();k.taskRunTime=0;k.taskRunCount=0;i();return k};this.stop=function(k){c(k);return k};this.stopAll=function(){d();for(var l=0,k=g.length;l<k;l++){if(g[l].onStop){g[l].onStop()}}g=[];a=[]}};Ext.TaskManager=Ext.create("Ext.util.TaskRunner");Ext.is={init:function(b){var c=this.platforms,e=c.length,d,a;b=b||window.navigator;for(d=0;d<e;d++){a=c[d];this[a.identity]=a.regex.test(b[a.property])}this.Desktop=this.Mac||this.Windows||(this.Linux&&!this.Android);this.Tablet=this.iPad;this.Phone=!this.Desktop&&!this.Tablet;this.iOS=this.iPhone||this.iPad||this.iPod;this.Standalone=!!window.navigator.standalone},platforms:[{property:"platform",regex:/iPhone/i,identity:"iPhone"},{property:"platform",regex:/iPod/i,identity:"iPod"},{property:"userAgent",regex:/iPad/i,identity:"iPad"},{property:"userAgent",regex:/Blackberry/i,identity:"Blackberry"},{property:"userAgent",regex:/Android/i,identity:"Android"},{property:"platform",regex:/Mac/i,identity:"Mac"},{property:"platform",regex:/Win/i,identity:"Windows"},{property:"platform",regex:/Linux/i,identity:"Linux"}]};Ext.is.init();Ext.supports={init:function(){var d=document,g=d.createElement("div"),b=this.tests,c=b.length,a,e;g.innerHTML=['<div style="height:30px;width:50px;">','<div style="height:20px;width:20px;"></div>',"</div>",'<div style="width: 200px; height: 200px; position: relative; padding: 5px;">','<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>',"</div>",'<div style="float:left; background-color:transparent;"></div>'].join("");d.body.appendChild(g);for(a=0;a<c;a++){e=b[a];this[e.identity]=e.fn.call(this,d,g)}d.body.removeChild(g)},CSS3BoxShadow:Ext.isDefined(document.documentElement.style.boxShadow),ClassList:!!document.documentElement.classList,OrientationChange:((typeof window.orientation!="undefined")&&("onorientationchange" in window)),DeviceMotion:("ondevicemotion" in window),Touch:("ontouchstart" in window)&&(!Ext.is.Desktop),tests:[{identity:"Transitions",fn:function(g,j){var e=["webkit","Moz","o","ms","khtml"],h="TransitionEnd",a=[e[0]+h,"transitionend",e[2]+h,e[3]+h,e[4]+h],d=e.length,c=0,b=false;j=Ext.get(j);for(;c<d;c++){if(j.getStyle(e[c]+"TransitionProperty")){Ext.supports.CSS3Prefix=e[c];Ext.supports.CSS3TransitionEnd=a[c];b=true;break}}return b}},{identity:"RightMargin",fn:function(b,c){var a=b.defaultView;return !(a&&a.getComputedStyle(c.firstChild.firstChild,null).marginRight!="0px")}},{identity:"DisplayChangeInputSelectionBug",fn:function(){var a=Ext.webKitVersion;return 0<a&&a<533}},{identity:"DisplayChangeTextAreaSelectionBug",fn:function(){var a=Ext.webKitVersion;return 0<a&&a<534.24}},{identity:"TransparentColor",fn:function(b,c,a){a=b.defaultView;return !(a&&a.getComputedStyle(c.lastChild,null).backgroundColor!="transparent")}},{identity:"ComputedStyle",fn:function(b,c,a){a=b.defaultView;return a&&a.getComputedStyle}},{identity:"Svg",fn:function(a){return !!a.createElementNS&&!!a.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}},{identity:"Canvas",fn:function(a){return !!a.createElement("canvas").getContext}},{identity:"Vml",fn:function(a){var b=a.createElement("div");b.innerHTML="<!--[if vml]><br><br><![endif]-->";return(b.childNodes.length==2)}},{identity:"Float",fn:function(a,b){return !!b.lastChild.style.cssFloat}},{identity:"AudioTag",fn:function(a){return !!a.createElement("audio").canPlayType}},{identity:"History",fn:function(){return !!(window.history&&history.pushState)}},{identity:"CSS3DTransform",fn:function(){return(typeof WebKitCSSMatrix!="undefined"&&new WebKitCSSMatrix().hasOwnProperty("m41"))}},{identity:"CSS3LinearGradient",fn:function(e,h){var d="background-image:",b="-webkit-gradient(linear, left top, right bottom, from(black), to(white))",g="linear-gradient(left top, black, white)",c="-moz-"+g,a=[d+b,d+g,d+c];h.style.cssText=a.join(";");return(""+h.style.backgroundImage).indexOf("gradient")!==-1}},{identity:"CSS3BorderRadius",fn:function(d,e){var b=["borderRadius","BorderRadius","MozBorderRadius","WebkitBorderRadius","OBorderRadius","KhtmlBorderRadius"],c=false,a;for(a=0;a<b.length;a++){if(document.body.style[b[a]]!==undefined){return true}}return c}},{identity:"GeoLocation",fn:function(){return(typeof navigator!="undefined"&&typeof navigator.geolocation!="undefined")||(typeof google!="undefined"&&typeof google.gears!="undefined")}},{identity:"MouseEnterLeave",fn:function(a,b){return("onmouseenter" in b&&"onmouseleave" in b)}},{identity:"MouseWheel",fn:function(a,b){return("onmousewheel" in b)}},{identity:"Opacity",fn:function(a,b){if(Ext.isIE6||Ext.isIE7||Ext.isIE8){return false}b.firstChild.style.cssText="opacity:0.73";return b.firstChild.style.opacity=="0.73"}},{identity:"Placeholder",fn:function(a){return"placeholder" in a.createElement("input")}},{identity:"Direct2DBug",fn:function(){return Ext.isString(document.body.style.msTransformOrigin)}},{identity:"BoundingClientRect",fn:function(a,b){return Ext.isFunction(b.getBoundingClientRect)}},{identity:"IncludePaddingInWidthCalculation",fn:function(b,c){var a=Ext.get(c.childNodes[1].firstChild);return a.getWidth()==210}},{identity:"IncludePaddingInHeightCalculation",fn:function(b,c){var a=Ext.get(c.childNodes[1].firstChild);return a.getHeight()==210}},{identity:"ArraySort",fn:function(){var b=[1,2,3,4,5].sort(function(){return 0});return b[0]===1&&b[1]===2&&b[2]===3&&b[3]===4&&b[4]===5}},{identity:"Range",fn:function(){return !!document.createRange}},{identity:"CreateContextualFragment",fn:function(){var a=Ext.supports.Range?document.createRange():false;return a&&!!a.createContextualFragment}},{identity:"WindowOnError",fn:function(){return Ext.isIE||Ext.isGecko||Ext.webKitVersion>=534.16}}]};Ext.ns("Ext.core");Ext.core.DomHelper=Ext.DomHelper=function(){var y=null,k=/^(?:br|frame|hr|img|input|link|meta|range|spacer|wbr|area|param|col)$/i,m=/^table|tbody|tr|td$/i,d=/tag|children|cn|html$/i,u=/td|tr|tbody/i,w=/end/i,s,p="afterbegin",q="afterend",c="beforebegin",r="beforeend",a="<table>",i="</table>",b=a+"<tbody>",j="</tbody>"+i,l=b+"<tr>",x="</tr>"+j;function h(C,E,D,F,B,z){C=Ext.getDom(C);var A;if(s.useDom){A=n(E,null);if(z){C.appendChild(A)}else{(B=="firstChild"?C:C.parentNode).insertBefore(A,C[B]||C)}}else{A=Ext.DomHelper.insertHtml(F,C,Ext.DomHelper.createHtml(E))}return D?Ext.get(A,true):A}function n(z,F){var A,I=document,D,G,B,H;if(Ext.isArray(z)){A=I.createDocumentFragment();for(var E=0,C=z.length;E<C;E++){n(z[E],A)}}else{if(typeof z=="string"){A=I.createTextNode(z)}else{A=I.createElement(z.tag||"div");D=!!A.setAttribute;for(G in z){if(!d.test(G)){B=z[G];if(G=="cls"){A.className=B}else{if(D){A.setAttribute(G,B)}else{A[G]=B}}}}Ext.DomHelper.applyStyles(A,z.style);if((H=z.children||z.cn)){n(H,A)}else{if(z.html){A.innerHTML=z.html}}}}if(F){F.appendChild(A)}return A}function v(E){var A="",z,D,C,F,B;if(typeof E=="string"){A=E}else{if(Ext.isArray(E)){for(B=0;B<E.length;B++){if(E[B]){A+=v(E[B])}}}else{A+="<"+(E.tag=E.tag||"div");for(z in E){D=E[z];if(!d.test(z)){if(typeof D=="object"){A+=" "+z+'="';for(C in D){A+=C+":"+D[C]+";"}A+='"'}else{A+=" "+({cls:"class",htmlFor:"for"}[z]||z)+'="'+D+'"'}}}if(k.test(E.tag)){A+="/>"}else{A+=">";if((F=E.children||E.cn)){A+=v(F)}else{if(E.html){A+=E.html}}A+="</"+E.tag+">"}}}return A}function g(G,D,C,E){y.innerHTML=[D,C,E].join("");var z=-1,B=y,A;while(++z<G){B=B.firstChild}A=B.nextSibling;if(A){var F=document.createDocumentFragment();while(B){A=B.nextSibling;F.appendChild(B);B=A}B=F}return B}function e(z,A,C,B){var D,E;y=y||document.createElement("div");if(z=="td"&&(A==p||A==r)||!u.test(z)&&(A==c||A==q)){return null}E=A==c?C:A==q?C.nextSibling:A==p?C.firstChild:null;if(A==c||A==q){C=C.parentNode}if(z=="td"||(z=="tr"&&(A==r||A==p))){D=g(4,l,B,x)}else{if((z=="tbody"&&(A==r||A==p))||(z=="tr"&&(A==c||A==q))){D=g(3,b,B,j)}else{D=g(2,a,B,i)}}C.insertBefore(D,E);return D}function t(B){var E=document.createElement("div"),z=document.createDocumentFragment(),A=0,C,D;E.innerHTML=B;D=E.childNodes;C=D.length;for(;A<C;A++){z.appendChild(D[A].cloneNode(true))}return z}s={markup:function(z){return v(z)},applyStyles:function(z,A){if(A){z=Ext.fly(z);if(typeof A=="function"){A=A.call()}if(typeof A=="string"){A=Ext.Element.parseStyles(A)}if(typeof A=="object"){z.setStyle(A)}}},insertHtml:function(E,z,F){var C={},B,G,D,H,I,A;E=E.toLowerCase();C[c]=["BeforeBegin","previousSibling"];C[q]=["AfterEnd","nextSibling"];if(z.insertAdjacentHTML){if(m.test(z.tagName)&&(A=e(z.tagName.toLowerCase(),E,z,F))){return A}C[p]=["AfterBegin","firstChild"];C[r]=["BeforeEnd","lastChild"];if((B=C[E])){z.insertAdjacentHTML(B[0],F);return z[B[1]]}}else{if(Ext.isTextNode(z)){E=E==="afterbegin"?"beforebegin":E;E=E==="beforeend"?"afterend":E}G=Ext.supports.CreateContextualFragment?z.ownerDocument.createRange():undefined;H="setStart"+(w.test(E)?"After":"Before");if(C[E]){if(G){G[H](z);I=G.createContextualFragment(F)}else{I=t(F)}z.parentNode.insertBefore(I,E==c?z:z.nextSibling);return z[(E==c?"previous":"next")+"Sibling"]}else{D=(E==p?"first":"last")+"Child";if(z.firstChild){if(G){G[H](z[D]);I=G.createContextualFragment(F)}else{I=t(F)}if(E==p){z.insertBefore(I,z.firstChild)}else{z.appendChild(I)}}else{z.innerHTML=F}return z[D]}}},insertBefore:function(z,B,A){return h(z,B,A,c)},insertAfter:function(z,B,A){return h(z,B,A,q,"nextSibling")},insertFirst:function(z,B,A){return h(z,B,A,p,"firstChild")},append:function(z,B,A){return h(z,B,A,r,"",true)},overwrite:function(z,B,A){z=Ext.getDom(z);z.innerHTML=v(B);return A?Ext.get(z.firstChild):z.firstChild},createHtml:v,createDom:n,useDom:false,createTemplate:function(A){var z=Ext.DomHelper.createHtml(A);return Ext.create("Ext.Template",z)}};return s}();Ext.ns("Ext.core");Ext.core.DomQuery=Ext.DomQuery=function(){var cache={},simpleCache={},valueCache={},nonSpace=/\S/,trimRe=/^\s+|\s+$/g,tplRe=/\{(\d+)\}/g,modeRe=/^(\s?[\/>+~]\s?|\s|$)/,tagTokenRe=/^(#)?([\w-\*]+)/,nthRe=/(\d*)n\+?(\d*)/,nthRe2=/\D/,startIdRe=/^\s*\#/,isIE=window.ActiveXObject?true:false,key=30803;eval("var batch = 30803;");function child(parent,index){var i=0,n=parent.firstChild;while(n){if(n.nodeType==1){if(++i==index){return n}}n=n.nextSibling}return null}function next(n){while((n=n.nextSibling)&&n.nodeType!=1){}return n}function prev(n){while((n=n.previousSibling)&&n.nodeType!=1){}return n}function children(parent){var n=parent.firstChild,nodeIndex=-1,nextNode;while(n){nextNode=n.nextSibling;if(n.nodeType==3&&!nonSpace.test(n.nodeValue)){parent.removeChild(n)}else{n.nodeIndex=++nodeIndex}n=nextNode}return this}function byClassName(nodeSet,cls){if(!cls){return nodeSet}var result=[],ri=-1;for(var i=0,ci;ci=nodeSet[i];i++){if((" "+ci.className+" ").indexOf(cls)!=-1){result[++ri]=ci}}return result}function attrValue(n,attr){if(!n.tagName&&typeof n.length!="undefined"){n=n[0]}if(!n){return null}if(attr=="for"){return n.htmlFor}if(attr=="class"||attr=="className"){return n.className}return n.getAttribute(attr)||n[attr]}function getNodes(ns,mode,tagName){var result=[],ri=-1,cs;if(!ns){return result}tagName=tagName||"*";if(typeof ns.getElementsByTagName!="undefined"){ns=[ns]}if(!mode){for(var i=0,ni;ni=ns[i];i++){cs=ni.getElementsByTagName(tagName);for(var j=0,ci;ci=cs[j];j++){result[++ri]=ci}}}else{if(mode=="/"||mode==">"){var utag=tagName.toUpperCase();for(var i=0,ni,cn;ni=ns[i];i++){cn=ni.childNodes;for(var j=0,cj;cj=cn[j];j++){if(cj.nodeName==utag||cj.nodeName==tagName||tagName=="*"){result[++ri]=cj}}}}else{if(mode=="+"){var utag=tagName.toUpperCase();for(var i=0,n;n=ns[i];i++){while((n=n.nextSibling)&&n.nodeType!=1){}if(n&&(n.nodeName==utag||n.nodeName==tagName||tagName=="*")){result[++ri]=n}}}else{if(mode=="~"){var utag=tagName.toUpperCase();for(var i=0,n;n=ns[i];i++){while((n=n.nextSibling)){if(n.nodeName==utag||n.nodeName==tagName||tagName=="*"){result[++ri]=n}}}}}}}return result}function concat(a,b){if(b.slice){return a.concat(b)}for(var i=0,l=b.length;i<l;i++){a[a.length]=b[i]}return a}function byTag(cs,tagName){if(cs.tagName||cs==document){cs=[cs]}if(!tagName){return cs}var result=[],ri=-1;tagName=tagName.toLowerCase();for(var i=0,ci;ci=cs[i];i++){if(ci.nodeType==1&&ci.tagName.toLowerCase()==tagName){result[++ri]=ci}}return result}function byId(cs,id){if(cs.tagName||cs==document){cs=[cs]}if(!id){return cs}var result=[],ri=-1;for(var i=0,ci;ci=cs[i];i++){if(ci&&ci.id==id){result[++ri]=ci;return result}}return result}function byAttribute(cs,attr,value,op,custom){var result=[],ri=-1,useGetStyle=custom=="{",fn=Ext.DomQuery.operators[op],a,xml,hasXml;for(var i=0,ci;ci=cs[i];i++){if(ci.nodeType!=1){continue}if(!hasXml){xml=Ext.DomQuery.isXml(ci);hasXml=true}if(!xml){if(useGetStyle){a=Ext.DomQuery.getStyle(ci,attr)}else{if(attr=="class"||attr=="className"){a=ci.className}else{if(attr=="for"){a=ci.htmlFor}else{if(attr=="href"){a=ci.getAttribute("href",2)}else{a=ci.getAttribute(attr)}}}}}else{a=ci.getAttribute(attr)}if((fn&&fn(a,value))||(!fn&&a)){result[++ri]=ci}}return result}function byPseudo(cs,name,value){return Ext.DomQuery.pseudos[name](cs,value)}function nodupIEXml(cs){var d=++key,r;cs[0].setAttribute("_nodup",d);r=[cs[0]];for(var i=1,len=cs.length;i<len;i++){var c=cs[i];if(!c.getAttribute("_nodup")!=d){c.setAttribute("_nodup",d);r[r.length]=c}}for(var i=0,len=cs.length;i<len;i++){cs[i].removeAttribute("_nodup")}return r}function nodup(cs){if(!cs){return[]}var len=cs.length,c,i,r=cs,cj,ri=-1;if(!len||typeof cs.nodeType!="undefined"||len==1){return cs}if(isIE&&typeof cs[0].selectSingleNode!="undefined"){return nodupIEXml(cs)}var d=++key;cs[0]._nodup=d;for(i=1;c=cs[i];i++){if(c._nodup!=d){c._nodup=d}else{r=[];for(var j=0;j<i;j++){r[++ri]=cs[j]}for(j=i+1;cj=cs[j];j++){if(cj._nodup!=d){cj._nodup=d;r[++ri]=cj}}return r}}return r}function quickDiffIEXml(c1,c2){var d=++key,r=[];for(var i=0,len=c1.length;i<len;i++){c1[i].setAttribute("_qdiff",d)}for(var i=0,len=c2.length;i<len;i++){if(c2[i].getAttribute("_qdiff")!=d){r[r.length]=c2[i]}}for(var i=0,len=c1.length;i<len;i++){c1[i].removeAttribute("_qdiff")}return r}function quickDiff(c1,c2){var len1=c1.length,d=++key,r=[];if(!len1){return c2}if(isIE&&typeof c1[0].selectSingleNode!="undefined"){return quickDiffIEXml(c1,c2)}for(var i=0;i<len1;i++){c1[i]._qdiff=d}for(var i=0,len=c2.length;i<len;i++){if(c2[i]._qdiff!=d){r[r.length]=c2[i]}}return r}function quickId(ns,mode,root,id){if(ns==root){var d=root.ownerDocument||root;return d.getElementById(id)}ns=getNodes(ns,mode,"*");return byId(ns,id)}return{getStyle:function(el,name){return Ext.fly(el).getStyle(name)},compile:function(path,type){type=type||"select";var fn=["var f = function(root){\n var mode; ++batch; var n = root || document;\n"],mode,lastPath,matchers=Ext.DomQuery.matchers,matchersLn=matchers.length,modeMatch,lmode=path.match(modeRe);if(lmode&&lmode[1]){fn[fn.length]='mode="'+lmode[1].replace(trimRe,"")+'";';path=path.replace(lmode[1],"")}while(path.substr(0,1)=="/"){path=path.substr(1)}while(path&&lastPath!=path){lastPath=path;var tokenMatch=path.match(tagTokenRe);if(type=="select"){if(tokenMatch){if(tokenMatch[1]=="#"){fn[fn.length]='n = quickId(n, mode, root, "'+tokenMatch[2]+'");'}else{fn[fn.length]='n = getNodes(n, mode, "'+tokenMatch[2]+'");'}path=path.replace(tokenMatch[0],"")}else{if(path.substr(0,1)!="@"){fn[fn.length]='n = getNodes(n, mode, "*");'}}}else{if(tokenMatch){if(tokenMatch[1]=="#"){fn[fn.length]='n = byId(n, "'+tokenMatch[2]+'");'}else{fn[fn.length]='n = byTag(n, "'+tokenMatch[2]+'");'}path=path.replace(tokenMatch[0],"")}}while(!(modeMatch=path.match(modeRe))){var matched=false;for(var j=0;j<matchersLn;j++){var t=matchers[j];var m=path.match(t.re);if(m){fn[fn.length]=t.select.replace(tplRe,function(x,i){return m[i]});path=path.replace(m[0],"");matched=true;break}}if(!matched){}}if(modeMatch[1]){fn[fn.length]='mode="'+modeMatch[1].replace(trimRe,"")+'";';path=path.replace(modeMatch[1],"")}}fn[fn.length]="return nodup(n);\n}";eval(fn.join(""));return f},jsSelect:function(path,root,type){root=root||document;if(typeof root=="string"){root=document.getElementById(root)}var paths=path.split(","),results=[];for(var i=0,len=paths.length;i<len;i++){var subPath=paths[i].replace(trimRe,"");if(!cache[subPath]){cache[subPath]=Ext.DomQuery.compile(subPath);if(!cache[subPath]){}}var result=cache[subPath](root);if(result&&result!=document){results=results.concat(result)}}if(paths.length>1){return nodup(results)}return results},isXml:function(el){var docEl=(el?el.ownerDocument||el:0).documentElement;return docEl?docEl.nodeName!=="HTML":false},select:document.querySelectorAll?function(path,root,type){root=root||document;if(!Ext.DomQuery.isXml(root)){try{var isDocumentRoot=root.nodeType===9,_path=path,_root=root;if(!isDocumentRoot&&path.indexOf(",")===-1&&!startIdRe.test(path)){_path="#"+Ext.id(root)+" "+path;_root=root.parentNode}return Ext.Array.toArray(_root.querySelectorAll(_path))}catch(e){}}return Ext.DomQuery.jsSelect.call(this,path,root,type)}:function(path,root,type){return Ext.DomQuery.jsSelect.call(this,path,root,type)},selectNode:function(path,root){return Ext.DomQuery.select(path,root)[0]},selectValue:function(path,root,defaultValue){path=path.replace(trimRe,"");if(!valueCache[path]){valueCache[path]=Ext.DomQuery.compile(path,"select")}var n=valueCache[path](root),v;n=n[0]?n[0]:n;if(typeof n.normalize=="function"){n.normalize()}v=(n&&n.firstChild?n.firstChild.nodeValue:null);return((v===null||v===undefined||v==="")?defaultValue:v)},selectNumber:function(path,root,defaultValue){var v=Ext.DomQuery.selectValue(path,root,defaultValue||0);return parseFloat(v)},is:function(el,ss){if(typeof el=="string"){el=document.getElementById(el)}var isArray=Ext.isArray(el),result=Ext.DomQuery.filter(isArray?el:[el],ss);return isArray?(result.length==el.length):(result.length>0)},filter:function(els,ss,nonMatches){ss=ss.replace(trimRe,"");if(!simpleCache[ss]){simpleCache[ss]=Ext.DomQuery.compile(ss,"simple")}var result=simpleCache[ss](els);return nonMatches?quickDiff(result,els):result},matchers:[{re:/^\.([\w-]+)/,select:'n = byClassName(n, " {1} ");'},{re:/^\:([\w-]+)(?:\(((?:[^\s>\/]*|.*?))\))?/,select:'n = byPseudo(n, "{1}", "{2}");'},{re:/^(?:([\[\{])(?:@)?([\w-]+)\s?(?:(=|.=)\s?['"]?(.*?)["']?)?[\]\}])/,select:'n = byAttribute(n, "{2}", "{4}", "{3}", "{1}");'},{re:/^#([\w-]+)/,select:'n = byId(n, "{1}");'},{re:/^@([\w-]+)/,select:'return {firstChild:{nodeValue:attrValue(n, "{1}")}};'}],operators:{"=":function(a,v){return a==v},"!=":function(a,v){return a!=v},"^=":function(a,v){return a&&a.substr(0,v.length)==v},"$=":function(a,v){return a&&a.substr(a.length-v.length)==v},"*=":function(a,v){return a&&a.indexOf(v)!==-1},"%=":function(a,v){return(a%v)==0},"|=":function(a,v){return a&&(a==v||a.substr(0,v.length+1)==v+"-")},"~=":function(a,v){return a&&(" "+a+" ").indexOf(" "+v+" ")!=-1}},pseudos:{"first-child":function(c){var r=[],ri=-1,n;for(var i=0,ci;ci=n=c[i];i++){while((n=n.previousSibling)&&n.nodeType!=1){}if(!n){r[++ri]=ci}}return r},"last-child":function(c){var r=[],ri=-1,n;for(var i=0,ci;ci=n=c[i];i++){while((n=n.nextSibling)&&n.nodeType!=1){}if(!n){r[++ri]=ci}}return r},"nth-child":function(c,a){var r=[],ri=-1,m=nthRe.exec(a=="even"&&"2n"||a=="odd"&&"2n+1"||!nthRe2.test(a)&&"n+"+a||a),f=(m[1]||1)-0,l=m[2]-0;for(var i=0,n;n=c[i];i++){var pn=n.parentNode;if(batch!=pn._batch){var j=0;for(var cn=pn.firstChild;cn;cn=cn.nextSibling){if(cn.nodeType==1){cn.nodeIndex=++j}}pn._batch=batch}if(f==1){if(l==0||n.nodeIndex==l){r[++ri]=n}}else{if((n.nodeIndex+l)%f==0){r[++ri]=n}}}return r},"only-child":function(c){var r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){if(!prev(ci)&&!next(ci)){r[++ri]=ci}}return r},empty:function(c){var r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){var cns=ci.childNodes,j=0,cn,empty=true;while(cn=cns[j]){++j;if(cn.nodeType==1||cn.nodeType==3){empty=false;break}}if(empty){r[++ri]=ci}}return r},contains:function(c,v){var r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){if((ci.textContent||ci.innerText||"").indexOf(v)!=-1){r[++ri]=ci}}return r},nodeValue:function(c,v){var r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){if(ci.firstChild&&ci.firstChild.nodeValue==v){r[++ri]=ci}}return r},checked:function(c){var r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){if(ci.checked==true){r[++ri]=ci}}return r},not:function(c,ss){return Ext.DomQuery.filter(c,ss,true)},any:function(c,selectors){var ss=selectors.split("|"),r=[],ri=-1,s;for(var i=0,ci;ci=c[i];i++){for(var j=0;s=ss[j];j++){if(Ext.DomQuery.is(ci,s)){r[++ri]=ci;break}}}return r},odd:function(c){return this["nth-child"](c,"odd")},even:function(c){return this["nth-child"](c,"even")},nth:function(c,a){return c[a-1]||[]},first:function(c){return c[0]||[]},last:function(c){return c[c.length-1]||[]},has:function(c,ss){var s=Ext.DomQuery.select,r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){if(s(ss,ci).length>0){r[++ri]=ci}}return r},next:function(c,ss){var is=Ext.DomQuery.is,r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){var n=next(ci);if(n&&is(n,ss)){r[++ri]=ci}}return r},prev:function(c,ss){var is=Ext.DomQuery.is,r=[],ri=-1;for(var i=0,ci;ci=c[i];i++){var n=prev(ci);if(n&&is(n,ss)){r[++ri]=ci}}return r}}}}();Ext.query=Ext.DomQuery.select;(function(){var h=document,a=Ext.cache;Ext.Element=Ext.core.Element=function(l,m){var n=typeof l=="string"?h.getElementById(l):l,p;if(!n){return null}p=n.id;if(!m&&p&&a[p]){return a[p].el}this.dom=n;this.id=p||Ext.id(n)};var d=Ext.DomHelper,e=Ext.Element;e.prototype={set:function(q,m){var n=this.dom,l,p;m=(m!==false)&&!!n.setAttribute;for(l in q){if(q.hasOwnProperty(l)){p=q[l];if(l=="style"){d.applyStyles(n,p)}else{if(l=="cls"){n.className=p}else{if(m){n.setAttribute(l,p)}else{n[l]=p}}}}}return this},defaultUnit:"px",is:function(l){return Ext.DomQuery.is(this.dom,l)},focus:function(p,n){var l=this;n=n||l.dom;try{if(Number(p)){Ext.defer(l.focus,p,null,[null,n])}else{n.focus()}}catch(m){}return l},blur:function(){try{this.dom.blur()}catch(l){}return this},getValue:function(l){var m=this.dom.value;return l?parseInt(m,10):m},addListener:function(l,p,n,m){Ext.EventManager.on(this.dom,l,p,n||this,m);return this},removeListener:function(l,n,m){Ext.EventManager.un(this.dom,l,n,m||this);return this},removeAllListeners:function(){Ext.EventManager.removeAll(this.dom);return this},purgeAllListeners:function(){Ext.EventManager.purgeElement(this);return this},addUnits:function(m,l){if(Ext.isNumber(m)){return m+(l||this.defaultUnit||"px")}if(m===""||m=="auto"||m===undefined||m===null){return m||""}if(!i.test(m)){return m||""}return m},isBorderBox:function(){return Ext.isBorderBox||g[(this.dom.tagName||"").toLowerCase()]},remove:function(){var l=this,m=l.dom;if(m){delete l.dom;Ext.removeNode(m)}},hover:function(m,l,p,n){var q=this;q.on("mouseenter",m,p||q.dom,n);q.on("mouseleave",l,p||q.dom,n);return q},contains:function(l){return !l?false:Ext.Element.isAncestor(this.dom,l.dom?l.dom:l)},getAttributeNS:function(m,l){return this.getAttribute(l,m)},getAttribute:(Ext.isIE&&!(Ext.isIE9&&document.documentMode===9))?function(l,n){var p=this.dom,m;if(n){m=typeof p[n+":"+l];if(m!="undefined"&&m!="unknown"){return p[n+":"+l]||null}return null}if(l==="for"){l="htmlFor"}return p[l]||null}:function(l,m){var n=this.dom;if(m){return n.getAttributeNS(m,l)||n.getAttribute(m+":"+l)}return n.getAttribute(l)||n[l]||null},update:function(l){if(this.dom){this.dom.innerHTML=l}return this}};var k=e.prototype;e.addMethods=function(l){Ext.apply(k,l)};k.on=k.addListener;k.un=k.removeListener;k.clearListeners=k.removeAllListeners;k.destroy=k.remove;k.autoBoxAdjust=true;var i=/\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i,c;e.get=function(m){var l,q,p;if(!m){return null}if(typeof m=="string"){if(!(q=h.getElementById(m))){return null}if(a[m]&&a[m].el){l=a[m].el;l.dom=q}else{l=e.addToCache(new e(q))}return l}else{if(m.tagName){if(!(p=m.id)){p=Ext.id(m)}if(a[p]&&a[p].el){l=a[p].el;l.dom=m}else{l=e.addToCache(new e(m))}return l}else{if(m instanceof e){if(m!=c){if(Ext.isIE&&(m.id==undefined||m.id=="")){m.dom=m.dom}else{m.dom=h.getElementById(m.id)||m.dom}}return m}else{if(m.isComposite){return m}else{if(Ext.isArray(m)){return e.select(m)}else{if(m==h){if(!c){var n=function(){};n.prototype=e.prototype;c=new n();c.dom=h}return c}}}}}}return null};k.getById=(!Ext.isIE6&&!Ext.isIE7&&!Ext.isIE8)?e.get:function(q){var p=this.dom,n,m,l;if(p){m=p.all[q];if(m){n=a[q];if(n&&n.el){l=n.el;l.dom=m}else{l=e.addToCache(new e(m))}return l}}return e.get(q)};e.addToCache=function(l,m){if(l){m=m||l.id;a[m]={el:l,data:{},events:{}}}return l};e.data=function(m,l,n){m=e.get(m);if(!m){return null}var p=a[m.id].data;if(arguments.length==2){return p[l]}else{return(p[l]=n)}};function j(){if(!Ext.enableGarbageCollector){clearInterval(e.collectorThreadId)}else{var l,n,q,p;for(l in a){if(!a.hasOwnProperty(l)){continue}p=a[l];if(p.skipGarbageCollection){continue}n=p.el;q=n.dom;if(!q||!q.parentNode||(!q.offsetParent&&!h.getElementById(l))){if(q&&Ext.enableListenerCollection){Ext.EventManager.removeAll(q)}delete a[l]}}if(Ext.isIE){var m={};for(l in a){if(!a.hasOwnProperty(l)){continue}m[l]=a[l]}a=Ext.cache=m}}}e.collectorThreadId=setInterval(j,30000);var b=function(){};b.prototype=e.prototype;e.Flyweight=function(l){this.dom=l};e.Flyweight.prototype=new b();e.Flyweight.prototype.isFlyweight=true;e._flyweights={};e.fly=function(n,l){var m=null;l=l||"_global";n=Ext.getDom(n);if(n){(e._flyweights[l]=e._flyweights[l]||new e.Flyweight()).dom=n;m=e._flyweights[l]}return m};Ext.get=e.get;Ext.fly=e.fly;var g=Ext.isStrict?{select:1}:{input:1,select:1,textarea:1};if(Ext.isIE||Ext.isGecko){g.button=1}})();Ext.Element.addMethods({findParent:function(i,h,c){var e=this.dom,a=document.body,g=0,d;h=h||50;if(isNaN(h)){d=Ext.getDom(h);h=Number.MAX_VALUE}while(e&&e.nodeType==1&&g<h&&e!=a&&e!=d){if(Ext.DomQuery.is(e,i)){return c?Ext.get(e):e}g++;e=e.parentNode}return null},findParentNode:function(d,c,a){var b=Ext.fly(this.dom.parentNode,"_internal");return b?b.findParent(d,c,a):null},up:function(b,a){return this.findParentNode(b,a,true)},select:function(a){return Ext.Element.select(a,false,this.dom)},query:function(a){return Ext.DomQuery.select(a,this.dom)},down:function(a,b){var c=Ext.DomQuery.selectNode(a,this.dom);return b?c:Ext.get(c)},child:function(a,b){var d,c=this,e;e=Ext.get(c).id;e=e.replace(/[\.:]/g,"\\$0");d=Ext.DomQuery.selectNode("#"+e+" > "+a,c.dom);return b?d:Ext.get(d)},parent:function(a,b){return this.matchNode("parentNode","parentNode",a,b)},next:function(a,b){return this.matchNode("nextSibling","nextSibling",a,b)},prev:function(a,b){return this.matchNode("previousSibling","previousSibling",a,b)},first:function(a,b){return this.matchNode("nextSibling","firstChild",a,b)},last:function(a,b){return this.matchNode("previousSibling","lastChild",a,b)},matchNode:function(b,e,a,c){if(!this.dom){return null}var d=this.dom[e];while(d){if(d.nodeType==1&&(!a||Ext.DomQuery.is(d,a))){return !c?Ext.get(d):d}d=d[b]}return null}});Ext.Element.addMethods({appendChild:function(a){return Ext.get(a).appendTo(this)},appendTo:function(a){Ext.getDom(a).appendChild(this.dom);return this},insertBefore:function(a){a=Ext.getDom(a);a.parentNode.insertBefore(this.dom,a);return this},insertAfter:function(a){a=Ext.getDom(a);a.parentNode.insertBefore(this.dom,a.nextSibling);return this},insertFirst:function(b,a){b=b||{};if(b.nodeType||b.dom||typeof b=="string"){b=Ext.getDom(b);this.dom.insertBefore(b,this.dom.firstChild);return !a?Ext.get(b):b}else{return this.createChild(b,this.dom.firstChild,a)}},insertSibling:function(e,c,d){var g=this,b,a=(c||"before").toLowerCase()=="after",h;if(Ext.isArray(e)){h=g;Ext.each(e,function(i){b=Ext.fly(h,"_internal").insertSibling(i,c,d);if(a){h=b}});return b}e=e||{};if(e.nodeType||e.dom){b=g.dom.parentNode.insertBefore(Ext.getDom(e),a?g.dom.nextSibling:g.dom);if(!d){b=Ext.get(b)}}else{if(a&&!g.dom.nextSibling){b=Ext.DomHelper.append(g.dom.parentNode,e,!d)}else{b=Ext.DomHelper[a?"insertAfter":"insertBefore"](g.dom,e,!d)}}return b},replace:function(a){a=Ext.get(a);this.insertBefore(a);a.remove();return this},replaceWith:function(a){var b=this;if(a.nodeType||a.dom||typeof a=="string"){a=Ext.get(a);b.dom.parentNode.insertBefore(a,b.dom)}else{a=Ext.DomHelper.insertBefore(b.dom,a)}delete Ext.cache[b.id];Ext.removeNode(b.dom);b.id=Ext.id(b.dom=a);Ext.Element.addToCache(b.isFlyweight?new Ext.Element(b.dom):b);return b},createChild:function(b,a,c){b=b||{tag:"div"};if(a){return Ext.DomHelper.insertBefore(a,b,c!==true)}else{return Ext.DomHelper[!this.dom.firstChild?"insertFirst":"append"](this.dom,b,c!==true)}},wrap:function(a,b){var e=Ext.DomHelper.insertBefore(this.dom,a||{tag:"div"},!b),c=e.dom||e;c.appendChild(this.dom);return e},insertHtml:function(b,c,a){var d=Ext.DomHelper.insertHtml(b,this.dom,c);return a?Ext.get(d):d}});(function(){var x=Ext.Element,A=Ext.supports,s=document.defaultView,C=/alpha\(opacity=(.*)\)/i,l=/^\s+|\s+$/g,u=/\s+/,b=/\w/g,v=/table-row|table-.*-group/,c="_internal",e="padding",d="margin",y="border",t="-left",q="-right",w="-top",p="-bottom",j="-width",r=Math,z="hidden",g="isClipped",k="overflow",n="overflow-x",m="overflow-y",B="originalClip",i={l:y+t+j,r:y+q+j,t:y+w+j,b:y+p+j},h={l:e+t,r:e+q,t:e+w,b:e+p},a={l:d+t,r:d+q,t:d+w,b:d+p},D=x.data;x.boxMarkup='<div class="{0}-tl"><div class="{0}-tr"><div class="{0}-tc"></div></div></div><div class="{0}-ml"><div class="{0}-mr"><div class="{0}-mc"></div></div></div><div class="{0}-bl"><div class="{0}-br"><div class="{0}-bc"></div></div></div>';x.inheritedProps={fontSize:1,fontStyle:1,opacity:1};Ext.override(x,{adjustWidth:function(E){var F=this,G=(typeof E=="number");if(G&&F.autoBoxAdjust&&!F.isBorderBox()){E-=(F.getBorderWidth("lr")+F.getPadding("lr"))}return(G&&E<0)?0:E},adjustHeight:function(E){var F=this,G=(typeof E=="number");if(G&&F.autoBoxAdjust&&!F.isBorderBox()){E-=(F.getBorderWidth("tb")+F.getPadding("tb"))}return(G&&E<0)?0:E},addCls:function(I){var J=this,F=[],K=((J.dom.className.replace(l,"")=="")?"":" "),H,E,G;if(I===undefined){return J}if(Object.prototype.toString.call(I)!=="[object Array]"){if(typeof I==="string"){I=I.replace(l,"").split(u);if(I.length===1){I=I[0];if(!J.hasCls(I)){J.dom.className+=K+I}}else{this.addCls(I)}}}else{for(H=0,E=I.length;H<E;H++){G=I[H];if(typeof G=="string"&&(" "+J.dom.className+" ").indexOf(" "+G+" ")==-1){F.push(G)}}if(F.length){J.dom.className+=K+F.join(" ")}}return J},removeCls:function(J){var K=this,I,F,E,H,G;if(J===undefined){return K}if(Object.prototype.toString.call(J)!=="[object Array]"){J=J.replace(l,"").split(u)}if(K.dom&&K.dom.className){G=K.dom.className.replace(l,"").split(u);for(I=0,E=J.length;I<E;I++){H=J[I];if(typeof H=="string"){H=H.replace(l,"");F=Ext.Array.indexOf(G,H);if(F!=-1){Ext.Array.erase(G,F,1)}}}K.dom.className=G.join(" ")}return K},radioCls:function(H){var I=this.dom.parentNode.childNodes,F,G,E;H=Ext.isArray(H)?H:[H];for(G=0,E=I.length;G<E;G++){F=I[G];if(F&&F.nodeType==1){Ext.fly(F,"_internal").removeCls(H)}}return this.addCls(H)},toggleCls:Ext.supports.ClassList?function(E){this.dom.classList.toggle(Ext.String.trim(E));return this}:function(E){return this.hasCls(E)?this.removeCls(E):this.addCls(E)},hasCls:Ext.supports.ClassList?function(F){if(!F){return false}F=F.split(u);var G=F.length,E=0;for(;E<G;E++){if(F[E]&&this.dom.classList.contains(F[E])){return true}}return false}:function(E){return E&&(" "+this.dom.className+" ").indexOf(" "+E+" ")!=-1},replaceCls:function(F,E){return this.removeCls(F).addCls(E)},isStyle:function(E,F){return this.getStyle(E)==F},getStyle:function(){return s&&s.getComputedStyle?function(K){var I=this.dom,E,H,F,J,G;if(I==document){return null}K=x.normalize(K);F=(E=I.style[K])?E:(H=s.getComputedStyle(I,""))?H[K]:null;if(K=="marginRight"&&F!="0px"&&!A.RightMargin){G=x.getRightMarginFixCleaner(I);J=this.getStyle("display");I.style.display="inline-block";F=s.getComputedStyle(I,"").marginRight;I.style.display=J;G()}if(K=="backgroundColor"&&F=="rgba(0, 0, 0, 0)"&&!A.TransparentColor){F="transparent"}return F}:function(J){var G=this.dom,E,F;if(G==document){return null}J=x.normalize(J);do{if(J=="opacity"){if(G.style.filter.match){E=G.style.filter.match(C);if(E){var I=parseFloat(E[1]);if(!isNaN(I)){return I?I/100:0}}}return 1}if(!Ext.isIE6){return G.style[J]||((F=G.currentStyle)?F[J]:null)}try{return G.style[J]||((F=G.currentStyle)?F[J]:null)}catch(H){}if(!x.inheritedProps[J]){break}G=G.parentNode}while(G);return null}}(),getColor:function(E,F,J){var H=this.getStyle(E),G=J||J===""?J:"#",I;if(!H||(/transparent|inherit/.test(H))){return F}if(/^r/.test(H)){Ext.each(H.slice(4,H.length-1).split(","),function(K){I=parseInt(K,10);G+=(I<16?"0":"")+I.toString(16)})}else{H=H.replace("#","");G+=H.length==3?H.replace(/^(\w)(\w)(\w)$/,"$1$1$2$2$3$3"):H}return(G.length>5?G.toLowerCase():F)},setStyle:function(I,H){var G=this,E,F;if(!G.dom){return G}if(typeof I==="string"){E={};E[I]=H;I=E}for(F in I){if(I.hasOwnProperty(F)){H=Ext.value(I[F],"");if(F=="opacity"){G.setOpacity(H)}else{G.dom.style[x.normalize(F)]=H}}}return G},setOpacity:function(F,E){var H=this,J=H.dom,I,G;if(!H.dom){return H}G=H.dom.style;if(!E||!H.anim){if(!Ext.supports.Opacity){F=F<1?"alpha(opacity="+F*100+")":"";I=G.filter.replace(C,"").replace(l,"");G.zoom=1;G.filter=I+(I.length>0?" ":"")+F}else{G.opacity=F}}else{if(!Ext.isObject(E)){E={duration:350,easing:"ease-in"}}H.animate(Ext.applyIf({to:{opacity:F}},E))}return H},clearOpacity:function(){var E=this.dom.style;if(!Ext.supports.Opacity){if(!Ext.isEmpty(E.filter)){E.filter=E.filter.replace(C,"").replace(l,"")}}else{E.opacity=E["-moz-opacity"]=E["-khtml-opacity"]=""}return this},adjustDirect2DDimension:function(I){var G=this,J=G.dom,H=G.getStyle("display"),F=J.style.display,E=J.style.position,L=I==="width"?0:1,K;if(H==="inline"){J.style.display="inline-block"}J.style.position=H.match(v)?"absolute":"static";K=(parseFloat(G.getStyle(I))||parseFloat(J.currentStyle.msTransformOrigin.split(" ")[L])*2)%1;J.style.position=E;if(H==="inline"){J.style.display=F}return K},getHeight:function(L,G){var K=this,H=K.dom,I=Ext.isIE&&K.isStyle("display","none"),M,F,E,J;if(Ext.isIEQuirks){E=H.style;F=E.overflow;K.setStyle({overflow:"hidden"})}M=H.offsetHeight;M=r.max(M,I?0:H.clientHeight)||0;if(!I&&Ext.supports.Direct2DBug){J=K.adjustDirect2DDimension("height");if(G){M+=J}else{if(J>0&&J<0.5){M++}}}if(L){M-=(K.getBorderWidth("tb")+K.getPadding("tb"))}if(Ext.isIEQuirks){K.setStyle({overflow:F})}if(M<0){M=0}return M},getWidth:function(E,O){var L=this,I=L.dom,J=Ext.isIE&&L.isStyle("display","none"),M,G,H,F,K,N;if(Ext.isIEQuirks){F=I.style;H=F.overflow;L.setStyle({overflow:"hidden"})}if(Ext.isOpera10_5){if(I.parentNode.currentStyle.position==="relative"){N=I.parentNode.style.position;I.parentNode.style.position="static";G=I.offsetWidth;I.parentNode.style.position=N}G=Math.max(G||0,I.offsetWidth)}else{if(Ext.supports.BoundingClientRect){M=I.getBoundingClientRect();G=M.right-M.left;G=O?G:Math.ceil(G)}else{G=I.offsetWidth}}G=r.max(G,J?0:I.clientWidth)||0;if(!J&&Ext.supports.Direct2DBug){K=L.adjustDirect2DDimension("width");if(O){G+=K}else{if(K>0&&K<0.5){G++}}}if(E){G-=(L.getBorderWidth("lr")+L.getPadding("lr"))}if(Ext.isIEQuirks){L.setStyle({overflow:H})}if(G<0){G=0}return G},setWidth:function(F,E){var G=this;F=G.adjustWidth(F);if(!E||!G.anim){G.dom.style.width=G.addUnits(F)}else{if(!Ext.isObject(E)){E={}}G.animate(Ext.applyIf({to:{width:F}},E))}return G},setHeight:function(E,F){var G=this;E=G.adjustHeight(E);if(!F||!G.anim){G.dom.style.height=G.addUnits(E)}else{if(!Ext.isObject(F)){F={}}G.animate(Ext.applyIf({to:{height:E}},F))}return G},getBorderWidth:function(E){return this.addStyles(E,i)},getPadding:function(E){return this.addStyles(E,h)},clip:function(){var E=this,F=E.dom;if(!D(F,g)){D(F,g,true);D(F,B,{o:E.getStyle(k),x:E.getStyle(n),y:E.getStyle(m)});E.setStyle(k,z);E.setStyle(n,z);E.setStyle(m,z)}return E},unclip:function(){var F=this,G=F.dom,E;if(D(G,g)){D(G,g,false);E=D(G,B);if(o.o){F.setStyle(k,o.o)}if(o.x){F.setStyle(n,o.x)}if(o.y){F.setStyle(m,o.y)}}return F},addStyles:function(L,K){var F=0,J=L.match(b),I=0,E=J.length,H,G;for(;I<E;I++){H=J[I];G=H&&parseInt(this.getStyle(K[H]),10);if(G){F+=r.abs(G)}}return F},margins:a,applyStyles:function(E){Ext.DomHelper.applyStyles(this.dom,E);return this},getStyles:function(){var H={},E=arguments.length,F=0,G;for(;F<E;++F){G=arguments[F];H[G]=this.getStyle(G)}return H},boxWrap:function(E){E=E||Ext.baseCSSPrefix+"box";var F=Ext.get(this.insertHtml("beforeBegin","<div class='"+E+"'>"+Ext.String.format(x.boxMarkup,E)+"</div>"));Ext.DomQuery.selectNode("."+E+"-mc",F.dom).appendChild(this.dom);return F},setSize:function(G,E,F){var H=this;if(Ext.isObject(G)){F=E;E=G.height;G=G.width}G=H.adjustWidth(G);E=H.adjustHeight(E);if(!F||!H.anim){H.dom.style.width=H.addUnits(G);H.dom.style.height=H.addUnits(E)}else{if(F===true){F={}}H.animate(Ext.applyIf({to:{width:G,height:E}},F))}return H},getComputedHeight:function(){var F=this,E=Math.max(F.dom.offsetHeight,F.dom.clientHeight);if(!E){E=parseFloat(F.getStyle("height"))||0;if(!F.isBorderBox()){E+=F.getFrameWidth("tb")}}return E},getComputedWidth:function(){var F=this,E=Math.max(F.dom.offsetWidth,F.dom.clientWidth);if(!E){E=parseFloat(F.getStyle("width"))||0;if(!F.isBorderBox()){E+=F.getFrameWidth("lr")}}return E},getFrameWidth:function(F,E){return E&&this.isBorderBox()?0:(this.getPadding(F)+this.getBorderWidth(F))},addClsOnOver:function(E){var F=this.dom;this.hover(function(){Ext.fly(F,c).addCls(E)},function(){Ext.fly(F,c).removeCls(E)});return this},addClsOnFocus:function(E){var F=this,G=F.dom;F.on("focus",function(){Ext.fly(G,c).addCls(E)});F.on("blur",function(){Ext.fly(G,c).removeCls(E)});return F},addClsOnClick:function(E){var F=this.dom;this.on("mousedown",function(){Ext.fly(F,c).addCls(E);var H=Ext.getDoc(),G=function(){Ext.fly(F,c).removeCls(E);H.removeListener("mouseup",G)};H.on("mouseup",G)});return this},getViewSize:function(){var H=this,I=H.dom,F=(I==Ext.getDoc().dom||I==Ext.getBody().dom),G,J,E;if(F){E={width:x.getViewWidth(),height:x.getViewHeight()}}else{if(Ext.isIE6||Ext.isIEQuirks){G=I.style;J=G.overflow;H.setStyle({overflow:"hidden"})}E={width:I.clientWidth,height:I.clientHeight};if(Ext.isIE6||Ext.isIEQuirks){H.setStyle({overflow:J})}}return E},getStyleSize:function(){var I=this,J=document,K=this.dom,F=(K==J||K==J.body),H=K.style,E,G;if(F){return{width:x.getViewWidth(),height:x.getViewHeight()}}if(H.width&&H.width!="auto"){E=parseFloat(H.width);if(I.isBorderBox()){E-=I.getFrameWidth("lr")}}if(H.height&&H.height!="auto"){G=parseFloat(H.height);if(I.isBorderBox()){G-=I.getFrameWidth("tb")}}return{width:E||I.getWidth(true),height:G||I.getHeight(true)}},getSize:function(E){return{width:this.getWidth(E),height:this.getHeight(E)}},repaint:function(){var E=this.dom;this.addCls(Ext.baseCSSPrefix+"repaint");setTimeout(function(){Ext.fly(E).removeCls(Ext.baseCSSPrefix+"repaint")},1);return this},unselectable:function(){var E=this;E.dom.unselectable="on";E.swallowEvent("selectstart",true);E.applyStyles("-moz-user-select:none;-khtml-user-select:none;");E.addCls(Ext.baseCSSPrefix+"unselectable");return E},getMargin:function(F){var G=this,H={t:"top",l:"left",r:"right",b:"bottom"},I={},E;if(!F){for(E in G.margins){I[H[E]]=parseFloat(G.getStyle(G.margins[E]))||0}return I}else{return G.addStyles.call(G,F,G.margins)}}})})();Ext.Element.VISIBILITY=1;Ext.Element.DISPLAY=2;Ext.Element.OFFSETS=3;Ext.Element.ASCLASS=4;Ext.Element.visibilityCls=Ext.baseCSSPrefix+"hide-nosize";Ext.Element.addMethods(function(){var e=Ext.Element,q="opacity",j="visibility",g="display",d="hidden",n="offsets",k="asclass",m="none",a="nosize",b="originalDisplay",c="visibilityMode",h="isVisible",i=e.data,l=function(s){var r=i(s,b);if(r===undefined){i(s,b,r="")}return r},p=function(s){var r=i(s,c);if(r===undefined){i(s,c,r=1)}return r};return{originalDisplay:"",visibilityMode:1,setVisibilityMode:function(r){i(this.dom,c,r);return this},isVisible:function(){var r=this,t=r.dom,s=i(t,h);if(typeof s=="boolean"){return s}s=!r.isStyle(j,d)&&!r.isStyle(g,m)&&!((p(t)==e.ASCLASS)&&r.hasCls(r.visibilityCls||e.visibilityCls));i(t,h,s);return s},setVisible:function(u,r){var x=this,s,z,y,w,v=x.dom,t=p(v);if(typeof r=="string"){switch(r){case g:t=e.DISPLAY;break;case j:t=e.VISIBILITY;break;case n:t=e.OFFSETS;break;case a:case k:t=e.ASCLASS;break}x.setVisibilityMode(t);r=false}if(!r||!x.anim){if(t==e.ASCLASS){x[u?"removeCls":"addCls"](x.visibilityCls||e.visibilityCls)}else{if(t==e.DISPLAY){return x.setDisplayed(u)}else{if(t==e.OFFSETS){if(!u){if(!x.hideModeStyles){x.hideModeStyles={position:x.getStyle("position"),top:x.getStyle("top"),left:x.getStyle("left")}}x.applyStyles({position:"absolute",top:"-10000px",left:"-10000px"})}else{if(x.hideModeStyles){x.applyStyles(x.hideModeStyles||{position:"",top:"",left:""});delete x.hideModeStyles}}}else{x.fixDisplay();v.style.visibility=u?"":d}}}}else{if(u){x.setOpacity(0.01);x.setVisible(true)}if(!Ext.isObject(r)){r={duration:350,easing:"ease-in"}}x.animate(Ext.applyIf({callback:function(){u||x.setVisible(false).setOpacity(1)},to:{opacity:(u)?1:0}},r))}i(v,h,u);return x},hasMetrics:function(){var r=this.dom;return this.isVisible()||(p(r)==e.OFFSETS)||(p(r)==e.VISIBILITY)},toggle:function(r){var s=this;s.setVisible(!s.isVisible(),s.anim(r));return s},setDisplayed:function(r){if(typeof r=="boolean"){r=r?l(this.dom):m}this.setStyle(g,r);return this},fixDisplay:function(){var r=this;if(r.isStyle(g,m)){r.setStyle(j,d);r.setStyle(g,l(this.dom));if(r.isStyle(g,m)){r.setStyle(g,"block")}}},hide:function(r){if(typeof r=="string"){this.setVisible(false,r);return this}this.setVisible(false,this.anim(r));return this},show:function(r){if(typeof r=="string"){this.setVisible(true,r);return this}this.setVisible(true,this.anim(r));return this}}}());Ext.applyIf(Ext.Element.prototype,{animate:function(a){var b=this;if(!b.id){b=Ext.get(b.dom)}if(Ext.fx.Manager.hasFxBlock(b.id)){return b}Ext.fx.Manager.queueFx(Ext.create("Ext.fx.Anim",b.anim(a)));return this},anim:function(a){if(!Ext.isObject(a)){return(a)?{}:false}var b=this,c=a.duration||Ext.fx.Anim.prototype.duration,e=a.easing||"ease",d;if(a.stopAnimation){b.stopAnimation()}Ext.applyIf(a,Ext.fx.Manager.getFxDefaults(b.id));Ext.fx.Manager.setFxDefaults(b.id,{delay:0});d={target:b,remove:a.remove,alternate:a.alternate||false,duration:c,easing:e,callback:a.callback,listeners:a.listeners,iterations:a.iterations||1,scope:a.scope,block:a.block,concurrent:a.concurrent,delay:a.delay||0,paused:true,keyframes:a.keyframes,from:a.from||{},to:Ext.apply({},a)};Ext.apply(d.to,a.to);delete d.to.to;delete d.to.from;delete d.to.remove;delete d.to.alternate;delete d.to.keyframes;delete d.to.iterations;delete d.to.listeners;delete d.to.target;delete d.to.paused;delete d.to.callback;delete d.to.scope;delete d.to.duration;delete d.to.easing;delete d.to.concurrent;delete d.to.block;delete d.to.stopAnimation;delete d.to.delay;return d},slideIn:function(b,h,e){var g=this,d=g.dom.style,c,a;b=b||"t";h=h||{};c=function(){var m=this,l=h.listeners,n,i,k,j,p;if(!e){g.fixDisplay()}n=g.getBox();if((b=="t"||b=="b")&&n.height===0){n.height=g.dom.scrollHeight}else{if((b=="l"||b=="r")&&n.width===0){n.width=g.dom.scrollWidth}}i=g.getPositioning();g.setSize(n.width,n.height);j=g.wrap({style:{visibility:e?"visible":"hidden"}});j.setPositioning(i);if(j.isStyle("position","static")){j.position("relative")}g.clearPositioning("auto");j.clip();g.setStyle({visibility:"",position:"absolute"});if(e){j.setSize(n.width,n.height)}switch(b){case"t":p={from:{width:n.width+"px",height:"0px"},to:{width:n.width+"px",height:n.height+"px"}};d.bottom="0px";break;case"l":p={from:{width:"0px",height:n.height+"px"},to:{width:n.width+"px",height:n.height+"px"}};d.right="0px";break;case"r":p={from:{x:n.x+n.width,width:"0px",height:n.height+"px"},to:{x:n.x,width:n.width+"px",height:n.height+"px"}};break;case"b":p={from:{y:n.y+n.height,width:n.width+"px",height:"0px"},to:{y:n.y,width:n.width+"px",height:n.height+"px"}};break;case"tl":p={from:{x:n.x,y:n.y,width:"0px",height:"0px"},to:{width:n.width+"px",height:n.height+"px"}};d.bottom="0px";d.right="0px";break;case"bl":p={from:{x:n.x+n.width,width:"0px",height:"0px"},to:{x:n.x,width:n.width+"px",height:n.height+"px"}};d.right="0px";break;case"br":p={from:{x:n.x+n.width,y:n.y+n.height,width:"0px",height:"0px"},to:{x:n.x,y:n.y,width:n.width+"px",height:n.height+"px"}};break;case"tr":p={from:{y:n.y+n.height,width:"0px",height:"0px"},to:{y:n.y,width:n.width+"px",height:n.height+"px"}};d.bottom="0px";break}j.show();a=Ext.apply({},h);delete a.listeners;a=Ext.create("Ext.fx.Anim",Ext.applyIf(a,{target:j,duration:500,easing:"ease-out",from:e?p.to:p.from,to:e?p.from:p.to}));a.on("afteranimate",function(){if(e){g.setPositioning(i);if(h.useDisplay){g.setDisplayed(false)}else{g.hide()}}else{g.clearPositioning();g.setPositioning(i)}if(j.dom){j.dom.parentNode.insertBefore(g.dom,j.dom);j.remove()}g.setSize(n.width,n.height);m.end()});if(l){a.on(l)}};g.animate({duration:h.duration?h.duration*2:1000,listeners:{beforeanimate:{fn:c},afteranimate:{fn:function(){if(a&&a.running){a.end()}}}}});return g},slideOut:function(a,b){return this.slideIn(a,b,true)},puff:function(c){var b=this,a;c=Ext.applyIf(c||{},{easing:"ease-out",duration:500,useDisplay:false});a=function(){b.clearOpacity();b.show();var e=b.getBox(),g=b.getStyle("fontSize"),d=b.getPositioning();this.to={width:e.width*2,height:e.height*2,x:e.x-(e.width/2),y:e.y-(e.height/2),opacity:0,fontSize:"200%"};this.on("afteranimate",function(){if(b.dom){if(c.useDisplay){b.setDisplayed(false)}else{b.hide()}b.clearOpacity();b.setPositioning(d);b.setStyle({fontSize:g})}})};b.animate({duration:c.duration,easing:c.easing,listeners:{beforeanimate:{fn:a}}});return b},switchOff:function(c){var b=this,a;c=Ext.applyIf(c||{},{easing:"ease-in",duration:500,remove:false,useDisplay:false});a=function(){var h=this,g=b.getSize(),i=b.getXY(),e,d;b.clearOpacity();b.clip();d=b.getPositioning();e=Ext.create("Ext.fx.Animator",{target:b,duration:c.duration,easing:c.easing,keyframes:{33:{opacity:0.3},66:{height:1,y:i[1]+g.height/2},100:{width:1,x:i[0]+g.width/2}}});e.on("afteranimate",function(){if(c.useDisplay){b.setDisplayed(false)}else{b.hide()}b.clearOpacity();b.setPositioning(d);b.setSize(g);h.end()})};b.animate({duration:(c.duration*2),listeners:{beforeanimate:{fn:a}}});return b},frame:function(a,d,e){var c=this,b;a=a||"#C3DAF9";d=d||1;e=e||{};b=function(){c.show();var i=this,j=c.getBox(),h=Ext.getBody().createChild({style:{position:"absolute","pointer-events":"none","z-index":35000,border:"0px solid "+a}}),g;g=Ext.create("Ext.fx.Anim",{target:h,duration:e.duration||1000,iterations:d,from:{top:j.y,left:j.x,borderWidth:0,opacity:1,height:j.height,width:j.width},to:{top:j.y-20,left:j.x-20,borderWidth:10,opacity:0,height:j.height+40,width:j.width+40}});g.on("afteranimate",function(){h.remove();i.end()})};c.animate({duration:(e.duration*2)||2000,listeners:{beforeanimate:{fn:b}}});return c},ghost:function(a,d){var c=this,b;a=a||"b";b=function(){var h=c.getWidth(),g=c.getHeight(),i=c.getXY(),e=c.getPositioning(),j={opacity:0};switch(a){case"t":j.y=i[1]-g;break;case"l":j.x=i[0]-h;break;case"r":j.x=i[0]+h;break;case"b":j.y=i[1]+g;break;case"tl":j.x=i[0]-h;j.y=i[1]-g;break;case"bl":j.x=i[0]-h;j.y=i[1]+g;break;case"br":j.x=i[0]+h;j.y=i[1]+g;break;case"tr":j.x=i[0]+h;j.y=i[1]-g;break}this.to=j;this.on("afteranimate",function(){if(c.dom){c.hide();c.clearOpacity();c.setPositioning(e)}})};c.animate(Ext.applyIf(d||{},{duration:500,easing:"ease-out",listeners:{beforeanimate:{fn:b}}}));return c},highlight:function(d,b){var i=this,e=i.dom,k={},h,l,g,c,a,j;b=b||{};c=b.listeners||{};g=b.attr||"backgroundColor";k[g]=d||"ffff9c";if(!b.to){l={};l[g]=b.endColor||i.getColor(g,"ffffff","")}else{l=b.to}b.listeners=Ext.apply(Ext.apply({},c),{beforeanimate:function(){h=e.style[g];i.clearOpacity();i.show();a=c.beforeanimate;if(a){j=a.fn||a;return j.apply(a.scope||c.scope||window,arguments)}},afteranimate:function(){if(e){e.style[g]=h}a=c.afteranimate;if(a){j=a.fn||a;j.apply(a.scope||c.scope||window,arguments)}}});i.animate(Ext.apply({},b,{duration:1000,easing:"ease-in",from:k,to:l}));return i},pause:function(a){var b=this;Ext.fx.Manager.setFxDefaults(b.id,{delay:a});return b},fadeIn:function(a){this.animate(Ext.apply({},a,{opacity:1}));return this},fadeOut:function(a){this.animate(Ext.apply({},a,{opacity:0}));return this},scale:function(a,b,c){this.animate(Ext.apply({},c,{width:a,height:b}));return this},shift:function(a){this.animate(a);return this}});Ext.applyIf(Ext.Element,{unitRe:/\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i,camelRe:/(-[a-z])/gi,opacityRe:/alpha\(opacity=(.*)\)/i,cssRe:/([a-z0-9-]+)\s*:\s*([^;\s]+(?:\s*[^;\s]+)*);?/gi,propertyCache:{},defaultUnit:"px",borders:{l:"border-left-width",r:"border-right-width",t:"border-top-width",b:"border-bottom-width"},paddings:{l:"padding-left",r:"padding-right",t:"padding-top",b:"padding-bottom"},margins:{l:"margin-left",r:"margin-right",t:"margin-top",b:"margin-bottom"},addUnits:Ext.Element.prototype.addUnits,parseBox:function(b){if(Ext.isObject(b)){return{top:b.top||0,right:b.right||0,bottom:b.bottom||0,left:b.left||0}}else{if(typeof b!="string"){b=b.toString()}var c=b.split(" "),a=c.length;if(a==1){c[1]=c[2]=c[3]=c[0]}else{if(a==2){c[2]=c[0];c[3]=c[1]}else{if(a==3){c[3]=c[1]}}}return{top:parseFloat(c[0])||0,right:parseFloat(c[1])||0,bottom:parseFloat(c[2])||0,left:parseFloat(c[3])||0}}},unitizeBox:function(c,b){var a=this.addUnits,d=this.parseBox(c);return a(d.top,b)+" "+a(d.right,b)+" "+a(d.bottom,b)+" "+a(d.left,b)},camelReplaceFn:function(b,c){return c.charAt(1).toUpperCase()},normalize:function(a){if(a=="float"){a=Ext.supports.Float?"cssFloat":"styleFloat"}return this.propertyCache[a]||(this.propertyCache[a]=a.replace(this.camelRe,this.camelReplaceFn))},getDocumentHeight:function(){return Math.max(!Ext.isStrict?document.body.scrollHeight:document.documentElement.scrollHeight,this.getViewportHeight())},getDocumentWidth:function(){return Math.max(!Ext.isStrict?document.body.scrollWidth:document.documentElement.scrollWidth,this.getViewportWidth())},getViewportHeight:function(){return window.innerHeight},getViewportWidth:function(){return window.innerWidth},getViewSize:function(){return{width:window.innerWidth,height:window.innerHeight}},getOrientation:function(){if(Ext.supports.OrientationChange){return(window.orientation==0)?"portrait":"landscape"}return(window.innerHeight>window.innerWidth)?"portrait":"landscape"},fromPoint:function(a,b){return Ext.get(document.elementFromPoint(a,b))},parseStyles:function(c){var a={},b=this.cssRe,d;if(c){b.lastIndex=0;while((d=b.exec(c))){a[d[1]]=d[2]}}return a}});Ext.CompositeElementLite=function(b,a){this.elements=[];this.add(b,a);this.el=new Ext.Element.Flyweight()};Ext.CompositeElementLite.prototype={isComposite:true,getElement:function(a){var b=this.el;b.dom=a;b.id=a.id;return b},transformElement:function(a){return Ext.getDom(a)},getCount:function(){return this.elements.length},add:function(d,b){var e=this,g=e.elements;if(!d){return this}if(typeof d=="string"){d=Ext.Element.selectorFunction(d,b)}else{if(d.isComposite){d=d.elements}else{if(!Ext.isIterable(d)){d=[d]}}}for(var c=0,a=d.length;c<a;++c){g.push(e.transformElement(d[c]))}return e},invoke:function(g,b){var h=this,d=h.elements,a=d.length,j,c;for(c=0;c<a;c++){j=d[c];if(j){Ext.Element.prototype[g].apply(h.getElement(j),b)}}return h},item:function(b){var d=this,c=d.elements[b],a=null;if(c){a=d.getElement(c)}return a},addListener:function(b,j,h,g){var d=this.elements,a=d.length,c,k;for(c=0;c<a;c++){k=d[c];if(k){Ext.EventManager.on(k,b,j,h||k,g)}}return this},each:function(g,d){var h=this,c=h.elements,a=c.length,b,j;for(b=0;b<a;b++){j=c[b];if(j){j=this.getElement(j);if(g.call(d||j,j,h,b)===false){break}}}return h},fill:function(a){var b=this;b.elements=[];b.add(a);return b},filter:function(a){var b=[],d=this,c=Ext.isFunction(a)?a:function(e){return e.is(a)};d.each(function(h,e,g){if(c(h,g)!==false){b[b.length]=d.transformElement(h)}});d.elements=b;return d},indexOf:function(a){return Ext.Array.indexOf(this.elements,this.transformElement(a))},replaceElement:function(e,c,a){var b=!isNaN(e)?e:this.indexOf(e),g;if(b>-1){c=Ext.getDom(c);if(a){g=this.elements[b];g.parentNode.insertBefore(c,g);Ext.removeNode(g)}Ext.Array.splice(this.elements,b,1,c)}return this},clear:function(){this.elements=[]}};Ext.CompositeElementLite.prototype.on=Ext.CompositeElementLite.prototype.addListener;Ext.CompositeElementLite.importElementMethods=function(){var c,b=Ext.Element.prototype,a=Ext.CompositeElementLite.prototype;for(c in b){if(typeof b[c]=="function"){(function(d){a[d]=a[d]||function(){return this.invoke(d,arguments)}}).call(a,c)}}};Ext.CompositeElementLite.importElementMethods();if(Ext.DomQuery){Ext.Element.selectorFunction=Ext.DomQuery.select}Ext.Element.select=function(a,b){var c;if(typeof a=="string"){c=Ext.Element.selectorFunction(a,b)}else{if(a.length!==undefined){c=a}else{}}return new Ext.CompositeElementLite(c)};Ext.select=Ext.Element.select;Ext.util.DelayedTask=function(d,c,a){var e=this,g,b=function(){clearInterval(g);g=null;d.apply(c,a||[])};this.delay=function(i,k,j,h){e.cancel();d=k||d;c=j||c;a=h||a;g=setInterval(b,i)};this.cancel=function(){if(g){clearInterval(g);g=null}}};Ext.require("Ext.util.DelayedTask",function(){Ext.util.Event=Ext.extend(Object,(function(){function b(e,g,h,d){g.task=new Ext.util.DelayedTask();return function(){g.task.delay(h.buffer,e,d,Ext.Array.toArray(arguments))}}function a(e,g,h,d){return function(){var i=new Ext.util.DelayedTask();if(!g.tasks){g.tasks=[]}g.tasks.push(i);i.delay(h.delay||10,e,d,Ext.Array.toArray(arguments))}}function c(e,g,h,d){return function(){g.ev.removeListener(g.fn,d);return e.apply(d,arguments)}}return{isEvent:true,constructor:function(e,d){this.name=d;this.observable=e;this.listeners=[]},addListener:function(g,e,d){var h=this,i;e=e||h.observable;if(!h.isListening(g,e)){i=h.createListener(g,e,d);if(h.firing){h.listeners=h.listeners.slice(0)}h.listeners.push(i)}},createListener:function(g,e,i){i=i||{};e=e||this.observable;var h={fn:g,scope:e,o:i,ev:this},d=g;if(i.single){d=c(d,h,i,e)}if(i.delay){d=a(d,h,i,e)}if(i.buffer){d=b(d,h,i,e)}h.fireFn=d;return h},findListener:function(j,h){var g=this.listeners,d=g.length,k,e;while(d--){k=g[d];if(k){e=k.scope;if(k.fn==j&&(e==h||e==this.observable)){return d}}}return -1},isListening:function(e,d){return this.findListener(e,d)!==-1},removeListener:function(h,g){var i=this,e,j,d;e=i.findListener(h,g);if(e!=-1){j=i.listeners[e];if(i.firing){i.listeners=i.listeners.slice(0)}if(j.task){j.task.cancel();delete j.task}d=j.tasks&&j.tasks.length;if(d){while(d--){j.tasks[d].cancel()}delete j.tasks}Ext.Array.erase(i.listeners,e,1);return true}return false},clearListeners:function(){var e=this.listeners,d=e.length;while(d--){this.removeListener(e[d].fn,e[d].scope)}},fire:function(){var j=this,g=j.listeners,h=g.length,e,d,k;if(h>0){j.firing=true;for(e=0;e<h;e++){k=g[e];d=arguments.length?Array.prototype.slice.call(arguments,0):[];if(k.o){d.push(k.o)}if(k&&k.fireFn.apply(k.scope||j.observable,d)===false){return(j.firing=false)}}}j.firing=false;return true}}})())});Ext.EventManager={hasBoundOnReady:false,hasFiredReady:false,readyTimeout:null,hasOnReadyStateChange:false,readyEvent:new Ext.util.Event(),checkReadyState:function(){var a=Ext.EventManager;if(window.attachEvent){if(window!=top){return false}try{document.documentElement.doScroll("left")}catch(b){return false}a.fireDocReady();return true}if(document.readyState=="complete"){a.fireDocReady();return true}a.readyTimeout=setTimeout(arguments.callee,2);return false},bindReadyEvent:function(){var a=Ext.EventManager;if(a.hasBoundOnReady){return}if(document.addEventListener){document.addEventListener("DOMContentLoaded",a.fireDocReady,false);window.addEventListener("load",a.fireDocReady,false)}else{if(!a.checkReadyState()){document.attachEvent("onreadystatechange",a.checkReadyState);a.hasOnReadyStateChange=true}window.attachEvent("onload",a.fireDocReady,false)}a.hasBoundOnReady=true},fireDocReady:function(){var a=Ext.EventManager;if(!a.hasFiredReady){a.hasFiredReady=true;if(document.addEventListener){document.removeEventListener("DOMContentLoaded",a.fireDocReady,false);window.removeEventListener("load",a.fireDocReady,false)}else{if(a.readyTimeout!==null){clearTimeout(a.readyTimeout)}if(a.hasOnReadyStateChange){document.detachEvent("onreadystatechange",a.checkReadyState)}window.detachEvent("onload",a.fireDocReady)}Ext.supports.init()}if(!Ext.isReady){Ext.isReady=true;a.onWindowUnload();a.readyEvent.fire()}},onDocumentReady:function(c,b,a){a=a||{};var d=Ext.EventManager,e=d.readyEvent;a.single=true;if(Ext.isReady){e.addListener(c,b,a);e.fire()}else{a.delay=a.delay||1;e.addListener(c,b,a);d.bindReadyEvent()}},stoppedMouseDownEvent:new Ext.util.Event(),propRe:/^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate|freezeEvent)$/,getId:function(a){var b=false,c;a=Ext.getDom(a);if(a===document||a===window){c=a===document?Ext.documentId:Ext.windowId}else{c=Ext.id(a)}if(a&&(a.getElementById||a.navigator)){b=true}if(!Ext.cache[c]){Ext.Element.addToCache(new Ext.Element(a),c);if(b){Ext.cache[c].skipGarbageCollection=true}}return c},prepareListenerConfig:function(d,b,h){var e=this,i=e.propRe,c,g,a;for(c in b){if(b.hasOwnProperty(c)){if(!i.test(c)){g=b[c];if(Ext.isFunction(g)){a=[d,c,g,b.scope,b]}else{a=[d,c,g.fn,g.scope,g]}if(h===true){e.removeListener.apply(this,a)}else{e.addListener.apply(e,a)}}}}},normalizeEvent:function(a,b){if(/mouseenter|mouseleave/.test(a)&&!Ext.supports.MouseEnterLeave){if(b){b=Ext.Function.createInterceptor(b,this.contains,this)}a=a=="mouseenter"?"mouseover":"mouseout"}else{if(a=="mousewheel"&&!Ext.supports.MouseWheel&&!Ext.isOpera){a="DOMMouseScroll"}}return{eventName:a,fn:b}},contains:function(b){var a=b.browserEvent.currentTarget,c=this.getRelatedTarget(b);if(a&&a.firstChild){while(c){if(c===a){return false}c=c.parentNode;if(c&&(c.nodeType!=1)){c=null}}}return true},addListener:function(c,a,g,e,b){if(typeof a!=="string"){this.prepareListenerConfig(c,a);return}var h=Ext.getDom(c),i,d;b=b||{};i=this.normalizeEvent(a,g);d=this.createListenerWrap(h,a,i.fn,e,b);if(h.attachEvent){h.attachEvent("on"+i.eventName,d)}else{h.addEventListener(i.eventName,d,b.capture||false)}if(h==document&&a=="mousedown"){this.stoppedMouseDownEvent.addListener(d)}this.getEventListenerCache(h,a).push({fn:g,wrap:d,scope:e})},removeListener:function(h,l,m,p){if(typeof l!=="string"){this.prepareListenerConfig(h,l,true);return}var g=Ext.getDom(h),a=this.getEventListenerCache(g,l),n=this.normalizeEvent(l).eventName,k=a.length,e,c,b,d;while(k--){c=a[k];if(c&&(!m||c.fn==m)&&(!p||c.scope===p)){b=c.wrap;if(b.task){clearTimeout(b.task);delete b.task}e=b.tasks&&b.tasks.length;if(e){while(e--){clearTimeout(b.tasks[e])}delete b.tasks}if(g.detachEvent){g.detachEvent("on"+n,b)}else{g.removeEventListener(n,b,false)}if(b&&g==document&&l=="mousedown"){this.stoppedMouseDownEvent.removeListener(b)}Ext.Array.erase(a,k,1)}}},removeAll:function(b){var d=Ext.getDom(b),a,c;if(!d){return}a=this.getElementEventCache(d);for(c in a){if(a.hasOwnProperty(c)){this.removeListener(d,c)}}Ext.cache[d.id].events={}},purgeElement:function(d,b){var e=Ext.getDom(d),c=0,a;if(b){this.removeListener(e,b)}else{this.removeAll(e)}if(e&&e.childNodes){for(a=d.childNodes.length;c<a;c++){this.purgeElement(d.childNodes[c],b)}}},createListenerWrap:function(i,b,e,d,a){a=a||{};var g,h;return function c(k,j){if(!h){g=["if(!Ext) {return;}"];if(a.buffer||a.delay||a.freezeEvent){g.push("e = new Ext.EventObjectImpl(e, "+(a.freezeEvent?"true":"false")+");")}else{g.push("e = Ext.EventObject.setEvent(e);")}if(a.delegate){g.push('var t = e.getTarget("'+a.delegate+'", this);');g.push("if(!t) {return;}")}else{g.push("var t = e.target;")}if(a.target){g.push("if(e.target !== options.target) {return;}")}if(a.stopEvent){g.push("e.stopEvent();")}else{if(a.preventDefault){g.push("e.preventDefault();")}if(a.stopPropagation){g.push("e.stopPropagation();")}}if(a.normalized===false){g.push("e = e.browserEvent;")}if(a.buffer){g.push("(wrap.task && clearTimeout(wrap.task));");g.push("wrap.task = setTimeout(function(){")}if(a.delay){g.push("wrap.tasks = wrap.tasks || [];");g.push("wrap.tasks.push(setTimeout(function(){")}g.push("fn.call(scope || dom, e, t, options);");if(a.single){g.push("Ext.EventManager.removeListener(dom, ename, fn, scope);")}if(a.delay){g.push("}, "+a.delay+"));")}if(a.buffer){g.push("}, "+a.buffer+");")}h=Ext.functionFactory("e","options","fn","scope","ename","dom","wrap","args",g.join("\n"))}h.call(i,k,a,e,d,b,i,c,j)}},getEventListenerCache:function(c,a){if(!c){return[]}var b=this.getElementEventCache(c);return b[a]||(b[a]=[])},getElementEventCache:function(b){if(!b){return{}}var a=Ext.cache[this.getId(b)];return a.events||(a.events={})},mouseLeaveRe:/(mouseout|mouseleave)/,mouseEnterRe:/(mouseover|mouseenter)/,stopEvent:function(a){this.stopPropagation(a);this.preventDefault(a)},stopPropagation:function(a){a=a.browserEvent||a;if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}},preventDefault:function(a){a=a.browserEvent||a;if(a.preventDefault){a.preventDefault()}else{a.returnValue=false;try{if(a.ctrlKey||a.keyCode>111&&a.keyCode<124){a.keyCode=-1}}catch(b){}}},getRelatedTarget:function(a){a=a.browserEvent||a;var b=a.relatedTarget;if(!b){if(this.mouseLeaveRe.test(a.type)){b=a.toElement}else{if(this.mouseEnterRe.test(a.type)){b=a.fromElement}}}return this.resolveTextNode(b)},getPageX:function(a){return this.getXY(a)[0]},getPageY:function(a){return this.getXY(a)[1]},getPageXY:function(c){c=c.browserEvent||c;var b=c.pageX,e=c.pageY,d=document.documentElement,a=document.body;if(!b&&b!==0){b=c.clientX+(d&&d.scrollLeft||a&&a.scrollLeft||0)-(d&&d.clientLeft||a&&a.clientLeft||0);e=c.clientY+(d&&d.scrollTop||a&&a.scrollTop||0)-(d&&d.clientTop||a&&a.clientTop||0)}return[b,e]},getTarget:function(a){a=a.browserEvent||a;return this.resolveTextNode(a.target||a.srcElement)},resolveTextNode:Ext.isGecko?function(b){if(!b){return}var a=HTMLElement.prototype.toString.call(b);if(a=="[xpconnect wrapped native prototype]"||a=="[object XULElement]"){return}return b.nodeType==3?b.parentNode:b}:function(a){return a&&a.nodeType==3?a.parentNode:a},curWidth:0,curHeight:0,onWindowResize:function(d,c,b){var a=this.resizeEvent;if(!a){this.resizeEvent=a=new Ext.util.Event();this.on(window,"resize",this.fireResize,this,{buffer:100})}a.addListener(d,c,b)},fireResize:function(){var c=this,a=Ext.Element.getViewWidth(),b=Ext.Element.getViewHeight();if(c.curHeight!=b||c.curWidth!=a){c.curHeight=b;c.curWidth=a;c.resizeEvent.fire(a,b)}},removeResizeListener:function(b,a){if(this.resizeEvent){this.resizeEvent.removeListener(b,a)}},onWindowUnload:function(){var a=this.unloadEvent;if(!a){this.unloadEvent=a=new Ext.util.Event();this.addListener(window,"unload",this.fireUnload,this)}},fireUnload:function(){try{this.removeUnloadListener();if(Ext.isGecko3){var h=Ext.ComponentQuery.query("gridview"),b=0,d=h.length;for(;b<d;b++){h[b].scrollToTop()}}var c,a=Ext.cache;for(c in a){if(a.hasOwnProperty(c)){Ext.EventManager.removeAll(c)}}}catch(g){}},removeUnloadListener:function(){if(this.unloadEvent){this.removeListener(window,"unload",this.fireUnload)}},useKeyDown:Ext.isWebKit?parseInt(navigator.userAgent.match(/AppleWebKit\/(\d+)/)[1],10)>=525:!((Ext.isGecko&&!Ext.isWindows)||Ext.isOpera),getKeyEvent:function(){return this.useKeyDown?"keydown":"keypress"}};Ext.onReady=function(c,b,a){Ext.Loader.onReady(c,b,true,a)};Ext.onDocumentReady=Ext.EventManager.onDocumentReady;Ext.EventManager.on=Ext.EventManager.addListener;Ext.EventManager.un=Ext.EventManager.removeListener;(function(){var a=function(){var g=document.body||document.getElementsByTagName("body")[0],e=Ext.baseCSSPrefix,c=[e+"body"],b=[],d;if(!g){return false}d=g.parentNode;function h(i){c.push(e+i)}if(Ext.isIE){h("ie");if(Ext.isIE6){h("ie6")}else{h("ie7p");if(Ext.isIE7){h("ie7")}else{h("ie8p");if(Ext.isIE8){h("ie8")}else{h("ie9p");if(Ext.isIE9){h("ie9")}}}}if(Ext.isIE6||Ext.isIE7){h("ie7m")}if(Ext.isIE6||Ext.isIE7||Ext.isIE8){h("ie8m")}if(Ext.isIE7||Ext.isIE8){h("ie78")}}if(Ext.isGecko){h("gecko");if(Ext.isGecko3){h("gecko3")}if(Ext.isGecko4){h("gecko4")}if(Ext.isGecko5){h("gecko5")}}if(Ext.isOpera){h("opera")}if(Ext.isWebKit){h("webkit")}if(Ext.isSafari){h("safari");if(Ext.isSafari2){h("safari2")}if(Ext.isSafari3){h("safari3")}if(Ext.isSafari4){h("safari4")}if(Ext.isSafari5){h("safari5")}}if(Ext.isChrome){h("chrome")}if(Ext.isMac){h("mac")}if(Ext.isLinux){h("linux")}if(!Ext.supports.CSS3BorderRadius){h("nbr")}if(!Ext.supports.CSS3LinearGradient){h("nlg")}if(!Ext.scopeResetCSS){h("reset")}if(d){if(Ext.isStrict&&(Ext.isIE6||Ext.isIE7)){Ext.isBorderBox=false}else{Ext.isBorderBox=true}b.push(e+(Ext.isBorderBox?"border-box":"strict"));if(!Ext.isStrict){b.push(e+"quirks");if(Ext.isIE&&!Ext.isStrict){Ext.isIEQuirks=true}}Ext.fly(d,"_internal").addCls(b)}Ext.fly(g,"_internal").addCls(c);return true};Ext.onReady(a)})();Ext.define("Ext.EventObjectImpl",{uses:["Ext.util.Point"],BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,WHEEL_SCALE:(function(){var a;if(Ext.isGecko){a=3}else{if(Ext.isMac){if(Ext.isSafari&&Ext.webKitVersion>=532){a=120}else{a=12}a*=3}else{a=120}}return a})(),clickRe:/(dbl)?click/,safariKeys:{3:13,63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35},btnMap:Ext.isIE?{1:0,4:1,2:2}:{0:0,1:1,2:2},constructor:function(a,b){if(a){this.setEvent(a.browserEvent||a,b)}},setEvent:function(d,e){var c=this,b,a;if(d==c||(d&&d.browserEvent)){return d}c.browserEvent=d;if(d){b=d.button?c.btnMap[d.button]:(d.which?d.which-1:-1);if(c.clickRe.test(d.type)&&b==-1){b=0}a={type:d.type,button:b,shiftKey:d.shiftKey,ctrlKey:d.ctrlKey||d.metaKey||false,altKey:d.altKey,keyCode:d.keyCode,charCode:d.charCode,target:Ext.EventManager.getTarget(d),relatedTarget:Ext.EventManager.getRelatedTarget(d),currentTarget:d.currentTarget,xy:(e?c.getXY():null)}}else{a={button:-1,shiftKey:false,ctrlKey:false,altKey:false,keyCode:0,charCode:0,target:null,xy:[0,0]}}Ext.apply(c,a);return c},stopEvent:function(){this.stopPropagation();this.preventDefault()},preventDefault:function(){if(this.browserEvent){Ext.EventManager.preventDefault(this.browserEvent)}},stopPropagation:function(){var a=this.browserEvent;if(a){if(a.type=="mousedown"){Ext.EventManager.stoppedMouseDownEvent.fire(this)}Ext.EventManager.stopPropagation(a)}},getCharCode:function(){return this.charCode||this.keyCode},getKey:function(){return this.normalizeKey(this.keyCode||this.charCode)},normalizeKey:function(a){return Ext.isWebKit?(this.safariKeys[a]||a):a},getPageX:function(){return this.getX()},getPageY:function(){return this.getY()},getX:function(){return this.getXY()[0]},getY:function(){return this.getXY()[1]},getXY:function(){if(!this.xy){this.xy=Ext.EventManager.getPageXY(this.browserEvent)}return this.xy},getTarget:function(b,c,a){if(b){return Ext.fly(this.target).findParent(b,c,a)}return a?Ext.get(this.target):this.target},getRelatedTarget:function(b,c,a){if(b){return Ext.fly(this.relatedTarget).findParent(b,c,a)}return a?Ext.get(this.relatedTarget):this.relatedTarget},correctWheelDelta:function(c){var b=this.WHEEL_SCALE,a=Math.round(c/b+0.5);if(!a&&c){a=(c<0)?-1:1}return a},getWheelDeltas:function(){var d=this,c=d.browserEvent,b=0,a=0;if(Ext.isDefined(c.wheelDeltaX)){b=c.wheelDeltaX;a=c.wheelDeltaY}else{if(c.wheelDelta){a=c.wheelDelta}else{if(c.detail){a=-c.detail;if(a>100){a=3}else{if(a<-100){a=-3}}if(Ext.isDefined(c.axis)&&c.axis===c.HORIZONTAL_AXIS){b=a;a=0}}}}return{x:d.correctWheelDelta(b),y:d.correctWheelDelta(a)}},getWheelDelta:function(){var a=this.getWheelDeltas();return a.y},within:function(d,e,b){if(d){var c=e?this.getRelatedTarget():this.getTarget(),a;if(c){a=Ext.fly(d).contains(c);if(!a&&b){a=c==Ext.getDom(d)}return a}}return false},isNavKeyPress:function(){var b=this,a=this.normalizeKey(b.keyCode);return(a>=33&&a<=40)||a==b.RETURN||a==b.TAB||a==b.ESC},isSpecialKey:function(){var a=this.normalizeKey(this.keyCode);return(this.type=="keypress"&&this.ctrlKey)||this.isNavKeyPress()||(a==this.BACKSPACE)||(a>=16&&a<=20)||(a>=44&&a<=46)},getPoint:function(){var a=this.getXY();return Ext.create("Ext.util.Point",a[0],a[1])},hasModifier:function(){return this.ctrlKey||this.altKey||this.shiftKey||this.metaKey},injectEvent:function(){var d,e={};if(!Ext.isIE&&document.createEvent){d={createHtmlEvent:function(k,i,h,g){var j=k.createEvent("HTMLEvents");j.initEvent(i,h,g);return j},createMouseEvent:function(v,t,m,l,p,k,i,j,g,s,r,n,q){var h=v.createEvent("MouseEvents"),u=v.defaultView||window;if(h.initMouseEvent){h.initMouseEvent(t,m,l,u,p,k,i,k,i,j,g,s,r,n,q)}else{h=v.createEvent("UIEvents");h.initEvent(t,m,l);h.view=u;h.detail=p;h.screenX=k;h.screenY=i;h.clientX=k;h.clientY=i;h.ctrlKey=j;h.altKey=g;h.metaKey=r;h.shiftKey=s;h.button=n;h.relatedTarget=q}return h},createUIEvent:function(m,k,i,h,j){var l=m.createEvent("UIEvents"),g=m.defaultView||window;l.initUIEvent(k,i,h,g,j);return l},fireEvent:function(i,g,h){i.dispatchEvent(h)},fixTarget:function(g){if(g==window&&!g.dispatchEvent){return document}return g}}}else{if(document.createEventObject){var c={0:1,1:4,2:2};d={createHtmlEvent:function(k,i,h,g){var j=k.createEventObject();j.bubbles=h;j.cancelable=g;return j},createMouseEvent:function(u,t,m,l,p,k,i,j,g,s,r,n,q){var h=u.createEventObject();h.bubbles=m;h.cancelable=l;h.detail=p;h.screenX=k;h.screenY=i;h.clientX=k;h.clientY=i;h.ctrlKey=j;h.altKey=g;h.shiftKey=s;h.metaKey=r;h.button=c[n]||n;h.relatedTarget=q;return h},createUIEvent:function(l,j,h,g,i){var k=l.createEventObject();k.bubbles=h;k.cancelable=g;return k},fireEvent:function(i,g,h){i.fireEvent("on"+g,h)},fixTarget:function(g){if(g==document){return document.documentElement}return g}}}}Ext.Object.each({load:[false,false],unload:[false,false],select:[true,false],change:[true,false],submit:[true,true],reset:[true,false],resize:[true,false],scroll:[true,false]},function(i,j){var h=j[0],g=j[1];e[i]=function(m,k){var l=d.createHtmlEvent(i,h,g);d.fireEvent(m,i,l)}});function b(i,h){var g=(i!="mousemove");return function(m,j){var l=j.getXY(),k=d.createMouseEvent(m.ownerDocument,i,true,g,h,l[0],l[1],j.ctrlKey,j.altKey,j.shiftKey,j.metaKey,j.button,j.relatedTarget);d.fireEvent(m,i,k)}}Ext.each(["click","dblclick","mousedown","mouseup","mouseover","mousemove","mouseout"],function(g){e[g]=b(g,1)});Ext.Object.each({focusin:[true,false],focusout:[true,false],activate:[true,true],focus:[false,false],blur:[false,false]},function(i,j){var h=j[0],g=j[1];e[i]=function(m,k){var l=d.createUIEvent(m.ownerDocument,i,h,g,1);d.fireEvent(m,i,l)}});if(!d){e={};d={fixTarget:function(g){return g}}}function a(h,g){}return function(j){var i=this,h=e[i.type]||a,g=j?(j.dom||j):i.getTarget();g=d.fixTarget(g);h(g,i)}}()},function(){Ext.EventObject=new Ext.EventObjectImpl()});(function(){var e=document,d=null,b=e.compatMode=="CSS1Compat",h=Ext.Element,a=function(i){if(!c){c=new Ext.Element.Flyweight()}c.dom=i;return c},c;if(!("activeElement" in e)&&e.addEventListener){e.addEventListener("focus",function(i){if(i&&i.target){d=(i.target==e)?null:i.target}},true)}function g(j,k,i){return function(){j.selectionStart=k;j.selectionEnd=i}}Ext.apply(h,{isAncestor:function(j,k){var i=false;j=Ext.getDom(j);k=Ext.getDom(k);if(j&&k){if(j.contains){return j.contains(k)}else{if(j.compareDocumentPosition){return !!(j.compareDocumentPosition(k)&16)}else{while((k=k.parentNode)){i=k==j||i}}}}return i},getActiveElement:function(){return e.activeElement||d},getRightMarginFixCleaner:function(n){var k=Ext.supports,l=k.DisplayChangeInputSelectionBug,m=k.DisplayChangeTextAreaSelectionBug;if(l||m){var p=e.activeElement||d,i=p&&p.tagName,q,j;if((m&&i=="TEXTAREA")||(l&&i=="INPUT"&&p.type=="text")){if(h.isAncestor(n,p)){q=p.selectionStart;j=p.selectionEnd;if(Ext.isNumber(q)&&Ext.isNumber(j)){return g(p,q,j)}}}}return Ext.emptyFn},getViewWidth:function(i){return i?h.getDocumentWidth():h.getViewportWidth()},getViewHeight:function(i){return i?h.getDocumentHeight():h.getViewportHeight()},getDocumentHeight:function(){return Math.max(!b?e.body.scrollHeight:e.documentElement.scrollHeight,h.getViewportHeight())},getDocumentWidth:function(){return Math.max(!b?e.body.scrollWidth:e.documentElement.scrollWidth,h.getViewportWidth())},getViewportHeight:function(){return Ext.isIE?(Ext.isStrict?e.documentElement.clientHeight:e.body.clientHeight):self.innerHeight},getViewportWidth:function(){return(!Ext.isStrict&&!Ext.isOpera)?e.body.clientWidth:Ext.isIE?e.documentElement.clientWidth:self.innerWidth},getY:function(i){return h.getXY(i)[1]},getX:function(i){return h.getXY(i)[0]},getOffsetParent:function(j){j=Ext.getDom(j);try{return j.offsetParent}catch(k){var i=document.body;return(j==i)?null:i}},getXY:function(k){var j,s,u,z,l,m,w=0,t=0,v,i,n=(e.body||e.documentElement),r;k=Ext.getDom(k);if(k!=n){i=a(k).isStyle("position","absolute");if(k.getBoundingClientRect){try{u=k.getBoundingClientRect();v=a(document).getScroll();r=[Math.round(u.left+v.left),Math.round(u.top+v.top)]}catch(q){}}if(!r){for(j=k;j;j=h.getOffsetParent(j)){s=a(j);w+=j.offsetLeft;t+=j.offsetTop;i=i||s.isStyle("position","absolute");if(Ext.isGecko){t+=z=parseInt(s.getStyle("borderTopWidth"),10)||0;w+=l=parseInt(s.getStyle("borderLeftWidth"),10)||0;if(j!=k&&!s.isStyle("overflow","visible")){w+=l;t+=z}}}if(Ext.isSafari&&i){w-=n.offsetLeft;t-=n.offsetTop}if(Ext.isGecko&&!i){m=a(n);w+=parseInt(m.getStyle("borderLeftWidth"),10)||0;t+=parseInt(m.getStyle("borderTopWidth"),10)||0}j=k.parentNode;while(j&&j!=n){if(!Ext.isOpera||(j.tagName!="TR"&&!a(j).isStyle("display","inline"))){w-=j.scrollLeft;t-=j.scrollTop}j=j.parentNode}r=[w,t]}}return r||[0,0]},setXY:function(j,k){(j=Ext.fly(j,"_setXY")).position();var l=j.translatePoints(k),i=j.dom.style,m;for(m in l){if(!isNaN(l[m])){i[m]=l[m]+"px"}}},setX:function(j,i){h.setXY(j,[i,false])},setY:function(i,j){h.setXY(i,[false,j])},serializeForm:function(p){var n=p.elements||(document.forms[p]||Ext.getDom(p)).elements,i=false,m=encodeURIComponent,j,q="",l,k;Ext.each(n,function(r){j=r.name;l=r.type;if(!r.disabled&&j){if(/select-(one|multiple)/i.test(l)){Ext.each(r.options,function(s){if(s.selected){k=s.hasAttribute?s.hasAttribute("value"):s.getAttributeNode("value").specified;q+=Ext.String.format("{0}={1}&",m(j),m(k?s.value:s.text))}})}else{if(!(/file|undefined|reset|button/i.test(l))){if(!(/radio|checkbox/i.test(l)&&!r.checked)&&!(l=="submit"&&i)){q+=m(j)+"="+m(r.value)+"&";i=/submit/i.test(l)}}}}});return q.substr(0,q.length-1)}})})();Ext.Element.addMethods({monitorMouseLeave:function(a,d,c){var e=this,g,b={mouseleave:function(h){g=setTimeout(Ext.Function.bind(d,c||e,[h]),a)},mouseenter:function(){clearTimeout(g)},freezeEvent:true};e.on(b);return b},swallowEvent:function(a,b){var d=this;function c(g){g.stopPropagation();if(b){g.preventDefault()}}if(Ext.isArray(a)){Ext.each(a,function(g){d.on(g,c)});return d}d.on(a,c);return d},relayEvent:function(a,b){this.on(a,function(c){b.fireEvent(a,c)})},clean:function(b){var d=this,e=d.dom,g=e.firstChild,a,c=-1;if(Ext.Element.data(e,"isCleaned")&&b!==true){return d}while(g){a=g.nextSibling;if(g.nodeType==3){if(!(/\S/.test(g.nodeValue))){e.removeChild(g)}else{if(a&&a.nodeType==3){g.appendData(Ext.String.trim(a.data));e.removeChild(a);a=g.nextSibling;g.nodeIndex=++c}}}else{Ext.fly(g).clean();g.nodeIndex=++c}g=a}Ext.Element.data(e,"isCleaned",true);return d},load:function(a){this.getLoader().load(a);return this},getLoader:function(){var c=this.dom,b=Ext.Element.data,a=b(c,"loader");if(!a){a=Ext.create("Ext.ElementLoader",{target:this});b(c,"loader",a)}return a},update:function(html,loadScripts,callback){var me=this,id,dom,interval;if(!me.dom){return me}html=html||"";dom=me.dom;if(loadScripts!==true){dom.innerHTML=html;Ext.callback(callback,me);return me}id=Ext.id();html+='<span id="'+id+'"></span>';interval=setInterval(function(){if(!document.getElementById(id)){return false}clearInterval(interval);var DOC=document,hd=DOC.getElementsByTagName("head")[0],re=/(?:<script([^>]*)?>)((\n|\r|.)*?)(?:<\/script>)/ig,srcRe=/\ssrc=([\'\"])(.*?)\1/i,typeRe=/\stype=([\'\"])(.*?)\1/i,match,attrs,srcMatch,typeMatch,el,s;while((match=re.exec(html))){attrs=match[1];srcMatch=attrs?attrs.match(srcRe):false;if(srcMatch&&srcMatch[2]){s=DOC.createElement("script");s.src=srcMatch[2];typeMatch=attrs.match(typeRe);if(typeMatch&&typeMatch[2]){s.type=typeMatch[2]}hd.appendChild(s)}else{if(match[2]&&match[2].length>0){if(window.execScript){window.execScript(match[2])}else{window.eval(match[2])}}}}el=DOC.getElementById(id);if(el){Ext.removeNode(el)}Ext.callback(callback,me)},20);dom.innerHTML=html.replace(/(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig,"");return me},removeAllListeners:function(){this.removeAnchor();Ext.EventManager.removeAll(this.dom);return this},createProxy:function(a,e,d){a=(typeof a=="object")?a:{tag:"div",cls:a};var c=this,b=e?Ext.DomHelper.append(e,a,true):Ext.DomHelper.insertBefore(c.dom,a,true);b.setVisibilityMode(Ext.Element.DISPLAY);b.hide();if(d&&c.setBox&&c.getBox){b.setBox(c.getBox())}return b}});Ext.Element.prototype.clearListeners=Ext.Element.prototype.removeAllListeners;Ext.Element.addMethods({getAnchorXY:function(e,l,q){e=(e||"tl").toLowerCase();q=q||{};var k=this,b=k.dom==document.body||k.dom==document,n=q.width||b?Ext.Element.getViewWidth():k.getWidth(),i=q.height||b?Ext.Element.getViewHeight():k.getHeight(),p,a=Math.round,c=k.getXY(),m=k.getScroll(),j=b?m.left:!l?c[0]:0,g=b?m.top:!l?c[1]:0,d={c:[a(n*0.5),a(i*0.5)],t:[a(n*0.5),0],l:[0,a(i*0.5)],r:[n,a(i*0.5)],b:[a(n*0.5),i],tl:[0,0],bl:[0,i],br:[n,i],tr:[n,0]};p=d[e];return[p[0]+j,p[1]+g]},anchorTo:function(b,h,c,a,k,l){var i=this,e=i.dom,j=!Ext.isEmpty(k),d=function(){Ext.fly(e).alignTo(b,h,c,a);Ext.callback(l,Ext.fly(e))},g=this.getAnchor();this.removeAnchor();Ext.apply(g,{fn:d,scroll:j});Ext.EventManager.onWindowResize(d,null);if(j){Ext.EventManager.on(window,"scroll",d,null,{buffer:!isNaN(k)?k:50})}d.call(i);return i},removeAnchor:function(){var b=this,a=this.getAnchor();if(a&&a.fn){Ext.EventManager.removeResizeListener(a.fn);if(a.scroll){Ext.EventManager.un(window,"scroll",a.fn)}delete a.fn}return b},getAnchor:function(){var b=Ext.Element.data,c=this.dom;if(!c){return}var a=b(c,"_anchor");if(!a){a=b(c,"_anchor",{})}return a},getAlignVector:function(c,a,h){var d=this,b={t:"top",l:"left",r:"right",b:"bottom"},e=d.getRegion(),g;c=Ext.get(c);if(!c||!c.dom){}g=c.getRegion()},getAlignToXY:function(g,A,B){g=Ext.get(g);if(!g||!g.dom){}B=B||[0,0];A=(!A||A=="?"?"tl-bl?":(!(/-/).test(A)&&A!==""?"tl-"+A:A||"tl-bl")).toLowerCase();var K=this,H=K.dom,M,L,n,l,s,F,v,t=Ext.Element.getViewWidth()-10,G=Ext.Element.getViewHeight()-10,b,i,j,k,u,z,N=document,J=N.documentElement,q=N.body,E=(J.scrollLeft||q.scrollLeft||0)+5,D=(J.scrollTop||q.scrollTop||0)+5,I=false,e="",a="",C=A.match(/^([a-z]+)-([a-z]+)(\?)?$/);if(!C){}e=C[1];a=C[2];I=!!C[3];M=K.getAnchorXY(e,true);L=g.getAnchorXY(a,false);n=L[0]-M[0]+B[0];l=L[1]-M[1]+B[1];if(I){s=K.getWidth();F=K.getHeight();v=g.getRegion();b=e.charAt(0);i=e.charAt(e.length-1);j=a.charAt(0);k=a.charAt(a.length-1);u=((b=="t"&&j=="b")||(b=="b"&&j=="t"));z=((i=="r"&&k=="l")||(i=="l"&&k=="r"));if(n+s>t+E){n=z?v.left-s:t+E-s}if(n<E){n=z?v.right:E}if(l+F>G+D){l=u?v.top-F:G+D-F}if(l<D){l=u?v.bottom:D}}return[n,l]},alignTo:function(c,a,e,b){var d=this;return d.setXY(d.getAlignToXY(c,a,e),d.anim&&!!b?d.anim(b):false)},adjustForConstraints:function(c,b){var a=this.getConstrainVector(b,c);if(a){c[0]+=a[0];c[1]+=a[1]}return c},getConstrainVector:function(d,b){if(!(d instanceof Ext.util.Region)){d=Ext.get(d).getViewRegion()}var g=this.getRegion(),a=[0,0],e=this.shadow&&this.shadow.offset,c=false;if(b){g.translateBy(b[0]-g.x,b[1]-g.y)}if(e){d.adjust(0,-e,-e,e)}if(g.right>d.right){c=true;a[0]=(d.right-g.right)}if(g.left+a[0]<d.left){c=true;a[0]=(d.left-g.left)}if(g.bottom>d.bottom){c=true;a[1]=(d.bottom-g.bottom)}if(g.top+a[1]<d.top){c=true;a[1]=(d.top-g.top)}return c?a:false},getCenterXY:function(){return this.getAlignToXY(document,"c-c")},center:function(a){return this.alignTo(a||document,"c-c")}});(function(){var i=Ext.Element,a="left",e="right",c="top",h="bottom",g="position",b="static",d="relative",j="auto",k="z-index";Ext.override(Ext.Element,{getX:function(){return i.getX(this.dom)},getY:function(){return i.getY(this.dom)},getXY:function(){return i.getXY(this.dom)},getOffsetsTo:function(l){var n=this.getXY(),m=Ext.fly(l,"_internal").getXY();return[n[0]-m[0],n[1]-m[1]]},setX:function(l,m){return this.setXY([l,this.getY()],m)},setY:function(m,l){return this.setXY([this.getX(),m],l)},setLeft:function(l){this.setStyle(a,this.addUnits(l));return this},setTop:function(l){this.setStyle(c,this.addUnits(l));return this},setRight:function(l){this.setStyle(e,this.addUnits(l));return this},setBottom:function(l){this.setStyle(h,this.addUnits(l));return this},setXY:function(n,l){var m=this;if(!l||!m.anim){i.setXY(m.dom,n)}else{if(!Ext.isObject(l)){l={}}m.animate(Ext.applyIf({to:{x:n[0],y:n[1]}},l))}return m},setLocation:function(l,n,m){return this.setXY([l,n],m)},moveTo:function(l,n,m){return this.setXY([l,n],m)},getLeft:function(l){return !l?this.getX():parseInt(this.getStyle(a),10)||0},getRight:function(l){var m=this;return !l?m.getX()+m.getWidth():(m.getLeft(true)+m.getWidth())||0},getTop:function(l){return !l?this.getY():parseInt(this.getStyle(c),10)||0},getBottom:function(l){var m=this;return !l?m.getY()+m.getHeight():(m.getTop(true)+m.getHeight())||0},position:function(q,p,l,n){var m=this;if(!q&&m.isStyle(g,b)){m.setStyle(g,d)}else{if(q){m.setStyle(g,q)}}if(p){m.setStyle(k,p)}if(l||n){m.setXY([l||false,n||false])}},clearPositioning:function(l){l=l||"";this.setStyle({left:l,right:l,top:l,bottom:l,"z-index":"",position:b});return this},getPositioning:function(){var m=this.getStyle(a);var n=this.getStyle(c);return{position:this.getStyle(g),left:m,right:m?"":this.getStyle(e),top:n,bottom:n?"":this.getStyle(h),"z-index":this.getStyle(k)}},setPositioning:function(l){var n=this,m=n.dom.style;n.setStyle(l);if(l.right==j){m.right=""}if(l.bottom==j){m.bottom=""}return n},translatePoints:function(l,s){if(Ext.isArray(l)){s=l[1];l=l[0]}var m=this,n=m.isStyle(g,d),r=m.getXY(),q=parseInt(m.getStyle(a),10),p=parseInt(m.getStyle(c),10);if(!Ext.isNumber(q)){q=n?0:m.dom.offsetLeft}if(!Ext.isNumber(p)){p=n?0:m.dom.offsetTop}q=(Ext.isNumber(l))?l-r[0]+q:undefined;p=(Ext.isNumber(s))?s-r[1]+p:undefined;return{left:q,top:p}},setBox:function(q,r,m){var p=this,l=q.width,n=q.height;if((r&&!p.autoBoxAdjust)&&!p.isBorderBox()){l-=(p.getBorderWidth("lr")+p.getPadding("lr"));n-=(p.getBorderWidth("tb")+p.getPadding("tb"))}p.setBounds(q.x,q.y,l,n,m);return p},getBox:function(u,A){var x=this,E,p,z,n=x.getBorderWidth,B=x.getPadding,q,m,D,y,C,s,v;if(!A){E=x.getXY()}else{p=parseInt(x.getStyle("left"),10)||0;z=parseInt(x.getStyle("top"),10)||0;E=[p,z]}C=x.getWidth();s=x.getHeight();if(!u){v={x:E[0],y:E[1],0:E[0],1:E[1],width:C,height:s}}else{q=n.call(x,"l")+B.call(x,"l");m=n.call(x,"r")+B.call(x,"r");D=n.call(x,"t")+B.call(x,"t");y=n.call(x,"b")+B.call(x,"b");v={x:E[0]+q,y:E[1]+D,0:E[0]+q,1:E[1]+D,width:C-(q+m),height:s-(D+y)}}v.right=v.x+v.width;v.bottom=v.y+v.height;return v},move:function(u,m,n){var r=this,z=r.getXY(),v=z[0],t=z[1],p=[v-m,t],w=[v+m,t],s=[v,t-m],l=[v,t+m],q={l:p,left:p,r:w,right:w,t:s,top:s,up:s,b:l,bottom:l,down:l};u=u.toLowerCase();r.moveTo(q[u][0],q[u][1],n)},setLeftTop:function(p,n){var m=this,l=m.dom.style;l.left=m.addUnits(p);l.top=m.addUnits(n);return m},getRegion:function(){return this.getPageBox(true)},getViewRegion:function(){var q=this,n=q.dom===document.body,m,t,s,r,p,l;if(n){m=q.getScroll();r=m.left;s=m.top;p=Ext.Element.getViewportWidth();l=Ext.Element.getViewportHeight()}else{t=q.getXY();r=t[0]+q.getBorderWidth("l")+q.getPadding("l");s=t[1]+q.getBorderWidth("t")+q.getPadding("t");p=q.getWidth(true);l=q.getHeight(true)}return Ext.create("Ext.util.Region",s,r+p,s+l,r)},getPageBox:function(q){var u=this,n=u.dom,x=n===document.body,y=x?Ext.Element.getViewWidth():n.offsetWidth,s=x?Ext.Element.getViewHeight():n.offsetHeight,A=u.getXY(),z=A[1],m=A[0]+y,v=A[1]+s,p=A[0];if(q){return Ext.create("Ext.util.Region",z,m,v,p)}else{return{left:p,top:z,width:y,height:s,right:m,bottom:v}}},setBounds:function(m,r,p,l,n){var q=this;if(!n||!q.anim){q.setSize(p,l);q.setLocation(m,r)}else{if(!Ext.isObject(n)){n={}}q.animate(Ext.applyIf({to:{x:m,y:r,width:q.adjustWidth(p),height:q.adjustHeight(l)}},n))}return q},setRegion:function(m,l){return this.setBounds(m.left,m.top,m.right-m.left,m.bottom-m.top,l)}})})();Ext.override(Ext.Element,{isScrollable:function(){var a=this.dom;return a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth},getScroll:function(){var i=this.dom,h=document,a=h.body,c=h.documentElement,b,g,e;if(i==h||i==a){if(Ext.isIE&&Ext.isStrict){b=c.scrollLeft;g=c.scrollTop}else{b=window.pageXOffset;g=window.pageYOffset}e={left:b||(a?a.scrollLeft:0),top:g||(a?a.scrollTop:0)}}else{e={left:i.scrollLeft,top:i.scrollTop}}return e},scrollTo:function(b,d,a){var g=/top/i.test(b),c=this,h=c.dom,e={},i;if(!a||!c.anim){i="scroll"+(g?"Top":"Left");h[i]=d}else{if(!Ext.isObject(a)){a={}}e["scroll"+(g?"Top":"Left")]=d;c.animate(Ext.applyIf({to:e},a))}return c},scrollIntoView:function(b,e){b=Ext.getDom(b)||Ext.getBody().dom;var c=this.dom,h=this.getOffsetsTo(b),g=h[0]+b.scrollLeft,j=h[1]+b.scrollTop,a=j+c.offsetHeight,k=g+c.offsetWidth,n=b.clientHeight,m=parseInt(b.scrollTop,10),d=parseInt(b.scrollLeft,10),i=m+n,l=d+b.clientWidth;if(c.offsetHeight>n||j<m){b.scrollTop=j}else{if(a>i){b.scrollTop=a-n}}b.scrollTop=b.scrollTop;if(e!==false){if(c.offsetWidth>b.clientWidth||g<d){b.scrollLeft=g}else{if(k>l){b.scrollLeft=k-b.clientWidth}}b.scrollLeft=b.scrollLeft}return this},scrollChildIntoView:function(b,a){Ext.fly(b,"_scrollChildIntoView").scrollIntoView(this,a)},scroll:function(m,b,d){if(!this.isScrollable()){return false}var e=this.dom,g=e.scrollLeft,q=e.scrollTop,n=e.scrollWidth,k=e.scrollHeight,i=e.clientWidth,a=e.clientHeight,c=false,p,j={l:Math.min(g+b,n-i),r:p=Math.max(g-b,0),t:Math.max(q-b,0),b:Math.min(q+b,k-a)};j.d=j.b;j.u=j.t;m=m.substr(0,1);if((p=j[m])>-1){c=true;this.scrollTo(m=="l"||m=="r"?"left":"top",p,this.anim(d))}return c}});Ext.Element.addMethods(function(){var d="visibility",b="display",a="hidden",h="none",c=Ext.baseCSSPrefix+"masked",g=Ext.baseCSSPrefix+"masked-relative",e=Ext.Element.data;return{isVisible:function(i){var j=!this.isStyle(d,a)&&!this.isStyle(b,h),k=this.dom.parentNode;if(i!==true||!j){return j}while(k&&!(/^body/i.test(k.tagName))){if(!Ext.fly(k,"_isVisible").isVisible()){return false}k=k.parentNode}return true},isDisplayed:function(){return !this.isStyle(b,h)},enableDisplayMode:function(i){this.setVisibilityMode(Ext.Element.DISPLAY);if(!Ext.isEmpty(i)){e(this.dom,"originalDisplay",i)}return this},mask:function(j,p){var r=this,l=r.dom,m=l.style.setExpression,q=Ext.DomHelper,n=Ext.baseCSSPrefix+"mask-msg",i,s;if(!(/^body/i.test(l.tagName)&&r.getStyle("position")=="static")){r.addCls(g)}i=e(l,"maskMsg");if(i){i.remove()}i=e(l,"mask");if(i){i.remove()}s=q.append(l,{cls:Ext.baseCSSPrefix+"mask"},true);e(l,"mask",s);r.addCls(c);s.setDisplayed(true);if(typeof j=="string"){var k=q.append(l,{cls:n,cn:{tag:"div"}},true);e(l,"maskMsg",k);k.dom.className=p?n+" "+p:n;k.dom.firstChild.innerHTML=j;k.setDisplayed(true);k.center(r)}if(!Ext.supports.IncludePaddingInWidthCalculation&&m){s.dom.style.setExpression("width",'this.parentNode.offsetWidth + "px"')}if(!Ext.supports.IncludePaddingInHeightCalculation&&m){s.dom.style.setExpression("height",'this.parentNode.offsetHeight + "px"')}else{if(Ext.isIE&&!(Ext.isIE7&&Ext.isStrict)&&r.getStyle("height")=="auto"){s.setSize(undefined,r.getHeight())}}return s},unmask:function(){var k=this,l=k.dom,i=e(l,"mask"),j=e(l,"maskMsg");if(i){if(i.dom.style.clearExpression){i.dom.style.clearExpression("width");i.dom.style.clearExpression("height")}if(j){j.remove();e(l,"maskMsg",undefined)}i.remove();e(l,"mask",undefined);k.removeCls([c,g])}},isMasked:function(){var k=this,i=e(k.dom,"mask"),j=e(k.dom,"maskMsg");if(i&&i.isVisible()){if(j){j.center(k)}return true}return false},createShim:function(){var i=document.createElement("iframe"),j;i.frameBorder="0";i.className=Ext.baseCSSPrefix+"shim";i.src=Ext.SSL_SECURE_URL;j=Ext.get(this.dom.parentNode.insertBefore(i,this.dom));j.autoBoxAdjust=false;return j}}}());Ext.Element.addMethods({addKeyListener:function(b,d,c){var a;if(typeof b!="object"||Ext.isArray(b)){a={key:b,fn:d,scope:c}}else{a={key:b.key,shift:b.shift,ctrl:b.ctrl,alt:b.alt,fn:d,scope:c}}return Ext.create("Ext.util.KeyMap",this,a)},addKeyMap:function(a){return Ext.create("Ext.util.KeyMap",this,a)}});Ext.CompositeElementLite.importElementMethods();Ext.apply(Ext.CompositeElementLite.prototype,{addElements:function(c,a){if(!c){return this}if(typeof c=="string"){c=Ext.Element.selectorFunction(c,a)}var b=this.elements;Ext.each(c,function(d){b.push(Ext.get(d))});return this},first:function(){return this.item(0)},last:function(){return this.item(this.getCount()-1)},contains:function(a){return this.indexOf(a)!=-1},removeElement:function(d,e){var c=this,a=this.elements,b;Ext.each(d,function(g){if((b=(a[g]||a[g=c.indexOf(g)]))){if(e){if(b.dom){b.remove()}else{Ext.removeNode(b)}}Ext.Array.erase(a,g,1)}});return this}});Ext.CompositeElement=Ext.extend(Ext.CompositeElementLite,{constructor:function(b,a){this.elements=[];this.add(b,a)},getElement:function(a){return a},transformElement:function(a){return Ext.get(a)}});Ext.Element.select=function(a,d,b){var c;if(typeof a=="string"){c=Ext.Element.selectorFunction(a,b)}else{if(a.length!==undefined){c=a}else{}}return(d===true)?new Ext.CompositeElement(c):new Ext.CompositeElementLite(c)};Ext.select=Ext.Element.select;(function(){var h={nameToAliasesMap:{"Ext.AbstractComponent":[""],"Ext.AbstractManager":[""],"Ext.AbstractPlugin":[""],"Ext.Ajax":[""],"Ext.ComponentLoader":[""],"Ext.ComponentManager":[""],"Ext.ComponentQuery":[""],"Ext.ElementLoader":[""],"Ext.ModelManager":[""],"Ext.PluginManager":[""],"Ext.Template":[""],"Ext.XTemplate":[""],"Ext.app.Application":[""],"Ext.app.Controller":[""],"Ext.app.EventBus":[""],"Ext.chart.Callout":[""],"Ext.chart.Chart":["widget.chart"],"Ext.chart.Highlight":[""],"Ext.chart.Label":[""],"Ext.chart.Legend":[""],"Ext.chart.LegendItem":[""],"Ext.chart.Mask":[""],"Ext.chart.MaskLayer":[""],"Ext.chart.Navigation":[""],"Ext.chart.Shape":[""],"Ext.chart.Tip":[""],"Ext.chart.TipSurface":[""],"Ext.chart.axis.Abstract":[""],"Ext.chart.axis.Axis":[""],"Ext.chart.axis.Category":["axis.category"],"Ext.chart.axis.Gauge":["axis.gauge"],"Ext.chart.axis.Numeric":["axis.numeric"],"Ext.chart.axis.Radial":["axis.radial"],"Ext.chart.axis.Time":["axis.time"],"Ext.chart.series.Area":["series.area"],"Ext.chart.series.Bar":["series.bar"],"Ext.chart.series.Cartesian":[""],"Ext.chart.series.Column":["series.column"],"Ext.chart.series.Gauge":["series.gauge"],"Ext.chart.series.Line":["series.line"],"Ext.chart.series.Pie":["series.pie"],"Ext.chart.series.Radar":["series.radar"],"Ext.chart.series.Scatter":["series.scatter"],"Ext.chart.series.Series":[""],"Ext.chart.theme.Base":[""],"Ext.chart.theme.Theme":[""],"Ext.container.AbstractContainer":[""],"Ext.data.AbstractStore":[""],"Ext.data.ArrayStore":["store.array"],"Ext.data.Association":[""],"Ext.data.Batch":[""],"Ext.data.BelongsToAssociation":["association.belongsto"],"Ext.data.BufferStore":["store.buffer"],"Ext.data.Connection":[""],"Ext.data.DirectStore":["store.direct"],"Ext.data.Errors":[""],"Ext.data.Field":["data.field"],"Ext.data.HasManyAssociation":["association.hasmany"],"Ext.data.IdGenerator":[""],"Ext.data.JsonP":[""],"Ext.data.JsonPStore":["store.jsonp"],"Ext.data.JsonStore":["store.json"],"Ext.data.Model":[""],"Ext.data.NodeInterface":[""],"Ext.data.NodeStore":["store.node"],"Ext.data.Operation":[""],"Ext.data.Request":[""],"Ext.data.ResultSet":[""],"Ext.data.SequentialIdGenerator":["idgen.sequential"],"Ext.data.SortTypes":[""],"Ext.data.Store":["store.store"],"Ext.data.StoreManager":[""],"Ext.data.Tree":["data.tree"],"Ext.data.TreeStore":["store.tree"],"Ext.data.Types":[""],"Ext.data.UuidGenerator":[""],"Ext.data.validations":[""],"Ext.data.XmlStore":["store.xml"],"Ext.data.proxy.Ajax":["proxy.ajax"],"Ext.data.proxy.Client":[""],"Ext.data.proxy.Direct":["proxy.direct"],"Ext.data.proxy.JsonP":["proxy.jsonp","proxy.scripttag"],"Ext.data.proxy.LocalStorage":["proxy.localstorage"],"Ext.data.proxy.Memory":["proxy.memory"],"Ext.data.proxy.Proxy":["proxy.proxy"],"Ext.data.proxy.Rest":["proxy.rest"],"Ext.data.proxy.Server":["proxy.server"],"Ext.data.proxy.SessionStorage":["proxy.sessionstorage"],"Ext.data.proxy.WebStorage":[""],"Ext.data.reader.Array":["reader.array"],"Ext.data.reader.Json":["reader.json"],"Ext.data.reader.Reader":[""],"Ext.data.reader.Xml":["reader.xml"],"Ext.data.writer.Json":["writer.json"],"Ext.data.writer.Writer":["writer.base"],"Ext.data.writer.Xml":["writer.xml"],"Ext.direct.Event":["direct.event"],"Ext.direct.ExceptionEvent":["direct.exception"],"Ext.direct.JsonProvider":["direct.jsonprovider"],"Ext.direct.Manager":[""],"Ext.direct.PollingProvider":["direct.pollingprovider"],"Ext.direct.Provider":["direct.provider"],"Ext.direct.RemotingEvent":["direct.rpc"],"Ext.direct.RemotingMethod":[""],"Ext.direct.RemotingProvider":["direct.remotingprovider"],"Ext.direct.Transaction":["direct.transaction"],"Ext.draw.Color":[""],"Ext.draw.Component":["widget.draw"],"Ext.draw.CompositeSprite":[""],"Ext.draw.Draw":[""],"Ext.draw.Matrix":[""],"Ext.draw.Sprite":[""],"Ext.draw.SpriteDD":[""],"Ext.draw.Surface":[""],"Ext.draw.engine.Svg":[""],"Ext.draw.engine.Vml":[""],"Ext.fx.Anim":[""],"Ext.fx.Animator":[""],"Ext.fx.CubicBezier":[""],"Ext.fx.Easing":[],"Ext.fx.Manager":[""],"Ext.fx.PropertyHandler":[""],"Ext.fx.Queue":[""],"Ext.fx.target.Component":[""],"Ext.fx.target.CompositeElement":[""],"Ext.fx.target.CompositeElementCSS":[""],"Ext.fx.target.CompositeSprite":[""],"Ext.fx.target.Element":[""],"Ext.fx.target.ElementCSS":[""],"Ext.fx.target.Sprite":[""],"Ext.fx.target.Target":[""],"Ext.layout.Layout":[""],"Ext.layout.component.AbstractDock":[""],"Ext.layout.component.Auto":["layout.autocomponent"],"Ext.layout.component.Component":[""],"Ext.layout.component.Draw":["layout.draw"],"Ext.layout.container.AbstractCard":[""],"Ext.layout.container.AbstractContainer":[""],"Ext.layout.container.AbstractFit":[""],"Ext.layout.container.Auto":["layout.auto","layout.autocontainer"],"Ext.panel.AbstractPanel":[""],"Ext.selection.DataViewModel":[""],"Ext.selection.Model":[""],"Ext.state.CookieProvider":[""],"Ext.state.LocalStorageProvider":["state.localstorage"],"Ext.state.Manager":[""],"Ext.state.Provider":[""],"Ext.state.Stateful":[""],"Ext.util.AbstractMixedCollection":[""],"Ext.util.Filter":[""],"Ext.util.Grouper":[""],"Ext.util.HashMap":[""],"Ext.util.Inflector":[""],"Ext.util.Memento":[""],"Ext.util.MixedCollection":[""],"Ext.util.Observable":[""],"Ext.util.Offset":[""],"Ext.util.Point":[""],"Ext.util.Region":[""],"Ext.util.Sortable":[""],"Ext.util.Sorter":[""],"Ext.view.AbstractView":[""],"Ext.Action":[""],"Ext.Component":["widget.component","widget.box"],"Ext.Editor":["widget.editor"],"Ext.FocusManager":[""],"Ext.Img":["widget.image","widget.imagecomponent"],"Ext.Layer":[""],"Ext.LoadMask":["widget.loadmask"],"Ext.ProgressBar":["widget.progressbar"],"Ext.Shadow":[""],"Ext.ShadowPool":[""],"Ext.ZIndexManager":[""],"Ext.button.Button":["widget.button"],"Ext.button.Cycle":["widget.cycle"],"Ext.button.Split":["widget.splitbutton"],"Ext.container.ButtonGroup":["widget.buttongroup"],"Ext.container.Container":["widget.container"],"Ext.container.Viewport":["widget.viewport"],"Ext.dd.DD":[""],"Ext.dd.DDProxy":[""],"Ext.dd.DDTarget":[""],"Ext.dd.DragDrop":[""],"Ext.dd.DragDropManager":[""],"Ext.dd.DragSource":[""],"Ext.dd.DragTracker":[""],"Ext.dd.DragZone":[""],"Ext.dd.DropTarget":[""],"Ext.dd.DropZone":[""],"Ext.dd.Registry":[""],"Ext.dd.ScrollManager":[""],"Ext.dd.StatusProxy":[""],"Ext.flash.Component":["widget.flash"],"Ext.form.Basic":[""],"Ext.form.CheckboxGroup":["widget.checkboxgroup"],"Ext.form.CheckboxManager":[""],"Ext.form.FieldAncestor":[""],"Ext.form.FieldContainer":["widget.fieldcontainer"],"Ext.form.FieldSet":["widget.fieldset"],"Ext.form.Label":["widget.label"],"Ext.form.Labelable":[""],"Ext.form.Panel":["widget.form"],"Ext.form.RadioGroup":["widget.radiogroup"],"Ext.form.RadioManager":[""],"Ext.form.action.Action":[""],"Ext.form.action.DirectLoad":["formaction.directload"],"Ext.form.action.DirectSubmit":["formaction.directsubmit"],"Ext.form.action.Load":["formaction.load"],"Ext.form.action.StandardSubmit":["formaction.standardsubmit"],"Ext.form.action.Submit":["formaction.submit"],"Ext.form.field.Base":["widget.field"],"Ext.form.field.Checkbox":["widget.checkboxfield","widget.checkbox"],"Ext.form.field.ComboBox":["widget.combobox","widget.combo"],"Ext.form.field.Date":["widget.datefield"],"Ext.form.field.Display":["widget.displayfield"],"Ext.form.field.Field":[""],"Ext.form.field.File":["widget.filefield","widget.fileuploadfield"],"Ext.form.field.Hidden":["widget.hiddenfield","widget.hidden"],"Ext.form.field.HtmlEditor":["widget.htmleditor"],"Ext.form.field.Number":["widget.numberfield"],"Ext.form.field.Picker":["widget.pickerfield"],"Ext.form.field.Radio":["widget.radiofield","widget.radio"],"Ext.form.field.Spinner":["widget.spinnerfield"],"Ext.form.field.Text":["widget.textfield"],"Ext.form.field.TextArea":["widget.textareafield","widget.textarea"],"Ext.form.field.Time":["widget.timefield"],"Ext.form.field.Trigger":["widget.triggerfield","widget.trigger"],"Ext.form.field.VTypes":[""],"Ext.grid.CellEditor":[""],"Ext.grid.ColumnLayout":["layout.gridcolumn"],"Ext.grid.Lockable":[""],"Ext.grid.LockingView":[""],"Ext.grid.PagingScroller":["widget.paginggridscroller"],"Ext.grid.Panel":["widget.gridpanel","widget.grid"],"Ext.grid.RowEditor":[""],"Ext.grid.RowNumberer":["widget.rownumberer"],"Ext.grid.Scroller":["widget.gridscroller"],"Ext.grid.View":["widget.gridview"],"Ext.grid.ViewDropZone":[""],"Ext.grid.column.Action":["widget.actioncolumn"],"Ext.grid.column.Boolean":["widget.booleancolumn"],"Ext.grid.column.Column":["widget.gridcolumn"],"Ext.grid.column.Date":["widget.datecolumn"],"Ext.grid.column.Number":["widget.numbercolumn"],"Ext.grid.column.Template":["widget.templatecolumn"],"Ext.grid.feature.AbstractSummary":["feature.abstractsummary"],"Ext.grid.feature.Chunking":["feature.chunking"],"Ext.grid.feature.Feature":["feature.feature"],"Ext.grid.feature.Grouping":["feature.grouping"],"Ext.grid.feature.GroupingSummary":["feature.groupingsummary"],"Ext.grid.feature.RowBody":["feature.rowbody"],"Ext.grid.feature.RowWrap":["feature.rowwrap"],"Ext.grid.feature.Summary":["feature.summary"],"Ext.grid.header.Container":["widget.headercontainer"],"Ext.grid.header.DragZone":[""],"Ext.grid.header.DropZone":[""],"Ext.grid.plugin.CellEditing":["plugin.cellediting"],"Ext.grid.plugin.DragDrop":["plugin.gridviewdragdrop"],"Ext.grid.plugin.Editing":["editing.editing"],"Ext.grid.plugin.HeaderReorderer":["plugin.gridheaderreorderer"],"Ext.grid.plugin.HeaderResizer":["plugin.gridheaderresizer"],"Ext.grid.plugin.RowEditing":["plugin.rowediting"],"Ext.grid.property.Grid":["widget.propertygrid"],"Ext.grid.property.HeaderContainer":[""],"Ext.grid.property.Property":[""],"Ext.grid.property.Store":[""],"Ext.layout.component.Body":["layout.body"],"Ext.layout.component.BoundList":["layout.boundlist"],"Ext.layout.component.Button":["layout.button"],"Ext.layout.component.Dock":["layout.dock"],"Ext.layout.component.Editor":["layout.editor"],"Ext.layout.component.FieldSet":["layout.fieldset"],"Ext.layout.component.ProgressBar":["layout.progressbar"],"Ext.layout.component.Tab":["layout.tab"],"Ext.layout.component.Tip":["layout.tip"],"Ext.layout.component.field.Field":["layout.field"],"Ext.layout.component.field.File":["layout.filefield"],"Ext.layout.component.field.HtmlEditor":["layout.htmleditor"],"Ext.layout.component.field.Slider":["layout.sliderfield"],"Ext.layout.component.field.Text":["layout.textfield"],"Ext.layout.component.field.TextArea":["layout.textareafield"],"Ext.layout.component.field.Trigger":["layout.triggerfield"],"Ext.layout.container.Absolute":["layout.absolute"],"Ext.layout.container.Accordion":["layout.accordion"],"Ext.layout.container.Anchor":["layout.anchor"],"Ext.layout.container.Border":["layout.border"],"Ext.layout.container.Box":["layout.box"],"Ext.layout.container.Card":["layout.card"],"Ext.layout.container.CheckboxGroup":["layout.checkboxgroup"],"Ext.layout.container.Column":["layout.column"],"Ext.layout.container.Container":[""],"Ext.layout.container.Fit":["layout.fit"],"Ext.layout.container.HBox":["layout.hbox"],"Ext.layout.container.Table":["layout.table"],"Ext.layout.container.VBox":["layout.vbox"],"Ext.layout.container.boxOverflow.Menu":[""],"Ext.layout.container.boxOverflow.None":[""],"Ext.layout.container.boxOverflow.Scroller":[""],"Ext.menu.CheckItem":["widget.menucheckitem"],"Ext.menu.ColorPicker":["widget.colormenu"],"Ext.menu.DatePicker":["widget.datemenu"],"Ext.menu.Item":["widget.menuitem"],"Ext.menu.KeyNav":[""],"Ext.menu.Manager":[""],"Ext.menu.Menu":["widget.menu"],"Ext.menu.Separator":["widget.menuseparator"],"Ext.panel.DD":[""],"Ext.panel.Header":["widget.header"],"Ext.panel.Panel":["widget.panel"],"Ext.panel.Proxy":[""],"Ext.panel.Table":["widget.tablepanel"],"Ext.panel.Tool":["widget.tool"],"Ext.picker.Color":["widget.colorpicker"],"Ext.picker.Date":["widget.datepicker"],"Ext.picker.Month":["widget.monthpicker"],"Ext.picker.Time":["widget.timepicker"],"Ext.resizer.Handle":[""],"Ext.resizer.Resizer":[""],"Ext.resizer.ResizeTracker":[""],"Ext.resizer.Splitter":["widget.splitter"],"Ext.resizer.SplitterTracker":[""],"Ext.selection.CellModel":["selection.cellmodel"],"Ext.selection.CheckboxModel":["selection.checkboxmodel"],"Ext.selection.RowModel":["selection.rowmodel"],"Ext.selection.TreeModel":["selection.treemodel"],"Ext.slider.Multi":["widget.multislider"],"Ext.slider.Single":["widget.slider","widget.sliderfield"],"Ext.slider.Thumb":[""],"Ext.slider.Tip":["widget.slidertip"],"Ext.tab.Bar":["widget.tabbar"],"Ext.tab.Panel":["widget.tabpanel"],"Ext.tab.Tab":["widget.tab"],"Ext.tip.QuickTip":[""],"Ext.tip.QuickTipManager":[""],"Ext.tip.Tip":[""],"Ext.tip.ToolTip":["widget.tooltip"],"Ext.toolbar.Fill":["widget.tbfill"],"Ext.toolbar.Item":["widget.tbitem"],"Ext.toolbar.Paging":["widget.pagingtoolbar"],"Ext.toolbar.Separator":["widget.tbseparator"],"Ext.toolbar.Spacer":["widget.tbspacer"],"Ext.toolbar.TextItem":["widget.tbtext"],"Ext.toolbar.Toolbar":["widget.toolbar"],"Ext.tree.Column":["widget.treecolumn"],"Ext.tree.Panel":["widget.treepanel"],"Ext.tree.View":["widget.treeview"],"Ext.tree.ViewDragZone":[""],"Ext.tree.ViewDropZone":[""],"Ext.tree.plugin.TreeViewDragDrop":["plugin.treeviewdragdrop"],"Ext.util.Animate":[""],"Ext.util.ClickRepeater":[""],"Ext.util.ComponentDragger":[""],"Ext.util.Cookies":[""],"Ext.util.CSS":[""],"Ext.util.Floating":[""],"Ext.util.History":[""],"Ext.util.KeyMap":[""],"Ext.util.KeyNav":[""],"Ext.util.TextMetrics":[""],"Ext.view.BoundList":["widget.boundlist"],"Ext.view.BoundListKeyNav":[""],"Ext.view.DragZone":[""],"Ext.view.DropZone":[""],"Ext.view.Table":["widget.tableview"],"Ext.view.TableChunker":[""],"Ext.view.View":["widget.dataview"],"Ext.window.MessageBox":["widget.messagebox"],"Ext.window.Window":["widget.window"]},alternateToNameMap:{"Ext.ComponentMgr":"Ext.ComponentManager","Ext.ModelMgr":"Ext.ModelManager","Ext.PluginMgr":"Ext.PluginManager","Ext.chart.Axis":"Ext.chart.axis.Axis","Ext.chart.CategoryAxis":"Ext.chart.axis.Category","Ext.chart.NumericAxis":"Ext.chart.axis.Numeric","Ext.chart.TimeAxis":"Ext.chart.axis.Time","Ext.chart.BarSeries":"Ext.chart.series.Bar","Ext.chart.BarChart":"Ext.chart.series.Bar","Ext.chart.StackedBarChart":"Ext.chart.series.Bar","Ext.chart.CartesianSeries":"Ext.chart.series.Cartesian","Ext.chart.CartesianChart":"Ext.chart.series.Cartesian","Ext.chart.ColumnSeries":"Ext.chart.series.Column","Ext.chart.ColumnChart":"Ext.chart.series.Column","Ext.chart.StackedColumnChart":"Ext.chart.series.Column","Ext.chart.LineSeries":"Ext.chart.series.Line","Ext.chart.LineChart":"Ext.chart.series.Line","Ext.chart.PieSeries":"Ext.chart.series.Pie","Ext.chart.PieChart":"Ext.chart.series.Pie","Ext.data.Record":"Ext.data.Model","Ext.StoreMgr":"Ext.data.StoreManager","Ext.data.StoreMgr":"Ext.data.StoreManager","Ext.StoreManager":"Ext.data.StoreManager","Ext.data.XmlStore":"Ext.data.XmlStore","Ext.data.HttpProxy":"Ext.data.proxy.Ajax","Ext.data.AjaxProxy":"Ext.data.proxy.Ajax","Ext.data.ClientProxy":"Ext.data.proxy.Client","Ext.data.DirectProxy":"Ext.data.proxy.Direct","Ext.data.ScriptTagProxy":"Ext.data.proxy.JsonP","Ext.data.LocalStorageProxy":"Ext.data.proxy.LocalStorage","Ext.data.MemoryProxy":"Ext.data.proxy.Memory","Ext.data.DataProxy":"Ext.data.proxy.Proxy","Ext.data.Proxy":"Ext.data.proxy.Proxy","Ext.data.RestProxy":"Ext.data.proxy.Rest","Ext.data.ServerProxy":"Ext.data.proxy.Server","Ext.data.SessionStorageProxy":"Ext.data.proxy.SessionStorage","Ext.data.WebStorageProxy":"Ext.data.proxy.WebStorage","Ext.data.ArrayReader":"Ext.data.reader.Array","Ext.data.JsonReader":"Ext.data.reader.Json","Ext.data.Reader":"Ext.data.reader.Reader","Ext.data.DataReader":"Ext.data.reader.Reader","Ext.data.XmlReader":"Ext.data.reader.Xml","Ext.data.JsonWriter":"Ext.data.writer.Json","Ext.data.DataWriter":"Ext.data.writer.Writer","Ext.data.Writer":"Ext.data.writer.Writer","Ext.data.XmlWriter":"Ext.data.writer.Xml","Ext.Direct.Transaction":"Ext.direct.Transaction","Ext.AbstractSelectionModel":"Ext.selection.Model","Ext.view.AbstractView":"Ext.view.AbstractView","Ext.FocusMgr":"Ext.FocusManager","Ext.WindowGroup":"Ext.ZIndexManager","Ext.Button":"Ext.button.Button","Ext.CycleButton":"Ext.button.Cycle","Ext.SplitButton":"Ext.button.Split","Ext.ButtonGroup":"Ext.container.ButtonGroup","Ext.Container":"Ext.container.Container","Ext.Viewport":"Ext.container.Viewport","Ext.dd.DragDropMgr":"Ext.dd.DragDropManager","Ext.dd.DDM":"Ext.dd.DragDropManager","Ext.FlashComponent":"Ext.flash.Component","Ext.form.BasicForm":"Ext.form.Basic","Ext.FormPanel":"Ext.form.Panel","Ext.form.FormPanel":"Ext.form.Panel","Ext.form.Action":"Ext.form.action.Action","Ext.form.Action.DirectLoad":"Ext.form.action.DirectLoad","Ext.form.Action.DirectSubmit":"Ext.form.action.DirectSubmit","Ext.form.Action.Load":"Ext.form.action.Load","Ext.form.Action.Submit":"Ext.form.action.Submit","Ext.form.Field":"Ext.form.field.Base","Ext.form.BaseField":"Ext.form.field.Base","Ext.form.Checkbox":"Ext.form.field.Checkbox","Ext.form.ComboBox":"Ext.form.field.ComboBox","Ext.form.DateField":"Ext.form.field.Date","Ext.form.Date":"Ext.form.field.Date","Ext.form.DisplayField":"Ext.form.field.Display","Ext.form.Display":"Ext.form.field.Display","Ext.form.FileUploadField":"Ext.form.field.File","Ext.ux.form.FileUploadField":"Ext.form.field.File","Ext.form.File":"Ext.form.field.File","Ext.form.Hidden":"Ext.form.field.Hidden","Ext.form.HtmlEditor":"Ext.form.field.HtmlEditor","Ext.form.NumberField":"Ext.form.field.Number","Ext.form.Number":"Ext.form.field.Number","Ext.form.Picker":"Ext.form.field.Picker","Ext.form.Radio":"Ext.form.field.Radio","Ext.form.Spinner":"Ext.form.field.Spinner","Ext.form.TextField":"Ext.form.field.Text","Ext.form.Text":"Ext.form.field.Text","Ext.form.TextArea":"Ext.form.field.TextArea","Ext.form.TimeField":"Ext.form.field.Time","Ext.form.Time":"Ext.form.field.Time","Ext.form.TriggerField":"Ext.form.field.Trigger","Ext.form.TwinTriggerField":"Ext.form.field.Trigger","Ext.form.Trigger":"Ext.form.field.Trigger","Ext.list.ListView":"Ext.grid.Panel","Ext.ListView":"Ext.grid.Panel","Ext.grid.GridPanel":"Ext.grid.Panel","Ext.grid.ActionColumn":"Ext.grid.column.Action","Ext.grid.BooleanColumn":"Ext.grid.column.Boolean","Ext.grid.Column":"Ext.grid.column.Column","Ext.grid.DateColumn":"Ext.grid.column.Date","Ext.grid.NumberColumn":"Ext.grid.column.Number","Ext.grid.TemplateColumn":"Ext.grid.column.Template","Ext.grid.PropertyGrid":"Ext.grid.property.Grid","Ext.grid.PropertyColumnModel":"Ext.grid.property.HeaderContainer","Ext.PropGridProperty":"Ext.grid.property.Property","Ext.grid.PropertyStore":"Ext.grid.property.Store","Ext.layout.AbsoluteLayout":"Ext.layout.container.Absolute","Ext.layout.AccordionLayout":"Ext.layout.container.Accordion","Ext.layout.AnchorLayout":"Ext.layout.container.Anchor","Ext.layout.BorderLayout":"Ext.layout.container.Border","Ext.layout.BoxLayout":"Ext.layout.container.Box","Ext.layout.CardLayout":"Ext.layout.container.Card","Ext.layout.ColumnLayout":"Ext.layout.container.Column","Ext.layout.ContainerLayout":"Ext.layout.container.Container","Ext.layout.FitLayout":"Ext.layout.container.Fit","Ext.layout.HBoxLayout":"Ext.layout.container.HBox","Ext.layout.TableLayout":"Ext.layout.container.Table","Ext.layout.VBoxLayout":"Ext.layout.container.VBox","Ext.layout.boxOverflow.Menu":"Ext.layout.container.boxOverflow.Menu","Ext.layout.boxOverflow.None":"Ext.layout.container.boxOverflow.None","Ext.layout.boxOverflow.Scroller":"Ext.layout.container.boxOverflow.Scroller","Ext.menu.TextItem":"Ext.menu.Item","Ext.menu.MenuMgr":"Ext.menu.Manager","Ext.Panel":"Ext.panel.Panel","Ext.dd.PanelProxy":"Ext.panel.Proxy","Ext.ColorPalette":"Ext.picker.Color","Ext.DatePicker":"Ext.picker.Date","Ext.MonthPicker":"Ext.picker.Month","Ext.Resizable":"Ext.resizer.Resizer","Ext.slider.MultiSlider":"Ext.slider.Multi","Ext.Slider":"Ext.slider.Single","Ext.form.SliderField":"Ext.slider.Single","Ext.slider.SingleSlider":"Ext.slider.Single","Ext.slider.Slider":"Ext.slider.Single","Ext.TabPanel":"Ext.tab.Panel","Ext.QuickTip":"Ext.tip.QuickTip","Ext.Tip":"Ext.tip.Tip","Ext.ToolTip":"Ext.tip.ToolTip","Ext.Toolbar.Fill":"Ext.toolbar.Fill","Ext.Toolbar.Item":"Ext.toolbar.Item","Ext.PagingToolbar":"Ext.toolbar.Paging","Ext.Toolbar.Separator":"Ext.toolbar.Separator","Ext.Toolbar.Spacer":"Ext.toolbar.Spacer","Ext.Toolbar.TextItem":"Ext.toolbar.TextItem","Ext.Toolbar":"Ext.toolbar.Toolbar","Ext.tree.TreePanel":"Ext.tree.Panel","Ext.TreePanel":"Ext.tree.Panel","Ext.History":"Ext.util.History","Ext.KeyMap":"Ext.util.KeyMap","Ext.KeyNav":"Ext.util.KeyNav","Ext.BoundList":"Ext.view.BoundList","Ext.DataView":"Ext.view.View","Ext.Window":"Ext.window.Window"}};var g=document.getElementsByTagName("script"),n="",j,m,a,k;for(j=0,m=g.length;j<m;j++){a=g[j].src;k=a.match(/ext(-debug)?\.js$/);if(k){n=a.substring(0,a.length-k[0].length);break}}var l=h.nameToAliasesMap,d=h.alternateToNameMap,e=Ext.ClassManager,b,c;for(b in l){if(l.hasOwnProperty(b)){c=l[b];if(c.length>0){for(j=0,m=c.length;j<m;j++){e.setAlias(b,c[j])}}else{e.setAlias(b,null)}}}Ext.Object.merge(e.maps.alternateToName,d);Ext.Loader.setConfig({enabled:true,disableCaching:true,paths:{Ext:n+"src"}})})();

var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();

Ext.ns("Docs");

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Docs': 'app'
    }
});

Ext.require('Docs.view.Viewport');
Ext.require('Ext.form.field.Trigger');
Ext.require('Ext.tab.Panel');
Ext.require('Ext.grid.column.Action');
Ext.require('Ext.grid.plugin.DragDrop');
Ext.require('Ext.layout.container.Border');
Ext.require('Ext.data.TreeStore');
Ext.require('Ext.toolbar.Spacer');

// The following is exactly what Ext.application() function does, but
// we use our own Application class that extends Ext.app.Application

Ext.require('Docs.Application');

Ext.onReady(function() {
    Ext.create('Docs.Application');
});
