Ext.define('AKGMI.view.search.Themes', {
  extend: 'Ext.tree.Panel',
  alias: 'widget.search_themes',

  multiSelect: true,
  checkOnly: false,
  rootVisible: true,

  initComponent: function() {
    this.callParent(arguments);
    this.on('itemclick', this.clickHandler, this);
    this.on('beforeitemcollapse', this.beforeNodeCollapse, this);
  },
  
  beforeNodeCollapse: function(node){
    var checked = false;
    Ext.each(node.childNodes, function(n) {
      if(n.get('checked')) {
        checked = true;
      }
    }, this);
    
    return !checked;
  },

  clickHandler: function(tree, record, item, index, e, opts) {
    var checked;
    
    if(record.isLeaf()) {
      /* Don't mess with check status if the user clicks the check box */
      if(e.target.nodeName != 'INPUT') {
        record.set('checked', !record.get('checked'));
      }

      /* Check to make sure there are no other check children before we uncheck the parent */
      checked = true;
      Ext.each(record.parentNode.childNodes, function(node) {
        checked = checked && node.get('checked');
      }, this);
      record.parentNode.set('checked', checked);
    } else {
      if(e.target.nodeName == 'INPUT') {
        Ext.each(record.childNodes, function(node) {
          node.set('checked', record.get('checked'));
        });
        record.expand();
      } else {
        record.isExpanded ? record.collapse() : record.expand();        
      }
    }
  },
  
  reset: function() {
    Ext.each(this.getChecked(), function(r) {
      r.set('checked', false);
    }, this);
  }
});