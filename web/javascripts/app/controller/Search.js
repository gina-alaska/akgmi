Ext.define('AKGMI.controller.Search', {
  extend: 'Ext.app.Controller',

  models: ['AKGMI.model.Publication'],
  stores: ['AKGMI.store.Publications'],

  init: function() {
    this.control({
      'search_form search_themes': {
        itemclick: function() { this.getStore('Publications').filter('123') }
      },
      'search_form button[text=Search]': {
        click: function(button) {
          var form = button.up('form');
          var tree = form.down('treepanel');
          var values = form.getValues();
          values['themes[]'] = [];

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
          var form = button.up('form');
          form.submit();
        }
      }
    });
  }
});
