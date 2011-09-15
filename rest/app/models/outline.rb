require 'sdo_geometry'
require 'oci8_hack'

class Outline < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_MAP_INDEX_OUTLINES'
  set_primary_key 'map_index_id'

  def as_wkt
    self.geometry.as_georuby.as_wkt
  end

 	def as_json(attrs = nil)
    {
      #:citation_id => self.citation_id,
      #:map_index_id => self.map_index_id,
      :wkt => self.as_wkt,
      #:map_label => self.map_label,
      #:map_scale_denominator => self.map_scale_denominator,
      :outline_source => self.outline_source
    }
  end
end
