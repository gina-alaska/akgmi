Ext.data.JsonP.Ext_util_Inflector({
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
  "doc": "<p>General purpose inflector class that <a href=\"#/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">pluralizes</a>, <a href=\"#/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">singularizes</a> and\n<a href=\"#/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">ordinalizes</a> words. Sample usage:</p>\n\n\n\n\n<pre><code>//turning singular words into plurals\nExt.util.Inflector.pluralize('word'); //'words'\nExt.util.Inflector.pluralize('person'); //'people'\nExt.util.Inflector.pluralize('sheep'); //'sheep'\n\n//turning plurals into singulars\nExt.util.Inflector.singularize('words'); //'word'\nExt.util.Inflector.singularize('people'); //'person'\nExt.util.Inflector.singularize('sheep'); //'sheep'\n\n//ordinalizing numbers\nExt.util.Inflector.ordinalize(11); //\"11th\"\nExt.util.Inflector.ordinalize(21); //\"21th\"\nExt.util.Inflector.ordinalize(1043); //\"1043rd\"\n</code></pre>\n\n\n\n\n<p><u>Customization</u></p>\n\n\n\n\n<p>The Inflector comes with a default set of US English pluralization rules. These can be augmented with additional\nrules if the default rules do not meet your application's requirements, or swapped out entirely for other languages.\nHere is how we might add a rule that pluralizes \"ox\" to \"oxen\":</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.plural(/^(ox)$/i, \"$1en\");\n</code></pre>\n\n\n\n\n<p>Each rule consists of two items - a regular expression that matches one or more rules, and a replacement string.\nIn this case, the regular expression will only match the string \"ox\", and will replace that match with \"oxen\".\nHere's how we could add the inverse rule:</p>\n\n\n\n\n<pre><code>Ext.util.Inflector.singular(/^(ox)en$/i, \"$1\");\n</code></pre>\n\n\n\n\n<p>Note that the ox/oxen rules are present by default.</p>\n\n",
  "extends": "Object",
  "href": "Inflector.html#Ext-util-Inflector",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Inflector.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Returns the correct <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-classify",
        "linenr": 234,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "<p>The classified version of the word</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The word to classify</p>\n",
            "type": "String",
            "optional": false,
            "name": "word"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the correct Model name for a given string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "classify",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all registered pluralization rules</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-clearPlurals",
        "linenr": 166,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all registered pluralization rules ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "clearPlurals",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all registered singularization rules</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-clearSingulars",
        "linenr": 159,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all registered singularization rules ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "clearSingulars",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-isTransnumeral",
        "linenr": 173,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the word is transnumeral</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The word to test</p>\n",
            "type": "String",
            "optional": false,
            "name": "word"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "isTransnumeral",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-ordinalize",
        "linenr": 244,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "<p>The ordinalized number</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The number to ordinalize</p>\n",
            "type": "Number",
            "optional": false,
            "name": "number"
          }
        ],
        "deprecated": null,
        "shortDoc": "Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "ordinalize",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-plural",
        "linenr": 150,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The matcher regex</p>\n",
            "type": "RegExp",
            "optional": false,
            "name": "matcher"
          },
          {
            "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n",
            "type": "String",
            "optional": false,
            "name": "replacer"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds a new pluralization rule to the Inflector. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "plural",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the pluralized form of a word (e.g. Ext.util.Inflector.pluralize('word') returns 'words')</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-pluralize",
        "linenr": 182,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "<p>The pluralized form of the word</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The word to pluralize</p>\n",
            "type": "String",
            "optional": false,
            "name": "word"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the pluralized form of a word (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "pluralize",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-singular",
        "linenr": 141,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The matcher regex</p>\n",
            "type": "RegExp",
            "optional": false,
            "name": "matcher"
          },
          {
            "doc": "<p>The replacement string, which can reference matches from the matcher argument</p>\n",
            "type": "String",
            "optional": false,
            "name": "replacer"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds a new singularization rule to the Inflector. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "singular",
        "owner": "Ext.util.Inflector",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the singularized form of a word (e.g. Ext.util.Inflector.singularize('words') returns 'word')</p>\n",
        "href": "Inflector.html#Ext-util-Inflector-method-singularize",
        "linenr": 208,
        "html_filename": "Inflector.html",
        "alias": null,
        "return": {
          "doc": "<p>The singularized form of the word</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The word to singularize</p>\n",
            "type": "String",
            "optional": false,
            "name": "word"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the singularized form of a word (e.g. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
        "private": false,
        "tagname": "method",
        "name": "singularize",
        "owner": "Ext.util.Inflector",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Inflector.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Inflector",
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