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
    field.defaultText = this.text;
    field.setValueWithoutDefault = field.setValue;
    field.setValue = function(v) {
      if(v == field.defaultText) {
        this.addCls('default');
      } else {
        this.removeCls('default');
      }
      return this.setValueWithoutDefault(v);
    }.bind(field);

    field.getSubmitValueWithoutCheck = field.getSubmitValue;
    field.getSubmitValue = Ext.bind(function() {
      var me = this;
      var v = me.getSubmitValueWithoutCheck();
      return (v == me.defaultText ? '' : v);
    }, field);

    field.addCls('default');

    field.on('render', this.setToDefault, this, { delay: 100 });

    field.on('focus', function(input) {
      if(input.getSubmitValueWithoutCheck() == input.defaultText) { input.setValue(''); }
    }, this);

    field.on('blur', this.setToDefault, this);

    this.fireEvent('load', this)
  }
});
