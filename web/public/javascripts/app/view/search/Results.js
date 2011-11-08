Ext.define('AKGMI.view.search.Results', {
  alias: 'widget.search_results',
  extend: 'Ext.panel.Panel',
  // dockedItems: [{
  //   xtype: 'toolbar',
  //   dock: 'top',
  //   layout: {
  //     type: 'hbox',
  //     pack: 'center'
  //   },
  //   defaults: {
  //     scale: 'large', iconAlign: 'top', minWidth: 80,
  //     enableToggle: true, toggleGroup: 'results-type'
  //   },
  //   items: [{
  //      action: 'any',
  //     text: CONFIG.get('results.any_type'),
  //     iconCls: 'all_sm_icon',
  //     pressed: true
  //   }, {
  //      action: 'reports',
  //     text: CONFIG.get('results.reports'),
  //     iconCls: 'report_sm_icon',
  //     field: 'report'
  //   }, {
  //      action: 'maps',
  //     text: CONFIG.get('results.maps'),
  //     iconCls: 'maps_sm_icon',
  //     field: 'map'
  //   }, {
  //      action: 'geospatial',
  //     text: CONFIG.get('results.geospatial'),
  //     iconCls: 'digital_data_sm_icon',
  //     field: 'geospatial_data'
  //   }, {
  //      action: 'outside_links',
  //     text: CONFIG.get('results.outside_links'),
  //     iconCls: 'link_go_sm_icon',
  //     field: 'outside_link'
  //   }, {
  //      action: 'cd_dvd',
  //     text: CONFIG.get('results.cd_dvd'),
  //     iconCls: 'offline_sm_icon',
  //     field: 'disk'
  //   }]
  // }],
  initComponent: function() {
    var dv = Ext.create('Ext.view.View', {
      store: this.store,
      simpleSelect: true,
      trackOver: true,
      tpl: [
        '<tpl for=".">',
          '<div class="result-wrap" id="citation_{citation_id}">',
            '<div class="checkbox">',
              '<input type="checkbox" name="selected[]" />',
            '</div>',
            '<div class="result-content">',
              '<div class="header">',
                '<span class="title"><a href="{url}" target="_blank">{publication_number}</a></span>',
                '<span class="icons">',
                  '<tpl if="report"><img class="report" alt="report" src="images/icons/report_sm.png"></tpl>',
                  '<tpl if="map"><img class="map" alt="map" src="images/icons/maps_sm.png"></tpl>',
                  '<tpl if="geospatial_data"><img class="geospatial" alt="geospatial" src="images/icons/digital_data_sm.png"></tpl>',
                  '<tpl if="outside_link"><img class="outside_link" alt="outside_link" src="images/icons/link_go_sm.png"></tpl>',
                  '<tpl if="disk"><img class="disk" alt="disk" src="images/icons/offline_sm.png"></tpl>',
                '</span>',
              '</div>',
              '<div class="body">{biblio_ref_long}</div>',
              '<tpl if="has_extent_outline">',
                '<div class="notes">Please note that some areas within the outline may not be mapped.</div>',
              '</tpl>',
              '<div class="keywords">',
                '<span class="keywordlist" style="display:none;">Keywords: {keywords}<br /></span>',
              '</div>',
              '<div class="actions">',
                '<a class="toggle" href="javascript:void(0)">Show Keywords</a> | ',
                '<a class="zoomto" href="javascript:void(0)">Zoom to</a>',
              '</div>',
            '</div>',
          '</div>',
        '</tpl>'
      ],
      overItemCls: 'x-item-over',
      itemSelector: 'div.result-wrap',
      emptyText: '<div class="noresults">'+CONFIG.get('results.noresultsfound')+'</div>'
    });
    dv.on('selectionchange', this.onSelectionChange);
    this.items = [dv];
    
    this.selectedCount = Ext.create('Ext.toolbar.TextItem', { text: '0' });
    this.totalCount = Ext.create('Ext.toolbar.TextItem', { text: '0' });
    
    this.dockedItems = Ext.create('Ext.toolbar.Toolbar', {
      dock: 'top',
      ui: 'dggs',
      items: [
        Ext.create('Ext.toolbar.TextItem', { text: CONFIG.get('results.title'), ui: 'title' }), 
        CONFIG.get('results.selectedcount'), this.selectedCount, '-',
        CONFIG.get('results.totalcount'), this.totalCount,
        '->', 
        { xtype: 'button', text: CONFIG.get('results.export'), scale: 'medium' }
      ]
    });

    this.callParent(arguments);
  },
  updateResultCount: function(count){
    this.totalCount.update(count);
  },
  updateSelectedCount: function(count){
    this.selectedCount.update(count);
  },
  onSelectionChange: function(dv, selections){
    Ext.each(dv.view.getNodes(), function(item) {
      if(selections.indexOf(dv.view.getRecord(item)) >= 0) {
        Ext.fly(item).down('input[type=checkbox]').dom.checked = true;
      } else {
        Ext.fly(item).down('input[type=checkbox]').dom.checked = false;
      }
    }, this);
  }
});