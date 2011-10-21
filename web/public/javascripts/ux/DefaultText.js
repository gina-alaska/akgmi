Ext.define('Ext.ux.DefaultText', {
  extend: 'Ext.Component',

  initComponent: function() {
    this.addEvents('load');
    this.callParent();
  },

  setToDefault: function(input, force) {
    if(force === true || input.getValue() == null || input.getValue() == '') { 
      input.addCls('default');
			return input.setValueWithoutDefault(input.defaultText); 
		}
  },

  init: function(field) {
		var me = this;
		
    field.defaultText = this.text;
    field.setValueWithoutDefault = field.setValue;
    field.setValue = function(v) {
      if(v == field.defaultText || v === undefined || v === null) {
				return me.setToDefault(field, true);
			} else {
        this.removeCls('default');
	      return this.setValueWithoutDefault(v);
      }
    }.bind(field);

    field.getSubmitValueWithoutCheck = field.getSubmitValue;
    field.getSubmitValue = Ext.bind(function() {
      var v = this.getSubmitValueWithoutCheck();
      return (v == this.defaultText ? '' : v);
    }, field);
    field.getValueWithoutCheck = field.getValue;
    field.getValue = Ext.bind(function() {
      var v = this.getValueWithoutCheck();
      return (v == this.defaultText ? '' : v);
    }, field);


    field.addCls('default');

    field.on('render', this.setToDefault, this, { delay: 100 });

    field.on('focus', function(input) {
      if(input.getValueWithoutCheck() == input.defaultText) { 
				input.setValue(''); 
			}
    }, this);

    field.on('blur', this.setToDefault, this);

    this.fireEvent('load', this)
  }
});
