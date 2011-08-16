Ext.data.JsonP.Ext_data_Request({
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
  "doc": "<p>Simple class that represents a Request that will be made by any <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a> subclass.\nAll this class does is standardize the representation of a Request as used by any ServerProxy subclass,\nit does not contain any actual logic or perform the request itself.</p>\n\n",
  "extends": "Object",
  "href": "Request.html#Ext-data-Request",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Request.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>The name of the action this Request represents. Usually one of 'create', 'read', 'update' or 'destroy'</p>\n",
        "href": "Request.html#Ext-data-Request-cfg-action",
        "linenr": 12,
        "html_filename": "Request.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the action this Request represents. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "tagname": "cfg",
        "name": "action",
        "owner": "Ext.data.Request",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The HTTP method to use on this Request (defaults to 'GET'). Should be one of 'GET', 'POST', 'PUT' or 'DELETE'</p>\n",
        "href": "Request.html#Ext-data-Request-cfg-method",
        "linenr": 22,
        "html_filename": "Request.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The HTTP method to use on this Request (defaults to 'GET'). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "tagname": "cfg",
        "name": "method",
        "owner": "Ext.data.Request",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>HTTP request params. The Proxy and its Writer have access to and can modify this object.</p>\n",
        "href": "Request.html#Ext-data-Request-cfg-params",
        "linenr": 17,
        "html_filename": "Request.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "HTTP request params. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "tagname": "cfg",
        "name": "params",
        "owner": "Ext.data.Request",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The url to access on this Request</p>\n",
        "href": "Request.html#Ext-data-Request-cfg-url",
        "linenr": 27,
        "html_filename": "Request.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "tagname": "cfg",
        "name": "url",
        "owner": "Ext.data.Request",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates the Request object.</p>\n",
        "href": "Request.html#Ext-data-Request-method-constructor",
        "linenr": 32,
        "html_filename": "Request.html",
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
        "shortDoc": "Creates the Request object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.Request",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.Request",
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