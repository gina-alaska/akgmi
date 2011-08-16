Ext.data.JsonP.Ext_util_Format({
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
  "doc": "<p>This class is a centralized place for formatting functions inside the library. It includes\nfunctions to format various different types of data, such as text, dates and numeric values.</p>\n\n<p><strong>Localization</strong>\nThis class contains several options for localization. These can be set once the library has loaded,\nall calls to the functions from that point will use the locale settings that were specified.\nOptions include:\n- thousandSeparator\n- decimalSeparator\n- currenyPrecision\n- currencySign\n- currencyAtEnd\nThis class also uses the default date format defined here: <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n\n<p><strong>Using with renderers</strong>\nThere are two helper functions that return a new function that can be used in conjunction with\ngrid renderers:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'date',\n    renderer: Ext.util.Format.dateRenderer('Y-m-d')\n}, {\n    dataIndex: 'time',\n    renderer: Ext.util.Format.numberRenderer('0.000')\n}]\n</code></pre>\n\n<p>Functions that only take a single argument can also be passed directly:</p>\n\n<pre><code>columns: [{\n    dataIndex: 'cost',\n    renderer: Ext.util.Format.usMoney\n}, {\n    dataIndex: 'productCode',\n    renderer: Ext.util.Format.uppercase\n}]\n</code></pre>\n\n<p><strong>Using with XTemplates</strong>\nXTemplates can also directly use <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a> functions:</p>\n\n<pre><code>new Ext.XTemplate([\n    'Date: {startDate:date(\"Y-m-d\")}',\n    'Cost: {cost:usMoney}'\n]);\n</code></pre>\n",
  "extends": null,
  "href": "Format.html#Ext-util-Format",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Format.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-capitalize\" rel=\"Ext.String-method-capitalize\" class=\"docClass\">Ext.String.capitalize</a>.</p>\n\n<p>Capitalize the given string</p>\n",
        "href": "Format.html#Ext-util-Format-method-capitalize",
        "linenr": 442,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "capitalize"
        },
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
        "shortDoc": "Alias for Ext.String.capitalize. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "capitalize",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Format a number as a currency</p>\n",
        "href": "Format.html#Ext-util-Format-method-currency",
        "linenr": 165,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The formatted currency string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The numeric value to format</p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The currency sign to use (defaults to <a href=\"#/api/Ext.util.Format-property-currencySign\" rel=\"Ext.util.Format-property-currencySign\" class=\"docClass\">currencySign</a>)</p>\n",
            "type": "String",
            "optional": false,
            "name": "sign"
          },
          {
            "doc": "<p>The number of decimals to use for the currency (defaults to <a href=\"#/api/Ext.util.Format-property-currencyPrecision\" rel=\"Ext.util.Format-property-currencyPrecision\" class=\"docClass\">currencyPrecision</a>)</p>\n",
            "type": "Number",
            "optional": false,
            "name": "decimals"
          },
          {
            "doc": "<p>True if the currency sign should be at the end of the string (defaults to <a href=\"#/api/Ext.util.Format-property-currencyAtEnd\" rel=\"Ext.util.Format-property-currencyAtEnd\" class=\"docClass\">currencyAtEnd</a>)</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "end"
          }
        ],
        "deprecated": null,
        "shortDoc": "Format a number as a currency ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "currency",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Formats the passed date using the specified format pattern.</p>\n",
        "href": "Format.html#Ext-util-Format-method-date",
        "linenr": 195,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The formatted date string.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to format. If a string is passed, it is converted to a Date by the Javascript\nDate object's <a href=\"http://www.w3schools.com/jsref/jsref_parse.asp\">parse()</a> method.</p>\n",
            "type": "String/Date",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(Optional) Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n",
            "type": "String",
            "optional": true,
            "name": "format"
          }
        ],
        "deprecated": null,
        "shortDoc": "Formats the passed date using the specified format pattern. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "date",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a date rendering function that can be reused to apply a date format multiple times efficiently</p>\n",
        "href": "Format.html#Ext-util-Format-method-dateRenderer",
        "linenr": 212,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The date formatting function</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Any valid date format string. Defaults to <a href=\"#/api/Ext.Date-property-defaultFormat\" rel=\"Ext.Date-property-defaultFormat\" class=\"docClass\">Ext.Date.defaultFormat</a>.</p>\n",
            "type": "String",
            "optional": false,
            "name": "format"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a date rendering function that can be reused to apply a date format multiple times efficiently ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "dateRenderer",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks a reference and converts it to the default value if it's empty</p>\n",
        "href": "Format.html#Ext-util-Format-method-defaultValue",
        "linenr": 117,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Reference to check</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The value to insert of it's undefined (defaults to \"\")</p>\n",
            "type": "String",
            "optional": false,
            "name": "defaultValue"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks a reference and converts it to the default value if it's empty ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "defaultValue",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-ellipsis\" rel=\"Ext.String-method-ellipsis\" class=\"docClass\">Ext.String.ellipsis</a>.</p>\n\n<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n",
        "href": "Format.html#Ext-util-Format-method-ellipsis",
        "linenr": 449,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "ellipsis"
        },
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
        "shortDoc": "Alias for Ext.String.ellipsis. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "ellipsis",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
        "href": "Format.html#Ext-util-Format-method-escapeRegex",
        "linenr": 523,
        "html_filename": "Format.html",
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
            "name": "str"
          }
        ],
        "deprecated": null,
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "escapeRegex",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Simple format for a file size (xxx bytes, xxx KB, xxx MB)</p>\n",
        "href": "Format.html#Ext-util-Format-method-fileSize",
        "linenr": 241,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The formatted file size</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The numeric value to format</p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "size"
          }
        ],
        "deprecated": null,
        "shortDoc": "Simple format for a file size (xxx bytes, xxx KB, xxx MB) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "fileSize",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-format\" rel=\"Ext.String-method-format\" class=\"docClass\">Ext.String.format</a>.</p>\n\n<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n",
        "href": "Format.html#Ext-util-Format-method-format",
        "linenr": 456,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "format"
        },
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
        "shortDoc": "Alias for Ext.String.format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "format",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-htmlDecode\" rel=\"Ext.String-method-htmlDecode\" class=\"docClass\">Ext.String.htmlDecode</a>.</p>\n\n<p>Convert certain characters (&amp;, &lt;, >, and \") from their HTML character equivalents.</p>\n",
        "href": "Format.html#Ext-util-Format-method-htmlDecode",
        "linenr": 463,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "htmlDecode"
        },
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
        "shortDoc": "Alias for Ext.String.htmlDecode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "htmlDecode",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">Ext.String.htmlEncode</a>.</p>\n\n<p>Convert certain characters (&amp;, &lt;, >, and \") to their HTML character equivalents for literal display in web pages.</p>\n",
        "href": "Format.html#Ext-util-Format-method-htmlEncode",
        "linenr": 470,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "htmlEncode"
        },
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
        "shortDoc": "Alias for Ext.String.htmlEncode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "htmlEncode",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-leftPad\" rel=\"Ext.String-method-leftPad\" class=\"docClass\">Ext.String.leftPad</a>.</p>\n\n<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n",
        "href": "Format.html#Ext-util-Format-method-leftPad",
        "linenr": 477,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "leftPad"
        },
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
        "shortDoc": "Alias for Ext.String.leftPad. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "leftPad",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a string to all lower case letters</p>\n",
        "href": "Format.html#Ext-util-Format-method-lowercase",
        "linenr": 138,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The converted text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text to convert</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a string to all lower case letters ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "lowercase",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>It does simple math for use in a template, for example:</p>\n\n<pre><code>var tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10\")}');\n</code></pre>\n\n",
        "href": "Format.html#Ext-util-Format-method-math",
        "linenr": 256,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>A function that operates on the passed value.</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "It does simple math for use in a template, for example:\n\nvar tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "math",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts newline characters to the HTML tag &lt;br/></p>\n",
        "href": "Format.html#Ext-util-Format-method-nl2br",
        "linenr": 433,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The string with embedded &lt;br/> tags in place of newlines.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>string value to format.</p>\n",
            "type": "String",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts newline characters to the HTML tag &lt;br/> ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "nl2br",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Formats the passed number according to the passed format string.</p>\n\n\n<p>The number of digits after the decimal separator character specifies the number of\ndecimal places in the resulting string. The <u>local-specific</u> decimal character is used in the result.</p>\n\n\n<p>The <i>presence</i> of a thousand separator character in the format string specifies that\nthe <u>locale-specific</u> thousand separator (if any) is inserted separating thousand groups.</p>\n\n\n<p>By default, \",\" is expected as the thousand separator, and \".\" is expected as the decimal separator.</p>\n\n\n<p><b>New to Ext4</b></p>\n\n\n<p>Locale-specific characters are always used in the formatted output when inserting\nthousand and decimal separators.</p>\n\n\n<p>The format string must specify separator characters according to US/UK conventions (\",\" as the\nthousand separator, and \".\" as the decimal separator)</p>\n\n\n<p>To allow specification of format strings according to local conventions for separator characters, add\nthe string <code>/i</code> to the end of the format string.</p>\n\n\n<div style=\"margin-left:40px\">examples (123456.789):\n<div style=\"margin-left:10px\">\n0 - (123456) show only digits, no precision<br>\n0.00 - (123456.78) show only digits, 2 precision<br>\n0.0000 - (123456.7890) show only digits, 4 precision<br>\n0,000 - (123,456) show comma and digits, no precision<br>\n0,000.00 - (123,456.78) show comma and digits, 2 precision<br>\n0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>\nTo allow specification of the formatting string using UK/US grouping characters (,) and decimal (.) for international numbers, add /i to the end.\nFor example: 0.000,00/i\n</div></div>\n\n",
        "href": "Format.html#Ext-util-Format-method-number",
        "linenr": 289,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The formatted number.</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The number to format.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "v"
          },
          {
            "doc": "<p>The way you would like to format this text.</p>\n",
            "type": "String",
            "optional": false,
            "name": "format"
          }
        ],
        "deprecated": null,
        "shortDoc": "Formats the passed number according to the passed format string. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "number",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a number rendering function that can be reused to apply a number format multiple times efficiently</p>\n",
        "href": "Format.html#Ext-util-Format-method-numberRenderer",
        "linenr": 410,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The number formatting function</p>\n",
          "type": "Function"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Any valid number format string for <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a></p>\n",
            "type": "String",
            "optional": false,
            "name": "format"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a number rendering function that can be reused to apply a number format multiple times efficiently ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "numberRenderer",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "href": "Format.html#Ext-util-Format-method-parseBox",
        "linenr": 491,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The encoded margins</p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "v"
          }
        ],
        "deprecated": null,
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "parseBox",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Selectively do a plural form of a word based on a numeric value. For example, in a template,\n{commentCount:plural(\"Comment\")}  would result in \"1 Comment\" if commentCount was 1 or would be \"x Comments\"\nif the value is 0 or greater than 1.</p>\n",
        "href": "Format.html#Ext-util-Format-method-plural",
        "linenr": 421,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to compare against</p>\n",
            "type": "Number",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The singular form of the word</p>\n",
            "type": "String",
            "optional": false,
            "name": "singular"
          },
          {
            "doc": "<p>(optional) The plural form of the word (defaults to the singular with an \"s\")</p>\n",
            "type": "String",
            "optional": true,
            "name": "plural"
          }
        ],
        "deprecated": null,
        "shortDoc": "Selectively do a plural form of a word based on a numeric value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "plural",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Rounds the passed number to the required decimal precision.</p>\n",
        "href": "Format.html#Ext-util-Format-method-round",
        "linenr": 274,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The rounded value.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The numeric value to round.</p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The number of decimal places to which to round the first parameter's value.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "precision"
          }
        ],
        "deprecated": null,
        "shortDoc": "Rounds the passed number to the required decimal precision. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "round",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Strips all script tags</p>\n",
        "href": "Format.html#Ext-util-Format-method-stripScripts",
        "linenr": 232,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The stripped text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text from which to strip script tags</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Strips all script tags ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "stripScripts",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Strips all HTML tags</p>\n",
        "href": "Format.html#Ext-util-Format-method-stripTags",
        "linenr": 223,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The stripped text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text from which to strip tags</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Strips all HTML tags ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "stripTags",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a substring from within an original string</p>\n",
        "href": "Format.html#Ext-util-Format-method-substr",
        "linenr": 127,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The substring</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The original text</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>The start index of the substring</p>\n",
            "type": "Number",
            "optional": false,
            "name": "start"
          },
          {
            "doc": "<p>The length of the substring</p>\n",
            "type": "Number",
            "optional": false,
            "name": "length"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a substring from within an original string ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "substr",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Alias for <a href=\"#/api/Ext.String-method-trim\" rel=\"Ext.String-method-trim\" class=\"docClass\">Ext.String.trim</a>.</p>\n\n<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n",
        "href": "Format.html#Ext-util-Format-method-trim",
        "linenr": 484,
        "html_filename": "Format.html",
        "alias": {
          "doc": null,
          "cls": "Ext.String",
          "tagname": "alias",
          "member": "trim"
        },
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
        "shortDoc": "Alias for Ext.String.trim. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "trim",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks a reference and converts it to empty string if it is undefined</p>\n",
        "href": "Format.html#Ext-util-Format-method-undef",
        "linenr": 108,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>Empty string if converted, otherwise the original value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Reference to check</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks a reference and converts it to empty string if it is undefined ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "undef",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a string to all upper case letters</p>\n",
        "href": "Format.html#Ext-util-Format-method-uppercase",
        "linenr": 147,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The converted text</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The text to convert</p>\n",
            "type": "String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a string to all upper case letters ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "uppercase",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Format a number as US currency</p>\n",
        "href": "Format.html#Ext-util-Format-method-usMoney",
        "linenr": 156,
        "html_filename": "Format.html",
        "alias": null,
        "return": {
          "doc": "<p>The formatted currency string</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The numeric value to format</p>\n",
            "type": "Number/String",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Format a number as US currency ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "method",
        "name": "usMoney",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Boolean",
        "doc": "<p>This may be set to <code>true</code> to make the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function\nappend the currency sign to the formatted value.</p>\n\n\n<p>This defaults to <code>false</code>, but may be overridden in a locale file.</p>\n\n",
        "href": "Format.html#Ext-util-Format-property-currencyAtEnd",
        "linenr": 99,
        "html_filename": "Format.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This may be set to true to make the currency function\nappend the currency sign to the formatted value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "property",
        "name": "currencyAtEnd",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of decimal places that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>2</code>, but may be overridden in a locale file.</p>\n\n",
        "href": "Format.html#Ext-util-Format-property-currencyPrecision",
        "linenr": 83,
        "html_filename": "Format.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of decimal places that the currency function displays. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "property",
        "name": "currencyPrecision",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The currency sign that the <a href=\"#/api/Ext.util.Format-method-currency\" rel=\"Ext.util.Format-method-currency\" class=\"docClass\">currency</a> function displays.</p>\n\n\n<p>This defaults to <code>$</code>, but may be overridden in a locale file.</p>\n\n",
        "href": "Format.html#Ext-util-Format-property-currencySign",
        "linenr": 91,
        "html_filename": "Format.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The currency sign that the currency function displays. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "property",
        "name": "currencySign",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a decimal point.</p>\n\n\n<p>This defaults to <code>.</code>, but may be overridden in a locale file.</p>\n\n",
        "href": "Format.html#Ext-util-Format-property-decimalSeparator",
        "linenr": 75,
        "html_filename": "Format.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The character that the number function uses as a decimal point. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "property",
        "name": "decimalSeparator",
        "owner": "Ext.util.Format",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The character that the <a href=\"#/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a> function uses as a thousand separator.</p>\n\n\n<p>This defaults to <code>,</code>, but may be overridden in a locale file.</p>\n\n",
        "href": "Format.html#Ext-util-Format-property-thousandSeparator",
        "linenr": 67,
        "html_filename": "Format.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The character that the number function uses as a thousand separator. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
        "private": false,
        "tagname": "property",
        "name": "thousandSeparator",
        "owner": "Ext.util.Format",
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
  "singleton": true,
  "protected": false,
  "superclasses": [

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/Format.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext.util.Format",
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