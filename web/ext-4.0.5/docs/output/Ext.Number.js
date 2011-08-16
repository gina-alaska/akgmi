Ext.data.JsonP.Ext_Number({
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
  "doc": "<p>A collection of useful static methods to deal with numbers</p>\n",
  "extends": null,
  "href": "Number3.html#Ext-Number",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Number3.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n",
        "href": "Number3.html#Ext-Number-method-constrain",
        "linenr": 13,
        "html_filename": "Number3.html",
        "alias": null,
        "return": {
          "doc": "<p>The constrained value if outside the range, otherwise the current value</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The number to check</p>\n",
            "type": "Number",
            "optional": false,
            "name": "number"
          },
          {
            "doc": "<p>The minimum number in the range</p>\n",
            "type": "Number",
            "optional": false,
            "name": "min"
          },
          {
            "doc": "<p>The maximum number in the range</p>\n",
            "type": "Number",
            "optional": false,
            "name": "max"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks whether or not the passed number is within a desired range. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "tagname": "method",
        "name": "constrain",
        "owner": "Ext.Number",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<p>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1</p>\n",
        "href": "Number3.html#Ext-Number-method-from",
        "linenr": 76,
        "html_filename": "Number3.html",
        "alias": null,
        "return": {
          "doc": "<p>value, if numeric, defaultValue otherwise</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The value to return if the original value is non-numeric</p>\n",
            "type": "Number",
            "optional": false,
            "name": "defaultValue"
          }
        ],
        "deprecated": null,
        "shortDoc": "Validate that a value is numeric and convert it to a number if necessary. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "tagname": "method",
        "name": "from",
        "owner": "Ext.Number",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n",
        "href": "Number3.html#Ext-Number-method-snap",
        "linenr": 34,
        "html_filename": "Number3.html",
        "alias": null,
        "return": {
          "doc": "<p>The value of the nearest snap target.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The unsnapped value.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The increment by which the value must move.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "increment"
          },
          {
            "doc": "<p>The minimum value to which the returned value must be constrained. Overrides the increment..</p>\n",
            "type": "Number",
            "optional": false,
            "name": "minValue"
          },
          {
            "doc": "<p>The maximum value to which the returned value must be constrained. Overrides the increment..</p>\n",
            "type": "Number",
            "optional": false,
            "name": "maxValue"
          }
        ],
        "deprecated": null,
        "shortDoc": "Snaps the passed number between stopping points based upon a passed increment value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "tagname": "method",
        "name": "snap",
        "owner": "Ext.Number",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Formats a number using fixed-point notation</p>\n",
        "href": "Number3.html#Ext-Number-method-toFixed",
        "linenr": 61,
        "html_filename": "Number3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The number to format</p>\n",
            "type": "Number",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The number of digits to show after the decimal point</p>\n",
            "type": "Number",
            "optional": false,
            "name": "precision"
          }
        ],
        "deprecated": null,
        "shortDoc": "Formats a number using fixed-point notation ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "tagname": "method",
        "name": "toFixed",
        "owner": "Ext.Number",
        "static": false,
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
  "alias": null,
  "singleton": true,
  "protected": false,
  "superclasses": [

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext.Number",
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