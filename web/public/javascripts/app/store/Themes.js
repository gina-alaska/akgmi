Ext.define('AKGMI.store.Themes', {
	extend: 'Ext.data.TreeStore',
  proxy: {
    type: 'jsonp',
    url: App.config.restUrl + '/themes.js',
    extraParams: { checked: true },
    callbackParam: 'callback'
  },
  autoLoad: true,
  root: { text: 'Geologic/Geophysical Themes', expanded: true }
});