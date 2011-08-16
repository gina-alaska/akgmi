Ext.data.JsonP.Ext_form_Labelable({
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
  "doc": "<p>A mixin which allows a component to be configured and decorated with a label and/or error message as is\ncommon for form fields. This is used by e.g. <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> and <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>\nto let them be managed by the Field layout.</p>\n\n<p>*NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It\nis more likely you will want to use one of the component classes that import this mixin, such as\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> or <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a>.</p>\n\n<p>Use of this mixin does not make a component a field in the logical sense, meaning it does not provide any\nlogic or state related to values or validation; that is handled by the related <a href=\"#/api/Ext.form.field.Field\" rel=\"Ext.form.field.Field\" class=\"docClass\">Ext.form.field.Field</a>\nmixin. These two mixins may be used separately (for example <a href=\"#/api/Ext.form.FieldContainer\" rel=\"Ext.form.FieldContainer\" class=\"docClass\">Ext.form.FieldContainer</a> is Labelable but not a\nField), or in combination (for example <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> implements both and has logic for connecting the\ntwo.)</p>\n\n<p>Component classes which use this mixin should use the Field layout\nor a derivation thereof to properly size and position the label and message according to the component config.\nThey must also call the <a href=\"#/api/Ext.form.Labelable-method-initLabelable\" rel=\"Ext.form.Labelable-method-initLabelable\" class=\"docClass\">initLabelable</a> method during component initialization to ensure the mixin gets\nset up correctly.</p>\n",
  "extends": "Ext.Base",
  "href": "Labelable.html#Ext-form-Labelable",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Labelable.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.Labelable-method-unsetActiveError\" rel=\"Ext.form.Labelable-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n",
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
        "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n",
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
        "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n",
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
        "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.Labelable-cfg-fieldBodyCls\" rel=\"Ext.form.Labelable-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to empty.</p>\n",
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
        "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.Labelable-cfg-labelPad\" rel=\"Ext.form.Labelable-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n",
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
        "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.Labelable-cfg-hideLabel\" rel=\"Ext.form.Labelable-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n",
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
        "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.Labelable-cfg-labelSeparator\" rel=\"Ext.form.Labelable-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.Labelable-cfg-hideEmptyLabel\" rel=\"Ext.form.Labelable-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n",
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
        "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.Labelable-cfg-labelWidth\" rel=\"Ext.form.Labelable-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n",
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
        "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.\nThis (single) CSS class is used to formulate the renderSelector and drives the field\nlayout where it is concatenated with a hyphen ('-') and <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a>. To add\nadditional classes, use <a href=\"#/api/Ext.form.Labelable-cfg-labelClsExtra\" rel=\"Ext.form.Labelable-cfg-labelClsExtra\" class=\"docClass\">labelClsExtra</a>.</p>\n",
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
        "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n",
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
        "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n",
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
        "doc": "<p>The width of the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.Labelable-cfg-labelAlign\" rel=\"Ext.form.Labelable-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n",
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
        "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.Labelable-method-getSubTplMarkup\" rel=\"Ext.form.Labelable-method-getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n",
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
        "type": "Boolean",
        "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n",
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
      }
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
        "doc": "<p>Calculate and return the natural width of the bodyEl. Override to provide custom logic.\nNote for implementors: if at all possible this method should be overridden with a custom implementation\nthat can avoid anything that would cause the browser to reflow, e.g. querying offsetWidth.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getBodyNaturalWidth",
        "linenr": 452,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Calculate and return the natural width of the bodyEl. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getBodyNaturalWidth",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.Labelable-cfg-fieldLabel\" rel=\"Ext.form.Labelable-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
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
        "doc": "<p>Get the input id, if any, for this component. This is used as the \"for\" attribute on the label element.\nImplementing subclasses may also use this as e.g. the id for their own <tt>input</tt> element.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getInputId",
        "linenr": 327,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "<p>The input id</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the input id, if any, for this component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getInputId",
        "owner": "Ext.form.Labelable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Generates the arguments for the field decorations <a href=\"#/api/Ext.form.Labelable-cfg-labelableRenderTpl\" rel=\"Ext.form.Labelable-cfg-labelableRenderTpl\" class=\"docClass\">rendering template</a>.</p>\n",
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
        "doc": "<p>Gets the markup to be inserted into the outer template's bodyEl. Defaults to empty string, should\nbe implemented by classes including this mixin as needed.</p>\n",
        "href": "Labelable.html#Ext-form-Labelable-method-getSubTplMarkup",
        "linenr": 317,
        "html_filename": "Labelable.html",
        "alias": null,
        "return": {
          "doc": "<p>The markup to be inserted</p>\n",
          "type": "String"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the markup to be inserted into the outer template's bodyEl. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "tagname": "method",
        "name": "getSubTplMarkup",
        "owner": "Ext.form.Labelable",
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
        "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveErrors\" rel=\"Ext.form.Labelable-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
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
        "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.Labelable-cfg-activeErrorsTpl\" rel=\"Ext.form.Labelable-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
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
      }
    ],
    "event": [
      {
        "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.Labelable-method-setActiveError\" rel=\"Ext.form.Labelable-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n",
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
        "type": "Ext.Element",
        "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.Labelable-cfg-msgTarget\" rel=\"Ext.form.Labelable-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.form.Labelable",
  "alternateClassNames": [

  ],
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "static": false,
  "author": null,
  "mixedInto": [
    "Ext.form.field.HtmlEditor",
    "Ext.form.field.Base",
    "Ext.form.FieldContainer"
  ],
  "inheritable": false,
  "xtypes": [

  ]
});