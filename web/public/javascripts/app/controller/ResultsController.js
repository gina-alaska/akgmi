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
        render: this.onStart
      },
      'result_list button[toggleGroup=results-type]': {
        toggle: this.resultsButtonHandler
      },
      'result_list dataview': {
        beforeitemclick: this.beforeResultClick,
        itemclick: this.selectRecordFeatures,
        selectionchange: { fn: this.onSelectionChange, buffer: 300 }
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
  
  sortHandler: function(button){
    /* Sort all fields asc except for publication year */
    var dir = (button.field == 'publication_year' ? 'DESC' : 'ASC');
    this.getStore('Publications').sort(button.field, dir);
  },
	
  onSelectionChange: function(viewModel, selection) {
    App.results.updateSelectedCount(selection.length || '0');
    
    var form = Ext.ComponentQuery.query('search_form')[0],
        selectedfield = form.down('hiddenfield[name=selected]'),
        ids = [];
        
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
    
    if(selectedOnly) { 
      params = Ext.Object.toQueryString({ selected: values.selected, selected_only: true });
    } else {
      params = Ext.Object.toQueryString(values);      
    }
    
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
    var features = record.get('outlines');
    Ext.each(features, function(f) {
      if(view.isSelected(item)) {
        App.map.featureSelector.select(f);      
      } else {
        App.map.featureSelector.unselect(f);              
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
  },  
});