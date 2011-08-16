Ext.data.JsonP.Ext_tree_plugin_TreeViewDragDrop({
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
  "doc": "<p>This plugin provides drag and/or drop functionality for a TreeView.</p>\n\n\n<p>It creates a specialized instance of <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#/api/Ext.tree.View\" rel=\"Ext.tree.View\" class=\"docClass\">TreeView</a>\nand loads the data object which is passed to a cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s methods with the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> <u>and</u> the control key was pressed when the drag operation was begun.</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n\n\n<p>It also creates a specialized instance of <a href=\"#/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are members of the same\nddGroup which processes such data objects.</p>\n\n\n<p>Adding this plugin to a view means that two new events may be fired from the client TreeView, <code><a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-event-beforedrop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-event-beforedrop\" class=\"docClass\">beforedrop</a></code> and\n<code><a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-event-drop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-event-drop\" class=\"docClass\">drop</a></code></p>\n\n",
  "extends": "Ext.AbstractPlugin",
  "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "TreeViewDragDrop.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>True if drops on the tree container (outside of a specific tree node) are allowed (defaults to false)</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-allowContainerDrop",
        "linenr": 100,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "allowContainerDrop",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the parent when dropped (defaults to false)</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-allowParentInsert",
        "linenr": 93,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "allowParentInsert",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>True if the tree should only allow append drops (use for trees which are sorted, defaults to false)</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-appendOnly",
        "linenr": 106,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "appendOnly",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\nused by this plugin will only interact with other drag drop objects in the same group (defaults to 'TreeDD').</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-ddGroup",
        "linenr": 112,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "ddGroup",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The ddGroup to which the DragZone will belong.</p>\n\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-dragGroup",
        "linenr": 119,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The ddGroup to which the DragZone will belong. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "dragGroup",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The ddGroup to which the DropZone will belong.</p>\n\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-dropGroup",
        "linenr": 126,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The ddGroup to which the DropZone will belong. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "dropGroup",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow dragging items from the View </p>\n\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-enableDrag",
        "linenr": 147,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "enableDrag",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow the View from accepting drop gestures</p>\n\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-enableDrop",
        "linenr": 140,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "enableDrop",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target (defaults to 1000)</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-expandDelay",
        "linenr": 133,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "expandDelay",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). The color must be a 6 digit hex value, without\na preceding '#'. See also <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a> and <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-nodeHighlightColor",
        "linenr": 154,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "nodeHighlightColor",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-nodeHighlightOnDrop",
        "linenr": 161,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "nodeHighlightOnDrop",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.plugin.TreeViewDragDrop-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a>.</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-cfg-nodeHighlightOnRepair",
        "linenr": 169,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "cfg",
        "name": "nodeHighlightOnRepair",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      }
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
      {
        "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b></p>\n\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the TreeView.\n\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-event-beforedrop",
        "linenr": 33,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p></p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy\nwill animate back to the point from which the drag began.</p>\n\n\n<p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but\nthat the gesture was valid, and that the repair operation should not take place.</p>\n\n\n<p>Any other return value continues with the data transfer operation.</p>\n\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          },
          {
            "doc": "<p>The Model over which the drop gesture took place.</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "overModel"
          },
          {
            "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n",
            "type": "String",
            "optional": false,
            "name": "dropPosition"
          },
          {
            "doc": "<p>A function to call to complete the data transfer operation and either move or copy Model instances from the source\nView's Store to the destination View's Store.</p>\n\n\n<p>This is useful when you want to perform some kind of asynchronous processing before confirming\nthe drop, such as an <a href=\"#/api/Ext.window.MessageBox-method-confirm\" rel=\"Ext.window.MessageBox-method-confirm\" class=\"docClass\">confirm</a> call, or an Ajax request.</p>\n\n\n<p>Return <code>0</code> from this event handler, and call the <code>dropFunction</code> at any time to perform the data transfer.</p>\n\n",
            "type": "Function",
            "optional": false,
            "name": "dropFunction"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "This event is fired through the TreeView. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "event",
        "name": "beforedrop",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b>\nFired when a drop operation has been completed and the data has been moved or copied.</p>\n",
        "href": "TreeViewDragDrop.html#Ext-tree-plugin-TreeViewDragDrop-event-drop",
        "linenr": 67,
        "html_filename": "TreeViewDragDrop.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "node"
          },
          {
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n",
            "type": "Object",
            "optional": false,
            "name": "data"
          },
          {
            "doc": "<p>The Model over which the drop gesture took place.</p>\n",
            "type": "Ext.data.Model",
            "optional": false,
            "name": "overModel"
          },
          {
            "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n",
            "type": "String",
            "optional": false,
            "name": "dropPosition"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "This event is fired through the TreeView. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "tagname": "event",
        "name": "drop",
        "owner": "Ext.tree.plugin.TreeViewDragDrop",
        "static": false,
        "inheritable": false
      }
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
    "Ext.AbstractPlugin"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.tree.plugin.TreeViewDragDrop",
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