Ext.data.JsonP.Ext_dd_ScrollManager({
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
  "doc": "<p>Provides automatic scrolling of overflow regions in the page during drag operations.</p>\n\n\n<p>The ScrollManager configs will be used as the defaults for any scroll container registered with it,\nbut you can also override most of the configs per scroll container by adding a\n<tt>ddScrollConfig</tt> object to the target element that contains these properties: <a href=\"#/api/Ext.dd.ScrollManager-property-hthresh\" rel=\"Ext.dd.ScrollManager-property-hthresh\" class=\"docClass\">hthresh</a>,\n<a href=\"#/api/Ext.dd.ScrollManager-property-vthresh\" rel=\"Ext.dd.ScrollManager-property-vthresh\" class=\"docClass\">vthresh</a>, <a href=\"#/api/Ext.dd.ScrollManager-property-increment\" rel=\"Ext.dd.ScrollManager-property-increment\" class=\"docClass\">increment</a> and <a href=\"#/api/Ext.dd.ScrollManager-property-frequency\" rel=\"Ext.dd.ScrollManager-property-frequency\" class=\"docClass\">frequency</a>.  Example usage:\n<pre><code>var el = Ext.get('scroll-ct');\nel.ddScrollConfig = {\n    vthresh: 50,\n    hthresh: -1,\n    frequency: 100,\n    increment: 200\n};\nExt.dd.ScrollManager.register(el);\n</code></pre>\n<b>Note: This class uses \"Point Mode\" and is untested in \"Intersect Mode\".</b>\n\n",
  "extends": "Ext.Base",
  "href": "ScrollManager.html#Ext-dd-ScrollManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "ScrollManager.html",
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
        "doc": "<p>Manually trigger a cache refresh.</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-refreshCache",
        "linenr": 213,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Manually trigger a cache refresh. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "method",
        "name": "refreshCache",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Registers new overflow element(s) to auto scroll</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-register",
        "linenr": 136,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of or the element to be scrolled or an array of either</p>\n",
            "type": "String/HTMLElement/Ext.Element/String[]/HTMLElement[]/Ext.Element[]",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Registers new overflow element(s) to auto scroll ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "method",
        "name": "register",
        "owner": "Ext.dd.ScrollManager",
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
        "doc": "<p>Unregisters overflow element(s) so they are no longer scrolled</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-method-unregister",
        "linenr": 152,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of or the element to be removed or an array of either</p>\n",
            "type": "String/HTMLElement/Ext.Element/String[]/HTMLElement[]/Ext.Element[]",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unregisters overflow element(s) so they are no longer scrolled ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "method",
        "name": "unregister",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Number",
        "doc": "<p>The animation duration in seconds -\nMUST BE less than Ext.dd.ScrollManager.frequency! (defaults to .4)</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animDuration",
        "linenr": 199,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "animDuration",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to animate the scroll (defaults to true)</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animate",
        "linenr": 193,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "animate",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The named drag drop <a href=\"#/api/Ext.dd.DragSource-cfg-ddGroup\" rel=\"Ext.dd.DragSource-cfg-ddGroup\" class=\"docClass\">group</a> to which this container belongs (defaults to undefined).\nIf a ddGroup is specified, then container scrolling will only occur when a dragged object is in the same ddGroup.</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-ddGroup",
        "linenr": 206,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The named drag drop group to which this container belongs (defaults to undefined). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "ddGroup",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The frequency of scrolls in milliseconds (defaults to 500)</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-frequency",
        "linenr": 187,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "frequency",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-hthresh",
        "linenr": 174,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (default...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "hthresh",
        "owner": "Ext.dd.ScrollManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of pixels to scroll in each scroll increment (defaults to 100)</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-increment",
        "linenr": 181,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "increment",
        "owner": "Ext.dd.ScrollManager",
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
        "doc": "<p>The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n",
        "href": "ScrollManager.html#Ext-dd-ScrollManager-property-vthresh",
        "linenr": 168,
        "html_filename": "ScrollManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (default...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
        "private": false,
        "tagname": "property",
        "name": "vthresh",
        "owner": "Ext.dd.ScrollManager",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/ScrollManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.dd.ScrollManager",
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