Ext.data.JsonP.Ext_CompositeElement({
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
  "doc": "<p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter\nmembers, or to perform collective actions upon the whole set.</p>\n\n\n<p>Although they are not listed, this class supports all of the methods of <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> and\n<a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a>. The methods from these classes will be performed on all the elements in this collection.</p>\n\n\n<p>All methods return <i>this</i> and can be chained.</p>\n\n\n<p>Usage:</p>\n\n<pre><code>var els = Ext.select(\"#some-el div.some-class\", true);\n// or select directly from an existing element\nvar el = Ext.get('some-el');\nel.select('div.some-class', true);\n\nels.setWidth(100); // all elements become 100 width\nels.hide(true); // all elements fade out and hide\n// or\nels.setWidth(100).hide(true);\n</code></pre>\n\n",
  "extends": "Ext.CompositeElementLite",
  "href": "CompositeElement2.html#Ext-CompositeElement",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "CompositeElement2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Adds elements to this Composite object.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-add",
        "linenr": 74,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>This Composite object.</p>\n",
          "type": "Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either an Array of DOM elements to add, or another Composite object who's elements should be added.</p>\n",
            "type": "HTMLElement[]/Ext.CompositeElement",
            "optional": false,
            "name": "els"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds elements to this Composite object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "add",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all elements.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-clear",
        "linenr": 245,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all elements. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "clear",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns true if this composite contains the passed element</p>\n",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-contains",
        "linenr": 35,
        "html_filename": "CompositeElementLite-more.html",
        "alias": null,
        "return": {
          "doc": "<p>Boolean</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>{String/HTMLElement/Ext.Element/Number} The id of an element, or an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns true if this composite contains the passed element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "tagname": "method",
        "name": "contains",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calls the passed function for each element in this composite.</p>\n\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-each",
        "linenr": 144,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The function to call. The function is passed the following parameters:<ul>\n<li><b>el</b> : Element<div class=\"sub-desc\">The current Element in the iteration.\n<b>This is the flyweight (shared) <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> instance, so if you require a\na reference to the dom node, use el.dom.</b></div></li>\n<li><b>c</b> : Composite<div class=\"sub-desc\">This Composite object.</div></li>\n<li><b>idx</b> : Number<div class=\"sub-desc\">The zero-based index in the iteration.</div></li>\n</ul></p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) The scope (<i>this</i> reference) in which the function is executed. (defaults to the Element)</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Calls the passed function for each element in this composite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clears this Composite and adds the elements passed.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-fill",
        "linenr": 174,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either an array of DOM elements, or another Composite from which to fill this Composite.</p>\n",
            "type": "HTMLElement[]/Ext.CompositeElement",
            "optional": false,
            "name": "els"
          }
        ],
        "deprecated": null,
        "shortDoc": "Clears this Composite and adds the elements passed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "fill",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Filters this composite to only elements that match the passed selector.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-filter",
        "linenr": 186,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>A string CSS selector or a comparison function.\nThe comparison function will be called with the following arguments:<ul>\n<li><code>el</code> : <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class=\"sub-desc\">The current DOM element.</div></li>\n<li><code>index</code> : Number<div class=\"sub-desc\">The current index within the collection.</div></li>\n</ul></p>\n",
            "type": "String/Function",
            "optional": false,
            "name": "selector"
          }
        ],
        "deprecated": null,
        "shortDoc": "Filters this composite to only elements that match the passed selector. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "filter",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the first Element</p>\n",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-first",
        "linenr": 19,
        "html_filename": "CompositeElementLite-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the first Element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "tagname": "method",
        "name": "first",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the number of elements in this Composite.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-getCount",
        "linenr": 67,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>Number</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the number of elements in this Composite. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "getCount",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Find the index of the passed element within the composite collection.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-indexOf",
        "linenr": 213,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>Number The index of the passed <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> in the composite collection, or -1 if not found.</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>{Mixed} The id of an element, or an <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, or an HtmlElement to find within the composite collection.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Find the index of the passed element within the composite collection. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "indexOf",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a flyweight Element of the dom element object at the specified index</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-item",
        "linenr": 114,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a flyweight Element of the dom element object at the specified index ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "item",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the last Element</p>\n",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-last",
        "linenr": 27,
        "html_filename": "CompositeElementLite-more.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.Element"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns the last Element ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "tagname": "method",
        "name": "last",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes the specified element(s).</p>\n",
        "href": "CompositeElementLite-more.html#Ext-CompositeElementLite-method-removeElement",
        "linenr": 44,
        "html_filename": "CompositeElementLite-more.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nor an array of any of those.</p>\n",
            "type": "String/HTMLElement/Ext.Element/Number",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>(optional) True to also remove the element from the document</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "removeDom"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes the specified element(s). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite-more.js",
        "private": false,
        "tagname": "method",
        "name": "removeElement",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces the specified element with the passed element.</p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-method-replaceElement",
        "linenr": 222,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.CompositeElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The id of an element, the Element itself, the index of the element in this composite\nto replace.</p>\n",
            "type": "String/HTMLElement/Ext.Element/Number",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The id of an element or the Element itself.</p>\n",
            "type": "String/Ext.Element",
            "optional": false,
            "name": "replacement"
          },
          {
            "doc": "<p>(Optional) True to remove and replace the element in the document too.</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "domReplace"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces the specified element with the passed element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "method",
        "name": "replaceElement",
        "owner": "Ext.CompositeElementLite",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "HTMLElement",
        "doc": "<p>The Array of DOM elements which this CompositeElement encapsulates. Read-only.</p>\n\n\n<p>This will not <i>usually</i> be accessed in developers' code, but developers wishing\nto augment the capabilities of the CompositeElementLite class may use it when adding\nmethods to the class.</p>\n\n\n<p>For example to add the <code>nextAll</code> method to the class to <b>add</b> all\nfollowing siblings of selected elements, the code would be</p>\n\n\n<p><code></p>\n\n<pre>Ext.override(Ext.CompositeElementLite, {\n    nextAll: function() {\n        var els = this.elements, i, l = els.length, n, r = [], ri = -1;\n\n//      Loop through all elements in this Composite, accumulating\n//      an Array of all siblings.\n        for (i = 0; i < l; i++) {\n            for (n = els[i].nextSibling; n; n = n.nextSibling) {\n                r[++ri] = n;\n            }\n        }\n\n//      Add all found siblings to this Composite\n        return this.add(r);\n    }\n});</pre>\n\n\n<p></code></p>\n",
        "href": "CompositeElementLite.html#Ext-CompositeElementLite-property-elements",
        "linenr": 20,
        "html_filename": "CompositeElementLite.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The Array of DOM elements which this CompositeElement encapsulates. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElementLite.js",
        "private": false,
        "tagname": "property",
        "name": "elements",
        "owner": "Ext.CompositeElementLite",
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
    "Ext.CompositeElementLite"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElement.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.CompositeElement",
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