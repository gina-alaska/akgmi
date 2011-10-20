function as_bool(v) { return (v == 'Y' ? true : false) }
Ext.define('AKGMI.model.Publication', {
  extend: 'Ext.data.Model',
  fields: [
    'citation_id', 'publication_number', 'authors', 'title', 'quadrangles', 'has_extent_outline',
    'keywords', 'publication_year', 'publisher', 'biblio_ref_short', 'biblio_ref_long', 'url',
    { name: 'map', convert: as_bool },
    { name: 'report', convert: as_bool },
    { name: 'disk', convert: as_bool },
    { name: 'geospatial_data', convert: as_bool },
    { name: 'outside_link', convert: as_bool },
    {
      name: 'outlines',
      convert: function(v, r) {
        var wkt = new OpenLayers.Format.WKT();
        var features = [];

        Ext.each(v, function(item) {
          var feature = wkt.read(item.wkt);
          features.push(feature);
        }, this);

        return features;
      }
    }
  ]
});