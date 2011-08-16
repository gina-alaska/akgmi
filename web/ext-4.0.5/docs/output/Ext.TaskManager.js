Ext.data.JsonP.Ext_TaskManager({
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
  "doc": "<p>A static <a href=\"#/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> instance that can be used to start and stop arbitrary tasks.  See\n<a href=\"#/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> for supported methods and task config properties.</p>\n\n<pre><code>// Start a simple clock task that updates a div once per second\nvar task = {\n    run: function(){\n        Ext.fly('clock').update(new Date().format('g:i:s A'));\n    },\n    interval: 1000 //1 second\n}\nExt.TaskManager.start(task);\n</code></pre>\n\n\n<p>See the <a href=\"#/api/Ext.TaskManager-method-start\" rel=\"Ext.TaskManager-method-start\" class=\"docClass\">start</a> method for details about how to configure a task object.</p>\n\n",
  "extends": "Ext.util.TaskRunner",
  "href": "TaskManager.html#Ext-TaskManager",
  "allMixins": [

  ],
  "linenr": 164,
  "html_filename": "TaskManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "\n",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-constructor",
        "linenr": 1,
        "html_filename": "TaskManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) The minimum precision in milliseconds supported by this TaskRunner instance\n(defaults to 10)</p>\n",
            "type": "Number",
            "optional": true,
            "name": "interval"
          }
        ],
        "deprecated": null,
        "shortDoc": " ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.util.TaskRunner",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Starts a new task.</p>\n",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-start",
        "linenr": 104,
        "html_filename": "TaskManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The task</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A config object that supports the following properties:<ul>\n<li><code>run</code> : Function<div class=\"sub-desc\"><p>The function to execute each time the task is invoked. The\nfunction will be called at each interval and passed the <code>args</code> argument if specified, and the\ncurrent invocation count if not.</p>\n<p>If a particular scope (<code>this</code> reference) is required, be sure to specify it using the <code>scope</code> argument.</p>\n<p>Return <code>false</code> from this function to terminate the task.</p></div></li>\n<li><code>interval</code> : Number<div class=\"sub-desc\">The frequency in milliseconds with which the task\nshould be invoked.</div></li>\n<li><code>args</code> : Array<div class=\"sub-desc\">(optional) An array of arguments to be passed to the function\nspecified by <code>run</code>. If not specified, the current invocation count is passed.</div></li>\n<li><code>scope</code> : Object<div class=\"sub-desc\">(optional) The scope (<tt>this</tt> reference) in which to execute the\n<code>run</code> function. Defaults to the task config object.</div></li>\n<li><code>duration</code> : Number<div class=\"sub-desc\">(optional) The length of time in milliseconds to invoke\nthe task before stopping automatically (defaults to indefinite).</div></li>\n<li><code>repeat</code> : Number<div class=\"sub-desc\">(optional) The number of times to invoke the task before\nstopping automatically (defaults to indefinite).</div></li>\n</ul></p>\n\n\n<p>Before each invocation, Ext injects the property <code>taskRunCount</code> into the task object so\nthat calculations based on the repeat count can be performed.</p>\n\n",
            "type": "Object",
            "optional": true,
            "name": "task"
          }
        ],
        "deprecated": null,
        "shortDoc": "Starts a new task. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "tagname": "method",
        "name": "start",
        "owner": "Ext.util.TaskRunner",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Stops an existing running task.</p>\n",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stop",
        "linenr": 137,
        "html_filename": "TaskManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The task</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The task to stop</p>\n",
            "type": "Object",
            "optional": false,
            "name": "task"
          }
        ],
        "deprecated": null,
        "shortDoc": "Stops an existing running task. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "tagname": "method",
        "name": "stop",
        "owner": "Ext.util.TaskRunner",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Stops all tasks that are currently running.</p>\n",
        "href": "TaskManager.html#Ext-util-TaskRunner-method-stopAll",
        "linenr": 148,
        "html_filename": "TaskManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Stops all tasks that are currently running. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
        "private": false,
        "tagname": "method",
        "name": "stopAll",
        "owner": "Ext.util.TaskRunner",
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
    "Ext.util.TaskRunner"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/util/TaskManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.TaskManager",
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