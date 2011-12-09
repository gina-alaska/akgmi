/**
 * Class: OpenLayers.Control.InfoSelector
 * 
 * Inherits from:
 *  - <OpenLayers.Control.SelectFeature>
 */
OpenLayers.Control.InfoSelector = OpenLayers.Class(OpenLayers.Control.SelectFeature, {
  /**
   * Method: clickFeature
   * Called on click in a feature
   * Only responds if this.hover is false.
   *
   * Parameters:
   * feature - {<OpenLayers.Feature.Vector>} 
   */
  clickFeature: function(clicked_feature) {
    var location = this.map.getLonLatFromPixel(this.handlers.feature.evt.xy);
    
    //Remove all previously selected features
    this.unselectAll();
    
    var layers = this.layers || [this.layer];
    
    //This tool assumes multiple is true for clicks
    var prevMultiple = true;
    this.multiple = true;
    
    for(var layerIndex = 0; layerIndex < layers.length; layerIndex++) {
      var layer = layers[layerIndex];
      for(var featureIndex = 0; featureIndex < layer.features.length; featureIndex++) {
        var feature = layer.features[featureIndex];
        if(feature.geometry.atPoint && feature.geometry.atPoint(location)) {
          this.select(feature);
        }
      }
    }
          
    this.multiple = prevMultiple;
  },
  
  /**
   * Method: focus
   * re-render the feature with a temporary intent
   *
   * Parameters:
   * feature - {<OpenLayers.Feature.Vector>} 
   */
  focus: function(feature) {
    var layer = feature.layer;
    
    this._prevRenderIntent = this.renderIntent;
    this.renderIntent = 'temporary';
    this.highlight(feature);
    this.renderIntent = this._prevRenderIntent;
  },

  /**
   * Method: unfocus
   * returns back to previous highlight rendering
   *
   * Parameters:
   * feature - {<OpenLayers.Feature.Vector>} 
   */
  unfocus: function(feature) {
    this.highlight(feature);
  },
  
  CLASS_NAME: "OpenLayers.Control.InfoSelector"
});