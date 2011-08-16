Ext.data.JsonP.Ext({
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
  "doc": "<p>The Ext namespace (global object) encapsulates all classes, singletons, and utility methods provided by Sencha's libraries.</p>\n Most user interface Components are at a lower level of nesting in the namespace, but many common utility functions are provided\n as direct properties of the Ext namespace.</p>\n\n<p> Also many frequently used methods from other classes are provided as shortcuts within the Ext namespace.\n For example <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a> aliases <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p> Many applications are initiated with <a href=\"#/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a> which is called once the DOM is ready.\n This ensures all scripts have been loaded, preventing dependency issues. For example</p>\n\n<pre><code> Ext.onReady(function(){\n     new Ext.Component({\n         renderTo: document.body,\n         html: 'DOM ready!'\n     });\n });\n</code></pre>\n\n<p>For more information about how to use the Ext classes, see</p>\n\n<ul>\n<li><a href=\"http://www.sencha.com/learn/\">The Learning Center</a></li>\n<li><a href=\"http://www.sencha.com/learn/Ext_FAQ\">The FAQ</a></li>\n<li><a href=\"http://www.sencha.com/forum/\">The forums</a></li>\n</ul>\n\n",
  "extends": null,
  "href": "Ext.html#Ext",
  "allMixins": [

  ],
  "linenr": 1,
  "xtype": null,
  "html_filename": "Ext.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Applies event listeners to elements by selectors when the document is ready.\nThe event name is specified with an <tt>&#64;</tt> suffix.</p>\n\n<pre><code>Ext.addBehaviors({\n    // add a listener for click on all anchors in element with id foo\n    '#foo a&#64;click' : function(e, t){\n        // do something\n    },\n\n    // add the same listener to multiple selectors (separated by comma BEFORE the &#64;)\n    '#foo a, #bar span.some-class&#64;mouseover' : function(){\n        // do something\n    }\n});\n</code></pre>\n\n",
        "href": "Ext-more.html#Ext-method-addBehaviors",
        "linenr": 781,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The list of behaviors to apply</p>\n",
            "type": "Object",
            "optional": false,
            "name": "obj"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies event listeners to elements by selectors when the document is ready. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "addBehaviors",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> class and starts it up with given configuration after the page is ready.</p>\n\n<p>See <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> for details.</p>\n",
        "href": "Ext-more.html#Ext-method-application",
        "linenr": 1087,
        "html_filename": "Ext-more.html",
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
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Loads Ext.app.Application class and starts it up with given configuration after the page is ready. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "application",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Copies all the properties of config to the specified object.\nNote that if recursive merging and cloning without referencing the original objects / arrays is needed, use\n<a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a> instead.</p>\n",
        "href": "Ext.html#Ext-method-apply",
        "linenr": 34,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "<p>returns obj</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The receiver of the properties</p>\n",
            "type": "Object",
            "optional": false,
            "name": "object"
          },
          {
            "doc": "<p>The source of the properties</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>A different object that will also be applied for default values</p>\n",
            "type": "Object",
            "optional": false,
            "name": "defaults"
          }
        ],
        "deprecated": null,
        "shortDoc": "Copies all the properties of config to the specified object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "apply",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Copies all the properties of config to object if they don't already exist.</p>\n",
        "href": "Ext.html#Ext-method-applyIf",
        "linenr": 81,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "<p>returns obj</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The receiver of the properties</p>\n",
            "type": "Object",
            "optional": false,
            "name": "object"
          },
          {
            "doc": "<p>The source of the properties</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Copies all the properties of config to object if they don't already exist. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "applyIf",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally\noverrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n\n<p><a href=\"#/api/Ext-method-bind\" rel=\"Ext-method-bind\" class=\"docClass\">Ext.bind</a> is alias for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n",
        "href": "Function.html#Ext-method-bind",
        "linenr": 371,
        "html_filename": "Function.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Function",
          "tagname": "alias",
          "member": "bind"
        },
        "return": {
          "doc": "<p>The new function</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to delegate.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          },
          {
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
            "type": "Boolean/Number",
            "optional": true,
            "name": "appendArgs"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create a new function from the provided fn, change this to the provided scope, optionally\noverrides arguments for the...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "bind",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Execute a callback function in a particular scope. If no function is passed the call is ignored.</p>\n\n<p>For example, these lines are equivalent:</p>\n\n<pre><code>Ext.callback(myFunc, this, [arg1, arg2]);\nExt.isFunction(myFunc) &amp;&amp; myFunc.apply(this, [arg1, arg2]);\n</code></pre>\n",
        "href": "Ext-more.html#Ext-method-callback",
        "linenr": 166,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The callback to execute</p>\n",
            "type": "Function",
            "optional": false,
            "name": "callback"
          },
          {
            "doc": "<p>(optional) The scope to execute in</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The arguments to pass to the function</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          },
          {
            "doc": "<p>(optional) Pass a number to delay the call by a number of milliseconds.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "delay"
          }
        ],
        "deprecated": null,
        "shortDoc": "Execute a callback function in a particular scope. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "callback",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a></p>\n\n<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\">Ext.Array.filter</a></p>\n",
        "href": "Array2.html#Ext-method-clean",
        "linenr": 1034,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "clean"
        },
        "return": {
          "doc": "<p>results</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.clean\n\nFilter through an array and remove empty item as defined in Ext.isEmpty\n\nSee Ext.Array....",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "clean",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference</p>\n",
        "href": "Ext.html#Ext-method-clone",
        "linenr": 485,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "<p>clone</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The variable to clone</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "clone",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Copies a set of named properties fom the source object to the destination object.</p>\n\n<p>Example:</p>\n\n<pre><code>ImageComponent = Ext.extend(Ext.Component, {\n    initComponent: function() {\n        this.autoEl = { tag: 'img' };\n        MyComponent.superclass.initComponent.apply(this, arguments);\n        this.initialBox = Ext.copyTo({}, this.initialConfig, 'x,y,width,height');\n    }\n});\n</code></pre>\n\n<p>Important note: To borrow class prototype methods, use <a href=\"#/api/Ext.Base-method-borrow\" rel=\"Ext.Base-method-borrow\" class=\"docClass\">Ext.Base.borrow</a> instead.</p>\n",
        "href": "Ext-more.html#Ext-method-copyTo",
        "linenr": 871,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The modified object.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The destination object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "dest"
          },
          {
            "doc": "<p>The source object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "source"
          },
          {
            "doc": "<p>Either an Array of property names, or a comma-delimited list\nof property names to copy.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "names"
          },
          {
            "doc": "<p>(Optional) Defaults to false. Pass true to copy keys off of the prototype as well as the instance.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "usePrototypeKeys"
          }
        ],
        "deprecated": null,
        "shortDoc": "Copies a set of named properties fom the source object to the destination object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "copyTo",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Instantiate a class by either full name, alias or alternate name.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a>.</p>\n",
        "href": "ClassManager.html#Ext-method-create",
        "linenr": 974,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "instantiate"
        },
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
        "name": "create",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Instantiate a class by its alias.</p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a> is alias for <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a>.</p>\n",
        "href": "ClassManager.html#Ext-method-createByAlias",
        "linenr": 1045,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "instantiateByAlias"
        },
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
        "name": "createByAlias",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old name for <a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">widget</a>.</p>\n\n<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n",
        "href": "ClassManager.html#Ext-method-createWidget",
        "linenr": 1118,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext",
          "tagname": "alias",
          "member": "widget"
        },
        "return": {
          "doc": "<p>widget instance</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>xtype of the widget to create.</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">widget</a> instead.</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old name for widget. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "createWidget",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-decode\" rel=\"Ext.JSON-method-decode\" class=\"docClass\">Ext.JSON.decode</a></p>\n\n<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
        "href": "JSON3.html#Ext-method-decode",
        "linenr": 165,
        "html_filename": "JSON3.html",
        "alias": {
          "doc": null,
          "cls": "Ext.JSON",
          "tagname": "alias",
          "member": "decode"
        },
        "return": {
          "doc": "<p>The resulting object</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The JSON string</p>\n",
            "type": "String",
            "optional": false,
            "name": "json"
          },
          {
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "safe"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for Ext.JSON.decode\n\nDecodes (parses) a JSON string to an object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "tagname": "method",
        "name": "decode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a> is alias for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n",
        "href": "Function.html#Ext-method-defer",
        "linenr": 357,
        "html_filename": "Function.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Function",
          "tagname": "alias",
          "member": "defer"
        },
        "return": {
          "doc": "<p>The timeout id that can be used with clearTimeout</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to defer.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The number of milliseconds for the setTimeout call\n(if less than or equal to 0 the function is executed immediately)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "millis"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          },
          {
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
            "type": "Boolean/Number",
            "optional": true,
            "name": "appendArgs"
          }
        ],
        "deprecated": null,
        "shortDoc": "Calls this function after the number of millseconds specified, optionally in a specific scope. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "defer",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Defines a class.</p>\n\n<pre><code>Ext.ClassManager.create('My.awesome.Class', {\n    someProperty: 'something',\n    someMethod: function() { ... }\n    ...\n\n}, function() {\n    alert('Created!');\n    alert(this === My.awesome.Class); // alerts true\n\n    var myInstance = new this();\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> is alias for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>.</p>\n",
        "href": "ClassManager.html#Ext-method-define",
        "linenr": 1052,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "create"
        },
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
        "name": "define",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicable) and calling their destroy functions (if available).  This method is primarily\nintended for arguments of type <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> and <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, but any subclass of\n<a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> can be passed in.  Any number of elements and/or components can be\npassed into this function in a single call as separate arguments.</p>\n",
        "href": "Ext-more.html#Ext-method-destroy",
        "linenr": 137,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, or an Array of either of these to destroy</p>\n",
            "type": "Ext.Element/Ext.Component/Ext.Element[]/Ext.Component[]...",
            "optional": false,
            "name": "arg1"
          }
        ],
        "deprecated": null,
        "shortDoc": "Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicab...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Attempts to destroy and then remove a set of named properties of the passed object.</p>\n",
        "href": "Ext-more.html#Ext-method-destroyMembers",
        "linenr": 905,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The object (most likely a Component) who's properties you wish to destroy.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>One or more names of the properties to destroy and remove from the object.</p>\n",
            "type": "String...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Attempts to destroy and then remove a set of named properties of the passed object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "destroyMembers",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a> is alias for <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n",
        "href": "Array2.html#Ext-method-each",
        "linenr": 975,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "each"
        },
        "return": {
          "doc": "<p>See description for the <code>fn</code> parameter.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n",
            "type": "Array/NodeList/Object",
            "optional": false,
            "name": "iterable"
          },
          {
            "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>. Arguments passed to this callback function are:</p>\n\n<ul>\n<li><code>item</code> : Mixed - The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code> : Number - The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code> : Array/NodeList/Mixed - The <code>array</code> passed as the first argument to <code>Ext.Array.each</code></li>\n</ul>\n\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "reverse"
          }
        ],
        "deprecated": null,
        "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>A reusable empty function</p>\n",
        "href": "Ext.html#Ext-method-emptyFn",
        "linenr": 74,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "A reusable empty function ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "emptyFn",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-encode\" rel=\"Ext.JSON-method-encode\" class=\"docClass\">Ext.JSON.encode</a></p>\n\n<p>Encodes an Object, Array or other value</p>\n",
        "href": "JSON3.html#Ext-method-encode",
        "linenr": 158,
        "html_filename": "JSON3.html",
        "alias": {
          "doc": null,
          "cls": "Ext.JSON",
          "tagname": "alias",
          "member": "encode"
        },
        "return": {
          "doc": "<p>The JSON string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The variable to encode</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for Ext.JSON.encode\n\nEncodes an Object, Array or other value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "tagname": "method",
        "name": "encode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
        "href": "Ext-more.html#Ext-method-escapeRe",
        "linenr": 771,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "str"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.String-method-escapeRegex\" rel=\"Ext.String-method-escapeRegex\" class=\"docClass\">Ext.String.escapeRegex</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "escapeRe",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be chained with more <code>require</code> and <code>exclude</code> methods, e.g.:</p>\n\n<pre><code>Ext.exclude('Ext.data.*').require('*');\n\nExt.exclude('widget.button*').require('widget.*');\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-exclude\" rel=\"Ext-method-exclude\" class=\"docClass\">Ext.exclude</a> is alias for <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a> for convenience.</p>\n",
        "href": "Loader.html#Ext-method-exclude",
        "linenr": 955,
        "html_filename": "Loader.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "exclude"
        },
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
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This method deprecated. Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead.</p>\n",
        "href": "Ext.html#Ext-method-extend",
        "linenr": 133,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "<p>The subclass constructor from the <tt>overrides</tt> parameter, or a generated one if not provided.</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Function",
            "optional": false,
            "name": "superclass"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "overrides"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "This method deprecated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "extend",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a></p>\n\n<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n",
        "href": "Array2.html#Ext-method-flatten",
        "linenr": 1025,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "flatten"
        },
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
            "name": "array"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.flatten\n\nRecursively flattens into 1-d Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "flatten",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference\nto this element - the dom node can be overwritten by other code. <a href=\"#/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">fly</a> is alias for\n<a href=\"#/api/Ext.Element-method-fly\" rel=\"Ext.Element-method-fly\" class=\"docClass\">Ext.Element.fly</a>.</p>\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a> will be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nclass.</p>\n",
        "href": "Element2.html#Ext-method-fly",
        "linenr": 1048,
        "html_filename": "Element2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "fly"
        },
        "return": {
          "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The dom node or id</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts (e.g.\ninternally Ext uses \"_global\")</p>\n",
            "type": "String",
            "optional": true,
            "name": "named"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "fly",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> objects. <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">get</a> is an alias for <a href=\"#/api/Ext.Element-method-get\" rel=\"Ext.Element-method-get\" class=\"docClass\">Ext.Element.get</a>.</p>\n\n<p><strong>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</strong> This method retrieves <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nobjects which encapsulate DOM elements. To retrieve a Component by its ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an object was recreated with\nthe same id via AJAX or DOM.</p>\n",
        "href": "Element2.html#Ext-method-get",
        "linenr": 1041,
        "html_filename": "Element2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Element",
          "tagname": "alias",
          "member": "get"
        },
        "return": {
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Retrieves Ext.Element objects. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "tagname": "method",
        "name": "get",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current document body as an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "href": "Ext-more.html#Ext-method-getBody",
        "linenr": 85,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.Element The document body</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current document body as an Ext.Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getBody",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define.</p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a>.</p>\n",
        "href": "ClassManager.html#Ext-method-getClass",
        "linenr": 1088,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "getClass"
        },
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
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the name of the class by its reference or its instance.</p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a> is alias for <a href=\"#/api/Ext.ClassManager-method-getName\" rel=\"Ext.ClassManager-method-getName\" class=\"docClass\">Ext.ClassManager.getName</a>.</p>\n",
        "href": "ClassManager.html#Ext-method-getClassName",
        "linenr": 1059,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext.ClassManager",
          "tagname": "alias",
          "member": "getName"
        },
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
        "name": "getClassName",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This is shorthand reference to <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.\nLooks up an existing <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> by <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n",
        "href": "Ext-more.html#Ext-method-getCmp",
        "linenr": 118,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.Component The Component, <tt>undefined</tt> if not found, or <tt>null</tt> if a\nClass was found.</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "This is shorthand reference to Ext.ComponentManager.get. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getCmp",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current HTML document object as an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "href": "Ext-more.html#Ext-method-getDoc",
        "linenr": 110,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.Element The document</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current HTML document object as an Ext.Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getDoc",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return the dom node for the passed String (id), dom node, or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.\nOptional 'strict' flag is needed for IE since it can return 'name' and\n'id' elements by using getElementById.\nHere are some examples:</p>\n\n<pre><code>// gets dom node based on id\nvar elDom = Ext.getDom('elId');\n// gets dom node based on the dom node\nvar elDom1 = Ext.getDom(elDom);\n\n// If we don&#39;t know if we are working with an\n// <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> or a dom node use Ext.getDom\nfunction(el){\n    var dom = Ext.getDom(el);\n    // do something with the dom node\n}\n</code></pre>\n\n\n<p><b>Note</b>: the dom node to be found actually needs to exist (be rendered, etc)\nwhen this method is called to be successful.</p>\n",
        "href": "Ext-more.html#Ext-method-getDom",
        "linenr": 471,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>HTMLElement</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return the dom node for the passed String (id), dom node, or Ext.Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getDom",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current document head as an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.</p>\n",
        "href": "Ext-more.html#Ext-method-getHead",
        "linenr": 93,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.Element The document head</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current document head as an Ext.Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getHead",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current orientation of the mobile device</p>\n",
        "href": "Ext-more.html#Ext-method-getOrientation",
        "linenr": 129,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>Either 'portrait' or 'landscape'</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current orientation of the mobile device ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getOrientation",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Utility method for getting the width of the browser's vertical scrollbar. This\ncan differ depending on operating system settings, such as the theme or font size.</p>\n\n<p>This method is deprected in favor of <a href=\"#/api/Ext-method-getScrollbarSize\" rel=\"Ext-method-getScrollbarSize\" class=\"docClass\">getScrollbarSize</a>.</p>\n",
        "href": "Ext-more.html#Ext-method-getScrollBarWidth",
        "linenr": 856,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The width of a vertical scrollbar.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true to force a recalculation of the value.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "force"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": null,
          "text": "\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Utility method for getting the width of the browser's vertical scrollbar. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getScrollBarWidth",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the size of the browser scrollbars. This can differ depending on\noperating system settings, such as the theme or font size.</p>\n",
        "href": "Ext-more.html#Ext-method-getScrollbarSize",
        "linenr": 822,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>An object containing the width of a vertical scrollbar and the\nheight of a horizontal scrollbar.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) true to force a recalculation of the value.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "force"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the size of the browser scrollbars. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "getScrollbarSize",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets a registered Store by id (shortcut to <a href=\"#/api/Ext.data.StoreManager-method-lookup\" rel=\"Ext.data.StoreManager-method-lookup\" class=\"docClass\">Ext.data.StoreManager.lookup</a>)</p>\n",
        "href": "StoreManager.html#Ext-method-getStore",
        "linenr": 155,
        "html_filename": "StoreManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.data.Store"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of the Store, or a Store instance</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets a registered Store by id (shortcut to Ext.data.StoreManager.lookup) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/StoreManager.js",
        "private": false,
        "tagname": "method",
        "name": "getStore",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n",
        "href": "Ext-more.html#Ext-method-htmlDecode",
        "linenr": 200,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The decoded text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to decode</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "htmlDecode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n",
        "href": "Ext-more.html#Ext-method-htmlEncode",
        "linenr": 191,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The encoded text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to encode</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "htmlEncode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Generates unique ids. If the element already has an id, it is unchanged</p>\n",
        "href": "Ext-more.html#Ext-method-id",
        "linenr": 57,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The generated Id.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The element to generate an id for</p>\n",
            "type": "HTMLElement/Ext.Element",
            "optional": true,
            "name": "el"
          },
          {
            "doc": "<p>(optional) Id prefix (defaults \"ext-gen\")</p>\n",
            "type": "String",
            "optional": true,
            "name": "prefix"
          }
        ],
        "deprecated": null,
        "shortDoc": "Generates unique ids. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "id",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Invokes a method on each item in an Array.</p>\n\n<pre><code>// Example:\nExt.invoke(Ext.query(\"p\"), \"getAttribute\", \"id\");\n// [el1.getAttribute(\"id\"), el2.getAttribute(\"id\"), ..., elN.getAttribute(\"id\")]\n</code></pre>\n\n",
        "href": "Ext-more.html#Ext-method-invoke",
        "linenr": 990,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The results of invoking the method on each item in the array.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array of items to invoke the method on.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "arr"
          },
          {
            "doc": "<p>The method name to invoke.</p>\n",
            "type": "String",
            "optional": false,
            "name": "methodName"
          },
          {
            "doc": "<p>Arguments to send into the method invocation.</p>\n",
            "type": "Object...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Invokes a method on each item in an Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "invoke",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a JavaScript Array, false otherwise.</p>\n",
        "href": "Ext.html#Ext-method-isArray",
        "linenr": 348,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The target to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "target"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a JavaScript Array, false otherwise. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isArray",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a boolean.</p>\n",
        "href": "Ext.html#Ext-method-isBoolean",
        "linenr": 436,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a boolean. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isBoolean",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a JavaScript Date object, false otherwise.</p>\n",
        "href": "Ext.html#Ext-method-isDate",
        "linenr": 359,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The object to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "object"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a JavaScript Date object, false otherwise. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isDate",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is defined.</p>\n",
        "href": "Ext.html#Ext-method-isDefined",
        "linenr": 464,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is defined. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isDefined",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is an HTMLElement</p>\n",
        "href": "Ext.html#Ext-method-isElement",
        "linenr": 446,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is an HTMLElement ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isElement",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:</p>\n\n<ul>\n<li><code>null</code></li>\n<li><code>undefined</code></li>\n<li>a zero-length array</li>\n<li>a zero-length string (Unless the <code>allowEmptyString</code> parameter is set to <code>true</code>)</li>\n</ul>\n\n",
        "href": "Ext.html#Ext-method-isEmpty",
        "linenr": 331,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(optional) true to allow empty strings (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "allowEmptyString"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is empty, false otherwise. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isEmpty",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a JavaScript Function, false otherwise.</p>\n",
        "href": "Ext.html#Ext-method-isFunction",
        "linenr": 394,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a JavaScript Function, false otherwise. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isFunction",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is iterable, false otherwise</p>\n",
        "href": "Ext.html#Ext-method-isIterable",
        "linenr": 473,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is iterable, false otherwise ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isIterable",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a number. Returns false for non-finite numbers.</p>\n",
        "href": "Ext.html#Ext-method-isNumber",
        "linenr": 409,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a number. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isNumber",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Validates that a value is numeric.</p>\n",
        "href": "Ext.html#Ext-method-isNumeric",
        "linenr": 418,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "<p>True if numeric, false otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Examples: 1, '1', '2.34'</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Validates that a value is numeric. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isNumeric",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a JavaScript Object, false otherwise.</p>\n",
        "href": "Ext.html#Ext-method-isObject",
        "linenr": 368,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a JavaScript Object, false otherwise. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isObject",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.</p>\n",
        "href": "Ext.html#Ext-method-isPrimitive",
        "linenr": 383,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isPrimitive",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a string.</p>\n",
        "href": "Ext.html#Ext-method-isString",
        "linenr": 427,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isString",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the passed value is a TextNode</p>\n",
        "href": "Ext.html#Ext-method-isTextNode",
        "linenr": 455,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the passed value is a TextNode ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "isTextNode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Iterates either an array or an object. This method delegates to\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> if the given value is iterable, and <a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> otherwise.</p>\n",
        "href": "Ext.html#Ext-method-iterate",
        "linenr": 101,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The object or array to be iterated.</p>\n",
            "type": "Object/Array",
            "optional": false,
            "name": "object"
          },
          {
            "doc": "<p>The function to be called for each iteration. See and <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> and\n<a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> for detailed lists of arguments passed to this function depending on the given object\ntype that is being iterated.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.\nDefaults to the object being iterated itself.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Iterates either an array or an object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "iterate",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a></p>\n\n<p>Returns the maximum value in the Array.</p>\n",
        "href": "Array2.html#Ext-method-max",
        "linenr": 998,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "max"
        },
        "return": {
          "doc": "<p>maxValue The maximum value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array from which to select the maximum value.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>(optional) a function to perform the comparision which determines maximization.\nIf omitted the \">\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "type": "Function",
            "optional": true,
            "name": "comparisonFn"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.max\n\nReturns the maximum value in the Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "max",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a></p>\n\n<p>Calculates the mean of all items in the array.</p>\n",
        "href": "Array2.html#Ext-method-mean",
        "linenr": 1016,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "mean"
        },
        "return": {
          "doc": "<p>The mean.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array to calculate the mean value of.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.mean\n\nCalculates the mean of all items in the array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "mean",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a></p>\n",
        "href": "Object.html#Ext-method-merge",
        "linenr": 490,
        "html_filename": "Object.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "A convenient alias method for Ext.Object.merge ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "tagname": "method",
        "name": "merge",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a></p>\n\n<p>Returns the minimum value in the Array.</p>\n",
        "href": "Array2.html#Ext-method-min",
        "linenr": 989,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "min"
        },
        "return": {
          "doc": "<p>minValue The minimum value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array from which to select the minimum value.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>(optional) a function to perform the comparision which determines minimization.\nIf omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "type": "Function",
            "optional": true,
            "name": "comparisonFn"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.min\n\nReturns the minimum value in the Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "min",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n// equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n",
        "href": "ClassManager.html#Ext-method-namespace",
        "linenr": 1095,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "namespace1"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "namespace2"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "etc"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates namespaces to be used for scoping variables and classes so that they are not global. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "namespace",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenient alias for <a href=\"#/api/Ext-method-namespace\" rel=\"Ext-method-namespace\" class=\"docClass\">Ext.namespace</a></p>\n\n<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n// equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n",
        "href": "ClassManager.html#Ext-method-ns",
        "linenr": 1127,
        "html_filename": "ClassManager.html",
        "alias": {
          "doc": null,
          "cls": "Ext",
          "tagname": "alias",
          "member": "namespace"
        },
        "return": {
          "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "namespace1"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "namespace2"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "etc"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenient alias for Ext.namespace\n\nCreates namespaces to be used for scoping variables and classes so that they are ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "ns",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This method is deprecated, please use <a href=\"#/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a> instead</p>\n",
        "href": "Number3.html#Ext-method-num",
        "linenr": 98,
        "html_filename": "Number3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Replaced by Ext.Number.from</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "This method is deprecated, please use Ext.Number.from instead ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "tagname": "method",
        "name": "num",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-onDocumentReady\" rel=\"Ext.EventManager-method-onDocumentReady\" class=\"docClass\">Ext.EventManager.onDocumentReady</a></p>\n",
        "href": "EventManager.html#Ext-method-onDocumentReady",
        "linenr": 853,
        "html_filename": "EventManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Alias for Ext.EventManager.onDocumentReady ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/EventManager.js",
        "private": false,
        "tagname": "method",
        "name": "onDocumentReady",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds new listener to be executed when all required scripts are fully loaded.</p>\n",
        "href": "Loader.html#Ext-method-onReady",
        "linenr": 962,
        "html_filename": "Loader.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "onReady"
        },
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
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Proxy to <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a>. Please refer <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a> for further details.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    sayHi: function() {\n        alert('Hi!');\n    }\n}\n\nExt.override(My.cool.Class, {\n    sayHi: function() {\n        alert('About to say...');\n\n        this.callOverridden();\n    }\n});\n\nvar cool = new My.cool.Class();\ncool.sayHi(); // alerts 'About to say...'\n              // alerts 'Hi!'\n</code></pre>\n\n<p>Please note that <code>this.callOverridden()</code> only works if the class was previously\ncreated with {@link Ext#define)</p>\n",
        "href": "Ext.html#Ext-method-override",
        "linenr": 202,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class to override</p>\n",
            "type": "Object",
            "optional": false,
            "name": "cls"
          },
          {
            "doc": "<p>The list of functions to add to origClass. This should be specified as an object literal\ncontaining one or more methods.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "overrides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Proxy to Ext.Base.override. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "override",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Partitions the set into two sets: a true set and a false set.\nExample:\nExample2:</p>\n\n<pre><code>// Example 1:\nExt.partition([true, false, true, true, false]); // [[true, true, true], [false, false]]\n\n// Example 2:\nExt.partition(\n    Ext.query(\"p\"),\n    function(val){\n        return val.className == \"class1\"\n    }\n);\n// true are those paragraph elements with a className of \"class1\",\n// false set are those that do not have that className.\n</code></pre>\n\n",
        "href": "Ext-more.html#Ext-method-partition",
        "linenr": 958,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>[array of truish values, array of falsy values]</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array to partition</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "arr"
          },
          {
            "doc": "<p>(optional) a function to determine truth.  If this is omitted the element\nitself must be able to be evaluated for its truthfulness.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "truth"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Partitions the set into two sets: a true set and a false set. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "partition",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to <code>args</code>.\nNew arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.\nThis is especially useful when creating callbacks.</p>\n\n<p>For example:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alerts 'Hello World'\ncallback('by Me'); // alerts 'Hello World by Me'\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-pass\" rel=\"Ext-method-pass\" class=\"docClass\">Ext.pass</a> is alias for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n",
        "href": "Function.html#Ext-method-pass",
        "linenr": 364,
        "html_filename": "Function.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Function",
          "tagname": "alias",
          "member": "pass"
        },
        "return": {
          "doc": "<p>The new callback function</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The original function</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The arguments to pass to new callback</p>\n",
            "type": "Array",
            "optional": false,
            "name": "args"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create a new function from the provided fn, the arguments of which are pre-set to args. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "pass",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a></p>\n\n<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n",
        "href": "Array2.html#Ext-method-pluck",
        "linenr": 1052,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "pluck"
        },
        "return": {
          "doc": "<p>The value from each item in the Array.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array of items to pluck the value from.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The property name to pluck from each element.</p>\n",
            "type": "String",
            "optional": false,
            "name": "propertyName"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.pluck\n\nPlucks the value of a property from each item in the Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "pluck",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.PluginManager-method-registerType\" rel=\"Ext.PluginManager-method-registerType\" class=\"docClass\">Ext.PluginManager.registerType</a></p>\n",
        "href": "PluginManager.html#Ext-method-preg",
        "linenr": 97,
        "html_filename": "PluginManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The ptype mnemonic string by which the Plugin class\nmay be looked up.</p>\n",
            "type": "String",
            "optional": false,
            "name": "ptype"
          },
          {
            "doc": "<p>The new Plugin class.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for Ext.PluginManager.registerType ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/PluginManager.js",
        "private": false,
        "tagname": "method",
        "name": "preg",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects an array of DOM nodes by CSS/XPath selector. Shorthand of <a href=\"#/api/Ext.DomQuery-method-select\" rel=\"Ext.DomQuery-method-select\" class=\"docClass\">Ext.DomQuery.select</a></p>\n",
        "href": "DomQuery.html#Ext-method-query",
        "linenr": 979,
        "html_filename": "DomQuery.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "HTMLElement[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The selector/xpath query</p>\n",
            "type": "String",
            "optional": false,
            "name": "path"
          },
          {
            "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
            "type": "HTMLElement",
            "optional": true,
            "name": "root"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects an array of DOM nodes by CSS/XPath selector. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomQuery.js",
        "private": false,
        "tagname": "method",
        "name": "query",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old way for creating Model classes.  Instead use:</p>\n\n<pre><code>Ext.define(\"MyModel\", {\n    extend: \"Ext.data.Model\",\n    fields: []\n});\n</code></pre>\n",
        "href": "ModelManager.html#Ext-method-regModel",
        "linenr": 165,
        "html_filename": "ModelManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The newly registered Model</p>\n",
          "type": "Ext.data.Model"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Name of the Model class.</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          },
          {
            "doc": "<p>A configuration object for the Model you wish to create.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">define</a> instead.</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old way for creating Model classes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "tagname": "method",
        "name": "regModel",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a new store for the given id and config, then registers it with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Store Mananger</a>. \nSample usage:</p>\n\n\n\n\n<pre><code>    Ext.regStore('AllUsers', {\n        model: 'User'\n    });\n\n    //the store can now easily be used throughout the application\n    new Ext.List({\n        store: 'AllUsers',\n        ... other config\n    });\n    </code></pre>\n\n",
        "href": "StoreManager.html#Ext-method-regStore",
        "linenr": 117,
        "html_filename": "StoreManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id to set on the new store</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          },
          {
            "doc": "<p>The store config</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>The new Component class.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a new store for the given id and config, then registers it with the Store Mananger. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/StoreManager.js",
        "private": false,
        "tagname": "method",
        "name": "regStore",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes a DOM node from the document.</p>\n\n<p>Removes this element from the document, removes all DOM event listeners, and deletes the cache reference.\nAll DOM event listeners are removed from this element. If <a href=\"#/api/Ext-property-enableNestedListenerRemoval\" rel=\"Ext-property-enableNestedListenerRemoval\" class=\"docClass\">Ext.enableNestedListenerRemoval</a> is\n<code>true</code>, then DOM event listeners are also removed from all child nodes. The body node\nwill be ignored if passed in.</p>\n\n",
        "href": "Ext-more.html#Ext-method-removeNode",
        "linenr": 519,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The node to remove</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes a DOM node from the document. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "removeNode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> is alias for <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a> for convenience.</p>\n",
        "href": "Loader.html#Ext-method-require",
        "linenr": 941,
        "html_filename": "Loader.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "require"
        },
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
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects elements based on the passed CSS selector to enable <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> methods\nto be applied to many related elements in one statement through the returned <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">CompositeElement</a> or\n<a href=\"#/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">CompositeElementLite</a> object.</p>\n",
        "href": "CompositeElement2.html#Ext-method-select",
        "linenr": 73,
        "html_filename": "CompositeElement2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.CompositeElementLite/Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS selector or an array of elements</p>\n",
            "type": "String/HTMLElement[]",
            "optional": false,
            "name": "selector"
          },
          {
            "doc": "<p>(optional) true to create a unique <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> for each element (defaults to a shared flyweight object)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "unique"
          },
          {
            "doc": "<p>(optional) The root element of the query or id of the root</p>\n",
            "type": "HTMLElement/String",
            "optional": true,
            "name": "root"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects elements based on the passed CSS selector to enable Element methods\nto be applied to many related elements in...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElement.js",
        "private": false,
        "tagname": "method",
        "name": "select",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a></p>\n\n<p>Calculates the sum of all items in the given array.</p>\n",
        "href": "Array2.html#Ext-method-sum",
        "linenr": 1007,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "sum"
        },
        "return": {
          "doc": "<p>The sum.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array to calculate the sum value of.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.sum\n\nCalculates the sum of all items in the given array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "sum",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Synchronously loads all classes by the given names and all their direct dependencies;\noptionally executes the given callback function when finishes, within the optional scope.</p>\n\n<p><a href=\"#/api/Ext-method-syncRequire\" rel=\"Ext-method-syncRequire\" class=\"docClass\">Ext.syncRequire</a> is alias for <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a> for convenience.</p>\n",
        "href": "Loader.html#Ext-method-syncRequire",
        "linenr": 948,
        "html_filename": "Loader.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Loader",
          "tagname": "alias",
          "member": "syncRequire"
        },
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
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\">Ext.toArray</a> is alias for <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n",
        "href": "Array2.html#Ext-method-toArray",
        "linenr": 1061,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "toArray"
        },
        "return": {
          "doc": "<p>array</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the iterable object to be turned into a true Array.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "iterable"
          },
          {
            "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n",
            "type": "Number",
            "optional": true,
            "name": "start"
          },
          {
            "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n",
            "type": "Number",
            "optional": true,
            "name": "end"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "toArray",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); //'Adama, Tigh and Roslin'\nExt.toSentence(['Adama', 'Tigh', 'Roslin'], 'or'); //'Adama, Tigh or Roslin'</p>\n",
        "href": "Ext-more.html#Ext-method-toSentence",
        "linenr": 1056,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The sentence string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array to create a sentence from</p>\n",
            "type": "String[]",
            "optional": false,
            "name": "items"
          },
          {
            "doc": "<p>The string to use to connect the last two words. Usually 'and' or 'or' - defaults to 'and'.</p>\n",
            "type": "String",
            "optional": false,
            "name": "connector"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "toSentence",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a></p>\n\n<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n",
        "href": "Ext.html#Ext-method-type",
        "linenr": 576,
        "html_filename": "Ext.html",
        "alias": {
          "doc": null,
          "cls": "Ext",
          "tagname": "alias",
          "member": "typeOf"
        },
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
            "name": "value"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to typeOf\n\nReturns the type of the given variable in string format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "type",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n",
        "href": "Ext.html#Ext-method-typeOf",
        "linenr": 258,
        "html_filename": "Ext.html",
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
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the type of the given variable in string format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "typeOf",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a></p>\n\n<p>Returns a new array with unique items</p>\n",
        "href": "Array2.html#Ext-method-unique",
        "linenr": 1043,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "unique"
        },
        "return": {
          "doc": "<p>results</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Old alias to Ext.Array.unique\n\nReturns a new array with unique items ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "unique",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
        "href": "Ext-more.html#Ext-method-urlAppend",
        "linenr": 209,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>(String) The resulting URL</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The URL to append to.</p>\n",
            "type": "String",
            "optional": false,
            "name": "url"
          },
          {
            "doc": "<p>The content to append to the URL.</p>\n",
            "type": "String",
            "optional": false,
            "name": "s"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "urlAppend",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a></p>\n",
        "href": "Object.html#Ext-method-urlDecode",
        "linenr": 518,
        "html_filename": "Object.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "A convenient alias method for Ext.Object.fromQueryString ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "tagname": "method",
        "name": "urlDecode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a></p>\n",
        "href": "Object.html#Ext-method-urlEncode",
        "linenr": 498,
        "html_filename": "Object.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "A convenient alias method for Ext.Object.toQueryString ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Object.js",
        "private": false,
        "tagname": "method",
        "name": "urlEncode",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Utility method for returning a default value if the passed value is empty.</p>\n\n\n<p>The value is deemed to be empty if it is<div class=\"mdetail-params\"><ul>\n<li>null</li>\n<li>undefined</li>\n<li>an empty array</li>\n<li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>\n</ul></div>\n\n",
        "href": "Ext-more.html#Ext-method-value",
        "linenr": 753,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>value, if non-empty, else defaultValue</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The value to return if the original value is empty</p>\n",
            "type": "Object",
            "optional": false,
            "name": "defaultValue"
          },
          {
            "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "allowBlank"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Use <a href=\"#/api/Ext-method-valueFrom\" rel=\"Ext-method-valueFrom\" class=\"docClass\">valueFrom</a> instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Utility method for returning a default value if the passed value is empty. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "value",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the given value itself if it's not empty, as described in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">isEmpty</a>; returns the default\nvalue (second argument) otherwise.</p>\n",
        "href": "Ext.html#Ext-method-valueFrom",
        "linenr": 245,
        "html_filename": "Ext.html",
        "alias": null,
        "return": {
          "doc": "<p>value, if non-empty, else defaultValue</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to test</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The value to return if the original value is empty</p>\n",
            "type": "Object",
            "optional": false,
            "name": "defaultValue"
          },
          {
            "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "allowBlank"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the given value itself if it's not empty, as described in isEmpty; returns the default\nvalue (second argument...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "method",
        "name": "valueFrom",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n",
        "href": "ClassManager.html#Ext-method-widget",
        "linenr": 1027,
        "html_filename": "ClassManager.html",
        "alias": null,
        "return": {
          "doc": "<p>widget instance</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>xtype of the widget to create.</p>\n",
            "type": "String",
            "optional": false,
            "name": "name"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenient shorthand to create a widget by its xtype, also see Ext.ClassManager.instantiateByAlias\n\nvar button = Ext....",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "tagname": "method",
        "name": "widget",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Zips N sets together.</p>\n\n\n<pre><code>// Example 1:\nExt.zip([1,2,3],[4,5,6]); // [[1,4],[2,5],[3,6]]\n// Example 2:\nExt.zip(\n    [ \"+\", \"-\", \"+\"],\n    [  12,  10,  22],\n    [  43,  15,  96],\n    function(a, b, c){\n        return \"$\" + a + \"\" + b + \".\" + c\n    }\n); // [\"$+12.43\", \"$-10.15\", \"$+22.96\"]\n</code></pre>\n\n",
        "href": "Ext-more.html#Ext-method-zip",
        "linenr": 1016,
        "html_filename": "Ext-more.html",
        "alias": null,
        "return": {
          "doc": "<p>The zipped set.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>This argument may be repeated. Array(s) to contribute values.</p>\n",
            "type": "Array/NodeList...",
            "optional": false,
            "name": "arr"
          },
          {
            "doc": "<p>(optional) The last item in the argument list. This will drive how the items are zipped together.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "zipper"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": "4.0.0",
          "text": "<p>Will be removed in the next major version</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Zips N sets together. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "method",
        "name": "zip",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "String",
        "doc": "<p>URL to a 1x1 transparent gif image used by Ext to create inline icons with CSS background images.\nIn older versions of IE, this defaults to \"http://sencha.com/s.gif\" and you should change this to a URL on your server.\nFor other browsers it uses an inline data URL.</p>\n",
        "href": "Ext-more.html#Ext-property-BLANK_IMAGE_URL",
        "linenr": 745,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "URL to a 1x1 transparent gif image used by Ext to create inline icons with CSS background images. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "BLANK_IMAGE_URL",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content warning (<tt>'about:blank'</tt>, except for IE in secure mode, which is <tt>'javascript:\"\"'</tt>).</p>\n",
        "href": "Ext-more.html#Ext-property-SSL_SECURE_URL",
        "linenr": 434,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "SSL_SECURE_URL",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Indicates whether to use native browser parsing for JSON methods.\nThis option is ignored if the browser does not support native JSON methods.\n<b>Note: Native JSON methods will not work with objects that have functions.\nAlso, property names must be quoted, otherwise the data will not parse.</b> (Defaults to false)</p>\n",
        "href": "Ext-more.html#Ext-property-USE_NATIVE_JSON",
        "linenr": 462,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Indicates whether to use native browser parsing for JSON methods. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "USE_NATIVE_JSON",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.env.Browser",
        "doc": "<p>Global convenient instance of <a href=\"#/api/Ext.env.Browser\" rel=\"Ext.env.Browser\" class=\"docClass\">Ext.env.Browser</a>.</p>\n",
        "href": "Browser.html#Ext-property-browser",
        "linenr": 167,
        "html_filename": "Browser.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/Browser.js",
        "private": false,
        "tagname": "property",
        "name": "browser",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current version of Chrome (0 if the browser is not Chrome).</p>\n",
        "href": "Ext-more.html#Ext-property-chromeVersion",
        "linenr": 703,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "chromeVersion",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> Class is available</p>\n",
        "href": "Ext-more.html#Ext-property-enableFx",
        "linenr": 441,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "enableFx",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically uncache orphaned Ext.Elements periodically (defaults to true)</p>\n",
        "href": "Ext-more.html#Ext-property-enableGarbageCollector",
        "linenr": 45,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "enableGarbageCollector",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically purge event listeners during garbageCollection (defaults to true).</p>\n",
        "href": "Ext-more.html#Ext-property-enableListenerCollection",
        "linenr": 51,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "enableListenerCollection",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed.\nCurrently not optimized for performance.</p>\n",
        "href": "Ext-more.html#Ext-property-enableNestedListenerRemoval",
        "linenr": 455,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "enableNestedListenerRemoval",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String[]",
        "doc": "<p>An array containing extra enumerables for old browsers</p>\n",
        "href": "Ext.html#Ext-property-enumerables",
        "linenr": 28,
        "html_filename": "Ext.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
        "private": false,
        "tagname": "property",
        "name": "enumerables",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.env.FeatureDetector",
        "doc": "<p>Global convenient instance of <a href=\"#/api/Ext.env.FeatureDetector\" rel=\"Ext.env.FeatureDetector\" class=\"docClass\">Ext.env.FeatureDetector</a>.</p>\n",
        "href": "FeatureDetector.html#Ext-property-features",
        "linenr": 263,
        "html_filename": "FeatureDetector.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/FeatureDetector.js",
        "private": false,
        "tagname": "property",
        "name": "features",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current version of Firefox (0 if the browser is not Firefox).</p>\n",
        "href": "Ext-more.html#Ext-property-firefoxVersion",
        "linenr": 709,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "firefoxVersion",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current version of IE (0 if the browser is not IE). This does not account\nfor the documentMode of the current page, which is factored into <a href=\"#/api/Ext-property-isIE7\" rel=\"Ext-property-isIE7\" class=\"docClass\">isIE7</a>,\n<a href=\"#/api/Ext-property-isIE8\" rel=\"Ext-property-isIE8\" class=\"docClass\">isIE8</a> and <a href=\"#/api/Ext-property-isIE9\" rel=\"Ext-property-isIE9\" class=\"docClass\">isIE9</a>. Thus this is not always true:</p>\n\n<pre><code> Ext.isIE8 == (Ext.ieVersion == 8)\n</code></pre>\n",
        "href": "Ext-more.html#Ext-property-ieVersion",
        "linenr": 715,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The current version of IE (0 if the browser is not IE). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "ieVersion",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Chrome.</p>\n",
        "href": "Ext-more.html#Ext-property-isChrome",
        "linenr": 565,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isChrome",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses FireFox 3.0</p>\n",
        "href": "Ext-more.html#Ext-property-isFF3_0",
        "linenr": 655,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isFF3_0",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses FireFox 3.5</p>\n",
        "href": "Ext-more.html#Ext-property-isFF3_5",
        "linenr": 661,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isFF3_5",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses FireFox 3.6</p>\n",
        "href": "Ext-more.html#Ext-property-isFF3_6",
        "linenr": 667,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isFF3_6",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses FireFox 4</p>\n",
        "href": "Ext-more.html#Ext-property-isFF4",
        "linenr": 673,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isFF4",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses FireFox 5</p>\n",
        "href": "Ext-more.html#Ext-property-isFF5",
        "linenr": 679,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isFF5",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses the Gecko layout engine (e.g. Mozilla, Firefox).</p>\n",
        "href": "Ext-more.html#Ext-property-isGecko",
        "linenr": 631,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the detected browser uses the Gecko layout engine (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isGecko",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses a Gecko 1.9+ layout engine (e.g. Firefox 3.x).</p>\n",
        "href": "Ext-more.html#Ext-property-isGecko3",
        "linenr": 637,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the detected browser uses a Gecko 1.9+ layout engine (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isGecko3",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses a Gecko 2.0+ layout engine (e.g. Firefox 4.x).</p>\n",
        "href": "Ext-more.html#Ext-property-isGecko4",
        "linenr": 643,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the detected browser uses a Gecko 2.0+ layout engine (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isGecko4",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses a Gecko 5.0+ layout engine (e.g. Firefox 5.x).</p>\n",
        "href": "Ext-more.html#Ext-property-isGecko5",
        "linenr": 649,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the detected browser uses a Gecko 5.0+ layout engine (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isGecko5",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Internet Explorer.</p>\n",
        "href": "Ext-more.html#Ext-property-isIE",
        "linenr": 601,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isIE",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Internet Explorer 6.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isIE6",
        "linenr": 607,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isIE6",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Internet Explorer 7.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isIE7",
        "linenr": 613,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isIE7",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Internet Explorer 8.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isIE8",
        "linenr": 619,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isIE8",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Internet Explorer 9.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isIE9",
        "linenr": 625,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isIE9",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected platform is Linux.</p>\n",
        "href": "Ext-more.html#Ext-property-isLinux",
        "linenr": 685,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isLinux",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected platform is Mac OS.</p>\n",
        "href": "Ext-more.html#Ext-property-isMac",
        "linenr": 697,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isMac",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Opera.</p>\n",
        "href": "Ext-more.html#Ext-property-isOpera",
        "linenr": 547,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isOpera",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Opera 10.5x.</p>\n",
        "href": "Ext-more.html#Ext-property-isOpera10_5",
        "linenr": 553,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isOpera10_5",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True when the document is fully initialized and ready for action</p>\n",
        "href": "Ext-more.html#Ext-property-isReady",
        "linenr": 39,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isReady",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Safari.</p>\n",
        "href": "Ext-more.html#Ext-property-isSafari",
        "linenr": 571,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isSafari",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Safari 2.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isSafari2",
        "linenr": 595,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isSafari2",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Safari 3.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isSafari3",
        "linenr": 577,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isSafari3",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Safari 4.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isSafari4",
        "linenr": 583,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isSafari4",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser is Safari 5.x.</p>\n",
        "href": "Ext-more.html#Ext-property-isSafari5",
        "linenr": 589,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isSafari5",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected browser uses WebKit.</p>\n",
        "href": "Ext-more.html#Ext-property-isWebKit",
        "linenr": 559,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isWebKit",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the detected platform is Windows.</p>\n",
        "href": "Ext-more.html#Ext-property-isWindows",
        "linenr": 691,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "isWindows",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Logs a message. If a console is present it will be used. On Opera, the method\n\"opera.postError\" is called. In other cases, the message is logged to an array\n\"Ext.log.out\". An attached debugger can watch this array and view the log. The\nlog buffer is limited to a maximum of \"Ext.log.max\" entries (defaults to 250).\nThe <code>Ext.log.out</code> array can also be written to a popup window by entering the\nfollowing in the URL bar (a \"bookmarklet\"):</p>\n\n<p>   javascript:void(Ext.log.show());</p>\n\n<p>If additional parameters are passed, they are joined and appended to the message.\nA technique for tracing entry and exit of a function is this:</p>\n\n<pre><code> function foo () {\n     Ext.log({ indent: 1 }, '&gt;&gt; foo');\n\n     // log statements in here or methods called from here will be indented\n     // by one step\n\n     Ext.log({ outdent: 1 }, '&lt;&lt; foo');\n }\n</code></pre>\n\n<p>This method does nothing in a release build.</p>\n",
        "href": "Ext-more.html#Ext-property-log",
        "linenr": 917,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Logs a message. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "log",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current version of Opera (0 if the browser is not Opera).</p>\n",
        "href": "Ext-more.html#Ext-property-operaVersion",
        "linenr": 727,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "operaVersion",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.env.OS",
        "doc": "<p>Global convenient instance of <a href=\"#/api/Ext.env.OS\" rel=\"Ext.env.OS\" class=\"docClass\">Ext.env.OS</a>.</p>\n",
        "href": "OS.html#Ext-property-os",
        "linenr": 128,
        "html_filename": "OS.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/env/OS.js",
        "private": false,
        "tagname": "property",
        "name": "os",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current version of Safari (0 if the browser is not Safari).</p>\n",
        "href": "Ext-more.html#Ext-property-safariVersion",
        "linenr": 733,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "safariVersion",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to scope the reset CSS to be just applied to Ext components. Note that this wraps root containers\nwith an additional element. Also remember that when you turn on this option, you have to use ext-all-scoped {\nunless you use the bootstrap.js to load your javascript, in which case it will be handled for you.</p>\n",
        "href": "Ext-more.html#Ext-property-scopeResetCSS",
        "linenr": 447,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to scope the reset CSS to be just applied to Ext components. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "scopeResetCSS",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>By default, Ext intelligently decides whether floating elements should be shimmed. If you are using flash,\nyou may want to set this to true.</p>\n",
        "href": "Ext-more.html#Ext-property-useShims",
        "linenr": 1078,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "By default, Ext intelligently decides whether floating elements should be shimmed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "useShims",
        "owner": "Ext",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current version of WebKit (0 if the browser does not use WebKit).</p>\n",
        "href": "Ext-more.html#Ext-property-webKitVersion",
        "linenr": 739,
        "html_filename": "Ext-more.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext-more.js",
        "private": false,
        "tagname": "property",
        "name": "webKitVersion",
        "owner": "Ext",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/Ext.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext",
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