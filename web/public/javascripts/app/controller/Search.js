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
      'search_form button[text=Search]': {
        click: function(button) {
          this.getStore('Publications').removeAll();

          var form = button.up('form');
          var tree = form.down('treepanel');
          var values = form.getValues();
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
        }
      },
      'search_form button[text=Clear]': {
        click: function(button) {
          this.getStore('Publications').removeAll();
          
          var form = button.up('form');
          form.getForm().reset();
        }
      },
      'search_results button[toggleGroup=results-type]': {
        toggle: this.resultsButtonHandler
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
      if(!b) { button.up('toolbar').down('button[text=Any Type]').toggle(true); }
    }
  },

  searchLoaded: function(store) {
    var features = [];

    App.map.outlines.removeAllFeatures();
    store.each(function(item) {
      App.map.outlines.addFeatures(item.get('outlines'));
    }, this);
  }
});
