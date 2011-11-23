Ext.define('Ext.ux.DefaultText', {
  extend: 'Ext.Component',

  initComponent: function() {
    this.addEvents('load');
    this.callParent();
  },

  setToDefault: function(input) {
    var v = input.getValue();
    if(v === null || v == this.emptyValue || (Ext.isArray(v) && v.indexOf(this.emptyValue) >= 0)) { 
      input.setValue('');
      input.addCls('default');
      return false;
		}
  },

  init: function(field) {
		var me = this;
		
    this.emptyValue =  (this.emptyValue ? this.emptyValue : null);
		field.emptyText = this.text;
		field.submitEmptyText = false;

    field.addCls('default');

    field.on('render', this.setToDefault, this, { delay: 100 });

    field.on('focus', function(input) {
			input.removeCls('default');
			if(input.getValue() === null || input.getValue() == this.emptyValue) { input.setValue(''); }
    }, this);

    field.on('blur', this.setToDefault, this);
    
    /* 
      If a user tells us to add an empty option and there is a store,
      add it to the store based on the configured values
    */
    if(this.addEmptyChoice && field.store) {
      var choice = {};
      choice[field.valueField] = this.emptyValue;
      choice[field.displayField] = this.text;
      
      field.store.on('load', function(store) {  
        store.insert(0, choice);
      });
      field.store.insert(0, choice);
    }
    
    /* If user selects blank option clear out all the other selections */
    if(field.multiSelect) {
      field.on('select', this.setToDefault, this);
    }

    this.fireEvent('load', this);
  }
});
