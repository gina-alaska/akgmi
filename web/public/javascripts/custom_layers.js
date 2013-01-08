/**
 * Name: TILE.EPSG:3857.HYDRO
 * Projection: EPSG:3857 Alaskan Albers
 * OpenStreetMap Hydrography Features
 */
Gina.Layers.define('TILE.EPSG:3857.HYDRO', {
  name: 'Hydrography',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tilesrv/hydro_google/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/**
 * Name: TILE.EPSG:3857.TOWNSHIP
 * Projection: EPSG:3857 Alaskan Albers
 * Township Grid from DGGS
 */
Gina.Layers.define('TILE.EPSG:3857.TOWNSHIP', {
  name: 'Township & Range',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/tilesrv/pls_google/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});

/**
 * Name: TILE.EPSG:3857.LANDOWNERSHIP
 * Projection: EPSG:3857 Alaskan Albers
 * Landownership layer
 */
Gina.Layers.define('TILE.EPSG:3857.LANDOWNERSHIP', {
  name: 'Landownership',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/glo_google/tile/${x}/${y}/${z}',
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
 * Name: TILE.EPSG:3857.QUADS
 * Projection: EPSG:3857 Alaskan Albers
 * Quandrangles from DGGS
 */
Gina.Layers.define('TILE.EPSG:3857.QUADS', {
  name: 'Quadrangles',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/quad_google/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: false,
    isBaseLayer: false
  }
});


/** Google Projection **/
Gina.Layers.define('TILE.EPSG:3857.BDL', {
  name: 'Satellite',
  type: Gina.Layers.Types.TILE, 
  url: 'http://swmha.gina.alaska.edu/tilesrv/bdl/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: true,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true,
    wmsId: 'WMS.BDL'
  }
});

/**
 * Name: TILE.EPSG:3857.OSM_OVERLAY
 * Projection: EPSG:3857 Alaskan Albers
 * OpenStreetMap road and city overlay in Alaskan Albers projection
 */
Gina.Layers.define('TILE.EPSG:3857.OSM_OVERLAY', {
  name: 'Street Map',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/osm-google-ol_google/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: false,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});

/** Google Projection **/
Gina.Layers.define('TILE.EPSG:3857.TOPO', {
  name: 'Topographic',
  type: Gina.Layers.Types.TILE, 
  url: 'http://swmha.gina.alaska.edu/tilesrv/drg/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    sphericalMercator: true,
    wmsId: "WMS.TOPO"
  }
});

/**
 * Name: TILE.EPSG:3857.SHADEDRELIEF
 * Projection: EPSG:3857 Alaskan Albers
 * Gray scale shaded relief, based on ned and bathymetric data
 */
Gina.Layers.define('TILE.EPSG:3857.SHADED_RELIEF', {
  name: 'Shaded Relief',
  type: Gina.Layers.Types.TILE,
  url: 'http://swmha.gina.alaska.edu/tilesrv/shaded_relief_ned/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true
  }
});

/**
 * Name: TILE.EPSG:3857.OSM
 * Projection: EPSG:3857 Alaskan Albers
 * OpenStreetMap Baselayer in Alaskan Albers Projection
 */
Gina.Layers.define('TILE.EPSG:3857.OSM', {
  name: 'Map',
  type: Gina.Layers.Types.TILE,
  url: 'http://tiles.gina.alaska.edu/test/tilesrv/osm_google/tile/${x}/${y}/${z}',
  layerOptions: {
    type: 'jpeg',
    transitionEffect: 'resize',
    wrapDateLine: false,
    visibility: true,
    isBaseLayer: true,
    attribution: '(c) <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }
});