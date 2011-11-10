Ext.define('AKGMI.store.Publications', {
  extend: 'Ext.data.Store',
  model: 'AKGMI.model.Publication',
  autoLoad: false,
  pageSize: 200,
  proxy: {
    type: 'jsonp',
    reader: { root: 'publications' },
    url: App.config.restUrl + '/publications.js',
    callbackParam: 'callback',
    timeout: 240000
  }
});