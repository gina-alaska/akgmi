Ext.define('AKGMI.controller.Search', {
  extend: 'Ext.app.Controller',

  models: ['AKGMI.model.Publication'],
  stores: ['AKGMI.store.Publications'],

  init: function() {
    this.getStore('Publications').on('datachanged', this.searchLoaded, this);

    this.control({
      'search_form button[action=search]': {
        click: this.doSearch
			},
      'search_form button[action=reset]': {
        click: this.resetForm
      },
      'search_results button[toggleGroup=results-type]': {
        toggle: this.resultsButtonHandler
      },
      'search_results dataview': {
        beforeitemclick: this.beforeResultClick,
        itemclick: this.selectResults,
        selectionchange: this.onSelectionChange
      }, 
      'search_results button[text=Export]': {
        click: this.onExportClick
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
  
  onExportClick: function(){
    var url = CONFIG.restUrl + '/publications.pdf';
    
    var values = this.getSearchParams();
    var params = Ext.Object.toQueryString(values);
    
    var win = window.open(url + '?' + params);
  },
  
  onAOIAdded: function(map, aoi){
    var wkt = aoi.geometry.toString(),
        form = Ext.ComponentQuery.query('search_form')[0],
        aoifield = form.down('hiddenfield[name=aoi]');
    
    aoifield.setValue(wkt);
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
      
      if(selIndex >= 0) { dv.deselect(feature_record, true); }      
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
  
  selectResults: function(view, record, item) {
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

	resetForm: function(button) {
    this.getStore('Publications').removeAll();
    var tb = Ext.ComponentQuery.query('search_toolbar')[0];
		tb.down('textfield').setValue(null);
    var form = button.up('form');
    form.getForm().reset();
    
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
	
  onSelectionChange: function(view, selection) {
    App.results.updateSelectedCount(selection.length || '0');
  },

  searchLoaded: function(store) {
    var features = [];

    App.map.outlines.removeAllFeatures();
    store.each(function(item) {
      App.map.outlines.addFeatures(item.get('outlines'));
    }, this);
    App.results.updateResultCount(store.getTotalCount() || '0');
  },
	toggleAdvanced: function() {
		var tb = Ext.ComponentQuery.query('search_form')[0];
		tb.toggleCollapse();
	}
});
