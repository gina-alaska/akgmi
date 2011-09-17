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
			'search_toolbar button[action=toggleAdvanced]': {
				click: this.toggleAdvanced
			},
			'search_toolbar button[action=search]': {
				click: this.doSearch
			}
    });
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
