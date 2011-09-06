function as_bool(v) { return (v == 'Y' ? true : false) }
Ext.define('AKGMI.model.Publication', {
  extend: 'Ext.data.Model',
  fields: [
    'citation_id', 'publication_number', 'authors', 'title', 'quadrangles',
    'keywords', 'publication_year', 'publisher', 'biblio_ref_short', 'biblio_ref_long', 'url',
    { name: 'map', convert: as_bool },
    { name: 'report', convert: as_bool },
    { name: 'disk', convert: as_bool },
    { name: 'geospatial_data', convert: as_bool },
    { name: 'outside_link', convert: as_bool }
  ]
});