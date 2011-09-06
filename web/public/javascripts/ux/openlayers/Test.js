Ext.define('Ext.OpenLayers.Test', {
  extend: 'Ext.panel.Panel',

  config: {
    map: null,
    projection: 'aa'
  },

  mapConfig: {},

  projections: {
    'polar': {
      defaultCenter: new OpenLayers.LonLat(-147.849, 64.856),
      defaultZoom: 3,
      defaultLayers: ['bdl_polar'],
      maxExtent: new OpenLayers.Bounds(-6010000, -6010000, 6010000, 6010000),
      zoomLevels: 18,
      maxResolution: (6010000 * 2.0 / 256.0),
      units: 'm',
      projection: "EPSG:3572",
      displayProjection: new OpenLayers.Projection("EPSG:4326")
    },
    'aa': {
      defaultCenter: new OpenLayers.LonLat(-147.849, 64.856),
      defaultZoom: 2,
      defaultLayers: ['bdl_aa'],
      maxExtent: new OpenLayers.Bounds(-3500000, -3500000, 3500000, 3500000),
      zoomLevels: 18,
      maxResolution: (3500000 * 2.0 / 256.0),
      units: 'm',
      projection: "EPSG:3338",
      displayProjection: new OpenLayers.Projection("EPSG:4326")
    },
    'google': {
      defaultCenter: new OpenLayers.LonLat(-147.849, 64.856),
      defaultZoom: 3,
      zoomLevels: 18,
      defaultLayers: ['bdl', 'charts', 'topo', 'shaded_relief', 'landsat_pan'],
      projection: "EPSG:900913",
      units: 'm',
      maxResolution: 156543.0339,
      maxExtent: new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508),
      displayProjection: new OpenLayers.Projection("EPSG:4326")
    }
  },

  constructor: function(config) {
//    this.initConfig(config);
    this.callParent(arguments);
  },

  initComponent: function() {
    this.addEvents('ready');

    Ext.apply(this.mapConfig, this.projections[this.projection]);

    this.callParent(arguments);

    this.on('afterrender', this.initMap, this, { defer: 100, single: true });
  },

  initMap: function() {
    this.map = new OpenLayers.Map(this.body.dom, this.mapConfig);

    this.initLayers();

    var center = this.mapConfig.defaultCenter.clone();
    center.transform(this.map.displayProjection, this.map.getProjectionObject());
    this.map.setCenter(center, this.mapConfig.defaultZoom);

    this.resizeMap();
    this.fireEvent('ready', this);
  },

  initLayers: function() {
    this.layers = Ext.create('Ext.OpenLayers.Layers');
    this.layers.init(this.getMap());

    Ext.each(this.mapConfig.defaultLayers, function(name) {
      this.getMap().addLayer(this.layers.getLayer(name));
    }, this)
  },

  resizeMap: function() {
    var center = this.getMap().getCenter();
    this.getMap().updateSize();
    this.getMap().setCenter(center);
    this.getMap().baseLayer.redraw();
  }
})