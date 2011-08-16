Ext.data.JsonP.Ext_util_Region({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Creates a Region from a \"box\" Object which contains four numeric properties <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</p>\n",
        "href": "Region.html#Ext-util-Region-method-from",
        "linenr": 27,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "<p>region The Region constructed based on the passed object</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An object with <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "o"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a Region from a \"box\" Object which contains four numeric properties top, right, bottom and left. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "from",
        "owner": "Ext.util.Region",
        "static": true,
        "inheritable": false
      },
      {
        "doc": "<p>Retrieves an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> for a particular element.</p>\n",
        "href": "Region.html#Ext-util-Region-method-getRegion",
        "linenr": 17,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "<p>region</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An element ID, htmlElement or <a href=\"#/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> representing an element in the document.</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "el"
          }
        ],
        "deprecated": null,
        "shortDoc": "Retrieves an Ext.util.Region for a particular element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "getRegion",
        "owner": "Ext.util.Region",
        "static": true,
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
  "doc": "<p>This class represents a rectangular region in X,Y space, and performs geometric\ntransformations or tests upon the region.</p>\n\n\n<p>This class may be used to compare the document regions occupied by elements.</p>\n\n",
  "extends": "Object",
  "href": "Region.html#Ext-util-Region",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Region.html",
  "subclasses": [
    "Ext.util.Point"
  ],
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Creates a region from the bounding sides.</p>\n",
        "href": "Region.html#Ext-util-Region-method-constructor",
        "linenr": 40,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Top The topmost pixel of the Region.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "top"
          },
          {
            "doc": "<p>Right The rightmost pixel of the Region.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "right"
          },
          {
            "doc": "<p>Bottom The bottom pixel of the Region.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "bottom"
          },
          {
            "doc": "<p>Left The leftmost pixel of the Region.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "left"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates a region from the bounding sides. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Modifies the current region to be adjusted by offsets.</p>\n",
        "href": "Region.html#Ext-util-Region-method-adjust",
        "linenr": 116,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>top offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "top"
          },
          {
            "doc": "<p>right offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "right"
          },
          {
            "doc": "<p>bottom offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "bottom"
          },
          {
            "doc": "<p>left offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "left"
          }
        ],
        "deprecated": null,
        "shortDoc": "Modifies the current region to be adjusted by offsets. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "adjust",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n",
        "href": "Region.html#Ext-util-Region-method-constrainTo",
        "linenr": 102,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "targetRegion"
          }
        ],
        "deprecated": null,
        "shortDoc": "Modifies the current region to be constrained to the targetRegion. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "constrainTo",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if this region completely contains the region that is passed in.</p>\n",
        "href": "Region.html#Ext-util-Region-method-contains",
        "linenr": 55,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "region"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks if this region completely contains the region that is passed in. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "contains",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Create a copy of this Region.</p>\n",
        "href": "Region.html#Ext-util-Region-method-copy",
        "linenr": 313,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Create a copy of this Region. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "copy",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Copy the values of another Region to this Region</p>\n",
        "href": "Region.html#Ext-util-Region-method-copyFrom",
        "linenr": 321,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "<p>This Region</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The region to copy from.</p>\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Copy the values of another Region to this Region ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "copyFrom",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Check whether this region is equivalent to the given region</p>\n",
        "href": "Region.html#Ext-util-Region-method-equals",
        "linenr": 379,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The region to compare with</p>\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "region"
          }
        ],
        "deprecated": null,
        "shortDoc": "Check whether this region is equivalent to the given region ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "equals",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the offset amount of a point outside the region</p>\n",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffset",
        "linenr": 132,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Ext.util.Offset"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional)</p>\n",
            "type": "String",
            "optional": true,
            "name": "axis"
          },
          {
            "doc": "<p>(optional) the point</p>\n",
            "type": "Ext.util.Point",
            "optional": true,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the offset amount of a point outside the region ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "getOutOfBoundOffset",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the offset amount on the x-axis</p>\n",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetX",
        "linenr": 155,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the offset amount on the x-axis ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "getOutOfBoundOffsetX",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Get the offset amount on the y-axis</p>\n",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetY",
        "linenr": 170,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Number"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Get the offset amount on the y-axis ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "getOutOfBoundOffsetY",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks if this region intersects the region passed in.</p>\n",
        "href": "Region.html#Ext-util-Region-method-intersect",
        "linenr": 68,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns the intersected region or false if there is no intersection.</p>\n",
          "type": "Ext.util.Region/Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "region"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks if this region intersects the region passed in. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "intersect",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Check whether the point / offset is out of bound</p>\n",
        "href": "Region.html#Ext-util-Region-method-isOutOfBound",
        "linenr": 185,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional)</p>\n",
            "type": "String",
            "optional": true,
            "name": "axis"
          },
          {
            "doc": "<p>(optional) the point / offset</p>\n",
            "type": "Ext.util.Point/Number",
            "optional": true,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Check whether the point / offset is out of bound ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "isOutOfBound",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Check whether the offset is out of bound in the x-axis</p>\n",
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundX",
        "linenr": 204,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Check whether the offset is out of bound in the x-axis ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "isOutOfBoundX",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Check whether the offset is out of bound in the y-axis</p>\n",
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundY",
        "linenr": 213,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>the offset</p>\n",
            "type": "Number",
            "optional": false,
            "name": "p"
          }
        ],
        "deprecated": null,
        "shortDoc": "Check whether the offset is out of bound in the y-axis ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "isOutOfBoundY",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Round all the properties of this region</p>\n",
        "href": "Region.html#Ext-util-Region-method-round",
        "linenr": 365,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "<p>this This Region</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Round all the properties of this region ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "round",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Translate this region by the given offset amount</p>\n",
        "href": "Region.html#Ext-util-Region-method-translateBy",
        "linenr": 344,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "<p>this This Region</p>\n",
          "type": "Ext.util.Region"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Object containing the <code>x</code> and <code>y</code> properties.\nOr the x value is using the two argument form.</p>\n",
            "type": "Ext.util.Offset/Object",
            "optional": false,
            "name": "offset"
          },
          {
            "doc": "<p>y value unless using an Offset object.</p>\n",
            "type": "Number",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Translate this region by the given offset amount ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "translateBy",
        "owner": "Ext.util.Region",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n",
        "href": "Region.html#Ext-util-Region-method-union",
        "linenr": 88,
        "html_filename": "Region.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Ext.util.Region",
            "optional": false,
            "name": "region"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns the smallest region that contains the current AND targetRegion. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "tagname": "method",
        "name": "union",
        "owner": "Ext.util.Region",
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

  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Region",
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