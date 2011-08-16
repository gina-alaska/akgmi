Ext.data.JsonP.Ext_data_reader_Reader({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "linenr": 392,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add / override static properties of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "addStatics",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-borrow",
        "linenr": 482,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class to borrow members from</p>\n",
            "type": "Ext.Base",
            "optional": false,
            "name": "fromClass"
          },
          {
            "doc": "<p>The names of the members to borrow</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "borrow",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "href": "Base3.html#Ext-Base-method-create",
        "linenr": 330,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>the created instance.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Create a new instance of this Class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "linenr": 658,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "alias"
          },
          {
            "doc": "<p>The original method name</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "origin"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "createAlias",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-getName",
        "linenr": 639,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>className</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the current class' name in string format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getName",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-implement",
        "linenr": 420,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "implement",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-override",
        "linenr": 524,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Override prototype members of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "override",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      }
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
  "doc": "<p>Readers are used to interpret data to be loaded into a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance or a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> - often in response to an AJAX request. In general there is usually no need to create\na Reader instance directly, since a Reader is almost always used together with a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>,\nand is configured using the Proxy's <a href=\"#/api/Ext.data.proxy.Proxy-cfg-reader\" rel=\"Ext.data.proxy.Proxy-cfg-reader\" class=\"docClass\">reader</a> configuration property:</p>\n\n<pre><code>Ext.create('Ext.data.Store', {\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    },\n});\n</code></pre>\n\n<p>The above reader is configured to consume a JSON string that looks something like this:</p>\n\n<pre><code>{\n    \"success\": true,\n    \"users\": [\n        { \"name\": \"User 1\" },\n        { \"name\": \"User 2\" }\n    ]\n}\n</code></pre>\n\n<h1>Loading Nested Data</h1>\n\n<p>Readers have the ability to automatically load deeply-nested data objects based on the <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a> configured on each Model. Below is an example demonstrating the flexibility of these associations in a\nfictional CRM system which manages a User, their Orders, OrderItems and Products. First we'll define the models:</p>\n\n<pre><code>Ext.define(\"User\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: {model: 'Order', name: 'orders'},\n\n    proxy: {\n        type: 'rest',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\nExt.define(\"Order\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'total'\n    ],\n\n    hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},\n    belongsTo: 'User'\n});\n\nExt.define(\"OrderItem\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'price', 'quantity', 'order_id', 'product_id'\n    ],\n\n    belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]\n});\n\nExt.define(\"Product\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: 'OrderItem'\n});\n</code></pre>\n\n<p>This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems.\nFinally, each OrderItem has a single Product. This allows us to consume data like this:</p>\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 123,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 50,\n                    \"total\": 100,\n                    \"order_items\": [\n                        {\n                            \"id\"      : 20,\n                            \"price\"   : 40,\n                            \"quantity\": 2,\n                            \"product\" : {\n                                \"id\": 1000,\n                                \"name\": \"MacBook Pro\"\n                            }\n                        },\n                        {\n                            \"id\"      : 21,\n                            \"price\"   : 20,\n                            \"quantity\": 3,\n                            \"product\" : {\n                                \"id\": 1001,\n                                \"name\": \"iPhone\"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n<p>The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the\nOrders for each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case),\nand finally the Product associated with each OrderItem. Now we can read the data and use it as follows:</p>\n\n<pre><code>var store = Ext.create('Ext.data.Store', {\n    model: \"User\"\n});\n\nstore.load({\n    callback: function() {\n        //the user that was loaded\n        var user = store.first();\n\n        console.log(\"Orders for \" + user.get('name') + \":\")\n\n        //iterate over the Orders for each User\n        user.orders().each(function(order) {\n            console.log(\"Order ID: \" + order.getId() + \", which contains items:\");\n\n            //iterate over the OrderItems for each Order\n            order.orderItems().each(function(orderItem) {\n                //we know that the Product data is already loaded, so we can use the synchronous getProduct\n                //usually, we would use the asynchronous version (see <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a>)\n                var product = orderItem.getProduct();\n\n                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));\n            });\n        });\n    }\n});\n</code></pre>\n\n<p>Running the code above results in the following:</p>\n\n<pre><code>Orders for Ed:\nOrder ID: 50, which contains items:\n2 orders of MacBook Pro\n3 orders of iPhone\n</code></pre>\n",
  "extends": "Ext.Base",
  "href": "Reader.html#Ext-data-reader-Reader",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Reader.html",
  "subclasses": [
    "Ext.data.reader.Xml",
    "Ext.data.reader.Json"
  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>Name of the property within a row object that contains a record identifier value. Defaults to The id of the\nmodel. If an idProperty is explicitly specified it will override that of the one specified on the model</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
        "linenr": 164,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Name of the property within a row object that contains a record identifier value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "cfg",
        "name": "idProperty",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically parse models nested within other models in a response object. See the\n<a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
        "linenr": 197,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to automatically parse models nested within other models in a response object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "cfg",
        "name": "implicitIncludes",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the property which contains a response message. This property is optional.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty",
        "linenr": 192,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the property which contains a response message. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "cfg",
        "name": "messageProperty",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p><strong>(Required)</strong> The name of the property which contains the Array of row objects. Defaults to undefined. An\nexception will be thrown if the root property is undefined. The data packet value for this property should be an\nempty array to clear the data or show no data.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
        "linenr": 184,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "(Required) The name of the property which contains the Array of row objects. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "cfg",
        "name": "root",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Name of the property from which to retrieve the success attribute. Defaults to success. See\n<a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a>.<a href=\"#/api/Ext.data.proxy.Server-event-exception\" rel=\"Ext.data.proxy.Server-event-exception\" class=\"docClass\">exception</a> for additional information.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
        "linenr": 177,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Name of the property from which to retrieve the success attribute. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "cfg",
        "name": "successProperty",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Name of the property from which to retrieve the total number of records in the dataset. This is only needed if\nthe whole dataset is not passed in one go, but is being paged from the remote server. Defaults to total.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
        "linenr": 170,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Name of the property from which to retrieve the total number of records in the dataset. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "cfg",
        "name": "totalProperty",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Reader.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
        "linenr": 206,
        "html_filename": "Reader.html",
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
        "shortDoc": "Creates new Reader. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.reader.Reader",
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
        "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be\nimplemented by each subclass</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
        "linenr": 469,
        "html_filename": "Reader.html",
        "alias": null,
        "return": {
          "doc": "<p>The useful data from the response</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The responce object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "response"
          }
        ],
        "deprecated": null,
        "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "method",
        "name": "getResponseData",
        "owner": "Ext.data.reader.Reader",
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
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Reader-method-readRecords\" rel=\"Ext.data.reader.Reader-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-method-read",
        "linenr": 238,
        "html_filename": "Reader.html",
        "alias": null,
        "return": {
          "doc": "<p>The parsed ResultSet object</p>\n",
          "type": "Ext.data.ResultSet"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "response"
          }
        ],
        "deprecated": null,
        "shortDoc": "Reads the given response object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "method",
        "name": "read",
        "owner": "Ext.data.reader.Reader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call this function\nbefore running its own logic and returning the <a href=\"#/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a> instance. For most Readers additional\nprocessing should not be needed.</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-method-readRecords",
        "linenr": 258,
        "html_filename": "Reader.html",
        "alias": null,
        "return": {
          "doc": "<p>A ResultSet object</p>\n",
          "type": "Ext.data.ResultSet"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The raw data object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstracts common functionality used by all Reader subclasses. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "method",
        "name": "readRecords",
        "owner": "Ext.data.reader.Reader",
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
        "type": "Object",
        "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n",
        "href": "Reader.html#Ext-data-reader-Reader-property-rawData",
        "linenr": 278,
        "html_filename": "Reader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The raw data object that was last passed to readRecords. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "tagname": "property",
        "name": "rawData",
        "owner": "Ext.data.reader.Reader",
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
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.reader.Reader",
  "alternateClassNames": [
    "Ext.data.Reader",
    "Ext.data.DataReader"
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