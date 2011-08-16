Ext.data.JsonP.Ext_util_Filter({
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
  "doc": "<p>Represents a filter that can be applied to a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. Can either simply\nfilter on a property/value pair or pass in a filter function with custom logic. Filters are always used in the context\nof MixedCollections, though <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s frequently create them when filtering and searching on their\nrecords. Example usage:</p>\n\n\n<pre><code>//set up a fictional MixedCollection containing a few people to filter on\nvar allNames = new Ext.util.MixedCollection();\nallNames.addAll([\n    {id: 1, name: 'Ed',    age: 25},\n    {id: 2, name: 'Jamie', age: 37},\n    {id: 3, name: 'Abe',   age: 32},\n    {id: 4, name: 'Aaron', age: 26},\n    {id: 5, name: 'David', age: 32}\n]);\n\nvar ageFilter = new Ext.util.Filter({\n    property: 'age',\n    value   : 32\n});\n\nvar longNameFilter = new Ext.util.Filter({\n    filterFn: function(item) {\n        return item.name.length > 4;\n    }\n});\n\n//a new MixedCollection with the 3 names longer than 4 characters\nvar longNames = allNames.filter(longNameFilter);\n\n//a new MixedCollection with the 2 people of age 24:\nvar youngFolk = allNames.filter(ageFilter);\n</code></pre>\n\n",
  "extends": "Object",
  "href": "Filter.html#Ext-util-Filter",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Filter.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>True to allow any match - no regex start/end line anchors will be added. Defaults to false</p>\n",
        "href": "Filter.html#Ext-util-Filter-cfg-anyMatch",
        "linenr": 51,
        "html_filename": "Filter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to allow any match - no regex start/end line anchors will be added. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "cfg",
        "name": "anyMatch",
        "owner": "Ext.util.Filter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to make the regex case sensitive (adds 'i' switch to regex). Defaults to false.</p>\n",
        "href": "Filter.html#Ext-util-Filter-cfg-caseSensitive",
        "linenr": 62,
        "html_filename": "Filter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to make the regex case sensitive (adds 'i' switch to regex). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "cfg",
        "name": "caseSensitive",
        "owner": "Ext.util.Filter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.\nIgnored if anyMatch is true.</p>\n",
        "href": "Filter.html#Ext-util-Filter-cfg-exactMatch",
        "linenr": 56,
        "html_filename": "Filter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to force exact match (^ and $ characters added to the regex). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "cfg",
        "name": "exactMatch",
        "owner": "Ext.util.Filter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>A custom filter function which is passed each item in the <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>\nin turn. Should return true to accept each item or false to reject it</p>\n",
        "href": "Filter.html#Ext-util-Filter-cfg-filterFn",
        "linenr": 46,
        "html_filename": "Filter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A custom filter function which is passed each item in the Ext.util.MixedCollection\nin turn. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "cfg",
        "name": "filterFn",
        "owner": "Ext.util.Filter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The property to filter on. Required unless a <a href=\"#/api/Ext.util.Filter-cfg-filterFn\" rel=\"Ext.util.Filter-cfg-filterFn\" class=\"docClass\">filterFn</a> is passed</p>\n",
        "href": "Filter.html#Ext-util-Filter-cfg-property",
        "linenr": 42,
        "html_filename": "Filter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The property to filter on. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "cfg",
        "name": "property",
        "owner": "Ext.util.Filter",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Optional root property. This is mostly useful when filtering a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Filter-cfg-property\" rel=\"Ext.util.Filter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
        "href": "Filter.html#Ext-util-Filter-cfg-root",
        "linenr": 67,
        "html_filename": "Filter.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Optional root property. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "cfg",
        "name": "root",
        "owner": "Ext.util.Filter",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Filter.</p>\n",
        "href": "Filter.html#Ext-util-Filter-method-constructor",
        "linenr": 72,
        "html_filename": "Filter.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config object</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new Filter. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.util.Filter",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Filter",
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