Ext.define('AKGMI.view.results.List', {
  alias: 'widget.result_list',
  extend: 'Ext.panel.Panel',
  
  title: 'Search Results',
  
  initComponent: function() {
    this.addEvents('selectionchanged');
    
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
    // dv.on('selectionchange', this.onSelectionChange);
    this.items = [dv];
    
    this.selectedCount = Ext.create('Ext.toolbar.TextItem', { text: '0' });

    this.totalCountTpl = new Ext.Template('Displaying {0} - {1} of {2}');
    this.totalCountTpl.compile();
    
    this.totalCount = Ext.create('Ext.toolbar.TextItem', { text: this.totalCountTpl.apply(['0', '0', '0']) });
    
    var exportMenu = [{
      text: 'All Records',
      action: 'all'
    }, {
      text: 'Selected Records',
      action: 'selected'
    }];
    
    var sortMenu = [{
      text: 'Author',
      field: 'authors'
    }, {
      text: 'Publication Number',
      field: 'publication_number'
    }, {
      text: 'Year',
      field: 'publication_year'
    }];
    
    this.sortSelector = Ext.create('AKGMI.view.results.SortSelector', {
      width: 150
    }),
    this.limitSelector = Ext.create('AKGMI.view.results.LimitSelector', {
      width: 50
    });
    
    this.dockedItems = Ext.create('Ext.toolbar.Toolbar', {
      dock: 'top',
      ui: 'footer',
      cls: 'dggs',
      items: [
        'Showing: ', this.limitSelector,
        CONFIG.get('results.selectedcount'), this.selectedCount, '-',this.totalCount, 
        { xtype: 'button', text: CONFIG.get('results.previous_page'), scale: 'small', action: 'prev', disabled: true },
        { xtype: 'button', text: CONFIG.get('results.next_page'), scale: 'small', action: 'next', disabled: true },
        '->', 
        'Sort By: ', this.sortSelector,
        { xtype: 'button', text: CONFIG.get('results.export'), scale: 'small', menu: exportMenu, action: 'export' },
        { xtype: 'button', text: CONFIG.get('results.clear_highlighted'), scale: 'small', action: 'clearSelected' },
        { xtype: 'button', text: CONFIG.get('results.reset'), scale: 'small', action: 'reset' }
      ]
    });
    this.callParent(arguments);
    
    this.store.on('load', this.updatePaging, this);
  },
  
  updatePaging: function(){
    if(this.store.currentPage == 1) {
      this.down('button[action="prev"]').disable();
    } else {
      this.down('button[action="prev"]').enable();
    }
    var maxPage = Math.ceil(this.store.getTotalCount() / this.store.pageSize); 
    if(this.store.currentPage == maxPage) {
      this.down('button[action="next"]').disable();
    } else {
      this.down('button[action="next"]').enable();
    }
  },
  
  reset: function() {
    this.selectedCount.update('0');
    this.totalCount.update('');
  },
  
  updateResultCount: function(start, end, count){
    this.totalCount.update(this.totalCountTpl.apply([start, end, count]));
  },
  updateSelectedCount: function(count){
    this.selectedCount.update(count);
  },
  onSelectionChange: function(dv, selections){
  }
});