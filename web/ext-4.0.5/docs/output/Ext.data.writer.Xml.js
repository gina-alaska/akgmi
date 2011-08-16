Ext.data.JsonP.Ext_data_writer_Xml({
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
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n",
  "extends": "Ext.data.writer.Writer",
  "href": "Xml2.html#Ext-data-writer-Xml",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Xml2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>The root to be used if <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot",
        "linenr": 31,
        "html_filename": "Xml2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "tagname": "cfg",
        "name": "defaultDocumentRoot",
        "owner": "Ext.data.writer.Xml",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The name of the root element of the document. Defaults to <tt>'xmlData'</tt>.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-documentRoot",
        "linenr": 24,
        "html_filename": "Xml2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the root element of the document. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "tagname": "cfg",
        "name": "documentRoot",
        "owner": "Ext.data.writer.Xml",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A header to use in the XML document (such as setting the encoding or version).\nDefaults to <tt>''</tt>.</p>\n",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-header",
        "linenr": 37,
        "html_filename": "Xml2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A header to use in the XML document (such as setting the encoding or version). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "tagname": "cfg",
        "name": "header",
        "owner": "Ext.data.writer.Xml",
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
        "doc": "<p>The name of the node to use for each record. Defaults to <tt>'record'</tt>.</p>\n",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-record",
        "linenr": 43,
        "html_filename": "Xml2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The name of the node to use for each record. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "tagname": "cfg",
        "name": "record",
        "owner": "Ext.data.writer.Xml",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.data.writer.Xml",
  "alternateClassNames": [
    "Ext.data.XmlWriter"
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