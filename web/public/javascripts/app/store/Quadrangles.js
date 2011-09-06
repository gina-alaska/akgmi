Ext.define('AKGMI.store.Quadrangles', {
  extend: 'Ext.data.Store',
  model: 'AKGMI.model.Quadrangle',
  autoLoad: true,
  proxy: {
    type: 'jsonp',
    url: App.restUrl + '/quadrangles.js',
    callbackParam: 'callback'
  }
});