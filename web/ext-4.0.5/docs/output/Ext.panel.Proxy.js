Ext.data.JsonP.Ext_panel_Proxy({
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
  "doc": "<p>A custom drag proxy implementation specific to <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>s. This class\nis primarily used internally for the Panel's drag drop implementation, and\nshould never need to be created directly.</p>\n",
  "extends": "Object",
  "href": "Proxy.html#Ext-panel-Proxy",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Proxy.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true).\nMost Panels are not absolute positioned and therefore we need to reserve\nthis space.</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-cfg-insertProxy",
        "linenr": 27,
        "html_filename": "Proxy.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "cfg",
        "name": "insertProxy",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new panel proxy.</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-constructor",
        "linenr": 12,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> to proxy for</p>\n",
            "type": "Ext.panel.Panel",
            "optional": false,
            "name": "panel"
          },
          {
            "doc": "<p>(optional) Config object</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new panel proxy. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the proxy's element</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-getEl",
        "linenr": 42,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "<p>The proxy's element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the proxy's element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "getEl",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the proxy's ghost Panel</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-getGhost",
        "linenr": 50,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "<p>The proxy's ghost Panel</p>\n",
          "type": "Ext.panel.Panel"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the proxy's ghost Panel ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "getGhost",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the proxy element. This is the element that represents where the\nPanel was before we started the drag operation.</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-getProxy",
        "linenr": 58,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "<p>The proxy's element</p>\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the proxy element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "getProxy",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides the proxy</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-hide",
        "linenr": 67,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Hides the proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "hide",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Moves the proxy to a different position in the DOM.  This is typically\ncalled while dragging the Panel to keep the proxy sync'd to the Panel's\nlocation.</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-moveProxy",
        "linenr": 108,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The proxy's parent DOM node</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "parentNode"
          },
          {
            "doc": "<p>(optional) The sibling node before which the\nproxy should be inserted (defaults to the parent's last child if not\nspecified)</p>\n",
            "type": "HTMLElement",
            "optional": true,
            "name": "before"
          }
        ],
        "deprecated": null,
        "shortDoc": "Moves the proxy to a different position in the DOM. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "moveProxy",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shows the proxy</p>\n",
        "href": "Proxy.html#Ext-panel-Proxy-method-show",
        "linenr": 83,
        "html_filename": "Proxy.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Shows the proxy ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "method",
        "name": "show",
        "owner": "Ext.panel.Proxy",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Ext.panel.Panel",
        "doc": "\n",
        "href": "Proxy.html#Ext-panel-Proxy-property-panel",
        "linenr": 18,
        "html_filename": "Proxy.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "tagname": "property",
        "name": "panel",
        "owner": "Ext.panel.Proxy",
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
  "singleton": false,
  "protected": false,
  "superclasses": [

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.panel.Proxy",
  "alternateClassNames": [
    "Ext.dd.PanelProxy"
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