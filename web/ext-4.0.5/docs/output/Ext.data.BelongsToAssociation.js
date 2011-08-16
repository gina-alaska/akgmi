Ext.data.JsonP.Ext_data_BelongsToAssociation({
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
  "doc": "<p>Represents a many to one association with another model. The owner model is expected to have\na foreign key which references the primary key of the associated model:</p>\n\n<pre><code>Ext.define('Category', {\n    extend: 'Ext.data.Model',\n    fields: [\n        { name: 'id',   type: 'int' },\n        { name: 'name', type: 'string' }\n    ]\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: [\n        { name: 'id',          type: 'int' },\n        { name: 'category_id', type: 'int' },\n        { name: 'name',        type: 'string' }\n    ],\n    // we can use the belongsTo shortcut on the model to create a belongsTo association\n    associations: { type: 'belongsTo', model: 'Category' }\n});\n</code></pre>\n\n<p>In the example above we have created models for Products and Categories, and linked them together\nby saying that each Product belongs to a Category. This automatically links each Product to a Category\nbased on the Product's category_id, and provides new functions on the Product model:</p>\n\n<h2>Generated getter function</h2>\n\n<p>The first function that is added to the owner model is a getter function:</p>\n\n<pre><code>var product = new Product({\n    id: 100,\n    category_id: 20,\n    name: 'Sneakers'\n});\n\nproduct.getCategory(function(category, operation) {\n    // do something with the category object\n    alert(category.get('id')); // alerts 20\n}, this);\n</code></pre>\n\n<p>The getCategory function was created on the Product model when we defined the association. This uses the\nCategory's configured <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to load the Category asynchronously, calling the provided\ncallback when it has loaded.</p>\n\n<p>The new getCategory function will also accept an object containing success, failure and callback properties\n- callback will always be called, success will only be called if the associated model was loaded successfully\nand failure will only be called if the associatied model could not be loaded:</p>\n\n<pre><code>product.getCategory({\n    callback: function(category, operation) {}, // a function that will always be called\n    success : function(category, operation) {}, // a function that will only be called if the load succeeded\n    failure : function(category, operation) {}, // a function that will only be called if the load did not succeed\n    scope   : this // optionally pass in a scope object to execute the callbacks in\n});\n</code></pre>\n\n<p>In each case above the callbacks are called with two arguments - the associated model instance and the\n<a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object that was executed to load that instance. The Operation object is\nuseful when the instance could not be loaded.</p>\n\n<h2>Generated setter function</h2>\n\n<p>The second generated function sets the associated model instance - if only a single argument is passed to\nthe setter then the following two calls are identical:</p>\n\n<pre><code>// this call...\nproduct.setCategory(10);\n\n// is equivalent to this call:\nproduct.set('category_id', 10);\n</code></pre>\n\n<p>If we pass in a second argument, the model will be automatically saved and the second argument passed to\nthe owner model's <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> method:</p>\n\n<pre><code>product.setCategory(10, function(product, operation) {\n    // the product has been saved\n    alert(product.get('category_id')); //now alerts 10\n});\n\n//alternative syntax:\nproduct.setCategory(10, {\n    callback: function(product, operation), // a function that will always be called\n    success : function(product, operation), // a function that will only be called if the load succeeded\n    failure : function(product, operation), // a function that will only be called if the load did not succeed\n    scope   : this //optionally pass in a scope object to execute the callbacks in\n})\n</code></pre>\n\n<h2>Customisation</h2>\n\n<p>Associations reflect on the models they are linking to automatically set up properties such as the\n<a href=\"#/api/Ext.data.BelongsToAssociation-cfg-primaryKey\" rel=\"Ext.data.BelongsToAssociation-cfg-primaryKey\" class=\"docClass\">primaryKey</a> and <a href=\"#/api/Ext.data.BelongsToAssociation-cfg-foreignKey\" rel=\"Ext.data.BelongsToAssociation-cfg-foreignKey\" class=\"docClass\">foreignKey</a>. These can alternatively be specified:</p>\n\n<pre><code>Ext.define('Product', {\n    fields: [...],\n\n    associations: [\n        { type: 'belongsTo', model: 'Category', primaryKey: 'unique_id', foreignKey: 'cat_id' }\n    ]\n});\n</code></pre>\n\n<p>Here we replaced the default primary key (defaults to 'id') and foreign key (calculated as 'category_id')\nwith our own settings. Usually this will not be needed.</p>\n",
  "extends": "Ext.data.Association",
  "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "BelongsToAssociation.html",
  "subclasses": [

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
        "doc": "<p>The name of the foreign key on the owner model that links it to the associated\nmodel. Defaults to the lowercased name of the associated model plus \"_id\", e.g. an association with a\nmodel called Product would set up a product_id foreign key.</p>\n\n<pre><code>Ext.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'date'],\n    hasMany: 'Product'\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'order_id'], // refers to the id of the order that this product belongs to\n    belongsTo: 'Group'\n});\nvar product = new Product({\n    id: 1,\n    name: 'Product 1',\n    order_id: 22\n}, 1);\nproduct.getOrder(); // Will make a call to the server asking for order_id 22\n</code></pre>\n",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-foreignKey",
        "linenr": 114,
        "html_filename": "BelongsToAssociation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the foreign key on the owner model that links it to the associated\nmodel. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "tagname": "cfg",
        "name": "foreignKey",
        "owner": "Ext.data.BelongsToAssociation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the getter function that will be added to the local model's prototype.\nDefaults to 'get' + the name of the foreign model, e.g. getCategory</p>\n",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-getterName",
        "linenr": 139,
        "html_filename": "BelongsToAssociation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the getter function that will be added to the local model's prototype. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "tagname": "cfg",
        "name": "getterName",
        "owner": "Ext.data.BelongsToAssociation",
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
      },
      {
        "type": "String",
        "doc": "<p>The name of the setter function that will be added to the local model's prototype.\nDefaults to 'set' + the name of the foreign model, e.g. setCategory</p>\n",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-setterName",
        "linenr": 144,
        "html_filename": "BelongsToAssociation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the setter function that will be added to the local model's prototype. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "tagname": "cfg",
        "name": "setterName",
        "owner": "Ext.data.BelongsToAssociation",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The type configuration can be used when creating associations using a configuration object.\nUse 'belongsTo' to create a HasManyAssocation</p>\n\n<pre><code>associations: [{\n    type: 'belongsTo',\n    model: 'User'\n}]\n</code></pre>\n",
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-type",
        "linenr": 149,
        "html_filename": "BelongsToAssociation.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The type configuration can be used when creating associations using a configuration object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "tagname": "cfg",
        "name": "type",
        "owner": "Ext.data.BelongsToAssociation",
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
    "Ext.data.Association"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.BelongsToAssociation",
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