Ext.data.JsonP.Ext_util_DelayedTask({
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
  "doc": "<p>The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.</p>\n\n<h2>Usage</h2>\n\n<pre><code>var task = new Ext.util.DelayedTask(function(){\n    alert(Ext.getDom('myInputField').value.length);\n});\n\n// Wait 500ms before calling our function. If the user presses another key\n// during that 500ms, it will be cancelled and we'll wait another 500ms.\nExt.get('myInputField').on('keypress', function(){\n    task.<a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500);\n});\n</code></pre>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <code>buffer</code> for <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n",
  "extends": null,
  "href": "DelayedTask.html#Ext-util-DelayedTask",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "DelayedTask.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>The parameters to this constructor serve as defaults and are not required.</p>\n",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-constructor",
        "linenr": 1,
        "html_filename": "DelayedTask.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The default function to call. If not specified here, it must be specified during the <a href=\"#/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a> call.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The default scope (The <code><b>this</b></code> reference) in which the\nfunction is called. If not specified, <code>this</code> will refer to the browser window.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) The default Array of arguments.</p>\n",
            "type": "Array",
            "optional": true,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "The parameters to this constructor serve as defaults and are not required. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.util.DelayedTask",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Cancel the last queued timeout</p>\n",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-cancel",
        "linenr": 62,
        "html_filename": "DelayedTask.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Cancel the last queued timeout ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "tagname": "method",
        "name": "cancel",
        "owner": "Ext.util.DelayedTask",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Cancels any pending timeout and queues a new one</p>\n",
        "href": "DelayedTask.html#Ext-util-DelayedTask-method-delay",
        "linenr": 46,
        "html_filename": "DelayedTask.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The milliseconds to delay</p>\n",
            "type": "Number",
            "optional": false,
            "name": "delay"
          },
          {
            "doc": "<p>(optional) Overrides function passed to constructor</p>\n",
            "type": "Function",
            "optional": true,
            "name": "newFn"
          },
          {
            "doc": "<p>(optional) Overrides scope passed to constructor. Remember that if no scope\nis specified, <code>this</code> will refer to the browser window.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "newScope"
          },
          {
            "doc": "<p>(optional) Overrides args passed to constructor</p>\n",
            "type": "Array",
            "optional": true,
            "name": "newArgs"
          }
        ],
        "deprecated": null,
        "shortDoc": "Cancels any pending timeout and queues a new one ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
        "private": false,
        "tagname": "method",
        "name": "delay",
        "owner": "Ext.util.DelayedTask",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/DelayedTask.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.util.DelayedTask",
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