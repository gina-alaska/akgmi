Ext.define('AKGMI.controller.SearchController', {
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
      'result_list button[action=reset]': {
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
    
    /* TODO: Find a way to get this list automatically, otherwise this has to be updated everytime a new field is added */
    valid_keys = ['keyword', 'aoi', 'quadrangles[]', 'themes[]', 'year_from', 'year_to', 'statewide'];
    var q = this.getSearchParams();
    var empty = true;
    
    for(var key in q) {
      if(valid_keys.indexOf(key) >= 0) {
        if(q[key].length > 0) { empty = false; }
        if(!empty) { break; }
      }
    }
    if(empty) { return false; }
    
    this.getStore('Publications').load({ params: q });		
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
