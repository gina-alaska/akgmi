/**
 * @class AKGMI.view.search.Map
 * @extends Ext.OpenLayers.Basic
 * Extension to the openlayers map to handle custom functionality
 */
Ext.define('AKGMI.view.search.Map', {
  extend: 'Ext.OpenLayers.Basic', 
  alias: 'widget.search_map',
  bodyStyle: 'background: #000;',
  mapConfig: {
    restrictedExtent: new OpenLayers.Bounds(-3052130.3812086, -36877.9499171, 3236932.1187914, 3039293.9250829)
  },
  initComponent: function() {
    this.addEvents('toolactivate', 'showfeatureinfo', 'hidefeatureinfo', 'featureselect', 'featureunselect', 'aoiadded');
    
    this.callParent(arguments);
  },
  onShowFeatureInfo: function(feature) {
    this.fireEvent('showfeatureinfo', this, feature);
  },
  onHideFeatureInfo: function(feature) {
    this.fireEvent('hidefeatureinfo', this, feature);
  },
  onFeatureUnselect: function(feature) {
    this.fireEvent('featureunselect', this, feature);
  },
  onFeatureSelect: function(feature) {
    this.fireEvent('featureselect', this, feature);
  },
  onToolActivate: function(e) {
    var active_id = e.object.id;
    
    Ext.each(this.navtoolbar.controls, function(control) {
      if (control.id != active_id) {
        control.deactivate();
      }
    }, this);
    
    this.fireEvent('toolactivate', this, e.object);
  },
  onAOIAdded: function(e) {
    this.aoiSelector.deactivate();
    this.fireEvent('aoiadded', this, this.aoi.features[0]);
  },
  beforeAOIAdded: function(){
    this.aoi.removeAllFeatures();
  },
  
  reset: function(){
    this.outlines.removeAllFeatures();
    this.aoi.removeAllFeatures();
  },
  
  listeners: {
    'ready': function(map) {
      var mouse = new OpenLayers.Control.Navigation(
        {mouseWheelOptions: {interval: 400}}
      );
      map.getMap().addControl(mouse);
      
      map.getMap().addControl(new OpenLayers.Control.LayerSwitcher());
      
      // Loop over the controls adding tooltips for certain items
      for(var i in map.getMap().controls){
        if(map.getMap().controls[i] instanceof OpenLayers.Control.PanZoom){
          var buttons = map.getMap().controls[i].buttons;
          for(var x in buttons){
            switch(buttons[x].action){
              case 'panleft':
                buttons[x].title = 'Pan map left';
              break;
              case 'panright':
                buttons[x].title = 'Pan map right';
              break;
              case 'panup':
                buttons[x].title = 'Pan map up';
              break;
              case 'pandown':
                buttons[x].title = 'Pan map down';
              break;
              case 'zoomworld':
                buttons[x].title = 'Zoom map out to maximum';
              break;
              case 'zoomout':
                buttons[x].title = 'Zoom map out';
              break;
              case 'zoomin':
                buttons[x].title = 'Zoom map in';
              break;
            }
          }
        }
      }      

      var outline_styles = new OpenLayers.StyleMap({
        "default": new OpenLayers.Style({
          fillColor: "#2E70FF",
          fillOpacity: 0.08, 
          strokeColor: "#2E70FF",
          strokeWidth: 2,
          strokeOpacity: 0.8,
          graphicZIndex: 0
        }),
        "temporary": new OpenLayers.Style({
          fillColor: "#FF00FF",
          fillOpacity: 0.2,
          strokeColor: "#FF00FF",
          strokeWidth: 2,
          strokeOpacity: 1,
          graphicZIndex: 10000          
        }),
        "select": new OpenLayers.Style({
          fillColor: "#FFFF00",
          fillOpacity: 0.08,
          strokeColor: "#FFFF00",
          strokeWidth: 2,
          strokeOpacity: 1,
          graphicZIndex: 10000
        })  
      });
      map.outlines = new OpenLayers.Layer.Vector('Outlines', {
        isBaseLayer: false,
        styleMap: outline_styles,
        displayInLayerSwitcher: false,
        rendererOptions: { zIndexing: true }
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
        })  
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
        title: 'AOI Tool: Click and drag the mouse to define your area of interest',
        type: OpenLayers.Control.TYPE_TOGGLE,
        eventListeners: {
          activate: Ext.bind(this.onToolActivate, this),
          featureadded: Ext.bind(this.onAOIAdded, this)
        },
        handlerOptions: {
          irregular: true
        }
      });
    
    
      this.infoControl = new OpenLayers.Control.InfoSelector(map.outlines, {
        title: 'Identification Tool: Click or drag the mouse to identify all records in the selected region.',
        type: OpenLayers.Control.TYPE_TOGGLE,
        
        box: true,
        
        eventListeners: {
          activate: Ext.bind(this.onToolActivate, this)
        },
        onSelect: Ext.bind(this.onShowFeatureInfo, this),
        onUnselect: Ext.bind(this.onHideFeatureInfo, this)
      });
      
      // this.navtoolbar.addControls([this.aoiSelector]);
      this.featureSelector = new OpenLayers.Control.InfoSelector(map.outlines, {
        title: 'Selection Tool: Select publications by mouse click or drag the mouse to select multiple publications.',
        displayClass: 'olControlSelectFeature',
        type: OpenLayers.Control.TYPE_TOGGLE,
        multiple: false,
        
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
      
      this.navtoolbar.addControls([this.featureSelector, this.infoControl, this.aoiSelector]);
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