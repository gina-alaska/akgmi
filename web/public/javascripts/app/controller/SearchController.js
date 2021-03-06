Ext.define('AKGMI.controller.SearchController', {
  extend: 'Ext.app.Controller',

  init: function() {
    this.activeSearchId = 0;
    this.searchHistory = new Ext.util.MixedCollection(false);
    
    this.infoWindow = Ext.create('AKGMI.view.results.InfoWindow');
    this.infoWindow.on('contentupdated', this.handleInfoUpdate, this);
    this.infoWindow.on('beforehide', function() { App.map.infoControl.unselectAll(); return true; }, this);
    this.infoWindow.on('show', this.infoWindow.reposition, this.infoWindow, { single: true });
    
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
        aoiadded: this.onAOIAdded,
        toolactivate: this.onToolActivate
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
      },
      'result_list sortselector': {
        change: this.doSearch
      },
    });
  },
  
  onToolActivate: function(map, tool) {
    if(tool != map.infoControl) {
      this.infoWindow.close();
    }
  },
  prevPage: function() {
    var dv = App.results.down('dataview'),
        store = dv.getStore();
    var q = this.getSearchParams();
    
    if(store.currentPage > 1 && q) { store.previousPage({ params: q }); }
    this.infoWindow.close();
  },
  nextPage: function() {
    var dv = App.results.down('dataview'),
        store = dv.getStore();
    var q = this.getSearchParams();
    var maxPage = Math.ceil(store.getTotalCount() / store.pageSize); 
    if(store.currentPage < maxPage && q) { store.nextPage({ params: q }); }
    this.infoWindow.close();
  },  
  handleInfoUpdate: function(window, current, previous, index){
    var activeId = current.get('citation_id');
    if(previous) { var prevId = previous.get('citation_id'); }
    
    // App.map.infoControl.activate();
    Ext.each(App.map.outlines.features, function(feature) {
      switch(feature.data.citation_id) {
        case activeId:
          if (App.map.infoControl.layer.selectedFeatures.indexOf(feature) >= 0) {
            App.map.infoControl.focus(feature);            
          } 
          break;
        case prevId:
          if (App.map.infoControl.layer.selectedFeatures.indexOf(feature) >= 0) {
            App.map.infoControl.unfocus(feature);
          }
          break;
      }
    }, this);
    // App.map.infoControl.deactivate();
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
    this.infoWindow.show();    
  },
  
  onHideFeatureInfo: function(map, feature) {
    var feature_record = this.findRecordFromFeatureId(feature.data.citation_id);
    this.infoWindow.removeItems(feature_record);
    this.infoWindow.show();
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
    this.infoWindow.close();
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

    /* Sort all fields asc except for publication year */
    var sortfield = Ext.ComponentQuery.query('result_list sortselector')[0];
    values.sort = sortfield.getValue();
    values.dir = (values.sort == 'publication_year' ? 'DESC' : 'ASC');

    values.keyword = keyword;			
    values['themes[]'] = [];

    Ext.each(tree.getChecked(), function(item) {
      values['themes[]'].push(item.get('text'));
    }, this);
    
    /* TODO: Find a way to get this list automatically, otherwise this has to be updated everytime a new field is added */
    var empty = true, 
        valid_keys = [
          'keyword', 'aoi', 'quadrangles[]', 'themes[]', 'year_from', 'year_to', 'statewide', 'agency', 'scale_from', 'scale_to'
        ];
        
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
    
    App.map.reset();
    this.getStore('Publications').removeAll();    
    
    App.results.show();
    
    var q = this.getSearchParams();
    if(q) {
      var id = this.addSearch(q);
      Ext.History.add(id);
      // this.dispatchSearch(id, null, true);      
    }
	},
	
	addSearch: function(params) {
    var index = this.searchHistory.getCount();
    this.searchHistory.add(index, params);
    return index;
	},
	
	dispatchSearch: function(id, opts){
    if(id && this.searchHistory.getAt(id)) {
      this.activeSearchId = id;
      
      var params = this.searchHistory.getAt(this.activeSearchId);
      var formpanel = Ext.ComponentQuery.query('search_form')[0];
      var tree = formpanel.down('treepanel');
      var tb = Ext.ComponentQuery.query('search_toolbar')[0];
      var keyword = tb.down('textfield');
      
      params.statewide = (params.statewide == 'on' ? 'on' : 'off');
      
      keyword.setValue(params.keyword);
      formpanel.getForm().setValues(params);
      
      App.map.aoi.removeAllFeatures();
      if(params.aoi) {
        var aoiGeom = OpenLayers.Geometry.fromWKT(params.aoi);
        App.map.aoi.addFeatures(new OpenLayers.Feature.Vector(aoiGeom));        
      }
      
      tree.reset();
      if(params['themes[]'].length > 0) {
        Ext.each(params['themes[]'], function(item) {
          var c = tree.getRootNode().findChildBy(function(node) {
            return node.get('text') == item; 
          }, this, true);
          c.set('checked', true);
        }, this);
      }

      this.getStore('Publications').pageSize = App.results.limitSelector.getValue();
      this.getStore('Publications').loadPage(1, { params: params });
    } else {
      Ext.History.add('');
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
