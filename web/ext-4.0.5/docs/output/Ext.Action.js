Ext.data.JsonP.Ext_Action({
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
  "doc": "<p>An Action is a piece of reusable functionality that can be abstracted out of any particular component so that it\ncan be usefully shared among multiple components.  Actions let you share handlers, configuration options and UI\nupdates across any components that support the Action interface (primarily <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a>, <a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>\nand <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> components).</p>\n\n\n<p>Use a single Action instance as the config object for any number of UI Components which share the same configuration. The\nAction not only supplies the configuration, but allows all Components based upon it to have a common set of methods\ncalled at once through a single call to the Action.</p>\n\n\n<p>Any Component that is to be configured with an Action must also support\nthe following methods:<ul>\n<li><code>setText(string)</code></li>\n<li><code>setIconCls(string)</code></li>\n<li><code>setDisabled(boolean)</code></li>\n<li><code>setVisible(boolean)</code></li>\n<li><code>setHandler(function)</code></li></ul>.</p>\n\n\n<p>This allows the Action to control its associated Components.</p>\n\n\n<p>Example usage:<br></p>\n\n<pre><code>// Define the shared Action.  Each Component below will have the same\n// display text and icon, and will display the same message on click.\nvar action = new Ext.Action({\n    <a href=\"#/api/Ext.Action-cfg-text\" rel=\"Ext.Action-cfg-text\" class=\"docClass\">text</a>: 'Do something',\n    <a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a>: function(){\n        Ext.Msg.alert('Click', 'You did something.');\n    },\n    <a href=\"#/api/Ext.Action-cfg-iconCls\" rel=\"Ext.Action-cfg-iconCls\" class=\"docClass\">iconCls</a>: 'do-something',\n    <a href=\"#/api/Ext.Action-cfg-itemId\" rel=\"Ext.Action-cfg-itemId\" class=\"docClass\">itemId</a>: 'myAction'\n});\n\nvar panel = new Ext.panel.Panel({\n    title: 'Actions',\n    width: 500,\n    height: 300,\n    tbar: [\n        // Add the Action directly to a toolbar as a menu button\n        action,\n        {\n            text: 'Action Menu',\n            // Add the Action to a menu as a text item\n            menu: [action]\n        }\n    ],\n    items: [\n        // Add the Action to the panel body as a standard button\n        new Ext.button.Button(action)\n    ],\n    renderTo: Ext.getBody()\n});\n\n// Change the text for all components using the Action\naction.setText('Something else');\n\n// Reference an Action through a container using the itemId\nvar btn = panel.getComponent('myAction');\nvar aRef = btn.baseAction;\naRef.setText('New text');\n</code></pre>\n\n",
  "extends": "Ext.Base",
  "href": "Action2.html#Ext-Action",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Action2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>True to disable all components configured by this Action, false to enable them (defaults to false).</p>\n",
        "href": "Action2.html#Ext-Action-cfg-disabled",
        "linenr": 83,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "disabled",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>The function that will be invoked by each component tied to this Action\nwhen the component's primary event is triggered (defaults to undefined).</p>\n",
        "href": "Action2.html#Ext-Action-cfg-handler",
        "linenr": 89,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The function that will be invoked by each component tied to this Action\nwhen the component's primary event is trigger...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "handler",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to hide all components configured by this Action, false to show them (defaults to false).</p>\n",
        "href": "Action2.html#Ext-Action-cfg-hidden",
        "linenr": 86,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "hidden",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class selector that specifies a background image to be used as the header icon for\nall components configured by this Action (defaults to '').</p>\n\n<p>An example of specifying a custom icon class would be something like:\n</p>\n\n\n<pre><code>// specify the property in the config for the class:\n     ...\n     iconCls: 'do-something'\n\n// css class that specifies background image to be used as the icon image:\n.do-something { background-image: url(../images/my-icon.gif) 0 6px no-repeat !important; }\n</code></pre>\n\n",
        "href": "Action2.html#Ext-Action-cfg-iconCls",
        "linenr": 69,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The CSS class selector that specifies a background image to be used as the header icon for\nall components configured ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "iconCls",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>See <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>.</p>\n",
        "href": "Action2.html#Ext-Action-cfg-itemId",
        "linenr": 93,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "itemId",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The scope (<code><b>this</b></code> reference) in which the\n<code><a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a></code> is executed. Defaults to the browser window.</p>\n",
        "href": "Action2.html#Ext-Action-cfg-scope",
        "linenr": 97,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The scope (this reference) in which the\nhandler is executed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "scope",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The text to set for all components configured by this Action (defaults to '').</p>\n",
        "href": "Action2.html#Ext-Action-cfg-text",
        "linenr": 66,
        "html_filename": "Action2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "cfg",
        "name": "text",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-constructor",
        "linenr": 102,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Config object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.Action",
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
        "doc": "<p>Disables all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-disable",
        "linenr": 165,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Disables all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "disable",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function once for each Component currently tied to this Action.  The function passed\nin should accept a single argument that will be an object that supports the basic Action config/method interface.</p>\n",
        "href": "Action2.html#Ext-Action-method-each",
        "linenr": 222,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to execute for each component</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope (<code>this</code> reference) in which the function is executed.  Defaults to the Component.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function once for each Component currently tied to this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enables all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-enable",
        "linenr": 158,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Enables all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "enable",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes this Action manually using the handler function specified in the original config object\nor the handler function set with <code><a href=\"#/api/Ext.Action-method-setHandler\" rel=\"Ext.Action-method-setHandler\" class=\"docClass\">setHandler</a></code>.  Any arguments passed to this\nfunction will be passed on to the handler function.</p>\n",
        "href": "Action2.html#Ext-Action-method-execute",
        "linenr": 254,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Variable number of arguments passed to the handler function</p>\n",
            "type": "Object...",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes this Action manually using the handler function specified in the original config object\nor the handler funct...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "execute",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the icon CSS class currently used by all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-getIconCls",
        "linenr": 141,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the icon CSS class currently used by all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "getIconCls",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the text currently displayed by all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-getText",
        "linenr": 124,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the text currently displayed by all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "getText",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-hide",
        "linenr": 196,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Hides all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "hide",
        "owner": "Ext.Action",
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
        "doc": "<p>Returns true if the components using this Action are currently disabled, else returns false.</p>\n",
        "href": "Action2.html#Ext-Action-method-isDisabled",
        "linenr": 172,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the components using this Action are currently disabled, else returns false. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "isDisabled",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the components configured by this Action are currently hidden, else returns false.</p>\n",
        "href": "Action2.html#Ext-Action-method-isHidden",
        "linenr": 203,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the components configured by this Action are currently hidden, else returns false. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "isHidden",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the disabled state of all components configured by this Action.  Shortcut method\nfor <a href=\"#/api/Ext.Action-method-enable\" rel=\"Ext.Action-method-enable\" class=\"docClass\">enable</a> and <a href=\"#/api/Ext.Action-method-disable\" rel=\"Ext.Action-method-disable\" class=\"docClass\">disable</a>.</p>\n",
        "href": "Action2.html#Ext-Action-method-setDisabled",
        "linenr": 148,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to disable the component, false to enable it</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "disabled"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the disabled state of all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "setDisabled",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the function that will be called by each Component using this action when its primary event is triggered.</p>\n",
        "href": "Action2.html#Ext-Action-method-setHandler",
        "linenr": 210,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function that will be invoked by the action's components.  The function\nwill be called with no arguments.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component firing the event.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the function that will be called by each Component using this action when its primary event is triggered. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "setHandler",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the hidden state of all components configured by this Action.  Shortcut method\nfor <code><a href=\"#/api/Ext.Action-method-hide\" rel=\"Ext.Action-method-hide\" class=\"docClass\">hide</a></code> and <code><a href=\"#/api/Ext.Action-method-show\" rel=\"Ext.Action-method-show\" class=\"docClass\">show</a></code>.</p>\n",
        "href": "Action2.html#Ext-Action-method-setHidden",
        "linenr": 179,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to hide the component, false to show it</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "hidden"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the hidden state of all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "setHidden",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the icon CSS class for all components configured by this Action.  The class should supply\na background image that will be used as the icon image.</p>\n",
        "href": "Action2.html#Ext-Action-method-setIconCls",
        "linenr": 131,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class supplying the icon image</p>\n",
            "type": "String",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the icon CSS class for all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "setIconCls",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the text to be displayed by all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-setText",
        "linenr": 115,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text to display</p>\n",
            "type": "String",
            "optional": false,
            "name": "text"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the text to be displayed by all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "setText",
        "owner": "Ext.Action",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shows all components configured by this Action.</p>\n",
        "href": "Action2.html#Ext-Action-method-show",
        "linenr": 189,
        "html_filename": "Action2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Shows all components configured by this Action. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
        "private": false,
        "tagname": "method",
        "name": "show",
        "owner": "Ext.Action",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Action.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.Action",
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