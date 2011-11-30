/**
 * @class AKGMI.view.results.SortSelector
 * @extends Ext.form.field.ComboBox
 * Limit selection for result list
 */
Ext.define('AKGMI.view.results.SortSelector', {
    extend: 'Ext.form.field.ComboBox', 
    alias: 'widget.sortselector',

    initComponent: function() {
      var limits = Ext.create('Ext.data.Store',{
        fields: ['text', 'field'],
        data: [{
          text: 'Author',
          field: 'authors'
        }, {
          text: 'Publication Number',
          field: 'publication_number'
        }, {
          text: 'Year',
          field: 'publication_year'
        }]
      });
      
      Ext.apply(this, {
        store: limits,
        queryMode: 'local',
        displayField: 'text',
        valueField: 'field',
        value: ''
      });

      this.callParent(arguments);
    }
});