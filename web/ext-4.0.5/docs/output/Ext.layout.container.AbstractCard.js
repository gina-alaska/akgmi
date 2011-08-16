Ext.data.JsonP.Ext_layout_container_AbstractCard({
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
  "doc": "<p>Abstract base class for <a href=\"#/api/Ext.layout.container.Card\" rel=\"Ext.layout.container.Card\" class=\"docClass\">Card layout</a>.</p>\n",
  "extends": "Ext.layout.container.Fit",
  "href": "AbstractCard.html#Ext-layout-container-AbstractCard",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "AbstractCard.html",
  "subclasses": [
    "Ext.layout.container.Card"
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
        "type": "Boolean",
        "doc": "<p>True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the layout is rendered (defaults to false).  If there is a significant amount of content or\na lot of heavy controls being rendered into panels that are not displayed by default, setting this to\ntrue might improve performance.</p>\n",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-cfg-deferredRender",
        "linenr": 18,
        "html_filename": "AbstractCard.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to render each contained item at the time it becomes active, false to render all contained items\nas soon as the ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "tagname": "cfg",
        "name": "deferredRender",
        "owner": "Ext.layout.container.AbstractCard",
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
        "doc": "<p>Return the active (visible) component in the layout.</p>\n",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getActiveItem",
        "linenr": 74,
        "html_filename": "AbstractCard.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Return the active (visible) component in the layout. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "tagname": "method",
        "name": "getActiveItem",
        "owner": "Ext.layout.container.AbstractCard",
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
        "doc": "<p>Return the active (visible) component in the layout to the next card</p>\n",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getNext",
        "linenr": 133,
        "html_filename": "AbstractCard.html",
        "alias": null,
        "return": {
          "doc": "<p>The next component or false.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Return the active (visible) component in the layout to the next card ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "tagname": "method",
        "name": "getNext",
        "owner": "Ext.layout.container.AbstractCard",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Return the active (visible) component in the layout to the previous card</p>\n",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-getPrev",
        "linenr": 157,
        "html_filename": "AbstractCard.html",
        "alias": null,
        "return": {
          "doc": "<p>The previous component or false.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Return the active (visible) component in the layout to the previous card ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "tagname": "method",
        "name": "getPrev",
        "owner": "Ext.layout.container.AbstractCard",
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
        "doc": "<p>Sets the active (visible) component in the layout to the next card</p>\n",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-next",
        "linenr": 146,
        "html_filename": "AbstractCard.html",
        "alias": null,
        "return": {
          "doc": "<p>the activated component or false when nothing activated.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Sets the active (visible) component in the layout to the next card ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "tagname": "method",
        "name": "next",
        "owner": "Ext.layout.container.AbstractCard",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the active (visible) component in the layout to the previous card</p>\n",
        "href": "AbstractCard.html#Ext-layout-container-AbstractCard-method-prev",
        "linenr": 170,
        "html_filename": "AbstractCard.html",
        "alias": null,
        "return": {
          "doc": "<p>the activated component or false when nothing activated.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Sets the active (visible) component in the layout to the previous card ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
        "private": false,
        "tagname": "method",
        "name": "prev",
        "owner": "Ext.layout.container.AbstractCard",
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
    "Ext.layout.container.AbstractFit",
    "Ext.layout.container.Fit"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/layout/container/AbstractCard.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.layout.container.AbstractCard",
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