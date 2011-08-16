Ext.data.JsonP.Ext_EventManager({
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
  "doc": "<p>Registers event handlers that want to receive a normalized EventObject instead of the standard browser event and provides\nseveral useful events directly.\nSee <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> for more details on normalized event objects.</p>\n",
  "extends": null,
  "href": "EventManager.html#Ext-EventManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "EventManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Appends an event handler to an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">on</a> is equivalent.  Typically you will\nuse <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a> directly on an Element in favor of calling this version.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-addListener",
        "linenr": 285,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The html element or id to assign the event handler to.</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The name of the event to listen for.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li>evt : EventObject<div class=\"sub-desc\">The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li>t : Element<div class=\"sub-desc\">The <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li>o : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li>scope : Object<div class=\"sub-desc\">The scope (<b><code>this</code></b> reference) in which the handler function is executed. <b>Defaults to the Element</b>.</div></li>\n<li>delegate : String<div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target</div></li>\n<li>stopEvent : Boolean<div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li>preventDefault : Boolean<div class=\"sub-desc\">True to prevent the default action</div></li>\n<li>stopPropagation : Boolean<div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li>normalized : Boolean<div class=\"sub-desc\">False to pass a browser event to the handler function instead of an <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a></div></li>\n<li>delay : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after te event fires.</div></li>\n<li>single : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li>buffer : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li>target : Element<div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n</ul><br></p>\n\n<p>See <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a> for examples of how to use these options.</p>\n\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends an event handler to an element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "addListener",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the id of the element. If one has not been assigned, automatically assign it.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getId",
        "linenr": 171,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>id</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to get the id for.</p>\n",
            "type": "HTMLElement/Ext.Element",
            "optional": false,
            "name": "element"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the id of the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getId",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Indicates which event to use for getting key presses.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getKeyEvent",
        "linenr": 835,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The appropriate event name.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Indicates which event to use for getting key presses. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getKeyEvent",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the x coordinate from the event</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getPageX",
        "linenr": 657,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The x coordinate</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Object",
            "optional": false,
            "name": "event"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the x coordinate from the event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getPageX",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the x &amp; ycoordinate from the event</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getPageXY",
        "linenr": 675,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The x/y coordinate</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Object",
            "optional": false,
            "name": "event"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the x &amp; ycoordinate from the event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getPageXY",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the y coordinate from the event</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getPageY",
        "linenr": 666,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The y coordinate</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Object",
            "optional": false,
            "name": "event"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the y coordinate from the event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getPageY",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the related target from the event.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getRelatedTarget",
        "linenr": 639,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The related target.</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Object",
            "optional": false,
            "name": "event"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the related target from the event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getRelatedTarget",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the target of the event.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-getTarget",
        "linenr": 695,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "<p>target</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Object",
            "optional": false,
            "name": "event"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the target of the event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "getTarget",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">Ext.EventManager.addListener</a></p>\n",
        "href": "EventManager.html#Ext-EventManager-method-on",
        "linenr": 860,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Alias for Ext.EventManager.addListener ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "on",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be\naccessed shorthanded as Ext.onReady().</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-onDocumentReady",
        "linenr": 130,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The method the event invokes.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) Options object as passed to <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a>.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds a listener to be notified when the document is ready (before onload and before images are loaded). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "onDocumentReady",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 milliseconds),\npasses new viewport width and height to handlers.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-onWindowResize",
        "linenr": 733,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The handler function the window resize event invokes.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to the browser window.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          },
          {
            "doc": "<p>Options object as passed to <a href=\"#/api/Ext.Element-method-addListener\" rel=\"Ext.Element-method-addListener\" class=\"docClass\">Ext.Element.addListener</a></p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds a listener to be notified when the browser window is resized and provides resize event buffering (100 millisecon...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "onWindowResize",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Prevents the browsers default handling of the event.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-preventDefault",
        "linenr": 617,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>event to prevent the default</p>\n",
            "type": "Event",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Prevents the browsers default handling of the event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "preventDefault",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Recursively removes all previous added listeners from an element and its children. Typically you will use <a href=\"#/api/Ext.Element-method-purgeAllListeners\" rel=\"Ext.Element-method-purgeAllListeners\" class=\"docClass\">Ext.Element.purgeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-purgeElement",
        "linenr": 453,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id or html element from which to remove all event handlers.</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>(optional) The name of the event.</p>\n",
            "type": "String",
            "optional": true,
            "name": "eventName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Recursively removes all previous added listeners from an element and its children. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "purgeElement",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all event handers from an element.  Typically you will use <a href=\"#/api/Ext.Element-method-removeAllListeners\" rel=\"Ext.Element-method-removeAllListeners\" class=\"docClass\">Ext.Element.removeAllListeners</a>\ndirectly on an Element in favor of calling this version.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-removeAll",
        "linenr": 432,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id or html element from which to remove all event handlers.</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes all event handers from an element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "removeAll",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes an event handler from an element.  The shorthand version <a href=\"#/api/Ext.EventManager-method-un\" rel=\"Ext.EventManager-method-un\" class=\"docClass\">un</a> is equivalent.  Typically\nyou will use <a href=\"#/api/Ext.Element-method-removeListener\" rel=\"Ext.Element-method-removeListener\" class=\"docClass\">Ext.Element.removeListener</a> directly on an Element in favor of calling this version.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-removeListener",
        "linenr": 372,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id or html element from which to remove the listener.</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The name of the event.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes an event handler from an element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "removeListener",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes the passed window resize listener.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-removeResizeListener",
        "linenr": 766,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The method the event invokes</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope of handler</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes the passed window resize listener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "removeResizeListener",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes the passed window unload listener.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-removeUnloadListener",
        "linenr": 814,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The method the event invokes</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope of handler</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes the passed window unload listener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "removeUnloadListener",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Stop the event (preventDefault and stopPropagation)</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-stopEvent",
        "linenr": 595,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>event to stop</p>\n",
            "type": "Event",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Stop the event (preventDefault and stopPropagation) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "stopEvent",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Cancels bubbling of the event.</p>\n",
        "href": "EventManager.html#Ext-EventManager-method-stopPropagation",
        "linenr": 604,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>event to stop bubbling.</p>\n",
            "type": "Event",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Cancels bubbling of the event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "stopPropagation",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-removeListener\" rel=\"Ext.EventManager-method-removeListener\" class=\"docClass\">Ext.EventManager.removeListener</a></p>\n",
        "href": "EventManager.html#Ext-EventManager-method-un",
        "linenr": 867,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Alias for Ext.EventManager.removeListener ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "un",
        "owner": "Ext.EventManager",
        "static": false,
        "inheritable": false
      }
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
  "alias": null,
  "singleton": true,
  "protected": false,
  "superclasses": [

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.EventManager",
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