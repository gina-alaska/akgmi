Ext.data.JsonP.Ext_data_proxy_Ajax({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "href": "Base3.html#Ext-Base-method-addStatics",
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 392,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Add / override static properties of this class. ...",
        "owner": "Ext.Base",
        "name": "addStatics",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-borrow",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 482,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Ext.Base",
            "doc": "<p>The class to borrow members from</p>\n\n",
            "optional": false,
            "name": "fromClass"
          },
          {
            "type": "String/String[]",
            "doc": "<p>The names of the members to borrow</p>\n\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "owner": "Ext.Base",
        "name": "borrow",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-create",
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "html_filename": "Base3.html",
        "linenr": 330,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "alias": null,
        "params": [

        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Create a new instance of this Class. ...",
        "owner": "Ext.Base",
        "name": "create",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-createAlias",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 658,
        "return": {
          "type": "undefined",
          "doc": "\n"
        },
        "alias": null,
        "params": [
          {
            "type": "String/Object",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n",
            "optional": false,
            "name": "alias"
          },
          {
            "type": "String/Object",
            "doc": "<p>The original method name</p>\n\n",
            "optional": false,
            "name": "origin"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "owner": "Ext.Base",
        "name": "createAlias",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-getName",
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 639,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n\n"
        },
        "alias": null,
        "params": [

        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Get the current class' name in string format. ...",
        "owner": "Ext.Base",
        "name": "getName",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-implement",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 420,
        "return": {
          "type": "undefined",
          "doc": "\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "owner": "Ext.Base",
        "name": "implement",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-override",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 524,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Override prototype members of this class. ...",
        "owner": "Ext.Base",
        "name": "override",
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
  "doc": "<p>AjaxProxy is one of the most widely-used ways of getting data into your application. It uses AJAX requests to load\ndata from the server, usually to be placed into a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>. Let's take a look at a typical setup.\nHere we're going to set up a Store that has an AjaxProxy. To prepare, we'll also set up a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email']\n});\n\n//The Store contains the AjaxProxy as an inline configuration\nvar store = Ext.create('Ext.data.Store', {\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json'\n    }\n});\n\nstore.load();\n</code></pre>\n\n<p>Our example is going to load user data into a Store, so we start off by defining a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> with\nthe fields that we expect the server to return. Next we set up the Store itself, along with a\n<a href=\"#/api/Ext.data.Store-cfg-proxy\" rel=\"Ext.data.Store-cfg-proxy\" class=\"docClass\">proxy</a> configuration. This configuration was automatically turned into an\n<a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> instance, with the url we specified being passed into AjaxProxy's constructor.\nIt's as if we'd done this:</p>\n\n<pre><code>new Ext.data.proxy.Ajax({\n    url: 'users.json',\n    model: 'User',\n    reader: 'json'\n});\n</code></pre>\n\n<p>A couple of extra configurations appeared here - <a href=\"#/api/Ext.data.proxy.Ajax-cfg-model\" rel=\"Ext.data.proxy.Ajax-cfg-model\" class=\"docClass\">model</a> and <a href=\"#/api/Ext.data.proxy.Ajax-cfg-reader\" rel=\"Ext.data.proxy.Ajax-cfg-reader\" class=\"docClass\">reader</a>. These are set by default when we\ncreate the proxy via the Store - the Store already knows about the Model, and Proxy's default <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a> is <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>.</p>\n\n<p>Now when we call store.load(), the AjaxProxy springs into action, making a request to the url we configured\n('users.json' in this case). As we're performing a read, it sends a GET request to that url (see\n<a href=\"#/api/Ext.data.proxy.Ajax-property-actionMethods\" rel=\"Ext.data.proxy.Ajax-property-actionMethods\" class=\"docClass\">actionMethods</a> to customize this - by default any kind of read will be sent as a GET request and any kind of write\nwill be sent as a POST request).</p>\n\n<h1>Limitations</h1>\n\n<p>AjaxProxy cannot be used to retrieve data from other domains. If your application is running on http://domainA.com it\ncannot load data from http://domainB.com because browsers have a built-in security policy that prohibits domains\ntalking to each other via AJAX.</p>\n\n<p>If you need to read data from another domain and can't set up a proxy server (some software that runs on your own\ndomain's web server and transparently forwards requests to http://domainB.com, making it look like they actually came\nfrom http://domainA.com), you can use <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a> and a technique known as JSON-P (JSON with\nPadding), which can help you get around the problem so long as the server on http://domainB.com is set up to support\nJSON-P responses. See <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">JsonPProxy</a>'s introduction docs for more details.</p>\n\n<h1>Readers and Writers</h1>\n\n<p>AjaxProxy can be configured to use any type of <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a> to decode the server's response.\nIf no Reader is supplied, AjaxProxy will default to using a <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>. Reader\nconfiguration can be passed in as a simple object, which the Proxy automatically turns into a <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Reader</a> instance:</p>\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    model: 'User',\n    reader: {\n        type: 'xml',\n        root: 'users'\n    }\n});\n\nproxy.getReader(); //returns an <a href=\"#/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">XmlReader</a> instance based on the config we supplied\n</code></pre>\n\n<h1>Url generation</h1>\n\n<p>AjaxProxy automatically inserts any sorting, filtering, paging and grouping options into the url it generates for\neach request. These are controlled with the following configuration options:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-pageParam\" rel=\"Ext.data.proxy.Ajax-cfg-pageParam\" class=\"docClass\">pageParam</a> - controls how the page number is sent to the server (see also <a href=\"#/api/Ext.data.proxy.Ajax-cfg-startParam\" rel=\"Ext.data.proxy.Ajax-cfg-startParam\" class=\"docClass\">startParam</a> and <a href=\"#/api/Ext.data.proxy.Ajax-cfg-limitParam\" rel=\"Ext.data.proxy.Ajax-cfg-limitParam\" class=\"docClass\">limitParam</a>)</li>\n<li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-sortParam\" rel=\"Ext.data.proxy.Ajax-cfg-sortParam\" class=\"docClass\">sortParam</a> - controls how sort information is sent to the server</li>\n<li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-groupParam\" rel=\"Ext.data.proxy.Ajax-cfg-groupParam\" class=\"docClass\">groupParam</a> - controls how grouping information is sent to the server</li>\n<li><a href=\"#/api/Ext.data.proxy.Ajax-cfg-filterParam\" rel=\"Ext.data.proxy.Ajax-cfg-filterParam\" class=\"docClass\">filterParam</a> - controls how filter information is sent to the server</li>\n</ul>\n\n\n<p>Each request sent by AjaxProxy is described by an <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a>. To see how we can customize\nthe generated urls, let's say we're loading the Proxy with the following Operation:</p>\n\n<pre><code>var operation = new Ext.data.Operation({\n    action: 'read',\n    page  : 2\n});\n</code></pre>\n\n<p>Now we'll issue the request for this Operation by calling <a href=\"#/api/Ext.data.proxy.Ajax-method-read\" rel=\"Ext.data.proxy.Ajax-method-read\" class=\"docClass\">read</a>:</p>\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users'\n});\n\nproxy.read(operation); //GET /users?page=2\n</code></pre>\n\n<p>Easy enough - the Proxy just copied the page property from the Operation. We can customize how this page data is sent\nto the server:</p>\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users',\n    pagePage: 'pageNumber'\n});\n\nproxy.read(operation); //GET /users?pageNumber=2\n</code></pre>\n\n<p>Alternatively, our Operation could have been configured to send start and limit parameters instead of page:</p>\n\n<pre><code>var operation = new Ext.data.Operation({\n    action: 'read',\n    start : 50,\n    limit : 25\n});\n\nvar proxy = new Ext.data.proxy.Ajax({\n    url: '/users'\n});\n\nproxy.read(operation); //GET /users?start=50&amp;limit;=25\n</code></pre>\n\n<p>Again we can customize this url:</p>\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users',\n    startParam: 'startIndex',\n    limitParam: 'limitIndex'\n});\n\nproxy.read(operation); //GET /users?startIndex=50&amp;limitIndex;=25\n</code></pre>\n\n<p>AjaxProxy will also send sort and filter information to the server. Let's take a look at how this looks with a more\nexpressive Operation object:</p>\n\n<pre><code>var operation = new Ext.data.Operation({\n    action: 'read',\n    sorters: [\n        new Ext.util.Sorter({\n            property : 'name',\n            direction: 'ASC'\n        }),\n        new Ext.util.Sorter({\n            property : 'age',\n            direction: 'DESC'\n        })\n    ],\n    filters: [\n        new Ext.util.Filter({\n            property: 'eyeColor',\n            value   : 'brown'\n        })\n    ]\n});\n</code></pre>\n\n<p>This is the type of object that is generated internally when loading a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> with sorters and\nfilters defined. By default the AjaxProxy will JSON encode the sorters and filters, resulting in something like this\n(note that the url is escaped before sending the request, but is left unescaped here for clarity):</p>\n\n<pre><code>var proxy = new Ext.data.proxy.Ajax({\n    url: '/users'\n});\n\nproxy.read(operation); //GET /users?sort=[{\"property\":\"name\",\"direction\":\"ASC\"},{\"property\":\"age\",\"direction\":\"DESC\"}]&amp;filter;=[{\"property\":\"eyeColor\",\"value\":\"brown\"}]\n</code></pre>\n\n<p>We can again customize how this is created by supplying a few configuration options. Let's say our server is set up\nto receive sorting information is a format like \"sortBy=name#ASC,age#DESC\". We can configure AjaxProxy to provide\nthat format like this:</p>\n\n<pre><code> var proxy = new Ext.data.proxy.Ajax({\n     url: '/users',\n     sortParam: 'sortBy',\n     filterParam: 'filterBy',\n\n     //our custom implementation of sorter encoding - turns our sorters into \"name#ASC,age#DESC\"\n     encodeSorters: function(sorters) {\n         var length   = sorters.length,\n             sortStrs = [],\n             sorter, i;\n\n         for (i = 0; i &lt; length; i++) {\n             sorter = sorters[i];\n\n             sortStrs[i] = sorter.property + '#' + sorter.direction\n         }\n\n         return sortStrs.join(\",\");\n     }\n });\n\n proxy.read(operation); //GET /users?sortBy=name#ASC,age#DESC&amp;filterBy;=[{\"property\":\"eyeColor\",\"value\":\"brown\"}]\n</code></pre>\n\n<p>We can also provide a custom <a href=\"#/api/Ext.data.proxy.Ajax-method-encodeFilters\" rel=\"Ext.data.proxy.Ajax-method-encodeFilters\" class=\"docClass\">encodeFilters</a> function to encode our filters.</p>\n",
  "extends": "Ext.data.proxy.Server",
  "href": "Ajax.html#Ext-data-proxy-Ajax",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "linenr": 1,
  "html_filename": "Ajax.html",
  "subclasses": [
    "Ext.data.proxy.Rest"
  ],
  "members": {
    "cfg": [
      {
        "type": "Object",
        "doc": "<p>Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". Defaults to:</p>\n\n<pre><code>api: {\n    create  : undefined,\n    read    : undefined,\n    update  : undefined,\n    destroy : undefined\n}\n</code></pre>\n\n<p>The url is built based upon the action being executed [create|read|update|destroy] using the commensurate\n<a href=\"#/api/Ext.data.proxy.Ajax-cfg-api\" rel=\"Ext.data.proxy.Ajax-cfg-api\" class=\"docClass\">api</a> property, or if undefined default to the configured\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>.<a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n\n<p>For example:</p>\n\n<pre><code>api: {\n    create  : '/controller/new',\n    read    : '/controller/load',\n    update  : '/controller/update',\n    destroy : '/controller/destroy_action'\n}\n</code></pre>\n\n<p>If the specific URL for a given CRUD action is undefined, the CRUD action request will be directed to the\nconfigured <a href=\"#/api/Ext.data.proxy.Server-cfg-url\" rel=\"Ext.data.proxy.Server-cfg-url\" class=\"docClass\">url</a>.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-api",
        "linenr": 97,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specific urls to call on CRUD action methods \"create\", \"read\", \"update\" and \"destroy\". ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "api",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to batch actions of a particular type when synchronizing the store. Defaults to true.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchActions",
        "linenr": 57,
        "html_filename": "Proxy2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to batch actions of a particular type when synchronizing the store. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "batchActions",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. Override this to set a different\norder for the batched CRUD actions to be executed in. Defaults to 'create,update,destroy'.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-batchOrder",
        "linenr": 50,
        "html_filename": "Proxy2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Comma-separated ordering 'create', 'update' and 'destroy' actions when batching. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "batchOrder",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the cache param added to the url when using noCache. Defaults to \"_dc\".</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-cacheString",
        "linenr": 85,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the cache param added to the url when using noCache. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "cacheString",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the direction parameter to send in a request. <strong>This is only used when simpleSortMode is set to\ntrue.</strong> Defaults to 'dir'.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-directionParam",
        "linenr": 64,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the direction parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "directionParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Extra parameters that will be included on every request. Individual requests with params of the same name\nwill override these params when they are in conflict.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-extraParams",
        "linenr": 141,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Extra parameters that will be included on every request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "extraParams",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the 'filter' parameter to send in a request. Defaults to 'filter'. Set this to undefined if you don't\nwant to send a filter parameter.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-filterParam",
        "linenr": 57,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the 'filter' parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "filterParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the 'group' parameter to send in a request. Defaults to 'group'. Set this to undefined if you don't\nwant to send a group parameter.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-groupParam",
        "linenr": 43,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the 'group' parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "groupParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Any headers to add to the Ajax request. Defaults to undefined.</p>\n",
        "href": "Ajax.html#Ext-data-proxy-Ajax-cfg-headers",
        "linenr": 224,
        "html_filename": "Ajax.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Any headers to add to the Ajax request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Ajax.js",
        "private": false,
        "tagname": "cfg",
        "name": "headers",
        "owner": "Ext.data.proxy.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the 'limit' parameter to send in a request. Defaults to 'limit'. Set this to undefined if you don't\nwant to send a limit parameter.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-limitParam",
        "linenr": 36,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the 'limit' parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "limitParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
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
        "type": "String/Ext.data.Model",
        "doc": "<p>The name of the Model to tie to this Proxy. Can be either the string name of the Model, or a reference to the\nModel constructor. Required.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-model",
        "linenr": 77,
        "html_filename": "Proxy2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the Model to tie to this Proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "model",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Disable caching by adding a unique parameter name to the request. Set to false to allow caching. Defaults to true.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-noCache",
        "linenr": 79,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Disable caching by adding a unique parameter name to the request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "noCache",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the 'page' parameter to send in a request. Defaults to 'page'. Set this to undefined if you don't\nwant to send a page parameter.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-pageParam",
        "linenr": 22,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the 'page' parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "pageParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object/String/Ext.data.reader.Reader",
        "doc": "<p>The <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> to use to decode the server's response or data read from client. This can either be a\nReader instance, a config object or just a valid Reader type name (e.g. 'json', 'xml').</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-reader",
        "linenr": 83,
        "html_filename": "Proxy2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The Ext.data.reader.Reader to use to decode the server's response or data read from client. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "reader",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a\nremote sort is requested. The directionParam and sortParam will be sent with the property name and either 'ASC'\nor 'DESC'.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-simpleSortMode",
        "linenr": 71,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Enabling simpleSortMode in conjunction with remoteSort will only send one sort property and a direction when a\nremote...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "simpleSortMode",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the 'sort' parameter to send in a request. Defaults to 'sort'. Set this to undefined if you don't\nwant to send a sort parameter.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-sortParam",
        "linenr": 50,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the 'sort' parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "sortParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the 'start' parameter to send in a request. Defaults to 'start'. Set this to undefined if you don't\nwant to send a start parameter.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-startParam",
        "linenr": 29,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the 'start' parameter to send in a request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "startParam",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of milliseconds to wait for a response. Defaults to 30000 milliseconds (30 seconds).</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-timeout",
        "linenr": 91,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of milliseconds to wait for a response. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "timeout",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The URL from which to request the data object.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-cfg-url",
        "linenr": 17,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "cfg",
        "name": "url",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object/String/Ext.data.writer.Writer",
        "doc": "<p>The <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> to use to encode any request sent to the server or saved to client. This can either be\na Writer instance, a config object or just a valid Writer type name (e.g. 'json', 'xml').</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-cfg-writer",
        "linenr": 89,
        "html_filename": "Proxy2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The Ext.data.writer.Writer to use to encode any request sent to the server or saved to client. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "writer",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Note that if this HttpProxy is being used by a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>, then the Store's call to\n<a href=\"#/api/Ext.data.Store-event-load\" rel=\"Ext.data.Store-event-load\" class=\"docClass\">load</a> will override any specified callback and params options. In this case, use the\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s events to modify parameters, or react to loading events.</p>\n",
        "href": "Ajax.html#Ext-data-proxy-Ajax-method-constructor",
        "linenr": 1,
        "html_filename": "Ajax.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config object.\nIf an options parameter is passed, the singleton <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> object will be used to make the request.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Note that if this HttpProxy is being used by a Store, then the Store's call to\nload will override any specified callb...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Ajax.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.proxy.Ajax",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Ajax-method-fireEvent\" rel=\"Ext.data.proxy.Ajax-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Optional callback function which can be used to clean up after a request has been completed.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-method-afterRequest",
        "linenr": 429,
        "html_filename": "Server.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Request object</p>\n",
            "type": "Ext.data.Request",
            "optional": false,
            "name": "request"
          },
          {
            "doc": "<p>True if the request was successful</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "success"
          }
        ],
        "deprecated": null,
        "shortDoc": "Optional callback function which can be used to clean up after a request has been completed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "method",
        "name": "afterRequest",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Performs a batch of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operations</a>, in the order specified by <a href=\"#/api/Ext.data.proxy.Ajax-cfg-batchOrder\" rel=\"Ext.data.proxy.Ajax-cfg-batchOrder\" class=\"docClass\">batchOrder</a>. Used\ninternally by <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#/api/Ext.data.Store-method-sync\" rel=\"Ext.data.Store-method-sync\" class=\"docClass\">sync</a> method. Example usage:</p>\n\n<pre><code>myProxy.batch({\n    create : [myModel1, myModel2],\n    update : [myModel3],\n    destroy: [myModel4, myModel5]\n});\n</code></pre>\n\n<p>Where the myModel* above are <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances - in this case 1 and 2 are new instances and\nhave not been saved before, 3 has been saved previously but needs to be updated, and 4 and 5 have already been\nsaved but should now be destroyed.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-batch",
        "linenr": 256,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "<p>The newly created <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a> object</p>\n",
          "type": "Ext.data.Batch"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Object containing the Model instances to act upon, keyed by action name</p>\n",
            "type": "Object",
            "optional": false,
            "name": "operations"
          },
          {
            "doc": "<p>(optional) listeners object passed straight through to the Batch -\nsee <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Ext.data.Batch</a></p>\n",
            "type": "Object",
            "optional": true,
            "name": "listeners"
          }
        ],
        "deprecated": null,
        "shortDoc": "Performs a batch of Operations, in the order specified by batchOrder. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "batch",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates and returns an <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object based on the options passed by the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\nthat this Proxy is attached to.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-method-buildRequest",
        "linenr": 171,
        "html_filename": "Server.html",
        "alias": null,
        "return": {
          "doc": "<p>The request object</p>\n",
          "type": "Ext.data.Request"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a> object to execute</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates and returns an Ext.data.Request object based on the options passed by the Store\nthat this Proxy is attached to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "method",
        "name": "buildRequest",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Generates a url based on a given <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object. By default, ServerProxy's buildUrl will add the\ncache-buster param to the end of the url. Subclasses may need to perform additional modifications to the url.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-method-buildUrl",
        "linenr": 377,
        "html_filename": "Server.html",
        "alias": null,
        "return": {
          "doc": "<p>The url</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The request object</p>\n",
            "type": "Ext.data.Request",
            "optional": false,
            "name": "request"
          }
        ],
        "deprecated": null,
        "shortDoc": "Generates a url based on a given Ext.data.Request object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "method",
        "name": "buildUrl",
        "owner": "Ext.data.proxy.Server",
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
        "doc": "<p>Performs the given create operation.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-create",
        "linenr": 220,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Operation to perform</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Performs the given create operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Performs the given destroy operation.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-destroy",
        "linenr": 247,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Operation to perform</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Performs the given destroy operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>In ServerProxy subclasses, the <a href=\"#/api/Ext.data.proxy.Ajax-method-create\" rel=\"Ext.data.proxy.Ajax-method-create\" class=\"docClass\">create</a>, <a href=\"#/api/Ext.data.proxy.Ajax-method-read\" rel=\"Ext.data.proxy.Ajax-method-read\" class=\"docClass\">read</a>, <a href=\"#/api/Ext.data.proxy.Ajax-method-update\" rel=\"Ext.data.proxy.Ajax-method-update\" class=\"docClass\">update</a> and <a href=\"#/api/Ext.data.proxy.Ajax-method-destroy\" rel=\"Ext.data.proxy.Ajax-method-destroy\" class=\"docClass\">destroy</a> methods all\npass through to doRequest. Each ServerProxy subclass must implement the doRequest method - see <a href=\"#/api/Ext.data.proxy.JsonP\" rel=\"Ext.data.proxy.JsonP\" class=\"docClass\">Ext.data.proxy.JsonP</a> and <a href=\"#/api/Ext.data.proxy.Ajax\" rel=\"Ext.data.proxy.Ajax\" class=\"docClass\">Ext.data.proxy.Ajax</a> for examples. This method carries the same signature as\neach of the methods that delegate to it.</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-method-doRequest",
        "linenr": 413,
        "html_filename": "Server.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "doc": "<p>The callback function to call when the Operation has completed</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>The scope in which to execute the callback</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "In ServerProxy subclasses, the create, read, update and destroy methods all\npass through to doRequest. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "method",
        "name": "doRequest",
        "owner": "Ext.data.proxy.Server",
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
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the filter data</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-method-encodeFilters",
        "linenr": 298,
        "html_filename": "Server.html",
        "alias": null,
        "return": {
          "doc": "<p>The encoded filters</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filter</a> objects</p>\n",
            "type": "Ext.util.Filter[]",
            "optional": false,
            "name": "filters"
          }
        ],
        "deprecated": null,
        "shortDoc": "Encodes the array of Ext.util.Filter objects into a string to be sent in the request url. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "method",
        "name": "encodeFilters",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Encodes the array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> objects into a string to be sent in the request url. By default,\nthis simply JSON-encodes the sorter data</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-method-encodeSorters",
        "linenr": 277,
        "html_filename": "Server.html",
        "alias": null,
        "return": {
          "doc": "<p>The encoded sorters</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorter</a> objects</p>\n",
            "type": "Ext.util.Sorter[]",
            "optional": false,
            "name": "sorters"
          }
        ],
        "deprecated": null,
        "shortDoc": "Encodes the array of Ext.util.Sorter objects into a string to be sent in the request url. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "method",
        "name": "encodeSorters",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.proxy.Ajax-method-enableBubble\" rel=\"Ext.data.proxy.Ajax-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "doc": "<p>Returns the HTTP method name for a given request. By default this returns based on a lookup on\n<a href=\"#/api/Ext.data.proxy.Ajax-property-actionMethods\" rel=\"Ext.data.proxy.Ajax-property-actionMethods\" class=\"docClass\">actionMethods</a>.</p>\n",
        "href": "Ajax.html#Ext-data-proxy-Ajax-method-getMethod",
        "linenr": 254,
        "html_filename": "Ajax.html",
        "alias": null,
        "return": {
          "doc": "<p>The HTTP method to use (should be one of 'GET', 'POST', 'PUT' or 'DELETE')</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The request object</p>\n",
            "type": "Ext.data.Request",
            "optional": false,
            "name": "request"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the HTTP method name for a given request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Ajax.js",
        "private": false,
        "tagname": "method",
        "name": "getMethod",
        "owner": "Ext.data.proxy.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the model attached to this Proxy</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getModel",
        "linenr": 136,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "<p>The model</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the model attached to this Proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "getModel",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the reader currently attached to this proxy instance</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getReader",
        "linenr": 176,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "<p>The Reader instance</p>\n",
          "type": "Ext.data.reader.Reader"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the reader currently attached to this proxy instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "getReader",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the writer currently attached to this proxy instance</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-getWriter",
        "linenr": 212,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "<p>The Writer instance</p>\n",
          "type": "Ext.data.writer.Writer"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the writer currently attached to this proxy instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "getWriter",
        "owner": "Ext.data.proxy.Proxy",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-addManagedListener\" rel=\"Ext.data.proxy.Ajax-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-removeManagedListener\" rel=\"Ext.data.proxy.Ajax-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Ajax-method-mon\" rel=\"Ext.data.proxy.Ajax-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.proxy.Ajax-method-fireEvent\" rel=\"Ext.data.proxy.Ajax-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Performs the given read operation.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-read",
        "linenr": 229,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Operation to perform</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Performs the given read operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "read",
        "owner": "Ext.data.proxy.Proxy",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.proxy.Ajax-method-mon\" rel=\"Ext.data.proxy.Ajax-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.proxy.Ajax-method-suspendEvents\" rel=\"Ext.data.proxy.Ajax-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "doc": "<p>Sets the model associated with this proxy. This will only usually be called by a Store</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setModel",
        "linenr": 115,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new model. Can be either the model name string,\nor a reference to the model's constructor</p>\n",
            "type": "String/Ext.data.Model",
            "optional": false,
            "name": "model"
          },
          {
            "doc": "<p>Sets the new model on the associated Store, if one is present</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "setOnStore"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the model associated with this proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "setModel",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the Proxy's Reader by string, config object or Reader instance</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setReader",
        "linenr": 144,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "<p>The attached Reader object</p>\n",
          "type": "Ext.data.reader.Reader"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new Reader, which can be either a type string,\na configuration object or an <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> instance</p>\n",
            "type": "String/Object/Ext.data.reader.Reader",
            "optional": false,
            "name": "reader"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the Proxy's Reader by string, config object or Reader instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "setReader",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the Proxy's Writer by string, config object or Writer instance</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-setWriter",
        "linenr": 184,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "<p>The attached Writer object</p>\n",
          "type": "Ext.data.writer.Writer"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new Writer, which can be either a type string,\na configuration object or an <a href=\"#/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a> instance</p>\n",
            "type": "String/Object/Ext.data.writer.Writer",
            "optional": false,
            "name": "writer"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the Proxy's Writer by string, config object or Writer instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "setWriter",
        "owner": "Ext.data.proxy.Proxy",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.proxy.Ajax-method-resumeEvents\" rel=\"Ext.data.proxy.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.proxy.Ajax-method-resumeEvents\" rel=\"Ext.data.proxy.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.proxy.Ajax-method-removeListener\" rel=\"Ext.data.proxy.Ajax-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.data.proxy.Ajax-method-addListener\" rel=\"Ext.data.proxy.Ajax-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Performs the given update operation.</p>\n",
        "href": "Proxy2.html#Ext-data-proxy-Proxy-method-update",
        "linenr": 238,
        "html_filename": "Proxy2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Operation to perform</p>\n",
            "type": "Ext.data.Operation",
            "optional": false,
            "name": "operation"
          },
          {
            "doc": "<p>Callback function to be called when the Operation has completed (whether successful or not)</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>Scope to execute the callback function in</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Performs the given update operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "update",
        "owner": "Ext.data.proxy.Proxy",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [
      {
        "doc": "<p>Fires when the server returns an exception</p>\n",
        "href": "Server.html#Ext-data-proxy-Server-event-exception",
        "linenr": 130,
        "html_filename": "Server.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.data.proxy.Proxy",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The response from the AJAX request</p>\n",
            "type": "Object",
            "optional": false,
            "name": "response"
          },
          {
            "doc": "<p>The operation that triggered request</p>\n",
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
        "shortDoc": "Fires when the server returns an exception ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Server.js",
        "private": false,
        "tagname": "event",
        "name": "exception",
        "owner": "Ext.data.proxy.Server",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Object",
        "doc": "<p>Mapping of action name to HTTP request method. In the basic AjaxProxy these are set to 'GET' for 'read' actions\nand 'POST' for 'create', 'update' and 'destroy' actions. The <a href=\"#/api/Ext.data.proxy.Rest\" rel=\"Ext.data.proxy.Rest\" class=\"docClass\">Ext.data.proxy.Rest</a> maps these to the\ncorrect RESTful methods.</p>\n",
        "href": "Ajax.html#Ext-data-proxy-Ajax-property-actionMethods",
        "linenr": 211,
        "html_filename": "Ajax.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Mapping of action name to HTTP request method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "actionMethods",
        "owner": "Ext.data.proxy.Ajax",
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
    "Ext.Base",
    "Ext.data.proxy.Proxy",
    "Ext.data.proxy.Server"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/proxy/Ajax.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.proxy.Ajax",
  "alternateClassNames": [
    "Ext.data.HttpProxy",
    "Ext.data.AjaxProxy"
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