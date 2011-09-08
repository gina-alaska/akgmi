Ext.define('AKGMI.store.Publications', {
  extend: 'Ext.data.Store',
  model: 'AKGMI.model.Publication',
  autoLoad: false,
  proxy: {
    type: 'jsonp',
    url: App.config.restUrl + '/publications.js',
    callbackParam: 'callback',
    timeout: 240000
  }
})