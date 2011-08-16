Ext.data.JsonP.Ext_data_validations({
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
  "doc": "<p>This singleton contains a set of validation functions that can be used to validate any type of data. They are most\noften used in <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically set up and executed.</p>\n",
  "extends": "Object",
  "href": "validations.html#Ext-data-validations",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "validations.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']}]\n</code></pre>\n",
        "href": "validations.html#Ext-data-validations-method-exclusion",
        "linenr": 113,
        "html_filename": "validations.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the value is not present in the list</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>The value to validate</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Validates that the given value is present in the configured list. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "method",
        "name": "exclusion",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the given value passes validation against the configured <code>matcher</code> regex.\nFor example:</p>\n\n<pre><code>validations: [{type: 'format', field: 'username', matcher: /([a-z]+)[0-9]{2,3}/}]\n</code></pre>\n",
        "href": "validations.html#Ext-data-validations-method-format",
        "linenr": 85,
        "html_filename": "validations.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the value passes the format validation</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>The value to validate</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the given value passes validation against the configured matcher regex. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "method",
        "name": "format",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Validates that the given value is present in the configured <code>list</code>.\nFor example:</p>\n\n<pre><code>validations: [{type: 'inclusion', field: 'gender', list: ['Male', 'Female']}]\n</code></pre>\n",
        "href": "validations.html#Ext-data-validations-method-inclusion",
        "linenr": 99,
        "html_filename": "validations.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the value is present in the list</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>The value to validate</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Validates that the given value is present in the configured list. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "method",
        "name": "inclusion",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the given value is between the configured min and max values.\nFor example:</p>\n\n<pre><code>validations: [{type: 'length', field: 'name', min: 2}]\n</code></pre>\n",
        "href": "validations.html#Ext-data-validations-method-length",
        "linenr": 59,
        "html_filename": "validations.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the value passes validation</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>The value to validate</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the given value is between the configured min and max values. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "method",
        "name": "length",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Validates that the given value is present.\nFor example:</p>\n\n<pre><code>validations: [{type: 'presence', field: 'age'}]\n</code></pre>\n",
        "href": "validations.html#Ext-data-validations-method-presence",
        "linenr": 41,
        "html_filename": "validations.html",
        "alias": null,
        "return": {
          "doc": "<p>True if validation passed</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Config object</p>\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          },
          {
            "doc": "<p>The value to validate</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Validates that the given value is present. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "method",
        "name": "presence",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "String",
        "doc": "<p>The default error message used when an exclusion validation fails.</p>\n",
        "href": "validations.html#Ext-data-validations-property-exclusionMessage",
        "linenr": 35,
        "html_filename": "validations.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "property",
        "name": "exclusionMessage",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>The default error message used when a format validation fails.</p>\n",
        "href": "validations.html#Ext-data-validations-property-formatMessage",
        "linenr": 23,
        "html_filename": "validations.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "property",
        "name": "formatMessage",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default error message used when an inclusion validation fails.</p>\n",
        "href": "validations.html#Ext-data-validations-property-inclusionMessage",
        "linenr": 29,
        "html_filename": "validations.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "property",
        "name": "inclusionMessage",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default error message used when a length validation fails.</p>\n",
        "href": "validations.html#Ext-data-validations-property-lengthMessage",
        "linenr": 17,
        "html_filename": "validations.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "property",
        "name": "lengthMessage",
        "owner": "Ext.data.validations",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default error message used when a presence validation fails.</p>\n",
        "href": "validations.html#Ext-data-validations-property-presenceMessage",
        "linenr": 11,
        "html_filename": "validations.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "tagname": "property",
        "name": "presenceMessage",
        "owner": "Ext.data.validations",
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

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.validations",
  "alternateClassNames": [

  ],
  "docauthor": null,
  "static": false,
  "author": "Ed Spencer",
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});