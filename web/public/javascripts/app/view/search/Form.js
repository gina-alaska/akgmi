Ext.define('AKGMI.view.search.Form', {
  extend: 'Ext.form.Panel',
  alias: 'widget.search_form',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [{
    title: 'Publication Information',
    flex: 3,
    border: false,
    xtype: 'panel',
    layout: 'anchor',
    bodyStyle: 'padding-top: 3px;',
    defaultType: 'textfield',
    items: [{
      fieldLabel: 'Keyword',
      name: 'keyword',
      anchor: '100%'
    },{
      xtype: 'combobox',
      fieldLabel: 'Agency',
      name: 'agency',
      anchor: '100%',
      store: Ext.create('AKGMI.store.Agencies'),
      queryMode: 'local',
      displayField: 'name',
      valueField: 'id'
    },{
      fieldLabel: 'Year(s)',
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
      fieldLabel: 'Quadrangle(s)',
      plugins: [Ext.create('Ext.ux.DefaultText', { text: 'Select one or more quadrangles' })],
      name: 'quadrangles[]',
      multiSelect: true,
      anchor: '100%',
      store: Ext.create('AKGMI.store.Quadrangles'),
      queryMode: 'local',
      displayField: 'quad_name',
      valueField: 'quad_number_dggs'
    },{
      fieldLabel: 'Scale',
      xtype: 'fieldcontainer',
      layout: 'hbox',
      labelWidth: 100,
      anchor: '100%',
      items: [{
        xtype: 'combobox',
        name: 'scale_from',
        plugins: [Ext.create('Ext.ux.DefaultText', { text: 'From:' })],
        store: Ext.create('Ext.data.Store', {
          fields: ['key', 'display'],
          data: [
            { key: 1, display: '1:1' },
            { key: 24000, display: '1:24,000'},
            { key: 63600, display: '1:63,600'},
            { key: 100000, display: '1:100,000'},
            { key: 250000, display: '1:250,000'},
            { key: 500000, display: '1:500,000'},
            { key: 3500000, display: '1:3,500,000'}
          ]
        }),
        displayField: 'display',
        valueField: 'key',
        flex: 1
      }, { xtype: 'splitter' }, {
        xtype: 'combobox',
        name: 'scale_to',
        flex: 1,
        plugins: [Ext.create('Ext.ux.DefaultText', { text: 'To:' })],
        store: Ext.create('Ext.data.Store', {
          fields: ['key', 'display'],
          data: [
            { key: 24000, display: '1:24,000'},
            { key: 63600, display: '1:63,600'},
            { key: 100000, display: '1:100,000'},
            { key: 250000, display: '1:250,000'},
            { key: 500000, display: '1:500,000'},
            { key: 3500000, display: '1:3,500,000'},
            { key: 25000000, display: '1:25,000,000'}
          ]
        }),
        displayField: 'display',
        valueField: 'key',
      }]
    }, {
      fieldLabel: '',
      hideEmptyLabel: false,
      xtype: 'checkbox',
      boxLabel: 'Include Statewide Records',
      name: 'statewide'
    }]
  },{
    xtype: 'search_themes',
    border: false,
    autoScroll: true,
    flex: 4
  },{
    xtype: 'panel',
    layout: { type: 'hbox' },
    border: false,
    items: [{
      margins: '0 3 0 0',
      flex: 1,
      xtype: 'button',
      text: 'Clear',
      scale: 'large'
    }, {
      flex: 2,
      xtype: 'button',
      text: 'Search',
      scale: 'large'
    }]
  }]
});