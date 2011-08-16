Ext.data.JsonP.Ext_ModelManager({
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
  "doc": "<p>The ModelManager keeps track of all <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> types defined in your application.</p>\n\n<p><strong>Creating Model Instances</strong></p>\n\n<p>Model instances can be created by using the <a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> method. Ext.create replaces\nthe deprecated <a href=\"#/api/Ext.ModelManager-method-create\" rel=\"Ext.ModelManager-method-create\" class=\"docClass\">Ext.ModelManager.create</a> method. It is also possible to create a model instance\nthis by using the Model type directly. The following 3 snippets are equivalent:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['first', 'last']\n});\n\n// method 1, create using Ext.create (recommended)\nExt.create('User', {\n    first: 'Ed',\n    last: 'Spencer'\n});\n\n// method 2, create through the manager (deprecated)\nExt.ModelManager.create({\n    first: 'Ed',\n    last: 'Spencer'\n}, 'User');\n\n// method 3, create on the type directly\nnew User({\n    first: 'Ed',\n    last: 'Spencer'\n});\n</code></pre>\n\n<p><strong>Accessing Model Types</strong></p>\n\n<p>A reference to a Model type can be obtained by using the <a href=\"#/api/Ext.ModelManager-method-getModel\" rel=\"Ext.ModelManager-method-getModel\" class=\"docClass\">getModel</a> function. Since models types\nare normal classes, you can access the type directly. The following snippets are equivalent:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['first', 'last']\n});\n\n// method 1, access model type through the manager\nvar UserType = Ext.ModelManager.getModel('User');\n\n// method 2, reference the type directly\nvar UserType = User;\n</code></pre>\n",
  "extends": "Ext.AbstractManager",
  "href": "ModelManager.html#Ext-ModelManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "ModelManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Creates a new instance of a Model using the given data.</p>\n\n<p>This method is deprecated.  Use <a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> instead.  For example:</p>\n\n<pre><code>Ext.create('User', {\n    first: 'Ed',\n    last: 'Spencer'\n});\n</code></pre>\n",
        "href": "ModelManager.html#Ext-ModelManager-method-create",
        "linenr": 144,
        "html_filename": "ModelManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Data to initialize the Model's fields with</p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          },
          {
            "doc": "<p>The name of the model to create</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>(Optional) unique id of the Model instance (see <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a new instance of a Model using the given data. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.ModelManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for each item in the collection.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-each",
        "linenr": 116,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope to execute in. Defaults to <tt>this</tt>.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for each item in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an item by id.\nFor additional details see <a href=\"#/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-get",
        "linenr": 29,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The item, <code>undefined</code> if not found.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the item</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns an item by id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the number of items in the collection.</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-getCount",
        "linenr": 133,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The number of items in the collection.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the number of items in the collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "getCount",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for a given model name</p>\n",
        "href": "ModelManager.html#Ext-ModelManager-method-getModel",
        "linenr": 131,
        "html_filename": "ModelManager.html",
        "alias": null,
        "return": {
          "doc": "<p>a model class.</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the model or the model instance.</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the Ext.data.Model for a given model name ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "tagname": "method",
        "name": "getModel",
        "owner": "Ext.ModelManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if an item type is registered.</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-isRegistered",
        "linenr": 65,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "<p>Whether the type is registered.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The mnemonic string by which the class may be looked up</p>\n",
            "type": "String",
            "optional": false,
            "name": "type"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks if an item type is registered. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "isRegistered",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Registers a function that will be called when an item with the specified id is added to the manager. This will happen on instantiation.</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-onAvailable",
        "linenr": 93,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item id</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          },
          {
            "doc": "<p>The callback function. Called with a single parameter, the item.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the item.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Registers a function that will be called when an item with the specified id is added to the manager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "onAvailable",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Registers an item to be managed</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-register",
        "linenr": 39,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to register</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Registers an item to be managed ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "register",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Registers a new item constructor, keyed by a type key.\n\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-registerType",
        "linenr": 55,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The mnemonic string by which the class may be looked up.</p>\n",
            "type": "String",
            "optional": false,
            "name": "type"
          },
          {
            "doc": "<p>The new instance class.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Registers a new item constructor, keyed by a type key. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "registerType",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Unregisters an item by removing it from this manager</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-unregister",
        "linenr": 47,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to unregister</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unregisters an item by removing it from this manager ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "unregister",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>Contains all of the items currently managed</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-property-all",
        "linenr": 19,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "property",
        "name": "all",
        "owner": "Ext.AbstractManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.data.Association[]",
        "doc": "<p>Private stack of associations that must be created once their associated model has been defined</p>\n",
        "href": "ModelManager.html#Ext-ModelManager-property-associationStack",
        "linenr": 65,
        "html_filename": "ModelManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "tagname": "property",
        "name": "associationStack",
        "owner": "Ext.ModelManager",
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
    "Ext.AbstractManager"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.ModelManager",
  "alternateClassNames": [
    "Ext.ModelMgr"
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