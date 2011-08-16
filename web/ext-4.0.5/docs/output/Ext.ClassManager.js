Ext.data.JsonP.Ext_ClassManager({
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
  "doc": "<p>Ext.ClassManager manages all classes and handles mapping from string class name to\nactual class objects throughout the whole framework. It is not generally accessed directly, rather through\nthese convenient shorthands:</p>\n\n<ul>\n<li><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></li>\n<li><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></li>\n<li><a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a></li>\n<li><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></li>\n<li><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></li>\n</ul>\n\n",
  "extends": null,
  "href": "ClassManager.html#Ext-ClassManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "ClassManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Defines a class.</p>\n\n<pre><code>Ext.ClassManager.create('My.awesome.Class', {\n    someProperty: 'something',\n    someMethod: function() { ... }\n    ...\n\n}, function() {\n    alert('Created!');\n    alert(this === My.awesome.Class); // alerts true\n\n    var myInstance = new this();\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> is alias for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-create",
        "linenr": 397,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class name to create in string dot-namespaced format, for example:\n'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager'\nIt is highly recommended to follow this simple convention:</p>\n\n<ul>\n<li>The root and the class name are 'CamelCased'</li>\n<li>Everything else is lower-cased</li>\n</ul>\n\n",
            "type": "String",
            "optional": false,
            "name": "className"
          },
          {
            "doc": "<p>The key - value pairs of properties to apply to this class. Property names can be of any valid\nstrings, except those in the reserved list below:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-alternateClassName\" rel=\"Ext.Class-cfg-alternateClassName\" class=\"docClass\">alternateClassName</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-config\" rel=\"Ext.Class-cfg-config\" class=\"docClass\">config</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-extend\" rel=\"Ext.Class-cfg-extend\" class=\"docClass\">extend</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-inheritableStatics\" rel=\"Ext.Class-cfg-inheritableStatics\" class=\"docClass\">inheritableStatics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-mixins\" rel=\"Ext.Class-cfg-mixins\" class=\"docClass\">mixins</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-requires\" rel=\"Ext.Class-cfg-requires\" class=\"docClass\">requires</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-singleton\" rel=\"Ext.Class-cfg-singleton\" class=\"docClass\">singleton</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a></li>\n<li><a href=\"#/api/Ext.Class-cfg-uses\" rel=\"Ext.Class-cfg-uses\" class=\"docClass\">uses</a></li>\n</ul>\n\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          },
          {
            "doc": "<p>(Optional) callback to execute after the class is created, the execution scope of which\n(<code>this</code>) will be the newly created class itself.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "createdFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Defines a class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieve a class by its name.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-get",
        "linenr": 255,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>class</p>\n",
          "type": "Ext.Class"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": null,
        "shortDoc": "Retrieve a class by its name. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the aliases of a class by the class name</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getAliasesByName",
        "linenr": 356,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>aliases</p>\n",
          "type": "String[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the aliases of a class by the class name ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getAliasesByName",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get a reference to the class by its alias.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getByAlias",
        "linenr": 326,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>class</p>\n",
          "type": "Ext.Class"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "alias"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get a reference to the class by its alias. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getByAlias",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define.</p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a>.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getClass",
        "linenr": 380,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>class</p>\n",
          "type": "Ext.Class"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "object"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getClass",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the displayName property or className or object.\nWhen all else fails, returns \"Anonymous\".</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getDisplayName",
        "linenr": 1066,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "object"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the displayName property or className or object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getDisplayName",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the name of the class by its reference or its instance.</p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getName\" rel=\"Ext.ClassManager-method-getName\" class=\"docClass\">Ext.ClassManager.getName</a>.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getName",
        "linenr": 366,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>className</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Class/Object",
            "optional": false,
            "name": "object"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the name of the class by its reference or its instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getName",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the name of a class by its alias.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlias",
        "linenr": 336,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>className</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "alias"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the name of a class by its alias. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getNameByAlias",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the name of a class by its alternate name.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlternate",
        "linenr": 346,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>className</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "alternate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the name of a class by its alternate name. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getNameByAlternate",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor class names. Expressions support wildcards:</p>\n\n<pre><code>// returns ['Ext.window.Window']\nvar window = Ext.ClassManager.getNamesByExpression('widget.window');\n\n// returns ['widget.panel', 'widget.window', ...]\nvar allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');\n\n// returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]\nvar allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');\n</code></pre>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-getNamesByExpression",
        "linenr": 775,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>classNames</p>\n",
          "type": "String[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "expression"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a string expression to an array of matching class names. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "getNamesByExpression",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Instantiate a class by either full name, alias or alternate name.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a>.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-instantiate",
        "linenr": 556,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>instance</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>Additional arguments after the name will be passed to the class' constructor.</p>\n",
            "type": "Object...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Instantiate a class by either full name, alias or alternate name. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "instantiate",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Instantiate a class by its alias.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a>.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-instantiateByAlias",
        "linenr": 508,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>instance</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "alias"
          },
          {
            "doc": "<p>Additional arguments after the alias will be passed to the\nclass constructor.</p>\n",
            "type": "Object...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Instantiate a class by its alias. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "instantiateByAlias",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if a class has already been created.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-isCreated",
        "linenr": 68,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>exist</p>\n",
          "type": "Boolean"
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
        "shortDoc": "Checks if a class has already been created. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "isCreated",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Register a post-processor function.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-registerPostprocessor",
        "linenr": 708,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "\n",
            "type": "Function",
            "optional": false,
            "name": "postprocessor"
          }
        ],
        "deprecated": null,
        "shortDoc": "Register a post-processor function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "registerPostprocessor",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets a name reference to a class.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-set",
        "linenr": 236,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.ClassManager"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets a name reference to a class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "set",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Register the alias for a class.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-setAlias",
        "linenr": 287,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>a reference to a class or a className</p>\n",
            "type": "Ext.Class/String",
            "optional": false,
            "name": "cls"
          },
          {
            "doc": "<p>Alias to use when referring to this class</p>\n",
            "type": "String",
            "optional": false,
            "name": "alias"
          }
        ],
        "deprecated": null,
        "shortDoc": "Register the alias for a class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "setAlias",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessorPosition",
        "linenr": 736,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.ClassManager"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The post-processor name. Note that it needs to be registered with\n<a href=\"#/api/Ext.ClassManager-method-registerPostprocessor\" rel=\"Ext.ClassManager-method-registerPostprocessor\" class=\"docClass\">registerPostprocessor</a> before this</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n",
            "type": "String",
            "optional": false,
            "name": "offset"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "relativeName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "setDefaultPostprocessorPosition",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the default post processors array stack which are applied to every class.</p>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessors",
        "linenr": 724,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.ClassManager"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>name of a registered post processor or an array of registered names.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the default post processors array stack which are applied to every class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "setDefaultPostprocessors",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a namespace and assign the <code>value</code> to the created object</p>\n\n<pre><code>Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);\n\nalert(MyCompany.pkg.Example === someObject); // alerts true\n</code></pre>\n",
        "href": "ClassManager.html#Ext-ClassManager-method-setNamespace",
        "linenr": 171,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a namespace and assign the value to the created object\n\nExt.ClassManager.setNamespace('MyCompany.pkg.Example'...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "setNamespace",
        "owner": "Ext.ClassManager",
        "static": false,
        "inheritable": false
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
  "alias": null,
  "singleton": true,
  "protected": false,
  "superclasses": [

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext.ClassManager",
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