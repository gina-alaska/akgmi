Ext.data.JsonP.Ext_Loader({
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
  "doc": "<p>Ext.Loader is the heart of the new dynamic dependency loading capability in Ext JS 4+. It is most commonly used\nvia the <a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> shorthand. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> supports both asynchronous and synchronous loading\napproaches, and leverage their advantages for the best development flow. We'll discuss about the pros and cons\nof each approach:</p>\n\n<h1>Asynchronous Loading</h1>\n\n<ul>\n<li><p><em>Advantages:</em></p>\n\n<ul>\n<li> Cross-domain</li>\n<li> No web server needed: you can run the application via the file system protocol\n(i.e: <code>file://path/to/your/index.html</code>)</li>\n<li> Best possible debugging experience: error messages come with the exact file name and line number</li>\n</ul>\n</li>\n<li><p><em>Disadvantages:</em></p>\n\n<ul>\n<li> Dependencies need to be specified before-hand</li>\n</ul>\n</li>\n</ul>\n\n\n<h3>Method 1: Explicitly include what you need:</h3>\n\n<pre><code>// Syntax\nExt.require({String/Array} expressions);\n\n// Example: Single alias\nExt.require('widget.window');\n\n// Example: Single class name\nExt.require('Ext.window.Window');\n\n// Example: Multiple aliases / class names mix\nExt.require(['widget.window', 'layout.border', 'Ext.data.Connection']);\n\n// Wildcards\nExt.require(['widget.*', 'layout.*', 'Ext.data.*']);\n</code></pre>\n\n<h3>Method 2: Explicitly exclude what you don't need:</h3>\n\n<pre><code>// Syntax: Note that it must be in this chaining format.\nExt.exclude({String/Array} expressions)\n   .require({String/Array} expressions);\n\n// Include everything except Ext.data.*\nExt.exclude('Ext.data.*').require('*');\u00a0\n\n// Include all widgets except widget.checkbox*,\n// which will match widget.checkbox, widget.checkboxfield, widget.checkboxgroup, etc.\nExt.exclude('widget.checkbox*').require('widget.*');\n</code></pre>\n\n<h1>Synchronous Loading on Demand</h1>\n\n<ul>\n<li><p><em>Advantages:</em></p>\n\n<ul>\n<li> There's no need to specify dependencies before-hand, which is always the convenience of including\next-all.js before</li>\n</ul>\n</li>\n<li><p><em>Disadvantages:</em></p>\n\n<ul>\n<li> Not as good debugging experience since file name won't be shown (except in Firebug at the moment)</li>\n<li> Must be from the same domain due to XHR restriction</li>\n<li> Need a web server, same reason as above</li>\n</ul>\n</li>\n</ul>\n\n\n<p>There's one simple rule to follow: Instantiate everything with Ext.create instead of the <code>new</code> keyword</p>\n\n<pre><code>Ext.create('widget.window', { ... }); // Instead of new Ext.window.Window({...});\n\nExt.create('Ext.window.Window', {}); // Same as above, using full class name instead of alias\n\nExt.widget('window', {}); // Same as above, all you need is the traditional `xtype`\n</code></pre>\n\n<p>Behind the scene, <a href=\"#/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a> will automatically check whether the given class name / alias has already\nexisted on the page. If it's not, <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> will immediately switch itself to synchronous mode and automatic load\nthe given class and all its dependencies.</p>\n\n<h1>Hybrid Loading - The Best of Both Worlds</h1>\n\n<p>It has all the advantages combined from asynchronous and synchronous loading. The development flow is simple:</p>\n\n<h3>Step 1: Start writing your application using synchronous approach.</h3>\n\n<p>Ext.Loader will automatically fetch all dependencies on demand as they're needed during run-time. For example:</p>\n\n<pre><code>Ext.onReady(function(){\n    var window = Ext.createWidget('window', {\n        width: 500,\n        height: 300,\n        layout: {\n            type: 'border',\n            padding: 5\n        },\n        title: 'Hello Dialog',\n        items: [{\n            title: 'Navigation',\n            collapsible: true,\n            region: 'west',\n            width: 200,\n            html: 'Hello',\n            split: true\n        }, {\n            title: 'TabPanel',\n            region: 'center'\n        }]\n    });\n\n    window.show();\n})\n</code></pre>\n\n<h3>Step 2: Along the way, when you need better debugging ability, watch the console for warnings like these:</h3>\n\n<pre><code>[Ext.Loader] Synchronously loading 'Ext.window.Window'; consider adding Ext.require('Ext.window.Window') before your application's code ClassManager.js:432\n[Ext.Loader] Synchronously loading 'Ext.layout.container.Border'; consider adding Ext.require('Ext.layout.container.Border') before your application's code\n</code></pre>\n\n<p>Simply copy and paste the suggested code above <code>Ext.onReady</code>, e.g.:</p>\n\n<pre><code>Ext.require('Ext.window.Window');\nExt.require('Ext.layout.container.Border');\n\nExt.onReady(...);\n</code></pre>\n\n<p>Everything should now load via asynchronous mode.</p>\n\n<h1>Deployment</h1>\n\n<p>It's important to note that dynamic loading should only be used during development on your local machines.\nDuring production, all dependencies should be combined into one single JavaScript file. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> makes\nthe whole process of transitioning from / to between development / maintenance and production as easy as\npossible. Internally <a href=\"#/api/Ext.Loader-property-history\" rel=\"Ext.Loader-property-history\" class=\"docClass\">Ext.Loader.history</a> maintains the list of all dependencies\nyour application needs in the exact loading sequence. It's as simple as concatenating all files in this\narray into one, then include it on top of your application.</p>\n\n<p>This process will be automated with Sencha Command, to be released and documented towards Ext JS 4 Final.</p>\n",
  "extends": null,
  "href": "Loader.html#Ext-Loader",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Loader.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>Appends current timestamp to script files to prevent caching Defaults to true</p>\n",
        "href": "Loader.html#Ext-Loader-cfg-disableCaching",
        "linenr": 227,
        "html_filename": "Loader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "cfg",
        "name": "disableCaching",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The get parameter name for the cache buster's timestamp. Defaults to '_dc'</p>\n",
        "href": "Loader.html#Ext-Loader-cfg-disableCachingParam",
        "linenr": 233,
        "html_filename": "Loader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The get parameter name for the cache buster's timestamp. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "cfg",
        "name": "disableCachingParam",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Whether or not to enable the dynamic dependency loading feature Defaults to false</p>\n",
        "href": "Loader.html#Ext-Loader-cfg-enabled",
        "linenr": 221,
        "html_filename": "Loader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "cfg",
        "name": "enabled",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The mapping from namespaces to file paths</p>\n\n<pre><code>{\n    'Ext': '.', // This is set by default, <a href=\"#/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a> will be\n                // loaded from ./layout/Container.js\n\n    'My': './src/my_own_folder' // My.layout.Container will be loaded from\n                                // ./src/my_own_folder/layout/Container.js\n}\n</code></pre>\n\n<p>Note that all relative paths are relative to the current HTML document.\nIf not being specified, for example, <code>Other.awesome.Class</code>\nwill simply be loaded from <code>./Other/awesome/Class.js</code></p>\n",
        "href": "Loader.html#Ext-Loader-cfg-paths",
        "linenr": 239,
        "html_filename": "Loader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The mapping from namespaces to file paths\n\n{\n    'Ext': '.', // This is set by default, Ext.layout.container.Containe...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "cfg",
        "name": "paths",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be chained with more <code>require</code> and <code>exclude</code> methods, e.g.:</p>\n\n<pre><code>Ext.exclude('Ext.data.*').require('*');\n\nExt.exclude('widget.button*').require('widget.*');\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-exclude\" rel=\"Ext-method-exclude\" class=\"docClass\">Ext.exclude</a> is alias for <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a> for convenience.</p>\n",
        "href": "Loader.html#Ext-Loader-method-exclude",
        "linenr": 584,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "<p>object contains <code>require</code> method for chaining</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String/String[]",
            "optional": false,
            "name": "excludes"
          }
        ],
        "deprecated": null,
        "shortDoc": "Explicitly exclude files from being loaded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "exclude",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the config value corresponding to the specified name.\nIf no name is given, will return the config object.</p>\n",
        "href": "Loader.html#Ext-Loader-method-getConfig",
        "linenr": 298,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The config property name</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the config value corresponding to the specified name. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "getConfig",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Translates a className to a file path by adding the the proper prefix and converting the .'s to /'s.\nFor example:</p>\n\n<pre><code>Ext.Loader.setPath('My', '/path/to/My');\n\nalert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/path/to/My/awesome/Class.js'\n</code></pre>\n\n<p>Note that the deeper namespace levels, if explicitly set, are always resolved first. For example:</p>\n\n<pre><code>Ext.Loader.setPath({\n    'My': '/path/to/lib',\n    'My.awesome': '/other/path/for/awesome/stuff',\n    'My.awesome.more': '/more/awesome/path'\n});\n\nalert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/other/path/for/awesome/stuff/Class.js'\n\nalert(Ext.Loader.getPath('My.awesome.more.Class')); // alerts '/more/awesome/path/Class.js'\n\nalert(Ext.Loader.getPath('My.cool.Class')); // alerts '/path/to/lib/cool/Class.js'\n\nalert(Ext.Loader.getPath('Unknown.strange.Stuff')); // alerts 'Unknown/strange/Stuff.js'\n</code></pre>\n",
        "href": "Loader.html#Ext-Loader-method-getPath",
        "linenr": 335,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "<p>path</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Translates a className to a file path by adding the the proper prefix and converting the .'s to /'s. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "getPath",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds new listener to be executed when all required scripts are fully loaded.</p>\n",
        "href": "Loader.html#Ext-Loader-method-onReady",
        "linenr": 899,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function callback to be executed</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The execution scope (<code>this</code>) of the callback function</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          },
          {
            "doc": "<p>Whether or not to wait for document dom ready as well</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "withDomReady"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds new listener to be executed when all required scripts are fully loaded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "onReady",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> is alias for <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a> for convenience.</p>\n",
        "href": "Loader.html#Ext-Loader-method-require",
        "linenr": 629,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Can either be a string or an array of string</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "expressions"
          },
          {
            "doc": "<p>(Optional) The callback function</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n",
            "type": "String/String[]",
            "optional": true,
            "name": "excludes"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback functi...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "require",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the configuration for the loader. This should be called right after ext-core.js\n(or ext-core-debug.js) is included in the page, e.g.:</p>\n\n<pre><code>&lt;script type=\"text/javascript\" src=\"ext-core-debug.js\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\"&gt;\n  Ext.Loader.setConfig({\n      enabled: true,\n      paths: {\n          'My': 'my_own_path'\n      }\n  });\n&lt;script&gt;\n&lt;script type=\"text/javascript\"&gt;\n  Ext.require(...);\n\n  Ext.onReady(function() {\n      // application code here\n  });\n&lt;/script&gt;\n</code></pre>\n\n<p>Refer to config options of <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> for the list of possible properties.</p>\n",
        "href": "Loader.html#Ext-Loader-method-setConfig",
        "linenr": 260,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Loader"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Name of the value to override, or a config object to override multiple values.</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>(optional) The new value to set, needed if first parameter is String.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the configuration for the loader. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "setConfig",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the path of a namespace. For Example:</p>\n\n<pre><code>Ext.Loader.setPath('Ext', '.');\n</code></pre>\n",
        "href": "Loader.html#Ext-Loader-method-setPath",
        "linenr": 312,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Loader"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>See <a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>See <a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "type": "String",
            "optional": false,
            "name": "path"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the path of a namespace. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "setPath",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-syncRequire\" rel=\"Ext-method-syncRequire\" class=\"docClass\">Ext.syncRequire</a> is alias for <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a> for convenience.</p>\n",
        "href": "Loader.html#Ext-Loader-method-syncRequire",
        "linenr": 611,
        "html_filename": "Loader.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Can either be a string or an array of string</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "expressions"
          },
          {
            "doc": "<p>(Optional) The callback function</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n",
            "type": "String/String[]",
            "optional": true,
            "name": "excludes"
          }
        ],
        "deprecated": null,
        "shortDoc": "Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given c...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "method",
        "name": "syncRequire",
        "owner": "Ext.Loader",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "String[]",
        "doc": "<p>An array of class names to keep track of the dependency loading order.\nThis is not guaranteed to be the same everytime due to the asynchronous nature of the Loader.</p>\n",
        "href": "Loader.html#Ext-Loader-property-history",
        "linenr": 209,
        "html_filename": "Loader.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An array of class names to keep track of the dependency loading order. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "tagname": "property",
        "name": "history",
        "owner": "Ext.Loader",
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

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext.Loader",
  "alternateClassNames": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "static": false,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});