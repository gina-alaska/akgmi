Ext.data.JsonP.Ext_util_CSS({
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
  "doc": "<p>Utility class for manipulating CSS rules</p>\n",
  "extends": "Ext.Base",
  "href": "CSS.html#Ext-util-CSS",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "CSS.html",
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
        "doc": "<p>Creates a stylesheet from a text blob of rules.\nThese rules will be wrapped in a STYLE tag and appended to the HEAD of the document.</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-createStyleSheet",
        "linenr": 22,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "CSSStyleSheet"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text containing the css rules</p>\n",
            "type": "String",
            "optional": false,
            "name": "cssText"
          },
          {
            "doc": "<p>An id to add to the stylesheet for later removal</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a stylesheet from a text blob of rules. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "createStyleSheet",
        "owner": "Ext.util.CSS",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets an an individual CSS rule by selector(s)</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-getRule",
        "linenr": 141,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "<p>The CSS rule or null if one is not found</p>\n",
          "type": "CSSStyleRule"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS selector or an array of selectors to try. The first selector that is found is returned.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>true to refresh the internal cache if you have recently updated any rules or added styles dynamically</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "refreshCache"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets an an individual CSS rule by selector(s) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "getRule",
        "owner": "Ext.util.CSS",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets all css rules for the document</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-getRules",
        "linenr": 118,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "<p>An object (hash) of rules indexed by selector</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>true to refresh the internal cache</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "refreshCache"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets all css rules for the document ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "getRules",
        "owner": "Ext.util.CSS",
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
        "doc": "<p>Refresh the rule cache if you have dynamically added stylesheets</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-refreshCache",
        "linenr": 83,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "<p>An object (hash) of rules indexed by selector</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Refresh the rule cache if you have dynamically added stylesheets ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "refreshCache",
        "owner": "Ext.util.CSS",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes a style or link tag by id</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-removeStyleSheet",
        "linenr": 56,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the tag</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes a style or link tag by id ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "removeStyleSheet",
        "owner": "Ext.util.CSS",
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
        "doc": "<p>Dynamically swaps an existing stylesheet reference for a new one</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-swapStyleSheet",
        "linenr": 67,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of an existing link tag to remove</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          },
          {
            "doc": "<p>The href of the new stylesheet to include</p>\n",
            "type": "String",
            "optional": false,
            "name": "url"
          }
        ],
        "deprecated": null,
        "shortDoc": "Dynamically swaps an existing stylesheet reference for a new one ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "swapStyleSheet",
        "owner": "Ext.util.CSS",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Updates a rule property</p>\n",
        "href": "CSS.html#Ext-util-CSS-method-updateRule",
        "linenr": 160,
        "html_filename": "CSS.html",
        "alias": null,
        "return": {
          "doc": "<p>true If a rule was found and updated</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>If it's an array it tries each selector until it finds one. Stops immediately once one is found.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>The css property</p>\n",
            "type": "String",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>The new value for the property</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Updates a rule property ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
        "private": false,
        "tagname": "method",
        "name": "updateRule",
        "owner": "Ext.util.CSS",
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
  "singleton": true,
  "protected": false,
  "superclasses": [
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/CSS.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.CSS",
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