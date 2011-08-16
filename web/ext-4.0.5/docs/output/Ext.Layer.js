Ext.data.JsonP.Ext_Layer({
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "property": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "doc": "<p>An extended <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object that supports a shadow and shim, constrain to viewport and\nautomatic maintaining of shadow/shim positions.</p>\n",
  "extends": "Ext.Element",
  "href": "Layer.html#Ext-Layer",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Layer.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>CSS class to add to the element</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-cls",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "cls",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>False to disable constrain to viewport (defaults to true)</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-constrain",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "constrain",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>DomHelper object config to create element with (defaults to {tag: 'div', cls: 'x-layer'}).</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-dh",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "dh",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A String which specifies how this Layer will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div></p>\n",
        "href": "Layer.html#Ext-Layer-cfg-hideMode",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A String which specifies how this Layer will be hidden. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "hideMode",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Boolean",
        "doc": "<p>True to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. False to disable the shadow. (defaults to false)</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-shadow",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to automatically create an Ext.Shadow, or a string indicating the\nshadow's display Ext.Shadow.mode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "shadow",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Number of pixels to offset the shadow (defaults to 4)</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-shadowOffset",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "shadowOffset",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>False to disable the iframe shim in browsers which need one (defaults to true)</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-shim",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "shim",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Defaults to use css offsets to hide the Layer. Specify <tt>true</tt>\nto use css style <tt>'display:none;'</tt> to hide the Layer.</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-useDisplay",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Defaults to use css offsets to hide the Layer. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "useDisplay",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class name to add in order to hide this Layer if this layer\nis configured with <code><a href=\"#/api/Ext.Layer-cfg-hideMode\" rel=\"Ext.Layer-cfg-hideMode\" class=\"docClass\">hideMode</a>: 'asclass'</code></p>\n",
        "href": "Layer.html#Ext-Layer-cfg-visibilityCls",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "visibilityCls",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Starting z-index (defaults to 11000)</p>\n",
        "href": "Layer.html#Ext-Layer-cfg-zindex",
        "linenr": 1,
        "html_filename": "Layer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "cfg",
        "name": "zindex",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Layer.</p>\n",
        "href": "Layer.html#Ext-Layer-method-constructor",
        "linenr": 38,
        "html_filename": "Layer.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) An object with config options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          },
          {
            "doc": "<p>(optional) Uses an existing DOM element.\nIf the element is not found it creates it.</p>\n",
            "type": "String/HTMLElement",
            "optional": true,
            "name": "existingEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new Layer. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.</p>\n",
        "href": "Element.style.html#Ext-Element-method-addCls",
        "linenr": 74,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS classes to add separated by space, or an array of classes</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds one or more CSS classes to the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "addCls",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect)</p>\n",
        "href": "Element.style.html#Ext-Element-method-addClsOnClick",
        "linenr": 926,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "addClsOnClick",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets up event handlers to add and remove a css class when this element has the focus</p>\n",
        "href": "Element.style.html#Ext-Element-method-addClsOnFocus",
        "linenr": 909,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets up event handlers to add and remove a css class when this element has the focus ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "addClsOnFocus",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is over this element</p>\n",
        "href": "Element.style.html#Ext-Element-method-addClsOnOver",
        "linenr": 891,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is over this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "addClsOnOver",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenience method for constructing a KeyMap</p>\n",
        "href": "Element.keys.html#Ext-Element-method-addKeyListener",
        "linenr": 5,
        "html_filename": "Element.keys.html",
        "alias": null,
        "return": {
          "doc": "<p>The KeyMap created</p>\n",
          "type": "Ext.util.KeyMap"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either a string with the keys to listen for, the numeric key code, array of key codes or an object with the following options:\n<code>{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</code></p>\n",
            "type": "String/Number/Number[]/Object",
            "optional": false,
            "name": "key"
          },
          {
            "doc": "<p>The function to call</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the specified function is executed. Defaults to this Element.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenience method for constructing a KeyMap ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.keys.js",
        "private": false,
        "tagname": "method",
        "name": "addKeyListener",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a KeyMap for this element</p>\n",
        "href": "Element.keys.html#Ext-Element-method-addKeyMap",
        "linenr": 34,
        "html_filename": "Element.keys.html",
        "alias": null,
        "return": {
          "doc": "<p>The KeyMap created</p>\n",
          "type": "Ext.util.KeyMap"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The KeyMap config. See <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a> for more details</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a KeyMap for this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.keys.js",
        "private": false,
        "tagname": "method",
        "name": "addKeyMap",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends an event handler to this element.</p>\n",
        "href": "Element2.html#Ext-Element-method-addListener",
        "linenr": 427,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of event to handle.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler function the event invokes. This function is passed the following parameters:</p>\n\n<ul>\n<li><p><strong>evt</strong> : EventObject</p>\n\n<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</p></li>\n<li><p><strong>el</strong> : HtmlElement</p>\n\n<p>The DOM element which was the target of the event. Note that this may be filtered by using the delegate option.</p></li>\n<li><p><strong>o</strong> : Object</p>\n\n<p>The options object from the addListener call.</p></li>\n</ul>\n\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If\nomitted, defaults to this Element.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration properties. This may contain any of\nthe following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> Object :</p>\n\n<p>The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If omitted, defaults to this\nElement.</strong></p></li>\n<li><p><strong>delegate</strong> String:</p>\n\n<p>A simple selector to filter the target or look for a descendant of the target. See below for additional details.</p></li>\n<li><p><strong>stopEvent</strong> Boolean:</p>\n\n<p>True to stop the event. That is stop propagation, and prevent the default action.</p></li>\n<li><p><strong>preventDefault</strong> Boolean:</p>\n\n<p>True to prevent the default action</p></li>\n<li><p><strong>stopPropagation</strong> Boolean:</p>\n\n<p>True to prevent event propagation</p></li>\n<li><p><strong>normalized</strong> Boolean:</p>\n\n<p>False to pass a browser event to the handler function instead of an <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a></p></li>\n<li><p><strong>target</strong> Ext.Element:</p>\n\n<p>Only call the handler if the event was fired on the target Element, <em>not</em> if the event was bubbled up from a\nchild node.</p></li>\n<li><p><strong>delay</strong> Number:</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> Boolean:</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> Number:</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>In the following examples, the shorthand form <a href=\"#/api/Ext.Layer-method-on\" rel=\"Ext.Layer-method-on\" class=\"docClass\">on</a> is used rather than the more verbose addListener. The\ntwo are equivalent. Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the options\nobject. The options object is available as the third parameter in the handler function.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on('click', this.onClick, this, {\n    single: true,\n    delay: 100,\n    stopEvent : true,\n    forumId: 4\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple handlers.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : {\n        fn: this.onClick,\n        scope: this,\n        delay: 100\n    },\n    'mouseover' : {\n        fn: this.onMouseOver,\n        scope: this\n    },\n    'mouseout' : {\n        fn: this.onMouseOut,\n        scope: this\n    }\n});\n</code></pre>\n\n<p>Or a shorthand syntax:</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : this.onClick,\n    'mouseover' : this.onMouseOver,\n    'mouseout' : this.onMouseOut,\n    scope: this\n});\n</code></pre>\n\n<p><strong>delegate</strong></p>\n\n<p>This is a configuration option that you can pass along when registering a handler for an event to assist with\nevent delegation. Event delegation is a technique that is used to reduce memory consumption and prevent exposure\nto memory-leaks. By registering an event for a container element as opposed to each element within a container.\nBy setting this configuration option to a simple selector, the target element will be filtered to look for a\ndescendant of the target. For example:</p>\n\n<pre><code>// using this markup:\n&lt;div id='elId'&gt;\n    &lt;p id='p1'&gt;paragraph one&lt;/p&gt;\n    &lt;p id='p2' class='clickable'&gt;paragraph two&lt;/p&gt;\n    &lt;p id='p3'&gt;paragraph three&lt;/p&gt;\n&lt;/div&gt;\n\n// utilize event delegation to registering just one handler on the container element:\nel = Ext.get('elId');\nel.on(\n    'click',\n    function(e,t) {\n        // handle click\n        console.info(t.id); // 'p2'\n    },\n    this,\n    {\n        // filter the target element to be a descendant with the class 'clickable'\n        delegate: '.clickable'\n    }\n);\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends an event handler to this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "addListener",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>TODO: Look at this</p>\n",
        "href": "Element.style.html#Ext-Element-method-adjustWidth",
        "linenr": 48,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "width"
          }
        ],
        "deprecated": null,
        "shortDoc": "TODO: Look at this ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "adjustWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Aligns this element with another element relative to the specified anchor points. If the other element is the\ndocument it aligns it to the viewport.\nThe position parameter is optional, and can be specified in any one of the following formats:</p>\n\n<ul>\n  <li><b>Blank</b>: Defaults to aligning the element's top-left corner to the target's bottom-left corner (\"tl-bl\").</li>\n  <li><b>One anchor (deprecated)</b>: The passed anchor position is used as the target element's anchor point.\n      The element being aligned will position its top-left corner (tl) to that point.  <i>This method has been\n      deprecated in favor of the newer two anchor syntax below</i>.</li>\n  <li><b>Two anchors</b>: If two values from the table below are passed separated by a dash, the first value is used as the\n      element's anchor point, and the second value is used as the target's anchor point.</li>\n</ul>\n\n\n<p>In addition to the anchor points, the position parameter also supports the \"?\" character.  If \"?\" is passed at the end of\nthe position string, the element will attempt to align as specified, but the position will be adjusted to constrain to\nthe viewport if necessary.  Note that the element being aligned might be swapped to align to a different position than\nthat specified in order to enforce the viewport constraints.\nFollowing are all of the supported anchor positions:</p>\n\n<pre>Value  Description\n-----  -----------------------------\ntl     The top left corner (default)\nt      The center of the top edge\ntr     The top right corner\nl      The center of the left edge\nc      In the center of the element\nr      The center of the right edge\nbl     The bottom left corner\nb      The center of the bottom edge\nbr     The bottom right corner\n</pre>\n\n\n<p>Example Usage:</p>\n\n<pre><code>// align el to other-el using the default positioning (\"tl-bl\", non-constrained)\nel.alignTo(\"other-el\");\n\n// align the top left corner of el with the top right corner of other-el (constrained to viewport)\nel.alignTo(\"other-el\", \"tr?\");\n\n// align the bottom right corner of el with the center left edge of other-el\nel.alignTo(\"other-el\", \"br-l?\");\n\n// align the center of el with the bottom left corner of other-el and\n// adjust the x position by -6 pixels (and the y position by 0)\nel.alignTo(\"other-el\", \"c-bl\", [-6, 0]);\n</code></pre>\n\n",
        "href": "Element.alignment.html#Ext-Element-method-alignTo",
        "linenr": 246,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to align to.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "element"
          },
          {
            "doc": "<p>(optional) The position to align to (defaults to \"tl-bl?\")</p>\n",
            "type": "String",
            "optional": true,
            "name": "position"
          },
          {
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "type": "Number[]",
            "optional": true,
            "name": "offsets"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Aligns this element with another element relative to the specified anchor points. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "alignTo",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Anchors an element to another element and realigns it when the window is resized.</p>\n",
        "href": "Element.alignment.html#Ext-Element-method-anchorTo",
        "linenr": 47,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to align to.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "element"
          },
          {
            "doc": "<p>The position to align to.</p>\n",
            "type": "String",
            "optional": false,
            "name": "position"
          },
          {
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "type": "Number[]",
            "optional": true,
            "name": "offsets"
          },
          {
            "doc": "<p>(optional) True for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          },
          {
            "doc": "<p>(optional) True to monitor body scroll and reposition. If this parameter\nis a number, it is used as the buffer delay (defaults to 50ms).</p>\n",
            "type": "Boolean/Number",
            "optional": true,
            "name": "monitorScroll"
          },
          {
            "doc": "<p>(optional) The function to call after the animation finishes</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          }
        ],
        "deprecated": null,
        "shortDoc": "Anchors an element to another element and realigns it when the window is resized. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "anchorTo",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends the passed element(s) to this element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-appendChild",
        "linenr": 5,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends the passed element(s) to this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "appendChild",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends this element to the passed element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-appendTo",
        "linenr": 15,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new parent element.\nThe id of the node, a DOM Node or an existing Element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends this element to the passed element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "appendTo",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>More flexible version of <a href=\"#/api/Ext.Layer-method-setStyle\" rel=\"Ext.Layer-method-setStyle\" class=\"docClass\">setStyle</a> for setting style properties.</p>\n",
        "href": "Element.style.html#Ext-Element-method-applyStyles",
        "linenr": 736,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A style specification string, e.g. \"width:100px\", or object in the form {width:\"100px\"}, or\na function which returns such a specification.</p>\n",
            "type": "String/Object/Function",
            "optional": false,
            "name": "styles"
          }
        ],
        "deprecated": null,
        "shortDoc": "More flexible version of setStyle for setting style properties. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "applyStyles",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tries to blur the element. Any exceptions are caught and ignored.</p>\n",
        "href": "Element2.html#Ext-Element-method-blur",
        "linenr": 406,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Tries to blur the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "blur",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container with a gradient background, rounded corners and a 4-way shadow.</p>\n\n\n<p>This special markup is used throughout Ext when box wrapping elements (<a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>,\n<a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> when <tt><a href=\"#/api/Ext.panel.Panel-cfg-frame\" rel=\"Ext.panel.Panel-cfg-frame\" class=\"docClass\">frame=true</a></tt>, <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>).  The markup\nis of this form:</p>\n\n\n<pre><code>    Ext.Element.boxMarkup =\n    &#39;&lt;div class=\"{0}-tl\">&lt;div class=\"{0}-tr\">&lt;div class=\"{0}-tc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-ml\">&lt;div class=\"{0}-mr\">&lt;div class=\"{0}-mc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-bl\">&lt;div class=\"{0}-br\">&lt;div class=\"{0}-bc\">&lt;/div>&lt;/div>&lt;/div>&#39;;\n</code></pre>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>    // Basic box wrap\n    Ext.get(\"foo\").boxWrap();\n\n    // You can also add a custom class and use CSS inheritance rules to customize the box look.\n    // 'x-box-blue' is a built-in alternative -- look at the related CSS definitions as an example\n    // for how to create a custom box wrap style.\n    Ext.get(\"foo\").boxWrap().addCls(\"x-box-blue\");\n</code></pre>\n\n",
        "href": "Element.style.html#Ext-Element-method-boxWrap",
        "linenr": 768,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The outermost wrapping element of the created box structure.</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) A base CSS class to apply to the containing wrapper element\n(defaults to <tt>'x-box'</tt>). Note that there are a number of CSS rules that are dependent on\nthis name to make the overall effect work, so if you supply an alternate base class, make sure you\nalso supply all of the necessary rules.</p>\n",
            "type": "String",
            "optional": true,
            "name": "class"
          }
        ],
        "deprecated": null,
        "shortDoc": "Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container wit...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "boxWrap",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Centers the Element in either the viewport, or another Element.</p>\n",
        "href": "Element.alignment.html#Ext-Element-method-center",
        "linenr": 375,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The element in which to center the element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": true,
            "name": "centerIn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Centers the Element in either the viewport, or another Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "center",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects a single <em>direct</em> child based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-child",
        "linenr": 88,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The child <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (or DOM node if returnDom = true)</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS selector</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects a single direct child based on the passed CSS selector (the selector should not contain an id). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "child",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes Empty, or whitespace filled text nodes. Combines adjacent text nodes.</p>\n",
        "href": "Element-more.html#Ext-Element-method-clean",
        "linenr": 78,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) By default the element\nkeeps track if it has been cleaned already so\nyou can call this over and over. However, if you update the element and\nneed to force a reclean, you can pass true.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "forceReclean"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes Empty, or whitespace filled text nodes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "clean",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.Layer-method-removeAllListeners\" rel=\"Ext.Layer-method-removeAllListeners\" class=\"docClass\">removeAllListeners</a>.</p>\n\n<p>Removes all previous added listeners from this element</p>\n",
        "href": "Element2.html#Ext-Element-method-clearListeners",
        "linenr": 777,
        "html_filename": "Element2.html",
        "alias": {
          "doc": "Alias for {@link #removeAllListeners}.",
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "removeAllListeners"
        },
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Alias for removeAllListeners. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "clearListeners",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clears any opacity settings from this element. Required in some cases for IE.</p>\n",
        "href": "Element.style.html#Ext-Element-method-clearOpacity",
        "linenr": 417,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Clears any opacity settings from this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "clearOpacity",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clear positioning back to the default when the document was loaded</p>\n",
        "href": "Element.position.html#Ext-Element-method-clearPositioning",
        "linenr": 220,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.</p>\n",
            "type": "String",
            "optional": true,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Clear positioning back to the default when the document was loaded ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "clearPositioning",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Store the current overflow setting and clip overflow on the element - use <tt><a href=\"#/api/Ext.Layer-method-unclip\" rel=\"Ext.Layer-method-unclip\" class=\"docClass\">unclip</a></tt> to remove</p>\n",
        "href": "Element.style.html#Ext-Element-method-clip",
        "linenr": 670,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Store the current overflow setting and clip overflow on the element - use unclip to remove ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "clip",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this element is an ancestor of the passed element</p>\n",
        "href": "Element2.html#Ext-Element-method-contains",
        "linenr": 695,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this element is an ancestor of el, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to check</p>\n",
            "type": "HTMLElement/String",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if this element is an ancestor of the passed element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "contains",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-createChild",
        "linenr": 145,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>The new child element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be\nautomatically generated with the specified attributes.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>(optional) a child element of this element</p>\n",
            "type": "HTMLElement",
            "optional": true,
            "name": "insertBefore"
          },
          {
            "doc": "<p>(optional) true to return the dom node instead of creating an Element</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "createChild",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a proxy element of this element</p>\n",
        "href": "Element-more.html#Ext-Element-method-createProxy",
        "linenr": 231,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The new proxy element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class name of the proxy element or a DomHelper config object</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>(optional) The element or element id to render the proxy to (defaults to document.body)</p>\n",
            "type": "String/HTMLElement",
            "optional": true,
            "name": "renderTo"
          },
          {
            "doc": "<p>(optional) True to align and size the proxy to this element now (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "matchBox"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a proxy element of this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "createProxy",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through.</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-createShim",
        "linenr": 166,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The new shim element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "createShim",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes this element's dom reference. Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a>. Alias to <a href=\"#/api/Ext.Layer-method-remove\" rel=\"Ext.Layer-method-remove\" class=\"docClass\">remove</a>.</p>\n",
        "href": "Element2.html#Ext-Element-method-destroy",
        "linenr": 784,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes this element's dom reference. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-down",
        "linenr": 77,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The child <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (or DOM node if returnDom = true)</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS selector</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects a single child at any depth below this element based on the passed CSS selector (the selector should not cont...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "down",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenience method for setVisibilityMode(Element.DISPLAY)</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-enableDisplayMode",
        "linenr": 45,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) What to set display to when visible</p>\n",
            "type": "String",
            "optional": true,
            "name": "display"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenience method for setVisibilityMode(Element.DISPLAY) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "enableDisplayMode",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fade an element in (from transparent to opaque). The ending opacity can be specified using the <code>opacity</code>\nconfig option. Usage:</p>\n\n<pre><code>// default: fade in from opacity 0 to 100%\nel.fadeIn();\n\n// custom: fade in from opacity 0 to 75% over 2 seconds\nel.fadeIn({ opacity: .75, duration: 2000});\n\n// common config options shown with default values\nel.fadeIn({\n    opacity: 1, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-fadeIn",
        "linenr": 767,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fade an element in (from transparent to opaque). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "fadeIn",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fade an element out (from opaque to transparent). The ending opacity can be specified using the <code>opacity</code>\nconfig option. Note that IE may require <code>useDisplay:true</code> in order to redisplay correctly.\nUsage:</p>\n\n<pre><code>// default: fade out from the element's current opacity to 0\nel.fadeOut();\n\n// custom: fade out from the element's current opacity to 25% over 2 seconds\nel.fadeOut({ opacity: .25, duration: 2000});\n\n// common config options shown with default values\nel.fadeOut({\n    opacity: 0, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-fadeOut",
        "linenr": 794,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fade an element out (from opaque to transparent). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "fadeOut",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-findParent",
        "linenr": 5,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The simple selector to test</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional)\nThe max depth to search as a number or element (defaults to 50 || document.body)</p>\n",
            "type": "Number/String/HTMLElement/Ext.Element",
            "optional": true,
            "name": "maxDepth"
          },
          {
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "findParent",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-findParentNode",
        "linenr": 34,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The simple selector to test</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional)\nThe max depth to search as a number or element (defaults to 10 || document.body)</p>\n",
            "type": "Number/String/HTMLElement/Ext.Element",
            "optional": true,
            "name": "maxDepth"
          },
          {
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "Looks at parent nodes for a match of the passed simple selector (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "findParentNode",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the first child, skipping text nodes</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-first",
        "linenr": 136,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The first child or null</p>\n",
          "type": "Ext.Element/HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the first child, skipping text nodes ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "first",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tries to focus the element. Any exceptions are caught and ignored.</p>\n",
        "href": "Element2.html#Ext-Element-method-focus",
        "linenr": 386,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Milliseconds to defer the focus</p>\n",
            "type": "Number",
            "optional": true,
            "name": "defer"
          }
        ],
        "deprecated": null,
        "shortDoc": "Tries to focus the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "focus",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shows a ripple of exploding, attenuating borders to draw attention to an Element. Usage:</p>\n\n<pre><code>// default: a single light blue ripple\nel.frame();\n\n// custom: 3 red ripples lasting 3 seconds total\nel.frame(\"#ff0000\", 3, { duration: 3 });\n\n// common config options shown with default values\nel.frame(\"#C3DAF9\", 1, {\n    duration: 1 //duration of each individual ripple.\n    // Note: Easing is not configurable and will be ignored if included\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-frame",
        "linenr": 506,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The color of the border. Should be a 6 char hex color without the leading #\n(defaults to light blue: 'C3DAF9').</p>\n",
            "type": "String",
            "optional": true,
            "name": "color"
          },
          {
            "doc": "<p>(optional) The number of ripples to display (defaults to 1)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "count"
          },
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shows a ripple of exploding, attenuating borders to draw attention to an Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "frame",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the active element in the DOM. If the browser supports activeElement\non the document, this is returned. If not, the focus is tracked and the active\nelement is maintained internally.</p>\n",
        "href": "Element.static-more.html#Ext-Element-method-getActiveElement",
        "linenr": 59,
        "html_filename": "Element.static-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The active (focused) element in the document.</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the active element in the DOM. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static-more.js",
        "private": false,
        "tagname": "method",
        "name": "getActiveElement",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the x,y coordinates to align this element with another element. See <a href=\"#/api/Ext.Layer-method-alignTo\" rel=\"Ext.Layer-method-alignTo\" class=\"docClass\">alignTo</a> for more info on the\nsupported position values.</p>\n",
        "href": "Element.alignment.html#Ext-Element-method-getAlignToXY",
        "linenr": 138,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p>[x, y]</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to align to.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "element"
          },
          {
            "doc": "<p>(optional) The position to align to (defaults to \"tl-bl?\")</p>\n",
            "type": "String",
            "optional": true,
            "name": "position"
          },
          {
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "type": "Number[]",
            "optional": true,
            "name": "offsets"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the x,y coordinates to align this element with another element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "getAlignToXY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the x,y coordinates specified by the anchor position on the element.</p>\n",
        "href": "Element.alignment.html#Ext-Element-method-getAnchorXY",
        "linenr": 5,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p>[x, y] An array containing the element's x and y coordinates</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The specified anchor position (defaults to \"c\").  See <a href=\"#/api/Ext.Layer-method-alignTo\" rel=\"Ext.Layer-method-alignTo\" class=\"docClass\">alignTo</a>\nfor details on supported anchor positions.</p>\n",
            "type": "String",
            "optional": true,
            "name": "anchor"
          },
          {
            "doc": "<p>(optional) True to get the local (element top/left-relative) anchor position instead\nof page coordinates</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "local"
          },
          {
            "doc": "<p>(optional) An object containing the size to use for calculating anchor position\n{width: (target width), height: (target height)} (defaults to the element's current size)</p>\n",
            "type": "Object",
            "optional": true,
            "name": "size"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the x,y coordinates specified by the anchor position on the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "getAnchorXY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value of an attribute from the element's underlying DOM node.</p>\n",
        "href": "Element2.html#Ext-Element-method-getAttribute",
        "linenr": 714,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>The attribute value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The attribute name</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>(optional) The namespace in which to look for the attribute</p>\n",
            "type": "String",
            "optional": true,
            "name": "namespace"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the value of an attribute from the element's underlying DOM node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "getAttribute",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value of a namespaced attribute from the element's underlying DOM node.</p>\n",
        "href": "Element2.html#Ext-Element-method-getAttributeNS",
        "linenr": 704,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>The attribute value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The namespace in which to look for the attribute</p>\n",
            "type": "String",
            "optional": false,
            "name": "namespace"
          },
          {
            "doc": "<p>The attribute name</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the value of a namespaced attribute from the element's underlying DOM node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "getAttributeNS",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the width of the border(s) for the specified side(s)</p>\n",
        "href": "Element.style.html#Ext-Element-method-getBorderWidth",
        "linenr": 650,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The width of the sides passed added together</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the border <b><u>l</u></b>eft width + the border <b><u>r</u></b>ight width.</p>\n",
            "type": "String",
            "optional": false,
            "name": "side"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the width of the border(s) for the specified side(s) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getBorderWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the bottom Y coordinate of the element (element Y position + element height)</p>\n",
        "href": "Element.position.html#Ext-Element-method-getBottom",
        "linenr": 186,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the bottom Y coordinate of the element (element Y position + element height) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getBottom",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.Layer-method-setBox\" rel=\"Ext.Layer-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
        "href": "Element.position.html#Ext-Element-method-getBox",
        "linenr": 327,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.Layer-method-setXY\" rel=\"Ext.Layer-method-setXY\" class=\"docClass\">setXY</a></p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) If true a box for the content of the element is returned.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "contentBox"
          },
          {
            "doc": "<p>(optional) If true the element's left and top are returned instead of page x/y.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getBox",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> objects like <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> but is optimized for sub-elements.\nThis is helpful for performance, because in IE (prior to IE 9), <code>getElementById</code> uses\nan non-optimized search. In those browsers, starting the search for an element with a\nmatching ID at a parent of that element will greatly speed up the process.</p>\n\n<p>Unlike <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>, this method only accepts ID's. If the ID is not a child of\nthis element, it will still be found if it exists in the document, but will be slower\nthan calling <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> directly.</p>\n",
        "href": "Element2.html#Ext-Element-method-getById",
        "linenr": 875,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the element to get.</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Retrieves Ext.Element objects like Ext.get but is optimized for sub-elements. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "getById",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calculates the x, y to center this element on the screen</p>\n",
        "href": "Element.alignment.html#Ext-Element-method-getCenterXY",
        "linenr": 367,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p>The x, y values [x, y]</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Calculates the x, y to center this element on the screen ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "getCenterXY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values\nare convert to standard 6 digit hex color.</p>\n",
        "href": "Element.style.html#Ext-Element-method-getColor",
        "linenr": 308,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The css attribute</p>\n",
            "type": "String",
            "optional": false,
            "name": "attr"
          },
          {
            "doc": "<p>The default value to use when a valid color isn't found</p>\n",
            "type": "String",
            "optional": false,
            "name": "defaultValue"
          },
          {
            "doc": "<p>(optional) defaults to #. Use an empty string when working with\ncolor anims.</p>\n",
            "type": "String",
            "optional": true,
            "name": "prefix"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return the CSS color for the specified CSS attribute. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getColor",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen needed to simulate offsetHeight when offsets aren't available. This may not work on display:none elements\nif a height has not been set using CSS.</p>\n",
        "href": "Element.style.html#Ext-Element-method-getComputedHeight",
        "linenr": 844,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getComputedHeight",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen needed to simulate offsetWidth when offsets aren't available. This may not work on display:none elements\nif a width has not been set using CSS.</p>\n",
        "href": "Element.style.html#Ext-Element-method-getComputedWidth",
        "linenr": 862,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen ne...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getComputedWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the <code>[X, Y]</code> vector by which this element must be translated to make a best attempt\nto constrain within the passed constraint. Returns <code>false</code> is this element does not need to be moved.</p>\n\n\n<p>Priority is given to constraining the top and left within the constraint.</p>\n\n\n<p>The constraint may either be an existing element into which this element is to be constrained, or\nan <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n\n",
        "href": "Element.alignment.html#Ext-Element-method-getConstrainVector",
        "linenr": 313,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p><b>If</b> this element <i>needs</i> to be translated, an <code>[X, Y]</code>\nvector by which this element must be translated. Otherwise, <code>false</code>.</p>\n",
          "type": "Number[]/Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>{Mixed} The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "constrainTo"
          },
          {
            "doc": "<p>{Array} A proposed <code>[X, Y]</code> position to test for validity and to produce a vector for instead\nof using this Element's current position;</p>\n",
            "type": "Object",
            "optional": false,
            "name": "proposedPosition"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the [X, Y] vector by which this element must be translated to make a best attempt\nto constrain within the pas...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "getConstrainVector",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the sum width of the padding and borders for the passed \"sides\". See getBorderWidth()</p>\n\n<pre><code>     for more information about the sides.\n</code></pre>\n",
        "href": "Element.style.html#Ext-Element-method-getFrameWidth",
        "linenr": 881,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "sides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the sum width of the padding and borders for the passed \"sides\". ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getFrameWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the offset height of the element</p>\n",
        "href": "Element.style.html#Ext-Element-method-getHeight",
        "linenr": 466,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The element's height</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true to get the height minus borders and padding</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "contentHeight"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the offset height of the element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getHeight",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the left X coordinate</p>\n",
        "href": "Element.position.html#Ext-Element-method-getLeft",
        "linenr": 158,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the left X coordinate ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getLeft",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets this element's <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">ElementLoader</a></p>\n",
        "href": "Element-more.html#Ext-Element-method-getLoader",
        "linenr": 131,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The loader</p>\n",
          "type": "Ext.ElementLoader"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets this element's ElementLoader ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "getLoader",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an object with properties top, left, right and bottom representing the margins of this element unless sides is passed,\nthen it returns the calculated width of the sides (see getPadding)</p>\n",
        "href": "Element.style.html#Ext-Element-method-getMargin",
        "linenr": 1078,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object/Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Any combination of l, r, t, b to get the sum of those sides</p>\n",
            "type": "String",
            "optional": true,
            "name": "sides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns an object with properties top, left, right and bottom representing the margins of this element unless sides i...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getMargin",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.</p>\n",
        "href": "Element.position.html#Ext-Element-method-getOffsetsTo",
        "linenr": 42,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>The XY page offsets (e.g. [100, -200])</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to get the offsets from.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "element"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the offsets of this element from the passed element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getOffsetsTo",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the width of the padding(s) for the specified side(s)</p>\n",
        "href": "Element.style.html#Ext-Element-method-getPadding",
        "linenr": 660,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The padding of the sides passed added together</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the padding <b><u>l</u></b>eft + the padding <b><u>r</u></b>ight.</p>\n",
            "type": "String",
            "optional": false,
            "name": "side"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the width of the padding(s) for the specified side(s) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getPadding",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.Layer-method-setBox\" rel=\"Ext.Layer-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
        "href": "Element.position.html#Ext-Element-method-getPageBox",
        "linenr": 474,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.Layer-method-setXY\" rel=\"Ext.Layer-method-setXY\" class=\"docClass\">setXY</a></p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) If true an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> will be returned</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "asRegion"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getPageBox",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets an object with all CSS positioning properties. Useful along with setPostioning to get\nsnapshot before performing an update and then restoring the element.</p>\n",
        "href": "Element.position.html#Ext-Element-method-getPositioning",
        "linenr": 238,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets an object with all CSS positioning properties. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getPositioning",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the region of this element.\nThe element must be part of the DOM tree to have a region (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-getRegion",
        "linenr": 437,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>A Region containing \"top, left, bottom, right\" member data.</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the region of this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getRegion",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the right X coordinate of the element (element X position + element width)</p>\n",
        "href": "Element.position.html#Ext-Element-method-getRight",
        "linenr": 167,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the right X coordinate of the element (element X position + element width) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getRight",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current scroll position of the element.</p>\n",
        "href": "Element.scroll.html#Ext-Element-method-getScroll",
        "linenr": 14,
        "html_filename": "Element.scroll.html",
        "alias": null,
        "return": {
          "doc": "<p>An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current scroll position of the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "tagname": "method",
        "name": "getScroll",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the size of the element.</p>\n",
        "href": "Element.style.html#Ext-Element-method-getSize",
        "linenr": 1041,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true to get the width/size minus borders and padding</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "contentSize"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the size of the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getSize",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Normalizes currentStyle and computedStyle.</p>\n",
        "href": "Element.style.html#Ext-Element-method-getStyle",
        "linenr": 217,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The current value of the style property for this element.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The style property whose value is returned.</p>\n",
            "type": "String",
            "optional": false,
            "name": "property"
          }
        ],
        "deprecated": null,
        "shortDoc": "Normalizes currentStyle and computedStyle. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getStyle",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n\ngetStyleSize utilizes prefers style sizing if present, otherwise it chooses the larger of offsetHeight/clientHeight and offsetWidth/clientWidth.\nTo obtain the size excluding scrollbars, use getViewSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
        "href": "Element.style.html#Ext-Element-method-getStyleSize",
        "linenr": 999,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the dimensions of the element available to lay content out in. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getStyleSize",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an object with properties matching the styles requested.\nFor example, el.getStyles('color', 'font-size', 'width') might return\n{'color': '#FFFFFF', 'font-size': '13px', 'width': '100px'}.</p>\n",
        "href": "Element.style.html#Ext-Element-method-getStyles",
        "linenr": 747,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The style object</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A style name</p>\n",
            "type": "String",
            "optional": false,
            "name": "style1"
          },
          {
            "doc": "<p>A style name</p>\n",
            "type": "String",
            "optional": false,
            "name": "style2"
          },
          {
            "doc": "<p>.</p>\n",
            "type": "String",
            "optional": false,
            "name": "etc"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns an object with properties matching the styles requested. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getStyles",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the width in pixels of the passed text, or the width of the text in this Element.</p>\n",
        "href": "TextMetrics.html#Ext-Element-method-getTextWidth",
        "linenr": 134,
        "html_filename": "TextMetrics.html",
        "alias": null,
        "return": {
          "doc": "<p>The text width in pixels.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text to measure. Defaults to the innerHTML of the element.</p>\n",
            "type": "String",
            "optional": false,
            "name": "text"
          },
          {
            "doc": "<p>(optional) The minumum value to return.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "min"
          },
          {
            "doc": "<p>(optional) The maximum value to return.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "max"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the width in pixels of the passed text, or the width of the text in this Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/TextMetrics.js",
        "private": false,
        "tagname": "method",
        "name": "getTextWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the top Y coordinate</p>\n",
        "href": "Element.position.html#Ext-Element-method-getTop",
        "linenr": 177,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the top Y coordinate ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getTop",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value of the \"value\" attribute</p>\n",
        "href": "Element2.html#Ext-Element-method-getValue",
        "linenr": 417,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String/Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>true to parse the value as a number</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "asNumber"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the value of the \"value\" attribute ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "getValue",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the <b>content</b> region of this element. That is the region within the borders and padding.</p>\n",
        "href": "Element.position.html#Ext-Element-method-getViewRegion",
        "linenr": 446,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>A Region containing \"top, left, bottom, right\" member data.</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the content region of this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getViewRegion",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n<p>If the element (or any ancestor element) has CSS style <code>display : none</code>, the dimensions will be zero.</p>\nexample:\n<pre><code>        var vpSize = Ext.getBody().getViewSize();\n\n        // all Windows created afterwards will have a default value of 90% height and 95% width\n        Ext.Window.override({\n            width: vpSize.width * 0.9,\n            height: vpSize.height * 0.95\n        });\n        // To handle window resizing you would have to hook onto onWindowResize.\n</code></pre>\n\ngetViewSize utilizes clientHeight/clientWidth which excludes sizing of scrollbars.\nTo obtain the size including scrollbars, use getStyleSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
        "href": "Element.style.html#Ext-Element-method-getViewSize",
        "linenr": 945,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the dimensions of the element available to lay content out in. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getViewSize",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the offset width of the element</p>\n",
        "href": "Element.style.html#Ext-Element-method-getWidth",
        "linenr": 514,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>The element's width</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true to get the width minus borders and padding</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "contentWidth"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the offset width of the element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "getWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-getX",
        "linenr": 18,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>The X position of the element</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the current X position of the element based on page coordinates. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getX",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-getXY",
        "linenr": 34,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>The XY position of the element</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the current position of the element based on page coordinates. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getXY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-getY",
        "linenr": 26,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>The Y position of the element</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the current Y position of the element based on page coordinates. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "getY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Slides the element while fading it out of view. An anchor point can be optionally passed to set the ending point\nof the effect. Usage:</p>\n\n<pre><code>// default: slide the element downward while fading out\nel.ghost();\n\n// custom: slide the element out to the right with a 2-second duration\nel.ghost('r', { duration: 2000 });\n\n// common config options shown with default values\nel.ghost('b', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-ghost",
        "linenr": 586,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to bottom: 'b')</p>\n",
            "type": "String",
            "optional": true,
            "name": "anchor"
          },
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Slides the element while fading it out of view. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "ghost",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if the specified CSS class exists on this element's DOM node.</p>\n",
        "href": "Element.style.html#Ext-Element-method-hasCls",
        "linenr": 178,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the class exists, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class to check for</p>\n",
            "type": "String",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks if the specified CSS class exists on this element's DOM node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "hasCls",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Layer-method-setVisible\" rel=\"Ext.Layer-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
        "href": "Element.fx.html#Ext-Element-method-hide",
        "linenr": 245,
        "html_filename": "Element.fx.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "method",
        "name": "hide",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Highlights the Element by setting a color (applies to the background-color by default, but can be changed using\nthe \"attr\" config option) and then fading back to the original color. If no original color is available, you\nshould provide the \"endColor\" config option which will be cleared after the animation. Usage:</p>\n\n<pre><code>// default: highlight background to yellow\nel.highlight();\n\n// custom: highlight foreground text to blue for 2 seconds\nel.highlight(\"0000ff\", { attr: 'color', duration: 2000 });\n\n// common config options shown with default values\nel.highlight(\"ffff9c\", {\n    attr: \"backgroundColor\", //can be any valid CSS property (attribute) that supports a color value\n    endColor: (current color) or \"ffffff\",\n    easing: 'easeIn',\n    duration: 1000\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-highlight",
        "linenr": 671,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The highlight color. Should be a 6 char hex color without the leading #\n(defaults to yellow: 'ffff9c')</p>\n",
            "type": "String",
            "optional": true,
            "name": "color"
          },
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Highlights the Element by setting a color (applies to the background-color by default, but can be changed using\nthe \"...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "highlight",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.</p>\n",
        "href": "Element2.html#Ext-Element-method-hover",
        "linenr": 678,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call when the mouse enters the Element.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "overFn"
          },
          {
            "doc": "<p>The function to call when the mouse leaves the Element.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "outFn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the functions are executed. Defaults\nto the Element's DOM element.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) Options for the listener. See <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">the\noptions parameter</a>.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "hover",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a> drag drop object for this element.</p>\n",
        "href": "Element.dd.html#Ext-Element-method-initDD",
        "linenr": 5,
        "html_filename": "Element.dd.html",
        "alias": null,
        "return": {
          "doc": "<p>The DD object</p>\n",
          "type": "Ext.dd.DD"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The group the DD object is member of</p>\n",
            "type": "String",
            "optional": false,
            "name": "group"
          },
          {
            "doc": "<p>The DD config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>An object containing methods to override/implement on the DD object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "overrides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initializes a Ext.dd.DD drag drop object for this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.dd.js",
        "private": false,
        "tagname": "method",
        "name": "initDD",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a> object for this element.</p>\n",
        "href": "Element.dd.html#Ext-Element-method-initDDProxy",
        "linenr": 17,
        "html_filename": "Element.dd.html",
        "alias": null,
        "return": {
          "doc": "<p>The DDProxy object</p>\n",
          "type": "Ext.dd.DDProxy"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The group the DDProxy object is member of</p>\n",
            "type": "String",
            "optional": false,
            "name": "group"
          },
          {
            "doc": "<p>The DDProxy config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>An object containing methods to override/implement on the DDProxy object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "overrides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initializes a Ext.dd.DDProxy object for this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.dd.js",
        "private": false,
        "tagname": "method",
        "name": "initDDProxy",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDTarget\" rel=\"Ext.dd.DDTarget\" class=\"docClass\">Ext.dd.DDTarget</a> object for this element.</p>\n",
        "href": "Element.dd.html#Ext-Element-method-initDDTarget",
        "linenr": 29,
        "html_filename": "Element.dd.html",
        "alias": null,
        "return": {
          "doc": "<p>The DDTarget object</p>\n",
          "type": "Ext.dd.DDTarget"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The group the DDTarget object is member of</p>\n",
            "type": "String",
            "optional": false,
            "name": "group"
          },
          {
            "doc": "<p>The DDTarget config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>An object containing methods to override/implement on the DDTarget object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "overrides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initializes a Ext.dd.DDTarget object for this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.dd.js",
        "private": false,
        "tagname": "method",
        "name": "initDDTarget",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts this element after the passed element in the DOM</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-insertAfter",
        "linenr": 38,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to insert after.\nThe id of the node, a DOM Node or an existing Element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts this element after the passed element in the DOM ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "insertAfter",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts this element before the passed element in the DOM</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-insertBefore",
        "linenr": 26,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element before which this element will be inserted.\nThe id of the node, a DOM Node or an existing Element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts this element before the passed element in the DOM ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "insertBefore",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts (or creates) an element (or DomHelper config) as the first child of this element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-insertFirst",
        "linenr": 50,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>The new child</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id or element to insert or a DomHelper config\nto create and insert</p>\n",
            "type": "String/HTMLElement/Ext.Element/Object",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts (or creates) an element (or DomHelper config) as the first child of this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "insertFirst",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts an html fragment into this element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-insertHtml",
        "linenr": 177,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>The inserted node (or nearest related if more than 1 inserted)</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Where to insert the html in relation to this element - beforeBegin, afterBegin, beforeEnd, afterEnd.\nSee <a href=\"#/api/Ext.DomHelper-method-insertHtml\" rel=\"Ext.DomHelper-method-insertHtml\" class=\"docClass\">Ext.DomHelper.insertHtml</a> for details.</p>\n",
            "type": "String",
            "optional": false,
            "name": "where"
          },
          {
            "doc": "<p>The HTML fragment</p>\n",
            "type": "String",
            "optional": false,
            "name": "html"
          },
          {
            "doc": "<p>(optional) True to return an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts an html fragment into this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "insertHtml",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-insertSibling",
        "linenr": 68,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>The inserted Element. If an array is passed, the last inserted element is returned.</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id, element to insert or a DomHelper config\nto create and insert <em>or</em> an array of any of those.</p>\n",
            "type": "String/HTMLElement/Ext.Element/Object/Array",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>(optional) 'before' or 'after' defaults to before</p>\n",
            "type": "String",
            "optional": true,
            "name": "where"
          },
          {
            "doc": "<p>(optional) True to return the .;ll;l,raw DOM element instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "insertSibling",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "href": "Element2.html#Ext-Element-method-is",
        "linenr": 377,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this element matches the selector, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The simple selector to test</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if this element matches the passed simple selector (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "is",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tests various css rules/browsers to determine if this element uses a border box</p>\n",
        "href": "Element2.html#Ext-Element-method-isBorderBox",
        "linenr": 656,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Tests various css rules/browsers to determine if this element uses a border box ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "isBorderBox",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if display is not \"none\"</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-isDisplayed",
        "linenr": 37,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if display is not \"none\" ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "isDisplayed",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this element is masked. Also re-centers any displayed message within the mask.</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-isMasked",
        "linenr": 148,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this element is masked. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "isMasked",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this element is scrollable.</p>\n",
        "href": "Element.scroll.html#Ext-Element-method-isScrollable",
        "linenr": 5,
        "html_filename": "Element.scroll.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this element is scrollable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "tagname": "method",
        "name": "isScrollable",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks whether the element is currently visible using both visibility and display properties.</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-isVisible",
        "linenr": 15,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the element is currently visible, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) True to walk the dom and see if parent elements are hidden (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "deep"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks whether the element is currently visible using both visibility and display properties. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "isVisible",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the last child, skipping text nodes</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-last",
        "linenr": 146,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The last child or null</p>\n",
          "type": "Ext.Element/HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the last child, skipping text nodes ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "last",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Direct access to the <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">Ext.ElementLoader</a> <a href=\"#/api/Ext.ElementLoader-event-load\" rel=\"Ext.ElementLoader-event-load\" class=\"docClass\">Ext.ElementLoader.load</a> method. The method takes the same object\nparameter as <a href=\"#/api/Ext.ElementLoader-event-load\" rel=\"Ext.ElementLoader-event-load\" class=\"docClass\">Ext.ElementLoader.load</a></p>\n",
        "href": "Element-more.html#Ext-Element-method-load",
        "linenr": 121,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Direct access to the Ext.ElementLoader Ext.ElementLoader.load method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "load",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Puts a mask over this element to disable user interaction. Requires core.css.\nThis method can only be applied to elements which accept child nodes.</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-mask",
        "linenr": 60,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The mask element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) A message to display in the mask</p>\n",
            "type": "String",
            "optional": true,
            "name": "msg"
          },
          {
            "doc": "<p>(optional) A css class to apply to the msg element</p>\n",
            "type": "String",
            "optional": true,
            "name": "msgCls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Puts a mask over this element to disable user interaction. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "mask",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Monitors this Element for the mouse leaving. Calls the function after the specified delay only if\nthe mouse was not moved back into the Element within the delay. If the mouse <i>was</i> moved\nback in, the function is not called.</p>\n",
        "href": "Element-more.html#Ext-Element-method-monitorMouseLeave",
        "linenr": 7,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The listeners object which was added to this element so that monitoring can be stopped. Example usage:</pre><code>\n// Hide the menu if the mouse moves out for 250ms or more\nthis.mouseLeaveMonitor = this.menuEl.monitorMouseLeave(250, this.hideMenu, this);</p>\n\n<p>...\n// Remove mouseleave monitor on menu destroy\nthis.menuEl.un(this.mouseLeaveMonitor);\n</code></pre></p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The delay <b>in milliseconds</b> to wait for possible mouse re-entry before calling the handler function.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "delay"
          },
          {
            "doc": "<p>The function to call if the mouse remains outside of this Element for the specified time.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to this Element.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Monitors this Element for the mouse leaving. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "monitorMouseLeave",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Move this element relative to its current position.</p>\n",
        "href": "Element.position.html#Ext-Element-method-move",
        "linenr": 390,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n",
            "type": "String",
            "optional": false,
            "name": "direction"
          },
          {
            "doc": "<p>How far to move the element in pixels</p>\n",
            "type": "Number",
            "optional": false,
            "name": "distance"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Move this element relative to its current position. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "move",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-moveTo",
        "linenr": 146,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          },
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "moveTo",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the next sibling, skipping text nodes</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-next",
        "linenr": 115,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The next sibling or null</p>\n",
          "type": "Ext.Element/HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the next sibling, skipping text nodes ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "next",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this element.</p>\n",
        "href": "Element2.html#Ext-Element-method-on",
        "linenr": 763,
        "html_filename": "Element2.html",
        "alias": {
          "doc": "Shorthand for {@link #addListener}.",
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "addListener"
        },
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of event to handle.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler function the event invokes. This function is passed the following parameters:</p>\n\n<ul>\n<li><p><strong>evt</strong> : EventObject</p>\n\n<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</p></li>\n<li><p><strong>el</strong> : HtmlElement</p>\n\n<p>The DOM element which was the target of the event. Note that this may be filtered by using the delegate option.</p></li>\n<li><p><strong>o</strong> : Object</p>\n\n<p>The options object from the addListener call.</p></li>\n</ul>\n\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If\nomitted, defaults to this Element.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration properties. This may contain any of\nthe following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> Object :</p>\n\n<p>The scope (<strong>this</strong> reference) in which the handler function is executed. <strong>If omitted, defaults to this\nElement.</strong></p></li>\n<li><p><strong>delegate</strong> String:</p>\n\n<p>A simple selector to filter the target or look for a descendant of the target. See below for additional details.</p></li>\n<li><p><strong>stopEvent</strong> Boolean:</p>\n\n<p>True to stop the event. That is stop propagation, and prevent the default action.</p></li>\n<li><p><strong>preventDefault</strong> Boolean:</p>\n\n<p>True to prevent the default action</p></li>\n<li><p><strong>stopPropagation</strong> Boolean:</p>\n\n<p>True to prevent event propagation</p></li>\n<li><p><strong>normalized</strong> Boolean:</p>\n\n<p>False to pass a browser event to the handler function instead of an <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a></p></li>\n<li><p><strong>target</strong> Ext.Element:</p>\n\n<p>Only call the handler if the event was fired on the target Element, <em>not</em> if the event was bubbled up from a\nchild node.</p></li>\n<li><p><strong>delay</strong> Number:</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> Boolean:</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> Number:</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>In the following examples, the shorthand form <a href=\"#/api/Ext.Layer-method-on\" rel=\"Ext.Layer-method-on\" class=\"docClass\">on</a> is used rather than the more verbose addListener. The\ntwo are equivalent. Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the options\nobject. The options object is available as the third parameter in the handler function.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on('click', this.onClick, this, {\n    single: true,\n    delay: 100,\n    stopEvent : true,\n    forumId: 4\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple handlers.</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : {\n        fn: this.onClick,\n        scope: this,\n        delay: 100\n    },\n    'mouseover' : {\n        fn: this.onMouseOver,\n        scope: this\n    },\n    'mouseout' : {\n        fn: this.onMouseOut,\n        scope: this\n    }\n});\n</code></pre>\n\n<p>Or a shorthand syntax:</p>\n\n<p>Code:</p>\n\n<pre><code>el.on({\n    'click' : this.onClick,\n    'mouseover' : this.onMouseOver,\n    'mouseout' : this.onMouseOut,\n    scope: this\n});\n</code></pre>\n\n<p><strong>delegate</strong></p>\n\n<p>This is a configuration option that you can pass along when registering a handler for an event to assist with\nevent delegation. Event delegation is a technique that is used to reduce memory consumption and prevent exposure\nto memory-leaks. By registering an event for a container element as opposed to each element within a container.\nBy setting this configuration option to a simple selector, the target element will be filtered to look for a\ndescendant of the target. For example:</p>\n\n<pre><code>// using this markup:\n&lt;div id='elId'&gt;\n    &lt;p id='p1'&gt;paragraph one&lt;/p&gt;\n    &lt;p id='p2' class='clickable'&gt;paragraph two&lt;/p&gt;\n    &lt;p id='p3'&gt;paragraph three&lt;/p&gt;\n&lt;/div&gt;\n\n// utilize event delegation to registering just one handler on the container element:\nel = Ext.get('elId');\nel.on(\n    'click',\n    function(e,t) {\n        // handle click\n        console.info(t.id); // 'p2'\n    },\n    this,\n    {\n        // filter the target element to be a descendant with the class 'clickable'\n        delegate: '.clickable'\n    }\n);\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "on",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the parent node for this element, optionally chaining up trying to match a selector</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-parent",
        "linenr": 105,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The parent node or null</p>\n",
          "type": "Ext.Element/HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Find a parent node that matches the passed simple selector</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the parent node for this element, optionally chaining up trying to match a selector ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "parent",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a pause before any subsequent queued effects begin. If there are no effects queued after the pause it will\nhave no effect. Usage:</p>\n\n<pre><code>el.pause(1);\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-pause",
        "linenr": 749,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The length of time to pause (in seconds)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "seconds"
          }
        ],
        "deprecated": {
          "doc": "Creates a pause before any subsequent queued effects begin. If there are no effects queued after the pause it will\nhave no effect. Usage:\n\n    el.pause(1);",
          "version": "4.0",
          "text": "\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Creates a pause before any subsequent queued effects begin. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "pause",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initializes positioning on this element. If a desired position is not passed, it will make the\nthe element positioned relative IF it is not already positioned.</p>\n",
        "href": "Element.position.html#Ext-Element-method-position",
        "linenr": 196,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Positioning to use \"relative\", \"absolute\" or \"fixed\"</p>\n",
            "type": "String",
            "optional": true,
            "name": "pos"
          },
          {
            "doc": "<p>(optional) The zIndex to apply</p>\n",
            "type": "Number",
            "optional": true,
            "name": "zIndex"
          },
          {
            "doc": "<p>(optional) Set the page X position</p>\n",
            "type": "Number",
            "optional": true,
            "name": "x"
          },
          {
            "doc": "<p>(optional) Set the page Y position</p>\n",
            "type": "Number",
            "optional": true,
            "name": "y"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initializes positioning on this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "position",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the previous sibling, skipping text nodes</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-prev",
        "linenr": 125,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The previous sibling or null</p>\n",
          "type": "Ext.Element/HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) True to return a raw dom node instead of an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the previous sibling, skipping text nodes ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "prev",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fades the element out while slowly expanding it in all directions. When the effect is completed, the element will\nbe hidden (visibility = 'hidden') but block elements will still take up space in the document. Usage:</p>\n\n<pre><code>// default\nel.puff();\n\n// common config options shown with default values\nel.puff({\n    easing: 'easeOut',\n    duration: 500,\n    useDisplay: false\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-puff",
        "linenr": 358,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fades the element out while slowly expanding it in all directions. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "puff",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Recursively removes all previous added listeners from this element and its children</p>\n",
        "href": "Element2.html#Ext-Element-method-purgeAllListeners",
        "linenr": 617,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Recursively removes all previous added listeners from this element and its children ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "purgeAllListeners",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-query",
        "linenr": 68,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>An array of the matched nodes</p>\n",
          "type": "HTMLElement[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS selector</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects child nodes based on the passed CSS selector (the selector should not contain an id). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "query",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds one or more CSS classes to this element and removes the same class(es) from all siblings.</p>\n",
        "href": "Element.style.html#Ext-Element-method-radioCls",
        "linenr": 145,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class to add, or an array of classes</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds one or more CSS classes to this element and removes the same class(es) from all siblings. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "radioCls",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create an event handler on this element such that when the event fires and is handled by this element,\nit will be relayed to another object (i.e., fired again as if it originated from that object instead).</p>\n",
        "href": "Element-more.html#Ext-Element-method-relayEvent",
        "linenr": 65,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event to relay</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>Any object that extends <a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> that will provide the context\nfor firing the relayed event</p>\n",
            "type": "Object",
            "optional": false,
            "name": "object"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create an event handler on this element such that when the event fires and is handled by this element,\nit will be rel...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "relayEvent",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes this element's dom reference. Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a></p>\n",
        "href": "Element2.html#Ext-Element-method-remove",
        "linenr": 664,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes this element's dom reference. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "remove",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all previous added listeners from this element</p>\n",
        "href": "Element2.html#Ext-Element-method-removeAllListeners",
        "linenr": 608,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all previous added listeners from this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "removeAllListeners",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Remove any anchor to this element. See <a href=\"#/api/Ext.Layer-method-anchorTo\" rel=\"Ext.Layer-method-anchorTo\" class=\"docClass\">anchorTo</a>.</p>\n",
        "href": "Element.alignment.html#Ext-Element-method-removeAnchor",
        "linenr": 85,
        "html_filename": "Element.alignment.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Remove any anchor to this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "tagname": "method",
        "name": "removeAnchor",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes one or more CSS classes from the element.</p>\n",
        "href": "Element.style.html#Ext-Element-method-removeCls",
        "linenr": 114,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS classes to remove separated by space, or an array of classes</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes one or more CSS classes from the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "removeCls",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes an event handler from this element.</p>\n\n<p><strong>Note</strong>: if a <em>scope</em> was explicitly specified when <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">adding</a> the listener,\nthe same scope must be specified here.</p>\n\n<p>Example:</p>\n\n<pre><code>el.removeListener('click', this.handlerFn);\n// or\nel.un('click', this.handlerFn);\n</code></pre>\n",
        "href": "Element2.html#Ext-Element-method-removeListener",
        "linenr": 584,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event from which to remove the handler.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler function to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>If a scope (<strong>this</strong> reference) was specified when the listener was added, then this must\nrefer to the same object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes an event handler from this element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "removeListener",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Forces the browser to repaint this element</p>\n",
        "href": "Element.style.html#Ext-Element-method-repaint",
        "linenr": 1050,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Forces the browser to repaint this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "repaint",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces the passed element with this element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-replace",
        "linenr": 109,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to replace.\nThe id of the node, a DOM Node or an existing Element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces the passed element with this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "replace",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.</p>\n",
        "href": "Element.style.html#Ext-Element-method-replaceCls",
        "linenr": 203,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class to replace</p>\n",
            "type": "String",
            "optional": false,
            "name": "oldClassName"
          },
          {
            "doc": "<p>The replacement CSS class</p>\n",
            "type": "String",
            "optional": false,
            "name": "newClassName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces a CSS class on the element with another. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "replaceCls",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces this element with the passed element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-replaceWith",
        "linenr": 122,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new element (id of the node, a DOM Node\nor an existing Element) or a DomHelper config of an element to create</p>\n",
            "type": "String/HTMLElement/Ext.Element/Object",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces this element with the passed element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "replaceWith",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Animates the transition of an element's dimensions from a starting height/width to an ending height/width. This\nmethod is a convenience implementation of <a href=\"#/api/Ext.Layer-method-shift\" rel=\"Ext.Layer-method-shift\" class=\"docClass\">shift</a>. Usage:</p>\n\n<pre><code>// change height and width to 100x100 pixels\nel.scale(100, 100);\n\n// common config options shown with default values.  The height and width will default to\n// the element's existing values if passed as null.\nel.scale(\n    [element's width],\n    [element's height], {\n        easing: 'easeOut',\n        duration: .35\n    }\n);\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-scale",
        "linenr": 824,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new width (pass undefined to keep the original width)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "width"
          },
          {
            "doc": "<p>The new height (pass undefined to keep the original height)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "height"
          },
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": {
          "doc": "Animates the transition of an element's dimensions from a starting height/width to an ending height/width. This\nmethod is a convenience implementation of {@link #shift}. Usage:\n\n    // change height and width to 100x100 pixels\n    el.scale(100, 100);\n\n    // common config options shown with default values.  The height and width will default to\n    // the element's existing values if passed as null.\n    el.scale(\n        [element's width],\n        [element's height], {\n            easing: 'easeOut',\n            duration: .35\n        }\n    );",
          "version": "4.0",
          "text": "\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Animates the transition of an element's dimensions from a starting height/width to an ending height/width. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "scale",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Scrolls this element the specified direction. Does bounds checking to make sure the scroll is\nwithin this element's scrollable range.</p>\n",
        "href": "Element.scroll.html#Ext-Element-method-scroll",
        "linenr": 128,
        "html_filename": "Element.scroll.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns true if a scroll was triggered or false if the element\nwas scrolled as far as it could go.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n",
            "type": "String",
            "optional": false,
            "name": "direction"
          },
          {
            "doc": "<p>How far to scroll the element in pixels</p>\n",
            "type": "Number",
            "optional": false,
            "name": "distance"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Scrolls this element the specified direction. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "tagname": "method",
        "name": "scroll",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Scrolls this element into view within the passed container.</p>\n",
        "href": "Element.scroll.html#Ext-Element-method-scrollIntoView",
        "linenr": 80,
        "html_filename": "Element.scroll.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The container element to scroll (defaults to document.body).  Should be a\nstring (id), dom node, or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": true,
            "name": "container"
          },
          {
            "doc": "<p>(optional) False to disable horizontal scroll (defaults to true)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "hscroll"
          }
        ],
        "deprecated": null,
        "shortDoc": "Scrolls this element into view within the passed container. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "tagname": "method",
        "name": "scrollIntoView",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().</p>\n",
        "href": "Element.scroll.html#Ext-Element-method-scrollTo",
        "linenr": 49,
        "html_filename": "Element.scroll.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either \"left\" for scrollLeft values or \"top\" for scrollTop values.</p>\n",
            "type": "String",
            "optional": false,
            "name": "side"
          },
          {
            "doc": "<p>The new scroll value</p>\n",
            "type": "Number",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Scrolls this element the specified scroll point. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "tagname": "method",
        "name": "scrollTo",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects elements based on the passed CSS selector to enable <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> methods\nto be applied to many related elements in one statement through the returned <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">CompositeElement</a> or\n<a href=\"#/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">CompositeElementLite</a> object.</p>\n",
        "href": "CompositeElement2.html#Ext-Element-method-select",
        "linenr": 41,
        "html_filename": "CompositeElement2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.CompositeElementLite/Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS selector or an array of elements</p>\n",
            "type": "String/HTMLElement[]",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) true to create a unique <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> for each element (defaults to a shared flyweight object)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "unique"
          },
          {
            "doc": "<p>(optional) The root element of the query or id of the root</p>\n",
            "type": "HTMLElement/String",
            "optional": true,
            "name": "root"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects elements based on the passed CSS selector to enable Element methods\nto be applied to many related elements in...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElement.js",
        "private": false,
        "tagname": "method",
        "name": "select",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Serializes a DOM form into a url encoded string</p>\n",
        "href": "Element.static-more.html#Ext-Element-method-serializeForm",
        "linenr": 253,
        "html_filename": "Element.static-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The url encoded form</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The form</p>\n",
            "type": "Object",
            "optional": false,
            "name": "form"
          }
        ],
        "deprecated": null,
        "shortDoc": "Serializes a DOM form into a url encoded string ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static-more.js",
        "private": false,
        "tagname": "method",
        "name": "serializeForm",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)</p>\n",
        "href": "Element2.html#Ext-Element-method-set",
        "linenr": 117,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The object with the attributes</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) false to override the default setAttribute to use expandos.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "useSet"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "set",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's CSS bottom style.</p>\n",
        "href": "Element.position.html#Ext-Element-method-setBottom",
        "linenr": 103,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The bottom CSS property value</p>\n",
            "type": "String",
            "optional": false,
            "name": "bottom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's CSS bottom style. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setBottom",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's position and size in one shot. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
        "href": "Element.position.html#Ext-Element-method-setBounds",
        "linenr": 518,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          },
          {
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "width"
          },
          {
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "height"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's position and size in one shot. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setBounds",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's box. Use getBox() on another element to get a box obj. If animate is true then width, height, x and y will be animated concurrently.</p>\n",
        "href": "Element.position.html#Ext-Element-method-setBox",
        "linenr": 308,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The box to fill {x, y, width, height}</p>\n",
            "type": "Object",
            "optional": false,
            "name": "box"
          },
          {
            "doc": "<p>(optional) Whether to adjust for box-model issues automatically</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "adjust"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's box. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setBox",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.</p>\n",
        "href": "Element.fx.html#Ext-Element-method-setDisplayed",
        "linenr": 220,
        "html_filename": "Element.fx.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Boolean value to display the element using its default display, or a string to set the display directly.</p>\n",
            "type": "Boolean/String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the CSS display property. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "method",
        "name": "setDisplayed",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the height of this Element.</p>\n\n<pre><code>// change the height to 200px and animate with default configuration\nExt.fly('elementId').setHeight(200, true);\n\n// change the height to 150px and animate with a custom configuration\nExt.fly('elId').setHeight(150, {\n    duration : .5, // animation will have a duration of .5 seconds\n    // will change the content to \"finished\"\n    callback: function(){ this.<a href=\"#/api/Ext.Layer-method-update\" rel=\"Ext.Layer-method-update\" class=\"docClass\">update</a>(\"finished\"); }\n});\n</code></pre>\n\n",
        "href": "Element.style.html#Ext-Element-method-setHeight",
        "linenr": 611,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels.)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "height"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the height of this Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "setHeight",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's left position directly using CSS style (instead of <a href=\"#/api/Ext.Layer-method-setX\" rel=\"Ext.Layer-method-setX\" class=\"docClass\">setX</a>).</p>\n",
        "href": "Element.position.html#Ext-Element-method-setLeft",
        "linenr": 73,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The left CSS property value</p>\n",
            "type": "String",
            "optional": false,
            "name": "left"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's left position directly using CSS style (instead of setX). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setLeft",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Quick set left and top adding default units</p>\n",
        "href": "Element.position.html#Ext-Element-method-setLeftTop",
        "linenr": 423,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The left CSS property value</p>\n",
            "type": "String",
            "optional": false,
            "name": "left"
          },
          {
            "doc": "<p>The top CSS property value</p>\n",
            "type": "String",
            "optional": false,
            "name": "top"
          }
        ],
        "deprecated": null,
        "shortDoc": "Quick set left and top adding default units ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setLeftTop",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-setLocation",
        "linenr": 134,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          },
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setLocation",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the opacity of the element</p>\n",
        "href": "Element.style.html#Ext-Element-method-setOpacity",
        "linenr": 368,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc</p>\n",
            "type": "Number",
            "optional": false,
            "name": "opacity"
          },
          {
            "doc": "<p>(optional) a standard Element animation config object or <tt>true</tt> for\nthe default animation (<tt>{duration: .35, easing: 'easeIn'}</tt>)</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the opacity of the element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "setOpacity",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set positioning with an object returned by getPositioning().</p>\n",
        "href": "Element.position.html#Ext-Element-method-setPositioning",
        "linenr": 256,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "posCfg"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set positioning with an object returned by getPositioning(). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setPositioning",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's position and size the specified region. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
        "href": "Element.position.html#Ext-Element-method-setRegion",
        "linenr": 554,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The region to fill</p>\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "region"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's position and size the specified region. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setRegion",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's CSS right style.</p>\n",
        "href": "Element.position.html#Ext-Element-method-setRight",
        "linenr": 93,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The right CSS property value</p>\n",
            "type": "String",
            "optional": false,
            "name": "right"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's CSS right style. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setRight",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the size of this Element. If animation is true, both width and height will be animated concurrently.</p>\n",
        "href": "Element.style.html#Ext-Element-method-setSize",
        "linenr": 803,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "width"
          },
          {
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "height"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the size of this Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "setSize",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Wrapper for setting style properties, also takes single object parameter of multiple styles.</p>\n",
        "href": "Element.style.html#Ext-Element-method-setStyle",
        "linenr": 336,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The style property to be set, or an object of multiple styles.</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>(optional) The value to apply to the given property, or null if an object was passed.</p>\n",
            "type": "String",
            "optional": true,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Wrapper for setting style properties, also takes single object parameter of multiple styles. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "setStyle",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's top position directly using CSS style (instead of <a href=\"#/api/Ext.Layer-method-setY\" rel=\"Ext.Layer-method-setY\" class=\"docClass\">setY</a>).</p>\n",
        "href": "Element.position.html#Ext-Element-method-setTop",
        "linenr": 83,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The top CSS property value</p>\n",
            "type": "String",
            "optional": false,
            "name": "top"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's top position directly using CSS style (instead of setY). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setTop",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the element's visibility mode. When setVisible() is called it\nwill use this to determine whether to set the visibility or the display property.</p>\n",
        "href": "Element.fx.html#Ext-Element-method-setVisibilityMode",
        "linenr": 72,
        "html_filename": "Element.fx.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Ext.Element.VISIBILITY or Ext.Element.DISPLAY</p>\n",
            "type": "Number",
            "optional": false,
            "name": "visMode"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the element's visibility mode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "method",
        "name": "setVisibilityMode",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use\nthe display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.</p>\n",
        "href": "Element.fx.html#Ext-Element-method-setVisible",
        "linenr": 104,
        "html_filename": "Element.fx.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Whether the element is visible</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "visible"
          },
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the visibility of the element (see details). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "method",
        "name": "setVisible",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the width of this Element.</p>\n",
        "href": "Element.style.html#Ext-Element-method-setWidth",
        "linenr": 583,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.Layer-property-defaultUnit\" rel=\"Ext.Layer-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "width"
          },
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the width of this Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "setWidth",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-setX",
        "linenr": 53,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>X position of the element</p>\n",
            "type": "Number",
            "optional": false,
            "name": "The"
          },
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the X position of the element based on page coordinates. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setX",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-setXY",
        "linenr": 113,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Contains X &amp; Y [x, y] values for new position (coordinates are page-based)</p>\n",
            "type": "Number[]",
            "optional": false,
            "name": "pos"
          },
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setXY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "href": "Element.position.html#Ext-Element-method-setY",
        "linenr": 63,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Y position of the element</p>\n",
            "type": "Number",
            "optional": false,
            "name": "The"
          },
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the Y position of the element based on page coordinates. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "setY",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the z-index of this layer and adjusts any shadow and shim z-indexes. The layer z-index is automatically\nincremented depending upon the presence of a shim or a shadow in so that it always shows above those two associated elements.</p>\n\n\n<p>Any shim, will be assigned the passed z-index. A shadow will be assigned the next highet z-index, and the Layer's\nelement will receive the highest  z-index.\n\n",
        "href": "Layer.html#Ext-Layer-method-setZIndex",
        "linenr": 456,
        "html_filename": "Layer.html",
        "alias": null,
        "return": {
          "doc": "<p>The Layer</p>\n",
          "type": "Ext.Layer"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new z-index to set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "zindex"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the z-index of this layer and adjusts any shadow and shim z-indexes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
        "private": false,
        "tagname": "method",
        "name": "setZIndex",
        "owner": "Ext.Layer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Animates the transition of any combination of an element's dimensions, xy position and/or opacity. Any of these\nproperties not specified in the config object will not be changed. This effect requires that at least one new\ndimension, position or opacity setting must be passed in on the config object in order for the function to have\nany effect. Usage:</p>\n\n<pre><code>// slide the element horizontally to x position 200 while changing the height and opacity\nel.shift({ x: 200, height: 50, opacity: .8 });\n\n// common config options shown with default values.\nel.shift({\n    width: [element's width],\n    height: [element's height],\n    x: [element's x position],\n    y: [element's y position],\n    opacity: [element's opacity],\n    easing: 'easeOut',\n    duration: .35\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-shift",
        "linenr": 855,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": {
          "doc": "Animates the transition of any combination of an element's dimensions, xy position and/or opacity. Any of these\nproperties not specified in the config object will not be changed. This effect requires that at least one new\ndimension, position or opacity setting must be passed in on the config object in order for the function to have\nany effect. Usage:\n\n    // slide the element horizontally to x position 200 while changing the height and opacity\n    el.shift({ x: 200, height: 50, opacity: .8 });\n\n    // common config options shown with default values.\n    el.shift({\n        width: [element's width],\n        height: [element's height],\n        x: [element's x position],\n        y: [element's y position],\n        opacity: [element's opacity],\n        easing: 'easeOut',\n        duration: .35\n    });",
          "version": "4.0",
          "text": "\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Animates the transition of any combination of an element's dimensions, xy position and/or opacity. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "shift",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.Layer-method-setVisible\" rel=\"Ext.Layer-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
        "href": "Element.fx.html#Ext-Element-method-show",
        "linenr": 260,
        "html_filename": "Element.fx.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "method",
        "name": "show",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Slides the element into view. An anchor point can be optionally passed to set the point of origin for the slide\neffect. This function automatically handles wrapping the element with a fixed-size container if needed. See the\nFx class overview for valid anchor point options. Usage:</p>\n\n<pre><code>// default: slide the element in from the top\nel.slideIn();\n\n// custom: slide the element in from the right with a 2-second duration\nel.slideIn('r', { duration: 2000 });\n\n// common config options shown with default values\nel.slideIn('t', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-slideIn",
        "linenr": 81,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n",
            "type": "String",
            "optional": true,
            "name": "anchor"
          },
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Slides the element into view. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "slideIn",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Slides the element out of view. An anchor point can be optionally passed to set the end point for the slide\neffect. When the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will\nstill take up space in the document. The element must be removed from the DOM using the 'remove' config option if\ndesired. This function automatically handles wrapping the element with a fixed-size container if needed. See the\nFx class overview for valid anchor point options. Usage:</p>\n\n<pre><code>// default: slide the element out to the top\nel.slideOut();\n\n// custom: slide the element out to the right with a 2-second duration\nel.slideOut('r', { duration: 2000 });\n\n// common config options shown with default values\nel.slideOut('t', {\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-slideOut",
        "linenr": 329,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n",
            "type": "String",
            "optional": true,
            "name": "anchor"
          },
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Slides the element out of view. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "slideOut",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the default action</p>\n",
        "href": "Element-more.html#Ext-Element-method-swallowEvent",
        "linenr": 40,
        "html_filename": "Element-more.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>an event / array of events to stop from bubbling</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>(optional) true to prevent the default action too</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "preventDefault"
          }
        ],
        "deprecated": null,
        "shortDoc": "Stops the specified event(s) from bubbling and optionally prevents the default action ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "tagname": "method",
        "name": "swallowEvent",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).\nWhen the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still\ntake up space in the document. The element must be removed from the DOM using the 'remove' config option if\ndesired. Usage:</p>\n\n<pre><code>// default\nel.switchOff();\n\n// all config options shown with default values\nel.switchOff({\n    easing: 'easeIn',\n    duration: .3,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n",
        "href": "Element.anim.html#Ext-Element-method-switchOff",
        "linenr": 425,
        "html_filename": "Element.anim.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "tagname": "method",
        "name": "switchOff",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Toggles the element's visibility or display, depending on visibility mode.</p>\n",
        "href": "Element.fx.html#Ext-Element-method-toggle",
        "linenr": 209,
        "html_filename": "Element.fx.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "type": "Boolean/Object",
            "optional": true,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Toggles the element's visibility or display, depending on visibility mode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "method",
        "name": "toggle",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).</p>\n",
        "href": "Element.style.html#Ext-Element-method-toggleCls",
        "linenr": 163,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class to toggle</p>\n",
            "type": "String",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "toggleCls",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Translates the passed page coordinates into left/top css values for this element</p>\n",
        "href": "Element.position.html#Ext-Element-method-translatePoints",
        "linenr": 277,
        "html_filename": "Element.position.html",
        "alias": null,
        "return": {
          "doc": "<p>An object with left and top properties. e.g. {left: (value), top: (value)}</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The page x or an array containing [x, y]</p>\n",
            "type": "Number/Number[]",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>(optional) The page y, required if x is not an array</p>\n",
            "type": "Number",
            "optional": true,
            "name": "y"
          }
        ],
        "deprecated": null,
        "shortDoc": "Translates the passed page coordinates into left/top css values for this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "tagname": "method",
        "name": "translatePoints",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Layer-method-removeListener\" rel=\"Ext.Layer-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler from this element.</p>\n\n<p><strong>Note</strong>: if a <em>scope</em> was explicitly specified when <a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">adding</a> the listener,\nthe same scope must be specified here.</p>\n\n<p>Example:</p>\n\n<pre><code>el.removeListener('click', this.handlerFn);\n// or\nel.un('click', this.handlerFn);\n</code></pre>\n",
        "href": "Element2.html#Ext-Element-method-un",
        "linenr": 770,
        "html_filename": "Element2.html",
        "alias": {
          "doc": "Shorthand for {@link #removeListener}.",
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "removeListener"
        },
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event from which to remove the handler.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler function to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Layer-method-addListener\" rel=\"Ext.Layer-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>If a scope (<strong>this</strong> reference) was specified when the listener was added, then this must\nrefer to the same object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "un",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return clipping (overflow) to original clipping before <tt><a href=\"#/api/Ext.Layer-method-clip\" rel=\"Ext.Layer-method-clip\" class=\"docClass\">clip</a></tt> was called</p>\n",
        "href": "Element.style.html#Ext-Element-method-unclip",
        "linenr": 692,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Return clipping (overflow) to original clipping before clip was called ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "unclip",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes a previously applied mask.</p>\n",
        "href": "Element.fx-more.html#Ext-Element-method-unmask",
        "linenr": 123,
        "html_filename": "Element.fx-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes a previously applied mask. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "tagname": "method",
        "name": "unmask",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Disables text selection for this element (normalized across browsers)</p>\n",
        "href": "Element.style.html#Ext-Element-method-unselectable",
        "linenr": 1063,
        "html_filename": "Element.style.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Disables text selection for this element (normalized across browsers) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "tagname": "method",
        "name": "unselectable",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).\nThis is a shortcut for findParentNode() that always returns an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "href": "Element.traversal.html#Ext-Element-method-up",
        "linenr": 47,
        "html_filename": "Element.traversal.html",
        "alias": null,
        "return": {
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The simple selector to test</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional)\nThe max depth to search as a number or element (defaults to 10 || document.body)</p>\n",
            "type": "Number/String/HTMLElement/Ext.Element",
            "optional": true,
            "name": "maxDepth"
          }
        ],
        "deprecated": null,
        "shortDoc": "Walks up the dom looking for a parent node that matches the passed simple selector (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "tagname": "method",
        "name": "up",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Update the innerHTML of this element</p>\n",
        "href": "Element2.html#Ext-Element-method-update",
        "linenr": 744,
        "html_filename": "Element2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new HTML</p>\n",
            "type": "String",
            "optional": false,
            "name": "html"
          }
        ],
        "deprecated": null,
        "shortDoc": "Update the innerHTML of this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "update",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates and wraps this element with another element</p>\n",
        "href": "Element.insertion.html#Ext-Element-method-wrap",
        "linenr": 163,
        "html_filename": "Element.insertion.html",
        "alias": null,
        "return": {
          "doc": "<p>The newly created wrapper element</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) DomHelper element config object for the wrapper element or null for an empty div</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          },
          {
            "doc": "<p>(optional) True to return the raw DOM element instead of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates and wraps this element with another element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "tagname": "method",
        "name": "wrap",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [
      {
        "doc": "<p>Where supported. Fires when an element is activated, for instance, through a mouse click or a keypress.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMActivate",
        "linenr": 320,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMActivate",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when an attribute has been modified.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMAttrModified",
        "linenr": 358,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMAttrModified",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when the character data has been modified.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMCharacterDataModified",
        "linenr": 364,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMCharacterDataModified",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Similar to HTML focus event, but can be applied to any focusable element.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMFocusIn",
        "linenr": 308,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMFocusIn",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Similar to HTML blur event, but can be applied to any focusable element.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMFocusOut",
        "linenr": 314,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMFocusOut",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when a node has been added as a child of another node.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMNodeInserted",
        "linenr": 334,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMNodeInserted",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when a node is being inserted into a document.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMNodeInsertedIntoDocument",
        "linenr": 352,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMNodeInsertedIntoDocument",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when a descendant node of the element is removed.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMNodeRemoved",
        "linenr": 340,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMNodeRemoved",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when a node is being removed from a document.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMNodeRemovedFromDocument",
        "linenr": 346,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMNodeRemovedFromDocument",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Where supported. Fires when the subtree is modified.</p>\n",
        "href": "Element2.html#Ext-Element-event-DOMSubtreeModified",
        "linenr": 328,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Where supported. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "DOMSubtreeModified",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when an object/image is stopped from loading before completely loaded.</p>\n",
        "href": "Element2.html#Ext-Element-event-abort",
        "linenr": 244,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an object/image is stopped from loading before completely loaded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "abort",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when an element loses focus either via the pointing device or by tabbing navigation.</p>\n",
        "href": "Element2.html#Ext-Element-event-blur",
        "linenr": 300,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an element loses focus either via the pointing device or by tabbing navigation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "blur",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a control loses the input focus and its value has been modified since gaining focus.</p>\n",
        "href": "Element2.html#Ext-Element-event-change",
        "linenr": 276,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a control loses the input focus and its value has been modified since gaining focus. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "change",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mouse click is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-click",
        "linenr": 147,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mouse click is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "click",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a right click is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-contextmenu",
        "linenr": 153,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a right click is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "contextmenu",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mouse double click is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-dblclick",
        "linenr": 159,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mouse double click is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "dblclick",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when an object/image/frame cannot be loaded properly.</p>\n",
        "href": "Element2.html#Ext-Element-event-error",
        "linenr": 250,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an object/image/frame cannot be loaded properly. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "error",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when an element receives focus either via the pointing device or by tab navigation.</p>\n",
        "href": "Element2.html#Ext-Element-event-focus",
        "linenr": 294,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an element receives focus either via the pointing device or by tab navigation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "focus",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a keydown is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-keydown",
        "linenr": 215,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a keydown is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "keydown",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a keypress is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-keypress",
        "linenr": 209,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a keypress is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "keypress",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a keyup is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-keyup",
        "linenr": 221,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a keyup is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "keyup",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the user agent finishes loading all content within the element. Only supported by window, frames,\nobjects and images.</p>\n",
        "href": "Element2.html#Ext-Element-event-load",
        "linenr": 230,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the user agent finishes loading all content within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "load",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mousedown is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mousedown",
        "linenr": 165,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mousedown is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mousedown",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the mouse enters the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mouseenter",
        "linenr": 195,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the mouse enters the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mouseenter",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the mouse leaves the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mouseleave",
        "linenr": 201,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the mouse leaves the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mouseleave",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mousemove is detected with the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mousemove",
        "linenr": 183,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mousemove is detected with the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mousemove",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mouseout is detected with the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mouseout",
        "linenr": 189,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mouseout is detected with the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mouseout",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mouseover is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mouseover",
        "linenr": 177,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mouseover is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mouseover",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a mouseup is detected within the element.</p>\n",
        "href": "Element2.html#Ext-Element-event-mouseup",
        "linenr": 171,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a mouseup is detected within the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "mouseup",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a form is reset.</p>\n",
        "href": "Element2.html#Ext-Element-event-reset",
        "linenr": 288,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a form is reset. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "reset",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a document view is resized.</p>\n",
        "href": "Element2.html#Ext-Element-event-resize",
        "linenr": 256,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a document view is resized. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "resize",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a document view is scrolled.</p>\n",
        "href": "Element2.html#Ext-Element-event-scroll",
        "linenr": 262,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a document view is scrolled. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "scroll",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a user selects some text in a text field, including input and textarea.</p>\n",
        "href": "Element2.html#Ext-Element-event-select",
        "linenr": 270,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a user selects some text in a text field, including input and textarea. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "select",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a form is submitted.</p>\n",
        "href": "Element2.html#Ext-Element-event-submit",
        "linenr": 282,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a form is submitted. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "submit",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the user agent removes all content from a window or frame. For elements, it fires when the target\nelement or any of its content has been removed.</p>\n",
        "href": "Element2.html#Ext-Element-event-unload",
        "linenr": 237,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>The target of the event.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "t"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the user agent removes all content from a window or frame. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "event",
        "name": "unload",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Boolean",
        "doc": "<p>true to automatically adjust width and height settings for box-model issues (default to true)</p>\n",
        "href": "Element2.html#Ext-Element-property-autoBoxAdjust",
        "linenr": 792,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "property",
        "name": "autoBoxAdjust",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default unit to append to CSS values where a unit isn't provided (defaults to px).</p>\n",
        "href": "Element2.html#Ext-Element-property-defaultUnit",
        "linenr": 371,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "property",
        "name": "defaultUnit",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "type": "HTMLElement",
        "doc": "<p>The DOM element</p>\n",
        "href": "Element2.html#Ext-Element-property-dom",
        "linenr": 99,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "property",
        "name": "dom",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The DOM element ID</p>\n",
        "href": "Element2.html#Ext-Element-property-id",
        "linenr": 105,
        "html_filename": "Element2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "property",
        "name": "id",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The element's default display mode  (defaults to \"\")</p>\n",
        "href": "Element.fx.html#Ext-Element-property-originalDisplay",
        "linenr": 65,
        "html_filename": "Element.fx.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "tagname": "property",
        "name": "originalDisplay",
        "owner": "Ext.Element",
        "static": false,
        "inheritable": false
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "alias": null,
  "singleton": false,
  "protected": false,
  "superclasses": [
    "Ext.Element"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Layer.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.Layer",
  "alternateClassNames": [

  ],
  "docauthor": null,
  "static": false,
  "author": null,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});