Ext.data.JsonP.Ext_Template({
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
        "doc": "<p>Creates a template from the passed element's value (<em>display:none</em> textarea, preferred) or innerHTML.</p>\n",
        "href": "Template2.html#Ext-Template-method-from",
        "linenr": 54,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The created template</p>\n",
          "type": "Ext.Template"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A DOM element or its id</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>(optional) Config object</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a template from the passed element's value (display:none textarea, preferred) or innerHTML. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "from",
        "owner": "Ext.Template",
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
  "doc": "<p>Represents an HTML fragment template. Templates may be <a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">precompiled</a> for greater performance.</p>\n\n<p>An instance of this class may be created by passing to the constructor either a single argument, or multiple\narguments:</p>\n\n<h1>Single argument: String/Array</h1>\n\n<p>The single argument may be either a String or an Array:</p>\n\n<ul>\n<li><p>String:</p>\n\n<pre><code>var t = new Ext.Template(\"&lt;div&gt;Hello {0}.&lt;/div&gt;\");\nt.<a href=\"#/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', ['foo']);\n</code></pre></li>\n<li><p>Array:</p>\n\n<p>An Array will be combined with <code>join('')</code>.</p>\n\n<pre><code>var t = new Ext.Template([\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name:trim} {value:ellipsis(10)}&lt;/span&gt;',\n    '&lt;/div&gt;',\n]);\nt.<a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a>();\nt.<a href=\"#/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});\n</code></pre></li>\n</ul>\n\n\n<h1>Multiple arguments: String, Object, Array, ...</h1>\n\n<p>Multiple arguments will be combined with <code>join('')</code>.</p>\n\n<pre><code>var t = new Ext.Template(\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name} {value}&lt;/span&gt;',\n    '&lt;/div&gt;',\n    // a configuration object:\n    {\n        compiled: true,      // <a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a> immediately\n    }\n);\n</code></pre>\n\n<h1>Notes</h1>\n\n<ul>\n<li>For a list of available format functions, see <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a>.</li>\n<li><code>disableFormats</code> reduces <code><a href=\"#/api/Ext.Template-method-apply\" rel=\"Ext.Template-method-apply\" class=\"docClass\">apply</a></code> time when no formatting is required.</li>\n</ul>\n\n",
  "extends": "Ext.Base",
  "href": "Template2.html#Ext-Template",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Template2.html",
  "subclasses": [
    "Ext.XTemplate"
  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>True to immediately compile the template. Defaults to false.</p>\n",
        "href": "Template2.html#Ext-Template-cfg-compiled",
        "linenr": 116,
        "html_filename": "Template2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to immediately compile the template. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "cfg",
        "name": "compiled",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to disable format functions in the template. If the template doesn't contain\nformat functions, setting disableFormats to true will reduce apply time. Defaults to false.</p>\n",
        "href": "Template2.html#Ext-Template-cfg-disableFormats",
        "linenr": 121,
        "html_filename": "Template2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to disable format functions in the template. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "cfg",
        "name": "disableFormats",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new template.</p>\n",
        "href": "Template2.html#Ext-Template-method-constructor",
        "linenr": 70,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>List of strings to be concatenated into template.\nAlternatively an array of strings can be given, but then no config object may be passed.</p>\n",
            "type": "String...",
            "optional": false,
            "name": "html"
          },
          {
            "doc": "<p>(optional) Config object</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new template. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies the supplied <code>values</code> to the template and appends the new node(s) to the specified <code>el</code>.</p>\n\n<p>For example usage see <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template class docs</a>.</p>\n",
        "href": "Template2.html#Ext-Template-method-append",
        "linenr": 261,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node or Element</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The template values. See <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          },
          {
            "doc": "<p>(optional) true to return an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies the supplied values to the template and appends the new node(s) to the specified el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "append",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a>.</p>\n\n<p>Returns an HTML fragment of this template with the specified values applied.</p>\n",
        "href": "Template2.html#Ext-Template-method-apply",
        "linenr": 296,
        "html_filename": "Template2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Template",
          "tagname": "alias",
          "member": "applyTemplate"
        },
        "return": {
          "doc": "<p>The HTML fragment</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The template values. Can be an array if your params are numeric:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {0}, Age: {1}');\ntpl.applyTemplate(['John', 25]);\n</code></pre>\n\n<p>or an object:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {name}, Age: {age}');\ntpl.applyTemplate({name: 'John', age: 25});\n</code></pre>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          }
        ],
        "deprecated": null,
        "shortDoc": "Alias for applyTemplate. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "apply",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an HTML fragment of this template with the specified values applied.</p>\n",
        "href": "Template2.html#Ext-Template-method-applyTemplate",
        "linenr": 130,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The HTML fragment</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The template values. Can be an array if your params are numeric:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {0}, Age: {1}');\ntpl.applyTemplate(['John', 25]);\n</code></pre>\n\n<p>or an object:</p>\n\n<pre><code>var tpl = new Ext.Template('Name: {name}, Age: {age}');\ntpl.applyTemplate({name: 'John', age: 25});\n</code></pre>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns an HTML fragment of this template with the specified values applied. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "applyTemplate",
        "owner": "Ext.Template",
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
        "doc": "<p>Compiles the template into an internal function, eliminating the RegEx overhead.</p>\n",
        "href": "Template2.html#Ext-Template-method-compile",
        "linenr": 192,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Template"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Compiles the template into an internal function, eliminating the RegEx overhead. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "compile",
        "owner": "Ext.Template",
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
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) after el.</p>\n",
        "href": "Template2.html#Ext-Template-method-insertAfter",
        "linenr": 249,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node or Element</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The template values. See <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) after el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "insertAfter",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) before el.</p>\n",
        "href": "Template2.html#Ext-Template-method-insertBefore",
        "linenr": 237,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node or Element</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The template values. See <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) before el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "insertBefore",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) as the first child of el.</p>\n",
        "href": "Template2.html#Ext-Template-method-insertFirst",
        "linenr": 225,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node or Element</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The template values. See <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) as the first child of el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "insertFirst",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies the supplied values to the template and overwrites the content of el with the new node(s).</p>\n",
        "href": "Template2.html#Ext-Template-method-overwrite",
        "linenr": 281,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node or Element</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The template values. See <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a> for details.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "values"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies the supplied values to the template and overwrites the content of el with the new node(s). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "overwrite",
        "owner": "Ext.Template",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the HTML used as the template and optionally compiles it.</p>\n",
        "href": "Template2.html#Ext-Template-method-set",
        "linenr": 175,
        "html_filename": "Template2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Template"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "html"
          },
          {
            "doc": "<p>(optional) True to compile the template.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "compile"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the HTML used as the template and optionally compiles it. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "tagname": "method",
        "name": "set",
        "owner": "Ext.Template",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.Template",
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