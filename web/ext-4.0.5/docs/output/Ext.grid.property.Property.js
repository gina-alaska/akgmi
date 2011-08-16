Ext.data.JsonP.Ext_grid_property_Property({
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
        "doc": "<p>Returns the configured Proxy for this Model</p>\n",
        "href": "Model.html#Ext-data-Model-method-getProxy",
        "linenr": 386,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The proxy</p>\n",
          "type": "Ext.data.proxy.Proxy"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the configured Proxy for this Model ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "getProxy",
        "owner": "Ext.data.Model",
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
        "doc": "<p>Asynchronously loads a model instance by id. Sample usage:</p>\n\n<pre><code>MyApp.User = Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id', type: 'int'},\n        {name: 'name', type: 'string'}\n    ]\n});\n\nMyApp.User.load(10, {\n    scope: this,\n    failure: function(record, operation) {\n        //do something if the load failed\n    },\n    success: function(record, operation) {\n        //do something if the load succeeded\n    },\n    callback: function(record, operation) {\n        //do something whether the load succeeded or failed\n    }\n});\n</code></pre>\n",
        "href": "Model.html#Ext-data-Model-method-load",
        "linenr": 396,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the model to load</p>\n",
            "type": "Number",
            "optional": false,
            "name": "id"
          },
          {
            "doc": "<p>(optional) config object containing success, failure and callback functions, plus\noptional scope</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Asynchronously loads a model instance by id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "load",
        "owner": "Ext.data.Model",
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
      },
      {
        "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by\n<a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>.</p>\n",
        "href": "Model.html#Ext-data-Model-method-setProxy",
        "linenr": 362,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.data.proxy.Proxy"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The proxy</p>\n",
            "type": "String/Object/Ext.data.proxy.Proxy",
            "optional": false,
            "name": "proxy"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the Proxy to use for this model. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "setProxy",
        "owner": "Ext.data.Model",
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
  "doc": "<p>A specific <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> type that represents a name/value pair and is made to work with the\n<a href=\"#/api/Ext.grid.property.Grid\" rel=\"Ext.grid.property.Grid\" class=\"docClass\">Ext.grid.property.Grid</a>.  Typically, Properties do not need to be created directly as they can be\ncreated implicitly by simply using the appropriate data configs either via the <a href=\"#/api/Ext.grid.property.Grid-cfg-source\" rel=\"Ext.grid.property.Grid-cfg-source\" class=\"docClass\">Ext.grid.property.Grid.source</a>\nconfig property or by calling <a href=\"#/api/Ext.grid.property.Grid-method-setSource\" rel=\"Ext.grid.property.Grid-method-setSource\" class=\"docClass\">Ext.grid.property.Grid.setSource</a>.  However, if the need arises, these records\ncan also be created explicitly as shown below.  Example usage:</p>\n\n<pre><code>var rec = new Ext.grid.property.Property({\n    name: 'birthday',\n    value: Ext.Date.parse('17/06/1962', 'd/m/Y')\n});\n// Add record to an already populated grid\ngrid.store.addSorted(rec);\n</code></pre>\n\n",
  "extends": "Ext.data.Model",
  "href": "Property.html#Ext-grid-property-Property",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "linenr": 1,
  "html_filename": "Property.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Object[]",
        "doc": "<p>An array of <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a> for this model.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-associations",
        "linenr": 611,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "associations",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object/String[]/Object[]",
        "doc": "<p>One or more <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">BelongsTo associations</a> for this model.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-belongsTo",
        "linenr": 619,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "belongsTo",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The string type of the default Model Proxy. Defaults to 'ajax'.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-defaultProxyType",
        "linenr": 589,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The string type of the default Model Proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "defaultProxyType",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object[]/String[]",
        "doc": "<p>The fields for this model.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-fields",
        "linenr": 596,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "fields",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object/String[]/Object[]",
        "doc": "<p>One or more <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">HasMany associations</a> for this model.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-hasMany",
        "linenr": 615,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "hasMany",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the field treated as this Model's unique id. Defaults to 'id'.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-idProperty",
        "linenr": 583,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the field treated as this Model's unique id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "idProperty",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object",
        "doc": "<p>The id generator to use for this model. The default id generator does not generate\nvalues for the <a href=\"#/api/Ext.grid.property.Property-cfg-idProperty\" rel=\"Ext.grid.property.Property-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n\n<p>This can be overridden at the model level to provide a custom generator for a model.\nThe simplest form of this would be:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModel', {\n     extend: 'Ext.data.Model',\n     requires: ['Ext.data.SequentialIdGenerator'],\n     idgen: 'sequential',\n     ...\n });\n</code></pre>\n\n<p>The above would generate <a href=\"#/api/Ext.data.SequentialIdGenerator\" rel=\"Ext.data.SequentialIdGenerator\" class=\"docClass\">sequential</a> id's such\nas 1, 2, 3 etc..</p>\n\n<p>Another useful id generator is <a href=\"#/api/Ext.data.UuidGenerator\" rel=\"Ext.data.UuidGenerator\" class=\"docClass\">Ext.data.UuidGenerator</a>:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModel', {\n     extend: 'Ext.data.Model',\n     requires: ['Ext.data.UuidGenerator'],\n     idgen: 'uuid',\n     ...\n });\n</code></pre>\n\n<p>An id generation can also be further configured:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModel', {\n     extend: 'Ext.data.Model',\n     idgen: {\n         type: 'sequential',\n         seed: 1000,\n         prefix: 'ID_'\n     }\n });\n</code></pre>\n\n<p>The above would generate id's such as ID_1000, ID_1001, ID_1002 etc..</p>\n\n<p>If multiple models share an id space, a single generator can be shared:</p>\n\n<pre><code> Ext.define('MyApp.data.MyModelX', {\n     extend: 'Ext.data.Model',\n     idgen: {\n         type: 'sequential',\n         id: 'xy'\n     }\n });\n\n Ext.define('MyApp.data.MyModelY', {\n     extend: 'Ext.data.Model',\n     idgen: {\n         type: 'sequential',\n         id: 'xy'\n     }\n });\n</code></pre>\n\n<p>For more complex, shared id generators, a custom generator is the best approach.\nSee <a href=\"#/api/Ext.data.IdGenerator\" rel=\"Ext.data.IdGenerator\" class=\"docClass\">Ext.data.IdGenerator</a> for details on creating custom id generators.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-idgen",
        "linenr": 479,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The id generator to use for this model. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "idgen",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "linenr": 102,
        "html_filename": "Observable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "cfg",
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The property on this Persistable object that its data is saved to. Defaults to 'data'\n(e.g. all persistable data resides in this.data.)</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-persistenceProperty",
        "linenr": 566,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The property on this Persistable object that its data is saved to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "persistenceProperty",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object/Ext.data.proxy.Proxy",
        "doc": "<p>The <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to use for this model.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-proxy",
        "linenr": 628,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "proxy",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object[]",
        "doc": "<p>An array of <a href=\"#/api/Ext.data.validations\" rel=\"Ext.data.validations\" class=\"docClass\">validations</a> for this model.</p>\n",
        "href": "Model.html#Ext-data-Model-cfg-validations",
        "linenr": 605,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "cfg",
        "name": "validations",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "\n",
        "href": "Property.html#Ext-grid-property-Property-method-constructor",
        "linenr": 1,
        "html_filename": "Property.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A data object in the format:</p>\n\n<pre><code>{\n    name: [name],\n    value: [value]\n}</code></pre>\n\n\n<p>The specified value's type\nwill be read automatically by the grid to determine the type of editor to use when displaying it.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": " ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/property/Property.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.grid.property.Property",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "linenr": 495,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) Additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "type": "String...",
            "optional": true,
            "name": "more"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "linenr": 278,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.property.Property-method-fireEvent\" rel=\"Ext.grid.property.Property-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends an event handler to this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "linenr": 156,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "opt"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestr...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Begins an edit. While in edit mode, no events (e.g.. the <code>update</code> event) are relayed to the containing store.\nWhen an edit has begun, it must be followed by either <a href=\"#/api/Ext.grid.property.Property-method-endEdit\" rel=\"Ext.grid.property.Property-method-endEdit\" class=\"docClass\">endEdit</a> or <a href=\"#/api/Ext.grid.property.Property-method-cancelEdit\" rel=\"Ext.grid.property.Property-method-cancelEdit\" class=\"docClass\">cancelEdit</a>.</p>\n",
        "href": "Model.html#Ext-data-Model-method-beginEdit",
        "linenr": 838,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Begins an edit. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "beginEdit",
        "owner": "Ext.data.Model",
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
        "doc": "<p>Cancels all changes made in the current edit operation.</p>\n",
        "href": "Model.html#Ext-data-Model-method-cancelEdit",
        "linenr": 852,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Cancels all changes made in the current edit operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "cancelEdit",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "linenr": 426,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "linenr": 455,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> which owns the model instance. Commits all changes made to the\ninstance since either creation or the last commit operation.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event to have their code notified of commit\noperations.</p>\n",
        "href": "Model.html#Ext-data-Model-method-commit",
        "linenr": 977,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) True to skip notification of the owning store of the change.\nDefaults to false.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Usually called by the Ext.data.Store which owns the model instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "commit",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a copy (clone) of this Model instance.</p>\n",
        "href": "Model.html#Ext-data-Model-method-copy",
        "linenr": 998,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) A new id, defaults to the id of the instance being copied.\nSee <code><a href=\"#/api/Ext.data.Model-method-id\" rel=\"Ext.data.Model-method-id\" class=\"docClass\">id</a></code>. To generate a phantom instance with a new id use:</p>\n\n<pre><code>var rec = record.copy(); // clone the record\nExt.data.Model.id(rec); // automatically generate a unique sequential id\n</code></pre>\n",
            "type": "String",
            "optional": true,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a copy (clone) of this Model instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "copy",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Destroys the model using the configured proxy.</p>\n",
        "href": "Model.html#Ext-data-Model-method-destroy",
        "linenr": 1128,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The Model instance</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Options to pass to the proxy. Config object for <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a>.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Destroys the model using the configured proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "linenr": 610,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "events"
          }
        ],
        "deprecated": null,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Ends an edit. If any data was modified, the containing store is notified (ie, the store's <code>update</code> event will\nfire).</p>\n",
        "href": "Model.html#Ext-data-Model-method-endEdit",
        "linenr": 869,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to not notify the store of the change</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Ends an edit. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "endEdit",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.grid.property.Property-method-enableBubble\" rel=\"Ext.grid.property.Property-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "linenr": 233,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to fire.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "type": "Object...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value of the given field</p>\n",
        "href": "Model.html#Ext-data-Model-method-get",
        "linenr": 722,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The field to fetch the value for</p>\n",
            "type": "String",
            "optional": false,
            "name": "fieldName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the value of the given field ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets all of the data from this Models <em>loaded</em> associations. It does this recursively - for example if we have a\nUser which hasMany Orders, and each Order hasMany OrderItems, it will return an object like this:</p>\n\n<pre><code>{\n    orders: [\n        {\n            id: 123,\n            status: 'shipped',\n            orderItems: [\n                ...\n            ]\n        }\n    ]\n}\n</code></pre>\n",
        "href": "Model.html#Ext-data-Model-method-getAssociatedData",
        "linenr": 1239,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The nested data set for the Model's loaded associations</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets all of the data from this Models loaded associations. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "getAssociatedData",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets a hash of only the fields that have been modified since this Model was created or commited.</p>\n",
        "href": "Model.html#Ext-data-Model-method-getChanges",
        "linenr": 887,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets a hash of only the fields that have been modified since this Model was created or commited. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "getChanges",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the unique ID allocated to this model instance as defined by <a href=\"#/api/Ext.grid.property.Property-cfg-idProperty\" rel=\"Ext.grid.property.Property-cfg-idProperty\" class=\"docClass\">idProperty</a>.</p>\n",
        "href": "Model.html#Ext-data-Model-method-getId",
        "linenr": 1161,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The id</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the unique ID allocated to this model instance as defined by idProperty. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "getId",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the configured Proxy for this Model.</p>\n",
        "href": "Model.html#Ext-data-Model-method-getProxy",
        "linenr": 1038,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The proxy</p>\n",
          "type": "Ext.data.proxy.Proxy"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the configured Proxy for this Model. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "getProxy",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "linenr": 531,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the event is being listened for, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to check for</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "hasListener",
        "owner": "Ext.util.Observable",
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
        "doc": "<p>Returns true if the passed field name has been <code><a href=\"#/api/Ext.grid.property.Property-property-modified\" rel=\"Ext.grid.property.Property-property-modified\" class=\"docClass\">modified</a></code> since the load or last commit.</p>\n",
        "href": "Model.html#Ext-data-Model-method-isModified",
        "linenr": 905,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p><a href=\"#/api/Ext.data.Field-cfg-name\" rel=\"Ext.data.Field-cfg-name\" class=\"docClass\">Ext.data.Field.name</a></p>\n",
            "type": "String",
            "optional": false,
            "name": "fieldName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed field name has been modified since the load or last commit. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "isModified",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if the model is valid. See <a href=\"#/api/Ext.grid.property.Property-method-validate\" rel=\"Ext.grid.property.Property-method-validate\" class=\"docClass\">validate</a>.</p>\n",
        "href": "Model.html#Ext-data-Model-method-isValid",
        "linenr": 1077,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the model is valid.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Checks if the model is valid. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "isValid",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tells this model instance that it has been added to a store.</p>\n",
        "href": "Model.html#Ext-data-Model-method-join",
        "linenr": 1177,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The store to which this model has been added.</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          }
        ],
        "deprecated": null,
        "shortDoc": "Tells this model instance that it has been added to a store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "join",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-addManagedListener\" rel=\"Ext.grid.property.Property-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "linenr": 682,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addManagedListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "opt"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "mon",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-removeManagedListener\" rel=\"Ext.grid.property.Property-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.property.Property-method-mon\" rel=\"Ext.grid.property.Property-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "linenr": 688,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeManagedListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "mun",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "linenr": 670,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.grid.property.Property-method-fireEvent\" rel=\"Ext.grid.property.Property-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "on",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Usually called by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to which this model instance has been <a href=\"#/api/Ext.grid.property.Property-method-join\" rel=\"Ext.grid.property.Property-method-join\" class=\"docClass\">joined</a>. Rejects\nall changes made to the model instance since either creation, or the last commit operation. Modified fields are\nreverted to their original values.</p>\n\n<p>Developers should subscribe to the <a href=\"#/api/Ext.data.Store-event-update\" rel=\"Ext.data.Store-event-update\" class=\"docClass\">Ext.data.Store.update</a> event to have their code notified of reject\noperations.</p>\n",
        "href": "Model.html#Ext-data-Model-method-reject",
        "linenr": 944,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) True to skip notification of the owning store of the change.\nDefaults to false.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Usually called by the Ext.data.Store to which this model instance has been joined. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "reject",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "linenr": 574,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "origin"
          },
          {
            "doc": "<p>Array of event names to relay.</p>\n",
            "type": "String[]",
            "optional": false,
            "name": "events"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "prefix"
          }
        ],
        "deprecated": null,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes an event handler.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "linenr": 392,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes an event handler. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.property.Property-method-mon\" rel=\"Ext.grid.property.Property-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "linenr": 197,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.grid.property.Property-method-suspendEvents\" rel=\"Ext.grid.property.Property-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "linenr": 555,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Saves the model instance using the configured proxy.</p>\n",
        "href": "Model.html#Ext-data-Model-method-save",
        "linenr": 1085,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The Model instance</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Options to pass to the proxy. Config object for <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a>.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Saves the model instance using the configured proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "save",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the given field to the given value, marks the instance as dirty</p>\n",
        "href": "Model.html#Ext-data-Model-method-set",
        "linenr": 731,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The field to set, or an object containing key/value pairs</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "fieldName"
          },
          {
            "doc": "<p>The value to set</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the given field to the given value, marks the instance as dirty ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "set",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Marks this <strong>Record</strong> as <code><a href=\"#/api/Ext.grid.property.Property-property-dirty\" rel=\"Ext.grid.property.Property-property-dirty\" class=\"docClass\">dirty</a></code>. This method is used interally when adding <code><a href=\"#/api/Ext.grid.property.Property-property-phantom\" rel=\"Ext.grid.property.Property-property-phantom\" class=\"docClass\">phantom</a></code> records\nto a <a href=\"#/api/Ext.data.proxy.Server-cfg-writer\" rel=\"Ext.data.proxy.Server-cfg-writer\" class=\"docClass\">writer enabled store</a>.</p>\n\n<p>Marking a record <code><a href=\"#/api/Ext.grid.property.Property-property-dirty\" rel=\"Ext.grid.property.Property-property-dirty\" class=\"docClass\">dirty</a></code> causes the phantom to be returned by <a href=\"#/api/Ext.data.Store-method-getUpdatedRecords\" rel=\"Ext.data.Store-method-getUpdatedRecords\" class=\"docClass\">Ext.data.Store.getUpdatedRecords</a>\nwhere it will have a create action composed for it during <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">model save</a> operations.</p>\n",
        "href": "Model.html#Ext-data-Model-method-setDirty",
        "linenr": 914,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Marks this Record as dirty. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "setDirty",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the model instance's id field to the given id.</p>\n",
        "href": "Model.html#Ext-data-Model-method-setId",
        "linenr": 1169,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new id</p>\n",
            "type": "Number",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the model instance's id field to the given id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "setId",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the Proxy to use for this model. Accepts any options that can be accepted by\n<a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>.</p>\n",
        "href": "Model.html#Ext-data-Model-method-setProxy",
        "linenr": 1015,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.data.proxy.Proxy"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The proxy</p>\n",
            "type": "String/Object/Ext.data.proxy.Proxy",
            "optional": false,
            "name": "proxy"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the Proxy to use for this model. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "setProxy",
        "owner": "Ext.data.Model",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.grid.property.Property-method-resumeEvents\" rel=\"Ext.grid.property.Property-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "linenr": 542,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.grid.property.Property-method-resumeEvents\" rel=\"Ext.grid.property.Property-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "queueSuspended"
          }
        ],
        "deprecated": null,
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.grid.property.Property-method-removeListener\" rel=\"Ext.grid.property.Property-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "linenr": 676,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.grid.property.Property-method-addListener\" rel=\"Ext.grid.property.Property-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "un",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tells this model instance that it has been removed from the store.</p>\n",
        "href": "Model.html#Ext-data-Model-method-unjoin",
        "linenr": 1189,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The store from which this model has been removed.</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          }
        ],
        "deprecated": null,
        "shortDoc": "Tells this model instance that it has been removed from the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "unjoin",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Validates the current data against all of its configured <a href=\"#/api/Ext.grid.property.Property-cfg-validations\" rel=\"Ext.grid.property.Property-cfg-validations\" class=\"docClass\">validations</a>.</p>\n",
        "href": "Model.html#Ext-data-Model-method-validate",
        "linenr": 1046,
        "html_filename": "Model.html",
        "alias": null,
        "return": {
          "doc": "<p>The errors object</p>\n",
          "type": "Ext.data.Errors"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Validates the current data against all of its configured validations. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "method",
        "name": "validate",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p><a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">Associations</a> defined on this model.</p>\n",
        "href": "Model.html#Ext-data-Model-property-associations",
        "linenr": 623,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "associations",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if this Record has been modified. Read-only.</p>\n",
        "href": "Model.html#Ext-data-Model-property-dirty",
        "linenr": 560,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if this Record has been modified. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "dirty",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Internal flag used to track whether or not the model instance is currently being edited. Read-only.</p>\n",
        "href": "Model.html#Ext-data-Model-property-editing",
        "linenr": 554,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Internal flag used to track whether or not the model instance is currently being edited. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "editing",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>The fields defined on this model.</p>\n",
        "href": "Model.html#Ext-data-Model-property-fields",
        "linenr": 600,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "fields",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Key: value pairs of all fields whose values have changed</p>\n",
        "href": "Model.html#Ext-data-Model-property-modified",
        "linenr": 664,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "modified",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True when the record does not yet exist in a server-side database (see <a href=\"#/api/Ext.grid.property.Property-method-setDirty\" rel=\"Ext.grid.property.Property-method-setDirty\" class=\"docClass\">setDirty</a>).\nAny record which has a real database pk set as its id property is NOT a phantom -- it's real.</p>\n",
        "href": "Model.html#Ext-data-Model-property-phantom",
        "linenr": 576,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True when the record does not yet exist in a server-side database (see setDirty). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "phantom",
        "owner": "Ext.data.Model",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The raw data used to create this model if created via a reader.</p>\n",
        "href": "Model.html#Ext-data-Model-property-raw",
        "linenr": 655,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "raw",
        "owner": "Ext.data.Model",
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
        "type": "Ext.data.Store",
        "doc": "<p>The <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> to which this Record belongs.</p>\n",
        "href": "Model.html#Ext-data-Model-property-store",
        "linenr": 1182,
        "html_filename": "Model.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Model.js",
        "private": false,
        "tagname": "property",
        "name": "store",
        "owner": "Ext.data.Model",
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
    "Ext.Base",
    "Ext.data.Model"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/grid/property/Property.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.grid.property.Property",
  "alternateClassNames": [
    "Ext.PropGridProperty"
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