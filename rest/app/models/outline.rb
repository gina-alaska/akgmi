require 'sdo_geometry'
require 'oci8_hack'

=begin
{
  "citation_id"=>3297 ,
  "map_index_id"=>1,
  "map_label"=>"1",
  "map_scale_denominator"=>nil,
  "outline_source"=>"Map Outline"
}
=end

class Outline < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_MAP_INDEX_OUTLINES'
  set_primary_key 'map_index_id'

  #default_scope :select => 'citation_id, map_index_id, SDO_UTIL.TO_WKTGEOMETRY(geometry) as wkt, map_label, map_scale_denominator, outline_source'

  def wkt
    self.read_attribute(:wkt)
  end

  def as_wkt
    self.geometry.as_georuby.as_wkt
  end

  def outline?
    self.outline_source == 'Map Extent'
  end

  def interacts?(geom)
    where("SDO_ANYINTERACT(#{Outline.table_name}.geometry, SDO_GEOMETRY(?, 3338))", geom)
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
