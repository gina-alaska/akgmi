Ext.define('Ext.OpenLayers.Layers', {
  "map": null,

  layers: [],

  layer_configs: {
    bdl: {
      name: 'Best Data Layer',
      type: 'tiles',
      baseUrl: 'http://swmha.gina.alaska.edu/tilesrv/bdl/tile/',
      wrapDateLine: true,
      transitionEffect: 'resize'
    },
    charts: {
      name: 'NOAA Charts',
      type: 'tiles',
      baseUrl: 'http://swmha.gina.alaska.edu/tilesrv/charts/tile/',
      wrapDateLine: true
    },
    topo: {
      name: 'Topographic DRG',
      type: 'tiles',
      baseUrl: 'http://swmha.gina.alaska.edu/tilesrv/drg/tile/',
      wrapDateLine: true
    },
    shaded_relief: {
      name: 'Shaded Relief',
      type: 'tiles',
      baseUrl: 'http://swmha.gina.alaska.edu/tilesrv/shaded_relief_ned/tile/',
      wrapDateLine: true
    },
    landsat_pan: {
      name: 'Landsat Pan',
      type: 'tiles',
      baseUrl: 'http://swmha.gina.alaska.edu/tilesrv/landsat_pan/tile/',
      wrapDateLine: true
    },
    landownership: {
      name: 'Land Ownerships',
      type: 'wms',
      baseUrl: 'http://wms.proto.gina.alaska.edu/wms/land_ownership',
      params: {
        layers: 'states_poly,states_line',
        transparent: true
      },
      options: {
        wrapDateLine: true,
        isBaseLayer: false
      }
    },
    bdl_aa: {
      name: 'Best Data Layer',
      type: 'tiles',
      baseUrl: 'http://swmha.gina.alaska.edu/tilesrv/bdl_esri_test/tile/',
      wrapDateLine: false
    },
    bdl_polar: {
      name: 'Best Data Layer (EPSG:3572)',
      type: 'tiles',
      baseUrl: 'http://tiles.proto.gina.alaska.edu/test/tilesrv/bdl_polar/tile/'
    },
    bdl_polar_wms: {
      name: 'Best Data Layer (EPSG:3572)',
      type: 'wms',
      baseUrl: 'http://wms.alaskamapped.org/cgi-bin/bdl.cgi?',
      params: {
        layers: "bdl_low_full,bdl_low_overview,bdl_mid_res_overview,bdl_mid_res_full,bdl_high_res_full,bdl_high_res_overview",
        transparent: false
      },
      options: {
        wrapDateLine: false,
        isBaseLayer: true
      }
    },
    sdmi_soy_rgb_aa: {
      name: 'RGB WMS',
      type: 'wms',
      baseUrl: 'http://wms.soy.gina.alaska.edu/map/ortho',
      params: {
        layers: "ORTHO.RGB-overview,ORTHO.RGB",
        transparent: true
      },
      options: {
        wrapDateLine: false,
        isBaseLayer: false
      }
    },
    sdmi_soy_cir_aa: {
      name: 'CIR WMS',
      type: 'wms',
      baseUrl: 'http://wms.soy.gina.alaska.edu/map/ortho',
      params: {
        layers: "ORTHO_CIR-overview,ORTHO.CIR",
        transparent: true
      },
      options: {
        visibility: false,
        wrapDateLine: false,
        isBaseLayer: false
      }
    }
  },

  getUrl: function(bounds) {
    var res = this.map.getResolution();
    var x = Math.round((bounds.left - this.maxExtent.left) / (res * this.tileSize.w));
    var y = Math.round((this.maxExtent.top - bounds.top) / (res * this.tileSize.h));
    var z = this.map.getZoom();
    var tileCount = (1<<z);

    //Wrap the X value
    var X = (x % tileCount);
    //Check for JS modulo operator possibly returning negative values
    if(X < 0) { X += tileCount; }

    var path = X + "/" + y + "/" + z;
    var url = this.url;
    if (url instanceof Array) {
        url = this.selectUrl(path, url);
    }
    return url + path;
  },

  imageMapType: function(name) {
    return new OpenLayers.Layer.TMS(this.layer_configs[name].name, this.layer_configs[name].baseUrl, {
      'type': 'jpeg',
      'getURL': this.getUrl,
      'wrapDateLine': this.layer_configs[name].wrapDateLine
    });
  },

  wmsMapType: function(name) {
    return new OpenLayers.Layer.WMS(
      this.layer_configs[name].name, this.layer_configs[name].baseUrl, this.layer_configs[name].params, this.layer_configs[name].options
    );
  },

  init: function(map) {
    this.map = map;
  },

  loadLayers: function(category) {
    switch(category) {
      case 'aa':
        this.addLayer('bdl_aa');
        this.addLayer('sdmi_soy_aa');
        break;
      case 'bdl':
        this.addLayer('bdl_aa');
        break;
    }
  },

  getLayer: function(name) {
    var type = this.layer_configs[name].type;
    if(type == 'tiles') {
      return this.imageMapType(name);
    } else if(type == 'wms') {
      return this.wmsMapType(name);
    }
  },

  showLabels: function() {
    //this.map.overlayMapTypes.insertAt(0, this.imageMapType('labels'));
  }
});