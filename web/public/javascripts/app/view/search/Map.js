/**
 * @class AKGMI.view.search.Map
 * @extends Ext.OpenLayers.Basic
 * Extension to the openlayers map to handle custom functionality
 */
Ext.define('AKGMI.view.search.Map', {
  extend: 'Ext.OpenLayers.Basic', 
  alias: 'widget.search_map',
  bodyStyle: 'background: #000;',
  
  initComponent: function() {
    this.addEvents('featureselect', 'featureunselect', 'aoiadded');
    
    this.callParent(arguments);
  },
  onFeatureUnselect: function(feature) {
    this.fireEvent('featureunselect', feature.id, this);
  },
  onFeatureSelect: function(feature) {
    this.fireEvent('featureselect', feature.id, this);
  },
  onToolActivate: function(e) {
    var active_id = e.object.id;
    
    Ext.each(this.navtoolbar.controls, function(control) {
      if (control.id != active_id) {
        control.deactivate();
      }
    }, this);
  },
  onAOIAdded: function(e) {
    this.fireEvent('aoiadded', this, this.aoi.features[0]);
  },
  beforeAOIAdded: function(){
    this.aoi.removeAllFeatures();
  },
  
  listeners: {
    'ready': function(map) {
      map.getMap().addControl(new OpenLayers.Control.LayerSwitcher());

      var outline_styles = new OpenLayers.StyleMap({
        "default": new OpenLayers.Style({
          fillColor: "#0000FF",
          fillOpacity: 0.05, 
          strokeColor: "#0000FF",
          strokeWidth: 2,
          strokeOpacity: 0.8
        }),
        "select": new OpenLayers.Style({
          fillColor: "#FFFF00",
          fillOpacity: 0.25,
          strokeColor: "#FFFF00",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          zIndex: 10000
        }),  
      });
      map.outlines = new OpenLayers.Layer.Vector('Outlines', {
        isBaseLayer: false,
        styleMap: outline_styles,
        displayInLayerSwitcher: false
      });
      
      var aoiStyles = new OpenLayers.StyleMap({
        "default": new OpenLayers.Style({
          fillColor: "#FF0000",
          fillOpacity: 0, 
          strokeColor: "#FF0000",
          strokeWidth: 2,
          strokeOpacity: 1
        }),
        "select": new OpenLayers.Style({
          fillColor: "#FFFF00",
          fillOpacity: 0.25,
          strokeColor: "#FFFF00",
          strokeWidth: 2,
          strokeOpacity: 1 
        }),  
      });
      map.aoi = new OpenLayers.Layer.Vector('AOI', {
        isBaseLayer: false,
        displayInLayerSwitcher: false,
        styleMap: aoiStyles,
        eventListeners: { beforefeaturesadded: Ext.bind(this.beforeAOIAdded, this) },
        rendererOptions: { zIndexing: true }
      });

      map.getMap().addLayers([map.outlines, map.aoi]);
      // map.getMap().addLayer(map.aoi);
                 
      this.navtoolbar = new OpenLayers.Control.Panel();
    
      this.aoiSelector = new OpenLayers.Control.DrawFeature(map.aoi, OpenLayers.Handler.RegularPolygon, {
        title: 'AOI Selection: Click and drag the mouse to define your area of interest',
        type: OpenLayers.Control.TYPE_TOGGLE,
        eventListeners: {
          activate: Ext.bind(this.onToolActivate, this),
          featureadded: Ext.bind(this.onAOIAdded, this)
        },
        handlerOptions: {
          irregular: true
        }
      });
    
      // this.navtoolbar.addControls([this.aoiSelector]);
      this.featureSelector = new OpenLayers.Control.SelectFeature(map.outlines, {
        title: 'Select Publications: Click an outline to select or click and drag to select multiple outlines',
        type: OpenLayers.Control.TYPE_TOGGLE,
        multiple: false,
        hover: false,
        toggle: true,
        clickout: false,
        box: true,
        multipleKey: 'shiftKey',
        eventListeners: {
          activate: Ext.bind(this.onToolActivate, this)
        },
        onSelect: Ext.bind(this.onFeatureSelect, this),
        onUnselect: Ext.bind(this.onFeatureUnselect, this)
      });
      
      this.navtoolbar.addControls([this.featureSelector, this.aoiSelector]);
      // 
      // this.featureClickSelector = new OpenLayers.Control.SelectFeature(map.outlines, {
      //   title: 'Select Publications: Click an outline to select or click and drag to select multiple outlines',
      //   type: OpenLayers.Control.TYPE_TOGGLE,
      //   multiple: false,
      //   hover: false,
      //   toggle: true,
      //   clickout: false,
      //   box: false,
      //   multipleKey: 'shiftKey',
      //   onSelect: Ext.bind(this.onFeatureSelect, this),
      //   onUnselect: Ext.bind(this.onFeatureUnselect, this)
      // });
      
      // map.getMap().addControl(this.featureClickSelector);
      // this.featureClickSelector.activate();
      
      // this.featureSelector.activate();
      map.getMap().addControl(this.navtoolbar);
    }
  }
});