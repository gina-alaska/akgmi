Ext.define('AKGMI.controller.SearchController', {
  extend: 'Ext.app.Controller',

  init: function() {
    this.activeSearchId = 0;
    this.searchHistory = new Ext.util.MixedCollection(false);
    
    this.infoWindow = Ext.create('AKGMI.view.results.InfoWindow');
    this.infoWindow.on('contentupdated', this.handleInfoUpdate, this);
    this.infoWindow.on('beforehide', function() { App.map.infoControl.unselectAll(); return true; }, this)
    
    this.getStore('Publications').on('datachanged', this.searchLoaded, this);
    
    this.control({
      'search_form': {
        collapse: this.toggleOffAdvancedButton,
        expand: this.toggleOnAdvancedButton
      },
      'search_form button[action=search]': {
        click: this.doSearch
			},
      'search_map': {
        featureselect: this.onFeatureSelect,
        featureunselect: this.onFeatureUnselect,
        showfeatureinfo: this.onShowFeatureInfo,
        hidefeatureinfo: this.onHideFeatureInfo,
        aoiadded: this.onAOIAdded
      },
			'search_toolbar button[action=toggleAdvanced]': {
				click: this.toggleAdvanced
			},
			'search_toolbar button[action=search]': {
				click: this.doSearch
			},
			'search_toolbar textfield': {
				specialkey: this.doSearchOnEnter
			},
			'result_list button[action=reset]': {
        click: this.resetForm
      },  
      'result_list limitselector': {
        change: this.doSearch
      },
			'result_list button[action=next]': {
        click: this.nextPage
      },
      'result_list button[action=prev]': {
        click: this.prevPage
      }
    });
  },
  prevPage: function() {
    var dv = App.results.down('dataview'),
        store = dv.getStore();
    var q = this.getSearchParams();
    
    if(store.currentPage > 1 && q) { store.previousPage({ params: q }); }
  },
  nextPage: function() {
    var dv = App.results.down('dataview'),
        store = dv.getStore();
    var q = this.getSearchParams();
    var maxPage = Math.ceil(store.getTotalCount() / store.pageSize); 
    if(store.currentPage < maxPage && q) { store.nextPage({ params: q }); }
  },  
  handleInfoUpdate: function(window, current, previous, index){
    var activeId = current.get('citation_id');
    if(previous) { var prevId = previous.get('citation_id'); }
    
    App.map.infoControl.activate();
    Ext.each(App.map.outlines.features, function(feature) {
      switch(feature.data.citation_id) {
        case activeId:
          App.map.infoControl.tempHighlight(feature);          
          break;
        case prevId:
          App.map.infoControl.tempUnhighlight(feature);          
          break;
      }
    }, this);
    App.map.infoControl.deactivate();
  },
  toggleOnAdvancedButton: function(form){
    App.search_toolbar.down('button[action=toggleAdvanced]').toggle(true);
  },
  toggleOffAdvancedButton: function(form){
    App.search_toolbar.down('button[action=toggleAdvanced]').toggle(false);
  },
  
  onAOIAdded: function(map, aoi){
    var wkt = aoi.geometry.toString(),
        form = Ext.ComponentQuery.query('search_form')[0],
        aoifield = form.down('hiddenfield[name=aoi]');
    
    aoifield.setValue(wkt);
    this.doSearch();
  },
  
  onShowFeatureInfo: function(map, feature) {
    var feature_record = this.findRecordFromFeatureId(feature.data.citation_id);
    this.infoWindow.addItems(feature_record);
    this.infoWindow.open();    
  },
  
  onHideFeatureInfo: function(map, feature) {
    var feature_record = this.findRecordFromFeatureId(feature.data.citation_id);
    this.infoWindow.removeItems(feature_record);
    this.infoWindow.open();
  },
  
  onFeatureSelect: function(map, feature) {
    var dv = App.results.down('dataview');
    var sm = App.results.down('dataview').getSelectionModel();    
    var feature_record = this.findRecordFromFeatureId(feature.data.citation_id);
    
    dv.select(feature_record, true, true);
    Ext.fly(dv.getNode(feature_record)).down('input[type=checkbox]').dom.checked = true;
    
    App.results.fireEvent('selectionchange', sm, sm.getSelection());
  },
  
  onFeatureUnselect: function(map, feature) {
    var dv = App.results.down('dataview');
    var sm = App.results.down('dataview').getSelectionModel();
    var feature_record = this.findRecordFromFeatureId(feature.data.citation_id);
    
    dv.deselect(feature_record, true, true);
    Ext.fly(dv.getNode(feature_record)).down('input[type=checkbox]').dom.checked = false;
    
    App.results.fireEvent('selectionchange', sm, sm.getSelection());
  },
  
  findRecordFromFeatureId: function(id){
    var dv = App.results.down('dataview');
    
    var index = dv.getStore().findBy(function(r) {
      if(id == r.get('citation_id')) {
        return true;
      }
      return false;
    }, this);
    
    if(Ext.isNumber(index)) {
      return dv.getStore().getAt(index);      
    } else {
      return null;
    }
  },

	resetForm: function(button) {
    this.getStore('Publications').removeAll();
    var tb = Ext.ComponentQuery.query('search_toolbar')[0];
		tb.down('textfield').setValue(null);
    var form = Ext.ComponentQuery.query('search_form')[0];
    if (form) { form.getForm().reset(); }
    
    form.down('treepanel').reset();
    
    App.map.reset();
    App.results.hide();
  },
  
  doSearchOnEnter: function(field, e) {
    if(e.getKey() == e.ENTER) { this.doSearch(); }
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
    
    /* TODO: Find a way to get this list automatically, otherwise this has to be updated everytime a new field is added */
    var empty = true, 
        valid_keys = ['keyword', 'aoi', 'quadrangles[]', 'themes[]', 'year_from', 'year_to', 'statewide'];
        
    for(var key in values) {
      if(valid_keys.indexOf(key) >= 0) {
        if(values[key].length > 0) { empty = false; }
        if(!empty) { break; }
      }
    }
    if(empty) { return false; }

    return values;
  },

  doSearch: function() {
    this.getStore('Publications').removeAll();
    
    App.results.show();
    
    var q = this.getSearchParams();
    if(q) {
      this.getStore('Publications').pageSize = App.results.limitSelector.getValue();
      this.getStore('Publications').loadPage(1, { params: q });      
    }
	},

  searchLoaded: function(store) {
    var features = [];

    App.map.outlines.removeAllFeatures();
    store.each(function(item) {
      App.map.outlines.addFeatures(item.get('outlines'));
    }, this);
    
    var start = (store.currentPage-1) * store.pageSize + 1;
    var end = start + store.getCount() - 1;
    
    App.results.updateResultCount(start, end, store.getTotalCount());
  },
  
	toggleAdvanced: function() {
		var tb = Ext.ComponentQuery.query('search_form')[0];
		tb.toggleCollapse();
	}
});
