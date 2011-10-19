Ext.define('AKGMI.controller.Search', {
  extend: 'Ext.app.Controller',

  models: ['AKGMI.model.Publication'],
  stores: ['AKGMI.store.Publications'],

  init: function() {
    this.getStore('Publications').on('datachanged', this.searchLoaded, this);

    this.control({
      'search_form search_themes': {
        itemclick: function() { this.getStore('Publications').filter('123') }
      },
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
        itemclick: this.selectResults
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
  
  onAOIAdded: function(map, aoi){
    var wkt = aoi.geometry.toString(),
        form = Ext.ComponentQuery.query('search_form')[0],
        aoifield = form.down('hiddenfield[name=aoi]');
    
    console.log(aoifield);
    aoifield.setValue(wkt);
  },
  
  onFeatureSelect: function(feature_id) {
    var dv = App.results.down('dataview');
    
    var feature_record = this.findRecordFromFeatureId(feature_id);
    var selected = dv.getSelectionModel().getSelection();
    var selIndex = Ext.Array.indexOf(selected, feature_record);
    if(selIndex < 0) { dv.select(feature_record, true); }
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
        return false;
    }
  },
  
  zoomToRecord: function(view, record, item){
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
  },
  
  doSearchOnEnter: function(field, e) {
    if(e.getKey() == e.ENTER) { this.doSearch(); }
  },

	doSearch: function() {
      this.getStore('Publications').removeAll();

      var form = Ext.ComponentQuery.query('search_form')[0];
      var tree = form.down('treepanel');
      var values = form.getValues();
			var tb = Ext.ComponentQuery.query('search_toolbar')[0];
			var keyword = tb.down('textfield').getValue();
			
			values['keyword'] = keyword;			
      values['themes[]'] = [];

//          var quads = values['quadrangle']
//          delete values['quadrangle']
//          values['quadrangles[]'] = quads

      Ext.each(tree.getChecked(), function(item) {
        values['themes[]'].push(item.get('text'));
      }, this);

      this.getStore('Publications').load({
        params: values
      });		
	},

  searchLoaded: function(store) {
    var features = [];

    App.map.outlines.removeAllFeatures();
    store.each(function(item) {
      App.map.outlines.addFeatures(item.get('outlines'));
    }, this);
  },
	toggleAdvanced: function() {
		var tb = Ext.ComponentQuery.query('search_form')[0];
		tb.toggleCollapse();
	}
});
