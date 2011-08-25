Ext.define('Ext.ux.DefaultText', {
  extend: 'Ext.Component',

  initComponent: function() {
    this.addEvents('load');
    this.callParent();
  },

  setToDefault: function(input) {
    if(input.getValue() == null || input.getValue() == '') { input.setValue(this.text); }
  },

  init: function(field) {
    var defaultText = this.text;

    field.setValueWithoutDefault = field.setValue;
    field.setValue = function(v) {
      if(v == defaultText) {
        this.addCls('default');
      } else {
        this.removeCls('default');
      }
      return this.setValueWithoutDefault(v);
    }.bind(field);

    field.getValueWithoutCheck = field.getValue;
    field.getValue = function() {
      var v = this.getValueWithoutCheck();
      return (v == defaultText ? '' : v);
    }.bind(field);

    field.addCls('default');

    field.on('render', this.setToDefault, this, { delay: 100 });

    field.on('focus', function(input) {
      if(input.getValueWithoutCheck() == defaultText) { input.setValue(''); }
    }, this);

    field.on('blur', this.setToDefault, this);

    this.fireEvent('load', this)
  }
});
