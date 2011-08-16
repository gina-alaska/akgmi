Ext.data.JsonP.Ext_view_BoundListKeyNav({
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
  "doc": "<p>A specialized <a href=\"#/api/Ext.util.KeyNav\" rel=\"Ext.util.KeyNav\" class=\"docClass\">Ext.util.KeyNav</a> implementation for navigating a <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">Ext.view.BoundList</a> using\nthe keyboard. The up, down, pageup, pagedown, home, and end keys move the active highlight\nthrough the list. The enter key invokes the selection model's select action using the highlighted item.</p>\n",
  "extends": "Ext.util.KeyNav",
  "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "BoundListKeyNav.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Ext.view.BoundList",
        "doc": "<p>@required\nThe <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">Ext.view.BoundList</a> instance for which key navigation will be managed. This is required.</p>\n",
        "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav-cfg-boundList",
        "linenr": 12,
        "html_filename": "BoundListKeyNav.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "@required\nThe Ext.view.BoundList instance for which key navigation will be managed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
        "private": false,
        "tagname": "cfg",
        "name": "boundList",
        "owner": "Ext.view.BoundListKeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The method to call on the <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> after this KeyNav intercepts a key.  Valid values are\n<a href=\"#/api/Ext.EventObject-method-stopEvent\" rel=\"Ext.EventObject-method-stopEvent\" class=\"docClass\">Ext.EventObject.stopEvent</a>, <a href=\"#/api/Ext.EventObject-method-preventDefault\" rel=\"Ext.EventObject-method-preventDefault\" class=\"docClass\">Ext.EventObject.preventDefault</a> and\n<a href=\"#/api/Ext.EventObject-method-stopPropagation\" rel=\"Ext.EventObject-method-stopPropagation\" class=\"docClass\">Ext.EventObject.stopPropagation</a> (defaults to 'stopEvent')</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-cfg-defaultEventAction",
        "linenr": 110,
        "html_filename": "KeyNav.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The method to call on the Ext.EventObject after this KeyNav intercepts a key. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "cfg",
        "name": "defaultEventAction",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to disable this KeyNav instance (defaults to false)</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-cfg-disabled",
        "linenr": 104,
        "html_filename": "KeyNav.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "cfg",
        "name": "disabled",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Handle the keydown event instead of keypress (defaults to false).  KeyNav automatically does this for IE since\nIE does not propagate special keys on keypress, but setting this to true will force other browsers to also\nhandle keydown instead of keypress.</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-cfg-forceKeyDown",
        "linenr": 118,
        "html_filename": "KeyNav.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Handle the keydown event instead of keypress (defaults to false). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "cfg",
        "name": "forceKeyDown",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new KeyNav.</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-method-constructor",
        "linenr": 48,
        "html_filename": "KeyNav.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element or its ID to bind to</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The config</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new KeyNav. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.util.KeyNav",
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
        "doc": "<p>Destroy this KeyNav (this is the same as calling disable).</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-method-destroy",
        "linenr": 126,
        "html_filename": "KeyNav.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to remove the element associated with this KeyNav.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "removeEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "Destroy this KeyNav (this is the same as calling disable). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Disable this KeyNav</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-method-disable",
        "linenr": 143,
        "html_filename": "KeyNav.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Disable this KeyNav ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "disable",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enable this KeyNav</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-method-enable",
        "linenr": 135,
        "html_filename": "KeyNav.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Enable this KeyNav ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "enable",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Determines the event to bind to listen for keys. Depends on the <a href=\"#/api/Ext.view.BoundListKeyNav-cfg-forceKeyDown\" rel=\"Ext.view.BoundListKeyNav-cfg-forceKeyDown\" class=\"docClass\">forceKeyDown</a> setting,\nas well as the useKeyDown option on the EventManager.</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-method-getKeyEvent",
        "linenr": 160,
        "html_filename": "KeyNav.html",
        "alias": null,
        "return": {
          "doc": "<p>The type of event to listen for.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "forceKeyDown"
          }
        ],
        "deprecated": null,
        "shortDoc": "Determines the event to bind to listen for keys. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "getKeyEvent",
        "owner": "Ext.util.KeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Highlights the item at the given index.</p>\n",
        "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav-method-highlightAt",
        "linenr": 67,
        "html_filename": "BoundListKeyNav.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Highlights the item at the given index. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "highlightAt",
        "owner": "Ext.view.BoundListKeyNav",
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
        "doc": "<p>Triggers selection of the currently highlighted item according to the behavior of\nthe configured SelectionModel.</p>\n",
        "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav-method-selectHighlighted",
        "linenr": 81,
        "html_filename": "BoundListKeyNav.html",
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
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Triggers selection of the currently highlighted item according to the behavior of\nthe configured SelectionModel. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "selectHighlighted",
        "owner": "Ext.view.BoundListKeyNav",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n",
        "href": "KeyNav.html#Ext-util-KeyNav-method-setDisabled",
        "linenr": 151,
        "html_filename": "KeyNav.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Boolean",
            "optional": false,
            "name": "disabled"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenience function for setting disabled/enabled by boolean. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "tagname": "method",
        "name": "setDisabled",
        "owner": "Ext.util.KeyNav",
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
    "Ext.Base",
    "Ext.util.KeyNav"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.view.BoundListKeyNav",
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