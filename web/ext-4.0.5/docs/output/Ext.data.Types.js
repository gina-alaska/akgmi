Ext.data.JsonP.Ext_data_Types({
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
  "doc": "<p>This is s static class containing the system-supplied data types which may be given to a <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a>.<p/>\n<p>The properties in this class are used as type indicators in the <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> class, so to\ntest whether a Field is of a certain type, compare the <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> property against properties\nof this class.</p>\n<p>Developers may add their own application-specific data types to this class. Definition names must be UPPERCASE.\neach type definition must contain three properties:</p>\n<div class=\"mdetail-params\"><ul>\n<li><code>convert</code> : <i>Function</i><div class=\"sub-desc\">A function to convert raw data values from a data block into the data\nto be stored in the Field. The function is passed the collowing parameters:\n<div class=\"mdetail-params\"><ul>\n<li><b>v</b> : Mixed<div class=\"sub-desc\">The data value as read by the Reader, if undefined will use\nthe configured <tt><a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></tt>.</div></li>\n<li><b>rec</b> : Mixed<div class=\"sub-desc\">The data object containing the row as read by the Reader.\nDepending on the Reader type, this could be an Array (<a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">ArrayReader</a>), an object\n(<a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>), or an XML element.</div></li>\n</ul></div></div></li>\n<li><code>sortType</code> : <i>Function</i> <div class=\"sub-desc\">A function to convert the stored data into comparable form, as defined by <a href=\"#/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>.</div></li>\n<li><code>type</code> : <i>String</i> <div class=\"sub-desc\">A textual data type name.</div></li>\n</ul></div>\n<p>For example, to create a VELatLong field (See the Microsoft Bing Mapping API) containing the latitude/longitude value of a datapoint on a map from a JsonReader data block\nwhich contained the properties <code>lat</code> and <code>long</code>, you would define a new data type like this:</p>\n<pre><code>// Add a new Field data type which stores a VELatLong object in the Record.\nExt.data.Types.VELATLONG = {\n    convert: function(v, data) {\n        return new VELatLong(data.lat, data.long);\n    },\n    sortType: function(v) {\n        return v.Latitude;  // When sorting, order by latitude\n    },\n    type: 'VELatLong'\n};\n</code></pre>\n<p>Then, when declaring a Model, use \n<pre><code>var types = Ext.data.Types; // allow shorthand type access\nExt.define('Unit',\n    extend: 'Ext.data.Model', \n    fields: [\n        { name: 'unitName', mapping: 'UnitName' },\n        { name: 'curSpeed', mapping: 'CurSpeed', type: types.INT },\n        { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n        { name: 'position', type: types.VELATLONG }\n    ]\n});\n</code></pre>\n\n",
  "extends": "Ext.Base",
  "href": "Types.html#Ext-data-Types",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Types.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

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
        "type": "Object",
        "doc": "<p>This data type means that no conversion is applied to the raw data before it is placed into a Record.</p>\n",
        "href": "Types.html#Ext-data-Types-property-AUTO",
        "linenr": 64,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "AUTO",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOLEAN</code> is equivalent.</p>\n\n",
        "href": "Types.html#Ext-data-Types-property-BOOL",
        "linenr": 117,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into a boolean before it is placed into\na Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "BOOL",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOL</code> is equivalent.</p>\n\n",
        "href": "Types.html#Ext-data-Types-property-BOOLEAN",
        "linenr": 170,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into a boolean before it is placed into\na Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "BOOLEAN",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into a Date before it is placed into a Record.\nThe date format is specified in the constructor of the <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> to which this type is\nbeing applied.</p>\n",
        "href": "Types.html#Ext-data-Types-property-DATE",
        "linenr": 134,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into a Date before it is placed into a Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "DATE",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>NUMBER</code> is equivalent.</p>\n\n",
        "href": "Types.html#Ext-data-Types-property-FLOAT",
        "linenr": 103,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into a number before it is placed into a Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "FLOAT",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INTEGER</code> is equivalent.</p>\n\n",
        "href": "Types.html#Ext-data-Types-property-INT",
        "linenr": 89,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into an integer before it is placed into a Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "INT",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INT</code> is equivalent.</p>\n\n",
        "href": "Types.html#Ext-data-Types-property-INTEGER",
        "linenr": 178,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into an integer before it is placed into a Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "INTEGER",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>FLOAT</code> is equivalent.</p>\n\n",
        "href": "Types.html#Ext-data-Types-property-NUMBER",
        "linenr": 185,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This data type means that the raw data is converted into a number before it is placed into a Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "NUMBER",
        "owner": "Ext.data.Types",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>This data type means that the raw data is converted into a String before it is placed into a Record.</p>\n",
        "href": "Types.html#Ext-data-Types-property-STRING",
        "linenr": 76,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "STRING",
        "owner": "Ext.data.Types",
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
        "type": "RegExp",
        "doc": "<p>A regular expression for stripping non-numeric characters from a numeric value. Defaults to <tt>/[\\$,%]/g</tt>.\nThis should be overridden for localization.</p>\n",
        "href": "Types.html#Ext-data-Types-property-stripRe",
        "linenr": 57,
        "html_filename": "Types.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A regular expression for stripping non-numeric characters from a numeric value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "tagname": "property",
        "name": "stripRe",
        "owner": "Ext.data.Types",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.Types",
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