Ext.data.JsonP.Ext_chart_series_Radar({
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "href": "Base3.html#Ext-Base-method-addStatics",
        "doc": "<p>Add / override static properties of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 392,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Add / override static properties of this class. ...",
        "owner": "Ext.Base",
        "name": "addStatics",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-borrow",
        "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 482,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Ext.Base",
            "doc": "<p>The class to borrow members from</p>\n\n",
            "optional": false,
            "name": "fromClass"
          },
          {
            "type": "String/String[]",
            "doc": "<p>The names of the members to borrow</p>\n\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Borrow another class' members to the prototype of this class. ...",
        "owner": "Ext.Base",
        "name": "borrow",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-create",
        "doc": "<p>Create a new instance of this Class.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n\n\n\n<p>All parameters are passed to the constructor of the class.</p>\n\n",
        "html_filename": "Base3.html",
        "linenr": 330,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n\n"
        },
        "alias": null,
        "params": [

        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Create a new instance of this Class. ...",
        "owner": "Ext.Base",
        "name": "create",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-createAlias",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 658,
        "return": {
          "type": "undefined",
          "doc": "\n"
        },
        "alias": null,
        "params": [
          {
            "type": "String/Object",
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n\n",
            "optional": false,
            "name": "alias"
          },
          {
            "type": "String/Object",
            "doc": "<p>The original method name</p>\n\n",
            "optional": false,
            "name": "origin"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "owner": "Ext.Base",
        "name": "createAlias",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-getName",
        "doc": "<p>Get the current class' name in string format.</p>\n\n\n\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 639,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n\n"
        },
        "alias": null,
        "params": [

        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Get the current class' name in string format. ...",
        "owner": "Ext.Base",
        "name": "getName",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-implement",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n\n\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 420,
        "return": {
          "type": "undefined",
          "doc": "\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "owner": "Ext.Base",
        "name": "implement",
        "static": true,
        "inheritable": true
      },
      {
        "href": "Base3.html#Ext-Base-method-override",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n\n\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n",
        "html_filename": "Base3.html",
        "linenr": 524,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n\n"
        },
        "alias": null,
        "params": [
          {
            "type": "Object",
            "doc": "\n",
            "optional": false,
            "name": "members"
          }
        ],
        "protected": false,
        "deprecated": null,
        "tagname": "method",
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "shortDoc": "Override prototype members of this class. ...",
        "owner": "Ext.Base",
        "name": "override",
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
  "doc": "<p>Creates a Radar Chart. A Radar Chart is a useful visualization technique for comparing different quantitative values for\na constrained number of categories.\nAs with all other series, the Radar series must be appended in the <em>series</em> Chart array configuration. See the Chart\ndocumentation for more information. A typical configuration object for the radar series could be:</p>\n\n<p><p><img src=\"doc-resources/Ext.chart.series.Radar/Ext.chart.series.Radar.png\" alt=\"Ext.chart.series.Radar chart series\"></p></p>\n\n<pre><code>var store = Ext.create('Ext.data.JsonStore', {\n    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n    data: [\n        {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},\n        {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},\n        {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},\n        {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},\n        {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}                                                \n    ]\n});\n\nExt.create('Ext.chart.Chart', {\n    renderTo: Ext.getBody(),\n    width: 500,\n    height: 300,\n    animate: true,\n    theme:'Category2',\n    store: store,\n    axes: [{\n        type: 'Radial',\n        position: 'radial',\n        label: {\n            display: true\n        }\n    }],\n    series: [{\n        type: 'radar',\n        xField: 'name',\n        yField: 'data3',\n        showInLegend: true,\n        showMarkers: true,\n        markerConfig: {\n            radius: 5,\n            size: 5           \n        },\n        style: {\n            'stroke-width': 2,\n            fill: 'none'\n        }\n    },{\n        type: 'radar',\n        xField: 'name',\n        yField: 'data2',\n        showMarkers: true,\n        showInLegend: true,\n        markerConfig: {\n            radius: 5,\n            size: 5\n        },\n        style: {\n            'stroke-width': 2,\n            fill: 'none'\n        }\n    },{\n        type: 'radar',\n        xField: 'name',\n        yField: 'data5',\n        showMarkers: true,\n        showInLegend: true,\n        markerConfig: {\n            radius: 5,\n            size: 5\n        },\n        style: {\n            'stroke-width': 2,\n            fill: 'none'\n        }\n    }]    \n});\n</code></pre>\n\n<p>In this configuration we add three series to the chart. Each of these series is bound to the same categories field, <code>name</code> but bound to different properties for each category,\n<code>data1</code>, <code>data2</code> and <code>data3</code> respectively. All series display markers by having <code>showMarkers</code> enabled. The configuration for the markers of each series can be set by adding properties onto\nthe markerConfig object. Finally we override some theme styling properties by adding properties to the <code>style</code> object.</p>\n",
  "extends": "Ext.chart.series.Series",
  "href": "Radar.html#Ext-chart-series-Radar",
  "allMixins": [
    "Ext.util.Observable",
    "Ext.chart.Label",
    "Ext.chart.Highlight",
    "Ext.chart.Tip",
    "Ext.chart.Callout"
  ],
  "linenr": 1,
  "html_filename": "Radar.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean/Object",
        "doc": "<p>If set to <code>true</code> it will highlight the markers or the series when hovering\nwith the mouse. This parameter can also be an object with the same style\nproperties you would apply to a <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a> to apply custom\nstyles to markers and series.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-highlight",
        "linenr": 46,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "If set to true it will highlight the markers or the series when hovering\nwith the mouse. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "highlight",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Object with the following properties:</p>\n\n<ul>\n<li><p><strong>display</strong> : String</p>\n\n<p>Specifies the presence and position of labels for each pie slice. Either \"rotate\", \"middle\", \"insideStart\",\n\"insideEnd\", \"outside\", \"over\", \"under\", or \"none\" to prevent label rendering.\nDefault value: 'none'.</p></li>\n<li><p><strong>color</strong> : String</p>\n\n<p>The color of the label text.\nDefault value: '#000' (black).</p></li>\n<li><p><strong>contrast</strong> : Boolean</p>\n\n<p>True to render the label in contrasting color with the backround.\nDefault value: false.</p></li>\n<li><p><strong>field</strong> : String</p>\n\n<p>The name of the field to be displayed in the label.\nDefault value: 'name'.</p></li>\n<li><p><strong>minMargin</strong> : Number</p>\n\n<p>Specifies the minimum distance from a label to the origin of the visualization.\nThis parameter is useful when using PieSeries width variable pie slice lengths.\nDefault value: 50.</p></li>\n<li><p><strong>font</strong> : String</p>\n\n<p>The font used for the labels.\nDefault value: \"11px Helvetica, sans-serif\".</p></li>\n<li><p><strong>orientation</strong> : String</p>\n\n<p>Either \"horizontal\" or \"vertical\".\nDafault value: \"horizontal\".</p></li>\n<li><p><strong>renderer</strong> : Function</p>\n\n<p>Optional function for formatting the label into a displayable value.\nDefault value: function(v) { return v; }</p></li>\n</ul>\n\n",
        "href": "Label2.html#Ext-chart-Label-cfg-label",
        "linenr": 35,
        "html_filename": "Label2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Object with the following properties:\n\n\ndisplay : String\n\nSpecifies the presence and position of labels for each pie ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Label.js",
        "private": false,
        "tagname": "cfg",
        "name": "label",
        "owner": "Ext.chart.Label",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An (optional) object with event callbacks. All event callbacks get the target <em>item</em> as first parameter. The callback functions are:</p>\n\n<p> <ul></p>\n\n<pre><code> &lt;li&gt;itemmouseover&lt;/li&gt;\n &lt;li&gt;itemmouseout&lt;/li&gt;\n &lt;li&gt;itemmousedown&lt;/li&gt;\n &lt;li&gt;itemmouseup&lt;/li&gt;\n</code></pre>\n\n<p> </ul></p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-listeners",
        "linenr": 105,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An (optional) object with event callbacks. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "listeners",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Function",
        "doc": "<p>A function that can be overridden to set custom styling properties to each rendered element.\nPasses in (sprite, record, attributes, index, store) to the function.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-renderer",
        "linenr": 87,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A function that can be overridden to set custom styling properties to each rendered element. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "renderer",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Array",
        "doc": "<p>An array with shadow attributes</p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-shadowAttributes",
        "linenr": 96,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "shadowAttributes",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>Whether to show this series in the legend.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-showInLegend",
        "linenr": 81,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "showInLegend",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An object containing styles for overriding series styles from Theming.</p>\n",
        "href": "Radar.html#Ext-chart-series-Radar-cfg-style",
        "linenr": 106,
        "html_filename": "Radar.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Radar.js",
        "private": false,
        "tagname": "cfg",
        "name": "style",
        "owner": "Ext.chart.series.Radar",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>Add tooltips to the visualization's markers. The options for the tips are the\nsame configuration used with <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>. For example:</p>\n\n<pre><code>tips: {\n  trackMouse: true,\n  width: 140,\n  height: 28,\n  renderer: function(storeItem, item) {\n    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');\n  }\n},\n</code></pre>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-tips",
        "linenr": 54,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Add tooltips to the visualization's markers. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "tips",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The human-readable name of the series.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-title",
        "linenr": 75,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "title",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The type of series. Set in subclasses.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-cfg-type",
        "linenr": 69,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The type of series. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "cfg",
        "name": "type",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "linenr": 495,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "type": "Object/String",
            "optional": false,
            "name": "o"
          },
          {
            "doc": "<p>(optional) Additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "type": "String...",
            "optional": true,
            "name": "more"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "linenr": 278,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.chart.series.Radar-method-fireEvent\" rel=\"Ext.chart.series.Radar-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Appends an event handler to this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "linenr": 156,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "opt"
          }
        ],
        "deprecated": null,
        "shortDoc": "Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestr...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
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
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "linenr": 426,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "linenr": 455,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Draws the series for the current chart.</p>\n",
        "href": "Radar.html#Ext-chart-series-Radar-method-drawSeries",
        "linenr": 122,
        "html_filename": "Radar.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Draws the series for the current chart. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Radar.js",
        "private": false,
        "tagname": "method",
        "name": "drawSeries",
        "owner": "Ext.chart.series.Radar",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "linenr": 610,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "type": "String/String[]",
            "optional": false,
            "name": "events"
          }
        ],
        "deprecated": null,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.chart.series.Radar-method-addListener\" rel=\"Ext.chart.series.Radar-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.chart.series.Radar-method-enableBubble\" rel=\"Ext.chart.series.Radar-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "linenr": 233,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to fire.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "type": "Object...",
            "optional": false,
            "name": "args"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-method-getItemForPoint",
        "linenr": 241,
        "html_filename": "Series.html",
        "alias": null,
        "return": {
          "doc": "<p>An object describing the item, or null if there is no matching item. The exact contents of</p>\n\n<pre><code>             this object will vary by series type, but should always contain at least the following:\n             &lt;ul&gt;\n               &lt;li&gt;{Ext.chart.series.Series} series - the Series object to which the item belongs&lt;/li&gt;\n               &lt;li&gt;{Object} value - the value(s) of the item's data point&lt;/li&gt;\n               &lt;li&gt;{Array} point - the x/y coordinates relative to the chart box of a single point\n                   for this data item, which can be used as e.g. a tooltip anchor point.&lt;/li&gt;\n               &lt;li&gt;{Ext.draw.Sprite} sprite - the item's rendering Sprite.\n             &lt;/ul&gt;\n</code></pre>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "x"
          },
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "y"
          }
        ],
        "deprecated": null,
        "shortDoc": "For a given x/y point relative to the Surface, find a corresponding item from this\nseries, if any. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "method",
        "name": "getItemForPoint",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Returns a string with the color to be used for the series legend item.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-method-getLegendColor",
        "linenr": 321,
        "html_filename": "Series.html",
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
            "name": "index"
          }
        ],
        "deprecated": null,
        "shortDoc": "Returns a string with the color to be used for the series legend item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "method",
        "name": "getLegendColor",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "linenr": 531,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "<p>True if the event is being listened for, else false</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to check for</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          }
        ],
        "deprecated": null,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Hides all the elements in the series.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-method-hideAll",
        "linenr": 282,
        "html_filename": "Series.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Hides all the elements in the series. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "method",
        "name": "hideAll",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Highlight the given series item.</p>\n",
        "href": "Highlight.html#Ext-chart-Highlight-method-highlightItem",
        "linenr": 38,
        "html_filename": "Highlight.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Info about the item; same format as returned by #getItemForPoint.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "item"
          }
        ],
        "deprecated": null,
        "shortDoc": "Highlight the given series item. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Highlight.js",
        "private": false,
        "tagname": "method",
        "name": "highlightItem",
        "owner": "Ext.chart.Highlight",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Radar-method-addManagedListener\" rel=\"Ext.chart.series.Radar-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "linenr": 682,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addManagedListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "opt"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "mon",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Radar-method-removeManagedListener\" rel=\"Ext.chart.series.Radar-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Radar-method-mon\" rel=\"Ext.chart.series.Radar-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "linenr": 688,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeManagedListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "mun",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Radar-method-addListener\" rel=\"Ext.chart.series.Radar-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "linenr": 670,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "addListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.chart.series.Radar-method-fireEvent\" rel=\"Ext.chart.series.Radar-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          },
          {
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for addListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "on",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "linenr": 574,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "origin"
          },
          {
            "doc": "<p>Array of event names to relay.</p>\n",
            "type": "String[]",
            "optional": false,
            "name": "events"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "prefix"
          }
        ],
        "deprecated": null,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes an event handler.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "linenr": 392,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.chart.series.Radar-method-addListener\" rel=\"Ext.chart.series.Radar-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.chart.series.Radar-method-addListener\" rel=\"Ext.chart.series.Radar-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes an event handler. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.chart.series.Radar-method-mon\" rel=\"Ext.chart.series.Radar-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "linenr": 197,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "type": "Ext.util.Observable/Ext.Element",
            "optional": false,
            "name": "item"
          },
          {
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "type": "Object/String",
            "optional": false,
            "name": "ename"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "type": "Function",
            "optional": true,
            "name": "fn"
          },
          {
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.chart.series.Radar-method-suspendEvents\" rel=\"Ext.chart.series.Radar-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "linenr": 555,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Changes the value of the <a href=\"#/api/Ext.chart.series.Radar-cfg-title\" rel=\"Ext.chart.series.Radar-cfg-title\" class=\"docClass\">title</a> for the series.\nArguments can take two forms:</p>\n\n<ul>\n<li>A single String value: this will be used as the new single title for the series (applies\nto series with only one yField)</li>\n<li>A numeric index and a String value: this will set the title for a single indexed yField.</li>\n</ul>\n\n",
        "href": "Series.html#Ext-chart-series-Series-method-setTitle",
        "linenr": 350,
        "html_filename": "Series.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "doc": "\n",
            "type": "String",
            "optional": false,
            "name": "title"
          }
        ],
        "deprecated": null,
        "shortDoc": "Changes the value of the title for the series. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "method",
        "name": "setTitle",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shows all the elements in the series.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-method-showAll",
        "linenr": 308,
        "html_filename": "Series.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Shows all the elements in the series. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "method",
        "name": "showAll",
        "owner": "Ext.chart.series.Series",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.chart.series.Radar-method-resumeEvents\" rel=\"Ext.chart.series.Radar-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "linenr": 542,
        "html_filename": "Observable.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.chart.series.Radar-method-resumeEvents\" rel=\"Ext.chart.series.Radar-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "type": "Boolean",
            "optional": false,
            "name": "queueSuspended"
          }
        ],
        "deprecated": null,
        "shortDoc": "Suspends the firing of all events. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.chart.series.Radar-method-removeListener\" rel=\"Ext.chart.series.Radar-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "linenr": 676,
        "html_filename": "Observable.html",
        "alias": {
          "doc": null,
          "cls": "Ext.util.Observable",
          "tagname": "alias",
          "member": "removeListener"
        },
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "type": "String",
            "optional": false,
            "name": "eventName"
          },
          {
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.chart.series.Radar-method-addListener\" rel=\"Ext.chart.series.Radar-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.chart.series.Radar-method-addListener\" rel=\"Ext.chart.series.Radar-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
            "type": "Object",
            "optional": true,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Shorthand for removeListener. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "method",
        "name": "un",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Un-highlight any existing highlights</p>\n",
        "href": "Highlight.html#Ext-chart-Highlight-method-unHighlightItem",
        "linenr": 106,
        "html_filename": "Highlight.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [

        ],
        "deprecated": null,
        "shortDoc": "Un-highlight any existing highlights ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Highlight.js",
        "private": false,
        "tagname": "method",
        "name": "unHighlightItem",
        "owner": "Ext.chart.Highlight",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [
      {
        "doc": "<p>Fires when the series title is changed via <a href=\"#/api/Ext.chart.series.Radar-method-setTitle\" rel=\"Ext.chart.series.Radar-method-setTitle\" class=\"docClass\">setTitle</a>.</p>\n",
        "href": "Series.html#Ext-chart-series-Series-event-titlechange",
        "linenr": 139,
        "html_filename": "Series.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>The new title value</p>\n",
            "type": "String",
            "optional": false,
            "name": "title"
          },
          {
            "doc": "<p>The index in the collection of titles</p>\n",
            "type": "Number",
            "optional": false,
            "name": "index"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires when the series title is changed via setTitle. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Series.js",
        "private": false,
        "tagname": "event",
        "name": "titlechange",
        "owner": "Ext.chart.series.Series",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Boolean",
        "doc": "<p>Highlight the given series item.</p>\n",
        "href": "Highlight.html#Ext-chart-Highlight-property-highlight",
        "linenr": 13,
        "html_filename": "Highlight.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/Highlight.js",
        "private": false,
        "tagname": "property",
        "name": "highlight",
        "owner": "Ext.chart.Highlight",
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
    "Ext.chart.series.Series"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/series/Radar.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.chart.series.Radar",
  "alternateClassNames": [

  ],
  "docauthor": null,
  "static": false,
  "author": null,
  "mixedInto": [

  ],
  "inheritable": false,
  "xtypes": [
    "radar"
  ]
});