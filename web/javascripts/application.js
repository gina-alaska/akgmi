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
  restUrl: 'http://akgmi-rest.zap.gina.alaska.edu',
});

Ext.require('AKGMI.view.search.Themes');
Ext.require('Ext.ux.DefaultText');

Ext.application({
  name: 'AKGMI',
  autoCreateViewPort: false,
  appFolder: 'javascripts/app',
  controllers: ['Search'],
  store: ['Publications'],
  launch: function() {
    App.map = Ext.create('Ext.OpenLayers.Test', {
      renderTo: 'map',
      height: 500,
      title: 'Alaska Geologic Map Index',
      border: false,
      projection: 'aa'
    });

    App.sidebar = Ext.create('AKGMI.view.search.Form', {
      border: false,
      height: 500,
      renderTo: 'sidebar'
    });

    App.results = Ext.create('AKGMI.view.search.Results', {
      title: 'Search Results',
      store: this.getStore('Publications'),
      border: false,
      height: 450,
      autoScroll: true,
      renderTo: 'results'
    });
  }
});
