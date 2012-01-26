if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}


Ext.Loader.setConfig({
  enabled: true,
  paths: {
    'AKGMI': 'javascripts/app',
    'Ext.OpenLayers': 'javascripts/ux/openlayers',
    'Ext.ux': 'javascripts/ux'
  }
});

Ext.define('App', {
  singleton: true,
  proxyCheck: function() {
    var params = Ext.Object.fromQueryString(top.location.search);
    if(params.proxy) { this.config.restUrl = 'http://' + params.proxy; }
  },
  configure: function() {
    var me = this;
    me.config = CONFIG;
    me.proxyCheck();
  }
});
App.configure();

Ext.require('Ext.OpenLayers.Basic');
Ext.require('AKGMI.view.search.Themes');
Ext.require('Ext.ux.DefaultText');

Ext.application({
  name: 'AKGMI',
  autoCreateViewPort: false,
  appFolder: 'javascripts/app',
  controllers: ['SearchController', 'ResultsController'],
  models: ['Publication'],
  store: ['Themes', 'Quadrangles', 'Publications'],
  launch: function() {
    Ext.History.init(function() {
      var token = document.location.hash.replace('#', '');
      this.getController('SearchController').dispatchSearch(token, null, true); 
    }.bind(this));
    Ext.History.on('change', this.getController('SearchController').dispatchSearch, this.getController('SearchController'));
    
    App.map = Ext.create('AKGMI.view.search.Map', {
      region: 'center',
      border: true,
      margin: '0 0 0 0',
      projection: 'EPSG:3338',
      layers: [
        'TILE.EPSG:3338.BDL', 'TILE.EPSG:3338.TOPO', 'TILE.EPSG:3338.SHADED_RELIEF', 'TILE.EPSG:3338.OSM', 
        'TILE.EPSG:3338.HYDRO', 'TILE.EPSG:3338.OSM_OVERLAY','TILE.EPSG:3338.TOWNSHIP','TILE.EPSG:3338.QUADS'
      ]
    });

		App.search_toolbar = Ext.create('AKGMI.view.search.Toolbar', {
			region: 'north',
			margin: '0 0 3 0',
			height: 42,
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
			title: CONFIG.get('search_form.title')
    });

    App.results = Ext.create('AKGMI.view.results.List', {
      store: this.getStore('Publications'),
      border: false,
      autoScroll: true,
			autoHeight: true,
      renderTo: 'akgmi_results',
      hidden: true
    });

		App.viewport = Ext.create('Ext.panel.Panel', {
			id: 'viewport',
      layout: 'border',
			renderTo: 'akgmi_search',
			cls: 'no-background',
			border: false,			
			height: 500,
      items: [App.search_toolbar, App.map, App.sidebar]
		});
  }
});
