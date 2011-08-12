ActiveRecord::ConnectionAdapters::OracleEnhancedAdapter.class_eval do
  include SpatialAdapter

  alias :original_native_database_types :native_database_types
  def native_database_types
    original_native_database_types.merge!(geometry_data_types)
  end
  
  alias :original_quote :quote
  #Redefines the quote method to add behaviour for when a Geometry is encountered
  def quote(value, column = nil)
    if value.kind_of?(GeoRuby::SimpleFeatures::Geometry)
      value.as_sdo_geometry
    else
      original_quote(value,column)
    end
  end  
end
