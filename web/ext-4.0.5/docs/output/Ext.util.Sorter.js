Ext.data.JsonP.Ext_util_Sorter({
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
  "doc": "<p>Represents a single sorter that can be applied to a Store. The sorter is used\nto compare two values against each other for the purpose of ordering them. Ordering\nis achieved by specifying either:\n- <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">A sorting property</a>\n- <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">A sorting function</a></p>\n\n<p>As a contrived example, we can specify a custom sorter that sorts by rank:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: ['name', 'rank']\n});\n\nExt.create('Ext.data.Store', {\n    model: 'Person',\n    proxy: 'memory',\n    sorters: [{\n        sorterFn: function(o1, o2){\n            var getRank = function(o){\n                var name = o.get('rank');\n                if (name === 'first') {\n                    return 1;\n                } else if (name === 'second') {\n                    return 2;\n                } else {\n                    return 3;\n                }\n            },\n            rank1 = getRank(o1),\n            rank2 = getRank(o2);\n\n            if (rank1 === rank2) {\n                return 0;\n            }\n\n            return rank1 &lt; rank2 ? -1 : 1;\n        }\n    }],\n    data: [{\n        name: 'Person1',\n        rank: 'second'\n    }, {\n        name: 'Person2',\n        rank: 'third'\n    }, {\n        name: 'Person3',\n        rank: 'first'\n    }] \n});\n</code></pre>\n",
  "extends": "Object",
  "href": "Sorter.html#Ext-util-Sorter",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Sorter.html",
  "subclasses": [
    "Ext.util.Grouper"
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
        "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">sorterFn</a> is provided.\nThe property is extracted from the object directly and compared for sorting using the built in\ncomparison operators.</p>\n",
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
        "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
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
        "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a>.\nThis sorter function allows for any kind of custom/complex comparisons.\nThe sorterFn receives two arguments, the objects being compared. The function should return:</p>\n\n<ul>\n<li>-1 if o1 is \"less than\" o2</li>\n<li>0 if o1 is \"equal\" to o2</li>\n<li>1 if o1 is \"greater than\" o2</li>\n</ul>\n\n",
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

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Sorter",
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