Ext.data.JsonP.Ext_data_DirectStore({
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
  "doc": "<p>Small helper class to create an <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> configured with an <a href=\"#/api/Ext.data.proxy.Direct\" rel=\"Ext.data.proxy.Direct\" class=\"docClass\">Ext.data.proxy.Direct</a>\nand <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">Ext.data.reader.Json</a> to make interacting with an <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a> server-side\n<a href=\"#/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a> easier. To create a different proxy/reader combination create a basic\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> configured as needed.</p>\n\n<p><strong>Note:</strong> Although they are not listed, this class inherits all of the config options of:</p>\n\n<ul>\n<li><p><strong><a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a></strong></p></li>\n<li><p><strong><a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a></strong></p>\n\n<ul>\n<li><strong><a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a></strong></li>\n<li><strong><a href=\"#/api/Ext.data.reader.Json-cfg-idProperty\" rel=\"Ext.data.reader.Json-cfg-idProperty\" class=\"docClass\">idProperty</a></strong></li>\n<li><strong><a href=\"#/api/Ext.data.reader.Json-cfg-totalProperty\" rel=\"Ext.data.reader.Json-cfg-totalProperty\" class=\"docClass\">totalProperty</a></strong></li>\n</ul>\n</li>\n<li><p><strong><a href=\"#/api/Ext.data.proxy.Direct\" rel=\"Ext.data.proxy.Direct\" class=\"docClass\">DirectProxy</a></strong></p>\n\n<ul>\n<li><strong><a href=\"#/api/Ext.data.proxy.Direct-cfg-directFn\" rel=\"Ext.data.proxy.Direct-cfg-directFn\" class=\"docClass\">directFn</a></strong></li>\n<li><strong><a href=\"#/api/Ext.data.proxy.Direct-cfg-paramOrder\" rel=\"Ext.data.proxy.Direct-cfg-paramOrder\" class=\"docClass\">paramOrder</a></strong></li>\n<li><strong><a href=\"#/api/Ext.data.proxy.Direct-cfg-paramsAsHash\" rel=\"Ext.data.proxy.Direct-cfg-paramsAsHash\" class=\"docClass\">paramsAsHash</a></strong></li>\n</ul>\n</li>\n</ul>\n\n",
  "extends": "Ext.data.Store",
  "href": "DirectStore.html#Ext-data-DirectStore",
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ],
  "linenr": 1,
  "html_filename": "DirectStore.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean/Object",
        "doc": "<p>If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called\nafter creation. If the value of autoLoad is an Object, this Object will be passed to the store's load method.\nDefaults to false.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoLoad",
        "linenr": 55,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called\nafte...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoLoad",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically sync the Store with its Proxy after every edit to one of its Records. Defaults to false.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoSync",
        "linenr": 63,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to automatically sync the Store with its Proxy after every edit to one of its Records. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoSync",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Allow the store to buffer and pre-fetch pages of records. This is to be used in conjunction with a view will\ntell the store to pre-fetch records ahead of a time.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-buffered",
        "linenr": 299,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Allow the store to buffer and pre-fetch pages of records. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "buffered",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to empty the store when loading another page via <a href=\"#/api/Ext.data.DirectStore-method-loadPage\" rel=\"Ext.data.DirectStore-method-loadPage\" class=\"docClass\">loadPage</a>,\n<a href=\"#/api/Ext.data.DirectStore-method-nextPage\" rel=\"Ext.data.DirectStore-method-nextPage\" class=\"docClass\">nextPage</a> or <a href=\"#/api/Ext.data.DirectStore-method-previousPage\" rel=\"Ext.data.DirectStore-method-previousPage\" class=\"docClass\">previousPage</a> (defaults to true). Setting to false keeps existing records, allowing\nlarge data sets to be loaded one page at a time but rendered all together.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-clearOnPageLoad",
        "linenr": 278,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to empty the store when loading another page via loadPage,\nnextPage or previousPage (defaults to true). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "clearOnPageLoad",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object[]/Ext.data.Model[]",
        "doc": "<p>Optional array of Model instances or data objects to load locally. See \"Inline data\" above for details.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-data",
        "linenr": 244,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional array of Model instances or data objects to load locally. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "data",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object[]",
        "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.DirectStore-cfg-model\" rel=\"Ext.data.DirectStore-cfg-model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.DirectStore-cfg-model\" rel=\"Ext.data.DirectStore-cfg-model\" class=\"docClass\">model</a>\nconfig.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-fields",
        "linenr": 122,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This may be used in place of specifying a model configuration. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "cfg",
        "name": "fields",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
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
        "doc": "<p>Name of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> associated with this store.\nThe string is used as an argument for <a href=\"#/api/Ext.ModelManager-method-getModel\" rel=\"Ext.ModelManager-method-getModel\" class=\"docClass\">Ext.ModelManager.getModel</a>.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-model",
        "linenr": 132,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Name of the Model associated with this store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "cfg",
        "name": "model",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of records considered to form a 'page'. This is used to power the built-in\npaging using the nextPage and previousPage functions. Defaults to 25.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-pageSize",
        "linenr": 264,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of records considered to form a 'page'. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "pageSize",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Ext.data.proxy.Proxy/Object",
        "doc": "<p>The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see <a href=\"#/api/Ext.data.DirectStore-method-setProxy\" rel=\"Ext.data.DirectStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-proxy",
        "linenr": 239,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The Proxy to use for this Store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "proxy",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of pages to keep in the cache before purging additional records. A value of 0 indicates to never purge the prefetched data.\nThis option is only relevant when the <a href=\"#/api/Ext.data.DirectStore-cfg-buffered\" rel=\"Ext.data.DirectStore-cfg-buffered\" class=\"docClass\">buffered</a> option is set to true.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-purgePageCount",
        "linenr": 306,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of pages to keep in the cache before purging additional records. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "purgePageCount",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to defer any filtering operation to the server. If false, filtering is done locally on the client. Defaults to <tt>false</tt>.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-remoteFilter",
        "linenr": 225,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to defer any filtering operation to the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "remoteFilter",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the grouping should apply on the server side, false if it is local only (defaults to false).  If the\ngrouping is local, it can be applied immediately to the data.  If it is remote, then it will simply act as a\nhelper, automatically sending the grouping information to the server.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-remoteGroup",
        "linenr": 231,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the grouping should apply on the server side, false if it is local only (defaults to false). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "remoteGroup",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to defer any sorting operation to the server. If false, sorting is done locally on the client. Defaults to <tt>false</tt>.</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-remoteSort",
        "linenr": 219,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to defer any sorting operation to the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "remoteSort",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>For local filtering only, causes <a href=\"#/api/Ext.data.DirectStore-method-sort\" rel=\"Ext.data.DirectStore-method-sort\" class=\"docClass\">sort</a> to be called whenever <a href=\"#/api/Ext.data.DirectStore-method-filter\" rel=\"Ext.data.DirectStore-method-filter\" class=\"docClass\">filter</a> is called,\ncausing the sorters to be reapplied after filtering. Defaults to true</p>\n",
        "href": "Store2.html#Ext-data-Store-cfg-sortOnFilter",
        "linenr": 293,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "For local filtering only, causes sort to be called whenever filter is called,\ncausing the sorters to be reapplied aft...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "cfg",
        "name": "sortOnFilter",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Unique identifier for this store. If present, this Store will be registered with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Ext.data.StoreManager</a>,\nmaking it easy to reuse elsewhere. Defaults to undefined.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-storeId",
        "linenr": 116,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Unique identifier for this store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "cfg",
        "name": "storeId",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-constructor",
        "linenr": 331,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config object</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds Model instance to the Store. This method accepts either:</p>\n\n<ul>\n<li>An array of Model instances or Model configuration objects.</li>\n<li>Any number of Model instance or Model configuration object arguments.</li>\n</ul>\n\n\n<p>The new Model instances will be added at the end of the existing collection.</p>\n\n<p>Sample usage:</p>\n\n<pre><code>myStore.add({some: 'data'}, {some: 'other data'});\n</code></pre>\n",
        "href": "Store2.html#Ext-data-Store-method-add",
        "linenr": 810,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The model instances that were added</p>\n",
          "type": "Ext.data.Model[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An array of Model instances\nor Model configuration objects, or variable number of Model instance or config arguments.</p>\n",
            "type": "Ext.data.Model[]/Ext.data.Model...",
            "optional": false,
            "name": "model"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds Model instance to the Store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "add",
        "owner": "Ext.data.Store",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.DirectStore-method-fireEvent\" rel=\"Ext.data.DirectStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Runs the aggregate function for all the records in the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-aggregate",
        "linenr": 2177,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>An object literal with the group names and their appropriate values.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute. The function is called with a single parameter,\nan array of records for that group.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope to execute the function in. Defaults to the store.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          },
          {
            "doc": "<p>(optional) Any arguments to append to the function call</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Runs the aggregate function for all the records in the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "aggregate",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the average value in the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-average",
        "linenr": 2144,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The average value, if no items exist, 0.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The field in each record</p>\n",
            "type": "String",
            "optional": false,
            "name": "field"
          },
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the average value in the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "average",
        "owner": "Ext.data.Store",
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
        "doc": "<p>Revert to a view of the Record cache with no filtering applied.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-clearFilter",
        "linenr": 1193,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>If <tt>true</tt> the filter is cleared silently without firing the\n<a href=\"#/api/Ext.data.DirectStore-event-datachanged\" rel=\"Ext.data.DirectStore-event-datachanged\" class=\"docClass\">datachanged</a> event.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "suppressEvent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Revert to a view of the Record cache with no filtering applied. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "clearFilter",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clear any groupers in the store</p>\n",
        "href": "Store2.html#Ext-data-Store-method-clearGrouping",
        "linenr": 544,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Clear any groupers in the store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "clearGrouping",
        "owner": "Ext.data.Store",
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
        "doc": "<p>Collects unique values for a particular dataIndex from this store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-collect",
        "linenr": 1855,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>An array of the unique values</p>\n",
          "type": "Object[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The property to collect</p>\n",
            "type": "String",
            "optional": false,
            "name": "dataIndex"
          },
          {
            "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "allowNull"
          },
          {
            "doc": "<p>(optional) Pass true to collect from all records, even ones which are filtered</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "bypassFilter"
          }
        ],
        "deprecated": null,
        "shortDoc": "Collects unique values for a particular dataIndex from this store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "collect",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the count of items in the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-count",
        "linenr": 2047,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>the count</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the count for each group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the count of items in the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "count",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calls the specified function for each of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Records</a> in the cache.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-each",
        "linenr": 862,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call. The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> is passed as the first parameter.\nReturning <tt>false</tt> aborts and exits the iteration.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\nDefaults to the current <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> in the iteration.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Calls the specified function for each of the Records in the cache. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.data.Store",
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
        "doc": "<p>Filters the loaded set of records by a given set of filters.</p>\n\n<p>Filtering by single field:</p>\n\n<pre><code>store.filter(\"email\", /\\.com$/);\n</code></pre>\n\n<p>Using multiple filters:</p>\n\n<pre><code>store.filter([\n    {property: \"email\", value: /\\.com$/},\n    {filterFn: function(item) { return item.get(\"age\") &gt; 10; }}\n]);\n</code></pre>\n\n<p>Using <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> instances instead of config objects\n(note that we need to specify the <a href=\"#/api/Ext.util.Filter-cfg-root\" rel=\"Ext.util.Filter-cfg-root\" class=\"docClass\">root</a> config option in this case):</p>\n\n<pre><code>store.filter([\n    Ext.create('Ext.util.Filter', {property: \"email\", value: /\\.com$/, root: 'data'}),\n    Ext.create('Ext.util.Filter', {filterFn: function(item) { return item.get(\"age\") &gt; 10; }, root: 'data'})\n]);\n</code></pre>\n",
        "href": "Store2.html#Ext-data-Store-method-filter",
        "linenr": 1122,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The set of filters to apply to the data. These are stored internally on the store,\nbut the filtering itself is done on the Store's <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. See\nMixedCollection's <a href=\"#/api/Ext.util.MixedCollection-method-filter\" rel=\"Ext.util.MixedCollection-method-filter\" class=\"docClass\">filter</a> method for filter syntax. Alternatively,\npass in a property string</p>\n",
            "type": "Object[]/Ext.util.Filter[]/String",
            "optional": false,
            "name": "filters"
          },
          {
            "doc": "<p>(optional) value to filter by (only if using a property string as the first argument)</p>\n",
            "type": "String",
            "optional": true,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Filters the loaded set of records by a given set of filters. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "filter",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Filter by a function. The specified function will be called for each\nRecord in this Store. If the function returns <tt>true</tt> the Record is included,\notherwise it is filtered out.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-filterBy",
        "linenr": 1224,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Filter by a function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "filterBy",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-find",
        "linenr": 1771,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The matched index or -1</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the Record field to test.</p>\n",
            "type": "String",
            "optional": false,
            "name": "fieldName"
          },
          {
            "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n",
            "type": "String/RegExp",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "type": "Number",
            "optional": true,
            "name": "startIndex"
          },
          {
            "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "anyMatch"
          },
          {
            "doc": "<p>(optional) True for case sensitive comparison</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "caseSensitive"
          },
          {
            "doc": "<p>(optional) True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "exactMatch"
          }
        ],
        "deprecated": null,
        "shortDoc": "Finds the index of the first matching Record in this store by a specific field value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "find",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Find the index of the first matching Record in this Store by a function.\nIf the function returns <tt>true</tt> it is considered a match.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-findBy",
        "linenr": 1839,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The matched index or -1</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "type": "Number",
            "optional": true,
            "name": "startIndex"
          }
        ],
        "deprecated": null,
        "shortDoc": "Find the index of the first matching Record in this Store by a function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "findBy",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-findExact",
        "linenr": 1825,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The matched index or -1</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the Record field to test.</p>\n",
            "type": "String",
            "optional": false,
            "name": "fieldName"
          },
          {
            "doc": "<p>The value to match the field against.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "type": "Number",
            "optional": true,
            "name": "startIndex"
          }
        ],
        "deprecated": null,
        "shortDoc": "Finds the index of the first matching Record in this store by a specific field value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "findExact",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Finds the first matching Record in this store by a specific field value.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-findRecord",
        "linenr": 1787,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The matched record or null</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the Record field to test.</p>\n",
            "type": "String",
            "optional": false,
            "name": "fieldName"
          },
          {
            "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n",
            "type": "String/RegExp",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "type": "Number",
            "optional": true,
            "name": "startIndex"
          },
          {
            "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "anyMatch"
          },
          {
            "doc": "<p>(optional) True for case sensitive comparison</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "caseSensitive"
          },
          {
            "doc": "<p>(optional) True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "exactMatch"
          }
        ],
        "deprecated": null,
        "shortDoc": "Finds the first matching Record in this store by a specific field value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "findRecord",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.DirectStore-method-enableBubble\" rel=\"Ext.data.DirectStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "doc": "<p>Convenience function for getting the first model instance in the store</p>\n",
        "href": "Store2.html#Ext-data-Store-method-first",
        "linenr": 1973,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The first model instance in the store, or undefined</p>\n",
          "type": "Ext.data.Model/undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the first record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenience function for getting the first model instance in the store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "first",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the Record at the specified index.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-getAt",
        "linenr": 1891,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The Record at the passed index. Returns undefined if not found.</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The index of the Record to find.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the Record at the specified index. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getAt",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the Record with the specified id.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-getById",
        "linenr": 1910,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The Record with the passed id. Returns undefined if not found.</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Record to find.</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the Record with the specified id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getById",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the number of cached records.</p>\n\n<p>If using paging, this may not be the total size of the dataset. If the data object\nused by the Reader contains the dataset size, then the <a href=\"#/api/Ext.data.DirectStore-method-getTotalCount\" rel=\"Ext.data.DirectStore-method-getTotalCount\" class=\"docClass\">getTotalCount</a> function returns\nthe dataset size.  <b>Note</b>: see the Important note in <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a>.</p>\n\n",
        "href": "Store2.html#Ext-data-Store-method-getCount",
        "linenr": 1869,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The number of Records in the Store's cache.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the number of cached records. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getCount",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the string to group on for a given model instance. The default implementation of this method returns\nthe model's <a href=\"#/api/Ext.data.DirectStore-property-groupField\" rel=\"Ext.data.DirectStore-property-groupField\" class=\"docClass\">groupField</a>, but this can be overridden to group by an arbitrary string. For example, to\ngroup by the first letter of a model's 'name' field, use the following code:</p>\n\n\n<pre><code>Ext.create('Ext.data.Store', {\n    groupDir: 'ASC',\n    getGroupString: function(instance) {\n        return instance.get('name')[0];\n    }\n});\n</code></pre>\n\n",
        "href": "Store2.html#Ext-data-Store-method-getGroupString",
        "linenr": 751,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The string to compare when forming groups</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The model instance</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "instance"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the string to group on for a given model instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getGroupString",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an array containing the result of applying grouping to the records in this store. See <a href=\"#/api/Ext.data.DirectStore-property-groupField\" rel=\"Ext.data.DirectStore-property-groupField\" class=\"docClass\">groupField</a>,\n<a href=\"#/api/Ext.data.DirectStore-property-groupDir\" rel=\"Ext.data.DirectStore-property-groupDir\" class=\"docClass\">groupDir</a> and <a href=\"#/api/Ext.data.DirectStore-method-getGroupString\" rel=\"Ext.data.DirectStore-method-getGroupString\" class=\"docClass\">getGroupString</a>. Example for a store containing records with a color field:</p>\n\n<pre><code>var myStore = Ext.create('Ext.data.Store', {\n    groupField: 'color',\n    groupDir  : 'DESC'\n});\n\nmyStore.getGroups(); //returns:\n[\n    {\n        name: 'yellow',\n        children: [\n            //all records where the color field is 'yellow'\n        ]\n    },\n    {\n        name: 'red',\n        children: [\n            //all records where the color field is 'red'\n        ]\n    }\n]\n</code></pre>\n\n",
        "href": "Store2.html#Ext-data-Store-method-getGroups",
        "linenr": 582,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The grouped data</p>\n",
          "type": "Object/Object[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) Pass in an optional groupName argument to access a specific group as defined by <a href=\"#/api/Ext.data.DirectStore-method-getGroupString\" rel=\"Ext.data.DirectStore-method-getGroupString\" class=\"docClass\">getGroupString</a></p>\n",
            "type": "String",
            "optional": true,
            "name": "groupName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns an array containing the result of applying grouping to the records in this store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getGroups",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet been saved on this Store (this happens when adding a non-phantom record from another Store into this one)</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getNewRecords",
        "linenr": 470,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "<p>The Model instances</p>\n",
          "type": "Ext.data.Model[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns all Model instances that are either currently a phantom (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "getNewRecords",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Determines the page from a record index</p>\n",
        "href": "Store2.html#Ext-data-Store-method-getPageFromRecordIndex",
        "linenr": 1562,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The page the record belongs to</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The record index</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Determines the page from a record index ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getPageFromRecordIndex",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the proxy currently attached to this proxy instance</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getProxy",
        "linenr": 325,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "<p>The Proxy instance</p>\n",
          "type": "Ext.data.proxy.Proxy"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the proxy currently attached to this proxy instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "getProxy",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a range of Records between specified indices.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-getRange",
        "linenr": 1900,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>An array of Records</p>\n",
          "type": "Ext.data.Model[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The starting index (defaults to 0)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "startIndex"
          },
          {
            "doc": "<p>(optional) The ending index (defaults to the last Record in the Store)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "endIndex"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a range of Records between specified indices. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getRange",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getRemovedRecords",
        "linenr": 496,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "<p>The removed Model instances</p>\n",
          "type": "Ext.data.Model[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns any records that have been removed from the store but not yet destroyed on the proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "getRemovedRecords",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the total number of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances that the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>\nindicates exist. This will usually differ from <a href=\"#/api/Ext.data.DirectStore-method-getCount\" rel=\"Ext.data.DirectStore-method-getCount\" class=\"docClass\">getCount</a> when using paging - getCount returns the\nnumber of records loaded into the Store at the moment, getTotalCount returns the number of records that\ncould be loaded into the Store if the Store contained all data</p>\n",
        "href": "Store2.html#Ext-data-Store-method-getTotalCount",
        "linenr": 1880,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The total number of Model instances available via the Proxy</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the total number of Model instances that the Proxy\nindicates exist. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "getTotalCount",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getUpdatedRecords",
        "linenr": 479,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "<p>The updated Model instances</p>\n",
          "type": "Ext.data.Model[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "getUpdatedRecords",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Group data in the store</p>\n",
        "href": "Store2.html#Ext-data-Store-method-group",
        "linenr": 496,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of grouper configurations.</p>\n",
            "type": "String/Object[]",
            "optional": false,
            "name": "groupers"
          },
          {
            "doc": "<p>The overall direction to group the data by. Defaults to \"ASC\".</p>\n",
            "type": "String",
            "optional": false,
            "name": "direction"
          }
        ],
        "deprecated": null,
        "shortDoc": "Group data in the store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "group",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take care of any loading that may\nbe necessary.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-guaranteeRange",
        "linenr": 1649,
        "html_filename": "Store2.html",
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
            "name": "start"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "end"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "cb"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take car...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "guaranteeRange",
        "owner": "Ext.data.Store",
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
        "doc": "<p>Returns the number of pending requests out.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-hasPendingRequests",
        "linenr": 1634,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the number of pending requests out. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "hasPendingRequests",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the index within the cache of the passed Record.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-indexOf",
        "linenr": 1921,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the index within the cache of the passed Record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "indexOf",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the index within the cache of the Record with the passed id.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-indexOfId",
        "linenr": 1944,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The index of the Record. Returns -1 if not found.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Record to find.</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the index within the cache of the Record with the passed id. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "indexOfId",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the index within the entire dataset. From 0 to the totalCount.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-indexOfTotal",
        "linenr": 1931,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the index within the entire dataset. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "indexOfTotal",
        "owner": "Ext.data.Store",
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
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method during their\nown initialization.</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
        "linenr": 32,
        "html_filename": "Sortable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Performs initialization of this mixin. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "method",
        "name": "initSortable",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts Model instances into the Store at the given index and fires the <a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a> event.\nSee also <code><a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a></code>.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-insert",
        "linenr": 773,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The start index at which to insert the passed Records.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects to add to the cache.</p>\n",
            "type": "Ext.data.Model[]",
            "optional": false,
            "name": "records"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts Model instances into the Store at the given index and fires the add event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "insert",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this store is currently filtered</p>\n",
        "href": "Store2.html#Ext-data-Store-method-isFiltered",
        "linenr": 1215,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this store is currently filtered ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "isFiltered",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if the store is currently grouped</p>\n",
        "href": "Store2.html#Ext-data-Store-method-isGrouped",
        "linenr": 565,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the store is grouped.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Checks if the store is currently grouped ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "isGrouped",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the Store is currently performing a load operation</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-isLoading",
        "linenr": 735,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the Store is currently loading</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the Store is currently performing a load operation ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "isLoading",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenience function for getting the last model instance in the store</p>\n",
        "href": "Store2.html#Ext-data-Store-method-last",
        "linenr": 1993,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The last model instance in the store, or undefined</p>\n",
          "type": "Ext.data.Model/undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the last record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenience function for getting the last model instance in the store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "last",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads data into the Store via the configured <a href=\"#/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>. This uses the Proxy to make an\nasynchronous call to whatever storage backend the Proxy uses, automatically adding the retrieved\ninstances into the Store and calling an optional callback if required. Example usage:</p>\n\n\n\n\n<pre><code>store.load({\n    scope   : this,\n    callback: function(records, operation, success) {\n        //the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object contains all of the details of the load operation\n        console.log(records);\n    }\n});\n</code></pre>\n\n\n\n\n<p>If the callback scope does not need to be set, a function can simply be passed:</p>\n\n\n\n\n<pre><code>store.load(function(records, operation, success) {\n    console.log('loaded records');\n});\n</code></pre>\n\n",
        "href": "Store2.html#Ext-data-Store-method-load",
        "linenr": 936,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.</p>\n",
            "type": "Object/Function",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads data into the Store via the configured proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "load",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads an array of data straight into the Store</p>\n",
        "href": "Store2.html#Ext-data-Store-method-loadData",
        "linenr": 1261,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Array of data to load. Any non-model instances will be cast into model instances first</p>\n",
            "type": "Ext.data.Model[]/Object[]",
            "optional": false,
            "name": "data"
          },
          {
            "doc": "<p>True to add the records to the existing records in the store, false to remove the old ones first</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "append"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads an array of data straight into the Store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "loadData",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes a normal\nload operation, passing in calculated 'start' and 'limit' params</p>\n",
        "href": "Store2.html#Ext-data-Store-method-loadPage",
        "linenr": 1334,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The number of the page to load</p>\n",
            "type": "Number",
            "optional": false,
            "name": "page"
          },
          {
            "doc": "<p>See options for <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads a given 'page' of data by setting the start and limit values appropriately. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "loadPage",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. This should only usually\nbe called internally when loading from the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>, when adding records manually use <a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a> instead</p>\n",
        "href": "Store2.html#Ext-data-Store-method-loadRecords",
        "linenr": 1284,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array of records to load</p>\n",
            "type": "Ext.data.Model[]",
            "optional": false,
            "name": "records"
          },
          {
            "doc": "<p>{addRecords: true} to add these records to the existing records, false to remove the Store's existing records first</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "loadRecords",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the maximum value in the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-max",
        "linenr": 2105,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The maximum value, if no items exist, undefined.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The field in each record</p>\n",
            "type": "String",
            "optional": false,
            "name": "field"
          },
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the maximum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the maximum value in the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "max",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the minimum value in the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-min",
        "linenr": 2067,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The minimum value, if no items exist, undefined.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The field in each record</p>\n",
            "type": "String",
            "optional": false,
            "name": "field"
          },
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the minimum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the minimum value in the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "min",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.DirectStore-method-addManagedListener\" rel=\"Ext.data.DirectStore-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.DirectStore-method-removeManagedListener\" rel=\"Ext.data.DirectStore-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.DirectStore-method-mon\" rel=\"Ext.data.DirectStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Loads the next 'page' in the current data set</p>\n",
        "href": "Store2.html#Ext-data-Store-method-nextPage",
        "linenr": 1354,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>See options for <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads the next 'page' in the current data set ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "nextPage",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.DirectStore-method-fireEvent\" rel=\"Ext.data.DirectStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Prefetches data into the store using its configured <a href=\"#/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-prefetch",
        "linenr": 1381,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Prefetches data into the store using its configured proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "prefetch",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Prefetches a page of data.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-prefetchPage",
        "linenr": 1415,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The page to prefetch</p>\n",
            "type": "Number",
            "optional": false,
            "name": "page"
          },
          {
            "doc": "<p>(Optional) config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Prefetches a page of data. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "prefetchPage",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads the previous 'page' in the current data set</p>\n",
        "href": "Store2.html#Ext-data-Store-method-previousPage",
        "linenr": 1362,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>See options for <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads the previous 'page' in the current data set ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "previousPage",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-purgeRecords",
        "linenr": 1521,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "purgeRecords",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Query the cached records in this Store using a filtering function. The specified function\nwill be called with each record in this Store. If the function returns <tt>true</tt> the record is\nincluded in the results.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-queryBy",
        "linenr": 1243,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns an <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a> of the matched records</p>\n",
          "type": "Ext.util.MixedCollection"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Query the cached records in this Store using a filtering function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "queryBy",
        "owner": "Ext.data.Store",
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
        "doc": "<p>Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'datachanged' event after removal.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-remove",
        "linenr": 873,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance or array of instances to remove</p>\n",
            "type": "Ext.data.Model/Ext.data.Model[]",
            "optional": false,
            "name": "records"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "remove",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Remove all items from the store.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-removeAll",
        "linenr": 1953,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Prevent the <code>clear</code> event from being fired.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Remove all items from the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "removeAll",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes the model instance at the given index</p>\n",
        "href": "Store2.html#Ext-data-Store-method-removeAt",
        "linenr": 924,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The record index</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes the model instance at the given index ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "removeAt",
        "owner": "Ext.data.Store",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.DirectStore-method-mon\" rel=\"Ext.data.DirectStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.DirectStore-method-suspendEvents\" rel=\"Ext.data.DirectStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "doc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-setProxy",
        "linenr": 296,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "<p>The attached Proxy object</p>\n",
          "type": "Ext.data.proxy.Proxy"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new Proxy, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> instance</p>\n",
            "type": "String/Object/Ext.data.proxy.Proxy",
            "optional": false,
            "name": "proxy"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the Store's Proxy by string, config object or Proxy instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "setProxy",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates\nthe actual sorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n</code></pre>\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n",
        "href": "Sortable.html#Ext-util-Sortable-method-sort",
        "linenr": 53,
        "html_filename": "Sortable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.util.Sorter[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either a string name of one of the fields in this Store's configured\n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>, or an array of sorter configurations.</p>\n",
            "type": "String/Ext.util.Sorter[]",
            "optional": false,
            "name": "sorters"
          },
          {
            "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
            "type": "String",
            "optional": false,
            "name": "direction"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sorts the data in the Store by one or more of its properties. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "method",
        "name": "sort",
        "owner": "Ext.util.Sortable",
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
        "doc": "<p>Sums the value of <tt>property</tt> for each <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a> between <tt>start</tt>\nand <tt>end</tt> and returns the result.</p>\n",
        "href": "Store2.html#Ext-data-Store-method-sum",
        "linenr": 2014,
        "html_filename": "Store2.html",
        "alias": null,
        "return": {
          "doc": "<p>The sum</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A field in each record</p>\n",
            "type": "String",
            "optional": false,
            "name": "field"
          },
          {
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the sum for that group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "grouped"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sums the value of property for each record between start\nand end and returns the result. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "method",
        "name": "sum",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.DirectStore-method-resumeEvents\" rel=\"Ext.data.DirectStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.DirectStore-method-resumeEvents\" rel=\"Ext.data.DirectStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in the store, updating the Store's internal representation of the records\nas each operation completes.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-sync",
        "linenr": 566,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Synchronizes the Store with its Proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "method",
        "name": "sync",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.DirectStore-method-removeListener\" rel=\"Ext.data.DirectStore-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
      }
    ],
    "event": [
      {
        "doc": "<p>Fired when a Model instance has been added to this Store</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-add",
        "linenr": 146,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The store</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          },
          {
            "doc": "<p>The Model instances that were added</p>\n",
            "type": "Ext.data.Model[]",
            "optional": false,
            "name": "records"
          },
          {
            "doc": "<p>The index at which the instances were inserted</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fired when a Model instance has been added to this Store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "add",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a request is made for a new data object. If the beforeload handler returns false the load\naction will be canceled.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforeload",
        "linenr": 185,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This Store</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          },
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object that will be passed to the Proxy to\nload the Store</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a request is made for a new data object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "beforeload",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a prefetch occurs. Return false to cancel.</p>\n",
        "href": "Store2.html#Ext-data-Store-event-beforeprefetch",
        "linenr": 356,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The associated operation</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a prefetch occurs. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "event",
        "name": "beforeprefetch",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fired before a call to <a href=\"#/api/Ext.data.DirectStore-method-sync\" rel=\"Ext.data.DirectStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforesync",
        "linenr": 213,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>Hash of all records to be synchronized, broken down into create, update and destroy</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fired before a call to sync is executed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "beforesync",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fired after the <a href=\"#/api/Ext.data.DirectStore-method-removeAll\" rel=\"Ext.data.DirectStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-clear",
        "linenr": 219,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fired after the removeAll method is called. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "clear",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires whenever the records in the Store have changed in some way - this could include adding or removing\nrecords, or updating the data in existing records</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-datachanged",
        "linenr": 177,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The data store</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires whenever the records in the Store have changed in some way - this could include adding or removing\nrecords, or ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "datachanged",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fired whenever the grouping in the grid changes</p>\n",
        "href": "Store2.html#Ext-data-Store-event-groupchange",
        "linenr": 363,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The store</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          },
          {
            "doc": "<p>The array of grouper objects</p>\n",
            "type": "Ext.util.Grouper[]",
            "optional": false,
            "name": "groupers"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fired whenever the grouping in the grid changes ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "event",
        "name": "groupchange",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires whenever records have been prefetched</p>\n",
        "href": "Store2.html#Ext-data-Store-event-load",
        "linenr": 370,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>An array of records</p>\n",
            "type": "Ext.util.Grouper[]",
            "optional": false,
            "name": "records"
          },
          {
            "doc": "<p>True if the operation was successful.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "successful"
          },
          {
            "doc": "<p>The associated operation</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires whenever records have been prefetched ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "event",
        "name": "load",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fired when a Model instance has been removed from this Store</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-remove",
        "linenr": 155,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The Store object</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          },
          {
            "doc": "<p>The record that was removed</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record"
          },
          {
            "doc": "<p>The index of the record that was removed</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fired when a Model instance has been removed from this Store ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "remove",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a Model instance has been updated</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-update",
        "linenr": 164,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The Model instance that was updated</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "record"
          },
          {
            "doc": "<p>The update operation being performed. Value may be one of:</p>\n\n<pre><code>Ext.data.Model.EDIT\nExt.data.Model.REJECT\nExt.data.Model.COMMIT\n</code></pre>\n",
            "type": "String",
            "optional": false,
            "name": "operation"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a Model instance has been updated ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "update",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires whenever a successful write has been made via the configured <a href=\"#/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">Proxy</a></p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-write",
        "linenr": 204,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This Store</p>\n",
            "type": "Ext.data.Store",
            "optional": false,
            "name": "store"
          },
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object that was used in\nthe write</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires whenever a successful write has been made via the configured Proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "event",
        "name": "write",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "String",
        "doc": "<p>Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal representation of the data after each operation of the batch has completed, 'complete' will wait until\nthe entire batch has been completed before updating the Store's data. 'complete' is a good choice for local\nstorage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-batchUpdateMode",
        "linenr": 69,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Sets the updating behavior based on batch synchronization. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "property",
        "name": "batchUpdateMode",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The page that the Store has most recently loaded (see <a href=\"#/api/Ext.data.DirectStore-method-loadPage\" rel=\"Ext.data.DirectStore-method-loadPage\" class=\"docClass\">loadPage</a>)</p>\n",
        "href": "Store2.html#Ext-data-Store-property-currentPage",
        "linenr": 271,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "property",
        "name": "currentPage",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>The MixedCollection that holds this store's local cache of records</p>\n",
        "href": "Store2.html#Ext-data-Store-property-data",
        "linenr": 382,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "property",
        "name": "data",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The string type of the Proxy to create if none is specified. This defaults to creating a\n<a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">memory proxy</a>.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-defaultProxyType",
        "linenr": 100,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The string type of the Proxy to create if none is specified. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "property",
        "name": "defaultProxyType",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection",
        "linenr": 17,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "defaultSortDirection",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if <a href=\"#/api/Ext.data.Store-cfg-remoteFilter\" rel=\"Ext.data.Store-cfg-remoteFilter\" class=\"docClass\">remoteFilter</a> is true</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filterOnLoad",
        "linenr": 78,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "property",
        "name": "filterOnLoad",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filters</a> currently applied to this Store</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filters",
        "linenr": 287,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "property",
        "name": "filters",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The direction in which sorting should be applied when grouping. Defaults to \"ASC\" - the other supported value is \"DESC\"</p>\n",
        "href": "Store2.html#Ext-data-Store-property-groupDir",
        "linenr": 257,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The direction in which sorting should be applied when grouping. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "property",
        "name": "groupDir",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The (optional) field by which to group data in the store. Internally, grouping is very similar to sorting - the\ngroupField and <a href=\"#/api/Ext.data.DirectStore-property-groupDir\" rel=\"Ext.data.DirectStore-property-groupDir\" class=\"docClass\">groupDir</a> are injected as the first sorter (see <a href=\"#/api/Ext.data.DirectStore-method-sort\" rel=\"Ext.data.DirectStore-method-sort\" class=\"docClass\">sort</a>). Stores support a single\nlevel of grouping, and groups can be fetched via the <a href=\"#/api/Ext.data.DirectStore-method-getGroups\" rel=\"Ext.data.DirectStore-method-getGroups\" class=\"docClass\">getGroups</a> method.</p>\n",
        "href": "Store2.html#Ext-data-Store-property-groupField",
        "linenr": 248,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The (optional) field by which to group data in the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "property",
        "name": "groupField",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Grouper\" rel=\"Ext.util.Grouper\" class=\"docClass\">Groupers</a> currently applied to this Store</p>\n",
        "href": "Store2.html#Ext-data-Store-property-groupers",
        "linenr": 404,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "property",
        "name": "groupers",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the Store has already been destroyed. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-isDestroyed",
        "linenr": 107,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the Store has already been destroyed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "property",
        "name": "isDestroyed",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-isSortable",
        "linenr": 11,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Flag denoting that this object is sortable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "isSortable",
        "owner": "Ext.util.Sortable",
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
        "type": "Ext.util.MixedCollection",
        "doc": "<p>A pristine (unfiltered) collection of the records in this store. This is used to reinstate\nrecords when a filter is removed or changed</p>\n",
        "href": "Store2.html#Ext-data-Store-property-snapshot",
        "linenr": 1172,
        "html_filename": "Store2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A pristine (unfiltered) collection of the records in this store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "tagname": "property",
        "name": "snapshot",
        "owner": "Ext.data.Store",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if <a href=\"#/api/Ext.data.Store-cfg-remoteSort\" rel=\"Ext.data.Store-cfg-remoteSort\" class=\"docClass\">remoteSort</a> is true</p>\n",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-sortOnLoad",
        "linenr": 85,
        "html_filename": "AbstractStore.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "tagname": "property",
        "name": "sortOnLoad",
        "owner": "Ext.data.AbstractStore",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The property in each item that contains the data to sort.</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-sortRoot",
        "linenr": 27,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "sortRoot",
        "owner": "Ext.util.Sortable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.util.MixedCollection",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
        "href": "Sortable.html#Ext-util-Sortable-property-sorters",
        "linenr": 40,
        "html_filename": "Sortable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "tagname": "property",
        "name": "sorters",
        "owner": "Ext.util.Sortable",
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
    "Ext.data.AbstractStore",
    "Ext.data.Store"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/DirectStore.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.DirectStore",
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