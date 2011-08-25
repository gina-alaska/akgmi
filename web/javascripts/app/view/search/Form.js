Ext.define('AKGMI.view.search.Form', {
  extend: 'Ext.form.Panel',
  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [{
    title: 'Publication Information',
    flex: 1,
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
      fieldLabel: 'Year Range',
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
      fieldLabel: 'Quadrangle',
      name: 'quadrangle',
      anchor: '100%',
      store: Ext.create('AKGMI.store.Quadrangles'),
      queryMode: 'local',
      displayField: 'quad_name',
      valueField: 'quad_number_dggs'
    },{
      fieldLabel: 'Scale',
      name: 'keyword',
      anchor: '100%'
    }]
  },{
    xtype: 'search_themes',
    border: false,
    autoScroll: true,
    flex: 2
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
      flex: 1,
      xtype: 'button',
      text: 'Search',
      scale: 'large'
    }]
  }]
});