Ext.data.JsonP.Ext_Function({
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
  "doc": "<p>A collection of useful static methods to deal with function callbacks</p>\n",
  "extends": null,
  "href": "Function.html#Ext-Function",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Function.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Create an alias to the provided method property with name <code>methodName</code> of <code>object</code>.\nNote that the execution scope will still be bound to the provided <code>object</code> itself.</p>\n",
        "href": "Function.html#Ext-Function-method-alias",
        "linenr": 135,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>aliasFn</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object/Function",
            "optional": false,
            "name": "object"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "methodName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create an alias to the provided method property with name methodName of object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "alias",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally\noverrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n\n<p><a href=\"#/api/Ext-method-bind\" rel=\"Ext-method-bind\" class=\"docClass\">Ext.bind</a> is alias for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n",
        "href": "Function.html#Ext-Function-method-bind",
        "linenr": 68,
        "html_filename": "Function.html",
        "alias": null,
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
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a delegate function, optionally with a bound scope which, when called, buffers\nthe execution of the passed function for the configured number of milliseconds.\nIf called again within that period, the impending invocation will be canceled, and the\ntimeout period will begin again.</p>\n",
        "href": "Function.html#Ext-Function-method-createBuffered",
        "linenr": 292,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>A function which invokes the passed function after buffering for the specified time.</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to invoke on a buffered timer.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The number of milliseconds by which to buffer the invocation of the\nfunction.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "buffer"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which\nthe passed function is executed. If omitted, defaults to the scope specified by the caller.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) Override arguments for the call. Defaults to the arguments\npassed by the caller.</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a delegate function, optionally with a bound scope which, when called, buffers\nthe execution of the passed fu...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "createBuffered",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a delegate (callback) which, when called, executes after a specific delay.</p>\n",
        "href": "Function.html#Ext-Function-method-createDelayed",
        "linenr": 192,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>A function which, when called, executes the original function after the specified delay.</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function which will be called on a delay when the returned function is called.\nOptionally, a replacement (or additional) argument list may be specified.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The number of milliseconds to defer execution by whenever called.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "delay"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) used by the function at execution time.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) Override arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          },
          {
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position.</p>\n",
            "type": "Boolean/Number",
            "optional": true,
            "name": "appendArgs"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a delegate (callback) which, when called, executes after a specific delay. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "createDelayed",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates an interceptor function. The passed function is called before the original one. If it returns false,\nthe original one is not called. The resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\n// create a new function that validates input without\n// directly modifying the original function:\nvar sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){\n    return name == 'Brian';\n});\n\nsayHiToFriend('Fred');  // no alert\nsayHiToFriend('Brian'); // alerts \"Hi, Brian\"\n</code></pre>\n",
        "href": "Function.html#Ext-Function-method-createInterceptor",
        "linenr": 149,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>The new function</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The original function.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "origFn"
          },
          {
            "doc": "<p>The function to call before the original</p>\n",
            "type": "Function",
            "optional": false,
            "name": "newFn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the passed function is executed.\n<strong>If omitted, defaults to the scope in which the original function is called or the browser window.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The value to return if the passed function return false (defaults to null).</p>\n",
            "type": "Object",
            "optional": true,
            "name": "returnValue"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates an interceptor function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "createInterceptor",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a combined function call sequence of the original function + the passed function.\nThe resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\nvar sayGoodbye = Ext.Function.createSequence(sayHi, function(name){\n    alert('Bye, ' + name);\n});\n\nsayGoodbye('Fred'); // both alerts show\n</code></pre>\n",
        "href": "Function.html#Ext-Function-method-createSequence",
        "linenr": 256,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>The new function</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The original function.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "origFn"
          },
          {
            "doc": "<p>The function to sequence</p>\n",
            "type": "Function",
            "optional": false,
            "name": "newFn"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the passed function is executed.\nIf omitted, defaults to the scope in which the original function is called or the browser window.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create a combined function call sequence of the original function + the passed function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "createSequence",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a throttled version of the passed function which, when called repeatedly and\nrapidly, invokes the passed function only after a certain interval has elapsed since the\nprevious invocation.</p>\n\n<p>This is useful for wrapping functions which may be called repeatedly, such as\na handler of a mouse move event when the processing is expensive.</p>\n",
        "href": "Function.html#Ext-Function-method-createThrottled",
        "linenr": 323,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>A function which invokes the passed function at the specified interval.</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute at a regular time interval.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The interval <strong>in milliseconds</strong> on which the passed function is executed.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "interval"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which\nthe passed function is executed. If omitted, defaults to the scope specified by the caller.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a throttled version of the passed function which, when called repeatedly and\nrapidly, invokes the passed func...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "createThrottled",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a> is alias for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n",
        "href": "Function.html#Ext-Function-method-defer",
        "linenr": 216,
        "html_filename": "Function.html",
        "alias": null,
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
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>A very commonly used method throughout the framework. It acts as a wrapper around another method\nwhich originally accepts 2 arguments for <code>name</code> and <code>value</code>.\nThe wrapped function then allows \"flexible\" value setting of either:</p>\n\n<ul>\n<li><code>name</code> and <code>value</code> as 2 arguments</li>\n<li>one single object argument with multiple key - value pairs</li>\n</ul>\n\n\n<p>For example:</p>\n\n<pre><code>var setValue = Ext.Function.flexSetter(function(name, value) {\n    this[name] = value;\n});\n\n// Afterwards\n// Setting a single name - value\nsetValue('name1', 'value1');\n\n// Settings multiple name - value pairs\nsetValue({\n    name1: 'value1',\n    name2: 'value2',\n    name3: 'value3'\n});\n</code></pre>\n",
        "href": "Function.html#Ext-Function-method-flexSetter",
        "linenr": 9,
        "html_filename": "Function.html",
        "alias": null,
        "return": {
          "doc": "<p>flexSetter</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Function",
            "optional": false,
            "name": "setter"
          }
        ],
        "deprecated": null,
        "shortDoc": "A very commonly used method throughout the framework. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "tagname": "method",
        "name": "flexSetter",
        "owner": "Ext.Function",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to <code>args</code>.\nNew arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.\nThis is especially useful when creating callbacks.</p>\n\n<p>For example:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alerts 'Hello World'\ncallback('by Me'); // alerts 'Hello World by Me'\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-pass\" rel=\"Ext-method-pass\" class=\"docClass\">Ext.pass</a> is alias for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n",
        "href": "Function.html#Ext-Function-method-pass",
        "linenr": 102,
        "html_filename": "Function.html",
        "alias": null,
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
        "owner": "Ext.Function",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.Function",
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