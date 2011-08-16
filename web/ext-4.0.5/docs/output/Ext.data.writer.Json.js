Ext.data.JsonP.Ext_data_writer_Json({
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
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in a JSON format.\nThe <a href=\"#/api/Ext.data.writer.Json-cfg-allowSingle\" rel=\"Ext.data.writer.Json-cfg-allowSingle\" class=\"docClass\">allowSingle</a> configuration can be set to false to force the records to always be\nencoded in an array, even if there is only a single record being sent.</p>\n",
  "extends": "Ext.data.writer.Writer",
  "href": "Json2.html#Ext-data-writer-Json",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Json2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>False to ensure that records are always wrapped in an array, even if there is only\none record being sent. When there is more than one record, they will always be encoded into an array.\nDefaults to <tt>true</tt>. Example:</p>\n\n<pre><code>// with allowSingle: true\n\"root\": {\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}\n\n// with allowSingle: false\n\"root\": [{\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}]\n</code></pre>\n\n",
        "href": "Json2.html#Ext-data-writer-Json-cfg-allowSingle",
        "linenr": 33,
        "html_filename": "Json2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "False to ensure that records are always wrapped in an array, even if there is only\none record being sent. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "tagname": "cfg",
        "name": "allowSingle",
        "owner": "Ext.data.writer.Json",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to use Ext.encode() on the data before sending. Defaults to <tt>false</tt>.\nThe encode option should only be set to true when a <a href=\"#/api/Ext.data.writer.Json-cfg-root\" rel=\"Ext.data.writer.Json-cfg-root\" class=\"docClass\">root</a> is defined, because the values will be\nsent as part of the request parameters as opposed to a raw post. The root will be the name of the parameter\nsent to the server.</p>\n",
        "href": "Json2.html#Ext-data-writer-Json-cfg-encode",
        "linenr": 25,
        "html_filename": "Json2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to use Ext.encode() on the data before sending. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "tagname": "cfg",
        "name": "encode",
        "owner": "Ext.data.writer.Json",
        "static": false,
        "inheritable": false
      },
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
        "type": "String",
        "doc": "<p>The key under which the records in this Writer will be placed. Defaults to <tt>undefined</tt>.\nExample generated request, using root: 'records':</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n\n",
        "href": "Json2.html#Ext-data-writer-Json-cfg-root",
        "linenr": 16,
        "html_filename": "Json2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The key under which the records in this Writer will be placed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "tagname": "cfg",
        "name": "root",
        "owner": "Ext.data.writer.Json",
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
    "Ext.data.writer.Writer"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.writer.Json",
  "alternateClassNames": [
    "Ext.data.JsonWriter"
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