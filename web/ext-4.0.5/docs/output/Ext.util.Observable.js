Ext.data.JsonP.Ext_util_Observable({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "linenr": 392,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add / override static properties of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "addStatics",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-borrow",
        "linenr": 482,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class to borrow members from</p>\n",
            "type": "Ext.Base",
            "optional": false,
            "name": "fromClass"
          },
          {
            "doc": "<p>The names of the members to borrow</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "borrow",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Starts capture on the specified Observable. All events will be passed to the supplied function with the event\nname + standard signature of the event <strong>before</strong> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-capture",
        "linenr": 54,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Observable to capture events from.</p>\n",
            "type": "Ext.util.Observable",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>The function to call when an event is fired.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to\nthe Observable firing the event.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Starts capture on the specified Observable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "capture",
        "owner": "Ext.util.Observable",
        "static": true,
        "inheritable": false
      },
      {
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "href": "Base3.html#Ext-Base-method-create",
        "linenr": 330,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>the created instance.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Create a new instance of this Class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "linenr": 658,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "alias"
          },
          {
            "doc": "<p>The original method name</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "origin"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "createAlias",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-getName",
        "linenr": 639,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>className</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the current class' name in string format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getName",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-implement",
        "linenr": 420,
        "html_filename": "Base3.html",
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
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "implement",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-method-observe",
        "linenr": 69,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class constructor to make observable.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "c"
          },
          {
            "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "listeners"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets observability on the passed class constructor. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "observe",
        "owner": "Ext.util.Observable",
        "static": true,
        "inheritable": false
      },
      {
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-override",
        "linenr": 524,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Override prototype members of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "override",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Removes <strong>all</strong> added captures from the Observable.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
        "linenr": 44,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Observable to release</p>\n",
            "type": "Ext.util.Observable",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes all added captures from the Observable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "releaseCapture",
        "owner": "Ext.util.Observable",
        "static": true,
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
  "doc": "<p>Base class that provides a common interface for publishing events. Subclasses are expected to to have a property\n\"events\" with all the events defined, and, optionally, a property \"listeners\" with configured listeners defined.</p>\n\n<p>For example:</p>\n\n<pre><code>Ext.define('Employee', {\n    extend: 'Ext.util.Observable',\n    constructor: function(config){\n        this.name = config.name;\n        this.addEvents({\n            \"fired\" : true,\n            \"quit\" : true\n        });\n\n        // Copy configured listeners into *this* object so that the base class's\n        // constructor will add them.\n        this.listeners = config.listeners;\n\n        // Call our superclass constructor to complete construction process.\n        this.callParent(arguments)\n    }\n});\n</code></pre>\n\n<p>This could then be used like this:</p>\n\n<pre><code>var newEmployee = new Employee({\n    name: employeeName,\n    listeners: {\n        quit: function() {\n            // By default, \"this\" will be the object that fired the event.\n            alert(this.name + \" has quit!\");\n        }\n    }\n});\n</code></pre>\n",
  "extends": "Ext.Base",
  "href": "Observable.html#Ext-util-Observable",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Observable.html",
  "subclasses": [
    "Ext.util.ClickRepeater",
    "Ext.form.Basic",
    "Ext.grid.feature.Feature",
    "Ext.grid.plugin.HeaderResizer",
    "Ext.selection.Model"
  ],
  "members": {
    "cfg": [
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "linenr": 102,
        "html_filename": "Observable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "cfg",
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "linenr": 495,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) Additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "type": "String...",
            "optional": true,
            "name": "more"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "linenr": 278,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.util.Observable-method-fireEvent\" rel=\"Ext.util.Observable-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends an event handler to this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "linenr": 156,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "opt"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestr...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "linenr": 269,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the result after calling the overridden method</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "type": "Array/Arguments",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "callOverridden",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-callParent",
        "linenr": 124,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the result from the superclass' method</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "type": "Array/Arguments",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Call the parent's overridden method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "callParent",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "linenr": 426,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "linenr": 455,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "linenr": 610,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "events"
          }
        ],
        "deprecated": null,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "linenr": 233,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to fire.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "type": "Object...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "linenr": 531,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the event is being listened for, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to check for</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "linenr": 63,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initialize configuration for this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "initConfig",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.Observable-method-addManagedListener\" rel=\"Ext.util.Observable-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "linenr": 682,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addManagedListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "opt"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "mon",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.Observable-method-removeManagedListener\" rel=\"Ext.util.Observable-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.util.Observable-method-mon\" rel=\"Ext.util.Observable-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "linenr": 688,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeManagedListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "mun",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "linenr": 670,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.util.Observable-method-fireEvent\" rel=\"Ext.util.Observable-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "on",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "linenr": 574,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "origin"
          },
          {
            "doc": "<p>Array of event names to relay.</p>\n",
            "type": "String[]",
            "optional": false,
            "name": "events"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "prefix"
          }
        ],
        "deprecated": null,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes an event handler.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "linenr": 392,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes an event handler. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.util.Observable-method-mon\" rel=\"Ext.util.Observable-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "linenr": 197,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "linenr": 555,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-statics",
        "linenr": 199,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Class"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "statics",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "linenr": 542,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "queueSuspended"
          }
        ],
        "deprecated": null,
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "linenr": 676,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "un",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Ext.Class",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-property-self",
        "linenr": 18,
        "html_filename": "Base3.html",
        "alias": null,
        "protected": true,
        "deprecated": null,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "property",
        "name": "self",
        "owner": "Ext.Base",
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
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Observable",
  "alternateClassNames": [

  ],
  "docauthor": null,
  "static": false,
  "author": null,
  "mixedInto": [
    "Ext.dd.DragTracker",
    "Ext.util.History",
    "Ext.FocusManager",
    "Ext.resizer.Resizer",
    "Ext.grid.plugin.Editing",
    "Ext.chart.series.Series",
    "Ext.util.HashMap",
    "Ext.util.AbstractMixedCollection",
    "Ext.app.Controller",
    "Ext.AbstractComponent",
    "Ext.data.AbstractStore",
    "Ext.data.Model",
    "Ext.data.proxy.Proxy",
    "Ext.data.Batch",
    "Ext.data.Connection",
    "Ext.data.Tree",
    "Ext.fx.Animator",
    "Ext.fx.Anim",
    "Ext.ElementLoader",
    "Ext.draw.Surface",
    "Ext.draw.Sprite",
    "Ext.state.Provider",
    "Ext.state.Stateful",
    "Ext.direct.Provider",
    "Ext.direct.Manager"
  ],
  "inheritable": false,
  "xtypes": [

  ]
});