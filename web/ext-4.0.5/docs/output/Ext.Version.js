Ext.data.JsonP.Ext_Version({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Compare 2 specified versions, starting from left to right. If a part contains special version strings,\nthey are handled in the following order:\n'dev' &lt; 'alpha' = 'a' &lt; 'beta' = 'b' &lt; 'RC' = 'rc' &lt; '#' &lt; 'pl' = 'p' &lt; 'anything else'</p>\n",
        "href": "Version.html#Ext-Version-method-compare",
        "linenr": 212,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns -1 if the current version is smaller than the target version, 1 if greater, and 0 if they're equivalent</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The current version to compare to</p>\n",
            "type": "String",
            "optional": false,
            "name": "current"
          },
          {
            "doc": "<p>The target version to compare to</p>\n",
            "type": "String",
            "optional": false,
            "name": "target"
          }
        ],
        "deprecated": null,
        "shortDoc": "Compare 2 specified versions, starting from left to right. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "compare",
        "owner": "Ext.Version",
        "static": true,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a version component to a comparable value</p>\n",
        "href": "Version.html#Ext-Version-method-getComponentValue",
        "linenr": 201,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to convert</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a version component to a comparable value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getComponentValue",
        "owner": "Ext.Version",
        "static": true,
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
  "doc": "<p>A utility class that wrap around a string version number and provide convenient\nmethod to perform comparison. See also: <a href=\"#/api/Ext.Version-method-compare\" rel=\"Ext.Version-method-compare\" class=\"docClass\">compare</a>. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(\"Version is \" + version); // Version is 1.0.2beta\n\nconsole.log(version.getMajor()); // 1\nconsole.log(version.getMinor()); // 0\nconsole.log(version.getPatch()); // 2\nconsole.log(version.getBuild()); // 0\nconsole.log(version.getRelease()); // beta\n\nconsole.log(version.isGreaterThan('1.0.1')); // True\nconsole.log(version.isGreaterThan('1.0.2alpha')); // True\nconsole.log(version.isGreaterThan('1.0.2RC')); // False\nconsole.log(version.isGreaterThan('1.0.2')); // False\nconsole.log(version.isLessThan('1.0.2')); // True\n\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\n</code></pre>\n",
  "extends": null,
  "href": "Version.html#Ext-Version",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Version.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "\n",
        "href": "Version.html#Ext-Version-method-constructor",
        "linenr": 35,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Version"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The version number in the follow standard format: major[.minor[.patch[.build[release]]]]\nExamples: 1.0 or 1.2.3beta or 1.2.3.4RC</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "version"
          }
        ],
        "deprecated": null,
        "shortDoc": " ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a closure for deprecated code.</p>\n\n<pre><code>// This means Ext.oldMethod is only supported in 4.0.0beta and older.\n// If Ext.getVersion('extjs') returns a version that is later than '4.0.0beta', for example '4.0.0RC',\n// the closure will not be invoked\nExt.deprecate('extjs', '4.0.0beta', function() {\n    Ext.oldMethod = Ext.newMethod;\n\n    ...\n});\n</code></pre>\n",
        "href": "Version.html#Ext-Version-method-deprecate",
        "linenr": 283,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The package name</p>\n",
            "type": "String",
            "optional": false,
            "name": "packageName"
          },
          {
            "doc": "<p>The last version before it's deprecated</p>\n",
            "type": "String",
            "optional": false,
            "name": "since"
          },
          {
            "doc": "<p>The callback function to be executed with the specified version is less than the current version</p>\n",
            "type": "Function",
            "optional": false,
            "name": "closure"
          },
          {
            "doc": "<p>The execution scope (<tt>this</tt>) if the closure</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create a closure for deprecated code. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "deprecate",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether this version equals to the supplied argument</p>\n",
        "href": "Version.html#Ext-Version-method-equals",
        "linenr": 144,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this version equals to the target, false otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The version to compare with</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "target"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns whether this version equals to the supplied argument ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "equals",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the build component value</p>\n",
        "href": "Version.html#Ext-Version-method-getBuild",
        "linenr": 110,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>build</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the build component value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getBuild",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the major component value</p>\n",
        "href": "Version.html#Ext-Version-method-getMajor",
        "linenr": 86,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>major</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the major component value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getMajor",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the minor component value</p>\n",
        "href": "Version.html#Ext-Version-method-getMinor",
        "linenr": 94,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>minor</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the minor component value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getMinor",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the patch component value</p>\n",
        "href": "Version.html#Ext-Version-method-getPatch",
        "linenr": 102,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>patch</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the patch component value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getPatch",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the release component value</p>\n",
        "href": "Version.html#Ext-Version-method-getRelease",
        "linenr": 118,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>release</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the release component value ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getRelease",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns shortVersion version without dots and release</p>\n",
        "href": "Version.html#Ext-Version-method-getShortVersion",
        "linenr": 178,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns shortVersion version without dots and release ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getShortVersion",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion call) if there's no package name given.</p>\n",
        "href": "Version.html#Ext-Version-method-getVersion",
        "linenr": 268,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>The version</p>\n",
          "type": "Ext.Version"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) The package name, for example: 'core', 'touch', 'extjs'</p>\n",
            "type": "String",
            "optional": true,
            "name": "packageName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the version number of the supplied package name; will return the last registered version\n(last Ext.setVersion cal...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "getVersion",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether this version if greater than the supplied argument</p>\n",
        "href": "Version.html#Ext-Version-method-isGreaterThan",
        "linenr": 126,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this version if greater than the target, false otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The version to compare with</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "target"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns whether this version if greater than the supplied argument ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "isGreaterThan",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether this version if smaller than the supplied argument</p>\n",
        "href": "Version.html#Ext-Version-method-isLessThan",
        "linenr": 135,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this version if smaller than the target, false otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The version to compare with</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "target"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns whether this version if smaller than the supplied argument ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "isLessThan",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns whether this version matches the supplied argument. Example:</p>\n\n<pre><code>var version = new Ext.Version('1.0.2beta');\nconsole.log(version.match(1)); // True\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\nconsole.log(version.match('1.0.2RC')); // False\n</code></pre>\n\n",
        "href": "Version.html#Ext-Version-method-match",
        "linenr": 153,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "<p>True if this version matches the target, false otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The version to compare with</p>\n",
            "type": "String/Number",
            "optional": false,
            "name": "target"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns whether this version matches the supplied argument. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "match",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Set version number for the given package name.</p>\n",
        "href": "Version.html#Ext-Version-method-setVersion",
        "linenr": 254,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The package name, for example: 'core', 'touch', 'extjs'</p>\n",
            "type": "String",
            "optional": false,
            "name": "packageName"
          },
          {
            "doc": "<p>The version, for example: '1.2.3alpha', '2.4.0-dev'</p>\n",
            "type": "String/Ext.Version",
            "optional": false,
            "name": "version"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set version number for the given package name. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "setVersion",
        "owner": "Ext.Version",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns this format: [major, minor, patch, build, release]. Useful for comparison</p>\n",
        "href": "Version.html#Ext-Version-method-toArray",
        "linenr": 170,
        "html_filename": "Version.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns this format: [major, minor, patch, build, release]. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
        "private": false,
        "tagname": "method",
        "name": "toArray",
        "owner": "Ext.Version",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/version/Version.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext.Version",
  "alternateClassNames": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "static": false,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});