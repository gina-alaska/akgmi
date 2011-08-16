Ext.data.JsonP.Ext_DomHelper({
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
  "doc": "<p>The DomHelper class provides a layer of abstraction from DOM and transparently supports creating\nelements via DOM or using HTML fragments. It also has the ability to create HTML fragment templates\nfrom your DOM building code.</p>\n\n\n\n\n<p><b><u>DomHelper element specification object</u></b></p>\n\n\n<p>A specification object is used when creating elements. Attributes of this object\nare assumed to be element attributes, except for 4 special attributes:\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>tag</tt></b> : <div class=\"sub-desc\">The tag name of the element</div></li>\n<li><b><tt>children</tt></b> : or <tt>cn</tt><div class=\"sub-desc\">An array of the\nsame kind of element definition objects to be created and appended. These can be nested\nas deep as you want.</div></li>\n<li><b><tt>cls</tt></b> : <div class=\"sub-desc\">The class attribute of the element.\nThis will end up being either the \"class\" attribute on a HTML fragment or className\nfor a DOM node, depending on whether DomHelper is using fragments or DOM.</div></li>\n<li><b><tt>html</tt></b> : <div class=\"sub-desc\">The innerHTML for the element</div></li>\n</ul></div></p>\n\n\n<p><b>NOTE:</b> For other arbitrary attributes, the value will currently <b>not</b> be automatically\nHTML-escaped prior to building the element's HTML string. This means that if your attribute value\ncontains special characters that would not normally be allowed in a double-quoted attribute value,\nyou <b>must</b> manually HTML-encode it beforehand (see <a href=\"#/api/Ext.String-method-htmlEncode\" rel=\"Ext.String-method-htmlEncode\" class=\"docClass\">Ext.String.htmlEncode</a>) or risk\nmalformed HTML being created. This behavior may change in a future release.</p>\n\n\n\n\n<p><b><u>Insertion methods</u></b></p>\n\n\n<p>Commonly used insertion methods:\n<div class=\"mdetail-params\"><ul>\n<li><b><tt><a href=\"#/api/Ext.DomHelper-method-append\" rel=\"Ext.DomHelper-method-append\" class=\"docClass\">append</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#/api/Ext.DomHelper-method-insertBefore\" rel=\"Ext.DomHelper-method-insertBefore\" class=\"docClass\">insertBefore</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#/api/Ext.DomHelper-method-insertAfter\" rel=\"Ext.DomHelper-method-insertAfter\" class=\"docClass\">insertAfter</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#/api/Ext.DomHelper-method-overwrite\" rel=\"Ext.DomHelper-method-overwrite\" class=\"docClass\">overwrite</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">createTemplate</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#/api/Ext.DomHelper-method-insertHtml\" rel=\"Ext.DomHelper-method-insertHtml\" class=\"docClass\">insertHtml</a></tt></b> : <div class=\"sub-desc\"></div></li>\n</ul></div></p>\n\n\n\n\n<p><b><u>Example</u></b></p>\n\n\n<p>This is an example, where an unordered list with 3 children items is appended to an existing\nelement with id <tt>'my-div'</tt>:<br>\n \n<pre><code>var dh = Ext.DomHelper; // create shorthand alias\n// specification object\nvar spec = {\n    id: 'my-ul',\n    tag: 'ul',\n    cls: 'my-list',\n    // append children after creating\n    children: [     // may also specify 'cn' instead of 'children'\n        {tag: 'li', id: 'item0', html: 'List Item 0'},\n        {tag: 'li', id: 'item1', html: 'List Item 1'},\n        {tag: 'li', id: 'item2', html: 'List Item 2'}\n    ]\n};\nvar list = dh.append(\n    'my-div', // the context element 'my-div' can either be the id or the actual node\n    spec      // the specification object\n);\n </code></pre></p>\n\n\n<p>Element creation specification parameters in this class may also be passed as an Array of\nspecification objects. This can be used to insert multiple sibling nodes into an existing\ncontainer very efficiently. For example, to add more list items to the example above:\n<pre><code>dh.append('my-ul', [\n    {tag: 'li', id: 'item3', html: 'List Item 3'},\n    {tag: 'li', id: 'item4', html: 'List Item 4'}\n]);\n</code></pre></p>\n\n\n\n\n<p><b><u>Templating</u></b></p>\n\n\n<p>The real power is in the built-in templating. Instead of creating or appending any elements,\n<tt><a href=\"#/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">createTemplate</a></tt> returns a Template object which can be used over and over to\ninsert new elements. Revisiting the example above, we could utilize templating this time:\n<pre><code>// create the node\nvar list = dh.append('my-div', {tag: 'ul', cls: 'my-list'});\n// get template\nvar tpl = dh.createTemplate({tag: 'li', id: 'item{0}', html: 'List Item {0}'});\n\nfor(var i = 0; i < 5, i++){\n    tpl.append(list, [i]); // use template to append to the actual node\n}\n</code></pre></p>\n<p>An example using a template:\n<pre><code>var html = '<a id=\"{0}\" href=\"{1}\" class=\"nav\">{2}</a>';\n\nvar tpl = new Ext.DomHelper.createTemplate(html);\ntpl.append('blog-roll', ['link1', 'http://www.edspencer.net/', \"Ed&#39;s Site\"]);\ntpl.append('blog-roll', ['link2', 'http://www.dustindiaz.com/', \"Dustin&#39;s Site\"]);\n</code></pre></p>\n\n<p>The same example using named parameters:\n<pre><code>var html = '<a id=\"{id}\" href=\"{url}\" class=\"nav\">{text}</a>';\n\nvar tpl = new Ext.DomHelper.createTemplate(html);\ntpl.append('blog-roll', {\n    id: 'link1',\n    url: 'http://www.edspencer.net/',\n    text: \"Ed&#39;s Site\"\n});\ntpl.append('blog-roll', {\n    id: 'link2',\n    url: 'http://www.dustindiaz.com/',\n    text: \"Dustin&#39;s Site\"\n});\n</code></pre></p>\n\n<p><b><u>Compiling Templates</u></b></p>\n<p>Templates are applied using regular expressions. The performance is great, but if\nyou are adding a bunch of DOM elements using the same template, you can increase\nperformance even further by <a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">&quot;compiling&quot;</a> the template.\nThe way \"<a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile()</a>\" works is the template is parsed and\nbroken up at the different variable points and a dynamic function is created and eval'ed.\nThe generated function performs string concatenation of these parts and the passed\nvariables instead of using regular expressions.\n<pre><code>var html = '<a id=\"{id}\" href=\"{url}\" class=\"nav\">{text}</a>';\n\nvar tpl = new Ext.DomHelper.createTemplate(html);\ntpl.compile();\n\n//... use template like normal\n</code></pre></p>\n\n<p><b><u>Performance Boost</u></b></p>\n<p>DomHelper will transparently create HTML fragments when it can. Using HTML fragments instead\nof DOM can significantly boost performance.</p>\n<p>Element creation specification parameters may also be strings. If <a href=\"#/api/Ext.DomHelper-property-useDom\" rel=\"Ext.DomHelper-property-useDom\" class=\"docClass\">useDom</a> is <tt>false</tt>,\nthen the string is used as innerHTML. If <a href=\"#/api/Ext.DomHelper-property-useDom\" rel=\"Ext.DomHelper-property-useDom\" class=\"docClass\">useDom</a> is <tt>true</tt>, a string specification\nresults in the creation of a text node. Usage:</p>\n<pre><code>Ext.DomHelper.useDom = true; // force it to use DOM; reduces performance\n</code></pre>\n\n",
  "extends": null,
  "href": "DomHelper.html#Ext-DomHelper",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "DomHelper.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Creates new DOM element(s) and appends them to el.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-append",
        "linenr": 504,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The DOM object spec (and children) or raw HTML blob</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DOM element(s) and appends them to el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "append",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Applies a style specification to an element.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-applyStyles",
        "linenr": 356,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The element to apply styles to</p>\n",
            "type": "String/HTMLElement",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>A style specification string e.g. 'width:100px', or object in the form {width:'100px'}, or\na function which returns such a specification.</p>\n",
            "type": "String/Object/Function",
            "optional": false,
            "name": "styles"
          }
        ],
        "deprecated": null,
        "shortDoc": "Applies a style specification to an element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "applyStyles",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates new DOM element(s) without inserting them to the document.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-createDom",
        "linenr": 530,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new uninserted node</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The DOM object spec (and children) or raw HTML blob</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DOM element(s) without inserting them to the document. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "createDom",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a new <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> from the DOM object spec.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-createTemplate",
        "linenr": 541,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new template</p>\n",
          "type": "Ext.Template"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The DOM object spec (and children)</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a new Ext.Template from the DOM object spec. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "createTemplate",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates new DOM element(s) and inserts them after el.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-insertAfter",
        "linenr": 482,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The DOM object spec (and children)</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DOM element(s) and inserts them after el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "insertAfter",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates new DOM element(s) and inserts them before el.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-insertBefore",
        "linenr": 471,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The DOM object spec (and children) or raw HTML blob</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DOM element(s) and inserts them before el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "insertBefore",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates new DOM element(s) and inserts them as the first child of el.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-insertFirst",
        "linenr": 493,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The DOM object spec (and children) or raw HTML blob</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DOM element(s) and inserts them as the first child of el. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "insertFirst",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts an HTML fragment into the DOM.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-insertHtml",
        "linenr": 377,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node</p>\n",
          "type": "HTMLElement"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Where to insert the html in relation to el - beforeBegin, afterBegin, beforeEnd, afterEnd.</p>\n\n<p>For example take the following HTML: <code>&lt;div&gt;Contents&lt;/div&gt;</code></p>\n\n<p>Using different <code>where</code> values inserts element to the following places:</p>\n\n<ul>\n<li>beforeBegin: <code>&lt;HERE&gt;&lt;div&gt;Contents&lt;/div&gt;</code></li>\n<li>afterBegin: <code>&lt;div&gt;&lt;HERE&gt;Contents&lt;/div&gt;</code></li>\n<li>beforeEnd: <code>&lt;div&gt;Contents&lt;HERE&gt;&lt;/div&gt;</code></li>\n<li>afterEnd: <code>&lt;div&gt;Contents&lt;/div&gt;&lt;HERE&gt;</code></li>\n</ul>\n\n",
            "type": "String",
            "optional": false,
            "name": "where"
          },
          {
            "doc": "<p>The context element</p>\n",
            "type": "HTMLElement/TextNode",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The HTML fragment</p>\n",
            "type": "String",
            "optional": false,
            "name": "html"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts an HTML fragment into the DOM. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "insertHtml",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the markup for the passed Element(s) config.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-markup",
        "linenr": 347,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The DOM object spec (and children)</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the markup for the passed Element(s) config. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "markup",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates new DOM element(s) and overwrites the contents of el with them.</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-method-overwrite",
        "linenr": 515,
        "html_filename": "DomHelper.html",
        "alias": null,
        "return": {
          "doc": "<p>The new node</p>\n",
          "type": "HTMLElement/Ext.Element"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The context element</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          },
          {
            "doc": "<p>The DOM object spec (and children) or raw HTML blob</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "returnElement"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new DOM element(s) and overwrites the contents of el with them. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "method",
        "name": "overwrite",
        "owner": "Ext.DomHelper",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [

    ],
    "property": [
      {
        "type": "Boolean",
        "doc": "<p>True to force the use of DOM instead of html fragments</p>\n",
        "href": "DomHelper.html#Ext-DomHelper-property-useDom",
        "linenr": 538,
        "html_filename": "DomHelper.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
        "private": false,
        "tagname": "property",
        "name": "useDom",
        "owner": "Ext.DomHelper",
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

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/DomHelper.js",
  "private": false,
  "tagname": "class",
  "code_type": "assignment",
  "component": false,
  "name": "Ext.DomHelper",
  "alternateClassNames": [
    "Ext.core.DomHelper"
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