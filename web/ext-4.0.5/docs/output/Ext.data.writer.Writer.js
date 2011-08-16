Ext.data.JsonP.Ext_data_writer_Writer({
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
  "doc": "<p>Base Writer class used by most subclasses of <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a>. This class is\nresponsible for taking a set of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> objects and a <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a>\nobject and modifying that request based on the Operations.</p>\n\n\n\n\n<p>For example a <a href=\"#/api/Ext.data.writer.Json\" rel=\"Ext.data.writer.Json\" class=\"docClass\">Ext.data.writer.Json</a> would format the Operations and their <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> \ninstances based on the config options passed to the JsonWriter's constructor.</p>\n\n\n\n\n<p>Writers are not needed for any kind of local storage - whether via a\n<a href=\"#/api/Ext.data.proxy.WebStorage\" rel=\"Ext.data.proxy.WebStorage\" class=\"docClass\">Web Storage proxy</a> (see <a href=\"#/api/Ext.data.proxy.LocalStorage\" rel=\"Ext.data.proxy.LocalStorage\" class=\"docClass\">localStorage</a>\nand <a href=\"#/api/Ext.data.proxy.SessionStorage\" rel=\"Ext.data.proxy.SessionStorage\" class=\"docClass\">sessionStorage</a>) or just in memory via a\n<a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">MemoryProxy</a>.</p>\n\n",
  "extends": "Object",
  "href": "Writer.html#Ext-data-writer-Writer",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Writer.html",
  "subclasses": [
    "Ext.data.writer.Xml",
    "Ext.data.writer.Json"
  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'first',\n        mapping: 'firstName'\n    }, {\n        name: 'last',\n        mapping: 'lastName'\n    }, {\n        name: 'age'\n    }]\n});\nnew Ext.data.writer.Writer({\n    writeAllFields: true,\n    nameProperty: 'mapping'\n});\n\n// This will be sent to the server\n{\n    firstName: 'first name value',\n    lastName: 'last name value',\n    age: 1\n}\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-nameProperty",
        "linenr": 29,
        "html_filename": "Writer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This property is used to read the key for each value that will be sent to the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "tagname": "cfg",
        "name": "nameProperty",
        "owner": "Ext.data.writer.Writer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-writeAllFields",
        "linenr": 22,
        "html_filename": "Writer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to write all fields from the record to the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "tagname": "cfg",
        "name": "writeAllFields",
        "owner": "Ext.data.writer.Writer",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Writer.</p>\n",
        "href": "Writer.html#Ext-data-writer-Writer-method-constructor",
        "linenr": 62,
        "html_filename": "Writer.html",
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
        "shortDoc": "Creates new Writer. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.data.writer.Writer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n",
        "href": "Writer.html#Ext-data-writer-Writer-method-getRecordData",
        "linenr": 88,
        "html_filename": "Writer.html",
        "alias": null,
        "return": {
          "doc": "<p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The record that we are writing to the server.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "record"
          }
        ],
        "deprecated": null,
        "shortDoc": "Formats the data for each record before sending it to the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "tagname": "method",
        "name": "getRecordData",
        "owner": "Ext.data.writer.Writer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Prepares a Proxy's <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n",
        "href": "Writer.html#Ext-data-writer-Writer-method-write",
        "linenr": 70,
        "html_filename": "Writer.html",
        "alias": null,
        "return": {
          "doc": "<p>The modified request object</p>\n",
          "type": "Ext.data.Request"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The request object</p>\n",
            "type": "Ext.data.Request",
            "optional": false,
            "name": "request"
          }
        ],
        "deprecated": null,
        "shortDoc": "Prepares a Proxy's Ext.data.Request object ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "tagname": "method",
        "name": "write",
        "owner": "Ext.data.writer.Writer",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.writer.Writer",
  "alternateClassNames": [
    "Ext.data.DataWriter",
    "Ext.data.Writer"
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