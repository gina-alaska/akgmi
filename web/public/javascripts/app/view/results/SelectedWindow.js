/**
 * @class AKGMI.view.results.SelectedWindow
 * @extends Ext.window.Window
 * Popup a window with a list of selected items
 */
Ext.define('AKGMI.view.results.SelectedWindow', {
  extend: 'Ext.window.Window', 
  alias: 'widget.selectedwindow',
  
  config: {
    data: []
  },
  
  constructor: function(config) {
    this.initConfig(config);
    this.callParent(arguments);
  },

  initComponent: function() {
    this.index = 0;
    
    this.selectedRecords = new Ext.util.MixedCollection(true, function(item) { 
      console.log(item); 
      return item.get('citation_id'); 
    });
    
    this.headerTpl = new Ext.Template('Record {0} of {1}');
    this.displayTpl = new Ext.XTemplate(
      '<tpl for=".">',
      '<div class="selected-wrap">',
        '<div class="header">',
          '<a href="{url}" target="_blank">{publication_number}</a>',
        '</div>',
        '<div class="body">{biblio_ref_long}</div>',
      '</div>',
      '</tpl>'
    );
    this.selectedCount = Ext.create('Ext.toolbar.TextItem', {
      text: this.headerTpl.apply(this.index + 1, this.selectedRecords.getCount())
    });
    this.contentPanel = Ext.create('Ext.panel.Panel', {
      bodyStyle: 'padding: 3px;',
      autoScroll: true,
      border: false
    });

    this.addItems(this.getData());
    this.updateContent(this.index);
    
    Ext.apply(this, {
      title: 'Selected Records',
      width: 400,
      height: 300,
      layout: 'fit',
      closeAction: 'hide',
      dockedItems: [{
        xtype: 'toolbar',
        ui: 'footer',
        dock: 'bottom',
        items: [this.selectedCount, '->', {
          xtype: 'button',
          width: 100,
          text: '&larr; Previous',
          scope: this,
          handler: this.prevItem
        }, {
          xtype: 'button',
          width: 100,
          text: 'Next &rarr;',
          scope: this,
          handler: this.nextItem
        }]
      }],
      items: [this.contentPanel]
    });        

    this.callParent(arguments);
  },
  
  updateCounts: function() {
    var txt = this.headerTpl.apply([this.index + 1, this.selectedRecords.getCount()]);
    this.selectedCount.setText(txt);
  },
  
  updateContent: function(index) {
    if(index < 0) {
      this.index = 0;
    } else if(index > this.selectedRecords.getCount()) { 
      this.index = this.selectedRecords.getCount();
    } else {
      this.index = index;      
    }
    
    this.activeItem = this.selectedRecords.getAt(this.index);
    if(this.activeItem) {
      this.updateCounts();
      this.contentPanel.update(this.displayTpl.apply(this.activeItem.data));
    }
  },
  
  removeItems: function(records) {
    if(Ext.isArray(records)) {
      Ext.each(records, function(r) {
        this.selectedRecords.remove(r);                  
      }, this);
    } else {
      this.selectedRecords.remove(records);
    }
    this.updateContent(this.index);
  },
  
  addItems: function(records){
    if(Ext.isArray(records)) {
      Ext.each(records, function(r) {
        this.selectedRecords.add(r.get('citation_id'), r);
      }, this);
    } else {
      this.selectedRecords.add(records.get('citation_id'), records);
    }
    this.updateContent(this.index);
  },
  
  nextItem: function(){
    this.updateContent(this.index + 1);
  },
  
  prevItem: function(){
    this.updateContent(this.index - 1);
  }
});