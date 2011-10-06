/**
 * @class AKGMI.view.search.Map
 * @extends Ext.OpenLayers.Basic
 * Extension to the openlayers map to handle custom functionality
 */
Ext.define('AKGMI.view.search.Map', {
  extend: 'Ext.OpenLayers.Basic', 
  alias: 'widget.search_map',
  
  initComponent: function() {
    this.addEvents('featureselect');
    
    this.callParent(arguments);
  },
  
  onFeatureSelect: function(feature) {
    this.fireEvent('featureselect', feature.id);
  },
  
  listeners: {
    'ready': function(map) {
      map.getMap().addControl(new OpenLayers.Control.LayerSwitcher());

      map.outlines = new OpenLayers.Layer.Vector('Outlines', {
        isBaseLayer: false
      });
      map.getMap().addLayer(map.outlines);
    
      this.featureSelector = new OpenLayers.Control.SelectFeature(map.outlines, {
        hover: false,
        toggle: true,
        onSelect: Ext.bind(this.onFeatureSelect, this)
      });
      map.getMap().addControl(this.featureSelector);
      this.featureSelector.activate();
    }
  }
});