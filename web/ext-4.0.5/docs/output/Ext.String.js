Ext.data.JsonP.Ext_String({
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
  "doc": "<p>A collection of useful static methods to deal with strings</p>\n",
  "extends": null,
  "href": "String.html#Ext-String",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "String.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Capitalize the given string</p>\n",
        "href": "String.html#Ext-String-method-capitalize",
        "linenr": 101,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "string"
          }
        ],
        "deprecated": null,
        "shortDoc": "Capitalize the given string ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "capitalize",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n",
        "href": "String.html#Ext-String-method-ellipsis",
        "linenr": 110,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The converted text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to truncate</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The maximum length to allow before truncating</p>\n",
            "type": "Number",
            "optional": false,
            "name": "length"
          },
          {
            "doc": "<p>True to try to find a common word break</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "word"
          }
        ],
        "deprecated": null,
        "shortDoc": "Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "ellipsis",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Escapes the passed string for ' and \\</p>\n",
        "href": "String.html#Ext-String-method-escape",
        "linenr": 140,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The escaped string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to escape</p>\n",
            "type": "String",
            "optional": false,
            "name": "string"
          }
        ],
        "deprecated": null,
        "shortDoc": "Escapes the passed string for ' and \\ ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "escape",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
        "href": "String.html#Ext-String-method-escapeRegex",
        "linenr": 131,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "string"
          }
        ],
        "deprecated": null,
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "escapeRegex",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n",
        "href": "String.html#Ext-String-method-format",
        "linenr": 192,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The formatted string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The tokenized string to be formatted</p>\n",
            "type": "String",
            "optional": false,
            "name": "string"
          },
          {
            "doc": "<p>The value to replace token {0}</p>\n",
            "type": "String",
            "optional": false,
            "name": "value1"
          },
          {
            "doc": "<p>Etc...</p>\n",
            "type": "String",
            "optional": false,
            "name": "value2"
          }
        ],
        "deprecated": null,
        "shortDoc": "Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "format",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and \") from their HTML character equivalents.</p>\n",
        "href": "String.html#Ext-String-method-htmlDecode",
        "linenr": 41,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The decoded text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to decode</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and \") from their HTML character equivalents. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "htmlDecode",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and \") to their HTML character equivalents for literal display in web pages.</p>\n",
        "href": "String.html#Ext-String-method-htmlEncode",
        "linenr": 14,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The encoded text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to encode</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and \") to their HTML character equivalents for literal display in web pages. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "htmlEncode",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n",
        "href": "String.html#Ext-String-method-leftPad",
        "linenr": 170,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The padded string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The original string</p>\n",
            "type": "String",
            "optional": false,
            "name": "string"
          },
          {
            "doc": "<p>The total length of the output string</p>\n",
            "type": "Number",
            "optional": false,
            "name": "size"
          },
          {
            "doc": "<p>(optional) The character with which to pad the original string (defaults to empty string \" \")</p>\n",
            "type": "String",
            "optional": true,
            "name": "character"
          }
        ],
        "deprecated": null,
        "shortDoc": "Pads the left side of a string with a specified character. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "leftPad",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a string with a specified number of repititions a given string pattern.\nThe pattern be separated by a different string.</p>\n\n<pre><code> var s = Ext.String.repeat('---', 4); // = '------------'\n var t = Ext.String.repeat('--', 3, '/'); // = '--/--/--'\n</code></pre>\n",
        "href": "String.html#Ext-String-method-repeat",
        "linenr": 212,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The pattern to repeat.</p>\n",
            "type": "String",
            "optional": false,
            "name": "pattern"
          },
          {
            "doc": "<p>The number of times to repeat the pattern (may be 0).</p>\n",
            "type": "Number",
            "optional": false,
            "name": "count"
          },
          {
            "doc": "<p>An option string to separate each pattern.</p>\n",
            "type": "String",
            "optional": false,
            "name": "sep"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a string with a specified number of repititions a given string pattern. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "repeat",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>    // alternate sort directions\n    sort = Ext.String.toggle(sort, 'ASC', 'DESC');\n\n    // instead of conditional logic:\n    sort = (sort == 'ASC' ? 'DESC' : 'ASC');\n       </code></pre>\n\n",
        "href": "String.html#Ext-String-method-toggle",
        "linenr": 149,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The new value</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The current string</p>\n",
            "type": "String",
            "optional": false,
            "name": "string"
          },
          {
            "doc": "<p>The value to compare to the current string</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The new value to use if the string already equals the first value passed in</p>\n",
            "type": "String",
            "optional": false,
            "name": "other"
          }
        ],
        "deprecated": null,
        "shortDoc": "Utility function that allows you to easily switch a string between two alternating values. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "toggle",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n",
        "href": "String.html#Ext-String-method-trim",
        "linenr": 87,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>The trimmed string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The string to escape</p>\n",
            "type": "String",
            "optional": false,
            "name": "string"
          }
        ],
        "deprecated": null,
        "shortDoc": "Trims whitespace from either end of a string, leaving spaces within the string intact. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "trim",
        "owner": "Ext.String",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
        "href": "String.html#Ext-String-method-urlAppend",
        "linenr": 72,
        "html_filename": "String.html",
        "alias": null,
        "return": {
          "doc": "<p>(String) The resulting URL</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The URL to append to.</p>\n",
            "type": "String",
            "optional": false,
            "name": "url"
          },
          {
            "doc": "<p>The content to append to the URL.</p>\n",
            "type": "String",
            "optional": false,
            "name": "string"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "tagname": "method",
        "name": "urlAppend",
        "owner": "Ext.String",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.String",
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