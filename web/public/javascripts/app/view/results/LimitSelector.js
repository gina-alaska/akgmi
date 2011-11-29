/**
 * @class AKGMI.view.results.LimitSelector
 * @extends Ext.form.field.ComboBox
 * Limit selection for result list
 */
Ext.define('AKGMI.view.results.LimitSelector', {
    extend: 'Ext.form.field.ComboBox', 
    alias: 'widget.limitselector',

    initComponent: function() {
      var limits = Ext.create('Ext.data.Store',{
        fields: ['value'],
        data: [
          { value: 10 },
          { value: 25 },
          { value: 50 },
          { value: 100 },
          { value: 200 }
        ]
      });
      
      Ext.apply(this, {
        store: limits,
        queryMode: 'local',
        displayField: 'value',
        valueField: 'value',
        value: 25
      });

      this.callParent(arguments);
    }
});