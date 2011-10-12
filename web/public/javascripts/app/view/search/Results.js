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
    this.items = Ext.create('Ext.view.View', {
      store: this.store,
      simpleSelect: true,
      trackOver: true,
      tpl: [
        '<tpl for=".">',
          '<div class="result-wrap" id="citation_{citation_id}">',
            '<div class="header">',
              '<span class="title"><a href="{url}" target="_blank">{publication_number}</a></span>',
              '<span class="icons">',
                '<tpl if="report"><img class="report" alt="report" src="/images/icons/report_sm.png"></tpl>',
                '<tpl if="map"><img class="map" alt="map" src="/images/icons/maps_sm.png"></tpl>',
                '<tpl if="geospatial_data"><img class="geospatial" alt="geospatial" src="/images/icons/digital_data_sm.png"></tpl>',
                '<tpl if="outside_link"><img class="outside_link" alt="outside_link" src="/images/icons/link_go_sm.png"></tpl>',
                '<tpl if="disk"><img class="disk" alt="disk" src="/images/icons/offline_sm.png"></tpl>',
              '</span>',
            '</div>',
            '<div class="body">{biblio_ref_long}</div>',
            '<div class="keywords">',
              '<span class="keywordlist" style="display:none;">Keywords: {keywords}<br /></span>',
            '</div>',
            '<div class="actions">',
              '<a class="toggle" href="javascript:void(0)">Show Keywords</a>',
            '</div>',
          '</div>',
        '</tpl>'
      ],
      overItemCls: 'x-item-over',
      itemSelector: 'div.result-wrap',
      emptyText: 'No results found'
    });

    this.callParent(arguments);
  }
});