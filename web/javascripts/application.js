Ext.Loader.setConfig({
  enabled: true,
  paths: {
    'AKGMI': '/javascripts/app',
    'Ext.OpenLayers': '/javascripts/ux/openlayers',
    'Ext.ux': '/javascripts/ux'
  }
});

Ext.define('App', {
  singleton: true
});

Ext.application({
  name: 'AKGMI',
  autoCreateViewPort: false,
  appFolder: 'javascripts/app',
  launch: function() {
    App.map = Ext.create('Ext.OpenLayers.Test', {
      renderTo: 'map',
      height: 400,
      title: 'Alaska Geologic Map Index',
      border: false,
      projection: 'aa'
    });

    App.sidebar = Ext.create('Ext.form.Panel', {
      border: false,
      renderTo: 'sidebar',
      items: [{
        title: 'Publication Information',
        border: false,
        xtype: 'panel',
        layout: 'anchor',
        bodyStyle: 'padding-top: 3px;',
        defaultType: 'textfield',
        items: [{
          fieldLabel: 'Publication Keyword Search',
          name: 'keyword',
          anchor: '100%'
        },{
          fieldLabel: 'Publishing Agency',
          name: 'agency',
          anchor: '100%'
        },{
          fieldLabel: 'Publication Year',
          name: 'year',
          anchor: '100%'
        },{
          fieldLabel: 'Quadrangle',
          name: 'quadrangle',
          anchor: '100%'
        },{
          fieldLabel: 'Scale',
          name: 'keyword',
          anchor: '100%'
        }]
      },{
        title: 'Geologic/Geophysical Themes',
        border: false,
        xtype: 'panel',
        layout: 'anchor',
        bodyStyle: 'padding-top: 3px;',
        defaultType: 'textfield',
        items: [{
          fieldLabel: 'Geology',
          name: 'keyword',
          anchor: '100%'
        },{
          fieldLabel: 'Resources',
          name: 'agency',
          anchor: '100%'
        },{
          fieldLabel: 'Hazards',
          name: 'year',
          anchor: '100%'
        },{
          fieldLabel: 'Geophysics',
          name: 'quadrangle',
          anchor: '100%'
        },{
          fieldLabel: 'Other',
          name: 'keyword',
          anchor: '100%'
        }]
      }]
    });

    App.results = Ext.create('Ext.panel.Panel', {
      title: 'Search Results',
      border: false,
      html: 'The search results will go here',
      renderTo: 'results'
    });
  }
});
