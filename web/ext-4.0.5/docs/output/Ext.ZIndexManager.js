Ext.data.JsonP.Ext_ZIndexManager({
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
  "doc": "<p>A class that manages a group of <a href=\"#/api/Ext.Component-cfg-floating\" rel=\"Ext.Component-cfg-floating\" class=\"docClass\">Ext.Component.floating</a> Components and provides z-order management,\nand Component activation behavior, including masking below the active (topmost) Component.</p>\n\n\n<p><a href=\"#/api/Ext.Component-cfg-floating\" rel=\"Ext.Component-cfg-floating\" class=\"docClass\">Floating</a> Components which are rendered directly into the document (Such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s which are\n<a href=\"#/api/Ext.Component-event-show\" rel=\"Ext.Component-event-show\" class=\"docClass\">show</a>n are managed by a <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">global instance</a>.</p>\n\n\n<p><a href=\"#/api/Ext.Component-cfg-floating\" rel=\"Ext.Component-cfg-floating\" class=\"docClass\">Floating</a> Components which are descendants of <a href=\"#/api/Ext.Component-cfg-floating\" rel=\"Ext.Component-cfg-floating\" class=\"docClass\">floating</a> <i>Containers</i>\n(For example a {<a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">Ext.view.BoundList</a> BoundList} within an <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>, or a <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>),\nare managed by a ZIndexManager owned by that floating Container. So ComboBox dropdowns within Windows will have managed z-indices\nguaranteed to be correct, relative to the Window.</p>\n\n",
  "extends": "Ext.Base",
  "href": "ZIndexManager.html#Ext-ZIndexManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "ZIndexManager.html",
  "subclasses": [
    "Ext.WindowManager"
  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Brings the specified Component to the front of any other active Components in this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-bringToFront",
        "linenr": 229,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the dialog was brought to the front, else false\nif it was already in front</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Brings the specified Component to the front of any other active Components in this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "bringToFront",
        "owner": "Ext.ZIndexManager",
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
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-each",
        "linenr": 347,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Component in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the bottom and proceeding to the top.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachBottomUp",
        "linenr": 363,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "eachBottomUp",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the top and proceeding to the bottom.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachTopDown",
        "linenr": 384,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "eachTopDown",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets a registered Component by id.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-get",
        "linenr": 220,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets a registered Component by id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the currently-active Component in this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-getActive",
        "linenr": 315,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The active Component</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the currently-active Component in this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "getActive",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns zero or more Components in this ZIndexManager using the custom search function passed to this method.\nThe function should accept a single <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> reference as its only argument and should\nreturn true if the Component matches the search criteria, otherwise it should return false.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-getBy",
        "linenr": 323,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>An array of zero or more matching windows</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The search function</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component being tested.\nthat gets passed to the function if not specified)</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns zero or more Components in this ZIndexManager using the custom search function passed to this method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "getBy",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides all Components managed by this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-hideAll",
        "linenr": 262,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Hides all Components managed by this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "hideAll",
        "owner": "Ext.ZIndexManager",
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
        "doc": "<p>Registers a floating <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> with this ZIndexManager. This should not\nneed to be called under normal circumstances. Floating Components (such as Windows, BoundLists and Menus) are automatically registered\nwith a <a href=\"#/api/Ext.Component-property-zIndexManager\" rel=\"Ext.Component-property-zIndexManager\" class=\"docClass\">zIndexManager</a> at render time.</p>\n\n\n<p>Where this may be useful is moving Windows between two ZIndexManagers. For example,\nto bring the <a href=\"#/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a> dialog under the same manager as the Desktop's\nZIndexManager in the desktop sample app:</p>\n\n\n<p><code></p>\n\n<pre>MyDesktop.getDesktop().getManager().register(Ext.MessageBox);\n</pre>\n\n\n<p></code></p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-register",
        "linenr": 180,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Component to register.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Registers a floating Ext.Component with this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "register",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sends the specified Component to the back of other active Components in this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-sendToBack",
        "linenr": 249,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The Component</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sends the specified Component to the back of other active Components in this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "sendToBack",
        "owner": "Ext.ZIndexManager",
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
        "doc": "<p>Unregisters a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> from this ZIndexManager. This should not\nneed to be called. Components are automatically unregistered upon destruction.\nSee <a href=\"#/api/Ext.ZIndexManager-method-register\" rel=\"Ext.ZIndexManager-method-register\" class=\"docClass\">register</a>.</p>\n\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-unregister",
        "linenr": 202,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Component to unregister.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unregisters a Ext.Component from this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "unregister",
        "owner": "Ext.ZIndexManager",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.ZIndexManager",
  "alternateClassNames": [
    "Ext.WindowGroup"
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