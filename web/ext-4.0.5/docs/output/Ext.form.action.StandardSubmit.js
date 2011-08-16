Ext.data.JsonP.Ext_form_action_StandardSubmit({
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
  "doc": "<p>A class which handles submission of data from <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Form</a>s using a standard\n<tt>&lt;form&gt;</tt> element submit. It does not handle the response from the submit.</p>\n\n\n<p>If validation of the form fields fails, the Form's afterAction method\nwill be called. Otherwise, afterAction will not be called.</p>\n\n\n<p>Instances of this class are only created by a <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Form</a> when\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submit</a>ting, when the form's <a href=\"#/api/Ext.form.Basic-cfg-standardSubmit\" rel=\"Ext.form.Basic-cfg-standardSubmit\" class=\"docClass\">Ext.form.Basic.standardSubmit</a>\nconfig option is <tt>true</tt>.</p>\n\n",
  "extends": "Ext.form.action.Submit",
  "href": "StandardSubmit.html#Ext-form-action-StandardSubmit",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "StandardSubmit.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>Determines whether a Form's fields are validated\nin a final call to <a href=\"#/api/Ext.form.Basic-method-isValid\" rel=\"Ext.form.Basic-method-isValid\" class=\"docClass\">isValid</a> prior to submission.\nPass <tt>false</tt> in the Form's submit options to prevent this. Defaults to true.</p>\n",
        "href": "Submit.html#Ext-form-action-Submit-cfg-clientValidation",
        "linenr": 65,
        "html_filename": "Submit.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Determines whether a Form's fields are validated\nin a final call to isValid prior to submission. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Submit.js",
        "private": false,
        "tagname": "cfg",
        "name": "clientValidation",
        "owner": "Ext.form.action.Submit",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a><div class=\"sub-desc\">The Action class. If an Ajax\nerror ocurred, the failure type will be in <a href=\"#/api/Ext.form.action.StandardSubmit-property-failureType\" rel=\"Ext.form.action.StandardSubmit-property-failureType\" class=\"docClass\">failureType</a>. The <a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-failure",
        "linenr": 68,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The function to call when a failure packet was received, or when an\nerror ocurred in the Ajax communication. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "failure",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.form.Basic",
        "doc": "<p>The <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">BasicForm</a> instance that\nis invoking this Action. Required.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-form",
        "linenr": 18,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The BasicForm instance that\nis invoking this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "form",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Extra headers to be sent in the AJAX request for submit and load actions. See\n<a href=\"#/api/Ext.data.proxy.Ajax-cfg-headers\" rel=\"Ext.data.proxy.Ajax-cfg-headers\" class=\"docClass\">Ext.data.proxy.Ajax.headers</a>.</p>\n\n",
        "href": "Action.html#Ext-form-action-Action-cfg-headers",
        "linenr": 47,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Extra headers to be sent in the AJAX request for submit and load actions. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "headers",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The HTTP method to use to access the requested URL. Defaults to the\n<a href=\"#/api/Ext.form.Basic-cfg-method\" rel=\"Ext.form.Basic-cfg-method\" class=\"docClass\">BasicForm's method</a>, or 'POST' if not specified.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-method",
        "linenr": 35,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The HTTP method to use to access the requested URL. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "method",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object/String",
        "doc": "<p>Extra parameter values to pass. These are added to the Form's\n<a href=\"#/api/Ext.form.Basic-cfg-baseParams\" rel=\"Ext.form.Basic-cfg-baseParams\" class=\"docClass\">Ext.form.Basic.baseParams</a> and passed to the specified URL along with the Form's\ninput fields.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.Object.toQueryString</a>.</p>\n\n",
        "href": "Action.html#Ext-form-action-Action-cfg-params",
        "linenr": 40,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Extra parameter values to pass. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "params",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>When set to <tt><b>true</b></tt>, causes the Form to be\n<a href=\"#/api/Ext.form.Basic-method-reset\" rel=\"Ext.form.Basic-method-reset\" class=\"docClass\">reset</a> on Action success. If specified, this happens\nbefore the <a href=\"#/api/Ext.form.action.StandardSubmit-cfg-success\" rel=\"Ext.form.action.StandardSubmit-cfg-success\" class=\"docClass\">success</a> callback is called and before the Form's\n<a href=\"#/api/Ext.form.Basic-event-actioncomplete\" rel=\"Ext.form.Basic-event-actioncomplete\" class=\"docClass\">actioncomplete</a> event fires.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-reset",
        "linenr": 28,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "When set to true, causes the Form to be\nreset on Action success. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "reset",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The scope in which to call the configured <tt>success</tt> and <tt>failure</tt>\ncallback functions (the <tt>this</tt> reference for the callback functions).</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-scope",
        "linenr": 79,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The scope in which to call the configured success and failure\ncallback functions (the this reference for the callback...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "scope",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>If set to <tt>true</tt>, the emptyText value will be sent with the form\nwhen it is submitted. Defaults to <tt>true</tt>.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-submitEmptyText",
        "linenr": 94,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If set to true, the emptyText value will be sent with the form\nwhen it is submitted. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "submitEmptyText",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>The function to call when a valid success return packet is received.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#/api/Ext.form.action.Action\" rel=\"Ext.form.action.Action\" class=\"docClass\">Ext.form.action.Action</a><div class=\"sub-desc\">The Action class. The <a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-success",
        "linenr": 59,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The function to call when a valid success return packet is received. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "success",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Optional <tt>target</tt> attribute to be used for the form when submitting. If not specified,\nthe target will be the current window/frame.</p>\n",
        "href": "StandardSubmit.html#Ext-form-action-StandardSubmit-cfg-target",
        "linenr": 16,
        "html_filename": "StandardSubmit.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional target attribute to be used for the form when submitting. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/StandardSubmit.js",
        "private": false,
        "tagname": "cfg",
        "name": "target",
        "owner": "Ext.form.action.StandardSubmit",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of seconds to wait for a server response before\nfailing with the <a href=\"#/api/Ext.form.action.StandardSubmit-property-failureType\" rel=\"Ext.form.action.StandardSubmit-property-failureType\" class=\"docClass\">failureType</a> as <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>. If not specified,\ndefaults to the configured <tt><a href=\"#/api/Ext.form.Basic-cfg-timeout\" rel=\"Ext.form.Basic-cfg-timeout\" class=\"docClass\">timeout</a></tt> of the\n<a href=\"#/api/Ext.form.action.StandardSubmit-cfg-form\" rel=\"Ext.form.action.StandardSubmit-cfg-form\" class=\"docClass\">form</a>.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-timeout",
        "linenr": 52,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of seconds to wait for a server response before\nfailing with the failureType as Ext.form.action.Action.CON...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "timeout",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The URL that the Action is to invoke. Will default to the <a href=\"#/api/Ext.form.Basic-cfg-url\" rel=\"Ext.form.Basic-cfg-url\" class=\"docClass\">url</a>\nconfigured on the <a href=\"#/api/Ext.form.action.StandardSubmit-cfg-form\" rel=\"Ext.form.action.StandardSubmit-cfg-form\" class=\"docClass\">form</a>.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-url",
        "linenr": 23,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The URL that the Action is to invoke. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "url",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The message to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-waitMsg",
        "linenr": 84,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "waitMsg",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The title to be displayed by a call to <a href=\"#/api/Ext.window.MessageBox-method-wait\" rel=\"Ext.window.MessageBox-method-wait\" class=\"docClass\">Ext.window.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n",
        "href": "Action.html#Ext-form-action-Action-cfg-waitTitle",
        "linenr": 89,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "waitTitle",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Action.</p>\n",
        "href": "Action.html#Ext-form-action-Action-method-constructor",
        "linenr": 163,
        "html_filename": "Action.html",
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
        "shortDoc": "Creates new Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.form.action.Action",
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
        "type": "String",
        "doc": "<p>The type of failure detected will be one of these: <a href=\"#/api/Ext.form.action.Action-property-CLIENT_INVALID\" rel=\"Ext.form.action.Action-property-CLIENT_INVALID\" class=\"docClass\">Ext.form.action.Action.CLIENT_INVALID</a>,\n<a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>, <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>, or\n<a href=\"#/api/Ext.form.action.Action-property-LOAD_FAILURE\" rel=\"Ext.form.action.Action-property-LOAD_FAILURE\" class=\"docClass\">Ext.form.action.Action.LOAD_FAILURE</a>.  Usage:</p>\n\n<pre><code>var fp = new Ext.form.Panel({\n...\nbuttons: [{\n    text: 'Save',\n    formBind: true,\n    handler: function(){\n        if(fp.getForm().isValid()){\n            fp.getForm().submit({\n                url: 'form-submit.php',\n                waitMsg: 'Submitting your data...',\n                success: function(form, action){\n                    // server responded with success = true\n                    var result = action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>;\n                },\n                failure: function(form, action){\n                    if (action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-failureType\" rel=\"Ext.form.action.StandardSubmit-property-failureType\" class=\"docClass\">failureType</a> === <a href=\"#/api/Ext.form.action.Action-property-CONNECT_FAILURE\" rel=\"Ext.form.action.Action-property-CONNECT_FAILURE\" class=\"docClass\">Ext.form.action.Action.CONNECT_FAILURE</a>) {\n                        Ext.Msg.alert('Error',\n                            'Status:'+action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-response\" rel=\"Ext.form.action.StandardSubmit-property-response\" class=\"docClass\">response</a>.status+': '+\n                            action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-response\" rel=\"Ext.form.action.StandardSubmit-property-response\" class=\"docClass\">response</a>.statusText);\n                    }\n                    if (action.failureType === <a href=\"#/api/Ext.form.action.Action-property-SERVER_INVALID\" rel=\"Ext.form.action.Action-property-SERVER_INVALID\" class=\"docClass\">Ext.form.action.Action.SERVER_INVALID</a>){\n                        // server responded with success = false\n                        Ext.Msg.alert('Invalid', action.<a href=\"#/api/Ext.form.action.StandardSubmit-property-result\" rel=\"Ext.form.action.StandardSubmit-property-result\" class=\"docClass\">result</a>.errormsg);\n                    }\n                }\n            });\n        }\n    }\n},{\n    text: 'Reset',\n    handler: function(){\n        fp.getForm().reset();\n    }\n}]\n</code></pre>\n\n",
        "href": "Action.html#Ext-form-action-Action-property-failureType",
        "linenr": 106,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The type of failure detected will be one of these: Ext.form.action.Action.CLIENT_INVALID,\nExt.form.action.Action.SERV...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "property",
        "name": "failureType",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The raw XMLHttpRequest object used to perform the action.</p>\n",
        "href": "Action.html#Ext-form-action-Action-property-response",
        "linenr": 150,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "property",
        "name": "response",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The decoded response object containing a boolean <tt>success</tt> property and\nother, action-specific properties.</p>\n",
        "href": "Action.html#Ext-form-action-Action-property-result",
        "linenr": 156,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "property",
        "name": "result",
        "owner": "Ext.form.action.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Invokes this action using the current configuration.</p>\n",
        "href": "Action.html#Ext-form-action-Action-property-run",
        "linenr": 179,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "property",
        "name": "run",
        "owner": "Ext.form.action.Action",
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
        "type": "String",
        "doc": "<p>The type of action this Action instance performs.\nCurrently only \"submit\" and \"load\" are supported.</p>\n",
        "href": "Action.html#Ext-form-action-Action-property-type",
        "linenr": 99,
        "html_filename": "Action.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The type of action this Action instance performs. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/Action.js",
        "private": false,
        "tagname": "property",
        "name": "type",
        "owner": "Ext.form.action.Action",
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
    "Ext.form.action.Action",
    "Ext.form.action.Submit"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/action/StandardSubmit.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.form.action.StandardSubmit",
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