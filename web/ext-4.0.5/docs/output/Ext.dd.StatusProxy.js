Ext.data.JsonP.Ext_dd_StatusProxy({
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
  "doc": "<p>A specialized drag proxy that supports a drop status icon, <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> styles and auto-repair.  This is the\ndefault drag proxy used by all Ext.dd components.</p>\n",
  "extends": "Ext.Base",
  "href": "StatusProxy.html#Ext-dd-StatusProxy",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "StatusProxy.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>The CSS class to apply to the status element when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropAllowed",
        "linenr": 34,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "dropAllowed",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to apply to the status element when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropNotAllowed",
        "linenr": 39,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "dropNotAllowed",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new StatusProxy.</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-constructor",
        "linenr": 9,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config object.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new StatusProxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.dd.StatusProxy",
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
        "doc": "<p>Returns the underlying proxy <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getEl",
        "linenr": 89,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "<p>el</p>\n",
          "type": "Ext.Layer"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the underlying proxy Ext.Layer ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "getEl",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the ghost element</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getGhost",
        "linenr": 97,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "<p>el</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the ghost element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "getGhost",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides the proxy</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-hide",
        "linenr": 105,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to reset the status and clear the ghost contents, false to preserve them</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "clear"
          }
        ],
        "deprecated": null,
        "shortDoc": "Hides the proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "hide",
        "owner": "Ext.dd.StatusProxy",
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
        "doc": "<p>Causes the proxy to return to its position of origin via an animation.  Should be called after an\ninvalid drop operation by the item being dragged.</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-repair",
        "linenr": 140,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The XY position of the element ([x, y])</p>\n",
            "type": "Number[]",
            "optional": false,
            "name": "xy"
          },
          {
            "doc": "<p>The function to call after the repair is complete.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>The scope (<code>this</code> reference) in which the callback function is executed. Defaults to the browser window.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Causes the proxy to return to its position of origin via an animation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "repair",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resets the status indicator to the default dropNotAllowed value</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-reset",
        "linenr": 58,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to also remove all content from the ghost, false to preserve it</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "clearGhost"
          }
        ],
        "deprecated": null,
        "shortDoc": "Resets the status indicator to the default dropNotAllowed value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "reset",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target element.</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-setStatus",
        "linenr": 45,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The css class for the new drop status indicator image</p>\n",
            "type": "String",
            "optional": false,
            "name": "cssClass"
          }
        ],
        "deprecated": null,
        "shortDoc": "Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target e...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "setStatus",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Displays this proxy</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-show",
        "linenr": 125,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Displays this proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "show",
        "owner": "Ext.dd.StatusProxy",
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
        "doc": "<p>Stops the repair animation if it's currently running</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-stop",
        "linenr": 116,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Stops the repair animation if it's currently running ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "stop",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Force the Layer to sync its shadow and shim positions to the element</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-sync",
        "linenr": 133,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Force the Layer to sync its shadow and shim positions to the element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "sync",
        "owner": "Ext.dd.StatusProxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Updates the contents of the ghost element</p>\n",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-update",
        "linenr": 70,
        "html_filename": "StatusProxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The html that will replace the current innerHTML of the ghost element, or a\nDOM node to append as the child of the ghost element (in which case the innerHTML will be cleared first).</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "html"
          }
        ],
        "deprecated": null,
        "shortDoc": "Updates the contents of the ghost element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "tagname": "method",
        "name": "update",
        "owner": "Ext.dd.StatusProxy",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.dd.StatusProxy",
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