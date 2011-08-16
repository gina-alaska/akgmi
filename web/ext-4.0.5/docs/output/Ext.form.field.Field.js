Ext.data.JsonP.Ext_form_field_Field({
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
  "doc": "<p>This mixin provides a common interface for the logical behavior and state of form fields, including:</p>\n\n<ul>\n<li>Getter and setter methods for field values</li>\n<li>Events and methods for tracking value and validity changes</li>\n<li>Methods for triggering validation</li>\n</ul>\n\n\n<p>*NOTE**: When implementing custom fields, it is most likely that you will want to extend the <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\ncomponent class rather than using this mixin directly, as BaseField contains additional logic for generating an\nactual DOM complete with <a href=\"#/api/Ext.form.Labelable\" rel=\"Ext.form.Labelable\" class=\"docClass\">label and error message</a> display and a form input field,\nplus methods that bind the Field value getters and setters to the input field's value.</p>\n\n<p>If you do want to implement this mixin directly and don't want to extend <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>, then\nyou will most likely want to override the following methods with custom implementations: <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">getValue</a>,\n<a href=\"#/api/Ext.form.field.Field-method-setValue\" rel=\"Ext.form.field.Field-method-setValue\" class=\"docClass\">setValue</a>, and <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">getErrors</a>. Other methods may be overridden as needed but their base\nimplementations should be sufficient for common cases. You will also need to make sure that <a href=\"#/api/Ext.form.field.Field-method-initField\" rel=\"Ext.form.field.Field-method-initField\" class=\"docClass\">initField</a>\nis called during the component's initialization.</p>\n",
  "extends": "Ext.Base",
  "href": "Field.html#Ext-form-field-Field",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Field.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
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
        "doc": "<p>The name of the field (defaults to undefined). By default this is used as the parameter\nname when including the <a href=\"#/api/Ext.form.field.Field-method-getSubmitData\" rel=\"Ext.form.field.Field-method-getSubmitData\" class=\"docClass\">field value</a> in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.\nTo prevent the field from being included in the form submit, set <a href=\"#/api/Ext.form.field.Field-cfg-submitValue\" rel=\"Ext.form.field.Field-cfg-submitValue\" class=\"docClass\">submitValue</a> to <tt>false</tt>.</p>\n",
        "href": "Field.html#Ext-form-field-Field-cfg-name",
        "linenr": 37,
        "html_filename": "Field.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the field (defaults to undefined). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "cfg",
        "name": "name",
        "owner": "Ext.form.field.Field",
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
        "type": "Boolean",
        "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to <tt>true</tt>. If the validation results in a change in the field's validity, a\n<a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event will be fired. This allows the field to show feedback about the\nvalidity of its contents immediately as the user is typing.</p>\n\n\n<p>When set to <tt>false</tt>, feedback will not be immediate. However the form will still be validated\nbefore submitting if the <tt>clientValidation</tt> option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is\nenabled, or if the field or form are validated manually.</p>\n\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a>for controlling how changes to the field's value are detected.</p>\n\n",
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
      }
    ],
    "method": [
      {
        "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent excessive firing of <a href=\"#/api/Ext.form.field.Field-event-change\" rel=\"Ext.form.field.Field-event-change\" class=\"docClass\">change</a> events. This is useful for instance\nif the field has sub-fields which are being updated as a group; you don't want the container\nfield to check its own changed state for each subfield change.</p>\n",
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
        "doc": "<p>Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:</p>\n\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.Field-event-change\" rel=\"Ext.form.field.Field-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.Field-cfg-validateOnChange\" rel=\"Ext.form.field.Field-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\n<a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange event</a> if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.Field-event-dirtychange\" rel=\"Ext.form.field.Field-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
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
        "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time\nit was checked, fires the <a href=\"#/api/Ext.form.field.Field-event-dirtychange\" rel=\"Ext.form.field.Field-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
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
        "doc": "<p>Clear any invalid styles/messages for this field. Components using this mixin should implement\nthis method to update the components rendering to clear any existing messages.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>true</code> if the value does not <i>pass</i> validation. So simply clearing a field's errors\nwill not necessarily allow submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-clearInvalid",
        "linenr": 395,
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
        "shortDoc": "Clear any invalid styles/messages for this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "clearInvalid",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.Field-method-isFileUpload\" rel=\"Ext.form.field.Field-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference\nto the file input DOM element holding the user's selected file. The input will be appended into\nthe submission form and will not be returned, so this method should also create a replacement.</p>\n",
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
        "doc": "<p>Runs this field's validators and returns an array of error messages for any validation failures.\nThis is called internally during validation and would not usually need to be used manually.</p>\n\n\n<p>Each subclass should override or augment the return value to provide their own errors.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-getErrors",
        "linenr": 306,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>All error messages for this field; an empty Array if none.</p>\n",
          "type": "String[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to get errors for (defaults to the current field value)</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Runs this field's validators and returns an array of error messages for any validation failures. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "getErrors",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when\n<a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value\npair, the name being this field's <a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More\nadvanced field implementations may return more than one name-value pair. The returned values will be\nsaved to the corresponding field names in the Model.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
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
        "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.Field-method-getName\" rel=\"Ext.form.field.Field-method-getName\" class=\"docClass\">name</a> and the\nvalue being its current stringified value. More advanced field implementations may return more than one\nname-value pair.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
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
        "doc": "<p>Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular field (e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>).</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-getValue",
        "linenr": 137,
        "html_filename": "Field.html",
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
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "getValue",
        "owner": "Ext.form.field.Field",
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
        "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nthen the <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a> is updated when the values are loaded by\n<a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n\n",
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
        "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override\nthis to provide custom comparison logic appropriate for the particular field's data type.</p>\n",
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
        "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If this returns true, the <a href=\"#/api/Ext.form.field.Field-method-extractFileInput\" rel=\"Ext.form.field.Field-method-extractFileInput\" class=\"docClass\">extractFileInput</a>\nmethod must also be implemented to return the corresponding file input element.</p>\n",
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
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value. The <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event will not be fired; use <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a>\ninstead if you want the event to fire. <b>Note</b>: <a href=\"#/api/Ext.form.field.Field-cfg-disabled\" rel=\"Ext.form.field.Field-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Implementations are encouraged to ensure that this method does not have side-effects such as\ntriggering error message display.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-isValid",
        "linenr": 317,
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
        "shortDoc": "Returns whether or not the field value is currently valid by validating the\nfield's current value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "isValid",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Associate one or more error messages with this field. Components using this mixin should implement\nthis method to update the component's rendering to display the messages.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.Field-method-validate\" rel=\"Ext.form.field.Field-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>false</code> if the value does <i>pass</i> validation. So simply marking a Field as invalid\nwill not prevent submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
        "href": "Field.html#Ext-form-field-Field-method-markInvalid",
        "linenr": 383,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The error message(s) for the field.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "errors"
          }
        ],
        "deprecated": null,
        "shortDoc": "Associate one or more error messages with this field. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "markInvalid",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resets the current field value to the originally loaded value and clears any validation messages.\nSee <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a></p>\n",
        "href": "Field.html#Ext-form-field-Field-method-reset",
        "linenr": 212,
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
        "shortDoc": "Resets the current field value to the originally loaded value and clears any validation messages. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "reset",
        "owner": "Ext.form.field.Field",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.Field-property-originalValue\" rel=\"Ext.form.field.Field-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.Field-method-getValue\" rel=\"Ext.form.field.Field-method-getValue\" class=\"docClass\">value</a>.\nThis is called by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
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
        "doc": "<p>Sets a data value into the field and runs the change detection and validation.</p>\n",
        "href": "Field.html#Ext-form-field-Field-method-setValue",
        "linenr": 146,
        "html_filename": "Field.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.form.field.Field"
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
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "tagname": "method",
        "name": "setValue",
        "owner": "Ext.form.field.Field",
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
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.Field-method-getErrors\" rel=\"Ext.form.field.Field-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value, and fires the <a href=\"#/api/Ext.form.field.Field-event-validitychange\" rel=\"Ext.form.field.Field-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has\nchanged since the last validation. <b>Note</b>: <a href=\"#/api/Ext.form.field.Field-cfg-disabled\" rel=\"Ext.form.field.Field-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error\nmessage display. To validate without side-effects, use <a href=\"#/api/Ext.form.field.Field-method-isValid\" rel=\"Ext.form.field.Field-method-isValid\" class=\"docClass\">isValid</a>.</p>\n\n",
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
      }
    ],
    "event": [
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
        "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.Field-method-isDirty\" rel=\"Ext.form.field.Field-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n",
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
        "type": "Object",
        "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.Field-cfg-value\" rel=\"Ext.form.field.Field-cfg-value\" class=\"docClass\">value</a> configuration, or as loaded by\nthe last form load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nsetting is <code>true</code>.</p>\n",
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.form.field.Field",
  "alternateClassNames": [

  ],
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "static": false,
  "author": null,
  "mixedInto": [
    "Ext.form.CheckboxGroup",
    "Ext.form.field.HtmlEditor",
    "Ext.form.field.Base"
  ],
  "inheritable": false,
  "xtypes": [

  ]
});