Ext.data.JsonP.Ext_dd_DragDropManager({
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
  "doc": "<p>DragDropManager is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n",
  "extends": "Ext.Base",
  "href": "DragDropManager.html#Ext-dd-DragDropManager",
  "allMixins": [

  ],
  "linenr": 10,
  "xtype": null,
  "html_filename": "DragDropManager.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "linenr": 269,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the result after calling the overridden method</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "type": "Array/Arguments",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "callOverridden",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-callParent",
        "linenr": 124,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the result from the superclass' method</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [
          {
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "type": "Array/Arguments",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Call the parent's overridden method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "callParent",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getBestMatch",
        "linenr": 740,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The best single match</p>\n",
          "type": "Ext.dd.DragDrop"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array of drag and drop objects\ntargeted</p>\n",
            "type": "Ext.dd.DragDrop[]",
            "optional": false,
            "name": "dds"
          }
        ],
        "deprecated": null,
        "shortDoc": "Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getBestMatch",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getCss",
        "linenr": 1022,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The style property of the element</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the elment to get</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style) ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getCss",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the DragDrop instance for a given id</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getDDById",
        "linenr": 421,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>the drag drop object, null if it is not found</p>\n",
          "type": "Ext.dd.DragDrop"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the DragDrop object</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the DragDrop instance for a given id ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getDDById",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the actual DOM element</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getElement",
        "linenr": 1011,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The element</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the id of the elment to get</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": {
          "doc": null,
          "version": null,
          "text": "<p>use Ext.lib.Ext.getDom instead</p>\n",
          "tagname": "deprecated"
        },
        "shortDoc": "Returns the actual DOM element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getElement",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getLocation",
        "linenr": 854,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n",
            "type": "Ext.dd.DragDrop",
            "optional": false,
            "name": "oDD"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getLocation",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the X position of an html element</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getPosX",
        "linenr": 1061,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>the X coordinate</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element for which to get the position</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the X position of an html element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getPosX",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the Y position of an html element</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getPosY",
        "linenr": 1070,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>the Y coordinate</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element for which to get the position</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the Y position of an html element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getPosY",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getRelated",
        "linenr": 349,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>the related instances</p>\n",
          "type": "Ext.dd.DragDrop[]"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the obj to get related data for</p>\n",
            "type": "Ext.dd.DragDrop",
            "optional": false,
            "name": "p_oDD"
          },
          {
            "doc": "<p>if true, only return targetable objs</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "bTargetsOnly"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the drag and drop instances that are in all groups the\npassed in instance belongs to. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getRelated",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the scrollLeft</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getScrollLeft",
        "linenr": 1150,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>the document's scrollTop</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the scrollLeft ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getScrollLeft",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Gets the scrollTop</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getScrollTop",
        "linenr": 1142,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>the document's scrollTop</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Gets the scrollTop ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getScrollTop",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the specified element style property</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getStyle",
        "linenr": 1132,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>The value of the style property</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>the style property</p>\n",
            "type": "String",
            "optional": false,
            "name": "styleProp"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the specified element style property ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "getStyle",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or not it was\nclicked.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-handleWasClicked",
        "linenr": 1205,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the html element to inspect</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "node"
          }
        ],
        "deprecated": null,
        "shortDoc": "Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "handleWasClicked",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "linenr": 63,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n",
          "type": "Object"
        },
        "protected": true,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Initialize configuration for this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "initConfig",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isDragDrop",
        "linenr": 337,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>true if this element is a DragDrop item,\nfalse otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element id to check</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "isDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isHandle",
        "linenr": 408,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>true if this element is a DragDrop handle, false\notherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element id to check</p>\n",
            "type": "String",
            "optional": false,
            "name": "id"
          }
        ],
        "deprecated": null,
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "isHandle",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLegalTarget",
        "linenr": 374,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>true if the target is a legal target for the\ndd obj</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the drag obj</p>\n",
            "type": "Ext.dd.DragDrop",
            "optional": false,
            "name": "oDD"
          },
          {
            "doc": "<p>the target</p>\n",
            "type": "Ext.dd.DragDrop",
            "optional": false,
            "name": "oTargetDD"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if the specified dd target is a legal target for\nthe specifice drag obj ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "isLegalTarget",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Is drag and drop locked?</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLocked",
        "linenr": 200,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>True if drag and drop is locked, false otherwise.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Is drag and drop locked? ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "isLocked",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isTypeOfDD",
        "linenr": 394,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>true if typeof oDD = DragDrop</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>object to evaluate</p>\n",
            "type": "Object",
            "optional": false,
            "name": "the"
          }
        ],
        "deprecated": null,
        "shortDoc": "My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "isTypeOfDD",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Lock all drag and drop functionality</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-lock",
        "linenr": 188,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Lock all drag and drop functionality ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "lock",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sets the x/y position of an element to the location of the\ntarget element.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-moveToEl",
        "linenr": 1158,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to move</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "moveEl"
          },
          {
            "doc": "<p>The position reference element</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "targetEl"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sets the x/y position of an element to the location of the\ntarget element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "moveToEl",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Numeric array sort function</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-numericSort",
        "linenr": 1169,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>positive, negative or 0</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "a"
          },
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "b"
          }
        ],
        "deprecated": null,
        "shortDoc": "Numeric array sort function ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "numericSort",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\nExt.dd.DragDropManager.refreshCache(ddinstance.groups);\n</code>\nAlternatively:\n<code>\nExt.dd.DragDropManager.refreshCache({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-refreshCache",
        "linenr": 786,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>an associative array of groups to refresh</p>\n",
            "type": "Object",
            "optional": false,
            "name": "groups"
          }
        ],
        "deprecated": null,
        "shortDoc": "Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "refreshCache",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regDragDrop",
        "linenr": 274,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the DragDrop object to register</p>\n",
            "type": "Ext.dd.DragDrop",
            "optional": false,
            "name": "oDD"
          },
          {
            "doc": "<p>the name of the group this element belongs to</p>\n",
            "type": "String",
            "optional": false,
            "name": "sGroup"
          }
        ],
        "deprecated": null,
        "shortDoc": "Each DragDrop instance must be registered with the DragDropManager. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "regDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regHandle",
        "linenr": 322,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the DragDrop id this element is a handle for</p>\n",
            "type": "String",
            "optional": false,
            "name": "sDDId"
          },
          {
            "doc": "<p>the id of the element that is the drag\nhandle</p>\n",
            "type": "String",
            "optional": false,
            "name": "sHandleId"
          }
        ],
        "deprecated": null,
        "shortDoc": "Each DragDrop handle element must be registered. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "regHandle",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-startDrag",
        "linenr": 476,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the X position of the original mousedown</p>\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "<p>the Y position of the original mousedown</p>\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "startDrag",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-statics",
        "linenr": 199,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Class"
        },
        "protected": true,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "statics",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-stopEvent",
        "linenr": 520,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the event as returned by this.getEvent()</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Utility to stop event propagation and event default, if these\nfeatures are turned on. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "stopEvent",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Swap two nodes.  In IE, we use the native method, for others we\nemulate the IE behavior</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-swapNode",
        "linenr": 1079,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the first node to swap</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "n1"
          },
          {
            "doc": "<p>the other node to swap</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "n2"
          }
        ],
        "deprecated": null,
        "shortDoc": "Swap two nodes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "swapNode",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Unlock all drag and drop functionality</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-unlock",
        "linenr": 194,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Unlock all drag and drop functionality ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "unlock",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-verifyEl",
        "linenr": 827,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "return": {
          "doc": "<p>true if the element looks usable</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the element to check</p>\n",
            "type": "HTMLElement",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "This checks to make sure an element exists and is in the DOM. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "method",
        "name": "verifyEl",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Number",
        "doc": "<p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-INTERSECT",
        "linenr": 129,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "INTERSECT",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-POINT",
        "linenr": 121,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "POINT",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickPixelThresh",
        "linenr": 223,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "clickPixelThresh",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickTimeThresh",
        "linenr": 231,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "clickTimeThresh",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The current drag and drop mode.  Default: POINT</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-mode",
        "linenr": 137,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The current drag and drop mode. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "mode",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-preventDefault",
        "linenr": 78,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Flag to determine if we should prevent the default behavior of the\nevents we define. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "preventDefault",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Ext.Class",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-property-self",
        "linenr": 18,
        "html_filename": "Base3.html",
        "alias": null,
        "protected": true,
        "deprecated": null,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "property",
        "name": "self",
        "owner": "Ext.Base",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-stopPropagation",
        "linenr": 87,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Flag to determine if we should stop the propagation of the events\nwe generate. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "stopPropagation",
        "owner": "Ext.dd.DragDropManager",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-useCache",
        "linenr": 215,
        "html_filename": "DragDropManager.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a...",
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "tagname": "property",
        "name": "useCache",
        "owner": "Ext.dd.DragDropManager",
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
  "singleton": true,
  "protected": false,
  "superclasses": [
    "Ext.Base"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.dd.DragDropManager",
  "alternateClassNames": [
    "Ext.dd.DragDropMgr",
    "Ext.dd.DDM"
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