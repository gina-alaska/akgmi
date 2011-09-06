Ext.define('AKGMI.store.Agencies', {
  extend: 'Ext.data.Store',
  fields: ['id', 'name'],
  data: [{
    id: 'USGS', name: 'USGS'
  }, {
    id: 'DGGS', name: 'DGGS'
  }]
});