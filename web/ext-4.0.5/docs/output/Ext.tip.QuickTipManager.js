Ext.data.JsonP.Ext_tip_QuickTipManager({
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
  "doc": "<p>Provides attractive and customizable tooltips for any element. The QuickTips\nsingleton is used to configure and manage tooltips globally for multiple elements\nin a generic manner.  To create individual tooltips with maximum customizability,\nyou should consider either <a href=\"#/api/Ext.tip.Tip\" rel=\"Ext.tip.Tip\" class=\"docClass\">Ext.tip.Tip</a> or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>.</p>\n\n<p>Quicktips can be configured via tag attributes directly in markup, or by\nregistering quick tips programmatically via the <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a> method.</p>\n\n<p>The singleton's instance of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a> is available via\n<a href=\"#/api/Ext.tip.QuickTipManager-method-getQuickTip\" rel=\"Ext.tip.QuickTipManager-method-getQuickTip\" class=\"docClass\">getQuickTip</a>, and supports all the methods, and all the all the\nconfiguration properties of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a>. These settings will apply to all\ntooltips shown by the singleton.</p>\n\n<p>Below is the summary of the configuration properties which can be used.\nFor detailed descriptions see the config options for the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class</p>\n\n<h2>QuickTips singleton configs (all are optional)</h2>\n\n<ul>\n<li><code>dismissDelay</code></li>\n<li><code>hideDelay</code></li>\n<li><code>maxWidth</code></li>\n<li><code>minWidth</code></li>\n<li><code>showDelay</code></li>\n<li><code>trackMouse</code></li>\n</ul>\n\n\n<h2>Target element configs (optional unless otherwise noted)</h2>\n\n<ul>\n<li><code>autoHide</code></li>\n<li><code>cls</code></li>\n<li><code>dismissDelay</code> (overrides singleton value)</li>\n<li><code>target</code> (required)</li>\n<li><code>text</code> (required)</li>\n<li><code>title</code></li>\n<li><code>width</code></li>\n</ul>\n\n\n<p>Here is an example showing how some of these config options could be used:</p>\n\n<p><p><img src=\"doc-resources/Ext.tip.QuickTipManager/Ext.tip.QuickTipManager.png\" alt=\"Ext.tip.QuickTipManager component\"></p></p>\n\n<h2>Code</h2>\n\n<pre><code>// Init the singleton.  Any tag-based quick tips will start working.\nExt.tip.QuickTipManager.init();\n\n// Apply a set of config properties to the singleton\nExt.apply(Ext.tip.QuickTipManager.getQuickTip(), {\n    maxWidth: 200,\n    minWidth: 100,\n    showDelay: 50      // Show 50ms after entering target\n});\n\n// Create a small panel to add a quick tip to\nExt.create('Ext.container.Container', {\n    id: 'quickTipContainer',\n    width: 200,\n    height: 150,\n    style: {\n        backgroundColor:'#000000'\n    },\n    renderTo: Ext.getBody()\n});\n\n\n// Manually register a quick tip for a specific element\nExt.tip.QuickTipManager.register({\n    target: 'quickTipContainer',\n    title: 'My Tooltip',\n    text: 'This tooltip was added in code',\n    width: 100,\n    dismissDelay: 10000 // Hide after 10 seconds hover\n});\n</code></pre>\n\n<p>To register a quick tip in markup, you simply add one or more of the valid QuickTip attributes prefixed with\nthe <strong>data-</strong> namespace.  The HTML element itself is automatically set as the quick tip target. Here is the summary\nof supported attributes (optional unless otherwise noted):</p>\n\n<ul>\n<li><code>hide</code>: Specifying \"user\" is equivalent to setting autoHide = false.  Any other value will be the same as autoHide = true.</li>\n<li><code>qclass</code>: A CSS class to be applied to the quick tip (equivalent to the 'cls' target element config).</li>\n<li><code>qtip (required)</code>: The quick tip text (equivalent to the 'text' target element config).</li>\n<li><code>qtitle</code>: The quick tip title (equivalent to the 'title' target element config).</li>\n<li><code>qwidth</code>: The quick tip width (equivalent to the 'width' target element config).</li>\n</ul>\n\n\n<p>Here is an example of configuring an HTML element to display a tooltip from markup:</p>\n\n<pre><code>// Add a quick tip to an HTML button\n&lt;input type=\"button\" value=\"OK\" data-qtitle=\"OK Button\" data-qwidth=\"100\"\n     data-qtip=\"This is a quick tip from markup!\"&gt;&lt;/input&gt;\n</code></pre>\n",
  "extends": "Ext.Base",
  "href": "QuickTipManager.html#Ext-tip-QuickTipManager",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "QuickTipManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
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
        "doc": "<p>Destroy the QuickTips instance.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-destroy",
        "linenr": 150,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Destroy the QuickTips instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.tip.QuickTipManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Disable quick tips globally.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-disable",
        "linenr": 187,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Disable quick tips globally. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "disable",
        "owner": "Ext.tip.QuickTipManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enable quick tips globally.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-enable",
        "linenr": 177,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Enable quick tips globally. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "enable",
        "owner": "Ext.tip.QuickTipManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the single <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> instance used to show tips from all registered elements.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-getQuickTip",
        "linenr": 205,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.tip.QuickTip"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the single QuickTip instance used to show tips from all registered elements. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "getQuickTip",
        "owner": "Ext.tip.QuickTipManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initialize the global QuickTips instance and prepare any quick tips.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-init",
        "linenr": 103,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) True to render the QuickTips container immediately to\npreload images. (Defaults to true)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "autoRender"
          },
          {
            "doc": "<p>(optional) config object for the created QuickTip. By\ndefault, the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class is instantiated, but this can\nbe changed by supplying an xtype property or a className property in this object.\nAll other properties on this object are configuration for the created component.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initialize the global QuickTips instance and prepare any quick tips. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "init",
        "owner": "Ext.tip.QuickTipManager",
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
        "doc": "<p>Returns true if quick tips are enabled, else false.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-isEnabled",
        "linenr": 197,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if quick tips are enabled, else false. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "isEnabled",
        "owner": "Ext.tip.QuickTipManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Configures a new quick tip instance and assigns it to a target element.  See\n<a href=\"#/api/Ext.tip.QuickTip-method-register\" rel=\"Ext.tip.QuickTip-method-register\" class=\"docClass\">Ext.tip.QuickTip.register</a> for details.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-register",
        "linenr": 213,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Configures a new quick tip instance and assigns it to a target element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "register",
        "owner": "Ext.tip.QuickTipManager",
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
        "doc": "<p>Alias of <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a>.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-tips",
        "linenr": 230,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Alias of register. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "tips",
        "owner": "Ext.tip.QuickTipManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes any registered quick tip from the target element and destroys it.</p>\n",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-unregister",
        "linenr": 222,
        "html_filename": "QuickTipManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element from which the quick tip is to be removed or ID of the element.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes any registered quick tip from the target element and destroys it. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "tagname": "method",
        "name": "unregister",
        "owner": "Ext.tip.QuickTipManager",
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
  "singleton": true,
  "protected": false,
  "superclasses": [
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.tip.QuickTipManager",
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