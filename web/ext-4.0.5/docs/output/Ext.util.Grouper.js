Ext.data.JsonP.Ext_util_Grouper({
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
  "doc": "<p>Represents a single grouper that can be applied to a Store. The grouper works\nin the same fashion as the <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a>.</p>\n",
  "extends": "Ext.util.Sorter",
  "href": "Grouper.html#Ext-util-Grouper",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Grouper.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>The direction to sort by. Defaults to ASC</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-cfg-direction",
        "linenr": 87,
        "html_filename": "Sorter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The direction to sort by. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "cfg",
        "name": "direction",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Grouper-cfg-sorterFn\" rel=\"Ext.util.Grouper-cfg-sorterFn\" class=\"docClass\">sorterFn</a> is provided.\nThe property is extracted from the object directly and compared for sorting using the built in\ncomparison operators.</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-cfg-property",
        "linenr": 59,
        "html_filename": "Sorter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The property to sort by. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "cfg",
        "name": "property",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Grouper-cfg-property\" rel=\"Ext.util.Grouper-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-cfg-root",
        "linenr": 76,
        "html_filename": "Sorter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional root property. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "cfg",
        "name": "root",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Grouper-cfg-property\" rel=\"Ext.util.Grouper-cfg-property\" class=\"docClass\">property</a>.\nThis sorter function allows for any kind of custom/complex comparisons.\nThe sorterFn receives two arguments, the objects being compared. The function should return:</p>\n\n<ul>\n<li>-1 if o1 is \"less than\" o2</li>\n<li>0 if o1 is \"equal\" to o2</li>\n<li>1 if o1 is \"greater than\" o2</li>\n</ul>\n\n",
        "href": "Sorter.html#Ext-util-Sorter-cfg-sorterFn",
        "linenr": 65,
        "html_filename": "Sorter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A specific sorter function to execute. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "cfg",
        "name": "sorterFn",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>A function that will be run on each value before\nit is compared in the sorter. The function will receive a single argument,\nthe value.</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-cfg-transform",
        "linenr": 81,
        "html_filename": "Sorter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A function that will be run on each value before\nit is compared in the sorter. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "cfg",
        "name": "transform",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Returns the value for grouping to be used.</p>\n",
        "href": "Grouper.html#Ext-util-Grouper-method-getGroupString",
        "linenr": 19,
        "html_filename": "Grouper.html",
        "alias": null,
        "return": {
          "doc": "<p>The group string for this model</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Model instance</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "instance"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the value for grouping to be used. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Grouper.js",
        "private": false,
        "tagname": "method",
        "name": "getGroupString",
        "owner": "Ext.util.Grouper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set the sorting direction for this sorter.</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-method-setDirection",
        "linenr": 152,
        "html_filename": "Sorter.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The direction to sort in. Should be either 'ASC' or 'DESC'.</p>\n",
            "type": "String",
            "optional": false,
            "name": "direction"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set the sorting direction for this sorter. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "method",
        "name": "setDirection",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Toggles the sorting direction for this sorter.</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-method-toggle",
        "linenr": 162,
        "html_filename": "Sorter.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Toggles the sorting direction for this sorter. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "method",
        "name": "toggle",
        "owner": "Ext.util.Sorter",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Update the sort function for this sorter.</p>\n",
        "href": "Sorter.html#Ext-util-Sorter-method-updateSortFunction",
        "linenr": 171,
        "html_filename": "Sorter.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) A new sorter function for this sorter. If not specified it will use the\ndefault sorting function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Update the sort function for this sorter. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "tagname": "method",
        "name": "updateSortFunction",
        "owner": "Ext.util.Sorter",
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
  "singleton": false,
  "protected": false,
  "superclasses": [
    "Ext.util.Sorter"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Grouper.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Grouper",
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