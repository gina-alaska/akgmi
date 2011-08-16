Ext.data.JsonP.Ext_JSON({
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
  "doc": "<p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n",
  "extends": null,
  "href": "JSON3.html#Ext-JSON",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "JSON3.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
        "href": "JSON3.html#Ext-JSON-method-decode",
        "linenr": 129,
        "html_filename": "JSON3.html",
        "alias": null,
        "return": {
          "doc": "<p>The resulting object</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The JSON string</p>\n",
            "type": "String",
            "optional": false,
            "name": "json"
          },
          {
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "safe"
          }
        ],
        "deprecated": null,
        "shortDoc": "Decodes (parses) a JSON string to an object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "tagname": "method",
        "name": "decode",
        "owner": "Ext.JSON",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Encodes an Object, Array or other value</p>\n",
        "href": "JSON3.html#Ext-JSON-method-encode",
        "linenr": 112,
        "html_filename": "JSON3.html",
        "alias": null,
        "return": {
          "doc": "<p>The JSON string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The variable to encode</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Encodes an Object, Array or other value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "tagname": "method",
        "name": "encode",
        "owner": "Ext.JSON",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code>Ext.JSON.encodeDate = function(d) {\n    return Ext.Date.format(d, '\"Y-m-d\"');\n};\n     </code></pre>\n\n",
        "href": "JSON3.html#Ext-JSON-method-encodeDate",
        "linenr": 91,
        "html_filename": "JSON3.html",
        "alias": null,
        "return": {
          "doc": "<p>The string literal to use in a JSON string.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Date to encode</p>\n",
            "type": "Date",
            "optional": false,
            "name": "d"
          }
        ],
        "deprecated": null,
        "shortDoc": "Encodes a Date. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "tagname": "method",
        "name": "encodeDate",
        "owner": "Ext.JSON",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.JSON",
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