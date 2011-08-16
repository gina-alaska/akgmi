Ext.data.JsonP.Ext_data_ResultSet({
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
  "doc": "<p>Simple wrapper class that represents a set of records returned by a Proxy.</p>\n\n",
  "extends": "Object",
  "href": "ResultSet.html#Ext-data-ResultSet",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "ResultSet.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Number",
        "doc": "<p>The number of records in this ResultSet. Note that total may differ from this number</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-count",
        "linenr": 16,
        "html_filename": "ResultSet.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of records in this ResultSet. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "cfg",
        "name": "count",
        "owner": "Ext.data.ResultSet",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the records have already been loaded. This is only meaningful when dealing with\nSQL-backed proxies</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-loaded",
        "linenr": 9,
        "html_filename": "ResultSet.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True if the records have already been loaded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "cfg",
        "name": "loaded",
        "owner": "Ext.data.ResultSet",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.data.Model[]",
        "doc": "<p>The array of record instances. Required</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-records",
        "linenr": 35,
        "html_filename": "ResultSet.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The array of record instances. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "cfg",
        "name": "records",
        "owner": "Ext.data.ResultSet",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True if the ResultSet loaded successfully, false if any errors were encountered</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-success",
        "linenr": 29,
        "html_filename": "ResultSet.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "cfg",
        "name": "success",
        "owner": "Ext.data.ResultSet",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The total number of records reported by the data source. This ResultSet may form a subset of\nthose records (see count)</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-cfg-total",
        "linenr": 22,
        "html_filename": "ResultSet.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The total number of records reported by the data source. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "cfg",
        "name": "total",
        "owner": "Ext.data.ResultSet",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates the resultSet</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-method-constructor",
        "linenr": 39,
        "html_filename": "ResultSet.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config object.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates the resultSet ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.ResultSet",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Number",
        "doc": "<p>DEPRECATED - will be removed in Ext JS 5.0. This is just a copy of this.total - use that instead</p>\n",
        "href": "ResultSet.html#Ext-data-ResultSet-property-totalRecords",
        "linenr": 46,
        "html_filename": "ResultSet.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "DEPRECATED - will be removed in Ext JS 5.0. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
        "private": false,
        "tagname": "property",
        "name": "totalRecords",
        "owner": "Ext.data.ResultSet",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ResultSet.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.ResultSet",
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