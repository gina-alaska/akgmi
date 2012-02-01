/**
 * Name: TILE.EPSG:3338.HYDRO
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap Hydrography Features
 */
Gina.Layers.define('TILE.EPSG:3338.HYDRO', {
  name: 'Hydrography',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/tilesrv/hydro_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/**
 * Name: TILE.EPSG:3338.TOWNSHIP
 * Projection: EPSG:3338 Alaskan Albers
 * Township Grid from DGGS
 */
Gina.Layers.define('TILE.EPSG:3338.TOWNSHIP', {
  name: 'Township & Range',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/tilesrv/pls_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/**
 * Name: TILE.EPSG:3338.LANDOWNERSHIP
 * Projection: EPSG:3338 Alaskan Albers
 * Landownership layer
 */
Gina.Layers.define('TILE.EPSG:3338.LANDOWNERSHIP', {
  name: 'Landownership',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/test/tilesrv/glo/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false,
    attribution: 'Landownership data is for general orientation use only'
  }
});

/**
 * Name: TILE.EPSG:3338.QUADS
 * Projection: EPSG:3338 Alaskan Albers
 * Quandrangles from DGGS
 */
Gina.Layers.define('TILE.EPSG:3338.QUADS', {
  name: 'Quadrangles',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/test/tilesrv/quad_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/** Alaska Albers **/
Gina.Layers.define('TILE.EPSG:3338.BDL', {
  name: 'Satellite',
  type: Gina.Layers.Types.TILE, 
  url: 'http://swmha.gina.alaska.edu/tilesrv/bdl_esri_test/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});

/**
 * Name: TILE.EPSG:3338.OSM_OVERLAY
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap road and city overlay in Alaskan Albers projection
 */
Gina.Layers.define('TILE.EPSG:3338.OSM_OVERLAY', {
  name: 'Street Map',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/osm-google-ol/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: false,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});

/** Alaska Albers **/
Gina.Layers.define('TILE.EPSG:3338.TOPO', {
  name: 'Topographic',
  type: Gina.Layers.Types.TILE, 
  url: 'http://tiles.gina.alaska.edu/tilesrv/drg_shaded_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    wmsId: "WMS.TOPO"
  }
});

/**
 * Name: TILE.EPSG:3338.SHADEDRELIEF
 * Projection: EPSG:3338 Alaskan Albers
 * Gray scale shaded relief, based on ned and bathymetric data
 */
Gina.Layers.define('TILE.EPSG:3338.SHADED_RELIEF', {
  name: 'Shaded Relief',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tiles/aea_gina_bathymetry_aa/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});

/**
 * Name: TILE.EPSG:3338.OSM
 * Projection: EPSG:3338 Alaskan Albers
 * OpenStreetMap Baselayer in Alaskan Albers Projection
 */
Gina.Layers.define('TILE.EPSG:3338.OSM', {
  name: 'Map',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.proto.gina.alaska.edu/test/tilesrv/osm/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});