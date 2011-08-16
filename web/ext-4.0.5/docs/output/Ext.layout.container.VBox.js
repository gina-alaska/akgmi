Ext.data.JsonP.Ext_layout_container_VBox({
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
  "doc": "<p>A layout that arranges items vertically down a Container. This layout optionally divides available vertical\nspace between child items containing a numeric <code>flex</code> configuration.</p>\n\n\n<p>This layout may also be used to set the widths of child items by configuring it with the <a href=\"#/api/Ext.layout.container.VBox-cfg-align\" rel=\"Ext.layout.container.VBox-cfg-align\" class=\"docClass\">align</a> option.\n<p><img src=\"doc-resources/Ext.layout.container.VBox/Ext.layout.container.VBox.png\" alt=\"Ext.layout.container.VBox container layout\"></p>\nExample usage:</p>\n\n<pre><code>Ext.create('Ext.Panel', {\n    width: 500,\n    height: 400,\n    title: \"VBoxLayout Panel\",\n    layout: {                        \n        type: 'vbox',\n        align: 'center'\n    },\n    renderTo: document.body,\n    items: [{                        \n        xtype: 'panel',\n        title: 'Inner Panel One',\n        width: 250,\n        flex: 2                      \n    },{\n        xtype: 'panel',\n        title: 'Inner Panel Two',\n        width: 250,         \n        flex: 4\n    },{\n        xtype: 'panel',\n        title: 'Inner Panel Three',\n        width: '50%',           \n        flex: 4\n    }]\n});\n</code></pre>\n",
  "extends": "Ext.layout.container.Box",
  "href": "VBox.html#Ext-layout-container-VBox",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "VBox.html",
  "subclasses": [
    "Ext.layout.container.Accordion"
  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>Controls how the child items of the container are aligned. Acceptable configuration values for this\nproperty are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>left</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are aligned horizontally\nat the <b>left</b> side of the container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are aligned horizontally at the\n<b>mid-width</b> of the container</div></li>\n<li><b><tt>stretch</tt></b> : <div class=\"sub-desc\">child items are stretched horizontally to fill\nthe width of the container</div></li>\n<li><b><tt>stretchmax</tt></b> : <div class=\"sub-desc\">child items are stretched horizontally to\nthe size of the largest item.</div></li>\n</ul></div>\n\n",
        "href": "VBox.html#Ext-layout-container-VBox-cfg-align",
        "linenr": 46,
        "html_filename": "VBox.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Controls how the child items of the container are aligned. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/VBox.js",
        "private": false,
        "tagname": "cfg",
        "name": "align",
        "owner": "Ext.layout.container.VBox",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean/Number/Object",
        "doc": "<p>If truthy, child Component are <i>animated</i> into position whenever the Container\nis layed out. If this option is numeric, it is used as the animation duration in milliseconds.</p>\n\n\n<p>May be set as a property at any time.</p>\n\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-animate",
        "linenr": 25,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If truthy, child Component are animated into position whenever the Container\nis layed out. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "animate",
        "owner": "Ext.layout.container.Box",
        "static": false,
        "inheritable": false
      },
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
        "type": "Boolean",
        "doc": "\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-clearInnerCtOnLayout",
        "linenr": 134,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "clearInnerCtOnLayout",
        "owner": "Ext.layout.container.Box",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>If the individual contained items do not have a <tt>margins</tt>\nproperty specified or margin specified via CSS, the default margins from this property will be\napplied to each item.</p>\n\n\n<br><p>This property may be specified as an object containing margins\n\n\n<p>to apply in the format:</p></p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>This property may also be specified as a string containing\nspace-separated, numeric margin values. The order of the sides associated\nwith each value matches the way CSS processes margin values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-defaultMargins",
        "linenr": 32,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If the individual contained items do not have a margins\nproperty specified or margin specified via CSS, the default m...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "defaultMargins",
        "owner": "Ext.layout.container.Box",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>This configuration option is to be applied to <b>child <tt>items</tt></b> of the container managed\nby this layout. Each child item with a <tt>flex</tt> property will be flexed <b>horizontally</b>\naccording to each item's <b>relative</b> <tt>flex</tt> value compared to the sum of all items with\na <tt>flex</tt> value specified.  Any child items that have either a <tt>flex = 0</tt> or\n<tt>flex = undefined</tt> will not be 'flexed' (the initial size will not be changed).</p>\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-flex",
        "linenr": 102,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "This configuration option is to be applied to child items of the container managed\nby this layout. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "flex",
        "owner": "Ext.layout.container.Box",
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
      },
      {
        "type": "String",
        "doc": "<p>Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>start</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are packed together at\n<b>left</b> side of container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are packed together at\n<b>mid-width</b> of container</div></li>\n<li><b><tt>end</tt></b> : <div class=\"sub-desc\">child items are packed together at <b>right</b>\nside of container</div></li>\n</ul></div>\n\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-pack",
        "linenr": 89,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Controls how the child items of the container are packed together. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "pack",
        "owner": "Ext.layout.container.Box",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Sets the padding to be applied to all child items managed by this layout.</p>\n\n\n<p>This property must be specified as a string containing\nspace-separated, numeric padding values. The order of the sides associated\nwith each value matches the way CSS processes padding values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to: <code>\"0\"</code></p>\n\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-padding",
        "linenr": 68,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Sets the padding to be applied to all child items managed by this layout. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "padding",
        "owner": "Ext.layout.container.Box",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True (the default) to allow fixed size components to shrink (limited to their\nminimum size) to avoid overflow. False to preserve fixed sizes even if they cause\noverflow.</p>\n",
        "href": "Box.html#Ext-layout-container-Box-cfg-shrinkToFit",
        "linenr": 126,
        "html_filename": "Box.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True (the default) to allow fixed size components to shrink (limited to their\nminimum size) to avoid overflow. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "cfg",
        "name": "shrinkToFit",
        "owner": "Ext.layout.container.Box",
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
      },
      {
        "doc": "<p>Resizes and repositions each child component</p>\n",
        "href": "Box.html#Ext-layout-container-Box-method-updateChildBoxes",
        "linenr": 599,
        "html_filename": "Box.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The box measurements</p>\n",
            "type": "Object[]",
            "optional": false,
            "name": "boxes"
          }
        ],
        "deprecated": null,
        "shortDoc": "Resizes and repositions each child component ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Box.js",
        "private": false,
        "tagname": "method",
        "name": "updateChildBoxes",
        "owner": "Ext.layout.container.Box",
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
    "Ext.layout.container.Box"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/VBox.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.layout.container.VBox",
  "alternateClassNames": [
    "Ext.layout.VBoxLayout"
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