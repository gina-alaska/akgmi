Ext.data.JsonP.Ext_data_SortTypes({
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
  "doc": "<p>This class defines a series of static methods that are used on a\n<a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> for performing sorting. The methods cast the\nunderlying values into a data type that is appropriate for sorting on\nthat particular field.  If a <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">Ext.data.Field.type</a> is specified,\nthe sortType will be set to a sane default if the sortType is not\nexplicitly defined on the field. The sortType will make any necessary\nmodifications to the value and return it.</p>\n\n<ul>\n<li><b>asText</b> - Removes any tags and converts the value to a string</li>\n<li><b>asUCText</b> - Removes any tags and converts the value to an uppercase string</li>\n<li><b>asUCText</b> - Converts the value to an uppercase string</li>\n<li><b>asDate</b> - Converts the value into Unix epoch time</li>\n<li><b>asFloat</b> - Converts the value to a floating point number</li>\n<li><b>asInt</b> - Converts the value to an integer number</li>\n</ul>\n\n\n<p>\nIt is also possible to create a custom sortType that can be used throughout\nan application.\n<pre><code>Ext.apply(Ext.data.SortTypes, {\n    asPerson: function(person){\n        // expects an object with a first and last name property\n        return person.lastName.toUpperCase() + person.firstName.toLowerCase();\n    }    \n});\n\nExt.define('Employee', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'person',\n        sortType: 'asPerson'\n    }, {\n        name: 'salary',\n        type: 'float' // sortType set to asFloat\n    }]\n});\n</code></pre>\n</p>\n\n",
  "extends": "Ext.Base",
  "href": "SortTypes.html#Ext-data-SortTypes",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "SortTypes.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Date sorting</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-asDate",
        "linenr": 91,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Date sorting ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "asDate",
        "owner": "Ext.data.SortTypes",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Float sorting</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-asFloat",
        "linenr": 106,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Float sorting ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "asFloat",
        "owner": "Ext.data.SortTypes",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Integer sorting</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-asInt",
        "linenr": 116,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Integer sorting ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "asInt",
        "owner": "Ext.data.SortTypes",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Strips all HTML tags to sort on text only</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-asText",
        "linenr": 64,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Strips all HTML tags to sort on text only ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "asText",
        "owner": "Ext.data.SortTypes",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Case insensitive string</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-asUCString",
        "linenr": 82,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Case insensitive string ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "asUCString",
        "owner": "Ext.data.SortTypes",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Strips all HTML tags to sort on text only - Case insensitive</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-asUCText",
        "linenr": 73,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Strips all HTML tags to sort on text only - Case insensitive ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "asUCText",
        "owner": "Ext.data.SortTypes",
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
        "doc": "<p>Default sort that does nothing</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-method-none",
        "linenr": 48,
        "html_filename": "SortTypes.html",
        "alias": null,
        "return": {
          "doc": "<p>The comparison value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value being converted</p>\n",
            "type": "Object",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Default sort that does nothing ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "method",
        "name": "none",
        "owner": "Ext.data.SortTypes",
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
      },
      {
        "type": "RegExp",
        "doc": "<p>The regular expression used to strip tags</p>\n",
        "href": "SortTypes.html#Ext-data-SortTypes-property-stripTagsRE",
        "linenr": 57,
        "html_filename": "SortTypes.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
        "private": false,
        "tagname": "property",
        "name": "stripTagsRE",
        "owner": "Ext.data.SortTypes",
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
  "singleton": true,
  "protected": false,
  "superclasses": [
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/SortTypes.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.SortTypes",
  "alternateClassNames": [

  ],
  "docauthor": "Evan Trimboli <evan@sencha.com>",
  "static": false,
  "author": null,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});