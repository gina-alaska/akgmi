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
  restUrl: 'http://zap.gina.alaska.edu:3000',
  themes: [{
    text: 'Geology',
    checked: false,
    children: [{
      text: 'Bedrock Geology',
      leaf: true,
      checked: false
    }, {
      text: 'Surficial Geology',
      leaf: true,
      checked: false
    }, {
      text: 'Engineering Geology',
      leaf: true,
      checked: false
    }, {
      text: 'Derivative Geology',
      leaf: true,
      checked: false
    }]
  }, {
    text: 'Resources',
    checked: false,
    children: [{
      text: "Metals, Lode",
      leaf: true,
      checked: false
    }, {
      text: "Metals, Placer",
      leaf: true,
      checked: false
    }, {
      text: "Non-Metals",
      leaf: true,
      checked: false
    }, {
      text: "Geothermal",
      leaf: true,
      checked: false
    }, {
      text: "Coal",
      leaf: true,
      checked: false
    }, {
      text: "Petroleum",
      leaf: true,
      checked: false
    }, {
      text: "Water",
      leaf: true,
      checked: false
    }]
  }, {
    text: 'Hazards',
    checked: false,
    children: [{
      text: "Earthquake-related",
      leaf: true,
      checked: false
    }, {
      text: "Glacier",
      leaf: true,
      checked: false
    }, {
      text: "Groundwater-related",
      leaf: true,
      checked: false
    }, {
      text: "Permafrost and periglacial",
      leaf: true,
      checked: false
    }, {
      text: "Radon",
      leaf: true,
      checked: false
    }, {
      text: "Slope instability",
      leaf: true,
      checked: false
    }, {
      text: "Volcano",
      leaf: true,
      checked: false
    }]
  }, {
    text: "Geophysics",
    checked: false,
    children: [{
      text: "Magnetics",
      leaf: true,
      checked: false
    }, {
      text: "Gravity",
      leaf: true,
      checked: false
    }, {
      text: "Resistivity",
      leaf: true,
      checked: false
    }, {
      text: "Radiometrics",
      leaf: true,
      checked: false
    }]
  }, {
    text: "Other",
    checked: false,
    children: [{
      text: "Geochemistry",
      leaf: true,
      checked: false
    }, {
      text: "Geochronology",
      leaf: true,
      checked: false
    }, {
      text: "Paleontology",
      leaf: true,
      checked: false
    }]
  }]
});

Ext.require('AKGMI.view.search.Themes');
Ext.require('Ext.ux.DefaultText');

Ext.application({
  name: 'AKGMI',
  autoCreateViewPort: false,
  appFolder: 'javascripts/app',
  launch: function() {
    App.map = Ext.create('Ext.OpenLayers.Test', {
      renderTo: 'map',
      height: 600,
      title: 'Alaska Geologic Map Index',
      border: false,
      projection: 'aa'
    });

    App.sidebar = Ext.create('AKGMI.view.search.Form', {
      border: false,
      height: 600,
      renderTo: 'sidebar'
    });

    App.results = Ext.create('Ext.panel.Panel', {
      title: 'Search Results',
      border: false,
      html: 'The search results will go here',
      renderTo: 'results'
    });
  }
});
