Ext.data.JsonP.Ext_data_Operation({
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
  "doc": "<p>Represents a single read or write operation performed by a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>. Operation objects are\nused to enable communication between Stores and Proxies. Application developers should rarely need to interact with\nOperation objects directly.</p>\n\n<p>Several Operations can be batched together in a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">batch</a>.</p>\n",
  "extends": "Ext.Base",
  "href": "Operation.html#Ext-data-Operation",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Operation.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-action",
        "linenr": 18,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The action being performed by this Operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "action",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.data.Batch",
        "doc": "<p>The batch that this Operation is a part of.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-batch",
        "linenr": 54,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "batch",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>Function to execute when operation completed.  Will be called with the following parameters:</p>\n\n<ul>\n<li>records : Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects.</li>\n<li>operation : The Ext.data.Operation itself.</li>\n<li>success : True when operation completed successfully.</li>\n</ul>\n\n",
        "href": "Operation.html#Ext-data-Operation-cfg-callback",
        "linenr": 60,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Function to execute when operation completed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "callback",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.Filter[]",
        "doc": "<p>Optional array of filter objects. Only applies to 'read' actions.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-filters",
        "linenr": 24,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional array of filter objects. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "filters",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.Grouper",
        "doc": "<p>Optional grouping configuration. Only applies to 'read' actions where grouping is desired.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-group",
        "linenr": 36,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional grouping configuration. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "group",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of records to load. Used on 'read' actions when paging is being used.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-limit",
        "linenr": 48,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of records to load. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "limit",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Scope for the <a href=\"#/api/Ext.data.Operation-cfg-callback\" rel=\"Ext.data.Operation-cfg-callback\" class=\"docClass\">callback</a> function.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-scope",
        "linenr": 70,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "scope",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.Sorter[]",
        "doc": "<p>Optional array of sorter objects. Only applies to 'read' actions.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-sorters",
        "linenr": 30,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional array of sorter objects. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "sorters",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The start index (offset), used in paging when running a 'read' action.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-start",
        "linenr": 42,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "start",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if this Operation is to be executed synchronously (defaults to true). This property is inspected by a\n<a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Batch</a> to see if a series of Operations can be executed in parallel or not.</p>\n",
        "href": "Operation.html#Ext-data-Operation-cfg-synchronous",
        "linenr": 11,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if this Operation is to be executed synchronously (defaults to true). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "cfg",
        "name": "synchronous",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Operation object.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-constructor",
        "linenr": 134,
        "html_filename": "Operation.html",
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
        "shortDoc": "Creates new Operation object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks whether this operation should cause writing to occur.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-allowWrite",
        "linenr": 296,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>Whether the operation should cause a write to occur.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Checks whether this operation should cause writing to occur. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "allowWrite",
        "owner": "Ext.data.Operation",
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
        "doc": "<p>This method is called to commit data to this instance's records given the records in\nthe server response. This is followed by calling <a href=\"#/api/Ext.data.Model-method-commit\" rel=\"Ext.data.Model-method-commit\" class=\"docClass\">Ext.data.Model.commit</a> on all\nthose records (for 'create' and 'update' actions).</p>\n\n<p>If this <a href=\"#/api/Ext.data.Operation-cfg-action\" rel=\"Ext.data.Operation-cfg-action\" class=\"docClass\">action</a> is 'destroy', any server records are ignored and the\n<a href=\"#/api/Ext.data.Model-method-commit\" rel=\"Ext.data.Model-method-commit\" class=\"docClass\">Ext.data.Model.commit</a> method is not called.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-commitRecords",
        "linenr": 142,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects returned by\nthe server.</p>\n",
            "type": "Ext.data.Model[]",
            "optional": false,
            "name": "serverRecords"
          }
        ],
        "deprecated": null,
        "shortDoc": "This method is called to commit data to this instance's records given the records in\nthe server response. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "commitRecords",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n",
        "href": "Operation.html#Ext-data-Operation-method-getError",
        "linenr": 227,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>The error object</p>\n",
          "type": "String/Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the error string or object that was set using setException ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "getError",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-getRecords",
        "linenr": 235,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>Any loaded Records</p>\n",
          "type": "Ext.data.Model[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns an array of Ext.data.Model instances as set by the Proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "getRecords",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the ResultSet object (if set by the Proxy). This object will contain the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a>\ninstances as well as meta data such as number of instances fetched, number available etc</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-getResultSet",
        "linenr": 245,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>The ResultSet object</p>\n",
          "type": "Ext.data.ResultSet"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the ResultSet object (if set by the Proxy). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "getResultSet",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-hasException",
        "linenr": 219,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>True if there was an exception</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this Operation encountered an exception (see also getError) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "hasException",
        "owner": "Ext.data.Operation",
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
        "doc": "<p>Returns true if the Operation has been completed</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-isComplete",
        "linenr": 271,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the Operation is complete</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the Operation has been completed ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "isComplete",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-isRunning",
        "linenr": 263,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the Operation is currently running</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the Operation has been started but has not yet completed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "isRunning",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the Operation has been started. Note that the Operation may have started AND completed, see\n<a href=\"#/api/Ext.data.Operation-method-isRunning\" rel=\"Ext.data.Operation-method-isRunning\" class=\"docClass\">isRunning</a> to test if the Operation is currently running.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-isStarted",
        "linenr": 254,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the Operation has started</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the Operation has been started. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "isStarted",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Marks the Operation as completed.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-setCompleted",
        "linenr": 193,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Marks the Operation as completed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "setCompleted",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-setException",
        "linenr": 208,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) error string/object</p>\n",
            "type": "String/Object",
            "optional": true,
            "name": "error"
          }
        ],
        "deprecated": null,
        "shortDoc": "Marks the Operation as having experienced an exception. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "setException",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Marks the Operation as started.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-setStarted",
        "linenr": 185,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Marks the Operation as started. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "setStarted",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Marks the Operation as successful.</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-setSuccessful",
        "linenr": 201,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Marks the Operation as successful. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "setSuccessful",
        "owner": "Ext.data.Operation",
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
        "doc": "<p>Returns true if the Operation has completed and was successful</p>\n",
        "href": "Operation.html#Ext-data-Operation-method-wasSuccessful",
        "linenr": 279,
        "html_filename": "Operation.html",
        "alias": null,
        "return": {
          "doc": "<p>True if successful</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the Operation has completed and was successful ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "method",
        "name": "wasSuccessful",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "RegExp",
        "doc": "<p>The RegExp used to categorize actions that require record commits. This defaults to\nmatch 'create' and 'update'.</p>\n",
        "href": "Operation.html#Ext-data-Operation-property-actionCommitRecordsRe",
        "linenr": 120,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The RegExp used to categorize actions that require record commits. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "property",
        "name": "actionCommitRecordsRe",
        "owner": "Ext.data.Operation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "RegExp",
        "doc": "<p>The RegExp used to categorize actions that skip local record synchronization. This defaults\nto match 'destroy'.</p>\n",
        "href": "Operation.html#Ext-data-Operation-property-actionSkipSyncRe",
        "linenr": 127,
        "html_filename": "Operation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The RegExp used to categorize actions that skip local record synchronization. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "tagname": "property",
        "name": "actionSkipSyncRe",
        "owner": "Ext.data.Operation",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.Operation",
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