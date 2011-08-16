Ext.data.JsonP.Ext_util_Cookies({
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
  "doc": "<p>Utility class for setting/reading values from browser cookies.\nValues can be written using the <a href=\"#/api/Ext.util.Cookies-method-set\" rel=\"Ext.util.Cookies-method-set\" class=\"docClass\">set</a> method.\nValues can be read using the <a href=\"#/api/Ext.util.Cookies-method-get\" rel=\"Ext.util.Cookies-method-get\" class=\"docClass\">get</a> method.\nA cookie can be invalidated on the client machine using the <a href=\"#/api/Ext.util.Cookies-method-clear\" rel=\"Ext.util.Cookies-method-clear\" class=\"docClass\">clear</a> method.</p>\n",
  "extends": "Ext.Base",
  "href": "Cookies.html#Ext-util-Cookies",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Cookies.html",
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
        "doc": "<p>Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the past.</p>\n",
        "href": "Cookies.html#Ext-util-Cookies-method-clear",
        "linenr": 80,
        "html_filename": "Cookies.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the cookie to remove</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>(optional) The path for the cookie. This must be included if you included a path while setting the cookie.</p>\n",
            "type": "String",
            "optional": true,
            "name": "path"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the p...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Cookies.js",
        "private": false,
        "tagname": "method",
        "name": "clear",
        "owner": "Ext.util.Cookies",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves cookies that are accessible by the current page. If a cookie\ndoes not exist, <code>get()</code> returns <tt>null</tt>.  The following\nexample retrieves the cookie called \"valid\" and stores the String value\nin the variable <tt>validStatus</tt>.</p>\n\n<pre><code>var validStatus = Ext.util.Cookies.get(\"valid\");\n</code></pre>\n\n",
        "href": "Cookies.html#Ext-util-Cookies-method-get",
        "linenr": 48,
        "html_filename": "Cookies.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the cookie value for the specified name;\nnull if the cookie name does not exist.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the cookie to get</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": null,
        "shortDoc": "Retrieves cookies that are accessible by the current page. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Cookies.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.util.Cookies",
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
        "doc": "<p>Create a cookie with the specified name and value. Additional settings\nfor the cookie may be optionally specified (for example: expiration,\naccess restriction, SSL).</p>\n",
        "href": "Cookies.html#Ext-util-Cookies-method-set",
        "linenr": 15,
        "html_filename": "Cookies.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the cookie to set.</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>The value to set for the cookie.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(Optional) Specify an expiration date the\ncookie is to persist until.  Note that the specified Date object will\nbe converted to Greenwich Mean Time (GMT).</p>\n",
            "type": "Object",
            "optional": true,
            "name": "expires"
          },
          {
            "doc": "<p>(Optional) Setting a path on the cookie restricts\naccess to pages that match that path. Defaults to all pages (<tt>'/'</tt>).</p>\n",
            "type": "String",
            "optional": true,
            "name": "path"
          },
          {
            "doc": "<p>(Optional) Setting a domain restricts access to\npages on a given domain (typically used to allow cookie access across\nsubdomains). For example, \"sencha.com\" will create a cookie that can be\naccessed from any subdomain of sencha.com, including www.sencha.com,\nsupport.sencha.com, etc.</p>\n",
            "type": "String",
            "optional": true,
            "name": "domain"
          },
          {
            "doc": "<p>(Optional) Specify true to indicate that the cookie\nshould only be accessible via SSL on a page using the HTTPS protocol.\nDefaults to <tt>false</tt>. Note that this will only work if the page\ncalling this code uses the HTTPS protocol, otherwise the cookie will be\ncreated with default options.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "secure"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create a cookie with the specified name and value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Cookies.js",
        "private": false,
        "tagname": "method",
        "name": "set",
        "owner": "Ext.util.Cookies",
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
  "singleton": true,
  "protected": false,
  "superclasses": [
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Cookies.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Cookies",
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