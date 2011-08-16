Ext.data.JsonP.Ext_WindowManager({
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
  "doc": "<p>The default global floating Component group that is available automatically.</p>\n\n\n<p>This manages instances of floating Components which were rendered programatically without\nbeing added to a <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>, and for floating Components which were added into non-floating Containers.</p>\n\n\n<p><i>Floating</i> Containers create their own instance of ZIndexManager, and floating Components added at any depth below\nthere are managed by that ZIndexManager.</p>\n\n",
  "extends": "Ext.ZIndexManager",
  "href": "ZIndexManager.html#Ext-WindowManager",
  "allMixins": [

  ],
  "linenr": 412,
  "html_filename": "ZIndexManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Brings the specified Component to the front of any other active Components in this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-bringToFront",
        "linenr": 229,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the dialog was brought to the front, else false\nif it was already in front</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Brings the specified Component to the front of any other active Components in this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "bringToFront",
        "owner": "Ext.ZIndexManager",
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
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-each",
        "linenr": 347,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Component in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the bottom and proceeding to the top.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachBottomUp",
        "linenr": 363,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "eachBottomUp",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the top and proceeding to the bottom.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachTopDown",
        "linenr": 384,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "eachTopDown",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets a registered Component by id.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-get",
        "linenr": 220,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets a registered Component by id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the currently-active Component in this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-getActive",
        "linenr": 315,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The active Component</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the currently-active Component in this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "getActive",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns zero or more Components in this ZIndexManager using the custom search function passed to this method.\nThe function should accept a single <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> reference as its only argument and should\nreturn true if the Component matches the search criteria, otherwise it should return false.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-getBy",
        "linenr": 323,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>An array of zero or more matching windows</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The search function</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component being tested.\nthat gets passed to the function if not specified)</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns zero or more Components in this ZIndexManager using the custom search function passed to this method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "getBy",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides all Components managed by this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-hideAll",
        "linenr": 262,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Hides all Components managed by this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "hideAll",
        "owner": "Ext.ZIndexManager",
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
        "doc": "<p>Registers a floating <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> with this ZIndexManager. This should not\nneed to be called under normal circumstances. Floating Components (such as Windows, BoundLists and Menus) are automatically registered\nwith a <a href=\"#/api/Ext.Component-property-zIndexManager\" rel=\"Ext.Component-property-zIndexManager\" class=\"docClass\">zIndexManager</a> at render time.</p>\n\n\n<p>Where this may be useful is moving Windows between two ZIndexManagers. For example,\nto bring the <a href=\"#/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a> dialog under the same manager as the Desktop's\nZIndexManager in the desktop sample app:</p>\n\n\n<p><code></p>\n\n<pre>MyDesktop.getDesktop().getManager().register(Ext.MessageBox);\n</pre>\n\n\n<p></code></p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-register",
        "linenr": 180,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Component to register.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Registers a floating Ext.Component with this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "register",
        "owner": "Ext.ZIndexManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sends the specified Component to the back of other active Components in this ZIndexManager.</p>\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-sendToBack",
        "linenr": 249,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The Component</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sends the specified Component to the back of other active Components in this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "sendToBack",
        "owner": "Ext.ZIndexManager",
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
        "doc": "<p>Unregisters a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> from this ZIndexManager. This should not\nneed to be called. Components are automatically unregistered upon destruction.\nSee <a href=\"#/api/Ext.WindowManager-method-register\" rel=\"Ext.WindowManager-method-register\" class=\"docClass\">register</a>.</p>\n\n",
        "href": "ZIndexManager.html#Ext-ZIndexManager-method-unregister",
        "linenr": 202,
        "html_filename": "ZIndexManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Component to unregister.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "comp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unregisters a Ext.Component from this ZIndexManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
        "private": false,
        "tagname": "method",
        "name": "unregister",
        "owner": "Ext.ZIndexManager",
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
    "Ext.Base",
    "Ext.ZIndexManager"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/ZIndexManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.WindowManager",
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