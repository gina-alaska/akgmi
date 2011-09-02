Ext.define('AKGMI.view.search.Results', {
  extend: 'Ext.panel.Panel',
  initComponent: function() {
    this.items = Ext.create('Ext.view.View', {
      store: this.store,
      tpl: [
        '<tpl for=".">',
          '<div class="result-wrap" id="citation_{citation_id}">',
            '<div class="header">',
              '<span class="title"><a href="{url}" target="_blank">{publication_number}</a></span>',
              '<span class="icons">',
                '<tpl if="report"><img class="report" alt="report" src="/images/icons/report.png"></tpl>',
                '<tpl if="map"><img class="map" alt="map" src="/images/icons/map.png"></tpl>',
                '<tpl if="geospatial_data"><img class="geospatial" alt="geospatial" src="/images/icons/geospatial.png"></tpl>',
              '</span>',
            '</div>',
            '<div class="body">{biblio_ref_long}</div>',
            '<div class="keywords">Keywords: {keywords}</div>',
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