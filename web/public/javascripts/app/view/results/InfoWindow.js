/**
 * @class AKGMI.view.results.InfoWindow
 * @extends Ext.window.Window
 * Popup a window with a list of selected items
 */
Ext.define('AKGMI.view.results.InfoWindow', {
  extend: 'Ext.window.Window', 
  alias: 'widget.infowindow',
  
  config: {
    data: []
  },
  
  constructor: function(config) {
    this.initConfig(config);
    this.callParent(arguments);
  },

  initComponent: function() {
    this.addEvents('contentupdated');
    
    this.index = -1;
    
    this.selectedRecords = new Ext.util.MixedCollection(true, function(item) { 
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
    this.updateContent(0);
    
    this.width = 300;
    this.height = 200;
    
    Ext.apply(this, {
      title: 'Record Details',
      layout: 'fit',
      closeAction: 'hide',
      dockedItems: [{
        xtype: 'toolbar',
        ui: 'footer',
        dock: 'bottom',
        items: [this.selectedCount, '->', {
          xtype: 'button',
          width: 75,
          text: '&larr; Previous',
          scope: this,
          handler: this.prevItem
        }, {
          xtype: 'button',
          width: 75,
          text: 'Next &rarr;',
          scope: this,
          handler: this.nextItem
        }]
      }],
      items: [this.contentPanel]
    });        

    this.callParent(arguments);
    
    this.on('contentupdated', this.updateCounts, this);
  },
  
  updateCounts: function() {
    var txt = this.headerTpl.apply([this.index + 1, this.selectedRecords.getCount()]);
    this.selectedCount.setText(txt);
  },
  
  updateContent: function() {
    if(this.index < 0) {
      this.index = 0;
    } 
    if(this.index >= this.selectedRecords.getCount()) {
      this.index = this.selectedRecords.getCount() - 1;
    }

    this._prevItem = this._activeItem;
    this._activeItem = this.selectedRecords.getAt(this.index);
    if(this._activeItem) {
      this.contentPanel.update(this.displayTpl.apply(this._activeItem.data));
      this.fireEvent('contentupdated', this, this._activeItem, this._prevItem, this.index);
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
    this.updateContent();
  },
  
  addItems: function(records){
    if(Ext.isArray(records)) {
      Ext.each(records, function(r) {
        this.selectedRecords.add(r.get('citation_id'), r);
      }, this);
    } else {
      this.selectedRecords.add(records.get('citation_id'), records);
    }
    
    this.updateContent();
  },
  
  nextItem: function(){
    this.index += 1;
    this.updateContent();
  },
  
  prevItem: function(){
    this.index -=1;
    this.updateContent();
  },
  open: function() {
    var pos = App.map.getPosition(),
        mapWidth = App.map.getWidth(),
        mapHeight = App.map.getHeight();
        
    loc = {
      x: pos[0] + mapWidth - this.width,
      y: pos[1] + mapHeight - this.height
    }
    this.showAt(loc.x, loc.y);
  }
});