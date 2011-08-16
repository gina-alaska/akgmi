Ext.data.JsonP.Ext_Array({
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
  "doc": "<p>A set of useful static methods to deal with arrays; provide missing methods for older browsers.</p>\n",
  "extends": null,
  "href": "Array2.html#Ext-Array",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Array2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Filter through an array and remove empty item as defined in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">Ext.isEmpty</a></p>\n\n<p>See <a href=\"#/api/Ext.Array-method-filter\" rel=\"Ext.Array-method-filter\" class=\"docClass\">filter</a></p>\n",
        "href": "Array2.html#Ext-Array-method-clean",
        "linenr": 495,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>results</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": null,
        "shortDoc": "Filter through an array and remove empty item as defined in Ext.isEmpty\n\nSee filter ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "clean",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Clone a flat array without referencing the previous one. Note that this is different\nfrom Ext.clone since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method\nfor Array.prototype.slice.call(array)</p>\n",
        "href": "Array2.html#Ext-Array-method-clone",
        "linenr": 628,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The clone array</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": null,
        "shortDoc": "Clone a flat array without referencing the previous one. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "clone",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks whether or not the given <code>array</code> contains the specified <code>item</code></p>\n",
        "href": "Array2.html#Ext-Array-method-contains",
        "linenr": 311,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the array contains the item, false otherwise</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array to check</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The item to look for</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks whether or not the given array contains the specified item ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "contains",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Perform a set difference A-B by subtracting all items in array B from array A.</p>\n",
        "href": "Array2.html#Ext-Array-method-difference",
        "linenr": 713,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>difference</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "arrayA"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "arrayB"
          }
        ],
        "deprecated": null,
        "shortDoc": "Perform a set difference A-B by subtracting all items in array B from array A. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "difference",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Iterates an array or an iterable value and invoke the given callback function for each item.</p>\n\n<pre><code>var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];\n\nExt.Array.each(countries, function(name, index, countriesItSelf) {\n    console.log(name);\n});\n\nvar sum = function() {\n    var sum = 0;\n\n    Ext.Array.each(arguments, function(value) {\n        sum += value;\n    });\n\n    return sum;\n};\n\nsum(1, 2, 3); // returns 6\n</code></pre>\n\n<p>The iteration can be stopped by returning false in the function callback.</p>\n\n<pre><code>Ext.Array.each(countries, function(name, index, countriesItSelf) {\n    if (name === 'Singapore') {\n        return false; // break here\n    }\n});\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-each\" rel=\"Ext-method-each\" class=\"docClass\">Ext.each</a> is alias for <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n",
        "href": "Array2.html#Ext-Array-method-each",
        "linenr": 188,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>See description for the <code>fn</code> parameter.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to be iterated. If this\nargument is not iterable, the callback function is called once.</p>\n",
            "type": "Array/NodeList/Object",
            "optional": false,
            "name": "iterable"
          },
          {
            "doc": "<p>The callback function. If it returns false, the iteration stops and this method returns\nthe current <code>index</code>. Arguments passed to this callback function are:</p>\n\n<ul>\n<li><code>item</code> : Mixed - The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code> : Number - The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code> : Array/NodeList/Mixed - The <code>array</code> passed as the first argument to <code>Ext.Array.each</code></li>\n</ul>\n\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(Optional) Reverse the iteration order (loop from the end to the beginning)\nDefaults false</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "reverse"
          }
        ],
        "deprecated": null,
        "shortDoc": "Iterates an array or an iterable value and invoke the given callback function for each item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "each",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes items from an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and does not copy the\nremoved elements in order to return them (because very often they are ignored).</p>\n",
        "href": "Array2.html#Ext-Array-method-erase",
        "linenr": 920,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The array passed.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array on which to replace.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The number of items to remove at index.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "removeCount"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes items from an array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "erase",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function for each array element until the function returns a falsy value.\nIf such an item is found, the function will return false immediately.\nOtherwise, it will return true.</p>\n",
        "href": "Array2.html#Ext-Array-method-every",
        "linenr": 432,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>True if no false value is returned by the callback function.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>Callback function for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>Callback function scope</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function for each array element until the function returns a falsy value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "every",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true.</p>\n",
        "href": "Array2.html#Ext-Array-method-filter",
        "linenr": 543,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>results</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>Callback function for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>Callback function scope</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a new array with all of the elements of this array for which\nthe provided filtering function returns true. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "filter",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Recursively flattens into 1-d Array. Injects Arrays inline.</p>\n",
        "href": "Array2.html#Ext-Array-method-flatten",
        "linenr": 800,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": null,
        "shortDoc": "Recursively flattens into 1-d Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "flatten",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Iterates an array and invoke the given callback function for each item. Note that this will simply\ndelegate to the native Array.prototype.forEach method if supported.\nIt doesn't support stopping the iteration by returning false in the callback function like\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a>. However, performance could be much better in modern browsers comparing with\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">each</a></p>\n",
        "href": "Array2.html#Ext-Array-method-forEach",
        "linenr": 257,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array to iterate</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The function callback, to be invoked these arguments:</p>\n\n<ul>\n<li><code>item</code> : Mixed - The item at the current <code>index</code> in the passed <code>array</code></li>\n<li><code>index</code> : Number - The current <code>index</code> within the <code>array</code></li>\n<li><code>allItems</code> : Array - The <code>array</code> itself which was passed as the first argument</li>\n</ul>\n\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>(Optional) The execution scope (<code>this</code>) in which the specified function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Iterates an array and invoke the given callback function for each item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "forEach",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts a value to an array if it's not already an array; returns:</p>\n\n<ul>\n<li>An empty array if given value is <code>undefined</code> or <code>null</code></li>\n<li>Itself if given value is already an array</li>\n<li>An array copy if given value is <a href=\"#/api/Ext-method-isIterable\" rel=\"Ext-method-isIterable\" class=\"docClass\">iterable</a> (arguments, NodeList and alike)</li>\n<li>An array with one item which is the given value, otherwise</li>\n</ul>\n\n",
        "href": "Array2.html#Ext-Array-method-from",
        "linenr": 570,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>array</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The value to convert to an array if it's not already is an array</p>\n",
            "type": "Object",
            "optional": false,
            "name": "value"
          },
          {
            "doc": "<p>(Optional) True to clone the given array and return a new reference if necessary,\ndefaults to false</p>\n",
            "type": "Boolean",
            "optional": true,
            "name": "newReference"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts a value to an array if it's not already an array; returns:\n\n\nAn empty array if given value is undefined or n...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "from",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Push an item into the array only if the array doesn't contain it yet</p>\n",
        "href": "Array2.html#Ext-Array-method-include",
        "linenr": 616,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The item to include</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Push an item into the array only if the array doesn't contain it yet ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "include",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the index of the provided <code>item</code> in the given <code>array</code>, a supplement for the\nmissing arrayPrototype.indexOf in Internet Explorer.</p>\n",
        "href": "Array2.html#Ext-Array-method-indexOf",
        "linenr": 286,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The index of item in the array (or -1 if it is not found)</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array to check</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The item to look for</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>(Optional) The index at which to begin the search</p>\n",
            "type": "Number",
            "optional": true,
            "name": "from"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the index of the provided item in the given array, a supplement for the\nmissing arrayPrototype.indexOf in Interne...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "indexOf",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Inserts items in to an array.</p>\n",
        "href": "Array2.html#Ext-Array-method-insert",
        "linenr": 933,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The array passed.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array on which to replace.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The array of items to insert at index.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "items"
          }
        ],
        "deprecated": null,
        "shortDoc": "Inserts items in to an array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "insert",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Merge multiple arrays into one with unique items that exist in all of the arrays.</p>\n",
        "href": "Array2.html#Ext-Array-method-intersect",
        "linenr": 662,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>intersect</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array1"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array2"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "etc"
          }
        ],
        "deprecated": null,
        "shortDoc": "Merge multiple arrays into one with unique items that exist in all of the arrays. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "intersect",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Creates a new array with the results of calling a provided function on every element in this array.</p>\n",
        "href": "Array2.html#Ext-Array-method-map",
        "linenr": 408,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>results</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>Callback function for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>Callback function scope</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a new array with the results of calling a provided function on every element in this array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "map",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the maximum value in the Array.</p>\n",
        "href": "Array2.html#Ext-Array-method-max",
        "linenr": 856,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>maxValue The maximum value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array from which to select the maximum value.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>(optional) a function to perform the comparision which determines maximization.\nIf omitted the \">\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "type": "Function",
            "optional": true,
            "name": "comparisonFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the maximum value in the Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "max",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calculates the mean of all items in the array.</p>\n",
        "href": "Array2.html#Ext-Array-method-mean",
        "linenr": 886,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The mean.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array to calculate the mean value of.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": null,
        "shortDoc": "Calculates the mean of all items in the array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "mean",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Merge multiple arrays into one with unique items.</p>\n\n<p><a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a> is alias for <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a></p>\n",
        "href": "Array2.html#Ext-Array-method-merge",
        "linenr": 640,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>merged</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array1"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array2"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "etc"
          }
        ],
        "deprecated": null,
        "shortDoc": "Merge multiple arrays into one with unique items. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "merge",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the minimum value in the Array.</p>\n",
        "href": "Array2.html#Ext-Array-method-min",
        "linenr": 826,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>minValue The minimum value</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array from which to select the minimum value.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>(optional) a function to perform the comparision which determines minimization.\nIf omitted the \"&lt;\" operator will be used. Note: gt = 1; eq = 0; lt = -1</p>\n",
            "type": "Function",
            "optional": true,
            "name": "comparisonFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the minimum value in the Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "min",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Plucks the value of a property from each item in the Array. Example:</p>\n\n<pre><code>Ext.Array.pluck(Ext.query(\"p\"), \"className\"); // [el1.className, el2.className, ..., elN.className]\n</code></pre>\n",
        "href": "Array2.html#Ext-Array-method-pluck",
        "linenr": 386,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The value from each item in the Array.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array of items to pluck the value from.</p>\n",
            "type": "Array/NodeList",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The property name to pluck from each element.</p>\n",
            "type": "String",
            "optional": false,
            "name": "propertyName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Plucks the value of a property from each item in the Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "pluck",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes the specified item from the array if it exists</p>\n",
        "href": "Array2.html#Ext-Array-method-remove",
        "linenr": 599,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The passed array itself</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The item to remove</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes the specified item from the array if it exists ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "remove",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces items in an array. This is functionally equivalent to the splice method\nof Array, but works around bugs in IE8's splice method and is often more convenient\nto call because it accepts an array of items to insert rather than use a variadic\nargument list.</p>\n",
        "href": "Array2.html#Ext-Array-method-replace",
        "linenr": 945,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The array passed.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array on which to replace.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The number of items to remove at index (can be 0).</p>\n",
            "type": "Number",
            "optional": false,
            "name": "removeCount"
          },
          {
            "doc": "<p>(optional) An array of items to insert at index.</p>\n",
            "type": "Array",
            "optional": true,
            "name": "insert"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces items in an array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "replace",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a shallow copy of a part of an array. This is equivalent to the native\ncall \"Array.prototype.slice.call(array, begin, end)\". This is often used when \"array\"\nis \"arguments\" since the arguments object does not supply a slice method but can\nbe the context object to Array.prototype.slice.</p>\n",
        "href": "Array2.html#Ext-Array-method-slice",
        "linenr": 738,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The copied piece of the array.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array (or arguments object).</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The index at which to begin. Negative values are offsets from\nthe end of the array.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "begin"
          },
          {
            "doc": "<p>The index at which to end. The copied items do not include\nend. Negative values are offsets from the end of the array. If end is omitted,\nall items up to the end of the array are copied.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "end"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a shallow copy of a part of an array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "slice",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Executes the specified function for each array element until the function returns a truthy value.\nIf such an item is found, the function will return true immediately. Otherwise, it will return false.</p>\n",
        "href": "Array2.html#Ext-Array-method-some",
        "linenr": 464,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the callback function returns a truthy value.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>Callback function for each item</p>\n",
            "type": "Function",
            "optional": false,
            "name": "fn"
          },
          {
            "doc": "<p>Callback function scope</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Executes the specified function for each array element until the function returns a truthy value. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "some",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Sorts the elements of an Array.\nBy default, this method sorts the elements alphabetically and ascending.</p>\n",
        "href": "Array2.html#Ext-Array-method-sort",
        "linenr": 756,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The sorted array.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The array to sort.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>(optional) The comparison function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "sortFn"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sorts the elements of an Array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "sort",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Replaces items in an array. This is equivalent to the splice method of Array, but\nworks around bugs in IE8's splice method. The signature is exactly the same as the\nsplice method except that the array is the first argument. All arguments following\nremoveCount are inserted in the array at index.</p>\n",
        "href": "Array2.html#Ext-Array-method-splice",
        "linenr": 960,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>An array containing the removed items.</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array on which to replace.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          },
          {
            "doc": "<p>The index in the array at which to operate.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "<p>The number of items to remove at index (can be 0).</p>\n",
            "type": "Number",
            "optional": false,
            "name": "removeCount"
          }
        ],
        "deprecated": null,
        "shortDoc": "Replaces items in an array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "splice",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Calculates the sum of all items in the given array.</p>\n",
        "href": "Array2.html#Ext-Array-method-sum",
        "linenr": 896,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>The sum.</p>\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Array to calculate the sum value of.</p>\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": null,
        "shortDoc": "Calculates the sum of all items in the given array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "sum",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Converts any iterable (numeric indices and a length property) into a true array.</p>\n\n<pre><code>function test() {\n    var args = Ext.Array.toArray(arguments),\n        fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);\n\n    alert(args.join(' '));\n    alert(fromSecondToLastArgs.join(' '));\n}\n\ntest('just', 'testing', 'here'); // alerts 'just testing here';\n                                 // alerts 'testing here';\n\nExt.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array\nExt.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']\nExt.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-toArray\" rel=\"Ext-method-toArray\" class=\"docClass\">Ext.toArray</a> is alias for <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n",
        "href": "Array2.html#Ext-Array-method-toArray",
        "linenr": 334,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>array</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the iterable object to be turned into a true Array.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "iterable"
          },
          {
            "doc": "<p>(Optional) a zero-based index that specifies the start of extraction. Defaults to 0</p>\n",
            "type": "Number",
            "optional": true,
            "name": "start"
          },
          {
            "doc": "<p>(Optional) a zero-based index that specifies the end of extraction. Defaults to the last\nindex of the iterable value</p>\n",
            "type": "Number",
            "optional": true,
            "name": "end"
          }
        ],
        "deprecated": null,
        "shortDoc": "Converts any iterable (numeric indices and a length property) into a true array. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "toArray",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Merge multiple arrays into one with unique items.</p>\n\n<p><a href=\"#/api/Ext.Array-method-union\" rel=\"Ext.Array-method-union\" class=\"docClass\">union</a> is alias for <a href=\"#/api/Ext.Array-method-merge\" rel=\"Ext.Array-method-merge\" class=\"docClass\">merge</a></p>\n",
        "href": "Array2.html#Ext-Array-method-union",
        "linenr": 982,
        "html_filename": "Array2.html",
        "alias": {
          "doc": null,
          "cls": "Ext.Array",
          "tagname": "alias",
          "member": "merge"
        },
        "return": {
          "doc": "<p>merged</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array1"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array2"
          },
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "etc"
          }
        ],
        "deprecated": null,
        "shortDoc": "Merge multiple arrays into one with unique items. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "union",
        "owner": "Ext.Array",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a new array with unique items</p>\n",
        "href": "Array2.html#Ext-Array-method-unique",
        "linenr": 520,
        "html_filename": "Array2.html",
        "alias": null,
        "return": {
          "doc": "<p>results</p>\n",
          "type": "Array"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Array",
            "optional": false,
            "name": "array"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a new array with unique items ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
        "private": false,
        "tagname": "method",
        "name": "unique",
        "owner": "Ext.Array",
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
  "singleton": true,
  "protected": false,
  "superclasses": [

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Array.js",
  "private": false,
  "tagname": "class",
  "code_type": "nop",
  "component": false,
  "name": "Ext.Array",
  "alternateClassNames": [

  ],
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "static": false,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [

  ]
});