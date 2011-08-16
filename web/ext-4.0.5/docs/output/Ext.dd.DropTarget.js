Ext.data.JsonP.Ext_dd_DropTarget({
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
  "doc": "<p>A simple class that provides the basic implementation needed to make any element a drop target that can have\ndraggable items dropped onto it.  The drop has no effect until an implementation of notifyDrop is provided.</p>\n",
  "extends": "Ext.dd.DDTarget",
  "href": "DropTarget.html#Ext-dd-DropTarget",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "DropTarget.html",
  "subclasses": [
    "Ext.dd.DropZone"
  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then this object will only\ninteract with other drag drop objects in the same group (defaults to undefined).</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-ddGroup",
        "linenr": 29,
        "html_filename": "DropTarget.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "cfg",
        "name": "ddGroup",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class returned to the drag source when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-dropAllowed",
        "linenr": 38,
        "html_filename": "DropTarget.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "cfg",
        "name": "dropAllowed",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class returned to the drag source when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-dropNotAllowed",
        "linenr": 43,
        "html_filename": "DropTarget.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "cfg",
        "name": "dropNotAllowed",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class applied to the drop target element while the drag source is over it (defaults to \"\").</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-overClass",
        "linenr": 34,
        "html_filename": "DropTarget.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "cfg",
        "name": "overClass",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new DropTarget.</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-method-constructor",
        "linenr": 11,
        "html_filename": "DropTarget.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The container element or ID of it.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DropTarget. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleClass",
        "linenr": 860,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the class of the elements you wish to ignore</p>\n",
            "type": "String",
            "optional": false,
            "name": "cssClass"
          }
        ],
        "deprecated": null,
        "shortDoc": "Lets you specify a css class of elements that will not initiate a drag ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "addInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleId",
        "linenr": 847,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element id of the element you wish to ignore</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "addInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate embedding links within a\ndrag handle that do something other than start the drag.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleType",
        "linenr": 835,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the type of element to exclude</p>\n",
            "type": "String",
            "optional": false,
            "name": "tagName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Allows you to specify a tag name that should not start a drag operation\nwhen clicked. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "addInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addToGroup",
        "linenr": 704,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the name of the group</p>\n",
            "type": "String",
            "optional": false,
            "name": "sGroup"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds this instance to a group of related drag/drop objects. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "addToGroup",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies the configuration parameters that were passed into the constructor.\nThis is supposed to happen at each level through the inheritance chain.  So\na DDProxy implentation will execute apply config on DDProxy, DD, and\nDragDrop in order to get all of the parameters that are available in\neach object.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-applyConfig",
        "linenr": 614,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Applies the configuration parameters that were passed into the constructor. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "applyConfig",
        "owner": "Ext.dd.DragDrop",
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
        "doc": "<p>Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constraint at this time.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearConstraints",
        "linenr": 1006,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Clears any constraints applied to this instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "clearConstraints",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clears any tick interval defined for this instance</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearTicks",
        "linenr": 1016,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Clears any tick interval defined for this instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "clearTicks",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code>var dd = new Ext.dd.DDProxy(\"dragDiv1\", \"proxytest\",\n               { dragElId: \"existingProxyDiv\" });\ndd.startDrag = function(){\n    this.constrainTo(\"parent-id\");\n};\n</code></pre>\n\n<p>Or you can initalize it using the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object:</p>\n\n<pre><code>Ext.get(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n    startDrag : function(){\n        this.constrainTo(\"parent-id\");\n    }\n});\n</code></pre>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-constrainTo",
        "linenr": 477,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element or element ID to constrain to.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "constrainTo"
          },
          {
            "doc": "<p>(optional) Pad provides a way to specify \"padding\" of the constraints,\nand can be either a number for symmetrical padding (4 would be equal to <code>{left:4, right:4, top:4, bottom:4}</code>) or\nan object containing the sides to pad. For example: <code>{right:10, bottom:10}</code></p>\n",
            "type": "Object/Number",
            "optional": true,
            "name": "pad"
          },
          {
            "doc": "<p>(optional) Constrain the draggable in the content box of the element (inside padding and borders)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "inContent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initializes the drag drop object's constraints to restrict movement to a certain element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "constrainTo",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when we are done dragging the object</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-endDrag",
        "linenr": 434,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mouseup event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when we are done dragging the object ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "endDrag",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be assigned to another\nelement. An example of this can be found in <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a></p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getDragEl",
        "linenr": 546,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "<p>the html element</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns a reference to the actual element to drag. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "getDragEl",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a reference to the linked element</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getEl",
        "linenr": 534,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "<p>the html element</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns a reference to the linked element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "getEl",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-init",
        "linenr": 556,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the linked element</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          },
          {
            "doc": "<p>the group of related items</p>\n",
            "type": "String",
            "optional": false,
            "name": "sGroup"
          },
          {
            "doc": "<p>configuration attributes</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets up the DragDrop object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "init",
        "owner": "Ext.dd.DragDrop",
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
        "doc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-initTarget",
        "linenr": 569,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the linked element</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          },
          {
            "doc": "<p>the group of related items</p>\n",
            "type": "String",
            "optional": false,
            "name": "sGroup"
          },
          {
            "doc": "<p>configuration attributes</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initializes Targeting functionality only... ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "initTarget",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isLocked",
        "linenr": 782,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "<p>true if this obj or all drag/drop is locked, else\nfalse</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "isLocked",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isValidHandleChild",
        "linenr": 902,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "<p>true if this is a valid tag type, false if not</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the HTMLElement to evaluate</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks the tag exclusion list to see if this click should be ignored ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "isValidHandleChild",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Locks this instance</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-lock",
        "linenr": 182,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Locks this instance ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "lock",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop target that the dragged item has\nbeen dropped on it.  This method has no default implementation and returns false, so you must provide an\nimplementation that does something to process the drop event and returns true so that the drag source's\nrepair action does not run.</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-method-notifyDrop",
        "linenr": 100,
        "html_filename": "DropTarget.html",
        "alias": null,
        "return": {
          "doc": "<p>False if the drop was invalid.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The drag source that was dragged over this drop target</p>\n",
            "type": "Ext.dd.DragSource",
            "optional": false,
            "name": "source"
          },
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          }
        ],
        "deprecated": null,
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop target that the dragged item has\nbeen dropped on it. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "method",
        "name": "notifyDrop",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop target that the source is now over the\ntarget.  This default implementation adds the CSS class specified by overClass (if any) to the drop element\nand returns the dropAllowed config value.  This method should be overridden if drop validation is required.</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-method-notifyEnter",
        "linenr": 55,
        "html_filename": "DropTarget.html",
        "alias": null,
        "return": {
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The drag source that was dragged over this drop target</p>\n",
            "type": "Ext.dd.DragSource",
            "optional": false,
            "name": "source"
          },
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          }
        ],
        "deprecated": null,
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop target that the source is now over the\ntarget. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "method",
        "name": "notifyEnter",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop target that the source has been dragged\nout of the target without dropping.  This default implementation simply removes the CSS class specified by\noverClass (if any) from the drop element.</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-method-notifyOut",
        "linenr": 86,
        "html_filename": "DropTarget.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The drag source that was dragged over this drop target</p>\n",
            "type": "Ext.dd.DragSource",
            "optional": false,
            "name": "source"
          },
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          }
        ],
        "deprecated": null,
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop target that the source has been dragged\nout of the ta...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "method",
        "name": "notifyOut",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls continuously while it is being dragged over the target.\nThis method will be called on every mouse movement while the drag source is over the drop target.\nThis default implementation simply returns the dropAllowed config value.</p>\n",
        "href": "DropTarget.html#Ext-dd-DropTarget-method-notifyOver",
        "linenr": 72,
        "html_filename": "DropTarget.html",
        "alias": null,
        "return": {
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The drag source that was dragged over this drop target</p>\n",
            "type": "Ext.dd.DragSource",
            "optional": false,
            "name": "source"
          },
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          }
        ],
        "deprecated": null,
        "shortDoc": "The function a Ext.dd.DragSource calls continuously while it is being dragged over the target. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "tagname": "method",
        "name": "notifyOver",
        "owner": "Ext.dd.DropTarget",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onAvailable",
        "linenr": 459,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Override the onAvailable method to do what is needed after the initial\nposition was determined. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onAvailable",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDrag",
        "linenr": 357,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mousemove event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called during the onMouseMove event while dragging an\nobject. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onDrag",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragDrop",
        "linenr": 411,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mouseup event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>In POINT mode, the element\nid this was dropped on.  In INTERSECT mode, an array of dd items this\nwas dropped on.</p>\n",
            "type": "String/Ext.dd.DragDrop[]",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called when this item is dropped on another DragDrop\nobj ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onDragDrop",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragEnter",
        "linenr": 364,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mousemove event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of one or more\ndragdrop items being hovered over.</p>\n",
            "type": "String/Ext.dd.DragDrop[]",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called when this element fist begins hovering over\nanother DragDrop obj ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onDragEnter",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called when we are no longer hovering over an element</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOut",
        "linenr": 396,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mousemove event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>In POINT mode, the element\nid this was hovering over.  In INTERSECT mode, an array of dd items\nthat the mouse is no longer over.</p>\n",
            "type": "String/Ext.dd.DragDrop[]",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called when we are no longer hovering over an element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onDragOut",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOver",
        "linenr": 380,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mousemove event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          },
          {
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of dd items\nbeing hovered over.</p>\n",
            "type": "String/Ext.dd.DragDrop[]",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called when this element is hovering over another\nDragDrop obj ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onDragOver",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onInvalidDrop",
        "linenr": 421,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mouseup event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called when this item is dropped on an area with no\ndrop target ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onInvalidDrop",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when a drag/drop obj gets a mousedown</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseDown",
        "linenr": 447,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mousedown event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when a drag/drop obj gets a mousedown ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onMouseDown",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Called when a drag/drop obj gets a mouseup</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseUp",
        "linenr": 453,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the mouseup event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Called when a drag/drop obj gets a mouseup ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "onMouseUp",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes this instance from the supplied interaction group</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeFromGroup",
        "linenr": 715,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The group to drop</p>\n",
            "type": "String",
            "optional": false,
            "name": "sGroup"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes this instance from the supplied interaction group ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "removeFromGroup",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Unsets an invalid css class</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleClass",
        "linenr": 889,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the class of the element(s) you wish to\nre-enable</p>\n",
            "type": "String",
            "optional": false,
            "name": "cssClass"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unsets an invalid css class ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "removeInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Unsets an invalid handle id</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleId",
        "linenr": 878,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the element to re-enable</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unsets an invalid handle id ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "removeInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleType",
        "linenr": 868,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the type of element to unexclude</p>\n",
            "type": "String",
            "optional": false,
            "name": "tagName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Unsets an excluded tag name set by addInvalidHandleType ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "removeInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Must be called if you manually reposition a dd element.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-resetConstraints",
        "linenr": 1047,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Boolean",
            "optional": false,
            "name": "maintainOffset"
          }
        ],
        "deprecated": null,
        "shortDoc": "Must be called if you manually reposition a dd element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "resetConstraints",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setDragElId",
        "linenr": 727,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setDragElId",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example of this would be if\nyou have a content div with text and links.  Clicking anywhere in the\ncontent area would normally start the drag operation.  Use this method\nto specify that an element inside of the content div is the element\nthat starts the drag operation.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setHandleElId",
        "linenr": 736,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the element that will be used to\ninitiate the drag.</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Allows you to specify a child of the linked element that should be\nused to initiate the drag operation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setHandleElId",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Stores the initial placement of the linked element.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setInitPosition",
        "linenr": 664,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the X offset, default 0</p>\n",
            "type": "Number",
            "optional": false,
            "name": "diffX"
          },
          {
            "doc": "<p>the Y offset, default 0</p>\n",
            "type": "Number",
            "optional": false,
            "name": "diffY"
          }
        ],
        "deprecated": null,
        "shortDoc": "Stores the initial placement of the linked element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setInitPosition",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setOuterHandleElId",
        "linenr": 754,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Allows you to set an element outside of the linked element as a drag\nhandle ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setOuterHandleElId",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setPadding",
        "linenr": 642,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Top pad</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iTop"
          },
          {
            "doc": "<p>Right pad</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iRight"
          },
          {
            "doc": "<p>Bot pad</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iBot"
          },
          {
            "doc": "<p>Left pad</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iLeft"
          }
        ],
        "deprecated": null,
        "shortDoc": "Configures the padding for the target zone in px. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setPadding",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of the element.  Pass in\n0,0 for the parameters if you want to lock the drag to the y axis.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setXConstraint",
        "linenr": 985,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the number of pixels the element can move to the left</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iLeft"
          },
          {
            "doc": "<p>the number of pixels the element can move to the\nright</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iRight"
          },
          {
            "doc": "<p>(optional) parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "iTickSize"
          }
        ],
        "deprecated": null,
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setXConstraint",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element.  Pass in 0,0 for the\nparameters if you want to lock the drag to the x axis.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setYConstraint",
        "linenr": 1026,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the number of pixels the element can move up</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iUp"
          },
          {
            "doc": "<p>the number of pixels the element can move down</p>\n",
            "type": "Number",
            "optional": false,
            "name": "iDown"
          },
          {
            "doc": "<p>(optional) parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
            "type": "Number",
            "optional": true,
            "name": "iTickSize"
          }
        ],
        "deprecated": null,
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "setYConstraint",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-startDrag",
        "linenr": 343,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>click location</p>\n",
            "type": "Number",
            "optional": false,
            "name": "X"
          },
          {
            "doc": "<p>click location</p>\n",
            "type": "Number",
            "optional": false,
            "name": "Y"
          }
        ],
        "deprecated": null,
        "shortDoc": "Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "startDrag",
        "owner": "Ext.dd.DragDrop",
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
        "doc": "<p>toString method</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-toString",
        "linenr": 1112,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "<p>string representation of the dd obj</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "toString method ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "toString",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Unlocks this instace</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unlock",
        "linenr": 197,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Unlocks this instace ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "unlock",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all drag and drop hooks for this element</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unreg",
        "linenr": 769,
        "html_filename": "DragDrop.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all drag and drop hooks for this element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "method",
        "name": "unreg",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Boolean",
        "doc": "<p>The available property is false until the linked dom element is accessible.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-available",
        "linenr": 318,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "available",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Configuration attributes passed into the constructor</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-config",
        "linenr": 87,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "config",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Provides default constraint padding to \"constrainTo\" elements (defaults to <code>{left:0, right:0, top:0, bottom:0}</code>).</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-defaultPadding",
        "linenr": 466,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "defaultPadding",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-groups",
        "linenr": 163,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The group defines a logical collection of DragDrop objects that are\nrelated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "groups",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. Defaults to false.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-hasOuterHandles",
        "linenr": 325,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "hasOuterHandles",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-id",
        "linenr": 77,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The id of the element associated with this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "id",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-ignoreSelf",
        "linenr": 69,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "ignoreSelf",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String[]",
        "doc": "<p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleClasses",
        "linenr": 139,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "invalidHandleClasses",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleIds",
        "linenr": 127,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An object who's property names identify the IDs of elements to be considered invalid as drag handles. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "invalidHandleIds",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleTypes",
        "linenr": 115,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An object who's property names identify HTML tags to be considered invalid as drag handles. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "invalidHandleTypes",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-isTarget",
        "linenr": 204,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "By default, all instances can be a drop target. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "isTarget",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-maintainOffset",
        "linenr": 282,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Maintain offsets when we resetconstraints. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "maintainOffset",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-moveOnly",
        "linenr": 189,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "moveOnly",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number[]",
        "doc": "<p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn array containing the 4 padding values: [top, right, bottom, left]</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-padding",
        "linenr": 212,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "padding",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-primaryButtonOnly",
        "linenr": 308,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "primaryButtonOnly",
        "owner": "Ext.dd.DragDrop",
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
        "type": "Number[]",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-xTicks",
        "linenr": 292,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "xTicks",
        "owner": "Ext.dd.DragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number[]",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-yTicks",
        "linenr": 300,
        "html_filename": "DragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "tagname": "property",
        "name": "yTicks",
        "owner": "Ext.dd.DragDrop",
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
    "Ext.dd.DragDrop",
    "Ext.dd.DDTarget"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.dd.DropTarget",
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