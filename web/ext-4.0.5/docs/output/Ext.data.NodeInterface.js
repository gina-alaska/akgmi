Ext.data.JsonP.Ext_data_NodeInterface({
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
        "doc": "<p>This method allows you to decorate a Record's prototype to implement the NodeInterface.\nThis adds a set of methods, new events, new properties and new fields on every Record\nwith the same Model as the passed Record.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-decorate",
        "linenr": 42,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Record you want to decorate the prototype of.</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record"
          }
        ],
        "deprecated": null,
        "shortDoc": "This method allows you to decorate a Record's prototype to implement the NodeInterface. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "decorate",
        "owner": "Ext.data.NodeInterface",
        "static": true,
        "inheritable": false
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
  "doc": "<p>This class is meant to be used as a set of methods that are applied to the prototype of a\nRecord to decorate it with a Node API. This means that models used in conjunction with a tree\nwill have all of the tree related methods available on the model. In general this class will\nnot be used directly by the developer.</p>\n",
  "extends": "Ext.Base",
  "href": "NodeInterface.html#Ext-data-NodeInterface",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "NodeInterface.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Insert node(s) as the last child node of this node.</p>\n\n\n<p>If the node was previously a child node of another parent node, it will be removed from that node first.</p>\n\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-appendChild",
        "linenr": 362,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The appended node if single append, or null if an array was passed</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The node or Array of nodes to append</p>\n",
            "type": "Ext.data.NodeInterface/Ext.data.NodeInterface[]",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Insert node(s) as the last child node of this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "appendChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Bubbles up the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-bubble",
        "linenr": 757,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Bubbles up the tree from this node, calling the specified function with each node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "bubble",
        "owner": "Ext.data.NodeInterface",
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
        "doc": "<p>Cascades down the tree from this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe cascade is stopped on that branch.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-cascadeBy",
        "linenr": 784,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Cascades down the tree from this node, calling the specified function with each node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "cascadeBy",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Collapse this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapse",
        "linenr": 1055,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
            "type": "Function",
            "optional": true,
            "name": "recursive"
          },
          {
            "doc": "<p>(Optional) The function to execute once the collapse completes</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          },
          {
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Collapse this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Collapse all the children of this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-collapseChildren",
        "linenr": 1092,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to recursively collapse all the children</p>\n",
            "type": "Function",
            "optional": true,
            "name": "recursive"
          },
          {
            "doc": "<p>(Optional) The function to execute once all the children are collapsed</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          },
          {
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Collapse all the children of this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "collapseChildren",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is an ancestor (at any point) of the passed node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-contains",
        "linenr": 865,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is an ancestor (at any point) of the passed node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "contains",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a copy (clone) of this Node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-copy",
        "linenr": 505,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>A copy of this Node.</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) A new id, defaults to this Node's id.</p>\n",
            "type": "String",
            "optional": true,
            "name": "id"
          },
          {
            "doc": "<p>(optional) <p>If passed as <code>true</code>, all child Nodes are recursively copied into the new Node.</p></p>\n\n<p>If omitted or false, the copy will have no child Nodes.</p>\n\n",
            "type": "Boolean",
            "optional": true,
            "name": "deep"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a copy (clone) of this Node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "copy",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Ensures that the passed object is an instance of a Record with the NodeInterface applied</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-createNode",
        "linenr": 244,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Ensures that the passed object is an instance of a Record with the NodeInterface applied ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "createNode",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Destroys the node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-destroy",
        "linenr": 542,
        "html_filename": "NodeInterface.html",
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
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Destroys the node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Interates the child nodes of this node, calling the specified function with each node. The arguments to the function\nwill be the args provided or the current node. If the function returns false at any point,\nthe iteration stops.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-eachChild",
        "linenr": 804,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Node in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The args to call the function with (default to passing the current Node)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Interates the child nodes of this node, calling the specified function with each node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "eachChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Expand this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expand",
        "linenr": 974,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
            "type": "Function",
            "optional": true,
            "name": "recursive"
          },
          {
            "doc": "<p>(Optional) The function to execute once the expand completes</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          },
          {
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Expand this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Expand all the children of this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-expandChildren",
        "linenr": 1024,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to recursively expand all the children</p>\n",
            "type": "Function",
            "optional": true,
            "name": "recursive"
          },
          {
            "doc": "<p>(Optional) The function to execute once all the children are expanded</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          },
          {
            "doc": "<p>(Optional) The scope to run the callback in</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Expand all the children of this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "expandChildren",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Finds the first child that has the attribute with the specified value.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChild",
        "linenr": 824,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The found child or null if none was found</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The attribute name</p>\n",
            "type": "String",
            "optional": false,
            "name": "attribute"
          },
          {
            "doc": "<p>The value to search for</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "deep"
          }
        ],
        "deprecated": null,
        "shortDoc": "Finds the first child that has the attribute with the specified value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "findChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Finds the first child by a custom function. The child matches if the function passed returns <code>true</code>.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-findChildBy",
        "linenr": 837,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The found child or null if none was found</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A function which must return <code>true</code> if the passed Node is the required Node.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Node being tested.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(Optional) True to search through nodes deeper than the immediate children</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "deep"
          }
        ],
        "deprecated": null,
        "shortDoc": "Finds the first child by a custom function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "findChildBy",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the child node at the specified index.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getChildAt",
        "linenr": 697,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.data.NodeInterface"
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
        "shortDoc": "Returns the child node at the specified index. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "getChildAt",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns depth of this node (the root node has a depth of 0)</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getDepth",
        "linenr": 749,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns depth of this node (the root node has a depth of 0) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "getDepth",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the hierarchical path from the root of the current node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-getPath",
        "linenr": 729,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The node path</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The field to construct the path from. Defaults to the model idProperty.</p>\n",
            "type": "String",
            "optional": true,
            "name": "field"
          },
          {
            "doc": "<p>(optional) A separator to use. Defaults to <code>'/'</code>.</p>\n",
            "type": "String",
            "optional": true,
            "name": "separator"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the hierarchical path from the root of the current node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "getPath",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node has one or more child nodes, else false.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-hasChildNodes",
        "linenr": 340,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node has one or more child nodes, else false. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "hasChildNodes",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the index of a child node</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-indexOf",
        "linenr": 720,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The index of the node or -1 if it was not found</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the index of a child node ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "indexOf",
        "owner": "Ext.data.NodeInterface",
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
        "doc": "<p>Inserts the first node before the second node in this nodes childNodes collection.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertBefore",
        "linenr": 570,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The inserted node</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The node to insert</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p>The node to insert before (if null the node is appended)</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "refNode"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts the first node before the second node in this nodes childNodes collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "insertBefore",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Insert a node into this node</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-insertChild",
        "linenr": 652,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The record you just inserted</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The zero-based index to insert the node at</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The node to insert</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Insert a node into this node ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "insertChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed node is an ancestor (at any point) of this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isAncestor",
        "linenr": 874,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed node is an ancestor (at any point) of this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isAncestor",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node has one or more child nodes, or if the <tt>expandable</tt>\nnode attribute is explicitly specified as true, otherwise returns false.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpandable",
        "linenr": 348,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node has one or more child nodes, or if the expandable\nnode attribute is explicitly specified as...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isExpandable",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is expaned</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isExpanded",
        "linenr": 927,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is expaned ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isExpanded",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is the first child of its parent</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isFirst",
        "linenr": 332,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is the first child of its parent ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isFirst",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is the last child of its parent</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLast",
        "linenr": 324,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is the last child of its parent ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isLast",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is a leaf</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLeaf",
        "linenr": 256,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is a leaf ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isLeaf",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is loaded</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoaded",
        "linenr": 935,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is loaded ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isLoaded",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is loading</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isLoading",
        "linenr": 943,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is loading ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isLoading",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is the root node</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isRoot",
        "linenr": 951,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is the root node ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isRoot",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this node is visible</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-isVisible",
        "linenr": 959,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this node is visible ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "isVisible",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes this node from its parent</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-remove",
        "linenr": 668,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "destroy"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes this node from its parent ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all child nodes from this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeAll",
        "linenr": 682,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "destroy"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes all child nodes from this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "removeAll",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes a child node from this node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-removeChild",
        "linenr": 451,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The removed node</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The node to remove</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p><tt>true</tt> to destroy the node upon removal. Defaults to <tt>false</tt>.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "destroy"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes a child node from this node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "removeChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces one child node in this node with another.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-replaceChild",
        "linenr": 706,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "<p>The replaced node</p>\n",
          "type": "Ext.data.NodeInterface"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The replacement node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "newChild"
          },
          {
            "doc": "<p>The node to replace</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "oldChild"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces one child node in this node with another. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "replaceChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sorts this nodes children using the supplied sort function.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-sort",
        "linenr": 890,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A function which, when passed two Nodes, returns -1, 0 or 1 depending upon required sort order.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>Whether or not to apply this sort recursively</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "recursive"
          },
          {
            "doc": "<p>Set to true to not fire a sort event.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "suppressEvent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sorts this nodes children using the supplied sort function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
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
        "doc": "<p>Updates general data of this node like isFirst, isLast, depth. This\nmethod is internally called after a node is moved. This shouldn't\nhave to be called by the developer unless they are creating custom\nTree plugins.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-method-updateInfo",
        "linenr": 282,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Updates general data of this node like isFirst, isLast, depth. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "method",
        "name": "updateInfo",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [
      {
        "doc": "<p>Fires when a new child node is appended</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-append",
        "linenr": 108,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The newly appended node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p>The index of the newly appended node</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a new child node is appended ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "append",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a new child is appended, return false to cancel the append.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeappend",
        "linenr": 144,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The child node to be appended</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a new child is appended, return false to cancel the append. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "beforeappend",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before this node is collapsed.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforecollapse",
        "linenr": 200,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The collapsing node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before this node is collapsed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "beforecollapse",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before this node is expanded.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeexpand",
        "linenr": 193,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The expanding node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before this node is expanded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "beforeexpand",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a new child is inserted, return false to cancel the insert.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeinsert",
        "linenr": 170,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The child node to be inserted</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p>The child node the node is being inserted before</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "refNode"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a new child is inserted, return false to cancel the insert. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "beforeinsert",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before this node is moved to a new location in the tree. Return false to cancel the move.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforemove",
        "linenr": 160,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The parent of this node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "oldParent"
          },
          {
            "doc": "<p>The new parent this node is moving to</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "newParent"
          },
          {
            "doc": "<p>The index it is being moved to</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before this node is moved to a new location in the tree. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "beforemove",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a child is removed, return false to cancel the remove.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-beforeremove",
        "linenr": 152,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The child node to be removed</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a child is removed, return false to cancel the remove. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "beforeremove",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when this node is collapsed.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-collapse",
        "linenr": 186,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The collapsing node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when this node is collapsed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "collapse",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when this node is expanded.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-expand",
        "linenr": 179,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The expanding node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when this node is expanded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "expand",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a new child node is inserted.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-insert",
        "linenr": 135,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The child node inserted</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p>The child node the node was inserted before</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "refNode"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a new child node is inserted. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "insert",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when this node is moved to a new location in the tree</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-move",
        "linenr": 125,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The old parent of this node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "oldParent"
          },
          {
            "doc": "<p>The new parent of this node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "newParent"
          },
          {
            "doc": "<p>The index it was moved to</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when this node is moved to a new location in the tree ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "move",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a child node is removed</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-remove",
        "linenr": 117,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The removed node</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "node"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a child node is removed ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "remove",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when this node's childNodes are sorted.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-event-sort",
        "linenr": 207,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This node.</p>\n",
            "type": "Ext.data.NodeInterface",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The childNodes of this node.</p>\n",
            "type": "Ext.data.NodeInterface[]",
            "optional": false,
            "name": "childNodes"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when this node's childNodes are sorted. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "event",
        "name": "sort",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Object",
        "doc": "<p>An array of this nodes children.  Array will be empty if this node has no chidren.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-childNodes",
        "linenr": 36,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An array of this nodes children. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "property",
        "name": "childNodes",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A reference to this node's first child node. <code>null</code> if this node has no children.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-firstChild",
        "linenr": 31,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A reference to this node's first child node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "property",
        "name": "firstChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A reference to this node's last child node. <code>null</code> if this node has no children.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-lastChild",
        "linenr": 26,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A reference to this node's last child node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "property",
        "name": "lastChild",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A reference to this node's next sibling node. <code>null</code> if this node does not have a next sibling.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-nextSibling",
        "linenr": 11,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A reference to this node's next sibling node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "property",
        "name": "nextSibling",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A reference to this node's parent node. <code>null</code> if this node is the root node.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-parentNode",
        "linenr": 21,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A reference to this node's parent node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "property",
        "name": "parentNode",
        "owner": "Ext.data.NodeInterface",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A reference to this node's previous sibling node. <code>null</code> if this node does not have a previous sibling.</p>\n",
        "href": "NodeInterface.html#Ext-data-NodeInterface-property-previousSibling",
        "linenr": 16,
        "html_filename": "NodeInterface.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A reference to this node's previous sibling node. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
        "private": false,
        "tagname": "property",
        "name": "previousSibling",
        "owner": "Ext.data.NodeInterface",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/NodeInterface.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.NodeInterface",
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