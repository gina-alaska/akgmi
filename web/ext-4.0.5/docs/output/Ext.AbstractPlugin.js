Ext.data.JsonP.Ext_AbstractPlugin({
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
  "doc": "<p>The AbstractPlugin class is the base class from which user-implemented plugins should inherit.</p>\n\n\n<p>This class defines the essential API of plugins as used by Components by defining the following methods:</p>\n\n\n<ul>\n<li><code>init</code> : The plugin initialization method which the owning Component calls at Component initialization\ntime.<div class=\"sub-desc\"><p>The Component passes itself as the sole parameter.</p><p>Subclasses should set up bidirectional\nlinks between the plugin and its client Component here.</p></div></li>\n<li><code>destroy</code> : The plugin cleanup method which the owning Component calls at Component destruction time.<div class=\"sub-desc\">Use\nthis method to break links between the plugin and the Component and to free any allocated resources.</div></li>\n<li><code>enable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code><div class=\"sub-desc\"></div></li>\n<li><code>disable</code> : The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code><div class=\"sub-desc\"></div></li>\n</ul>\n\n",
  "extends": "Object",
  "href": "AbstractPlugin.html#Ext-AbstractPlugin",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "AbstractPlugin.html",
  "subclasses": [
    "Ext.grid.plugin.DragDrop",
    "Ext.tree.plugin.TreeViewDragDrop"
  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin cleanup in their own implementation of this method.</p>\n\n",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
        "linenr": 42,
        "html_filename": "AbstractPlugin.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "tagname": "method",
        "name": "destroy",
        "owner": "Ext.AbstractPlugin",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
        "linenr": 57,
        "html_filename": "AbstractPlugin.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "The base implementation just sets the plugin's disabled flag to true\n\n\nPlugin subclasses which need more complex proc...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "tagname": "method",
        "name": "disable",
        "owner": "Ext.AbstractPlugin",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
        "linenr": 49,
        "html_filename": "AbstractPlugin.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "The base implementation just sets the plugin's disabled flag to false\n\n\nPlugin subclasses which need more complex pro...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "tagname": "method",
        "name": "enable",
        "owner": "Ext.AbstractPlugin",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>The init method is invoked after initComponent method has been run for the client Component.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional\nlinks between the plugin and its client Component in their own implementation of this method.</p>\n\n",
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
        "linenr": 33,
        "html_filename": "AbstractPlugin.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The client Component which owns this plugin.</p>\n",
            "type": "Ext.Component",
            "optional": false,
            "name": "client"
          }
        ],
        "deprecated": null,
        "shortDoc": "The init method is invoked after initComponent method has been run for the client Component. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "tagname": "method",
        "name": "init",
        "owner": "Ext.AbstractPlugin",
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.AbstractPlugin",
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