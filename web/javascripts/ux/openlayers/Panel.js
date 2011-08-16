Ext.define('Ext.OpenLayers.Panel', {
  alias: 'widget.openlayers',
  extend: 'Ext.panel.Panel',

  /**
   * Indicates if the map has been initialized by the panel
   */
  mapReady: false,

  /**
   * Track the mouse movements, defaults to true.
   */
  trackMouseMovement: true,

  /**
   * Track the map movements, defaults to true,
   */
  trackMapMovement: true,

  /**
   * Show lat/lon lines and labels on the map
   */
  enableGraticule: true,

  hideMapToolHeaders: false,

  mapToolbar: {
    "Layers": ['layers'],
    "Zoom": ['zoomIn', 'zoomOut'],
    "AOI": ['aoi'],
    "Pan": ['pan']
  },
  mapTools: {},

  config: {
    projection: 'aa'
  },

  mapConfigs: {
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

  controls: null,

  control: function(key) {
    return this.controls.get(key);
  },

  constructor: function() {
    this.controls = new Ext.util.MixedCollection(true);
    this.layersMenu = new Ext.menu.Menu();
    this.callParent(arguments);
  },

  /**
   * private
   */
  initComponent: function() {
    this.addEvents('ready', 'mapmove', 'mousemove', 'aoiadded');

    this.loadIndicator = new Ext.toolbar.Item({
      height: 16,
      html: '<div style="padding-top: 2px;">Loading....</div>',
      cls: 'loading-indicator'
    });

    this.mapConfig = {};
    Ext.apply(this.mapConfig, this.mapConfigs[this.getProjection()]);

    this.callParent(arguments);

    this.initToolbars();
    this.initMapTools();
    this.addMapTools();

    this.on('afterrender', this.initMap, this);
    this.on('resize', this.resizeMap, this);
    this.on('ready', function() { this.isReady = true; }, this);
  },

  initToolbars: function() {
    if(this.fbar !== false) {
      this.bottomToolbar = Ext.create('Ext.toolbar.Toolbar', {
        dock: 'bottom'
      });
      this.bottomToolbar.add(
        this.loadIndicator, '&nbsp;', '->',
        Ext.create('Ext.toolbar.Item', {
          itemId: 'center_location',
          cls: 'map-indicator',
          width: 180,
          tpl: new Ext.Template('<div style="">Center: ({lat},{lng})</div>'),
          html: 'Center: ()'
        }), '-',
        Ext.create('Ext.toolbar.Item', {
          itemId: 'mouse_location',
          cls: 'map-indicator',
          width: 180,
          tpl: new Ext.Template('<div style="">Mouse: ({lat},{lng})</div>'),
          html: 'Mouse: ()'
        })
      );
      this.addDocked(this.bottomToolbar);
    }

    if(this.tbar !== false ) {
      this.topToolbar = Ext.create('Ext.toolbar.Toolbar', {
        dock: 'right'
      });
      this.addDocked(this.topToolbar);
    }
  },

  getTopToolbar: function() {
    return this.topToolbar;
  },

  getBottomToolbar: function() {
    return this.bottomToolbar;
  },

  addMapTools: function() {
    if(this.mapToolbar) {
      for(var group in this.mapToolbar) {
        this.addMapTool(group, this.mapToolbar[group]);
      }
    }
  },

  addMapTool: function(title, tools) {
    if(this.getTopToolbar()) {
      if(tools instanceof Ext.container.ButtonGroup) {
        this.getTopToolbar().add(tools);
      } else {
        var actions = [];
        Ext.each(tools, function(name) {
          actions.push(this.mapTools[name]);
        }, this);
        this.getTopToolbar().add(actions);
//        }));
      }
    }
  },

  initMapTools: function() {
    this.mapToolsGroupID = this.getId() + '-maptools';
    Ext.applyIf(this.mapTools, {
      layers: new Ext.Action({
        iconAlign: 'top',
        text: 'Layers',
        tooltip: 'Layers: Select visible map layers',
        iconCls: 'layers-icon',
        menu: this.layersMenu
      }),
      zoomIn: new Ext.Action({
        iconAlign: 'top',
        text: 'Zoom In',
        iconCls: 'zoom-in-icon',
        scope: this,
        tooltip: 'Zoom In: Click/Drag the the mouse on the map to zoom in',
        enableToggle: true, toggleGroup: this.mapToolsGroupID,
        scope: this,
        toggleHandler: function(button, state) {
          if(state) {
            this.zoomInBoxControl.activate();
          } else {
            this.zoomInBoxControl.deactivate();
          }
        }
      }),
      zoomOut: new Ext.Action({
        iconAlign: 'top',
        text: 'Zoom Out',
        iconCls: 'zoom-out-icon',
        scope: this,
        tooltip: 'Zoom Out: Click the map to zoom out',
        enableToggle: true, toggleGroup: this.mapToolsGroupID,
        scope: this,
        toggleHandler: function(button, state) {
          if(state) {
            this.zoomOutBoxControl.activate();
          } else {
            this.zoomOutBoxControl.deactivate();
          }
        }
      }),
      pan: new Ext.Action({
        iconAlign: 'top',
        text: 'Pan',
        pressed: true,
        enableToggle: true, toggleGroup: this.mapToolsGroupID,
        tooltip: 'Pan Map: Click and drag on the map to pan',
        iconCls: 'pan-icon'
      }),
      aoi: new Ext.Action({
        iconAlign: 'top',
        text: 'AOI',
        iconCls: 'aoi-icon',
        scope: this,
        tooltip: 'AOI: Click to draw a polygon used to select records.  Double click last point to close the polygon',
        enableToggle: true, toggleGroup: this.mapToolsGroupID,
        scope: this,
        toggleHandler: function(button, state) { this.aoiHandler(state); }
      })
    });
  },

  aoiHandler: function(state) {
    if(state) {
      this.selectionLayer.removeAllFeatures();
      this.control('aoi').activate();
    } else {
      this.control('aoi').deactivate();
    }
  },

  /**
   * private
   */
  initMap: function() {
    this.map = new OpenLayers.Map(this.body.dom, this.mapConfig);
    this.setupLayerMenu();
    this.addGinaLayers();

    var center = this.mapConfig.defaultCenter.clone();
    center.transform(this.map.displayProjection, this.map.getProjectionObject());
    this.map.setCenter(center, this.mapConfig.defaultZoom);
    
    this.controls.on('add', function(index, obj, key) {
      this.getMap().addControl(obj);
    }, this);
    this.controls.on('remove', function(obj, key) {
      obj.deactivate();
      this.getMap().removeControl(obj);
    }, this);

    this.dragPanControl = new OpenLayers.Control.DragPan({
      documentDrag: true,
      enableKinetic: true
    });
    this.zoomInBoxControl = new OpenLayers.Control.ZoomBox();
    this.zoomOutBoxControl = new OpenLayers.Control.ZoomBox({ out: true });

    this.map.addControls([this.dragPanControl, this.zoomInBoxControl, this.zoomOutBoxControl]);
    this.dragPanControl.activate();

    if(this.enableGraticule !== false) {
      this.controls.add('graticule', new OpenLayers.Control.Graticule({
        labelFormat: 'dm',
        lineSymbolizer: {
          strokeColor: '#00FF00',
          strokeOpacity: 0.7,
          strokeWidth:1,
          strokeLinecap: 'round'
        },
        labelSymbolizer: {
          fontColor: '#FFFF00',
          fontOpacity: 1
        }
      }));
    }

    this.selectionLayer = new OpenLayers.Layer.Vector('Selection', {
      displayInLayerSwitcher: false
    });
    this.addLayer(this.selectionLayer);
    
    this.controls.add('aoi', new OpenLayers.Control.DrawFeature(
      this.selectionLayer,
      OpenLayers.Handler.Polygon
    ));
    this.control('aoi').events.register('featureadded', this, this.onAoiAdd)

    if(this.getBottomToolbar()) {
      this.map.events.register('moveend', this, this.onMapMove);
      this.map.events.register('mousemove', this, this.onMouseMove);
    }

    /* Give the map some time to finish loading */
    Ext.defer(this.fireEvent, 300, this, ['ready', this]);
  },

  loadingCount: 0,

  onAoiAdd: function(e) {
    this.fireEvent('aoiadded', this, e.feature, e);
    this.mapTools.pan.each(function(button) { button.toggle(true); });
  },

  setupLayerMenu: function() {
    this.getMap().events.register('addlayer', this, this.buildLayerMenu);
    this.getMap().events.register('changebaselayer', this, this.updateLayerMenu);
    this.getMap().events.register('changelayer', this, this.updateLayerMenu);
    this.getMap().events.register('removelayer', this, this.buildLayerMenu);
    this.getMap().events.register('addlayer', this, this.addLayerMonitor);
    this.buildLayerMenu();
  },

  addLayerMonitor: function(e) {
    e.layer.events.register('loadstart', this, Ext.bind(this.monitorLayer, this, [e.layer, 'start']))
    e.layer.events.register('loadend', this, Ext.bind(this.monitorLayer, this, [e.layer, 'end']))
  },

  monitorLayer: function(layer, type) {
    if(type == 'start') {
      this.loadingCount += 1;
    } else {
      this.loadingCount -= 1;
    }
    if(this.loadingCount >= 1) {
      this.loadIndicator.show();
    } else {
      this.loadingCount = 0;
      this.loadIndicator.hide();
    }
  },

  buildLayerMenu: function() {
    var base = [], overlay = [];
    Ext.each(this.getMap().layers, function(item) {
      if(!item.displayInLayerSwitcher) { return; }

      if(item.isBaseLayer) {
        if(item.getVisibility()) { this.activeBaseLayer = item; }

        base.push({
          text: item.name,
          layer: item,
          group: this.id + '_baselayer',
          xtype: 'menucheckitem',
          checked: item.getVisibility(),
          scope: this,
          checkHandler: this.baseMenuHandler
        });
      } else {
        overlay.push({
          text: item.name,
          layer: item,
          xtype: 'menucheckitem',
          checked: item.getVisibility(),
          hideOnClick: false,
          scope: this,
          checkHandler: this.overlayMenuHandler
        });
      }
    }, this);

    this.layersMenu.removeAll();
    this.layersMenu.add('<b>Base Layer</b>', base, '-', '<b>Overlays</b>', overlay);
  },

  updateLayerMenu: function() {
    this.layersMenu.items.each(function(item) {
      if(item.layer) {
        if(item.layer.isBaseLayer && item.layer.getVisibility()) {
          this.activeBaseLayer = item.layer;
        }
        item.setChecked(item.layer.getVisibility());
      }
    }, this);
    return true;
  },

  baseMenuHandler: function(menu, checked) {
    if(checked) {
      this.getMap().setBaseLayer(menu.layer);
    }
  },

  overlayMenuHandler: function(menu, checked) {
    if(checked) {
      menu.layer.setVisibility(true);
    } else {
      menu.layer.setVisibility(false);
    }
  },

  /**
   * Returns the google map object if it has been initialized, false otherwise
   */
  getMap: function() {
    return this.map;
  },

  onMouseMove: function(e) {
    var bbar = this.getBottomToolbar();

    if(bbar) {
      var lon, lat, pixel = new OpenLayers.Pixel(e.layerX, e.layerY),
          el = bbar.getComponent('mouse_location');

      var lonLat = this.getMap().getLonLatFromPixel(pixel);

      if(this.getMap().displayProjection) {
        lonLat.transform(this.getMap().getProjectionObject(), this.getMap().displayProjection);
      }

      lat = Ext.util.Format.number(lonLat.lat, '0.000'),
      lng = Ext.util.Format.number(lonLat.lon, '0.000'),

      el.update(el.tpl.apply({ "lat": lat, "lng": lng }))
    }

    this.fireEvent('mousemove', this, e);
  },

  onMapMove: function(e) {
    if(e.type == 'moveend'){
      var bbar = this.getBottomToolbar();
      this.center = this.getMap().getCenter();
      if(this.getMap().displayProjection) {
        this.center.transform(this.getMap().getProjectionObject(), this.getMap().displayProjection);
      }

      if(bbar) {
        var lat = Ext.util.Format.number(this.center.lat, '0.000'),
            lng = Ext.util.Format.number(this.center.lon, '0.000'),
            el = bbar.getComponent('center_location');
        el.update(el.tpl.apply({ "lat": lat, "lng": lng }));
      }

      this.fireEvent('mapmove', this, this.center);
    }
  },

  resizeMap: function() {
    if (this.isReady) {
      var center = this.getMap().getCenter();
      this.getMap().updateSize();
      this.getMap().setCenter(center);
      this.getActiveBaseLayer().redraw();
    } else {
      this.on('ready', this.resizeMap, this, { single: true });
    }
  },

  getActiveBaseLayer: function() {
    return this.activeBaseLayer;
  },

  showLayer: function(layer) {
    //this.getMap().setMapTypeId(layer);
  },

  addGeom: function(geom) {
    geom.setMap(this.getMap());
  },

  panToBounds: function(bounds) {
    this.getMap().panTo(bounds.getCenterLonLat());
  },

  fit: function(bounds, minZoom) {
    if(minZoom === undefined || minZoom === null) {
      minZoom = 15;
    }
    var zoom = this.getMap().getZoomForExtent(bounds);
    this.panToBounds(bounds);
    //if(zoom > 8) { zoom -= 1; }
    this.getMap().zoomTo(Math.min(zoom, minZoom));
  },

  addLayer: function(layer) {
    return this.getMap().addLayer(layer);
  },

  getCenter: function() {
    return this.getMap().getCenter();
  },

  /**
   * Stuff for gina layers
   */
  addGinaLayers: function() {
    this.gina = Ext.create('Ext.OpenLayers.Layers');
    this.gina.init(this.getMap());
    Ext.each(this.mapConfig.defaultLayers, function(name) {
      this.getMap().addLayer(this.gina.getLayer(name));
    }, this);
  },

  showLabels: function() {
    Ext.ux.GinaMaps.showLabels();
  }
});