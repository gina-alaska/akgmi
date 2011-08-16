Ext.data.JsonP.Ext_util_Point({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Returns a new instance of <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> base on the pageX / pageY values of the given event</p>\n",
        "href": "Point.html#Ext-util-Point-method-fromEvent",
        "linenr": 19,
        "html_filename": "Point.html",
        "alias": null,
        "return": {
          "doc": "<p>Ext.util.Point</p>\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event</p>\n",
            "type": "Event",
            "optional": false,
            "name": "e"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a new instance of Ext.util.Point base on the pageX / pageY values of the given event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
        "private": false,
        "tagname": "method",
        "name": "fromEvent",
        "owner": "Ext.util.Point",
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
  "doc": "<p>Represents a 2D point with x and y properties, useful for comparison and instantiation\nfrom an event:</p>\n\n<pre><code>var point = Ext.util.Point.fromEvent(e);\n</code></pre>\n\n",
  "extends": "Ext.util.Region",
  "href": "Point.html#Ext-util-Point",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Point.html",
  "subclasses": [

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
        "doc": "<p>Compare this point and another point</p>\n",
        "href": "Point.html#Ext-util-Point-method-equals",
        "linenr": 46,
        "html_filename": "Point.html",
        "alias": null,
        "return": {
          "doc": "<p>Returns whether they are equivalent</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>point to compare with, either an instance\nof <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with left and top properties</p>\n",
            "type": "Ext.util.Point/Object",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Compare this point and another point ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
        "private": false,
        "tagname": "method",
        "name": "equals",
        "owner": "Ext.util.Point",
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
        "doc": "<p>Whether the given point is not away from this point within the given threshold amount.\nTODO: Rename this isNear.</p>\n",
        "href": "Point.html#Ext-util-Point-method-isWithin",
        "linenr": 56,
        "html_filename": "Point.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>point to check with, either an instance\nof <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with left and top properties</p>\n",
            "type": "Ext.util.Point/Object",
            "optional": false,
            "name": "The"
          },
          {
            "doc": "<p>Can be either an object with x and y properties or a number</p>\n",
            "type": "Object/Number",
            "optional": false,
            "name": "threshold"
          }
        ],
        "deprecated": null,
        "shortDoc": "Whether the given point is not away from this point within the given threshold amount. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
        "private": false,
        "tagname": "method",
        "name": "isWithin",
        "owner": "Ext.util.Point",
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
        "doc": "<p>Compare this point with another point when the x and y values of both points are rounded. E.g:\n[100.3,199.8] will equals to [100, 200]</p>\n",
        "href": "Point.html#Ext-util-Point-method-roundedEquals",
        "linenr": 76,
        "html_filename": "Point.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>point to compare with, either an instance\nof <a href=\"#/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with x and y properties</p>\n",
            "type": "Ext.util.Point/Object",
            "optional": false,
            "name": "The"
          }
        ],
        "deprecated": null,
        "shortDoc": "Compare this point with another point when the x and y values of both points are rounded. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
        "private": false,
        "tagname": "method",
        "name": "roundedEquals",
        "owner": "Ext.util.Point",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a human-eye-friendly string that represents this point,\nuseful for debugging</p>\n",
        "href": "Point.html#Ext-util-Point-method-toString",
        "linenr": 37,
        "html_filename": "Point.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Returns a human-eye-friendly string that represents this point,\nuseful for debugging ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
        "private": false,
        "tagname": "method",
        "name": "toString",
        "owner": "Ext.util.Point",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Translate this region by the given offset amount. TODO: Either use translate or translateBy!</p>\n",
        "href": "Point.html#Ext-util-Point-method-translate",
        "linenr": 87,
        "html_filename": "Point.html",
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
        "shortDoc": "Translate this region by the given offset amount. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
        "private": false,
        "tagname": "method",
        "name": "translate",
        "owner": "Ext.util.Point",
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
    "Ext.util.Region"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Point.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.util.Point",
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