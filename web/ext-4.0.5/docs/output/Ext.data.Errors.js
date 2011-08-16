Ext.data.JsonP.Ext_data_Errors({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "href": "Base3.html#Ext-Base-method-addStatics",
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 392,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Add / override static properties of this class. ...",
        "owner": "Ext.Base",
        "name": "addStatics",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-borrow",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 482,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Ext.Base",
            "doc": "<p>The class to borrow members from</p>\n\n",
            "optional": false,
            "name": "fromClass"
          },
          {
            "type": "String/String[]",
            "doc": "<p>The names of the members to borrow</p>\n\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "owner": "Ext.Base",
        "name": "borrow",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-create",
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "html_filename": "Base3.html",
        "linenr": 330,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "alias": null,
        "params": [

        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Create a new instance of this Class. ...",
        "owner": "Ext.Base",
        "name": "create",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-createAlias",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 658,
        "return": {
          "type": "undefined",
          "doc": "\n"
        },
        "alias": null,
        "params": [
          {
            "type": "String/Object",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n",
            "optional": false,
            "name": "alias"
          },
          {
            "type": "String/Object",
            "doc": "<p>The original method name</p>\n\n",
            "optional": false,
            "name": "origin"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "owner": "Ext.Base",
        "name": "createAlias",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-getName",
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 639,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n\n"
        },
        "alias": null,
        "params": [

        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Get the current class' name in string format. ...",
        "owner": "Ext.Base",
        "name": "getName",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-implement",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 420,
        "return": {
          "type": "undefined",
          "doc": "\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "owner": "Ext.Base",
        "name": "implement",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-override",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 524,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Override prototype members of this class. ...",
        "owner": "Ext.Base",
        "name": "override",
        "static": true,
        "inheritable": true
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
  "doc": "<p>Wraps a collection of validation error responses and provides convenient functions for\naccessing and errors for specific fields.</p>\n\n\n\n\n<p>Usually this class does not need to be instantiated directly - instances are instead created\nautomatically when <a href=\"#/api/Ext.data.Model-method-validate\" rel=\"Ext.data.Model-method-validate\" class=\"docClass\">validate</a> on a model instance:</p>\n\n\n\n\n<pre><code>//validate some existing model instance - in this case it returned 2 failures messages\nvar errors = myModel.validate();\n\nerrors.isValid(); //false\n\nerrors.length; //2\nerrors.getByField('name');  // [{field: 'name',  message: 'must be present'}]\nerrors.getByField('title'); // [{field: 'title', message: 'is too short'}]\n</code></pre>\n\n",
  "extends": "Ext.util.MixedCollection",
  "href": "Errors.html#Ext-data-Errors",
  "allMixins": [
    "Ext.util.Sortable",
    "Ext.util.Observable"
  ],
  "linenr": 1,
  "html_filename": "Errors.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>Specify <tt>true</tt> if the <a href=\"#/api/Ext.data.Errors-method-addAll\" rel=\"Ext.data.Errors-method-addAll\" class=\"docClass\">addAll</a>\nfunction should add function references to the collection. Defaults to\n<tt>false</tt>.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-cfg-allowFunctions",
        "linenr": 62,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specify true if the addAll\nfunction should add function references to the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "cfg",
        "name": "allowFunctions",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
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
        "doc": "<p>Creates new MixedCollection.</p>\n",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-constructor",
        "linenr": 40,
        "html_filename": "MixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Specify <tt>true</tt> if the <a href=\"#/api/Ext.data.Errors-method-addAll\" rel=\"Ext.data.Errors-method-addAll\" class=\"docClass\">addAll</a>\nfunction should add function references to the collection. Defaults to\n<tt>false</tt>.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "allowFunctions"
          },
          {
            "doc": "<p>A function that can accept an item of the type(s) stored in this MixedCollection\nand return the key value for that item.  This is used when available to look up the key on items that\nwere passed without an explicit key parameter to a MixedCollection method.  Passing this parameter is\nequivalent to providing an implementation for the <a href=\"#/api/Ext.data.Errors-method-getKey\" rel=\"Ext.data.Errors-method-getKey\" class=\"docClass\">getKey</a> method.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "keyFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new MixedCollection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/MixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.util.MixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.data.Errors-event-add\" rel=\"Ext.data.Errors-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-add",
        "linenr": 69,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item added.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key to associate with the item, or the new item.</p>\n\n\n<p>If a <a href=\"#/api/Ext.data.Errors-method-getKey\" rel=\"Ext.data.Errors-method-getKey\" class=\"docClass\">getKey</a> implementation was specified for this MixedCollection,\nor if the key of the stored items is in a property called <tt><b>id</b></tt>,\nthe MixedCollection will be able to <i>derive</i> the key for the new item.\nIn this case just pass the new item in this parameter.</p>\n\n",
            "type": "String",
            "optional": false,
            "name": "key"
          },
          {
            "doc": "<p>The item to add.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds an item to the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "add",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds all elements of an Array or an Object to the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-addAll",
        "linenr": 166,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An Object containing properties which will be added\nto the collection, or an Array of values, each of which are added to the collection.\nFunctions references will be added to the collection if <code><a href=\"#/api/Ext.data.Errors-cfg-allowFunctions\" rel=\"Ext.data.Errors-cfg-allowFunctions\" class=\"docClass\">allowFunctions</a></code>\nhas been set to <tt>true</tt>.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "objs"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds all elements of an Array or an Object to the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "addAll",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.Errors-method-fireEvent\" rel=\"Ext.data.Errors-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Removes all items from the collection.  Fires the <a href=\"#/api/Ext.data.Errors-event-clear\" rel=\"Ext.data.Errors-event-clear\" class=\"docClass\">clear</a> event when complete.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-clear",
        "linenr": 435,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all items from the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "clear",
        "owner": "Ext.util.AbstractMixedCollection",
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
        "doc": "<p>Creates a shallow copy of this collection</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-clone",
        "linenr": 727,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.util.MixedCollection"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Creates a shallow copy of this collection ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "clone",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Collects unique values of a particular property in this MixedCollection</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-collect",
        "linenr": 489,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The unique values</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The property to collect on</p>\n",
            "type": "String",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>(optional) 'root' property to extract the first argument from. This is used mainly when\nsumming fields in records, where the fields are all stored inside the 'data' object</p>\n",
            "type": "String",
            "optional": true,
            "name": "root"
          },
          {
            "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "allowBlank"
          }
        ],
        "deprecated": null,
        "shortDoc": "Collects unique values of a particular property in this MixedCollection ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "collect",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the collection contains the passed Object as an item.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-contains",
        "linenr": 417,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the collection contains the Object as an item.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Object to look for in the collection.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the collection contains the passed Object as an item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "contains",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the collection contains the passed Object as a key.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-containsKey",
        "linenr": 426,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the collection contains the Object as a key.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key to look for in the collection.</p>\n",
            "type": "String",
            "optional": false,
            "name": "key"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the collection contains the passed Object as a key. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "containsKey",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for every item in the collection, passing the following arguments:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>item</b> : Mixed<p class=\"sub-desc\">The collection item</p></li>\n<li><b>index</b> : Number<p class=\"sub-desc\">The item's index</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n\n<p>The function should return a boolean value. Returning false from the function will stop the iteration.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-each",
        "linenr": 196,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current item in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every item in the collection, passing the following arguments:\n\n\nitem : Mixe...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for every key in the collection, passing each\nkey, and its associated item as the first two parameters.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-eachKey",
        "linenr": 221,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every key in the collection, passing each\nkey, and its associated item as th...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "eachKey",
        "owner": "Ext.util.AbstractMixedCollection",
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
        "doc": "<p>Filters the objects in this collection by a set of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a>s, or by a single\nproperty/value pair with optional parameters for substring matching and case sensitivity. See\n<a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> for an example of using Filter objects (preferred). Alternatively,\nMixedCollection can be easily filtered by property like this:</p>\n\n\n<pre><code>//create a simple store with a few people defined\nvar people = new Ext.util.MixedCollection();\npeople.addAll([\n    {id: 1, age: 25, name: 'Ed'},\n    {id: 2, age: 24, name: 'Tommy'},\n    {id: 3, age: 24, name: 'Arne'},\n    {id: 4, age: 26, name: 'Aaron'}\n]);\n\n//a new MixedCollection containing only the items where age == 24\nvar middleAged = people.filter('age', 24);\n</code></pre>\n\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-filter",
        "linenr": 566,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The new filtered collection</p>\n",
          "type": "Ext.util.MixedCollection"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A property on your objects, or an array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n",
            "type": "Ext.util.Filter[]/String",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>Either string that the property values\nshould start with or a RegExp to test against the property</p>\n",
            "type": "String/RegExp",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "anyMatch"
          },
          {
            "doc": "<p>(optional) True for case sensitive comparison (defaults to False).</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "caseSensitive"
          }
        ],
        "deprecated": null,
        "shortDoc": "Filters the objects in this collection by a set of Filters, or by a single\nproperty/value pair with optional paramete...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "filter",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Filter by a function. Returns a <i>new</i> collection that has been filtered.\nThe passed function will be called with each object in the collection.\nIf the function returns true, the value is included otherwise it is filtered.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-filterBy",
        "linenr": 630,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The new filtered collection</p>\n",
          "type": "Ext.util.MixedCollection"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to be called, it will receive the args o (the object), k (the key)</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this MixedCollection.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Filter by a function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "filterBy",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the first item in the collection which elicits a true return value from the\npassed selection function.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findBy",
        "linenr": 238,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The first item in the collection which returned true from the selection function.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The selection function to execute for each item.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the first item in the collection which elicits a true return value from the\npassed selection function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "findBy",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Finds the index of the first matching object in this collection by a specific property/value.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findIndex",
        "linenr": 657,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The matched index or -1</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of a property on your objects.</p>\n",
            "type": "String",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>A string that the property values\nshould start with or a RegExp to test against the property.</p>\n",
            "type": "String/RegExp",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) The index to start searching at (defaults to 0).</p>\n",
            "type": "Number",
            "optional": true,
            "name": "start"
          },
          {
            "doc": "<p>(optional) True to match any part of the string, not just the beginning.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "anyMatch"
          },
          {
            "doc": "<p>(optional) True for case sensitive comparison.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "caseSensitive"
          }
        ],
        "deprecated": null,
        "shortDoc": "Finds the index of the first matching object in this collection by a specific property/value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "findIndex",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Find the index of the first matching object in this collection by a function.\nIf the function returns <i>true</i> it is considered a match.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-findIndexBy",
        "linenr": 677,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The matched index or -1</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to be called, it will receive the args o (the object), k (the key).</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this MixedCollection.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The index to start searching at (defaults to 0).</p>\n",
            "type": "Number",
            "optional": true,
            "name": "start"
          }
        ],
        "deprecated": null,
        "shortDoc": "Find the index of the first matching object in this collection by a function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "findIndexBy",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.Errors-method-enableBubble\" rel=\"Ext.data.Errors-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "doc": "<p>Returns the first item in the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-first",
        "linenr": 448,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>the first item in the collection..</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the first item in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "first",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the item associated with the passed key OR index.\nKey has priority over index.  This is the equivalent\nof calling <a href=\"#/api/Ext.data.Errors-method-getByKey\" rel=\"Ext.data.Errors-method-getByKey\" class=\"docClass\">getByKey</a> first, then if nothing matched calling <a href=\"#/api/Ext.data.Errors-method-getAt\" rel=\"Ext.data.Errors-method-getAt\" class=\"docClass\">getAt</a>.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-get",
        "linenr": 384,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>If the item is found, returns the item.  If the item was not found, returns <tt>undefined</tt>.\nIf an item was found, but is a Class, returns <tt>null</tt>.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key or index of the item.</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "key"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the item associated with the passed key OR index. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the item at the specified index.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getAt",
        "linenr": 399,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item at the specified index.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The index of the item.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the item at the specified index. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "getAt",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns all of the errors for the given field</p>\n",
        "href": "Errors.html#Ext-data-Errors-method-getByField",
        "linenr": 34,
        "html_filename": "Errors.html",
        "alias": null,
        "return": {
          "doc": "<p>All errors for the given field</p>\n",
          "type": "Object[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The field to get errors for</p>\n",
            "type": "String",
            "optional": false,
            "name": "fieldName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns all of the errors for the given field ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Errors.js",
        "private": false,
        "tagname": "method",
        "name": "getByField",
        "owner": "Ext.data.Errors",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the item associated with the passed key.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getByKey",
        "linenr": 408,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item associated with the passed key.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key of the item.</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "key"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the item associated with the passed key. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "getByKey",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the number of items in the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getCount",
        "linenr": 358,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>the number of items in the collection.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the number of items in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "getCount",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>MixedCollection has a generic way to fetch keys if you implement getKey.  The default implementation\nsimply returns <b><code>item.id</code></b> but you can provide your own implementation\nto return a different value as in the following examples:</p>\n\n<pre><code>// normal way\nvar mc = new Ext.util.MixedCollection();\nmc.add(someEl.dom.id, someEl);\nmc.add(otherEl.dom.id, otherEl);\n//and so on\n\n// using getKey\nvar mc = new Ext.util.MixedCollection();\nmc.getKey = function(el){\n   return el.dom.id;\n};\nmc.add(someEl);\nmc.add(otherEl);\n\n// or via the constructor\nvar mc = new Ext.util.MixedCollection(false, function(el){\n   return el.dom.id;\n});\nmc.add(someEl);\nmc.add(otherEl);\n</code></pre>\n\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getKey",
        "linenr": 103,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The key for the passed item.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item for which to find the key.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "MixedCollection has a generic way to fetch keys if you implement getKey. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "getKey",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a range of items in this collection</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-getRange",
        "linenr": 536,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>An array of items</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The starting index. Defaults to 0.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "startIndex"
          },
          {
            "doc": "<p>(optional) The ending index. Defaults to the last item.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "endIndex"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a range of items in this collection ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "getRange",
        "owner": "Ext.util.AbstractMixedCollection",
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
        "doc": "<p>Returns index within the collection of the passed Object.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-indexOf",
        "linenr": 366,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>index of the item. Returns -1 if not found.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to find the index of.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns index within the collection of the passed Object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "indexOf",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns index within the collection of the passed key.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-indexOfKey",
        "linenr": 375,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>index of the key.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key to find the index of.</p>\n",
            "type": "String",
            "optional": false,
            "name": "key"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns index within the collection of the passed key. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "indexOfKey",
        "owner": "Ext.util.AbstractMixedCollection",
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
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method during their\nown initialization.</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
        "linenr": 32,
        "html_filename": "Sortable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Performs initialization of this mixin. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "method",
        "name": "initSortable",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts an item at the specified index in the collection. Fires the <a href=\"#/api/Ext.data.Errors-event-add\" rel=\"Ext.data.Errors-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-insert",
        "linenr": 268,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item inserted.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The index to insert the item at.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The key to associate with the new item, or the item itself.</p>\n",
            "type": "String",
            "optional": false,
            "name": "key"
          },
          {
            "doc": "<p>(optional) If the second parameter was a key, the new item.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts an item at the specified index in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "insert",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if there are no errors in the collection</p>\n",
        "href": "Errors.html#Ext-data-Errors-method-isValid",
        "linenr": 26,
        "html_filename": "Errors.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if there are no errors in the collection ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Errors.js",
        "private": false,
        "tagname": "method",
        "name": "isValid",
        "owner": "Ext.data.Errors",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the last item in the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-last",
        "linenr": 456,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>the last item in the collection..</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the last item in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "last",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Errors-method-addManagedListener\" rel=\"Ext.data.Errors-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Errors-method-removeManagedListener\" rel=\"Ext.data.Errors-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.Errors-method-mon\" rel=\"Ext.data.Errors-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.Errors-method-fireEvent\" rel=\"Ext.data.Errors-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Remove an item from the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-remove",
        "linenr": 302,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item removed or false if no item was removed.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to remove.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Remove an item from the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "remove",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Remove all items in the passed array from the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAll",
        "linenr": 311,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>this object</p>\n",
          "type": "Ext.util.MixedCollection"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An array of items to be removed.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "items"
          }
        ],
        "deprecated": null,
        "shortDoc": "Remove all items in the passed array from the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "removeAll",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Remove an item from a specified index in the collection. Fires the <a href=\"#/api/Ext.data.Errors-event-remove\" rel=\"Ext.data.Errors-event-remove\" class=\"docClass\">remove</a> event when complete.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAt",
        "linenr": 324,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item removed or false if no item was removed.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The index within the collection of the item to remove.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Remove an item from a specified index in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "removeAt",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removed an item associated with the passed key fom the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-removeAtKey",
        "linenr": 349,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The item removed or false if no item was removed.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key of the item to remove.</p>\n",
            "type": "String",
            "optional": false,
            "name": "key"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removed an item associated with the passed key fom the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "removeAtKey",
        "owner": "Ext.util.AbstractMixedCollection",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.Errors-method-mon\" rel=\"Ext.data.Errors-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Reorders each of the items based on a mapping from old index to new index. Internally this\njust translates into a sort. The 'sort' event is fired whenever reordering has occured.</p>\n",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-reorder",
        "linenr": 152,
        "html_filename": "MixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Mapping from old item index to new item index</p>\n",
            "type": "Object",
            "optional": false,
            "name": "mapping"
          }
        ],
        "deprecated": null,
        "shortDoc": "Reorders each of the items based on a mapping from old index to new index. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/MixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "reorder",
        "owner": "Ext.util.MixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces an item in the collection. Fires the <a href=\"#/api/Ext.data.Errors-event-replace\" rel=\"Ext.data.Errors-event-replace\" class=\"docClass\">replace</a> event when complete.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-replace",
        "linenr": 135,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The new item.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The key associated with the item to replace, or the replacement item.</p>\n\n\n<p>If you supplied a <a href=\"#/api/Ext.data.Errors-method-getKey\" rel=\"Ext.data.Errors-method-getKey\" class=\"docClass\">getKey</a> implementation for this MixedCollection, or if the key\nof your stored items is in a property called <tt><b>id</b></tt>, then the MixedCollection\nwill be able to <i>derive</i> the key of the replacement item. If you want to replace an item\nwith one having the same key value, then just pass the replacement item in this parameter.</p>\n\n",
            "type": "String",
            "optional": false,
            "name": "key"
          },
          {
            "doc": "<p>{Object} o (optional) If the first parameter passed was a key, the item to associate\nwith that key.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces an item in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "replace",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.Errors-method-suspendEvents\" rel=\"Ext.data.Errors-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates\nthe actual sorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n</code></pre>\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n",
        "href": "Sortable.html#Ext-util-Sortable-method-sort",
        "linenr": 53,
        "html_filename": "Sortable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.util.Sorter[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either a string name of one of the fields in this Store's configured\n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>, or an array of sorter configurations.</p>\n",
            "type": "String/Ext.util.Sorter[]",
            "optional": false,
            "name": "sorters"
          },
          {
            "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
            "type": "String",
            "optional": false,
            "name": "direction"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sorts the data in the Store by one or more of its properties. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "method",
        "name": "sort",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sorts the collection by a single sorter function</p>\n",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-sortBy",
        "linenr": 113,
        "html_filename": "MixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to sort by</p>\n",
            "type": "Function",
            "optional": false,
            "name": "sorterFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sorts the collection by a single sorter function ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/MixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "sortBy",
        "owner": "Ext.util.MixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sorts this collection by <b>key</b>s.</p>\n",
        "href": "MixedCollection.html#Ext-util-MixedCollection-method-sortByKey",
        "linenr": 192,
        "html_filename": "MixedCollection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) 'ASC' or 'DESC'. Defaults to 'ASC'.</p>\n",
            "type": "String",
            "optional": true,
            "name": "direction"
          },
          {
            "doc": "<p>(optional) Comparison function that defines the sort order.\nDefaults to sorting by case insensitive string.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sorts this collection by keys. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/MixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "sortByKey",
        "owner": "Ext.util.MixedCollection",
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
        "doc": "<p>Collects all of the values of the given property and returns their sum</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-method-sum",
        "linenr": 464,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "return": {
          "doc": "<p>The total</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The property to sum by</p>\n",
            "type": "String",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>(optional) 'root' property to extract the first argument from. This is used mainly when\nsumming fields in records, where the fields are all stored inside the 'data' object</p>\n",
            "type": "String",
            "optional": true,
            "name": "root"
          },
          {
            "doc": "<p>(optional) The record index to start at (defaults to <tt>0</tt>)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "start"
          },
          {
            "doc": "<p>(optional) The record index to end at (defaults to <tt>-1</tt>)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "end"
          }
        ],
        "deprecated": null,
        "shortDoc": "Collects all of the values of the given property and returns their sum ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "method",
        "name": "sum",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.Errors-method-resumeEvents\" rel=\"Ext.data.Errors-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.Errors-method-resumeEvents\" rel=\"Ext.data.Errors-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.Errors-method-removeListener\" rel=\"Ext.data.Errors-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.Errors-method-addListener\" rel=\"Ext.data.Errors-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
      {
        "doc": "<p>Fires when an item is added to the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-add",
        "linenr": 26,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The index at which the item was added.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The item added.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>The key associated with the added item.</p>\n",
            "type": "String",
            "optional": false,
            "name": "key"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an item is added to the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "event",
        "name": "add",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the collection is cleared.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-clear",
        "linenr": 20,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the collection is cleared. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "event",
        "name": "clear",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when an item is removed from the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-remove",
        "linenr": 44,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The item being removed.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) The key associated with the removed item.</p>\n",
            "type": "String",
            "optional": true,
            "name": "key"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an item is removed from the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "event",
        "name": "remove",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when an item is replaced in the collection.</p>\n",
        "href": "AbstractMixedCollection.html#Ext-util-AbstractMixedCollection-event-replace",
        "linenr": 35,
        "html_filename": "AbstractMixedCollection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>he key associated with the new added.</p>\n",
            "type": "String",
            "optional": false,
            "name": "key"
          },
          {
            "doc": "<p>The item being replaced.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "old"
          },
          {
            "doc": "<p>The new item.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "new"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when an item is replaced in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/AbstractMixedCollection.js",
        "private": false,
        "tagname": "event",
        "name": "replace",
        "owner": "Ext.util.AbstractMixedCollection",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "String",
        "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection",
        "linenr": 17,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "defaultSortDirection",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-isSortable",
        "linenr": 11,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Flag denoting that this object is sortable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "isSortable",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
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
      },
      {
        "type": "String",
        "doc": "<p>The property in each item that contains the data to sort.</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-sortRoot",
        "linenr": 27,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "sortRoot",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-sorters",
        "linenr": 40,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "sorters",
        "owner": "Ext.util.Sortable",
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
    "Ext.Base",
    "Ext.util.AbstractMixedCollection",
    "Ext.util.MixedCollection"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Errors.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.Errors",
  "alternateClassNames": [

  ],
  "docauthor": null,
  "static": false,
  "author": "Ed Spencer",
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});