Ext.define('AKGMI.controller.Search', {
  extend: 'Ext.app.Controller',

  init: function() {
    this.getStore('Publications').on('datachanged', this.searchLoaded, this);
    
    this.control({
      'search_form': {
        collapse: this.toggleOffAdvancedButton,
        expand: this.toggleOnAdvancedButton
      },
      'search_form button[action=search]': {
        click: this.doSearch
			},
      'search_form button[action=reset]': {
        click: this.resetForm
      },
      'search_map': {
        featureselect: this.onFeatureSelect,
        featureunselect: this.onFeatureUnselect,
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
			}
    });
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
  
  onFeatureSelect: function(feature_id) {
    var dv = App.results.down('dataview');
    
    var feature_record = this.findRecordFromFeatureId(feature_id);
    var selected = dv.getSelectionModel().getSelection();
    var selIndex = Ext.Array.indexOf(selected, feature_record);
    if(selIndex < 0) { dv.select(feature_record, true); }
    App.results.updateSelectedCount(dv.getSelectionModel().getSelection().length || '0');
  },
  
  onFeatureUnselect: function(feature_id) {
    var dv = App.results.down('dataview');
    
    var feature_record = this.findRecordFromFeatureId(feature_id);
    var allDeselected = Ext.each(feature_record.get('outlines'), function(f) {
      if (Ext.Array.indexOf(App.map.outlines.selectedFeatures, f) !== -1) {
        /* Found a feature that is still selected */
        return false;
      }
    }, this);
    
    if(allDeselected === true) {
      var selected = dv.getSelectionModel().getSelection();
      var selIndex = Ext.Array.indexOf(selected, feature_record);
      
      if(selIndex >= 0) { dv.deselect(feature_record, false); }      
      App.results.updateSelectedCount(dv.getSelectionModel().getSelection().length || '0');
    }    
  },
  
  findRecordFromFeatureId: function(feature_id){
    var dv = App.results.down('dataview');
    
    var index = dv.getStore().findBy(function(r) {
      var ol = r.get('outlines');
      var status = Ext.each(ol, function(f) {
        if(f.id == feature_id) { return false; }
      }, this);
      
      /* status is an integer if Ext.each returns false */
      return status !== true;
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
    var form = button.up('form');
    if (form) { form.getForm().reset(); }
    
    App.map.reset();
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

    return values;
  },

  doSearch: function() {
    this.getStore('Publications').removeAll();
    this.getStore('Publications').load({
      params: this.getSearchParams()
    });		
	},

  searchLoaded: function(store) {
    var features = [];

    App.map.outlines.removeAllFeatures();
    store.each(function(item) {
      App.map.outlines.addFeatures(item.get('outlines'));
    }, this);
    
    var start = (store.currentPage - 1) * store.pageSize + 1;
    var end = store.currentPage * store.getCount();
    
    App.results.updateResultCount(start, end, store.getTotalCount());
  },
  
	toggleAdvanced: function() {
		var tb = Ext.ComponentQuery.query('search_form')[0];
		tb.toggleCollapse();
	}
});
