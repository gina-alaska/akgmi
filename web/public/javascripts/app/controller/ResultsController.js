/**
 * @class AKGMI.controller.Results
 * @extends Ext.app.Controller
 * Results list controller
 */
Ext.define('AKGMI.controller.ResultsController', {
  extend: 'Ext.app.Controller', 
  init: function() {
    this.control({
      'result_list': {
        render: this.onStart,
        selectionchange: { fn: this.onSelectionChange, buffer: 100 }
      },
      'result_list button[toggleGroup=results-type]': {
        toggle: this.resultsButtonHandler
      },
      'result_list dataview': {
        beforeitemclick: this.beforeResultClick,
        itemclick: this.selectRecordFeatures,
        selectionchange: { fn: this.onSelectionChange, buffer: 100 }
      },
      'result_list button[action=reset]': {
        click: this.formReset
      },
      'result_list button[action=clearSelected]': {
        click: this.unselectAll
      }, 
      'result_list button[action=sort] > menuitem': {
        click: this.sortHandler
      },
      'result_list button[action=export] > menuitem[action=all]': {
        click: this.exportAll
      },
      'result_list button[action=export] > menuitem[action=selected]': {
        click: this.exportSelected
      }
    });
  },
  
  onStart: function(panel) {
    this.result_list = panel;
  },
  
  formReset: function() {
    this.result_list.reset();
  },
  
  getSearchParams: function() {
    var form = Ext.ComponentQuery.query('search_form')[0];
    var tree = form.down('treepanel');
    var values = form.getValues();
    var tb = Ext.ComponentQuery.query('search_toolbar')[0];
    var keyword = tb.down('textfield').getValue();

    values.keyword = keyword;			
    values['themes[]'] = [];

    Ext.each(tree.getChecked(), function(item) {
      values['themes[]'].push(item.get('text'));
    }, this);

    return values;
  },  
  
  sortHandler: function(button){
    /* Sort all fields asc except for publication year */
    var dir = (button.field == 'publication_year' ? 'DESC' : 'ASC');
    this.getStore('Publications').sort(button.field, dir);
  },
	
  onSelectionChange: function(sm, selection) {
    var dv = App.results.down('dataview');
    
    var form = Ext.ComponentQuery.query('search_form')[0],
        selectedfield = form.down('hiddenfield[name=selected]'),
        ids = [];
    
    App.results.updateSelectedCount(selection.length || '0');
        
    Ext.each(selection, function(item) { 
      ids.push(item.get('citation_id')); 
    }, this);
    selectedfield.setValue(ids.join(','));
  },  
  
  unselectAll: function(){
    App.results.down('dataview').select([], false);
    /* TODO: Move this to a map controller */
    App.map.featureSelector.unselectAll();
  },  
  
  exportSelected:  function(){ this.export(true); },
  exportAll: function(){ this.export(); },
  
  export: function(selectedOnly) {
    var params,
        url = CONFIG.restUrl + '/' + CONFIG.searchResource + '.pdf',
        values = this.getSearchParams();
    
    if(values.aoi) {
      var wkt = new OpenLayers.Format.PrecisionWKT({ precision: 5 }),
          feature = wkt.read(values.aoi);

      feature.geometry.transform(App.map.getMap().getProjectionObject(),App.map.getMap().displayProjection);
      values.aoi_geographic = wkt.write(feature);        
    }
    
    if(selectedOnly) { values.selected_only = true; }
    
    params = Ext.Object.toQueryString(values);      
    
    var win = window.open(url + '?' + params);    
  },
  
  beforeResultClick: function(view, record, item, index, e, eopts) {
    switch(e.target.getAttribute('class')) {
      case 'toggle':
        this.toggleKeywords(view, record, e.target);
        return false;
      case 'zoomto':
        this.zoomToRecord(view, record, e.target);
        if(view.isSelected(item)) {
          return false;          
        } else {
          return true;
        }
    }
  },
  
  zoomToRecord: function(view, record, item){
    Ext.get(document.body).scrollTo('top', 0);

    var bounds = new OpenLayers.Bounds();
    Ext.each(record.get('outlines'), function(outline) {
      bounds.extend(outline.geometry.getBounds());
    }, this);
    App.map.fit(bounds);
  },
  
  toggleKeywords: function(view, record, item) {
    var el        = Ext.get(item),
        keywords  = el.up('div.result-wrap').down('div.keywords .keywordlist');
    
    if(keywords.isVisible()) {
      keywords.slideOut('t', {
        remove: false,
        useDisplay: true
      });
      el.update('Show Keywords');
    } else {
      keywords.slideIn('t', {
        remove: false,
        useDisplay: true
      });
      el.update('Hide Keywords');
    }
  },
  
  selectRecordFeatures: function(view, record, item) {
    var id = record.get('citation_id'),
        selected = view.isSelected(item);
        
    // App.map.featureSelector.unselectAll();
    Ext.each(App.map.outlines.features, function(feature) {
      if(feature.data.citation_id == id) {
        if(selected) {
          App.map.featureSelector.select(feature);          
        } else {
          App.map.featureSelector.unselect(feature);          
        }
      }
    }, this);
  },

  resultsButtonHandler: function(button) {
    if(button.pressed) {
      this.getStore('Publications').clearFilter();
      if(button.field) {
        this.getStore('Publications').filter(button.field, true);
      }
    } else {
      var b = button.up('toolbar').down('button[pressed=true]');
      if(!b) { button.up('toolbar').down('button[action=any]').toggle(true); }
    }
  }
});