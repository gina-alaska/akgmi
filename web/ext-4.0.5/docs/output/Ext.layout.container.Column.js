Ext.data.JsonP.Ext_layout_container_Column({
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
  "doc": "<p>This is the layout style of choice for creating structural layouts in a multi-column format where the width of\neach column can be specified as a percentage or fixed width, but the height is allowed to vary based on the content.\nThis class is intended to be extended or created via the layout:'column' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n\n<p>ColumnLayout does not have any direct config options (other than inherited ones), but it does support a\nspecific config property of <b><tt>columnWidth</tt></b> that can be included in the config of any panel added to it.  The\nlayout will use the columnWidth (if present) or width of each panel during layout to determine how to size each panel.\nIf width or columnWidth is not specified for a given panel, its width will default to the panel's width (or auto).</p>\n\n\n<p>The width property is always evaluated as pixels, and must be a number greater than or equal to 1.\nThe columnWidth property is always evaluated as a percentage, and must be a decimal value greater than 0 and\nless than 1 (e.g., .25).</p>\n\n\n<p>The basic rules for specifying column widths are pretty simple.  The logic makes two passes through the\nset of contained panels.  During the first layout pass, all panels that either have a fixed width or none\nspecified (auto) are skipped, but their widths are subtracted from the overall container width.  During the second\npass, all panels with columnWidths are assigned pixel widths in proportion to their percentages based on\nthe total <b>remaining</b> container width.  In other words, percentage width panels are designed to fill the space\nleft over by all the fixed-width and/or auto-width panels.  Because of this, while you can specify any number of columns\nwith different percentages, the columnWidths must always add up to 1 (or 100%) when added together, otherwise your\nlayout may not render as expected.  \n<p><img src=\"doc-resources/Ext.layout.container.Column/Ext.layout.container.Column1.png\" alt=\"Ext.layout.container.Column container layout\"></p>\nExample usage:</p>\n\n\n<pre><code>    // All columns are percentages -- they must add up to 1\n    Ext.create('Ext.panel.Panel', {\n        title: 'Column Layout - Percentage Only',\n        width: 350,\n        height: 250,\n        layout:'column',\n        items: [{\n            title: 'Column 1',\n            columnWidth: .25\n        },{\n            title: 'Column 2',\n            columnWidth: .55\n        },{\n            title: 'Column 3',\n            columnWidth: .20\n        }],\n        renderTo: Ext.getBody()\n    }); \n\n// <p><img src=\"doc-resources/Ext.layout.container.Column/Ext.layout.container.Column2.png\" alt=\"Ext.layout.container.Column container layout\"></p>\n// Mix of width and columnWidth -- all columnWidth values must add up\n// to 1. The first column will take up exactly 120px, and the last two\n// columns will fill the remaining container width.\n\n    Ext.create('Ext.Panel', {\n        title: 'Column Layout - Mixed',\n        width: 350,\n        height: 250,\n        layout:'column',\n        items: [{\n            title: 'Column 1',\n            width: 120\n        },{\n            title: 'Column 2',\n            columnWidth: .7\n        },{\n            title: 'Column 3',\n            columnWidth: .3\n        }],\n        renderTo: Ext.getBody()\n    }); \n</code></pre>\n\n",
  "extends": "Ext.layout.container.Auto",
  "href": "Column.html#Ext-layout-container-Column",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Column.html",
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
    "Ext.layout.container.Container",
    "Ext.layout.container.Auto"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Column.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.layout.container.Column",
  "alternateClassNames": [
    "Ext.layout.ColumnLayout"
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