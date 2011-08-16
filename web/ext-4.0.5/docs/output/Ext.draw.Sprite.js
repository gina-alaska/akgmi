Ext.data.JsonP.Ext_draw_Sprite({
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
  "doc": "<p>A Sprite is an object rendered in a Drawing surface. There are different options and types of sprites.\nThe configuration of a Sprite is an object with the following properties:</p>\n\n<ul>\n<li><strong>type</strong> - (String) The type of the sprite. Possible options are 'circle', 'path', 'rect', 'text', 'square', 'image'.</li>\n<li><strong>group</strong> - (String/Array) The group that this sprite belongs to, or an array of groups. Only relevant when added to a <a href=\"#/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a>.</li>\n<li><strong>width</strong> - (Number) Used in rectangle sprites, the width of the rectangle.</li>\n<li><strong>height</strong> - (Number) Used in rectangle sprites, the height of the rectangle.</li>\n<li><strong>size</strong> - (Number) Used in square sprites, the dimension of the square.</li>\n<li><strong>radius</strong> - (Number) Used in circle sprites, the radius of the circle.</li>\n<li><strong>x</strong> - (Number) The position along the x-axis.</li>\n<li><strong>y</strong> - (Number) The position along the y-axis.</li>\n<li><strong>path</strong> - (Array) Used in path sprites, the path of the sprite written in SVG-like path syntax.</li>\n<li><strong>opacity</strong> - (Number) The opacity of the sprite.</li>\n<li><strong>fill</strong> - (String) The fill color.</li>\n<li><strong>stroke</strong> - (String) The stroke color.</li>\n<li><strong>stroke-width</strong> - (Number) The width of the stroke.</li>\n<li><strong>font</strong> - (String) Used with text type sprites. The full font description. Uses the same syntax as the CSS <code>font</code> parameter.</li>\n<li><strong>text</strong> - (String) Used with text type sprites. The text itself.</li>\n<li><strong>translate</strong> - (Object) Defines a translation for the Sprite. There's more information on this property below.</li>\n<li><strong>rotate</strong> - (Object) Defines a rotation for the Sprite. There's more information on this property below.</li>\n<li><strong>scale</strong> - (Object) Defines a scaling for the Sprite. There's more information on this property below.</li>\n</ul>\n\n\n<h1>Translation</h1>\n\n<p>For translate, the configuration object contains x and y attributes that indicate where to\ntranslate the object. For example:</p>\n\n<pre><code>sprite.setAttributes({\n  translate: {\n   x: 10,\n   y: 10\n  }\n}, true);\n</code></pre>\n\n<h1>Rotation</h1>\n\n<p>For rotation, the configuration object contains x and y attributes for the center of the rotation (which are optional),\nand a <code>degrees</code> attribute that specifies the rotation in degrees. For example:</p>\n\n<pre><code>sprite.setAttributes({\n  rotate: {\n   degrees: 90\n  }\n}, true);\n</code></pre>\n\n<p>That example will create a 90 degrees rotation using the centroid of the Sprite as center of rotation, whereas:</p>\n\n<pre><code>sprite.setAttributes({\n  rotate: {\n   x: 0,\n   y: 0,\n   degrees: 90\n  }\n}, true);\n</code></pre>\n\n<p>will create a rotation around the <code>(0, 0)</code> axis.</p>\n\n<h1>Scaling</h1>\n\n<p>For scaling, the configuration object contains x and y attributes for the x-axis and y-axis scaling. For example:</p>\n\n<pre><code>sprite.setAttributes({\n  scale: {\n   x: 10,\n   y: 3\n  }\n}, true);\n</code></pre>\n\n<p>You can also specify the center of scaling by adding <code>cx</code> and <code>cy</code> as properties:</p>\n\n<pre><code>sprite.setAttributes({\n  scale: {\n   cx: 0,\n   cy: 0,\n   x: 10,\n   y: 3\n  }\n}, true);\n</code></pre>\n\n<p>That last example will scale a sprite taking as centers of scaling the <code>(0, 0)</code> coordinate.</p>\n\n<h1>Creating and adding a Sprite to a Surface</h1>\n\n<p>Sprites can be created with a reference to a <a href=\"#/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a></p>\n\n<pre><code>var drawComponent = Ext.create('Ext.draw.Component', options here...);\n\nvar sprite = Ext.create('Ext.draw.Sprite', {\n    type: 'circle',\n    fill: '#ff0',\n    surface: drawComponent.surface,\n    radius: 5\n});\n</code></pre>\n\n<p>Sprites can also be added to the surface as a configuration object:</p>\n\n<pre><code>var sprite = drawComponent.surface.add({\n    type: 'circle',\n    fill: '#ff0',\n    radius: 5\n});\n</code></pre>\n\n<p>In order to properly apply properties and render the sprite we have to\n<code>show</code> the sprite setting the option <code>redraw</code> to <code>true</code>:</p>\n\n<pre><code>sprite.show(true);\n</code></pre>\n\n<p>The constructor configuration object of the Sprite can also be used and passed into the <a href=\"#/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a>\nadd method to append a new sprite to the canvas. For example:</p>\n\n<pre><code>drawComponent.surface.add({\n    type: 'circle',\n    fill: '#ffc',\n    radius: 100,\n    x: 100,\n    y: 100\n});\n</code></pre>\n",
  "extends": "Ext.Base",
  "href": "Sprite2.html#Ext-draw-Sprite",
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Animate"
  ],
  "linenr": 1,
  "html_filename": "Sprite2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>True to make the sprite draggable.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-draggable",
        "linenr": 198,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "draggable",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The fill color</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-fill",
        "linenr": 173,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "fill",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Used with text type sprites. The full font description. Uses the same syntax as the CSS font parameter</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-font",
        "linenr": 185,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Used with text type sprites. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "font",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/String[]",
        "doc": "<p>The group that this sprite belongs to, or an array of groups. Only relevant when added to a\n<a href=\"#/api/Ext.draw.Surface\" rel=\"Ext.draw.Surface\" class=\"docClass\">Ext.draw.Surface</a></p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-group",
        "linenr": 193,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The group that this sprite belongs to, or an array of groups. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "group",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Used in rectangle sprites, the height of the rectangle</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-height",
        "linenr": 145,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "height",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
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
        "type": "Number",
        "doc": "<p>The opacity of the sprite</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-opacity",
        "linenr": 169,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "opacity",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Array",
        "doc": "<p>Used in path sprites, the path of the sprite written in SVG-like path syntax</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-path",
        "linenr": 165,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "path",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Used in circle sprites, the radius of the circle</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-radius",
        "linenr": 153,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "radius",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Used in square sprites, the dimension of the square</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-size",
        "linenr": 149,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "size",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>-width The width of the stroke</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-stroke",
        "linenr": 181,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "stroke",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Used with text type sprites. The text itself</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-text",
        "linenr": 189,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Used with text type sprites. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "text",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The type of the sprite. Possible options are 'circle', 'path', 'rect', 'text', 'square', 'image'</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-type",
        "linenr": 137,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The type of the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "type",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Used in rectangle sprites, the width of the rectangle</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-width",
        "linenr": 141,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "width",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The position along the x-axis</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-x",
        "linenr": 157,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "x",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The position along the y-axis</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-cfg-y",
        "linenr": 161,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "cfg",
        "name": "y",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.  Note this method\nis severly limited in VML.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-addCls",
        "linenr": 481,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class to add, or an array of classes</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds one or more CSS classes to the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "addCls",
        "owner": "Ext.draw.Sprite",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.draw.Sprite-method-fireEvent\" rel=\"Ext.draw.Sprite-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an Ext Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "linenr": 207,
        "html_filename": "Animate.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Perform custom animation on this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "animate",
        "owner": "Ext.util.Animate",
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
        "doc": "<p>Removes the sprite and clears all listeners.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-destroy",
        "linenr": 448,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes the sprite and clears all listeners. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.draw.Sprite",
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.draw.Sprite-method-enableBubble\" rel=\"Ext.draw.Sprite-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "doc": "<p>Returns the current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "linenr": 376,
        "html_filename": "Animate.html",
        "alias": null,
        "return": {
          "doc": "<p>Anim if element has active effects, else false</p>\n",
          "type": "Ext.fx.Anim/Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current animation if this object has any effects actively running or queued, else returns false. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves the bounding box of the sprite.\nThis will be returned as an object with x, y, width, and height properties.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-getBBox",
        "linenr": 396,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>bbox</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Retrieves the bounding box of the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "getBBox",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "linenr": 369,
        "html_filename": "Animate.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Animate",
          "tagname": "alias",
          "member": "getActiveAnimation"
        },
        "return": {
          "doc": "<p>Anim if element has active effects, else false</p>\n",
          "type": "Ext.fx.Anim/Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": {
          "doc": null,
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.LoadMask-method-getActiveAnimation\" rel=\"Ext.LoadMask-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Returns the current animation if this object has any effects actively running or queued, else returns false. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
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
        "doc": "<p>Hides the sprite.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-hide",
        "linenr": 409,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Flag to immediatly draw the change.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "redraw"
          }
        ],
        "deprecated": null,
        "shortDoc": "Hides the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "hide",
        "owner": "Ext.draw.Sprite",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.draw.Sprite-method-addManagedListener\" rel=\"Ext.draw.Sprite-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.draw.Sprite-method-removeManagedListener\" rel=\"Ext.draw.Sprite-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.draw.Sprite-method-mon\" rel=\"Ext.draw.Sprite-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.draw.Sprite-method-fireEvent\" rel=\"Ext.draw.Sprite-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Redraws the sprite.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-redraw",
        "linenr": 461,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Redraws the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "redraw",
        "owner": "Ext.draw.Sprite",
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
        "doc": "<p>Removes the sprite.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-remove",
        "linenr": 433,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "remove",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes one or more CSS classes from the element.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-removeCls",
        "linenr": 492,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class to remove, or an array of classes.  Note this method\nis severly limited in VML.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes one or more CSS classes from the element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "removeCls",
        "owner": "Ext.draw.Sprite",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.draw.Sprite-method-mon\" rel=\"Ext.draw.Sprite-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.draw.Sprite-method-suspendEvents\" rel=\"Ext.draw.Sprite-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.draw.Sprite-method-syncFx\" rel=\"Ext.draw.Sprite-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "linenr": 357,
        "html_filename": "Animate.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Change the attributes of the sprite.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-setAttributes",
        "linenr": 299,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>attributes to be changed on the sprite.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "attrs"
          },
          {
            "doc": "<p>Flag to immediatly draw the change.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "redraw"
          }
        ],
        "deprecated": null,
        "shortDoc": "Change the attributes of the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "setAttributes",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Wrapper for setting style properties, also takes single object parameter of multiple styles.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-setStyle",
        "linenr": 470,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The style property to be set, or an object of multiple styles.</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "property"
          },
          {
            "doc": "<p>(optional) The value to apply to the given property, or null if an object was passed.</p>\n",
            "type": "String",
            "optional": true,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Wrapper for setting style properties, also takes single object parameter of multiple styles. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "setStyle",
        "owner": "Ext.draw.Sprite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shows the sprite.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-method-show",
        "linenr": 421,
        "html_filename": "Sprite2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.draw.Sprite"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Flag to immediatly draw the change.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "redraw"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shows the sprite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "method",
        "name": "show",
        "owner": "Ext.draw.Sprite",
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
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "linenr": 335,
        "html_filename": "Animate.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "linenr": 326,
        "html_filename": "Animate.html",
        "alias": null,
        "return": {
          "doc": "<p>The Element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": {
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.",
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.LoadMask-method-stopAnimation\" rel=\"Ext.LoadMask-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.draw.Sprite-method-resumeEvents\" rel=\"Ext.draw.Sprite-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.draw.Sprite-method-resumeEvents\" rel=\"Ext.draw.Sprite-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.draw.Sprite-method-sequenceFx\" rel=\"Ext.draw.Sprite-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "linenr": 345,
        "html_filename": "Animate.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "tagname": "method",
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.draw.Sprite-method-removeListener\" rel=\"Ext.draw.Sprite-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.draw.Sprite-method-addListener\" rel=\"Ext.draw.Sprite-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Ext.dd.DragSource",
        "doc": "<p>If this Sprite is configured <a href=\"#/api/Ext.draw.Sprite-cfg-draggable\" rel=\"Ext.draw.Sprite-cfg-draggable\" class=\"docClass\">draggable</a>, this property will contain\nan instance of <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> which handles dragging the Sprite.</p>\n\n<p>The developer must provide implementations of the abstract methods of <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a>\nin order to supply behaviour for each stage of the drag/drop process. See <a href=\"#/api/Ext.draw.Sprite-cfg-draggable\" rel=\"Ext.draw.Sprite-cfg-draggable\" class=\"docClass\">draggable</a>.</p>\n",
        "href": "Sprite2.html#Ext-draw-Sprite-property-dd",
        "linenr": 279,
        "html_filename": "Sprite2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If this Sprite is configured draggable, this property will contain\nan instance of Ext.dd.DragSource which handles dra...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
        "private": false,
        "tagname": "property",
        "name": "dd",
        "owner": "Ext.draw.Sprite",
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
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [
    "Ext.util.Observable",
    "Ext.util.Animate"
  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Sprite.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.draw.Sprite",
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