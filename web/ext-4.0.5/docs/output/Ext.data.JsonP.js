Ext.data.JsonP.Ext_data_JsonP({
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
  "doc": "<p>This class is used to create JSONP requests. JSONP is a mechanism that allows for making\nrequests for data cross domain. More information is available here:\nhttp://en.wikipedia.org/wiki/JSONP</p>\n",
  "extends": "Ext.Base",
  "href": "JsonP.html#Ext-data-JsonP",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "JsonP.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Abort a request. If the request parameter is not specified all open requests will\nbe aborted.</p>\n",
        "href": "JsonP.html#Ext-data-JsonP-method-abort",
        "linenr": 128,
        "html_filename": "JsonP.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) The request to abort</p>\n",
            "type": "Object/String",
            "optional": true,
            "name": "request"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abort a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "tagname": "method",
        "name": "abort",
        "owner": "Ext.data.JsonP",
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
        "doc": "<p>Makes a JSONP request.</p>\n",
        "href": "JsonP.html#Ext-data-JsonP-method-request",
        "linenr": 52,
        "html_filename": "JsonP.html",
        "alias": null,
        "return": {
          "doc": "<p>request An object containing the request details.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An object which may contain the following properties. Note that options will\ntake priority over any defaults that are specified in the class.</p>\n\n<ul>\n<li><b>url</b> : String <div class=\"sub-desc\">The URL to request.</div></li>\n<li><b>params</b> : Object (Optional)<div class=\"sub-desc\">An object containing a series of\nkey value pairs that will be sent along with the request.</div></li>\n<li><b>timeout</b> : Number (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-timeout\" rel=\"Ext.data.JsonP-property-timeout\" class=\"docClass\">timeout</a></div></li>\n<li><b>callbackKey</b> : String (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-callbackKey\" rel=\"Ext.data.JsonP-property-callbackKey\" class=\"docClass\">callbackKey</a></div></li>\n<li><b>callbackName</b> : String (Optional) <div class=\"sub-desc\">The function name to use for this request.\nBy default this name will be auto-generated: Ext.data.JsonP.callback1, Ext.data.JsonP.callback2, etc.\nSetting this option to \"my_name\" will force the function name to be Ext.data.JsonP.my_name.\nUse this if you want deterministic behavior, but be careful - the callbackName should be different\nin each JsonP request that you make.</div></li>\n<li><b>disableCaching</b> : Boolean (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-disableCaching\" rel=\"Ext.data.JsonP-property-disableCaching\" class=\"docClass\">disableCaching</a></div></li>\n<li><b>disableCachingParam</b> : String (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-disableCachingParam\" rel=\"Ext.data.JsonP-property-disableCachingParam\" class=\"docClass\">disableCachingParam</a></div></li>\n<li><b>success</b> : Function (Optional) <div class=\"sub-desc\">A function to execute if the request succeeds.</div></li>\n<li><b>failure</b> : Function (Optional) <div class=\"sub-desc\">A function to execute if the request fails.</div></li>\n<li><b>callback</b> : Function (Optional) <div class=\"sub-desc\">A function to execute when the request \ncompletes, whether it is a success or failure.</div></li>\n<li><b>scope</b> : Object (Optional)<div class=\"sub-desc\">The scope in\nwhich to execute the callbacks: The \"this\" object for the callback function. Defaults to the browser window.</div></li>\n</ul>\n\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Makes a JSONP request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "tagname": "method",
        "name": "request",
        "owner": "Ext.data.JsonP",
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
        "type": "String",
        "doc": "<p>Specifies the GET parameter that will be sent to the server containing the function name to be executed when\nthe request completes. Defaults to <tt>callback</tt>. Thus, a common request will be in the form of\nurl?callback=Ext.data.JsonP.callback1</p>\n",
        "href": "JsonP.html#Ext-data-JsonP-property-callbackKey",
        "linenr": 43,
        "html_filename": "JsonP.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies the GET parameter that will be sent to the server containing the function name to be executed when\nthe requ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "tagname": "property",
        "name": "callbackKey",
        "owner": "Ext.data.JsonP",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to add a unique cache-buster param to requests. Defaults to <tt>true</tt>.</p>\n",
        "href": "JsonP.html#Ext-data-JsonP-property-disableCaching",
        "linenr": 29,
        "html_filename": "JsonP.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to add a unique cache-buster param to requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "tagname": "property",
        "name": "disableCaching",
        "owner": "Ext.data.JsonP",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Change the parameter which is sent went disabling caching through a cache buster. Defaults to <tt>'_dc'</tt>.</p>\n",
        "href": "JsonP.html#Ext-data-JsonP-property-disableCachingParam",
        "linenr": 36,
        "html_filename": "JsonP.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Change the parameter which is sent went disabling caching through a cache buster. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "tagname": "property",
        "name": "disableCachingParam",
        "owner": "Ext.data.JsonP",
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
        "type": "Number",
        "doc": "<p>A default timeout for any JsonP requests. If the request has not completed in this time the\nfailure callback will be fired. The timeout is in ms. Defaults to <tt>30000</tt>.</p>\n",
        "href": "JsonP.html#Ext-data-JsonP-property-timeout",
        "linenr": 21,
        "html_filename": "JsonP.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A default timeout for any JsonP requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "tagname": "property",
        "name": "timeout",
        "owner": "Ext.data.JsonP",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.JsonP",
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