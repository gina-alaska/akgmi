Ext.data.JsonP.Ext_Ajax({
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
  "doc": "<p>A singleton instance of an <a href=\"#/api/Ext.data.Connection\" rel=\"Ext.data.Connection\" class=\"docClass\">Ext.data.Connection</a>. This class\nis used to communicate with your server side code. It can be used as follows:</p>\n\n<pre><code>Ext.Ajax.request({\n    url: 'page.php',\n    params: {\n        id: 1\n    },\n    success: function(response){\n        var text = response.responseText;\n        // process server response here\n    }\n});\n</code></pre>\n\n<p>Default options for all requests can be set by changing a property on the <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> class:</p>\n\n<pre><code>Ext.Ajax.timeout = 60000; // 60 seconds\n</code></pre>\n\n<p>Any options specified in the request method for the Ajax request will override any\ndefaults set on the <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> class. In the code sample below, the timeout for the\nrequest will be 60 seconds.</p>\n\n<pre><code>Ext.Ajax.timeout = 120000; // 120 seconds\nExt.Ajax.request({\n    url: 'page.aspx',\n    timeout: 60000\n});\n</code></pre>\n\n<p>In general, this class will be used for all Ajax requests in your application.\nThe main reason for creating a separate <a href=\"#/api/Ext.data.Connection\" rel=\"Ext.data.Connection\" class=\"docClass\">Ext.data.Connection</a> is for a\nseries of requests that share common settings that are different to all other\nrequests in the application.</p>\n",
  "extends": "Ext.data.Connection",
  "href": "Ajax2.html#Ext-Ajax",
  "allMixins": [
    "Ext.util.Observable"
  ],
  "linenr": 1,
  "html_filename": "Ajax2.html",
  "subclasses": [

  ],
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "doc": "<p>(Optional) True to add a unique cache-buster param to GET requests. (defaults to true)</p>\n",
        "href": "Connection.html#Ext-data-Connection-cfg-disableCaching",
        "linenr": 48,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "(Optional) True to add a unique cache-buster param to GET requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "cfg",
        "name": "disableCaching",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>(Optional) Change the parameter which is sent went disabling caching\nthrough a cache buster. Defaults to '_dc'</p>\n",
        "href": "Connection.html#Ext-data-Connection-cfg-disableCachingParam",
        "linenr": 53,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "(Optional) Change the parameter which is sent went disabling caching\nthrough a cache buster. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "cfg",
        "name": "disableCachingParam",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>(Optional) Any parameters to be appended to the request.</p>\n",
        "href": "Connection.html#Ext-data-Connection-cfg-extraParams",
        "linenr": 64,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "cfg",
        "name": "extraParams",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "linenr": 102,
        "html_filename": "Observable.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "tagname": "cfg",
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Number",
        "doc": "<p>(Optional) The timeout in milliseconds to be used for requests. (defaults to 30000)</p>\n",
        "href": "Connection.html#Ext-data-Connection-cfg-timeout",
        "linenr": 59,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "(Optional) The timeout in milliseconds to be used for requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "cfg",
        "name": "timeout",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      }
    ],
    "method": [
      {
        "doc": "<p>Aborts any outstanding request.</p>\n",
        "href": "Connection.html#Ext-data-Connection-method-abort",
        "linenr": 636,
        "html_filename": "Connection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) defaults to the last request</p>\n",
            "type": "Object",
            "optional": true,
            "name": "request"
          }
        ],
        "deprecated": null,
        "shortDoc": "Aborts any outstanding request. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "method",
        "name": "abort",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.Ajax-method-fireEvent\" rel=\"Ext.Ajax-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.Ajax-method-enableBubble\" rel=\"Ext.Ajax-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
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
        "doc": "<p>Determine whether this object has a request outstanding.</p>\n",
        "href": "Connection.html#Ext-data-Connection-method-isLoading",
        "linenr": 622,
        "html_filename": "Connection.html",
        "alias": null,
        "return": {
          "doc": "<p>True if there is an outstanding request.</p>\n",
          "type": "Boolean"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>(Optional) defaults to the last transaction</p>\n",
            "type": "Object",
            "optional": true,
            "name": "request"
          }
        ],
        "deprecated": null,
        "shortDoc": "Determine whether this object has a request outstanding. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "method",
        "name": "isLoading",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Ajax-method-addManagedListener\" rel=\"Ext.Ajax-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Ext.Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Ajax-method-removeManagedListener\" rel=\"Ext.Ajax-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.Ajax-method-mon\" rel=\"Ext.Ajax-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.Ajax-method-fireEvent\" rel=\"Ext.Ajax-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "doc": "<p>Check if the response status was successful</p>\n",
        "href": "Connection.html#Ext-data-Connection-method-parseStatus",
        "linenr": 743,
        "html_filename": "Connection.html",
        "alias": null,
        "return": {
          "doc": "<p>An object containing success/status state</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The status code</p>\n",
            "type": "Number",
            "optional": false,
            "name": "status"
          }
        ],
        "deprecated": null,
        "shortDoc": "Check if the response status was successful ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "method",
        "name": "parseStatus",
        "owner": "Ext.data.Connection",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.Ajax-method-mon\" rel=\"Ext.Ajax-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
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
        "doc": "<p>Sends an HTTP request to a remote server.</p>\n\n\n<p><b>Important:</b> Ajax server requests are asynchronous, and this call will\nreturn before the response has been received. Process any returned data\nin a callback function.</p>\n\n\n<pre><code>Ext.Ajax.request({\n    url: 'ajax_demo/sample.json',\n    success: function(response, opts) {\n        var obj = Ext.decode(response.responseText);\n        console.dir(obj);\n    },\n    failure: function(response, opts) {\n        console.log('server-side failure with status code ' + response.status);\n    }\n});\n</code></pre>\n\n<p>To execute a callback function in the correct scope, use the <tt>scope</tt> option.</p>\n\n",
        "href": "Connection.html#Ext-data-Connection-method-request",
        "linenr": 112,
        "html_filename": "Connection.html",
        "alias": null,
        "return": {
          "doc": "<p>request The request object. This may be used\nto cancel the request.</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>An object which may contain the following properties:<ul>\n<li><b>url</b> : String/Function (Optional)<div class=\"sub-desc\">The URL to\nwhich to send the request, or a function to call which returns a URL string. The scope of the\nfunction is specified by the <tt>scope</tt> option. Defaults to the configured\n<tt>url</tt>.</div></li>\n<li><b>params</b> : Object/String/Function (Optional)<div class=\"sub-desc\">\nAn object containing properties which are used as parameters to the\nrequest, a url encoded string or a function to call to get either. The scope of the function\nis specified by the <tt>scope</tt> option.</div></li>\n<li><b>method</b> : String (Optional)<div class=\"sub-desc\">The HTTP method to use\nfor the request. Defaults to the configured method, or if no method was configured,\n\"GET\" if no parameters are being sent, and \"POST\" if parameters are being sent.  Note that\nthe method name is case-sensitive and should be all caps.</div></li>\n<li><b>callback</b> : Function (Optional)<div class=\"sub-desc\">The\nfunction to be called upon receipt of the HTTP response. The callback is\ncalled regardless of success or failure and is passed the following\nparameters:<ul>\n<li><b>options</b> : Object<div class=\"sub-desc\">The parameter to the request call.</div></li>\n<li><b>success</b> : Boolean<div class=\"sub-desc\">True if the request succeeded.</div></li>\n<li><b>response</b> : Object<div class=\"sub-desc\">The XMLHttpRequest object containing the response data.\nSee <a href=\"http://www.w3.org/TR/XMLHttpRequest/\">http://www.w3.org/TR/XMLHttpRequest/</a> for details about\naccessing elements of the response.</div></li>\n</ul></div></li>\n<li><a id=\"request-option-success\"></a><b>success</b> : Function (Optional)<div class=\"sub-desc\">The function\nto be called upon success of the request. The callback is passed the following\nparameters:<ul>\n<li><b>response</b> : Object<div class=\"sub-desc\">The XMLHttpRequest object containing the response data.</div></li>\n<li><b>options</b> : Object<div class=\"sub-desc\">The parameter to the request call.</div></li>\n</ul></div></li>\n<li><b>failure</b> : Function (Optional)<div class=\"sub-desc\">The function\nto be called upon failure of the request. The callback is passed the\nfollowing parameters:<ul>\n<li><b>response</b> : Object<div class=\"sub-desc\">The XMLHttpRequest object containing the response data.</div></li>\n<li><b>options</b> : Object<div class=\"sub-desc\">The parameter to the request call.</div></li>\n</ul></div></li>\n<li><b>scope</b> : Object (Optional)<div class=\"sub-desc\">The scope in\nwhich to execute the callbacks: The \"this\" object for the callback function. If the <tt>url</tt>, or <tt>params</tt> options were\nspecified as functions from which to draw values, then this also serves as the scope for those function calls.\nDefaults to the browser window.</div></li>\n<li><b>timeout</b> : Number (Optional)<div class=\"sub-desc\">The timeout in milliseconds to be used for this request. Defaults to 30 seconds.</div></li>\n<li><b>form</b> : Element/HTMLElement/String (Optional)<div class=\"sub-desc\">The <tt>&lt;form&gt;</tt>\nElement or the id of the <tt>&lt;form&gt;</tt> to pull parameters from.</div></li>\n<li><a id=\"request-option-isUpload\"></a><b>isUpload</b> : Boolean (Optional)<div class=\"sub-desc\"><b>Only meaningful when used\nwith the <tt>form</tt> option</b>.</p>\n\n<p>True if the form object is a file upload (will be set automatically if the form was\nconfigured with <b><tt>enctype</tt></b> \"multipart/form-data\").</p>\n\n\n<p>File uploads are not performed using normal \"Ajax\" techniques, that is they are <b>not</b>\nperformed using XMLHttpRequests. Instead the form is submitted in the standard manner with the\nDOM <tt>&lt;form></tt> element temporarily modified to have its\n<a href=\"http://www.w3.org/TR/REC-html40/present/frames.html#adef-target\">target</a> set to refer\nto a dynamically generated, hidden <tt>&lt;iframe></tt> which is inserted into the document\nbut removed after the return data has been gathered.</p>\n\n\n<p>The server response is parsed by the browser to create the document for the IFRAME. If the\nserver is using JSON to send the return object, then the\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17\">Content-Type</a> header\nmust be set to \"text/html\" in order to tell the browser to insert the text unchanged into the document body.</p>\n\n\n<p>The response text is retrieved from the document, and a fake XMLHttpRequest object\nis created containing a <tt>responseText</tt> property in order to conform to the\nrequirements of event handlers and callbacks.</p>\n\n\n<p>Be aware that file upload packets are sent with the content type <a href=\"http://www.faqs.org/rfcs/rfc2388.html\">multipart/form</a>\nand some server technologies (notably JEE) may require some custom processing in order to\nretrieve parameter names and parameter values from the packet content.</p>\n\n\n<p></div></li>\n<li><b>headers</b> : Object (Optional)<div class=\"sub-desc\">Request\nheaders to set for the request.</div></li>\n<li><b>xmlData</b> : Object (Optional)<div class=\"sub-desc\">XML document\nto use for the post. Note: This will be used instead of params for the post\ndata. Any params will be appended to the URL.</div></li>\n<li><b>jsonData</b> : Object/String (Optional)<div class=\"sub-desc\">JSON\ndata to use as the post. Note: This will be used instead of params for the post\ndata. Any params will be appended to the URL.</div></li>\n<li><b>disableCaching</b> : Boolean (Optional)<div class=\"sub-desc\">True\nto add a unique cache-buster param to GET requests.</div></li>\n</ul></p></p>\n\n<p>The options object may also contain any other property which might be needed to perform\npostprocessing in a callback because it is passed to callback functions.</p>\n\n",
            "type": "Object",
            "optional": true,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Sends an HTTP request to a remote server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "method",
        "name": "request",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.Ajax-method-suspendEvents\" rel=\"Ext.Ajax-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
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
        "doc": "<p>Set various options such as the url, params for the request</p>\n",
        "href": "Connection.html#Ext-data-Connection-method-setOptions",
        "linenr": 409,
        "html_filename": "Connection.html",
        "alias": null,
        "return": {
          "doc": "<p>The params for the request</p>\n",
          "type": "Object"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The initial options</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          },
          {
            "doc": "<p>The scope to execute in</p>\n",
            "type": "Object",
            "optional": false,
            "name": "scope"
          }
        ],
        "deprecated": null,
        "shortDoc": "Set various options such as the url, params for the request ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "method",
        "name": "setOptions",
        "owner": "Ext.data.Connection",
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
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.Ajax-method-resumeEvents\" rel=\"Ext.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
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
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.Ajax-method-resumeEvents\" rel=\"Ext.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
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
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.Ajax-method-removeListener\" rel=\"Ext.Ajax-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "type": "Function",
            "optional": false,
            "name": "handler"
          },
          {
            "doc": "<p>(optional) The scope originally specified for the handler. It must be the same as the\nscope argument specified in the original call to <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> or the listener will not be removed.</p>\n",
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
        "doc": "<p>Upload a form using a hidden iframe.</p>\n",
        "href": "Connection.html#Ext-data-Connection-method-upload",
        "linenr": 280,
        "html_filename": "Connection.html",
        "alias": null,
        "return": {
          "doc": "\n",
          "type": "undefined"
        },
        "protected": false,
        "params": [
          {
            "doc": "<p>The form to upload</p>\n",
            "type": "String/HTMLElement/Ext.Element",
            "optional": false,
            "name": "form"
          },
          {
            "doc": "<p>The url to post to</p>\n",
            "type": "String",
            "optional": false,
            "name": "url"
          },
          {
            "doc": "<p>Any extra parameters to pass</p>\n",
            "type": "String",
            "optional": false,
            "name": "params"
          },
          {
            "doc": "<p>The initial options</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          }
        ],
        "deprecated": null,
        "shortDoc": "Upload a form using a hidden iframe. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "method",
        "name": "upload",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      }
    ],
    "event": [
      {
        "doc": "<p>Fires before a network request is made to retrieve a data object.</p>\n",
        "href": "Connection.html#Ext-data-Connection-event-beforerequest",
        "linenr": 78,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This Connection object.</p>\n",
            "type": "Ext.data.Connection",
            "optional": false,
            "name": "conn"
          },
          {
            "doc": "<p>The options config object passed to the <a href=\"#/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">request</a> method.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires before a network request is made to retrieve a data object. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "event",
        "name": "beforerequest",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires if the request was successfully completed.</p>\n",
        "href": "Connection.html#Ext-data-Connection-event-requestcomplete",
        "linenr": 85,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This Connection object.</p>\n",
            "type": "Ext.data.Connection",
            "optional": false,
            "name": "conn"
          },
          {
            "doc": "<p>The XHR object containing the response data.\nSee <a href=\"http://www.w3.org/TR/XMLHttpRequest/\">The XMLHttpRequest Object</a>\nfor details.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "response"
          },
          {
            "doc": "<p>The options config object passed to the <a href=\"#/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">request</a> method.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires if the request was successfully completed. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "event",
        "name": "requestcomplete",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      },
      {
        "doc": "<p>Fires if an error HTTP status was returned from the server.\nSee <a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\">HTTP Status Code Definitions</a>\nfor details of HTTP status codes.</p>\n",
        "href": "Connection.html#Ext-data-Connection-event-requestexception",
        "linenr": 95,
        "html_filename": "Connection.html",
        "alias": null,
        "protected": false,
        "params": [
          {
            "doc": "<p>This Connection object.</p>\n",
            "type": "Ext.data.Connection",
            "optional": false,
            "name": "conn"
          },
          {
            "doc": "<p>The XHR object containing the response data.\nSee <a href=\"http://www.w3.org/TR/XMLHttpRequest/\">The XMLHttpRequest Object</a>\nfor details.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "response"
          },
          {
            "doc": "<p>The options config object passed to the <a href=\"#/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">request</a> method.</p>\n",
            "type": "Object",
            "optional": false,
            "name": "options"
          },
          {
            "type": "Object",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n",
            "tagname": "param",
            "name": "eOpts"
          }
        ],
        "deprecated": null,
        "shortDoc": "Fires if an error HTTP status was returned from the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Connection.js",
        "private": false,
        "tagname": "event",
        "name": "requestexception",
        "owner": "Ext.data.Connection",
        "static": false,
        "inheritable": false
      }
    ],
    "property": [
      {
        "type": "Boolean",
        "doc": "<p>Whether a new request should abort any pending requests. (defaults to false)</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-autoAbort",
        "linenr": 106,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "Whether a new request should abort any pending requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "autoAbort",
        "owner": "Ext.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An object containing request headers which are added to each request made by this object\n(defaults to undefined).</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-defaultHeaders",
        "linenr": 87,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "defaultHeaders",
        "owner": "Ext.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Boolean",
        "doc": "<p>True to add a unique cache-buster param to GET requests. (defaults to true)</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-disableCaching",
        "linenr": 68,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "True to add a unique cache-buster param to GET requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "disableCaching",
        "owner": "Ext.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "type": "Object",
        "doc": "<p>An object containing properties which are used as extra parameters to each request made\nby this object (defaults to undefined). Session information and other data that you need\nto pass with each request are commonly put here.</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-extraParams",
        "linenr": 80,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "An object containing properties which are used as extra parameters to each request made\nby this object (defaults to u...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "extraParams",
        "owner": "Ext.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default HTTP method to be used for requests. Note that this is case-sensitive and\nshould be all caps (defaults to undefined; if not set but params are present will use\n<tt>\"POST\"</tt>, otherwise will use <tt>\"GET\"</tt>.)</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-method",
        "linenr": 93,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The default HTTP method to be used for requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "method",
        "owner": "Ext.Ajax",
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
        "type": "Number",
        "doc": "<p>The timeout in milliseconds to be used for requests. (defaults to 30000)</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-timeout",
        "linenr": 100,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The timeout in milliseconds to be used for requests. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "timeout",
        "owner": "Ext.Ajax",
        "static": false,
        "inheritable": false
      },
      {
        "type": "String",
        "doc": "<p>The default URL to be used for requests to the server. (defaults to undefined)\nIf the server receives all requests through one URL, setting this once is easier than\nentering it on every request.</p>\n",
        "href": "Ajax2.html#Ext-Ajax-property-url",
        "linenr": 73,
        "html_filename": "Ajax2.html",
        "alias": null,
        "protected": false,
        "deprecated": null,
        "shortDoc": "The default URL to be used for requests to the server. ...",
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
        "private": false,
        "tagname": "property",
        "name": "url",
        "owner": "Ext.Ajax",
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
    "Ext.Base",
    "Ext.data.Connection"
  ],
  "deprecated": null,
  "mixins": [

  ],
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Ajax.js",
  "private": false,
  "tagname": "class",
  "code_type": "ext_define",
  "component": false,
  "name": "Ext.Ajax",
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