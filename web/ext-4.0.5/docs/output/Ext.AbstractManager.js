Ext.data.JsonP.Ext_AbstractManager({
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
  "doc": "<p>Base Manager class</p>\n",
  "extends": "Object",
  "href": "AbstractManager.html#Ext-AbstractManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "AbstractManager.html",
  "subclasses": [
    "Ext.ModelManager",
    "Ext.PluginManager",
    "Ext.ComponentManager"
  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Creates and returns an instance of whatever this manager manages, based on the supplied type and config object</p>\n",
        "href": "AbstractManager.html#Ext-AbstractManager-method-create",
        "linenr": 74,
        "html_filename": "AbstractManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The instance of whatever this manager is managing</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>If no type is discovered in the config object, we fall back to this type</p>\n",
            "type": "String",
            "optional": false,
            "name": "defaultType"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates and returns an instance of whatever this manager manages, based on the supplied type and config object ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.AbstractManager",
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

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.AbstractManager",
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