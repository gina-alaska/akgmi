Ext.define('AKGMI.store.Publications', {
  extend: 'Ext.data.Store',
  model: 'AKGMI.model.Publication',
  proxy: {
    type: 'jsonp',
    url: App.restUrl + '/publications.js',
    callbackParam: 'callback'
  },
  autoLoad: false
})