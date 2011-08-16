Ext.data.JsonP.Ext_dd_Registry({
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
  "doc": "<p>Provides easy access to all drag drop components that are registered on a page.  Items can be retrieved either\ndirectly by DOM node id, or by passing in the drag drop event that occurred and looking up the event target.</p>\n",
  "extends": "Ext.Base",
  "href": "Registry.html#Ext-dd-Registry",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Registry.html",
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
        "doc": "<p>Returns the handle registered for a DOM Node by id</p>\n",
        "href": "Registry.html#Ext-dd-Registry-method-getHandle",
        "linenr": 79,
        "html_filename": "Registry.html",
        "alias": null,
        "return": {
          "doc": "<p>handle The custom handle data</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The DOM node or id to look up</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the handle registered for a DOM Node by id ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
        "private": false,
        "tagname": "method",
        "name": "getHandle",
        "owner": "Ext.dd.Registry",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the handle that is registered for the DOM node that is the target of the event</p>\n",
        "href": "Registry.html#Ext-dd-Registry-method-getHandleFromEvent",
        "linenr": 91,
        "html_filename": "Registry.html",
        "alias": null,
        "return": {
          "doc": "<p>handle The custom handle data</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the handle that is registered for the DOM node that is the target of the event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
        "private": false,
        "tagname": "method",
        "name": "getHandleFromEvent",
        "owner": "Ext.dd.Registry",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a custom data object that is registered for a DOM node by id</p>\n",
        "href": "Registry.html#Ext-dd-Registry-method-getTarget",
        "linenr": 101,
        "html_filename": "Registry.html",
        "alias": null,
        "return": {
          "doc": "<p>data The custom data</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The DOM node or id to look up</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a custom data object that is registered for a DOM node by id ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
        "private": false,
        "tagname": "method",
        "name": "getTarget",
        "owner": "Ext.dd.Registry",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a custom data object that is registered for the DOM node that is the target of the event</p>\n",
        "href": "Registry.html#Ext-dd-Registry-method-getTargetFromEvent",
        "linenr": 113,
        "html_filename": "Registry.html",
        "alias": null,
        "return": {
          "doc": "<p>data The custom data</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a custom data object that is registered for the DOM node that is the target of the event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
        "private": false,
        "tagname": "method",
        "name": "getTargetFromEvent",
        "owner": "Ext.dd.Registry",
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
        "doc": "<p>Resgister a drag drop element</p>\n",
        "href": "Registry.html#Ext-dd-Registry-method-register",
        "linenr": 27,
        "html_filename": "Registry.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id or DOM node to register</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "element"
          },
          {
            "doc": "<p>(optional) An custom data object that will be passed between the elements that are involved\nin drag drop operations.  You can populate this object with any arbitrary properties that your own code\nknows how to interpret, plus there are some specific properties known to the Registry that should be\npopulated in the data object (if applicable):</p>\n\n<pre>Value      Description<br />\n---------  ------------------------------------------<br />\nhandles    Array of DOM nodes that trigger dragging<br />\n           for the element being registered<br />\nisHandle   True if the element passed in triggers<br />\n           dragging itself, else false\n</pre>\n\n",
            "type": "Object",
            "optional": true,
            "name": "data"
          }
        ],
        "deprecated": null,
        "shortDoc": "Resgister a drag drop element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
        "private": false,
        "tagname": "method",
        "name": "register",
        "owner": "Ext.dd.Registry",
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
        "doc": "<p>Unregister a drag drop element</p>\n",
        "href": "Registry.html#Ext-dd-Registry-method-unregister",
        "linenr": 61,
        "html_filename": "Registry.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id or DOM node to unregister</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "element"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unregister a drag drop element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
        "private": false,
        "tagname": "method",
        "name": "unregister",
        "owner": "Ext.dd.Registry",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/Registry.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.dd.Registry",
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