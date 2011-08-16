Ext.data.JsonP.Ext_layout_container_Border({
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
  "doc": "<p>This is a multi-pane, application-oriented UI layout style that supports multiple\nnested panels, automatic bars between regions and built-in\n<a href=\"#/api/Ext.panel.Panel-cfg-collapsible\" rel=\"Ext.panel.Panel-cfg-collapsible\" class=\"docClass\">expanding and collapsing</a> of regions.</p>\n\n\n<p>This class is intended to be extended or created via the <code>layout:'border'</code>\n<a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config, and should generally not need to be created directly\nvia the new keyword.</p>\n\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Border/Ext.layout.container.Border.png\" alt=\"Ext.layout.container.Border container layout\"></p></p>\n\n<p>Example usage:</p>\n\n\n<pre><code>     Ext.create('Ext.panel.Panel', {\n        width: 500,\n        height: 400,\n        title: 'Border Layout',\n        layout: 'border',\n        items: [{\n            title: 'South Region is resizable',\n            region: 'south',     // position for region\n            xtype: 'panel',\n            height: 100,\n            split: true,         // enable resizing\n            margins: '0 5 5 5'\n        },{\n            // xtype: 'panel' implied by default\n            title: 'West Region is collapsible',\n            region:'west',\n            xtype: 'panel',\n            margins: '5 0 0 5',\n            width: 200,\n            collapsible: true,   // make collapsible\n            id: 'west-region-container',\n            layout: 'fit'\n        },{\n            title: 'Center Region',\n            region: 'center',     // center region is required, no width/height specified\n            xtype: 'panel',\n            layout: 'fit',\n            margins: '5 5 0 0'\n        }],\n        renderTo: Ext.getBody()\n    });\n</code></pre>\n\n\n<p><b><u>Notes</u></b>:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>Any Container using the Border layout <b>must</b> have a child item with <code>region:'center'</code>.\nThe child item in the center region will always be resized to fill the remaining space not used by\nthe other regions in the layout.</li>\n<li>Any child items with a region of <code>west</code> or <code>east</code> may be configured with either\nan initial <code>width</code>, or a <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">Ext.layout.container.Box.flex</a> value, or an initial percentage width <b>string</b> (Which is simply divided by 100 and used as a flex value). The 'center' region has a flex value of <code>1</code>.</li>\n<li>Any child items with a region of <code>north</code> or <code>south</code> may be configured with either\nan initial <code>height</code>, or a <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">Ext.layout.container.Box.flex</a> value, or an initial percentage height <b>string</b> (Which is simply divided by 100 and used as a flex value). The 'center' region has a flex value of <code>1</code>.</li>\n<li>The regions of a BorderLayout are <b>fixed at render time</b> and thereafter, its child Components may not be removed or added</b>.To add/remove\nComponents within a BorderLayout, have them wrapped by an additional Container which is directly\nmanaged by the BorderLayout.  If the region is to be collapsible, the Container used directly\nby the BorderLayout manager should be a Panel.  In the following example a Container (an Ext.panel.Panel)\nis added to the west region:\n<pre><code>wrc = <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>('west-region-container');\nwrc.<a href=\"#/api/Ext.container.Container-method-removeAll\" rel=\"Ext.container.Container-method-removeAll\" class=\"docClass\">removeAll</a>();\nwrc.<a href=\"#/api/Ext.container.Container-event-add\" rel=\"Ext.container.Container-event-add\" class=\"docClass\">add</a>({\n    title: 'Added Panel',\n    html: 'Some content'\n});\n</code></pre>\n</li>\n<li><b>There is no BorderLayout.Region class in ExtJS 4.0+</b></li>\n</ul></div>\n\n",
  "extends": "Ext.layout.container.Container",
  "href": "Border.html#Ext-layout-container-Border",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Border.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>Flag to notify the ownerCt Component on afterLayout of a change</p>\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtComponent",
        "linenr": 17,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "cfg",
        "name": "bindToOwnerCtComponent",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag to notify the ownerCt Container on afterLayout of a change</p>\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-bindToOwnerCtContainer",
        "linenr": 23,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "cfg",
        "name": "bindToOwnerCtContainer",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-componentCls\" rel=\"Ext.Component-cfg-componentCls\" class=\"docClass\">componentCls</a> also.</p>\n\n\n<p></p></p>\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-cfg-itemCls",
        "linenr": 29,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An optional extra CSS class that will be added to the container. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "cfg",
        "name": "itemCls",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Containers should not lay out child components when collapsed.</p>\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-beforeLayout",
        "linenr": 58,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Containers should not lay out child components when collapsed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "method",
        "name": "beforeLayout",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\nbase class), or the layout phase (onLayout).</p>\n\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getLayoutItems",
        "linenr": 49,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "return": {
          "doc": "<p>of child components</p>\n",
          "type": "Ext.Component[]"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns an array of child components either for a render phase (Performed in the beforeLayout method of the layout's\n...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "method",
        "name": "getLayoutItems",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return the <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> Component to which the passed child Panel of the layout will collapse.\nBy default, this will be a <a href=\"#/api/Ext.panel.Header\" rel=\"Ext.panel.Header\" class=\"docClass\">Header</a> component (Docked to the appropriate border). See <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a>.\nconfig to customize this.</p>\n\n\n<p><b>Note that this will be a fully instantiated Component, but will only be <i>rendered</i> when the Panel is first collapsed.</b></p>\n\n",
        "href": "Border.html#Ext-layout-container-Border-method-getPlaceholder",
        "linenr": 515,
        "html_filename": "Border.html",
        "alias": null,
        "return": {
          "doc": "<p>The Panel's <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a> unless the <a href=\"#/api/Ext.panel.Panel-cfg-collapseMode\" rel=\"Ext.panel.Panel-cfg-collapseMode\" class=\"docClass\">collapseMode</a> is\n<code>'header'</code>, in which case <i>undefined</i> is returned.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The child Panel of the layout for which to return the <a href=\"#/api/Ext.panel.Panel-cfg-placeholder\" rel=\"Ext.panel.Panel-cfg-placeholder\" class=\"docClass\">placeholder</a>.</p>\n",
            "type": "Ext.panel.Panel",
            "optional": false,
            "name": "panel"
          }
        ],
        "deprecated": null,
        "shortDoc": "Return the placeholder Component to which the passed child Panel of the layout will collapse. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Border.js",
        "private": false,
        "tagname": "method",
        "name": "getPlaceholder",
        "owner": "Ext.layout.container.Border",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the element into which rendering must take place. Defaults to the owner Container's target element.</p>\n\n\n<p>May be overridden in layout managers which implement an inner element.</p>\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getRenderTarget",
        "linenr": 75,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the element into which rendering must take place. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "method",
        "name": "getRenderTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns all items that are rendered</p>\n",
        "href": "Container.html#Ext-layout-container-Container-method-getRenderedItems",
        "linenr": 53,
        "html_filename": "Container.html",
        "alias": null,
        "return": {
          "doc": "<p>All matching items</p>\n",
          "type": "Array"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns all items that are rendered ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "tagname": "method",
        "name": "getRenderedItems",
        "owner": "Ext.layout.container.Container",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the owner component's resize element.</p>\n",
        "href": "AbstractContainer.html#Ext-layout-container-AbstractContainer-method-getTarget",
        "linenr": 68,
        "html_filename": "AbstractContainer.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the owner component's resize element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractContainer.js",
        "private": false,
        "tagname": "method",
        "name": "getTarget",
        "owner": "Ext.layout.container.AbstractContainer",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns all items that are both rendered and visible</p>\n",
        "href": "Container.html#Ext-layout-container-Container-method-getVisibleItems",
        "linenr": 76,
        "html_filename": "Container.html",
        "alias": null,
        "return": {
          "doc": "<p>All matching items</p>\n",
          "type": "Array"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns all items that are both rendered and visible ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Container.js",
        "private": false,
        "tagname": "method",
        "name": "getVisibleItems",
        "owner": "Ext.layout.container.Container",
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
    "Ext.layout.Layout",
    "Ext.layout.container.AbstractContainer",
    "Ext.layout.container.Container"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Border.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.layout.container.Border",
  "alternateClassNames": [
    "Ext.layout.BorderLayout"
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