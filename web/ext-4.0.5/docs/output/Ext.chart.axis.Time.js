Ext.data.JsonP.Ext_chart_axis_Time({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "linenr": 392,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add / override static properties of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "addStatics",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-borrow",
        "linenr": 482,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The class to borrow members from</p>\n",
            "type": "Ext.Base",
            "optional": false,
            "name": "fromClass"
          },
          {
            "doc": "<p>The names of the members to borrow</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "borrow",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "href": "Base3.html#Ext-Base-method-create",
        "linenr": 330,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>the created instance.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Create a new instance of this Class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "create",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "linenr": 658,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "alias"
          },
          {
            "doc": "<p>The original method name</p>\n",
            "type": "String/Object",
            "optional": false,
            "name": "origin"
          }
        ],
        "deprecated": null,
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "createAlias",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-getName",
        "linenr": 639,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>className</p>\n",
          "type": "String"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Get the current class' name in string format. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "getName",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-implement",
        "linenr": 420,
        "html_filename": "Base3.html",
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
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "implement",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
      },
      {
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "href": "Base3.html#Ext-Base-method-override",
        "linenr": 524,
        "html_filename": "Base3.html",
        "alias": null,
        "return": {
          "doc": "<p>this</p>\n",
          "type": "Ext.Base"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Object",
            "optional": false,
            "name": "members"
          }
        ],
        "deprecated": null,
        "shortDoc": "Override prototype members of this class. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "tagname": "method",
        "name": "override",
        "owner": "Ext.Base",
        "static": true,
        "inheritable": true
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
  "doc": "<p>A type of axis whose units are measured in time values. Use this axis\nfor listing dates that you will want to group or dynamically change.\nIf you just want to display dates as categories then use the\nCategory class for axis instead.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Time',\n    position: 'bottom',\n    fields: 'date',\n    title: 'Day',\n    dateFormat: 'M d',\n    groupBy: 'year,month,day',\n    aggregateOp: 'sum',\n\n    constrain: true,\n    fromDate: new Date('1/1/11'),\n    toDate: new Date('1/7/11')\n}]\n</code></pre>\n\n<p>In this example we're creating a time axis that has as title <em>Day</em>.\nThe field the axis is bound to is <code>date</code>.\nThe date format to use to display the text for the axis labels is <code>M d</code>\nwhich is a three letter month abbreviation followed by the day number.\nThe time axis will show values for dates between <code>fromDate</code> and <code>toDate</code>.\nSince <code>constrain</code> is set to true all other values for other dates not between\nthe fromDate and toDate will not be displayed.</p>\n",
  "extends": "Ext.chart.axis.Axis",
  "href": "Time3.html#Ext-chart-axis-Time",
  "allMixins": [

  ],
  "linenr": 1,
  "html_filename": "Time3.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "String",
        "doc": "<p>Aggregation operation when grouping. Possible options are 'sum', 'avg', 'max', 'min'. Default's 'sum'.</p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-aggregateOp",
        "linenr": 67,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Aggregation operation when grouping. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "aggregateOp",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>If true, the values of the chart will be rendered only if they belong between the fromDate and toDate.\nIf false, the time axis will adapt to the new values by adding/removing steps.\nDefault's [Ext.Date.DAY, 1].</p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-constrain",
        "linenr": 91,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If true, the values of the chart will be rendered only if they belong between the fromDate and toDate. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "constrain",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The size of the dash marker. Default's 3.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-dashSize",
        "linenr": 115,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The size of the dash marker. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "dashSize",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String/Boolean",
        "doc": "<p>Indicates the format the date will be rendered on.\nFor example: 'M d' will render the dates as 'Jan 30', etc.\nFor a list of possible format strings see <a href=\"#/api/Ext.Date\" rel=\"Ext.Date\" class=\"docClass\">Date</a></p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-dateFormat",
        "linenr": 52,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Indicates the format the date will be rendered on. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "dateFormat",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Date",
        "doc": "<p>The starting date for the time axis.</p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-fromDate",
        "linenr": 73,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "fromDate",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean/Object",
        "doc": "<p>The grid configuration enables you to set a background grid for an axis.\nIf set to <em>true</em> on a vertical axis, vertical lines will be drawn.\nIf set to <em>true</em> on a horizontal axis, horizontal lines will be drawn.\nIf both are set, a proper grid with horizontal and vertical lines will be drawn.</p>\n\n<p>You can set specific options for the grid configuration for odd and/or even lines/rows.\nSince the rows being drawn are rectangle sprites, you can set to an odd or even property\nall styles that apply to <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>. For more information on all the style\nproperties you can set please take a look at <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>. Some useful style properties are <code>opacity</code>, <code>fill</code>, <code>stroke</code>, <code>stroke-width</code>, etc.</p>\n\n<p>The possible values for a grid option are then <em>true</em>, <em>false</em>, or an object with <code>{ odd, even }</code> properties\nwhere each property contains a sprite style descriptor object that is defined in <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Numeric',\n    grid: true,\n    position: 'left',\n    fields: ['data1', 'data2', 'data3'],\n    title: 'Number of Hits',\n    grid: {\n        odd: {\n            opacity: 1,\n            fill: '#ddd',\n            stroke: '#bbb',\n            'stroke-width': 1\n        }\n    }\n}, {\n    type: 'Category',\n    position: 'bottom',\n    fields: ['name'],\n    title: 'Month of the Year',\n    grid: true\n}]\n</code></pre>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-grid",
        "linenr": 56,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The grid configuration enables you to set a background grid for an axis. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "grid",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Indicates the time unit to use for each step. Can be 'day', 'month', 'year'\nor a comma-separated combination of all of them. Default's 'year,month,day'.</p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-groupBy",
        "linenr": 60,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Indicates the time unit to use for each step. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "groupBy",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Offset axis position. Default's 0.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-length",
        "linenr": 130,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Offset axis position. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "length",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>If <code>minimum</code> and <code>maximum</code> are specified it forces the number of major ticks to the specified value.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-majorTickSteps",
        "linenr": 97,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "majorTickSteps",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>The number of small ticks between two major ticks. Default is zero.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-minorTickSteps",
        "linenr": 102,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The number of small ticks between two major ticks. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "minorTickSteps",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>Where to set the axis. Available options are <code>left</code>, <code>bottom</code>, <code>right</code>, <code>top</code>. Default's <code>bottom</code>.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-position",
        "linenr": 121,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Where to set the axis. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "position",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Array",
        "doc": "<p>An array with two components: The first is the unit of the step (day, month, year, etc).\nThe second one is the number of units for the step (1, 2, etc.).\nDefault's [Ext.Date.DAY, 1].</p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-step",
        "linenr": 83,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An array with two components: The first is the unit of the step (day, month, year, etc). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "step",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The title for the Axis</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-title",
        "linenr": 107,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "title",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Date",
        "doc": "<p>The ending date for the time axis.</p>\n",
        "href": "Time3.html#Ext-chart-axis-Time-cfg-toDate",
        "linenr": 78,
        "html_filename": "Time3.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "tagname": "cfg",
        "name": "toDate",
        "owner": "Ext.chart.axis.Time",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>Offset axis width. Default's 0.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-width",
        "linenr": 136,
        "html_filename": "Axis.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Offset axis width. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "cfg",
        "name": "width",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Creates new Axis.</p>\n",
        "href": "Abstract.html#Ext-chart-axis-Abstract-method-constructor",
        "linenr": 13,
        "html_filename": "Abstract.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(optional) Config options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "config"
          }
        ],
        "deprecated": null,
        "shortDoc": "Creates new Axis. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Abstract.js",
        "private": false,
        "tagname": "method",
        "name": "constructor",
        "owner": "Ext.chart.axis.Abstract",
        "static": false,
        "inheritable": false
      },
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
        "doc": "<p>Renders the axis into the screen and updates it's position.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawAxis",
        "linenr": 245,
        "html_filename": "Axis.html",
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
            "name": "init"
          }
        ],
        "deprecated": null,
        "shortDoc": "Renders the axis into the screen and updates it's position. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "method",
        "name": "drawAxis",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Renders an horizontal and/or vertical grid into the Surface.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawGrid",
        "linenr": 379,
        "html_filename": "Axis.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Renders an horizontal and/or vertical grid into the Surface. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "method",
        "name": "drawGrid",
        "owner": "Ext.chart.axis.Axis",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Renders the labels in the axes.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawLabel",
        "linenr": 693,
        "html_filename": "Axis.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Renders the labels in the axes. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "method",
        "name": "drawLabel",
        "owner": "Ext.chart.axis.Axis",
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
        "doc": "<p>Updates the <a href=\"#/api/Ext.chart.axis.Time-cfg-title\" rel=\"Ext.chart.axis.Time-cfg-title\" class=\"docClass\">title</a> of this axis.</p>\n",
        "href": "Axis.html#Ext-chart-axis-Axis-method-setTitle",
        "linenr": 754,
        "html_filename": "Axis.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "title"
          }
        ],
        "deprecated": null,
        "shortDoc": "Updates the title of this axis. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "tagname": "method",
        "name": "setTitle",
        "owner": "Ext.chart.axis.Axis",
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
      }
    ],
    "event": [

    ],
    "property": [
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
    "Ext.Base",
    "Ext.chart.axis.Abstract",
    "Ext.chart.axis.Axis"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.chart.axis.Time",
  "alternateClassNames": [
    "Ext.chart.TimeAxis"
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