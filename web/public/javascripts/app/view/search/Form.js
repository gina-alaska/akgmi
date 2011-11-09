Ext.define('AKGMI.view.search.Form', {
  extend: 'Ext.form.Panel',
  alias: 'widget.search_form',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [{
    flex: 3,
    border: false,
    xtype: 'panel',
    layout: 'anchor',
    bodyStyle: 'padding-top: 3px;',
    defaultType: 'textfield',
    items:[{
      xtype: 'hiddenfield',
      name: 'aoi'
    }, {
      xtype: 'combobox',
      fieldLabel: CONFIG.get('search_form.agency'),
      plugins: [Ext.create('Ext.ux.DefaultText', { 
        text: 'Select an Agency', 
        addEmptyChoice: true
      })],
      name: 'agency',
      anchor: '100%',
      store: Ext.create('AKGMI.store.Agencies'),
      
      queryMode: 'local',
      displayField: 'name',
      valueField: 'id',
      forceSelection: true
    },{
      fieldLabel: CONFIG.get('search_form.years'),
      xtype: 'fieldcontainer',
      layout: 'hbox',
      labelWidth: 100,
      anchor: '100%',
      items: [{
        xtype: 'textfield',
        plugins: [Ext.create('Ext.ux.DefaultText', { text: 'From:' })],
        name: 'year_from',
        flex: 1
      }, { xtype: 'splitter' }, {
        xtype: 'textfield',
        plugins: [Ext.create('Ext.ux.DefaultText', { text: 'To:' })],
        name: 'year_to',
        flex: 1
      }]
    },{
      xtype: 'combobox',
      fieldLabel: CONFIG.get('search_form.quadrangles'),
      plugins: [Ext.create('Ext.ux.DefaultText', { 
        text: CONFIG.get('search_form.quadrangles_default'),
        addEmptyChoice: true
      })],
      name: 'quadrangles[]',
      multiSelect: true,
      anchor: '100%',
      store: Ext.create('AKGMI.store.Quadrangles'),
      queryMode: 'local',
      displayField: 'quad_name',
      valueField: 'quad_number_dggs',
      forceSelection: true
    },{
      fieldLabel: CONFIG.get('search_form.scale'),
      xtype: 'fieldcontainer',
      layout: 'hbox',
      labelWidth: 100,
      anchor: '100%',
      items: [{
        xtype: 'combobox',
        name: 'scale_from',
        plugins: [Ext.create('Ext.ux.DefaultText', { text: CONFIG.get('search_form.scale_from_default'), addEmptyChoice: true })],
        store: Ext.create('Ext.data.Store', {
          fields: ['key', 'display'],
          data: CONFIG.get('search_form.scale_from')
        }),
        displayField: 'display',
        valueField: 'key',
        flex: 1
      }, { xtype: 'splitter' }, {
        xtype: 'combobox',
        name: 'scale_to',
        flex: 1,
        plugins: [Ext.create('Ext.ux.DefaultText', { text: CONFIG.get('search_form.scale_to_default'), addEmptyChoice: true })],
        store: Ext.create('Ext.data.Store', {
          fields: ['key', 'display'],
          data: CONFIG.get('search_form.scale_to')
        }),
        displayField: 'display',
        valueField: 'key',
      }]
    }, {
      fieldLabel: '',
      hideEmptyLabel: false,
      xtype: 'checkbox',
      boxLabel: CONFIG.get('search_form.statewide'),
      name: 'statewide'
    }]
  },{
    xtype: 'search_themes',
		store: Ext.create('AKGMI.store.Themes'),
    border: false,
    autoScroll: true,
    flex: 4
  },{
    xtype: 'panel',
    layout: { type: 'hbox' },
    border: false,
    items: [{
      flex: 2,
      xtype: 'button',
      text: 'Search',
      scale: 'large',
			action: 'search'
    }]
  }]
});