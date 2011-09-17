Ext.Loader.setConfig({
  enabled: true,
  paths: {
    'AKGMI': '/javascripts/app',
    'Ext.OpenLayers': '/javascripts/ux/openlayers',
    'Ext.ux': '/javascripts/ux'
  }
});

Ext.define('App', {
  singleton: true,
  proxyCheck: function() {
		var params = Ext.Object.fromQueryString(top.location.search);
		if(params.proxy) { this.config.restUrl = 'http://' + params.proxy }
	},
	configure: function() {
		var me = this;
		me.config = CONFIG;
		me.proxyCheck();
	}
});
App.configure();

Ext.require('AKGMI.view.search.Themes');
Ext.require('Ext.ux.DefaultText');

Ext.application({
  name: 'AKGMI',
  autoCreateViewPort: false,
  appFolder: 'javascripts/app',
  controllers: ['Search'],
  store: ['Themes', 'Quadrangles', 'Publications'],
  launch: function() {
    App.map = Ext.create('Ext.OpenLayers.Basic', {
			region: 'center',
      border: true,
      projection: 'EPSG:3338',
			margin: '0 0 0 0',
      listeners: {
        'ready': function(map) {
					map.getMap().addControl(new OpenLayers.Control.LayerSwitcher());
					
          map.outlines = new OpenLayers.Layer.Vector('Outlines', {
            isBaseLayer: false
          });
          map.getMap().addLayer(map.outlines);
        }
      }
    });

		App.search_toolbar = Ext.create('AKGMI.view.search.Toolbar', {
			region: 'north',
			margin: '0 0 3 0',
			border: false
		});
    App.sidebar = Ext.create('AKGMI.view.search.Form', {
      border: true,
			width: 350,
			margins: '0 0 0 3',
			bodyStyle: 'padding: 3px;',
			region: 'east',
			collapsible: true,
			collapsed: true,
			title: CONFIG.get('search_form.title'),
			preventHeader: true
    });

    App.results = Ext.create('AKGMI.view.search.Results', {
      title: CONFIG.get('results.title'),
      store: this.getStore('Publications'),
      border: false,
      autoScroll: true,
			autoHeight: true,
      renderTo: 'results'
    });

		App.viewport = Ext.create('Ext.panel.Panel', {
			id: 'viewport',
    	layout: 'border',
			renderTo: 'content',
			cls: 'no-background',
			border: false,			
			autoHeight: true,
			height: 500,
    	items: [App.search_toolbar, App.map, App.sidebar]
		});
  }
});
