Ext.data.JsonP.Ext_draw_Color({
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
        "doc": "<p>Create a new color based on the specified HSL values.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-fromHSL",
        "linenr": 231,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.draw.Color</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Hue component (0..359)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "h"
          },
          {
            "doc": "<p>Saturation component (0..1)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "s"
          },
          {
            "doc": "<p>Lightness component (0..1)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "l"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create a new color based on the specified HSL values. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "fromHSL",
        "owner": "Ext.draw.Color",
        "static": true,
        "inheritable": false
      },
      {
        "doc": "<p>Parse the string and create a new color.</p>\n\n<p>Supported formats: '#rrggbb', '#rgb', and 'rgb(r,g,b)'.</p>\n\n<p>If the string is not recognized, an undefined will be returned instead.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-fromString",
        "linenr": 177,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.draw.Color</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Color in string.</p>\n",
            "type": "String",
            "optional": false,
            "name": "str"
          }
        ],
        "deprecated": null,
        "shortDoc": "Parse the string and create a new color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "fromString",
        "owner": "Ext.draw.Color",
        "static": true,
        "inheritable": false
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
      },
      {
        "doc": "<p>Convert a color to hexadecimal format.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-toHex",
        "linenr": 143,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "<p>The color in hexadecimal format.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The color value (i.e 'rgb(255, 255, 255)', 'color: #ffffff').\nCan also be an Array, in this case the function handles the first member.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "color"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convert a color to hexadecimal format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "toHex",
        "owner": "Ext.draw.Color",
        "static": true,
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
  "doc": "<p>Represents an RGB color and provides helper functions get\ncolor components in HSL color space.</p>\n",
  "extends": "Ext.Base",
  "href": "Color2.html#Ext-draw-Color",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Color2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Number",
        "doc": "<p>The default factor to compute the lighter or darker color. Defaults to 0.2.</p>\n",
        "href": "Color2.html#Ext-draw-Color-cfg-lightnessFactor",
        "linenr": 15,
        "html_filename": "Color2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The default factor to compute the lighter or darker color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "cfg",
        "name": "lightnessFactor",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Color.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-constructor",
        "linenr": 22,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Red component (0..255)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "red"
          },
          {
            "doc": "<p>Green component (0..255)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "green"
          },
          {
            "doc": "<p>Blue component (0..255)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "blue"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new Color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.draw.Color",
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
        "doc": "<p>Get the blue component of the color, in the range 0..255.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getBlue",
        "linenr": 52,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the blue component of the color, in the range 0..255. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getBlue",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return a new color that is darker than this color.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getDarker",
        "linenr": 117,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.draw.Color</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Darker factor (0..1), default to 0.2</p>\n",
            "type": "Number",
            "optional": false,
            "name": "factor"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return a new color that is darker than this color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getDarker",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the gray value (0 to 255) of the color.</p>\n\n<p>The gray value is calculated using the formula r<em>0.3 + g</em>0.59 + b*0.11.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getGrayscale",
        "linenr": 219,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the gray value (0 to 255) of the color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getGrayscale",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the green component of the color, in the range 0..255.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getGreen",
        "linenr": 44,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the green component of the color, in the range 0..255. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getGreen",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the equivalent HSL components of the color.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getHSL",
        "linenr": 69,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the equivalent HSL components of the color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getHSL",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return a new color that is lighter than this color.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getLighter",
        "linenr": 105,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.draw.Color</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Lighter factor (0..1), default to 0.2</p>\n",
            "type": "Number",
            "optional": false,
            "name": "factor"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return a new color that is lighter than this color. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getLighter",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the RGB values.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getRGB",
        "linenr": 60,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the RGB values. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getRGB",
        "owner": "Ext.draw.Color",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the red component of the color, in the range 0..255.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-getRed",
        "linenr": 36,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the red component of the color, in the range 0..255. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "getRed",
        "owner": "Ext.draw.Color",
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
      },
      {
        "doc": "<p>Return the color in the hex format, i.e. '#rrggbb'.</p>\n",
        "href": "Color2.html#Ext-draw-Color-method-toString",
        "linenr": 127,
        "html_filename": "Color2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Return the color in the hex format, i.e. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "tagname": "method",
        "name": "toString",
        "owner": "Ext.draw.Color",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.draw.Color",
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