/**
 * Class: OpenLayers.Control.InfoSelector
 * 
 * Inherits from:
 *  - <OpenLayers.Control.SelectFeature>
 */
OpenLayers.Control.InfoSelector = OpenLayers.Class(OpenLayers.Control.SelectFeature, {
  /**
   * Method: overFeature
   * Called on over a feature.
   * Only responds if this.hover is true.
   *
   * Parameters:
   * feature - {<OpenLayers.Feature.Vector>} 
   */
  tempHighlight: function(feature) {
    var layer = feature.layer;
    
    this._prevRenderIntent = this.renderIntent;
    this.renderIntent = 'temporary';
    this.highlight(feature);
    this.renderIntent = this._prevRenderIntent;
  },

  /**
   * Method: outFeature
   * Called on out of a selected feature.
   * Only responds if this.hover is true.
   *
   * Parameters:
   * feature - {<OpenLayers.Feature.Vector>} 
   */
  tempUnhighlight: function(feature) {
    this.highlight(feature);
  },
  
  CLASS_NAME: "OpenLayers.Control.InfoSelector"
});