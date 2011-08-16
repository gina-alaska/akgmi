Ext.data.JsonP.Ext_form_field_Text({
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
  "doc": "<p>A basic text field.  Can be used as a direct replacement for traditional text inputs,\nor as the base class for more sophisticated input controls (like <a href=\"#/api/Ext.form.field.TextArea\" rel=\"Ext.form.field.TextArea\" class=\"docClass\">Ext.form.field.TextArea</a>\nand <a href=\"#/api/Ext.form.field.ComboBox\" rel=\"Ext.form.field.ComboBox\" class=\"docClass\">Ext.form.field.ComboBox</a>). Has support for empty-field placeholder values (see <a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a>).</p>\n\n<h1>Validation</h1>\n\n<p>The Text field has a useful set of validations built in:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.form.field.Text-cfg-allowBlank\" rel=\"Ext.form.field.Text-cfg-allowBlank\" class=\"docClass\">allowBlank</a> for making the field required</li>\n<li><a href=\"#/api/Ext.form.field.Text-cfg-minLength\" rel=\"Ext.form.field.Text-cfg-minLength\" class=\"docClass\">minLength</a> for requiring a minimum value length</li>\n<li><a href=\"#/api/Ext.form.field.Text-cfg-maxLength\" rel=\"Ext.form.field.Text-cfg-maxLength\" class=\"docClass\">maxLength</a> for setting a maximum value length (with <a href=\"#/api/Ext.form.field.Text-cfg-enforceMaxLength\" rel=\"Ext.form.field.Text-cfg-enforceMaxLength\" class=\"docClass\">enforceMaxLength</a> to add it\nas the <code>maxlength</code> attribute on the input element)</li>\n<li><a href=\"#/api/Ext.form.field.Text-cfg-regex\" rel=\"Ext.form.field.Text-cfg-regex\" class=\"docClass\">regex</a> to specify a custom regular expression for validation</li>\n</ul>\n\n\n<p>In addition, custom validations may be added:</p>\n\n<ul>\n<li><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a> specifies a virtual type implementation from <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">Ext.form.field.VTypes</a> which can contain\ncustom validation logic</li>\n<li><a href=\"#/api/Ext.form.field.Text-cfg-validator\" rel=\"Ext.form.field.Text-cfg-validator\" class=\"docClass\">validator</a> allows a custom arbitrary function to be called during validation</li>\n</ul>\n\n\n<p>The details around how and when each of these validation options get used are described in the\ndocumentation for <a href=\"#/api/Ext.form.field.Text-method-getErrors\" rel=\"Ext.form.field.Text-method-getErrors\" class=\"docClass\">getErrors</a>.</p>\n\n<p>By default, the field value is checked for validity immediately while the user is typing in the\nfield. This can be controlled with the <a href=\"#/api/Ext.form.field.Text-cfg-validateOnChange\" rel=\"Ext.form.field.Text-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>, <a href=\"#/api/Ext.form.field.Text-cfg-checkChangeEvents\" rel=\"Ext.form.field.Text-cfg-checkChangeEvents\" class=\"docClass\">checkChangeEvents</a>, and\n<a href=\"#/api/Ext.form.field.Text-cfg-checkChangeBuffer\" rel=\"Ext.form.field.Text-cfg-checkChangeBuffer\" class=\"docClass\">checkChangeBuffer</a> configurations. Also see the details on Form Validation in the\n<a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a> class documentation.</p>\n\n<h1>Masking and Character Stripping</h1>\n\n<p>Text fields can be configured with custom regular expressions to be applied to entered values before\nvalidation: see <a href=\"#/api/Ext.form.field.Text-cfg-maskRe\" rel=\"Ext.form.field.Text-cfg-maskRe\" class=\"docClass\">maskRe</a> and <a href=\"#/api/Ext.form.field.Text-cfg-stripCharsRe\" rel=\"Ext.form.field.Text-cfg-stripCharsRe\" class=\"docClass\">stripCharsRe</a> for details.\n<p><img src=\"doc-resources/Ext.form.Text/Ext.form.Text.png\" alt=\"Ext.form.Text component\"></p></p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title: 'Contact Info',\n    width: 300,\n    bodyPadding: 10,\n    renderTo: Ext.getBody(),\n    items: [{\n        xtype: 'textfield',\n        name: 'name',\n        fieldLabel: 'Name',\n        allowBlank: false  // requires a non-empty value\n    }, {\n        xtype: 'textfield',\n        name: 'email',\n        fieldLabel: 'Email Address',\n        vtype: 'email'  // requires value to be a valid email address format\n    }]\n});\n</code></pre>\n",
  "extends": "Ext.form.field.Base",
  "href": "Text.html#Ext-form-field-Text",
  "allMixins": [
    "Ext.form.Labelable",
    "Ext.form.field.Field",
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "linenr": 1,
  "html_filename": "Text.html",
  "subclasses": [
    "Ext.form.field.Trigger",
    "Ext.form.field.TextArea",
    "Ext.form.field.File"
  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.field.Text-method-setActiveError\" rel=\"Ext.form.field.Text-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.field.Text-method-unsetActiveError\" rel=\"Ext.form.field.Text-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeError",
        "linenr": 216,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If specified, then the component will be displayed with this value as its active error when\nfirst rendered. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "activeError",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.XTemplate",
        "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.field.Text-method-setActiveErrors\" rel=\"Ext.form.field.Text-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl",
        "linenr": 51,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "activeErrorsTpl",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Specify <tt>false</tt> to validate that the value's length is > 0 (defaults to\n<tt>true</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-allowBlank",
        "linenr": 126,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "allowBlank",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.form.field.Text-cfg-renderTpl\" rel=\"Ext.form.field.Text-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "linenr": 127,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.field.Text-cfg-msgTarget\" rel=\"Ext.form.field.Text-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-autoFitErrors",
        "linenr": 194,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Whether to adjust the component's body area to make room for 'side' or 'under'\nerror messages. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoFitErrors",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean/String/HTMLElement/Ext.Element",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.form.field.Text-cfg-renderTo\" rel=\"Ext.form.field.Text-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.form.field.Text-event-show\" rel=\"Ext.form.field.Text-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "linenr": 577,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n",
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "linenr": 176,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoScroll",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.form.field.Text-cfg-autoRender\" rel=\"Ext.form.field.Text-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "linenr": 570,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to automatically show the component upon creation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-baseBodyCls",
        "linenr": 97,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The CSS class to be applied to the body content element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "baseBodyCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
        "linenr": 351,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The base CSS class to apply to this components's element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "baseCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The error text to display if the <b><tt><a href=\"#/api/Ext.form.field.Text-cfg-allowBlank\" rel=\"Ext.form.field.Text-cfg-allowBlank\" class=\"docClass\">allowBlank</a></tt></b> validation\nfails (defaults to <tt>'This field is required'</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-blankText",
        "linenr": 166,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "blankText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number/String",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "linenr": 438,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies the border for this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Defines a timeout in milliseconds for buffering <a href=\"#/api/Ext.form.field.Text-cfg-checkChangeEvents\" rel=\"Ext.form.field.Text-cfg-checkChangeEvents\" class=\"docClass\">checkChangeEvents</a> that fire in rapid succession.\nDefaults to 50 milliseconds.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-checkChangeBuffer",
        "linenr": 185,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Defines a timeout in milliseconds for buffering checkChangeEvents that fire in rapid succession. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "checkChangeBuffer",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String[]",
        "doc": "<p>A list of event names that will be listened for on the field's <a href=\"#/api/Ext.form.field.Text-property-inputEl\" rel=\"Ext.form.field.Text-property-inputEl\" class=\"docClass\">input element</a>, which\nwill cause the field's value to be checked for changes. If a change is detected, the\n<a href=\"#/api/Ext.form.field.Text-event-change\" rel=\"Ext.form.field.Text-event-change\" class=\"docClass\">change event</a> will be fired, followed by validation if the <a href=\"#/api/Ext.form.field.Text-cfg-validateOnChange\" rel=\"Ext.form.field.Text-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>\noption is enabled.</p>\n\n\n<p>Defaults to <tt>['change', 'propertychange']</tt> in Internet Explorer, and <tt>['change', 'input',\n'textInput', 'keyup', 'dragdrop']</tt> in other browsers. This catches all the ways that field values\ncan be changed in most supported browsers; the only known exceptions at the time of writing are:</p>\n\n\n<ul>\n<li>Safari 3.2 and older: cut/paste in textareas via the context menu, and dragging text into textareas</li>\n<li>Opera 10 and 11: dragging text into text fields and textareas, and cut via the context menu in text\nfields and textareas</li>\n<li>Opera 9: Same as Opera 10 and 11, plus paste from context menu in text fields and textareas</li>\n</ul>\n\n\n<p>If you need to guarantee on-the-fly change notifications including these edge cases, you can call the\n<a href=\"#/api/Ext.form.field.Text-method-checkChange\" rel=\"Ext.form.field.Text-method-checkChange\" class=\"docClass\">checkChange</a> method on a repeating interval, e.g. using <a href=\"#/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a>, or if the field is\nwithin a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>, you can use the FormPanel's <a href=\"#/api/Ext.form.Panel-cfg-pollForChanges\" rel=\"Ext.form.Panel-cfg-pollForChanges\" class=\"docClass\">Ext.form.Panel.pollForChanges</a>\nconfiguration to set up such a task automatically.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-cfg-checkChangeEvents",
        "linenr": 161,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A list of event names that will be listened for on the field's input element, which\nwill cause the field's value to b...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "checkChangeEvents",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object[]",
        "doc": "<p>An array describing the child elements of the Component. Each member of the array\nis an object with these properties:</p>\n\n<pre><code>* `name` - The property name on the Component for the child element.\n* `itemId` - The id to combine with the Component's id that is the id of the child element.\n* `id` - The id of the child element.\n</code></pre>\n\n<p>If the array member is a string, it is equivalent to <code>{ name: m, itemId: m }</code>.</p>\n\n<p>For example, a Component which renders two nested div's:</p>\n\n<p>   renderTpl: '&lt;div id=\"{id}-foo\">&lt;div id=\"{id}-bar\">{description}&gt;/div&lt;&gt;/div&lt;',</p>\n\n<p>   childEls: [ 'foo', 'bar' ]</p>\n\n<p>After rendering, the Component will have <code>foo</code> and <code>bar</code> properties that refer to the\nchild elements. The key is that the rendered elements have id's equal to this component's\nid and the given name (separated by a '-'). For example, \"mycmp-foo\" and \"mycmp-bar\"\nare the element id's given a component id of \"mycmp\".</p>\n\n<p>A more flexible, but somewhat slower, approach is <a href=\"#/api/Ext.form.field.Text-cfg-renderSelectors\" rel=\"Ext.form.field.Text-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-childEls",
        "linenr": 203,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An array describing the child elements of the Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "childEls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-clearCls",
        "linenr": 110,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "clearCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "linenr": 367,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "linenr": 361,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.form.field.Text-method-setSize\" rel=\"Ext.form.field.Text-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "linenr": 269,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.form.field.Text-cfg-html\" rel=\"Ext.form.field.Text-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.form.field.Text-event-render\" rel=\"Ext.form.field.Text-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "linenr": 500,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.form.field.Text-cfg-tpl\" rel=\"Ext.form.field.Text-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "linenr": 287,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to use when the field value <a href=\"#/api/Ext.form.field.Text-method-isDirty\" rel=\"Ext.form.field.Text-method-isDirty\" class=\"docClass\">is dirty</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-dirtyCls",
        "linenr": 156,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "dirtyCls",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Specify <tt>true</tt> to disable input keystroke filtering (defaults\nto <tt>false</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-disableKeyFilter",
        "linenr": 121,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "disableKeyFilter",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to disable the field (defaults to false). Disabled Fields will not be\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a>.</p></p>\n",
        "href": "Field.html#Ext-form-field-Field-cfg-disabled",
        "linenr": 43,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to disable the field (defaults to false). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "cfg",
        "name": "disabled",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "linenr": 380,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean/Object",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n",
        "href": "Component2.html#Ext-Component-cfg-draggable",
        "linenr": 241,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "draggable",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to apply to an empty field to style the <b><tt><a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a></tt></b>\n(defaults to <tt>'x-form-empty-field'</tt>).  This class is automatically added and removed as needed\ndepending on the current field value.</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-emptyCls",
        "linenr": 213,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The CSS class to apply to an empty field to style the emptyText\n(defaults to 'x-form-empty-field'). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "emptyCls",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default text to place into an empty field (defaults to <tt>undefined</tt>).</p>\n\n\n<p>Note that normally this value will be submitted to the server if this field is enabled; to prevent this\nyou can set the <a href=\"#/api/Ext.form.action.Action-cfg-submitEmptyText\" rel=\"Ext.form.action.Action-cfg-submitEmptyText\" class=\"docClass\">submitEmptyText</a> option of\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">Ext.form.Basic.submit</a> to <tt>false</tt>.</p>\n\n\n<p>Also note that if you use <tt><a href=\"#/api/Ext.form.field.Text-cfg-inputType\" rel=\"Ext.form.field.Text-cfg-inputType\" class=\"docClass\">inputType</a>:'file'</tt>, <a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a> is not\nsupported and should be avoided.</p>\n\n",
        "href": "Text.html#Ext-form-field-Text-cfg-emptyText",
        "linenr": 203,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The default text to place into an empty field (defaults to undefined). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "emptyText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><tt>true</tt> to enable the proxying of key events for the HTML input field (defaults to <tt>false</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-enableKeyEvents",
        "linenr": 222,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "enableKeyEvents",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to set the maxLength property on the underlying input field. Defaults to <tt>false</tt></p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-enforceMaxLength",
        "linenr": 145,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to set the maxLength property on the underlying input field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "enforceMaxLength",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-errorMsgCls",
        "linenr": 91,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The CSS class to be applied to the error message element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "errorMsgCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.field.Text-cfg-fieldBodyCls\" rel=\"Ext.form.field.Text-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to empty.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldBodyCls",
        "linenr": 103,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An extra CSS class to be applied to the body content element in addition to fieldBodyCls. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "fieldBodyCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default CSS class for the field input (defaults to 'x-form-field')</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldCls",
        "linenr": 140,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "fieldCls",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.field.Text-cfg-labelSeparator\" rel=\"Ext.form.field.Text-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.field.Text-cfg-labelAlign\" rel=\"Ext.form.field.Text-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.field.Text-cfg-labelWidth\" rel=\"Ext.form.field.Text-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.field.Text-cfg-labelPad\" rel=\"Ext.form.field.Text-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldLabel",
        "linenr": 123,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The label for the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "fieldLabel",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Optional CSS style(s) to be applied to the <a href=\"#/api/Ext.form.field.Text-property-inputEl\" rel=\"Ext.form.field.Text-property-inputEl\" class=\"docClass\">field input element</a>.\nShould be a valid argument to <a href=\"#/api/Ext.Element-method-applyStyles\" rel=\"Ext.Element-method-applyStyles\" class=\"docClass\">Ext.Element.applyStyles</a>. Defaults to undefined. See also the\n<a href=\"#/api/Ext.form.field.Text-method-setFieldStyle\" rel=\"Ext.form.field.Text-method-setFieldStyle\" class=\"docClass\">setFieldStyle</a> method for changing the style after initialization.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldStyle",
        "linenr": 145,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional CSS style(s) to be applied to the field input element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "fieldStyle",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.XTemplate",
        "doc": "<p>The content of the field body is defined by this config option.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldSubTpl",
        "linenr": 95,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "fieldSubTpl",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.form.field.Text-method-toFront\" rel=\"Ext.form.field.Text-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.form.field.Text-property-ownerCt\" rel=\"Ext.form.field.Text-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.form.field.Text-event-show\" rel=\"Ext.form.field.Text-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.form.field.Text-property-floatParent\" rel=\"Ext.form.field.Text-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.form.field.Text-property-floatParent\" rel=\"Ext.form.field.Text-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n",
        "href": "Component2.html#Ext-Component-cfg-floating",
        "linenr": 182,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "floating",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to use when the field receives focus (defaults to 'x-form-focus')</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-focusCls",
        "linenr": 151,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "focusCls",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.Component-method-focus\" rel=\"Ext.Component-method-focus\" class=\"docClass\">focused</a> when\nit is <a href=\"#/api/Ext.form.field.Text-method-toFront\" rel=\"Ext.form.field.Text-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "linenr": 8,
        "html_filename": "Floating.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies whether the floated component should be automatically focused when\nit is brought to the front. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "cfg",
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defaults to 'x-form-item'.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-formItemCls",
        "linenr": 69,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "formItemCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.form.field.Text-property-frameSize\" rel=\"Ext.form.field.Text-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
        "linenr": 246,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "frame",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><tt>true</tt> if this field should automatically grow and shrink to its content\n(defaults to <tt>false</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-grow",
        "linenr": 86,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "grow",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A string that will be appended to the field's current value for the purposes of calculating the target\nfield size. Only used when the <a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">grow</a> config is <tt>true</tt>. Defaults to a single capital \"W\"\n(the widest character in common fonts) to leave enough space for the next typed character and avoid the\nfield value shifting before the width is adjusted.</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-growAppend",
        "linenr": 103,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A string that will be appended to the field's current value for the purposes of calculating the target\nfield size. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "growAppend",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The maximum width to allow when <code><b><a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">grow</a></b> = true</code> (defaults\nto <tt>800</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-growMax",
        "linenr": 97,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "growMax",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The minimum width to allow when <code><b><a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">grow</a></b> = true</code> (defaults\nto <tt>30</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-growMin",
        "linenr": 91,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "growMin",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The height of this component in pixels.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "linenr": 433,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Defaults to false.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "linenr": 456,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "hidden",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.Text-cfg-labelSeparator\" rel=\"Ext.form.field.Text-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.field.Text-cfg-hideLabel\" rel=\"Ext.form.field.Text-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideEmptyLabel",
        "linenr": 176,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "When set to true, the label element (fieldLabel and labelSeparator) will be\nautomatically hidden if the fieldLabel is...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "hideEmptyLabel",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.Text-cfg-labelSeparator\" rel=\"Ext.form.field.Text-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.field.Text-cfg-hideEmptyLabel\" rel=\"Ext.form.field.Text-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideLabel",
        "linenr": 168,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Set to true to completely hide the label element (fieldLabel and labelSeparator). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "hideLabel",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "linenr": 487,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Object",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.form.field.Text-event-render\" rel=\"Ext.form.field.Text-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.form.field.Text-cfg-contentEl\" rel=\"Ext.form.field.Text-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "linenr": 518,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.form.field.Text-method-getId\" rel=\"Ext.form.field.Text-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.form.field.Text-cfg-itemId\" rel=\"Ext.form.field.Text-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.form.field.Text-cfg-itemId\" rel=\"Ext.form.field.Text-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.form.field.Text-property-ownerCt\" rel=\"Ext.form.field.Text-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "linenr": 47,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The id that will be given to the generated input DOM element. Defaults to an automatically generated id.\nIf you configure this manually, you must make sure it is unique in the document.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-inputId",
        "linenr": 210,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The id that will be given to the generated input DOM element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "inputId",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The type attribute for input fields -- e.g. radio, text, password, file (defaults to <tt>'text'</tt>).\nThe extended types supported by HTML5 inputs (url, email, etc.) may also be used, though using them\nwill cause older browsers to fall back to 'text'.</p>\n\n\n<p>The type 'password' must be used to render that field type currently -- there is no separate Ext\ncomponent for that. You can use <a href=\"#/api/Ext.form.field.File\" rel=\"Ext.form.field.File\" class=\"docClass\">Ext.form.field.File</a> which creates a custom-rendered file upload\nfield, but if you want a plain unstyled file input you can use a BaseField with inputType:'file'.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-cfg-inputType",
        "linenr": 118,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The type attribute for input fields -- e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "inputType",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-invalidCls",
        "linenr": 117,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "invalidCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The error text to use when marking a field invalid and no message is provided\n(defaults to 'The value in this field is invalid')</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-invalidText",
        "linenr": 134,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The error text to use when marking a field invalid and no message is provided\n(defaults to 'The value in this field i...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "invalidText",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.form.field.Text-cfg-id\" rel=\"Ext.form.field.Text-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.form.field.Text-cfg-id\" rel=\"Ext.form.field.Text-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.form.field.Text-cfg-id\" rel=\"Ext.form.field.Text-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.form.field.Text-cfg-renderTo\" rel=\"Ext.form.field.Text-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.form.field.Text-property-ownerCt\" rel=\"Ext.form.field.Text-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.form.field.Text-cfg-id\" rel=\"Ext.form.field.Text-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.form.field.Text-property-ownerCt\" rel=\"Ext.form.field.Text-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "linenr": 63,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.field.Text-cfg-labelWidth\" rel=\"Ext.form.field.Text-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.field.Text-cfg-labelWidth\" rel=\"Ext.form.field.Text-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelAlign",
        "linenr": 131,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Controls the position and alignment of the fieldLabel. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelAlign",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.\nThis (single) CSS class is used to formulate the renderSelector and drives the field\nlayout where it is concatenated with a hyphen ('-') and <a href=\"#/api/Ext.form.field.Text-cfg-labelAlign\" rel=\"Ext.form.field.Text-cfg-labelAlign\" class=\"docClass\">labelAlign</a>. To add\nadditional classes, use <a href=\"#/api/Ext.form.field.Text-cfg-labelClsExtra\" rel=\"Ext.form.field.Text-cfg-labelClsExtra\" class=\"docClass\">labelClsExtra</a>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelCls",
        "linenr": 76,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The CSS class to be applied to the label element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelCls",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>An optional string of one or more additional CSS classes to add to the label element.\nDefaults to empty.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelClsExtra",
        "linenr": 85,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An optional string of one or more additional CSS classes to add to the label element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelClsExtra",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelPad",
        "linenr": 151,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The amount of space in pixels between the fieldLabel and the input field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelPad",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelSeparator",
        "linenr": 157,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelSeparator",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>\n\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelStyle",
        "linenr": 163,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A CSS style specification string to apply directly to this field's label. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelStyle",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The width of the <a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.field.Text-cfg-labelAlign\" rel=\"Ext.form.field.Text-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelWidth",
        "linenr": 144,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The width of the fieldLabel in pixels. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelWidth",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/String[]/Ext.XTemplate",
        "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.field.Text-method-getSubTplMarkup\" rel=\"Ext.form.field.Text-method-getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelableRenderTpl",
        "linenr": 29,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The rendering template for the field decorations. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "labelableRenderTpl",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
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
        "type": "Ext.ComponentLoader/Object",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "linenr": 561,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n",
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "linenr": 263,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number/String",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "linenr": 450,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies the margin for this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "RegExp",
        "doc": "<p>An input mask regular expression that will be used to filter keystrokes that do\nnot match (defaults to <tt>undefined</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-maskRe",
        "linenr": 116,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "maskRe",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "linenr": 550,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Maximum input field length allowed by validation (defaults to Number.MAX_VALUE).\nThis behavior is intended to provide instant feedback to the user by improving usability to allow pasting\nand editing or overtyping and back tracking. To restrict the maximum number of characters that can be\nentered into the field use the <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-enforceMaxLength\" rel=\"Ext.form.field.Text-cfg-enforceMaxLength\" class=\"docClass\">enforceMaxLength</a></b></tt> option.</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-maxLength",
        "linenr": 137,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Maximum input field length allowed by validation (defaults to Number.MAX_VALUE). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "maxLength",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Error text to display if the <b><tt><a href=\"#/api/Ext.form.field.Text-cfg-maxLength\" rel=\"Ext.form.field.Text-cfg-maxLength\" class=\"docClass\">maximum length</a></tt></b>\nvalidation fails (defaults to <tt>'The maximum length for this field is {maxLength}'</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-maxLengthText",
        "linenr": 155,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Error text to display if the maximum length\nvalidation fails (defaults to 'The maximum length for this field is {maxL...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "maxLengthText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "linenr": 555,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "linenr": 540,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Minimum input field length required (defaults to <tt>0</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-minLength",
        "linenr": 132,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "minLength",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Error text to display if the <b><tt><a href=\"#/api/Ext.form.field.Text-cfg-minLength\" rel=\"Ext.form.field.Text-cfg-minLength\" class=\"docClass\">minimum length</a></tt></b>\nvalidation fails (defaults to <tt>'The minimum length for this field is {minLength}'</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-minLengthText",
        "linenr": 149,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Error text to display if the minimum length\nvalidation fails (defaults to 'The minimum length for this field is {minL...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "minLengthText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "linenr": 545,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The location where the error message text should display.\nMust be one of the following values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.\n<div class=\"subdesc\"><b><a href=\"#/api/Ext.tip.QuickTipManager-method-init\" rel=\"Ext.tip.QuickTipManager-method-init\" class=\"docClass\">Ext.tip.QuickTipManager.init</a> must have been called for this setting to work.</b></div></li>\n<li><code>title</code> Display the message in a default browser title attribute popup.</li>\n<li><code>under</code> Add a block div beneath the field containing the error message.</li>\n<li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>\n<li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>\n<li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>\n</ul></div>\n\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-msgTarget",
        "linenr": 201,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The location where the error message text should display. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "msgTarget",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the field (defaults to undefined). This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>. If no name is\nconfigured, it falls back to the <a href=\"#/api/Ext.form.field.Text-cfg-inputId\" rel=\"Ext.form.field.Text-cfg-inputId\" class=\"docClass\">inputId</a>. To prevent the field from being included in the\nform submit, set <a href=\"#/api/Ext.form.field.Text-cfg-submitValue\" rel=\"Ext.form.field.Text-cfg-submitValue\" class=\"docClass\">submitValue</a> to <tt>false</tt>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-name",
        "linenr": 111,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the field (defaults to undefined). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "name",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "linenr": 373,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number/String",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "linenr": 444,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies the padding for this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object/Object[]",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "linenr": 590,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.field.Text-method-setActiveError\" rel=\"Ext.form.field.Text-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-cfg-preventMark",
        "linenr": 187,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "true to disable displaying any error message set on this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "cfg",
        "name": "preventMark",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><tt>true</tt> to mark the field as readOnly in HTML\n(defaults to <tt>false</tt>).</p>\n\n<br><p><b>Note</b>: this only sets the element's readOnly DOM attribute.\n\n\n<p>Setting <code>readOnly=true</code>, for example, will not disable triggering a\nComboBox or Date; it gives you the option of forcing the user to choose\nvia the trigger without typing in the text box. To hide the trigger use\n<code><a href=\"#/api/Ext.form.field.Trigger-cfg-hideTrigger\" rel=\"Ext.form.field.Trigger-cfg-hideTrigger\" class=\"docClass\">hideTrigger</a></code>.</p></p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-readOnly",
        "linenr": 194,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "true to mark the field as readOnly in HTML\n(defaults to false). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "readOnly",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The CSS class applied to the component's main element when it is <a href=\"#/api/Ext.form.field.Text-cfg-readOnly\" rel=\"Ext.form.field.Text-cfg-readOnly\" class=\"docClass\">readOnly</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-readOnlyCls",
        "linenr": 205,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "readOnlyCls",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "RegExp",
        "doc": "<p>A JavaScript RegExp object to be tested against the field value during validation\n(defaults to <tt>undefined</tt>). If the test fails, the field will be marked invalid using\n<b><tt><a href=\"#/api/Ext.form.field.Text-cfg-regexText\" rel=\"Ext.form.field.Text-cfg-regexText\" class=\"docClass\">regexText</a></tt></b>.</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-regex",
        "linenr": 191,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A JavaScript RegExp object to be tested against the field value during validation\n(defaults to undefined). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "regex",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The error text to display if <b><tt><a href=\"#/api/Ext.form.field.Text-cfg-regex\" rel=\"Ext.form.field.Text-cfg-regex\" class=\"docClass\">regex</a></tt></b> is used and the\ntest fails during validation (defaults to <tt>''</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-regexText",
        "linenr": 197,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "regexText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.form.field.Text-cfg-renderTpl\" rel=\"Ext.form.field.Text-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n\n<p>For a faster, but less flexible, alternative that achieves the same end result (properties for child elements on the\nComponent after render), see <a href=\"#/api/Ext.form.field.Text-cfg-childEls\" rel=\"Ext.form.field.Text-cfg-childEls\" class=\"docClass\">childEls</a> and <a href=\"#/api/Ext.form.field.Text-method-addChildEls\" rel=\"Ext.form.field.Text-method-addChildEls\" class=\"docClass\">addChildEls</a>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "linenr": 176,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/HTMLElement/Ext.Element",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.Text-event-render\" rel=\"Ext.form.field.Text-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "linenr": 231,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.XTemplate/String/String[]",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.form.field.Text-cfg-renderSelectors\" rel=\"Ext.form.field.Text-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "linenr": 161,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean/Object",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n",
        "href": "Component2.html#Ext-Component-cfg-resizable",
        "linenr": 161,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "resizable",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n",
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "linenr": 170,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "linenr": 74,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "cfg",
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p><tt>true</tt> to automatically select any existing field text when the field\nreceives input focus (defaults to <tt>false</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-selectOnFocus",
        "linenr": 161,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "selectOnFocus",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Boolean",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to true to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the shadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to false to disable the\nshadow. (Defaults to 'sides'.)</p>\n",
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "linenr": 15,
        "html_filename": "Floating.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "cfg",
        "name": "shadow",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>An initial value for the 'size' attribute on the text input element. This is only\nused if the field has no configured <a href=\"#/api/Ext.form.field.Text-cfg-width\" rel=\"Ext.form.field.Text-cfg-width\" class=\"docClass\">width</a> and is not given a width by its container's layout.\nDefaults to <tt>20</tt>.</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-size",
        "linenr": 79,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An initial value for the 'size' attribute on the text input element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "size",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String[]",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.Text-cfg-stateful\" rel=\"Ext.form.field.Text-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "linenr": 64,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "cfg",
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.form.field.Text-cfg-stateful\" rel=\"Ext.form.field.Text-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "linenr": 58,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "cfg",
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.form.field.Text-cfg-stateId\" rel=\"Ext.form.field.Text-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.form.field.Text-cfg-stateEvents\" rel=\"Ext.form.field.Text-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.form.field.Text-method-getState\" rel=\"Ext.form.field.Text-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.form.field.Text-cfg-stateId\" rel=\"Ext.form.field.Text-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.form.field.Text-cfg-stateId\" rel=\"Ext.form.field.Text-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.form.field.Text-method-applyState\" rel=\"Ext.form.field.Text-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.form.field.Text-method-applyState\" rel=\"Ext.form.field.Text-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.form.field.Text-event-beforestaterestore\" rel=\"Ext.form.field.Text-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.form.field.Text-event-staterestore\" rel=\"Ext.form.field.Text-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.form.field.Text-event-beforestatesave\" rel=\"Ext.form.field.Text-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.form.field.Text-event-statesave\" rel=\"Ext.form.field.Text-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "linenr": 18,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "cfg",
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "type": "RegExp",
        "doc": "<p>A JavaScript RegExp object used to strip unwanted content from the value\nbefore validation (defaults to <tt>undefined</tt>).</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-stripCharsRe",
        "linenr": 74,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "stripCharsRe",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.Element-method-applyStyles\" rel=\"Ext.Element-method-applyStyles\" class=\"docClass\">Ext.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "linenr": 399,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "linenr": 533,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "linenr": 526,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Setting this to <tt>false</tt> will prevent the field from being\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a> even when it is not disabled. Defaults to <tt>true</tt>.</p>\n",
        "href": "Field.html#Ext-form-field-Field-cfg-submitValue",
        "linenr": 49,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Setting this to false will prevent the field from being\nsubmitted even when it is not disabled. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "cfg",
        "name": "submitValue",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The tabIndex for this field. Note this only applies to fields that are rendered,\nnot those which are built via applyTo (defaults to undefined).</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-tabIndex",
        "linenr": 129,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The tabIndex for this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "tabIndex",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.form.field.Text-method-toFront\" rel=\"Ext.form.field.Text-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.form.field.Text-event-show\" rel=\"Ext.form.field.Text-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n",
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "linenr": 206,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "cfg",
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.XTemplate/Ext.Template/String/String[]",
        "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.form.field.Text-cfg-data\" rel=\"Ext.form.field.Text-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.form.field.Text-cfg-tplWriteMode\" rel=\"Ext.form.field.Text-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
        "linenr": 279,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "tpl",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "linenr": 344,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/String[]",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "linenr": 386,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A set style for a component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Whether the field should validate when it loses focus (defaults to <tt>true</tt>). This will cause fields\nto be validated as the user steps through the fields in the form regardless of whether they are making\nchanges to those fields along the way. See also <a href=\"#/api/Ext.form.field.Text-cfg-validateOnChange\" rel=\"Ext.form.field.Text-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-cfg-validateOnBlur",
        "linenr": 216,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Whether the field should validate when it loses focus (defaults to true). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "cfg",
        "name": "validateOnBlur",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to <tt>true</tt>. If the validation results in a change in the field's validity, a\n<a href=\"#/api/Ext.form.field.Text-event-validitychange\" rel=\"Ext.form.field.Text-event-validitychange\" class=\"docClass\">validitychange</a> event will be fired. This allows the field to show feedback about the\nvalidity of its contents immediately as the user is typing.</p>\n\n\n<p>When set to <tt>false</tt>, feedback will not be immediate. However the form will still be validated\nbefore submitting if the <tt>clientValidation</tt> option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is\nenabled, or if the field or form are validated manually.</p>\n\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a>for controlling how changes to the field's value are detected.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-cfg-validateOnChange",
        "linenr": 55,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Specifies whether this field should be validated immediately whenever a change in its value is detected. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "cfg",
        "name": "validateOnChange",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>A custom validation function to be called during field validation (<a href=\"#/api/Ext.form.field.Text-method-getErrors\" rel=\"Ext.form.field.Text-method-getErrors\" class=\"docClass\">getErrors</a>)\n(defaults to <tt>undefined</tt>). If specified, this function will be called first, allowing the\ndeveloper to override the default validation process.</p>\n\n\n<br><p>This function will be passed the following Parameters:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>value</code>: <i>Mixed</i>\n<div class=\"sub-desc\">The current field value</div></li>\n</ul></div>\n\n\n<br><p>This function is to Return:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>true</code>: <i>Boolean</i>\n<div class=\"sub-desc\"><code>true</code> if the value is valid</div></li>\n<li><code>msg</code>: <i>String</i>\n<div class=\"sub-desc\">An error message if the value is invalid</div></li>\n</ul></div>\n\n",
        "href": "Text.html#Ext-form-field-Text-cfg-validator",
        "linenr": 172,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A custom validation function to be called during field validation (getErrors)\n(defaults to undefined). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "validator",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A value to initialize this field with (defaults to undefined).</p>\n",
        "href": "Field.html#Ext-form-field-Field-cfg-value",
        "linenr": 33,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "cfg",
        "name": "value",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A validation type name as defined in <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">Ext.form.field.VTypes</a> (defaults to <tt>undefined</tt>)</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-vtype",
        "linenr": 112,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "vtype",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A custom error message to display in place of the default message provided\nfor the <b><code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code></b> currently set for this field (defaults to <tt>undefined</tt>).\n<b>Note</b>: only applies if <b><code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code></b> is set, else ignored.</p>\n",
        "href": "Text.html#Ext-form-field-Text-cfg-vtypeText",
        "linenr": 68,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A custom error message to display in place of the default message provided\nfor the vtype currently set for this field...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "cfg",
        "name": "vtypeText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The width of this component in pixels.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "linenr": 428,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The <code>xtype</code> configuration option can be used to optimize\nComponent creation and rendering. It serves as a shortcut to the full componet\nname. For example, the component <code>Ext.button.Button</code> has an xtype of <code>button</code>.</p>\n\n<p>You can define your own xtype on a custom <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a> by\nspecifying the <a href=\"#/api/Ext.Class-cfg-alias\" rel=\"Ext.Class-cfg-alias\" class=\"docClass\">alias</a> config option with a prefix of\n<code>widget</code>. For example:</p>\n\n<pre><code>Ext.define({\n    extend: 'Ext.button.Button',\n    alias: 'widget.pressmebutton',\n    text: 'Press Me'\n})\n</code></pre>\n\n<p>Any Component can be created implicitly\nas an object config with an xtype specified, allowing it to be declared and\npassed into the rendering pipeline without actually being instantiated as\nan object. Not only is rendering deferred, but the actual creation of the\nobject itself is also deferred, saving memory and resources until they are\nactually needed. In complex, nested layouts containing many Components,\nthis can make a noticeable improvement in performance.</p>\n\n<pre><code>// Explicit creation of contained Components:\nvar panel = new Ext.Panel({\n   ...\n   items: [\n      Ext.create('Ext.button.Button', {\n         text: 'OK'\n      })\n   ]\n};\n\n// Implicit creation using xtype:\nvar panel = new Ext.Panel({\n   ...\n   items: [{\n      xtype: 'button',\n      text: 'OK'\n   }]\n};\n</code></pre>\n\n<p>In the first example, the button will always be created immediately\nduring the panel's initialization. With many added Components, this\napproach could potentially slow the rendering of the page. In the\nsecond example, the button will not be created or rendered until the\npanel is actually displayed in the browser. If the panel is never\ndisplayed (for example, if it is a tab that remains hidden) then the\nbutton will never be created and will never consume any resources whatsoever.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-xtype",
        "linenr": 293,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The xtype configuration option can be used to optimize\nComponent creation and rendering. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "cfg",
        "name": "xtype",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Component.</p>\n",
        "href": "Component2.html#Ext-Component-method-constructor",
        "linenr": 1,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "type": "Ext.Element/String/Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds each argument passed to this method to the <a href=\"#/api/Ext.form.field.Text-cfg-childEls\" rel=\"Ext.form.field.Text-cfg-childEls\" class=\"docClass\">childEls</a> array.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addChildEls",
        "linenr": 2037,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Adds each argument passed to this method to the childEls array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "addChildEls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "linenr": 2554,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the Component to allow method chaining.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class name to add</p>\n",
            "type": "String",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": {
          "doc": "Adds a CSS class to the top level element representing this component.",
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.LoadMask-method-addCls\" rel=\"Ext.LoadMask-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "linenr": 2532,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the Component to allow method chaining.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The CSS class name to add</p>\n",
            "type": "String",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Text-method-addUIClsToElement\" rel=\"Ext.form.field.Text-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
        "linenr": 1615,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "cls"
          },
          {
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n",
            "type": "Object",
            "optional": false,
            "name": "skip"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.field.Text-method-fireEvent\" rel=\"Ext.form.field.Text-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
        "linenr": 159,
        "html_filename": "Stateful.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event name or an array of event names.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "events"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "method",
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
        "linenr": 1686,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The UI to remove from the element</p>\n",
            "type": "String",
            "optional": false,
            "name": "ui"
          }
        ],
        "deprecated": null,
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
        "linenr": 2923,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "adjWidth"
          },
          {
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "adjHeight"
          },
          {
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "isSetSize"
          },
          {
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "callingContainer"
          }
        ],
        "deprecated": null,
        "shortDoc": " ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Aligns this floating Component to the specified element</p>\n",
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "linenr": 177,
        "html_filename": "Floating.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must be a\nomponent instance. If a string id is passed, it will be used as an element id.</p>\n",
            "type": "Ext.Component/Ext.Element/HTMLElement/String",
            "optional": false,
            "name": "element"
          },
          {
            "doc": "<p>(optional), (defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.Element-method-alignTo\" rel=\"Ext.Element-method-alignTo\" class=\"docClass\">Ext.Element.alignTo</a> for more details).</p>\n",
            "type": "String",
            "optional": true,
            "name": "position"
          },
          {
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "type": "Number[]",
            "optional": true,
            "name": "offsets"
          }
        ],
        "deprecated": null,
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "method",
        "name": "alignTo",
        "owner": "Ext.util.Floating",
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
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
        "linenr": 225,
        "html_filename": "Stateful.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The state</p>\n",
            "type": "Object",
            "optional": false,
            "name": "state"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies the state to the object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "method",
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Automatically grows the field to accomodate the width of the text up to the maximum field width allowed.\nThis only takes effect if <tt><a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">grow</a> = true</tt>, and fires the <a href=\"#/api/Ext.form.field.Text-event-autosize\" rel=\"Ext.form.field.Text-event-autosize\" class=\"docClass\">autosize</a> event if the\nwidth changes.</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-autoSize",
        "linenr": 638,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Automatically grows the field to accomodate the width of the text up to the maximum field width allowed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "autoSize",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent excessive firing of <a href=\"#/api/Ext.form.field.Text-event-change\" rel=\"Ext.form.field.Text-event-change\" class=\"docClass\">change</a> events. This is useful for instance\nif the field has sub-fields which are being updated as a group; you don't want the container\nfield to check its own changed state for each subfield change.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-batchChanges",
        "linenr": 348,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A function containing the transaction code</p>\n",
            "type": "Object",
            "optional": false,
            "name": "fn"
          }
        ],
        "deprecated": null,
        "shortDoc": "A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent e...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "batchChanges",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
        "linenr": 2934,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "adjWidth"
          },
          {
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "adjHeight"
          },
          {
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "isSetSize"
          },
          {
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "callingContainer"
          }
        ],
        "deprecated": null,
        "shortDoc": "Occurs before componentLayout is run. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "href": "Component2.html#Ext-Component-method-bubble",
        "linenr": 1024,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "bubble",
        "owner": "Ext.Component",
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
        "doc": "<p>Center this Component in its container.</p>\n",
        "href": "Floating.html#Ext-util-Floating-method-center",
        "linenr": 265,
        "html_filename": "Floating.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Center this Component in its container. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "method",
        "name": "center",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:</p>\n\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.Text-event-change\" rel=\"Ext.form.field.Text-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.Text-cfg-validateOnChange\" rel=\"Ext.form.field.Text-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\n<a href=\"#/api/Ext.form.field.Text-event-validitychange\" rel=\"Ext.form.field.Text-event-validitychange\" class=\"docClass\">validitychange event</a> if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.Text-method-isDirty\" rel=\"Ext.form.field.Text-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.Text-event-dirtychange\" rel=\"Ext.form.field.Text-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-checkChange",
        "linenr": 235,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Checks whether the value of the field has changed since the last time it was checked. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "checkChange",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.Text-method-isDirty\" rel=\"Ext.form.field.Text-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time\nit was checked, fires the <a href=\"#/api/Ext.form.field.Text-event-dirtychange\" rel=\"Ext.form.field.Text-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-checkDirty",
        "linenr": 286,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Checks the isDirty state of the field and if it has changed since the last time\nit was checked, fires the dirtychange...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "checkDirty",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clear any invalid styles/messages for this field.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Text-method-validate\" rel=\"Ext.form.field.Text-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Text-method-isValid\" rel=\"Ext.form.field.Text-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>true</code> if the value does not <i>pass</i> validation. So simply clearing a field's errors\nwill not necessarily allow submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-method-clearInvalid",
        "linenr": 748,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Clear any invalid styles/messages for this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "clearInvalid",
        "owner": "Ext.form.field.Base",
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
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "linenr": 964,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>clone The cloned copy of this component</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "overrides"
          }
        ],
        "deprecated": null,
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Ensures that the plugins array contains fully constructed plugin instances. This\nconverts any configs into their appropriate instances.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-constructPlugins",
        "linenr": 1009,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Ensures that the plugins array contains fully constructed plugin instances. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "constructPlugins",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Destroys the Component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
        "linenr": 3119,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Destroys the Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Disable the component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
        "linenr": 2471,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Disable the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
        "linenr": 1033,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Handles autoRender. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "linenr": 2856,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.container.Container"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "width"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "height"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "isSetSize"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "callingContainer"
          }
        ],
        "deprecated": null,
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element it was\nrendered to.</p>\n\n<p>An alternative constraint may be passed.</p>\n",
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
        "linenr": 136,
        "html_filename": "Floating.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is\nto be constrained. Defaults to the element into which this floating Component was rendered.</p>\n",
            "type": "String/HTMLElement/Ext.Element/Ext.util.Region",
            "optional": true,
            "name": "constrainTo"
          }
        ],
        "deprecated": null,
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "method",
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enable the component</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
        "linenr": 2448,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "silent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Enable the component ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "enable",
        "owner": "Ext.AbstractComponent",
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
        "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.Text-method-isFileUpload\" rel=\"Ext.form.field.Text-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference\nto the file input DOM element holding the user's selected file. The input will be appended into\nthe submission form and will not be returned, so this method should also create a replacement.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-extractFileInput",
        "linenr": 373,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Only relevant if the instance's isFileUpload method returns true. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "extractFileInput",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
        "linenr": 972,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "linenr": 995,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>The first Container for which the custom function returns true</p>\n",
          "type": "Ext.container.Container"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "findParentBy",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "linenr": 1009,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>The first Container which matches the given xtype or class</p>\n",
          "type": "Ext.container.Container"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "type": "String/Ext.Class",
            "optional": false,
            "name": "xtype"
          }
        ],
        "deprecated": null,
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "findParentByType",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.form.field.Text-method-enableBubble\" rel=\"Ext.form.field.Text-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "doc": "<p>Try to focus this component.</p>\n",
        "href": "Component2.html#Ext-Component-method-focus",
        "linenr": 873,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "selectText"
          },
          {
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
            "type": "Boolean/Number",
            "optional": true,
            "name": "delay"
          }
        ],
        "deprecated": null,
        "shortDoc": "Try to focus this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "focus",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
        "linenr": 2897,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
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
        "doc": "<p>Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely returns any message that the component may already hold.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveError",
        "linenr": 336,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "<p>The active error message on the component; if there is no error, an empty string is returned.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the active error message for this component, if any. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getActiveError",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its own, it merely returns any messages that the component may already hold.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveErrors",
        "linenr": 371,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "<p>The active error messages on the component; if there are no errors, an empty Array is returned.</p>\n",
          "type": "String[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets an Array of any active error messages currently applied to the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getActiveErrors",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>override\nTo get the natural width of the inputEl, we do a simple calculation based on the\n'size' config. We use hard-coded numbers to approximate what browsers do natively,\nto avoid having to read any styles which would hurt performance.</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-getBodyNaturalWidth",
        "linenr": 661,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "override\nTo get the natural width of the inputEl, we do a simple calculation based on the\n'size' config. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "getBodyNaturalWidth",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
        "href": "Component2.html#Ext-Component-method-getBox",
        "linenr": 548,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "getBox",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "linenr": 2669,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>the Container which owns this Component.</p>\n",
          "type": "Ext.container.Container"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves the top level element representing this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
        "linenr": 2284,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.core.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Validates a value according to the field's validation rules and returns an array of errors\nfor any failing validations. Validation rules are processed in the following order:</p>\n\n<ol>\n<li><p><strong>Field specific validator</strong></p>\n\n<p> A validator offers a way to customize and reuse a validation specification.\n If a field is configured with a <code><a href=\"#/api/Ext.form.field.Text-cfg-validator\" rel=\"Ext.form.field.Text-cfg-validator\" class=\"docClass\">validator</a></code>\n function, it will be passed the current field value.  The <code><a href=\"#/api/Ext.form.field.Text-cfg-validator\" rel=\"Ext.form.field.Text-cfg-validator\" class=\"docClass\">validator</a></code>\n function is expected to return either:</p>\n\n<ul>\n<li>Boolean <code>true</code>  if the value is valid (validation continues).</li>\n<li>a String to represent the invalid message if invalid (validation halts).</li>\n</ul>\n</li>\n<li><p><strong>Basic Validation</strong></p>\n\n<p> If the <code><a href=\"#/api/Ext.form.field.Text-cfg-validator\" rel=\"Ext.form.field.Text-cfg-validator\" class=\"docClass\">validator</a></code> has not halted validation,\n basic validation proceeds as follows:</p>\n\n<ul>\n<li><p><code><a href=\"#/api/Ext.form.field.Text-cfg-allowBlank\" rel=\"Ext.form.field.Text-cfg-allowBlank\" class=\"docClass\">allowBlank</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a></code>)</p>\n\n<p>  Depending on the configuration of <code><a href=\"#/api/Ext.form.field.Text-cfg-allowBlank\" rel=\"Ext.form.field.Text-cfg-allowBlank\" class=\"docClass\">allowBlank</a></code>, a\n  blank field will cause validation to halt at this step and return\n  Boolean true or false accordingly.</p></li>\n<li><p><code><a href=\"#/api/Ext.form.field.Text-cfg-minLength\" rel=\"Ext.form.field.Text-cfg-minLength\" class=\"docClass\">minLength</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.Text-cfg-minLengthText\" rel=\"Ext.form.field.Text-cfg-minLengthText\" class=\"docClass\">minLengthText</a></code>)</p>\n\n<p>  If the passed value does not satisfy the <code><a href=\"#/api/Ext.form.field.Text-cfg-minLength\" rel=\"Ext.form.field.Text-cfg-minLength\" class=\"docClass\">minLength</a></code>\n  specified, validation halts.</p></li>\n<li><p><code><a href=\"#/api/Ext.form.field.Text-cfg-maxLength\" rel=\"Ext.form.field.Text-cfg-maxLength\" class=\"docClass\">maxLength</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.Text-cfg-maxLengthText\" rel=\"Ext.form.field.Text-cfg-maxLengthText\" class=\"docClass\">maxLengthText</a></code>)</p>\n\n<p> If the passed value does not satisfy the <code><a href=\"#/api/Ext.form.field.Text-cfg-maxLength\" rel=\"Ext.form.field.Text-cfg-maxLength\" class=\"docClass\">maxLength</a></code>\n specified, validation halts.</p></li>\n</ul>\n</li>\n<li><p><strong>Preconfigured Validation Types (VTypes)</strong></p>\n\n<p> If none of the prior validation steps halts validation, a field\n configured with a <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> will utilize the\n corresponding <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">VTypes</a> validation function.\n If invalid, either the field's <code><a href=\"#/api/Ext.form.field.Text-cfg-vtypeText\" rel=\"Ext.form.field.Text-cfg-vtypeText\" class=\"docClass\">vtypeText</a></code> or\n the VTypes vtype Text property will be used for the invalid message.\n Keystrokes on the field will be filtered according to the VTypes\n vtype Mask property.</p></li>\n<li><p><strong>Field specific regex test</strong></p>\n\n<p> If none of the prior validation steps halts validation, a field's\n configured <code><a href=\"#/api/Ext.form.field.Text-cfg-regex\" rel=\"Ext.form.field.Text-cfg-regex\" class=\"docClass\">regex</a></code> test will be processed.\n The invalid message for this test is configured with <code><a href=\"#/api/Ext.form.field.Text-cfg-regexText\" rel=\"Ext.form.field.Text-cfg-regexText\" class=\"docClass\">regexText</a></code></p></li>\n</ol>\n\n",
        "href": "Text.html#Ext-form-field-Text-method-getErrors",
        "linenr": 501,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "<p>Array of any validation errors</p>\n",
          "type": "String[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to validate. The processed raw value will be used if nothing is passed</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Validates a value according to the field's validation rules and returns an array of errors\nfor any failing validations. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "getErrors",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.field.Text-cfg-fieldLabel\" rel=\"Ext.form.field.Text-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getFieldLabel",
        "linenr": 242,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "<p>The configured field label, or empty string if not defined</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the label for the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getFieldLabel",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "linenr": 3023,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
        "linenr": 2271,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Retrieves the id of this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the input id for this field. If none was specified via the <a href=\"#/api/Ext.form.field.Text-cfg-inputId\" rel=\"Ext.form.field.Text-cfg-inputId\" class=\"docClass\">inputId</a> config,\nthen an id will be automatically generated.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-getInputId",
        "linenr": 298,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the input id for this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getInputId",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "linenr": 1832,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "type": "String/Number/Ext.Element/HTMLElement",
            "optional": false,
            "name": "position"
          }
        ],
        "deprecated": null,
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Generates the arguments for the field decorations <a href=\"#/api/Ext.form.field.Text-cfg-labelableRenderTpl\" rel=\"Ext.form.field.Text-cfg-labelableRenderTpl\" class=\"docClass\">rendering template</a>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getLabelableRenderData",
        "linenr": 251,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "<p>The template arguments</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Generates the arguments for the field decorations rendering template. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getLabelableRenderData",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "linenr": 3031,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n",
          "type": "Ext.ComponentLoader"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when\n<a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value\npair, the name being this field's <a href=\"#/api/Ext.form.field.Text-method-getName\" rel=\"Ext.form.field.Text-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More\nadvanced field implementations may return more than one name-value pair. The returned values will be\nsaved to the corresponding field names in the Model.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Text-method-validate\" rel=\"Ext.form.field.Text-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-getModelData",
        "linenr": 190,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the value(s) that should be saved to the Ext.data.Model instance for this field, when\nExt.form.Basic.updateRe...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "getModelData",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a> attribute of the field. This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-getName",
        "linenr": 128,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>name The field <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a></p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the name attribute of the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "getName",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "linenr": 3162,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>pluginInstance</p>\n",
          "type": "Ext.AbstractPlugin"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "pluginId"
          }
        ],
        "deprecated": null,
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
        "href": "Component2.html#Ext-Component-method-getPosition",
        "linenr": 613,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "local"
          }
        ],
        "deprecated": null,
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "getPosition",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the raw String value of the field, without performing any normalization, conversion, or validation.\nGets the current value of the input element if the field has been rendered, ignoring the value if it is the\n<a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a>. To get a normalized and converted value see <a href=\"#/api/Ext.form.field.Text-method-getValue\" rel=\"Ext.form.field.Text-method-getValue\" class=\"docClass\">getValue</a>.</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-getRawValue",
        "linenr": 466,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "<p>value The raw String value of the field</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the raw String value of the field, without performing any normalization, conversion, or validation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "getRawValue",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "linenr": 3007,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.form.field.Text-cfg-stateId\" rel=\"Ext.form.field.Text-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
        "linenr": 838,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the state id for this object.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "linenr": 237,
        "html_filename": "Stateful.html",
        "alias": null,
        "return": {
          "doc": "<p>The state id, null if not found.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the state id for this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "method",
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates and returns the data object to be used when rendering the <a href=\"#/api/Ext.form.field.Text-cfg-fieldSubTpl\" rel=\"Ext.form.field.Text-cfg-fieldSubTpl\" class=\"docClass\">fieldSubTpl</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-getSubTplData",
        "linenr": 306,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>The template data</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Creates and returns the data object to be used when rendering the fieldSubTpl. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getSubTplData",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the markup to be inserted into the outer template's bodyEl. For fields this is the\nactual input element.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-getSubTplMarkup",
        "linenr": 328,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the markup to be inserted into the outer template's bodyEl. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getSubTplMarkup",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.Text-method-getName\" rel=\"Ext.form.field.Text-method-getName\" class=\"docClass\">name</a> and the\nvalue being its current stringified value. More advanced field implementations may return more than one\nname-value pair.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Text-method-validate\" rel=\"Ext.form.field.Text-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-getSubmitData",
        "linenr": 169,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the parameter(s) that would be included in a standard form submit for this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "getSubmitData",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value that would be included in a standard form submit for this field. This will be combined\nwith the field's name to form a <tt>name=value</tt> pair in the <a href=\"#/api/Ext.form.field.Text-method-getSubmitData\" rel=\"Ext.form.field.Text-method-getSubmitData\" class=\"docClass\">submitted parameters</a>.\nIf an empty string is returned then just the <tt>name=</tt> will be submitted; if <tt>null</tt> is returned\nthen nothing will be submitted.</p>\n\n\n<p>Note that the value returned will have been <a href=\"#/api/Ext.form.field.Text-method-processRawValue\" rel=\"Ext.form.field.Text-method-processRawValue\" class=\"docClass\">processed</a> but may or may not have\nbeen successfully <a href=\"#/api/Ext.form.field.Text-method-validate\" rel=\"Ext.form.field.Text-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-method-getSubmitValue",
        "linenr": 438,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>The value to be submitted, or <tt>null</tt>.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the value that would be included in a standard form submit for this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getSubmitValue",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular field (e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>), as the result of calling <a href=\"#/api/Ext.form.field.Text-method-rawToValue\" rel=\"Ext.form.field.Text-method-rawToValue\" class=\"docClass\">rawToValue</a> on\nthe field's <a href=\"#/api/Ext.form.field.Text-method-processRawValue\" rel=\"Ext.form.field.Text-method-processRawValue\" class=\"docClass\">processed</a> String value. To return the raw String value, see <a href=\"#/api/Ext.form.field.Text-method-getRawValue\" rel=\"Ext.form.field.Text-method-getRawValue\" class=\"docClass\">getRawValue</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-getValue",
        "linenr": 522,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>value The field value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the current data value of the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getValue",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "linenr": 3015,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
        "href": "Component2.html#Ext-Component-method-getXType",
        "linenr": 982,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>The xtype</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "getXType",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "linenr": 2331,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The xtype hierarchy string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely looks for any message that the component may already hold.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-hasActiveError",
        "linenr": 345,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Tells whether the field currently has an active error message. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "hasActiveError",
        "owner": "Ext.form.Labelable",
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
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
        "linenr": 1675,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The cls to check</p>\n",
            "type": "String",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.form.field.Text-cfg-hideMode\" rel=\"Ext.form.field.Text-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
        "href": "Component2.html#Ext-Component-method-hide",
        "linenr": 768,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
            "type": "String/Ext.Element/Ext.Component",
            "optional": true,
            "name": "animateTarget"
          },
          {
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "hide",
        "owner": "Ext.Component",
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
        "doc": "<p>Initializes this Field mixin on the current instance. Components using this mixin should call\nthis method during their own initialization process.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-initField",
        "linenr": 73,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Initializes this Field mixin on the current instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "initField",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-initLabelable",
        "linenr": 224,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Performs initialization of this mixin. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "initLabelable",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initializes the field's value based on the initial config.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-initValue",
        "linenr": 106,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Initializes the field's value based on the initial config. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "initValue",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "linenr": 2110,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this Component matches the selector.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The selector string to test against.</p>\n",
            "type": "String",
            "optional": false,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "linenr": 3178,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>isDescendant</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Container",
            "optional": false,
            "name": "container"
          }
        ],
        "deprecated": null,
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.Text-property-originalValue\" rel=\"Ext.form.field.Text-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nthen the <a href=\"#/api/Ext.form.field.Text-property-originalValue\" rel=\"Ext.form.field.Text-property-originalValue\" class=\"docClass\">originalValue</a> is updated when the values are loaded by\n<a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-isDirty",
        "linenr": 271,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this field has been changed from its original value (and\nis not disabled), false otherwise.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns true if the value of this Field has been changed from its originalValue. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "isDirty",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "linenr": 2508,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>the disabled state of this Component.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "linenr": 2685,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>the draggable state of this component.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "linenr": 2693,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>the droppable state of this component.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.Text-method-getValue\" rel=\"Ext.form.field.Text-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override\nthis to provide custom comparison logic appropriate for the particular field's data type.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-isEqual",
        "linenr": 158,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the values are equal, false if inequal.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The first value to compare</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value1"
          },
          {
            "doc": "<p>The second value to compare</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value2"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns whether two field values are logically equal. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "isEqual",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If this returns true, the <a href=\"#/api/Ext.form.field.Text-method-extractFileInput\" rel=\"Ext.form.field.Text-method-extractFileInput\" class=\"docClass\">extractFileInput</a>\nmethod must also be implemented to return the corresponding file input element.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-isFileUpload",
        "linenr": 362,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for submitti...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "isFileUpload",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Method to determine whether this Component is floating.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "linenr": 2677,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>the floating state of this component.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "linenr": 2524,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>the hidden state of this Component.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether or not the field value is currently valid by\n<a href=\"#/api/Ext.form.field.Text-method-getErrors\" rel=\"Ext.form.field.Text-method-getErrors\" class=\"docClass\">validating</a> the <a href=\"#/api/Ext.form.field.Text-method-processRawValue\" rel=\"Ext.form.field.Text-method-processRawValue\" class=\"docClass\">processed raw value</a>\nof the field. <b>Note</b>: <a href=\"#/api/Ext.form.field.Text-cfg-disabled\" rel=\"Ext.form.field.Text-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-isValid",
        "linenr": 694,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the value is valid, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns whether or not the field value is currently valid by\nvalidating the processed raw value\nof the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "isValid",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this component is visible.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "linenr": 2408,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this component is visible, false otherwise.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "type": "Boolean",
            "optional": true,
            "name": "deep"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if this component is visible. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "linenr": 2300,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The xtype to check for this Component</p>\n",
            "type": "String",
            "optional": false,
            "name": "xtype"
          },
          {
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "shallow"
          }
        ],
        "deprecated": null,
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Display one or more error messages associated with this field, using <a href=\"#/api/Ext.form.field.Text-cfg-msgTarget\" rel=\"Ext.form.field.Text-cfg-msgTarget\" class=\"docClass\">msgTarget</a> to determine how to\ndisplay the messages and applying <a href=\"#/api/Ext.form.field.Text-cfg-invalidCls\" rel=\"Ext.form.field.Text-cfg-invalidCls\" class=\"docClass\">invalidCls</a> to the field's UI element.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Text-method-validate\" rel=\"Ext.form.field.Text-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Text-method-isValid\" rel=\"Ext.form.field.Text-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>false</code> if the value does <i>pass</i> validation. So simply marking a Field as invalid\nwill not prevent submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-method-markInvalid",
        "linenr": 729,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The validation message(s) to display.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "errors"
          }
        ],
        "deprecated": null,
        "shortDoc": "Display one or more error messages associated with this field, using msgTarget to determine how to\ndisplay the messag...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "markInvalid",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Text-method-addManagedListener\" rel=\"Ext.form.field.Text-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Text-method-removeManagedListener\" rel=\"Ext.form.field.Text-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.Text-method-mon\" rel=\"Ext.form.field.Text-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.Text-method-nextSibling\" rel=\"Ext.form.field.Text-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "linenr": 2236,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.Text-method-nextNode\" rel=\"Ext.form.field.Text-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "linenr": 2140,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the next sibling of this Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.field.Text-method-fireEvent\" rel=\"Ext.form.field.Text-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.Text-method-previousSibling\" rel=\"Ext.form.field.Text-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "linenr": 2200,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.Text-method-previousNode\" rel=\"Ext.form.field.Text-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "linenr": 2170,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Performs any necessary manipulation of a raw String value to prepare it for conversion\nand/or <a href=\"#/api/Ext.form.field.Text-method-validate\" rel=\"Ext.form.field.Text-method-validate\" class=\"docClass\">validation</a>. For text fields this applies the configured <a href=\"#/api/Ext.form.field.Text-cfg-stripCharsRe\" rel=\"Ext.form.field.Text-cfg-stripCharsRe\" class=\"docClass\">stripCharsRe</a> to the\nraw value.</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-processRawValue",
        "linenr": 325,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "<p>The processed string value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The unprocessed string value</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Performs any necessary manipulation of a raw String value to prepare it for conversion\nand/or validation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "processRawValue",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a raw input field value into a mixed-type value that is suitable for this particular field type.\nThis allows controlling the normalization and conversion of user-entered values into field-type-appropriate\nvalues, e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, and is invoked by <a href=\"#/api/Ext.form.field.Text-method-getValue\" rel=\"Ext.form.field.Text-method-getValue\" class=\"docClass\">getValue</a>.</p>\n\n\n<p>It is up to individual implementations to decide how to handle raw values that cannot be successfully\nconverted to the desired object type.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Text-method-valueToRaw\" rel=\"Ext.form.field.Text-method-valueToRaw\" class=\"docClass\">valueToRaw</a> for the opposite conversion.</p>\n\n\n<p>The base implementation does no conversion, returning the raw value untouched.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-method-rawToValue",
        "linenr": 496,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>The converted value.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "rawValue"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a raw input field value into a mixed-type value that is suitable for this particular field type. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "rawToValue",
        "owner": "Ext.form.field.Base",
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
        "doc": "<p>Removes items in the childEls array based on the return value of a supplied test\nfunction. The function is called with a entry in childEls and if the test function\nreturn true, that entry is removed. If false, that entry is kept.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeChildEls",
        "linenr": 2047,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The test function.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "testFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes items in the childEls array based on the return value of a supplied test\nfunction. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "removeChildEls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "linenr": 2564,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the Component to allow method chaining.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "className"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.Text-method-removeUIClsFromElement\" rel=\"Ext.form.field.Text-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
        "linenr": 1646,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "cls"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.Text-method-mon\" rel=\"Ext.form.field.Text-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
        "linenr": 1726,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The UI to add to the element</p>\n",
            "type": "String",
            "optional": false,
            "name": "ui"
          }
        ],
        "deprecated": null,
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resets the current field value to the originally-loaded value and clears any validation messages.\nAlso adds <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a></b></tt> and <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-emptyCls\" rel=\"Ext.form.field.Text-cfg-emptyCls\" class=\"docClass\">emptyCls</a></b></tt> if the\noriginal value was blank.</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-reset",
        "linenr": 375,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Resets the current field value to the originally-loaded value and clears any validation messages. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "reset",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.Text-property-originalValue\" rel=\"Ext.form.field.Text-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.Text-method-getValue\" rel=\"Ext.form.field.Text-method-getValue\" class=\"docClass\">value</a>.\nThis is called by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-resetOriginalValue",
        "linenr": 225,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Resets the field's originalValue property so it matches the current value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "resetOriginalValue",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.form.field.Text-method-suspendEvents\" rel=\"Ext.form.field.Text-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "doc": "<p>Conditionally saves a single property from this object to the given state object.\nThe idea is to only save state which has changed from the initial state so that\ncurrent software settings do not override future software settings. Only those\nvalues that are user-changed state should be saved.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-method-savePropToState",
        "linenr": 274,
        "html_filename": "Stateful.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the property was saved, false if not.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the property to save.</p>\n",
            "type": "String",
            "optional": false,
            "name": "propName"
          },
          {
            "doc": "<p>The state object in to which to save the property.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "state"
          },
          {
            "doc": "<p>(optional) The name to use for the property in state.</p>\n",
            "type": "String",
            "optional": true,
            "name": "stateName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Conditionally saves a single property from this object to the given state object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "method",
        "name": "savePropToState",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selects text in this field</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-selectText",
        "linenr": 606,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The index where the selection should start (defaults to 0)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "start"
          },
          {
            "doc": "<p>(optional) The index where the selection should end (defaults to the text length)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "end"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selects text in this field ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "selectText",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.form.field.Text-method-syncFx\" rel=\"Ext.form.field.Text-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
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
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating Component has either been\nmoved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n<p>If a <em>Window</em> is superceded by another Window, deactivating it hides its shadow.</p>\n\n<p>This method also fires the <a href=\"#/api/Ext.Component-event-activate\" rel=\"Ext.Component-event-activate\" class=\"docClass\">activate</a> or\n<a href=\"#/api/Ext.Component-event-deactivate\" rel=\"Ext.Component-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n",
        "href": "Floating.html#Ext-util-Floating-method-setActive",
        "linenr": 228,
        "html_filename": "Floating.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "active"
          },
          {
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "newActive"
          }
        ],
        "deprecated": null,
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating Component has either been\nmoved to th...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "method",
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.field.Text-method-setActiveErrors\" rel=\"Ext.form.field.Text-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.field.Text-cfg-activeErrorsTpl\" rel=\"Ext.form.field.Text-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveError",
        "linenr": 354,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The error message</p>\n",
            "type": "String",
            "optional": false,
            "name": "msg"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the active error message to the given string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "setActiveError",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.field.Text-cfg-activeErrorsTpl\" rel=\"Ext.form.field.Text-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.field.Text-method-setActiveError\" rel=\"Ext.form.field.Text-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveErrors",
        "linenr": 380,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The error messages</p>\n",
            "type": "String[]",
            "optional": false,
            "name": "errors"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the active error message to an Array of error messages. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "setActiveErrors",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "linenr": 368,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "scroll"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enable or disable the component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
        "linenr": 2516,
        "html_filename": "AbstractComponent.html",
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
            "name": "disabled"
          }
        ],
        "deprecated": null,
        "shortDoc": "Enable or disable the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "linenr": 3090,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "dock"
          },
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "layoutParent"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given object, check if this component hasOwnProperty that config; if not\nthen it's inheriting a default value from its prototype and we should apply the default value.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-setFieldDefaults",
        "linenr": 437,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The defaults to apply to the object.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "defaults"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies a set of default configuration values to this Labelable instance. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "setFieldDefaults",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the <a href=\"#/api/Ext.form.field.Text-cfg-fieldStyle\" rel=\"Ext.form.field.Text-cfg-fieldStyle\" class=\"docClass\">CSS style</a> of the <a href=\"#/api/Ext.form.field.Text-property-inputEl\" rel=\"Ext.form.field.Text-property-inputEl\" class=\"docClass\">field input element</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-setFieldStyle",
        "linenr": 349,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The style(s) to apply. Should be a valid argument to\n<a href=\"#/api/Ext.Element-method-applyStyles\" rel=\"Ext.Element-method-applyStyles\" class=\"docClass\">Ext.Element.applyStyles</a>.</p>\n",
            "type": "String/Object/Function",
            "optional": false,
            "name": "style"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the CSS style of the field input element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "setFieldStyle",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.form.field.Text-event-resize\" rel=\"Ext.form.field.Text-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "linenr": 2994,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "type": "Number",
            "optional": false,
            "name": "height"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the height of the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "linenr": 3055,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n",
          "type": "Ext.LoadMask"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
            "type": "Boolean/Object/String",
            "optional": false,
            "name": "load"
          },
          {
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "targetEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.form.field.Text-method-setPosition\" rel=\"Ext.form.field.Text-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.Text-event-move\" rel=\"Ext.form.field.Text-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "linenr": 511,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new x position</p>\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>The new y position</p>\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          },
          {
            "doc": "<p>True to animate the Component into its new position.\nYou may also pass an animation configuration.</p>\n",
            "type": "Boolean/Object",
            "optional": false,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the page XY position of the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.form.field.Text-method-setPagePosition\" rel=\"Ext.form.field.Text-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.Text-event-move\" rel=\"Ext.form.field.Text-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "href": "Component2.html#Ext-Component-method-setPosition",
        "linenr": 427,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new left</p>\n",
            "type": "Number",
            "optional": false,
            "name": "left"
          },
          {
            "doc": "<p>The new top</p>\n",
            "type": "Number",
            "optional": false,
            "name": "top"
          },
          {
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
            "type": "Boolean/Object",
            "optional": false,
            "name": "animate"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the left and top of the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "setPosition",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the field's raw value directly, bypassing <a href=\"#/api/Ext.form.field.Text-method-valueToRaw\" rel=\"Ext.form.field.Text-method-valueToRaw\" class=\"docClass\">value conversion</a>, change detection, and\nvalidation. To set the value with these additional inspections see <a href=\"#/api/Ext.form.field.Text-method-setValue\" rel=\"Ext.form.field.Text-method-setValue\" class=\"docClass\">setValue</a>.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-setRawValue",
        "linenr": 463,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>value The field value that is set</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to set</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the field's raw value directly, bypassing value conversion, change detection, and\nvalidation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "setRawValue",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the read only state of this field.</p>\n",
        "href": "Base.html#Ext-form-field-Base-method-setReadOnly",
        "linenr": 568,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Whether the field should be read only.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "readOnly"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the read only state of this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "setReadOnly",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.form.field.Text-event-resize\" rel=\"Ext.form.field.Text-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "linenr": 2733,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "type": "Number/String/Object",
            "optional": false,
            "name": "width"
          },
          {
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "height"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the width and height of this Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
        "linenr": 1569,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new UI for the component</p>\n",
            "type": "String",
            "optional": false,
            "name": "ui"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the UI for the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets a data value into the field and runs the change detection and validation. Also applies any configured\n<a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">emptyText</a> for text fields. To set the value directly without these inspections see <a href=\"#/api/Ext.form.field.Text-method-setRawValue\" rel=\"Ext.form.field.Text-method-setRawValue\" class=\"docClass\">setRawValue</a>.</p>\n",
        "href": "Text.html#Ext-form-field-Text-method-setValue",
        "linenr": 481,
        "html_filename": "Text.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.form.field.Text"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to set</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets a data value into the field and runs the change detection and validation. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "method",
        "name": "setValue",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "linenr": 2399,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>True to show, false to hide</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "visible"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.form.field.Text-event-resize\" rel=\"Ext.form.field.Text-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "linenr": 2982,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.Text-method-getEl\" rel=\"Ext.form.field.Text-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.Element-property-defaultUnit\" rel=\"Ext.Element-property-defaultUnit\" class=\"docClass\">Ext.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "type": "Number",
            "optional": false,
            "name": "width"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the width of the component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.form.field.Text-cfg-autoRender\" rel=\"Ext.form.field.Text-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.form.field.Text-property-zIndexManager\" rel=\"Ext.form.field.Text-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
        "href": "Component2.html#Ext-Component-method-show",
        "linenr": 664,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) <b>only valid for <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
            "type": "String/Ext.Element",
            "optional": true,
            "name": "animateTarget"
          },
          {
            "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "show",
        "owner": "Ext.Component",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.form.field.Text-method-resumeEvents\" rel=\"Ext.form.field.Text-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.form.field.Text-method-resumeEvents\" rel=\"Ext.form.field.Text-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.form.field.Text-method-sequenceFx\" rel=\"Ext.form.field.Text-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
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
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "linenr": 256,
        "html_filename": "Floating.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "method",
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n",
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "linenr": 197,
        "html_filename": "Floating.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "preventFocus"
          }
        ],
        "deprecated": null,
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "tagname": "method",
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.Text-method-removeListener\" rel=\"Ext.form.field.Text-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.form.field.Text-method-addListener\" rel=\"Ext.form.field.Text-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
      },
      {
        "doc": "<p>Clears the active error message(s).</p>\n\n<p>Note that this only clears the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-clearInvalid\" rel=\"Ext.form.field.Base-method-clearInvalid\" class=\"docClass\">clearInvalid</a> instead.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-unsetActiveError",
        "linenr": 397,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Clears the active error message(s). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "unsetActiveError",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "linenr": 2119,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n",
          "type": "Ext.container.Container"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) The simple selector to test.</p>\n",
            "type": "String",
            "optional": true,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Update the content area of a component.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
        "linenr": 2367,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> update</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "htmlOrData"
          },
          {
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "loadScripts"
          },
          {
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
            "type": "Function",
            "optional": true,
            "name": "callback"
          }
        ],
        "deprecated": null,
        "shortDoc": "Update the content area of a component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "method",
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
        "href": "Component2.html#Ext-Component-method-updateBox",
        "linenr": 561,
        "html_filename": "Component2.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "type": "Object",
            "optional": false,
            "name": "box"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "method",
        "name": "updateBox",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Text-method-getErrors\" rel=\"Ext.form.field.Text-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value, and fires the <a href=\"#/api/Ext.form.field.Text-event-validitychange\" rel=\"Ext.form.field.Text-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has\nchanged since the last validation. <b>Note</b>: <a href=\"#/api/Ext.form.field.Text-cfg-disabled\" rel=\"Ext.form.field.Text-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error\nmessage display. To validate without side-effects, use <a href=\"#/api/Ext.form.field.Text-method-isValid\" rel=\"Ext.form.field.Text-method-isValid\" class=\"docClass\">isValid</a>.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-validate",
        "linenr": 330,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the value is valid, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns whether or not the field value is currently valid by validating the\nfield's current value, and fires the vali...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "validate",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Uses <a href=\"#/api/Ext.form.field.Text-method-getErrors\" rel=\"Ext.form.field.Text-method-getErrors\" class=\"docClass\">getErrors</a> to build an array of validation errors. If any errors are found, they are passed\nto <a href=\"#/api/Ext.form.field.Text-method-markInvalid\" rel=\"Ext.form.field.Text-method-markInvalid\" class=\"docClass\">markInvalid</a> and false is returned, otherwise true is returned.</p>\n\n\n<p>Previously, subclasses were invited to provide an implementation of this to process validations - from 3.2\nonwards <a href=\"#/api/Ext.form.field.Text-method-getErrors\" rel=\"Ext.form.field.Text-method-getErrors\" class=\"docClass\">getErrors</a> should be overridden instead.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-method-validateValue",
        "linenr": 706,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>True if all validations passed, false if one or more failed</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to validate</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Uses getErrors to build an array of validation errors. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "validateValue",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a mixed-type value to a raw representation suitable for displaying in the field. This allows\ncontrolling how value objects passed to <a href=\"#/api/Ext.form.field.Text-method-setValue\" rel=\"Ext.form.field.Text-method-setValue\" class=\"docClass\">setValue</a> are shown to the user, including localization.\nFor instance, for a <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, this would control how a Date object passed to <a href=\"#/api/Ext.form.field.Text-method-setValue\" rel=\"Ext.form.field.Text-method-setValue\" class=\"docClass\">setValue</a>\nwould be converted to a String for display in the field.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Text-method-rawToValue\" rel=\"Ext.form.field.Text-method-rawToValue\" class=\"docClass\">rawToValue</a> for the opposite conversion.</p>\n\n\n<p>The base implementation simply does a standard toString conversion, and converts\n<a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">empty values</a> to an empty string.</p>\n\n",
        "href": "Base.html#Ext-form-field-Base-method-valueToRaw",
        "linenr": 481,
        "html_filename": "Base.html",
        "alias": null,
        "return": {
          "doc": "<p>The converted raw value.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The mixed-type value to convert to the raw representation.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a mixed-type value to a raw representation suitable for displaying in the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "method",
        "name": "valueToRaw",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [
      {
        "doc": "<p>Fires after a Component has been visually activated.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "linenr": 651,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "activate",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "linenr": 671,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>Parent Container</p>\n",
            "type": "Ext.container.Container",
            "optional": false,
            "name": "container"
          },
          {
            "doc": "<p>position of Component</p>\n",
            "type": "Number",
            "optional": false,
            "name": "pos"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.form.field.Text-property-rendered\" rel=\"Ext.form.field.Text-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "linenr": 738,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component rendering is finished. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the <tt><b><a href=\"#/api/Ext.form.field.Text-method-autoSize\" rel=\"Ext.form.field.Text-method-autoSize\" class=\"docClass\">autoSize</a></b></tt> function is triggered and the field is\nresized according to the <a href=\"#/api/Ext.form.field.Text-cfg-grow\" rel=\"Ext.form.field.Text-cfg-grow\" class=\"docClass\">grow</a>/<a href=\"#/api/Ext.form.field.Text-cfg-growMin\" rel=\"Ext.form.field.Text-cfg-growMin\" class=\"docClass\">growMin</a>/<a href=\"#/api/Ext.form.field.Text-cfg-growMax\" rel=\"Ext.form.field.Text-cfg-growMax\" class=\"docClass\">growMax</a> configs as a result.\nThis event provides a hook for the developer to apply additional logic at runtime to resize the\nfield if needed.</p>\n",
        "href": "Text.html#Ext-form-field-Text-event-autosize",
        "linenr": 231,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This text field</p>\n",
            "type": "Ext.form.field.Text",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The new field width</p>\n",
            "type": "Number",
            "optional": false,
            "name": "width"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the autoSize function is triggered and the field is\nresized according to the grow/growMin/growMax configs ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "event",
        "name": "autosize",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "linenr": 643,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "linenr": 657,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Text-event-destroy\" rel=\"Ext.form.field.Text-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.form.field.Text-event-destroy\" rel=\"Ext.form.field.Text-event-destroy\" class=\"docClass\">destroy</a>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "linenr": 746,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before the component is destroyed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.form.field.Text-event-hide\" rel=\"Ext.form.field.Text-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "linenr": 704,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.Text-property-rendered\" rel=\"Ext.form.field.Text-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.form.field.Text-event-render\" rel=\"Ext.form.field.Text-event-render\" class=\"docClass\">render</a>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "linenr": 725,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before the component is rendered. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.form.field.Text-event-show\" rel=\"Ext.form.field.Text-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "linenr": 691,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "linenr": 101,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.state.Stateful",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "state"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before the state of the object is restored. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "event",
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "linenr": 122,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.state.Stateful",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "state"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "event",
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when this field loses input focus.</p>\n",
        "href": "Base.html#Ext-form-field-Base-event-blur",
        "linenr": 246,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.field.Base",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when this field loses input focus. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "event",
        "name": "blur",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a user-initiated change is detected in the value of the field.</p>\n",
        "href": "Field.html#Ext-form-field-Field-event-change",
        "linenr": 79,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.field.Field",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The new value</p>\n",
            "type": "Object",
            "optional": false,
            "name": "newValue"
          },
          {
            "doc": "<p>The original value</p>\n",
            "type": "Object",
            "optional": false,
            "name": "oldValue"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a user-initiated change is detected in the value of the field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "event",
        "name": "change",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "linenr": 665,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "deactivate",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.form.field.Text-event-destroy\" rel=\"Ext.form.field.Text-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "linenr": 752,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is destroyed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Text-method-isDirty\" rel=\"Ext.form.field.Text-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n",
        "href": "Field.html#Ext-form-field-Field-event-dirtychange",
        "linenr": 94,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.field.Field",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>Whether or not the field is now dirty</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "isDirty"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a change in the field's isDirty state is detected. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "event",
        "name": "dirtychange",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is disabled.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "linenr": 679,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is disabled. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is enabled.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "linenr": 685,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is enabled. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.field.Text-method-setActiveError\" rel=\"Ext.form.field.Text-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-event-errorchange",
        "linenr": 232,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.Labelable",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The active error message</p>\n",
            "type": "String",
            "optional": false,
            "name": "error"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the active error message is changed via setActiveError. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "event",
        "name": "errorchange",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when this field receives input focus.</p>\n",
        "href": "Base.html#Ext-form-field-Base-event-focus",
        "linenr": 240,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.field.Base",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when this field receives input focus. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "event",
        "name": "focus",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.form.field.Text-event-hide\" rel=\"Ext.form.field.Text-event-hide\" class=\"docClass\">hide</a> method.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "linenr": 711,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is hidden. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Keydown input field event. This event only fires if <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-enableKeyEvents\" rel=\"Ext.form.field.Text-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></b></tt>\nis set to true.</p>\n",
        "href": "Text.html#Ext-form-field-Text-event-keydown",
        "linenr": 242,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This text field</p>\n",
            "type": "Ext.form.field.Text",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Keydown input field event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "event",
        "name": "keydown",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Keypress input field event. This event only fires if <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-enableKeyEvents\" rel=\"Ext.form.field.Text-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></b></tt>\nis set to true.</p>\n",
        "href": "Text.html#Ext-form-field-Text-event-keypress",
        "linenr": 258,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This text field</p>\n",
            "type": "Ext.form.field.Text",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Keypress input field event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "event",
        "name": "keypress",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Keyup input field event. This event only fires if <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-enableKeyEvents\" rel=\"Ext.form.field.Text-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></b></tt>\nis set to true.</p>\n",
        "href": "Text.html#Ext-form-field-Text-event-keyup",
        "linenr": 250,
        "html_filename": "Text.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This text field</p>\n",
            "type": "Ext.form.field.Text",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Keyup input field event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "tagname": "event",
        "name": "keyup",
        "owner": "Ext.form.field.Text",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is moved.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "linenr": 766,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The new x position</p>\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>The new y position</p>\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is moved. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a component is removed from an <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a></p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "linenr": 718,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>Container which holds the component</p>\n",
            "type": "Ext.container.Container",
            "optional": false,
            "name": "ownerCt"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.form.field.Text-property-rendered\" rel=\"Ext.form.field.Text-property-rendered\" class=\"docClass\">rendered</a>.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "linenr": 732,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component markup is rendered. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is resized.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "linenr": 758,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "adjWidth"
          },
          {
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "type": "Number",
            "optional": false,
            "name": "adjHeight"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is resized. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "resize",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.form.field.Text-event-show\" rel=\"Ext.form.field.Text-event-show\" class=\"docClass\">show</a> method.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "linenr": 698,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "this"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "event",
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.\nTo handle other keys see <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>.\nYou can check <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">Ext.EventObject.getKey</a> to determine which key was pressed.\nFor example:</p>\n\n<pre><code>var form = new Ext.form.Panel({\n    ...\n    items: [{\n            fieldLabel: 'Field 1',\n            name: 'field1',\n            allowBlank: false\n        },{\n            fieldLabel: 'Field 2',\n            name: 'field2',\n            listeners: {\n                specialkey: function(field, e){\n                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,\n                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN\n                    if (e.<a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> == e.ENTER) {\n                        var form = field.up('form').getForm();\n                        form.submit();\n                    }\n                }\n            }\n        }\n    ],\n    ...\n});\n</code></pre>\n\n",
        "href": "Base.html#Ext-form-field-Base-event-specialkey",
        "linenr": 252,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.field.Base",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The event object</p>\n",
            "type": "Ext.EventObject",
            "optional": false,
            "name": "e"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "event",
        "name": "specialkey",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the state of the object is restored.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "linenr": 112,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.state.Stateful",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "state"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the state of the object is restored. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "event",
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n",
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "linenr": 133,
        "html_filename": "Stateful.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.state.Stateful",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "state"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "tagname": "event",
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires when a change in the field's validity is detected.</p>\n",
        "href": "Field.html#Ext-form-field-Field-event-validitychange",
        "linenr": 87,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.form.field.Field",
            "optional": false,
            "name": "this"
          },
          {
            "doc": "<p>Whether or not the field is now valid</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "isValid"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when a change in the field's validity is detected. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "event",
        "name": "validitychange",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Ext.Element",
        "doc": "<p>The div Element wrapping the component's contents. Only available after the component has been rendered.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-property-bodyEl",
        "linenr": 299,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The div Element wrapping the component's contents. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "property",
        "name": "bodyEl",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "linenr": 473,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "property",
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.Element",
        "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.field.Text-cfg-msgTarget\" rel=\"Ext.form.field.Text-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-property-errorEl",
        "linenr": 306,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The div Element that will contain the component's error message(s). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "property",
        "name": "errorEl",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.Container",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.Text-property-zIndexManager\" rel=\"Ext.form.field.Text-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n",
        "href": "Component2.html#Ext-Component-property-floatParent",
        "linenr": 228,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "property",
        "name": "floatParent",
        "owner": "Ext.Component",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.form.field.Text-cfg-frame\" rel=\"Ext.form.field.Text-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "linenr": 255,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "property",
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.Element",
        "doc": "<p>The input Element for this Field. Only available after the field has been rendered.</p>\n",
        "href": "Base.html#Ext-form-field-Base-property-inputEl",
        "linenr": 370,
        "html_filename": "Base.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The input Element for this Field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "tagname": "property",
        "name": "inputEl",
        "owner": "Ext.form.field.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag denoting that this object is labelable as a field. Always true.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-property-isFieldLabelable",
        "linenr": 62,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Flag denoting that this object is labelable as a field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "property",
        "name": "isFieldLabelable",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag denoting that this component is a Field. Always true.</p>\n",
        "href": "Field.html#Ext-form-field-Field-property-isFormField",
        "linenr": 26,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Flag denoting that this component is a Field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "property",
        "name": "isFormField",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.Element",
        "doc": "<p>The label Element for this component. Only available after the component has been rendered.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-property-labelEl",
        "linenr": 292,
        "html_filename": "Labelable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The label Element for this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "property",
        "name": "labelEl",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "linenr": 620,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "property",
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.Text-cfg-value\" rel=\"Ext.form.field.Text-cfg-value\" class=\"docClass\">value</a> configuration, or as loaded by\nthe last form load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nsetting is <code>true</code>.</p>\n",
        "href": "Field.html#Ext-form-field-Field-property-originalValue",
        "linenr": 113,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The original value of the field as configured in the value configuration, or as loaded by\nthe last form load operatio...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "property",
        "name": "originalValue",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.Container",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.form.field.Text-cfg-itemId\" rel=\"Ext.form.field.Text-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "linenr": 99,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "property",
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "linenr": 599,
        "html_filename": "AbstractComponent.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "tagname": "property",
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
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
        "type": "Ext.ZIndexManager",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.form.field.Text-method-toFront\" rel=\"Ext.form.field.Text-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.form.field.Text-method-toBack\" rel=\"Ext.form.field.Text-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.Text-cfg-floating\" rel=\"Ext.form.field.Text-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.Text-property-floatParent\" rel=\"Ext.form.field.Text-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n",
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "linenr": 213,
        "html_filename": "Component2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "tagname": "property",
        "name": "zIndexManager",
        "owner": "Ext.Component",
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
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.form.field.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": true,
  "name": "Ext.form.field.Text",
  "alternateClassNames": [
    "Ext.form.TextField",
    "Ext.form.Text"
  ],
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "static": false,
  "author": null,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [
    "textfield"
  ]
});