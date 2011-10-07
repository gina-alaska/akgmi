/**
 * @class AKGMI.view.search.Map
 * @extends Ext.OpenLayers.Basic
 * Extension to the openlayers map to handle custom functionality
 */
Ext.define('AKGMI.view.search.Map', {
  extend: 'Ext.OpenLayers.Basic', 
  alias: 'widget.search_map',
  
  initComponent: function() {
    this.addEvents('featureselect', 'featureunselect');
    
    this.callParent(arguments);
  },
  onFeatureUnselect: function(feature) {
    this.fireEvent('featureunselect', feature.id, this);
  },
  onFeatureSelect: function(feature) {
    this.fireEvent('featureselect', feature.id, this);
  },
  
  listeners: {
    'ready': function(map) {
      map.getMap().addControl(new OpenLayers.Control.LayerSwitcher());

      var outline_styles = new OpenLayers.StyleMap({
        "default": new OpenLayers.Style({
          fillColor: "#0000FF",
          fillOpacity: 0.25, 
          strokeColor: "#0000FF",
          strokeWidth: 2,
          strokeOpacity: 0.5
        }),
        "select": new OpenLayers.Style({
          fillColor: "#FFFF00",
          fillOpacity: 0.25,
          strokeColor: "#FFFF00",
          strokeWidth: 2,
          strokeOpacity: 0.75 
        }),  
      });
      map.outlines = new OpenLayers.Layer.Vector('Outlines', {
        isBaseLayer: false,
        styleMap: outline_styles
      });
      map.getMap().addLayer(map.outlines);
      
      this.navtoolbar = new OpenLayers.Control.Panel();
    
      this.featureSelector = new OpenLayers.Control.SelectFeature(map.outlines, {
        title: 'Select Publications: Click an outline to select or click and drag to select multiple outlines',
        type: OpenLayers.Control.TYPE_TOGGLE,
        multiple: false,
        hover: false,
        toggle: true,
        clickout: false,
        box: true,
        multipleKey: 'shiftKey',
        onSelect: Ext.bind(this.onFeatureSelect, this),
        onUnselect: Ext.bind(this.onFeatureUnselect, this)
      });
      
      this.navtoolbar.addControls([this.featureSelector]);
      
      this.featureClickSelector = new OpenLayers.Control.SelectFeature(map.outlines, {
        title: 'Select Publications: Click an outline to select or click and drag to select multiple outlines',
        type: OpenLayers.Control.TYPE_TOGGLE,
        multiple: false,
        hover: false,
        toggle: true,
        clickout: false,
        box: false,
        multipleKey: 'shiftKey',
        onSelect: Ext.bind(this.onFeatureSelect, this),
        onUnselect: Ext.bind(this.onFeatureUnselect, this)
      });
      map.getMap().addControl(this.featureClickSelector);
      this.featureClickSelector.activate();
      
      // this.featureSelector.activate();
      map.getMap().addControl(this.navtoolbar);
    }
  }
});