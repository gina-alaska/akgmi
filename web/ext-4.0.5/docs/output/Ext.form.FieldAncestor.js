Ext.data.JsonP.Ext_form_FieldAncestor({
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
  "doc": "<p>A mixin for <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a> components that are likely to have form fields in their\nitems subtree. Adds the following capabilities:</p>\n\n<ul>\n<li>Methods for handling the addition and removal of <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> and <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a>\ninstances at any depth within the container.</li>\n<li>Events (<a href=\"#/api/Ext.form.FieldAncestor-event-fieldvaliditychange\" rel=\"Ext.form.FieldAncestor-event-fieldvaliditychange\" class=\"docClass\">fieldvaliditychange</a> and <a href=\"#/api/Ext.form.FieldAncestor-event-fielderrorchange\" rel=\"Ext.form.FieldAncestor-event-fielderrorchange\" class=\"docClass\">fielderrorchange</a>) for handling changes to the state\nof individual fields at the container level.</li>\n<li>Automatic application of <a href=\"#/api/Ext.form.FieldAncestor-cfg-fieldDefaults\" rel=\"Ext.form.FieldAncestor-cfg-fieldDefaults\" class=\"docClass\">fieldDefaults</a> config properties to each field added within the\ncontainer, to facilitate uniform configuration of all fields.</li>\n</ul>\n\n\n<p>This mixin is primarily for internal use by <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> and <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>,\nand should not normally need to be used directly.</p>\n",
  "extends": "Ext.Base",
  "href": "FieldAncestor.html#Ext-form-FieldAncestor",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "FieldAncestor.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Object",
        "doc": "<p>If specified, the properties in this object are used as default config values for each\n<a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> instance (e.g. <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> or <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>)\nthat is added as a descendant of this container. Corresponding values specified in an individual field's\nown configuration, or from the <a href=\"#/api/Ext.container.Container-cfg-defaults\" rel=\"Ext.container.Container-cfg-defaults\" class=\"docClass\">defaults config</a> of its parent container,\nwill take precedence. See the documentation for <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> to see what config\noptions may be specified in the <tt>fieldDefaults</tt>.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>new Ext.form.Panel({\n    fieldDefaults: {\n        labelAlign: 'left',\n        labelWidth: 100\n    },\n    items: [{\n        xtype: 'fieldset',\n        defaults: {\n            labelAlign: 'top'\n        },\n        items: [{\n            name: 'field1'\n        }, {\n            name: 'field2'\n        }]\n    }, {\n        xtype: 'fieldset',\n        items: [{\n            name: 'field3',\n            labelWidth: 150\n        }, {\n            name: 'field4'\n        }]\n    }]\n});</code></pre>\n\n\n<p>In this example, field1 and field2 will get labelAlign:'top' (from the fieldset's <tt>defaults</tt>)\nand labelWidth:100 (from <tt>fieldDefaults</tt>), field3 and field4 will both get labelAlign:'left' (from\n<tt>fieldDefaults</tt> and field3 will use the labelWidth:150 from its own config.</p>\n\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-cfg-fieldDefaults",
        "linenr": 22,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If specified, the properties in this object are used as default config values for each\nExt.form.Labelable instance (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "cfg",
        "name": "fieldDefaults",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
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
        "doc": "<p>Initializes the FieldAncestor's state; this must be called from the initComponent method\nof any components importing this mixin.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-method-initFieldAncestor",
        "linenr": 62,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Initializes the FieldAncestor's state; this must be called from the initComponent method\nof any components importing ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "method",
        "name": "initFieldAncestor",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when a <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> instance is added to the container's subtree.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-method-onFieldAdded",
        "linenr": 147,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The field which was added</p>\n",
            "type": "Ext.form.field.Field",
            "optional": false,
            "name": "field"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when a Ext.form.field.Field instance is added to the container's subtree. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "method",
        "name": "onFieldAdded",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when a <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> instance is removed from the container's subtree.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-method-onFieldRemoved",
        "linenr": 165,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The field which was removed</p>\n",
            "type": "Ext.form.field.Field",
            "optional": false,
            "name": "field"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when a Ext.form.field.Field instance is removed from the container's subtree. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "method",
        "name": "onFieldRemoved",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when a <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> instance is added to the container's subtree.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-method-onLabelableAdded",
        "linenr": 134,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The instance that was added</p>\n",
            "type": "Ext.form.Labelable",
            "optional": false,
            "name": "labelable"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when a Ext.form.Labelable instance is added to the container's subtree. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "method",
        "name": "onLabelableAdded",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when a <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a> instance is removed from the container's subtree.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-method-onLabelableRemoved",
        "linenr": 156,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The instance that was removed</p>\n",
            "type": "Ext.form.Labelable",
            "optional": false,
            "name": "labelable"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when a Ext.form.Labelable instance is removed from the container's subtree. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "method",
        "name": "onLabelableRemoved",
        "owner": "Ext.form.FieldAncestor",
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
      {
        "doc": "<p>Fires when the active error message is changed for any one of the <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">Ext.form.Labelable</a>\ninstances within this container.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-event-fielderrorchange",
        "linenr": 81,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.FieldAncestor",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>Labelable instance whose active error was changed</p>\n",
            "type": "Ext.form.Labelable",
            "optional": false,
            "name": "The"
          },
          {
            "doc": "<p>The active error message</p>\n",
            "type": "String",
            "optional": false,
            "name": "error"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the active error message is changed for any one of the Ext.form.Labelable\ninstances within this container. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "event",
        "name": "fielderrorchange",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the validity state of any one of the <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a> instances within this\ncontainer changes.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-event-fieldvaliditychange",
        "linenr": 71,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.FieldAncestor",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>Field instance whose validity changed</p>\n",
            "type": "Ext.form.Labelable",
            "optional": false,
            "name": "The"
          },
          {
            "doc": "<p>The field's new validity state</p>\n",
            "type": "String",
            "optional": false,
            "name": "isValid"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the validity state of any one of the Ext.form.field.Field instances within this\ncontainer changes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "event",
        "name": "fieldvaliditychange",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Object",
        "doc": "<p>Fired when the error message of any field within the container changes.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-property-onFieldErrorChange",
        "linenr": 199,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "protected": true,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "property",
        "name": "onFieldErrorChange",
        "owner": "Ext.form.FieldAncestor",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Fired when the validity of any field within the container changes.</p>\n",
        "href": "FieldAncestor.html#Ext-form-FieldAncestor-property-onFieldValidityChange",
        "linenr": 192,
        "html_filename": "FieldAncestor.html",
        "alias": null,
        "protected": true,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
        "private": false,
        "tagname": "property",
        "name": "onFieldValidityChange",
        "owner": "Ext.form.FieldAncestor",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/FieldAncestor.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.form.FieldAncestor",
  "alternateClassNames": [

  ],
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "static": false,
  "author": null,
  "mixedInto": [
    "Ext.form.Panel",
    "Ext.form.FieldContainer"
  ],
  "inheritable": false,
  "xtypes": [

  ]
});