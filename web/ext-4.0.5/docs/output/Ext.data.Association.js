Ext.data.JsonP.Ext_data_Association({
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
  "doc": "<p>Associations enable you to express relationships between different <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>. Let's say we're\nwriting an ecommerce system where Users can make Orders - there's a relationship between these Models that we can\nexpress like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email'],\n\n    hasMany: {model: 'Order', name: 'orders'}\n});\n\nExt.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'user_id', 'status', 'price'],\n\n    belongsTo: 'User'\n});\n</code></pre>\n\n\n\n\n<p>We've set up two models - User and Order - and told them about each other. You can set up as many associations on\neach Model as you need using the two default types - <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany</a> and\n<a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo</a>. There's much more detail on the usage of each of those inside their\ndocumentation pages. If you're not familiar with Models already, <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">there is plenty on those too</a>.</p>\n\n\n\n\n<p><u>Further Reading</u></p>\n\n\n\n\n<ul style=\"list-style-type: disc; padding-left: 20px;\">\n  <li><a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany associations</a>\n  <li><a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo associations</a>\n  <li><a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">using Models</a>\n</ul>\n\n\n<p><b>Self association models</b></p>\n\n<p>We can also have models that create parent/child associations between the same type. Below is an example, where\ngroups can be nested inside other groups:</p>\n\n\n<pre><code>\n// Server Data\n{\n    \"groups\": {\n        \"id\": 10,\n        \"parent_id\": 100,\n        \"name\": \"Main Group\",\n        \"parent_group\": {\n            \"id\": 100,\n            \"parent_id\": null,\n            \"name\": \"Parent Group\"\n        },\n        \"child_groups\": [{\n            \"id\": 2,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 1\"\n        },{\n            \"id\": 3,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 2\"\n        },{\n            \"id\": 4,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 3\"\n        }]\n    }\n}\n\n// Client code\nExt.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'parent_id', 'name'],\n    proxy: {\n        type: 'ajax',\n        url: 'data.json',\n        reader: {\n            type: 'json',\n            root: 'groups'\n        }\n    },\n    associations: [{\n        type: 'hasMany',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        autoLoad: true,\n        associationKey: 'child_groups' // read child data from child_groups\n    }, {\n        type: 'belongsTo',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        associationKey: 'parent_group' // read parent data from parent_group\n    }]\n});\n\n\nExt.onReady(function(){\n    \n    Group.load(10, {\n        success: function(group){\n            console.log(group.getGroup().get('name'));\n            \n            group.groups().each(function(rec){\n                console.log(rec.get('name'));\n            });\n        }\n    });\n    \n});\n</code></pre>\n\n",
  "extends": "Object",
  "href": "Association.html#Ext-data-Association",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Association.html",
  "subclasses": [
    "Ext.data.HasManyAssociation",
    "Ext.data.BelongsToAssociation"
  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>The string name of the model that is being associated with. Required</p>\n",
        "href": "Association.html#Ext-data-Association-cfg-associatedModel",
        "linenr": 121,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The string name of the model that is being associated with. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "cfg",
        "name": "associatedModel",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the property in the data to read the association from.\nDefaults to the name of the associated model.</p>\n",
        "href": "Association.html#Ext-data-Association-cfg-associationKey",
        "linenr": 135,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the property in the data to read the association from. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "cfg",
        "name": "associationKey",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The string name of the model that owns the association. Required</p>\n",
        "href": "Association.html#Ext-data-Association-cfg-ownerModel",
        "linenr": 117,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The string name of the model that owns the association. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "cfg",
        "name": "ownerModel",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">Ext.data.Model.idProperty</a> of the Model.</p>\n",
        "href": "Association.html#Ext-data-Association-cfg-primaryKey",
        "linenr": 125,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the primary key on the associated model. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "cfg",
        "name": "primaryKey",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.data.reader.Reader",
        "doc": "<p>A special reader to read associated data</p>\n",
        "href": "Association.html#Ext-data-Association-cfg-reader",
        "linenr": 131,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "cfg",
        "name": "reader",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates the Association object.</p>\n",
        "href": "Association.html#Ext-data-Association-method-constructor",
        "linenr": 169,
        "html_filename": "Association.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config object.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates the Association object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get a specialized reader for reading associated data</p>\n",
        "href": "Association.html#Ext-data-Association-method-getReader",
        "linenr": 213,
        "html_filename": "Association.html",
        "alias": null,
        "return": {
          "doc": "<p>The reader, null if not supplied</p>\n",
          "type": "Ext.data.reader.Reader"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get a specialized reader for reading associated data ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "method",
        "name": "getReader",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "String",
        "doc": "<p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n",
        "href": "Association.html#Ext-data-Association-property-associatedName",
        "linenr": 201,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the model is on the other end of the association (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "property",
        "name": "associatedName",
        "owner": "Ext.data.Association",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the model that 'owns' the association</p>\n",
        "href": "Association.html#Ext-data-Association-property-ownerName",
        "linenr": 195,
        "html_filename": "Association.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "tagname": "property",
        "name": "ownerName",
        "owner": "Ext.data.Association",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.Association",
  "alternateClassNames": [

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