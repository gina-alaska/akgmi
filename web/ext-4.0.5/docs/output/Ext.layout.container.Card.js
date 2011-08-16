Ext.data.JsonP.Ext_layout_container_Card({
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
  "doc": "<p>This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be\nvisible at any given time.  This layout style is most commonly used for wizards, tab implementations, etc.\nThis class is intended to be extended or created via the layout:'card' <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">Ext.container.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n<p>The CardLayout's focal method is <a href=\"#/api/Ext.layout.container.Card-method-setActiveItem\" rel=\"Ext.layout.container.Card-method-setActiveItem\" class=\"docClass\">setActiveItem</a>.  Since only one panel is displayed at a time,\nthe only way to move from one Component to the next is by calling setActiveItem, passing the id or index of\nthe next panel to display.  The layout itself does not provide a user interface for handling this navigation,\nso that functionality must be provided by the developer.</p>\n\n<p>To change the active card of a container, call the setActiveItem method of its layout:</p>\n\n<pre><code>var p = new Ext.panel.Panel({\n    layout: 'card',\n    items: [\n        {html: 'Card 1'},\n        {html: 'Card 2'}\n    ],\n    renderTo: Ext.getBody()\n});\n\np.getLayout().setActiveItem(1);\n</code></pre>\n\n<p>In the following example, a simplistic wizard setup is demonstrated.  A button bar is added\nto the footer of the containing panel to provide navigation buttons.  The buttons will be handled by a\ncommon navigation routine.  Note that other uses of a CardLayout (like a tab control) would require a\ncompletely different implementation.  For serious implementations, a better approach would be to extend\nCardLayout to provide the custom functionality needed.</p>\n\n<p><p><img src=\"doc-resources/Ext.layout.container.Card/Ext.layout.container.Card.png\" alt=\"Ext.layout.container.Card container layout\"></p></p>\n\n<p>Example usage:</p>\n\n<pre><code>var navigate = function(panel, direction){\n    // This routine could contain business logic required to manage the navigation steps.\n    // It would call setActiveItem as needed, manage navigation button state, handle any\n    // branching logic that might be required, handle alternate actions like cancellation\n    // or finalization, etc.  A complete wizard implementation could get pretty\n    // sophisticated depending on the complexity required, and should probably be\n    // done as a subclass of CardLayout in a real-world implementation.\n    var layout = panel.getLayout();\n    layout[direction]();\n    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());\n    Ext.getCmp('move-next').setDisabled(!layout.getNext());\n};\n\nExt.create('Ext.panel.Panel', {\n    title: 'Example Wizard',\n    width: 300,\n    height: 200,\n    layout: 'card',\n    bodyStyle: 'padding:15px',\n    defaults: {\n        // applied to each contained panel\n        border: false\n    },\n    // just an example of one possible navigation scheme, using buttons\n    bbar: [\n        {\n            id: 'move-prev',\n            text: 'Back',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"prev\");\n            },\n            disabled: true\n        },\n        '-&gt;', // greedy spacer so that the buttons are aligned to each side\n        {\n            id: 'move-next',\n            text: 'Next',\n            handler: function(btn) {\n                navigate(btn.up(\"panel\"), \"next\");\n            }\n        }\n    ],\n    // the panels (or \"cards\") within the layout\n    items: [{\n        id: 'card-0',\n        html: '&lt;h1&gt;Welcome to the Wizard!&lt;/h1&gt;&lt;p&gt;Step 1 of 3&lt;/p&gt;'\n    },{\n        id: 'card-1',\n        html: '&lt;p&gt;Step 2 of 3&lt;/p&gt;'\n    },{\n        id: 'card-2',\n        html: '&lt;h1&gt;Congratulations!&lt;/h1&gt;&lt;p&gt;Step 3 of 3 - Complete&lt;/p&gt;'\n    }],\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "extends": "Ext.layout.container.AbstractCard",
  "href": "Card.html#Ext-layout-container-Card",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Card.html",
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
      },
      {
        "doc": "<p>Makes the given card active.</p>\n\n<pre><code>var card1 = Ext.create('Ext.panel.Panel', {itemId: 'card-1'});\nvar card2 = Ext.create('Ext.panel.Panel', {itemId: 'card-2'});\nvar panel = Ext.create('Ext.panel.Panel', {\n    layout: 'card',\n    activeItem: 0,\n    items: [card1, card2]\n});\n// These are all equivalent\npanel.getLayout().setActiveItem(card2);\npanel.getLayout().setActiveItem('card-2');\npanel.getLayout().setActiveItem(1);\n</code></pre>\n",
        "href": "Card.html#Ext-layout-container-Card-method-setActiveItem",
        "linenr": 102,
        "html_filename": "Card.html",
        "alias": null,
        "return": {
          "doc": "<p>the activated component or false when nothing activated.\nFalse is returned also when trying to activate an already active card.</p>\n",
          "type": "Ext.Component"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The component, component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a>,\n<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>, or index of component.</p>\n",
            "type": "Ext.Component/Number/String",
            "optional": false,
            "name": "newCard"
          }
        ],
        "deprecated": null,
        "shortDoc": "Makes the given card active. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Card.js",
        "private": false,
        "tagname": "method",
        "name": "setActiveItem",
        "owner": "Ext.layout.container.Card",
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
    "Ext.layout.container.Fit",
    "Ext.layout.container.AbstractCard"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/layout/container/Card.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.layout.container.Card",
  "alternateClassNames": [
    "Ext.layout.CardLayout"
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