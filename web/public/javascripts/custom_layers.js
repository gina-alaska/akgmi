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
  name: 'Townships',
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