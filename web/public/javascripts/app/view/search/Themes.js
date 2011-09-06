Ext.define('AKGMI.view.search.Themes', {
  extend: 'Ext.tree.Panel',
  alias: 'widget.search_themes',

  title: 'Geologic/Geophysical Themes',
  rootVisible: false,
  multiSelect: true,
  checkOnly: false,
  rootVisible: true,

  initComponent: function() {
    this.store = Ext.create('Ext.data.TreeStore', {
      proxy: {
        type: 'jsonp',
        url: App.restUrl + '/themes.js',
        extraParams: { checked: true },
        callbackParam: 'callback'
      },
      autoLoad: true,
      root: { text: 'Themes', expanded: true }
    });
    this.callParent(arguments);

    this.on('itemclick', this.clickHandler, this);
  },

  clickHandler: function(tree, record, item, index, e, opts) {
    if(record.isLeaf()) {
      /* Don't mess with check status if the user clicks the check box */
      if(e.target.nodeName != 'INPUT') {
        record.set('checked', !record.get('checked'));
      }

      if(record.get('checked')) {
        record.parentNode.set('checked', true);
      } else {
        /* Check to make sure there are no other check children before we uncheck the parent */
        var checked = false;
        Ext.each(record.parentNode.childNodes, function(node) {
          checked = checked || node.get('checked');
        }, this);
        record.parentNode.set('checked', checked);
      }
    } else {
      if(e.target.nodeName != 'INPUT') {
        !record.isExpanded() ? record.expand() : record.collapse();
      }
      
      Ext.each(record.childNodes, function(node) {
        node.set('checked', record.get('checked'));
      });
    }
  }
})