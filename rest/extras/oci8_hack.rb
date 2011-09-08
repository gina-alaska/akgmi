OCI8::Object::Base.class_eval do
	def build_point(attrs, dim, srid)
    p = attrs[:sdo_point].instance_variable_get("@attributes")
    x = p[:x].to_f
    y = p[:y].to_f
    if dim == 3 # 3D point
      z = p[:z].to_f
      georb = GeoRuby::SimpleFeatures::Point.from_coordinates([x,y,z], srid, true)
    elsif dim == 2 # 2D point
      georb = GeoRuby::SimpleFeatures::Point.from_coordinates([x,y], srid)
    else
      raise "Cannot handle this dimension of point #{dim}"
    end
    return georb
	end  

	def build_linestring(attrs, dim, srid)
		coords = self.process_ordinates(attrs, dim)
    
		if dim == 3 # 3D line
      georb = GeoRuby::SimpleFeatures::LineString.from_coordinates(coords, srid, true)
    elsif dim == 2 # 2D line
      georb = GeoRuby::SimpleFeatures::LineString.from_coordinates(coords, srid)
    else
      raise "unsupported dimension for linestring: #{dim}"
    end
    return georb
	end

	def build_polygon(attrs, dim, srid)
		coords = self.process_ordinates(attrs, dim)
	
		if dim == 3 # with_z == true
			georb = GeoRuby::SimpleFeatures::Polygon.from_coordinates([coords], srid, true)
		elsif dim == 2 # with_z == false
			georb = GeoRuby::SimpleFeatures::Polygon.from_coordinates([coords], srid)
		else
			raise "unsupported dimension for polygon: #{dim}"
		end

		georb
  end

  def build_multipolygon(attrs, dim, srid)
		coords = self.process_multiordinates(attrs, dim)

		if dim == 3 # with_z == true
			georb = GeoRuby::SimpleFeatures::MultiPolygon.from_coordinates([coords], srid, true)
		elsif dim == 2 # with_z == false
			georb = GeoRuby::SimpleFeatures::MultiPolygon.from_coordinates([coords], srid)
		else
			raise "unsupported dimension for polygon: #{dim}"
		end

		georb
	end

	def process_multiordinates(attrs, dim)
    elem = attrs[:sdo_elem_info].instance_variable_get("@attributes")
    #puts elem.inspect

    point_count = attrs[:sdo_ordinates].instance_variable_get("@attributes").length
    #puts "Total: #{}"

    coords_dim = []
    while elem.length >= 3 do
      #Rails.logger.debug "LEFT? #{elem.length}"
      
      offset = elem.shift.to_i - 1
      type = elem.shift.to_i
      other = elem.shift.to_i
      next_poly = (elem.first ? (elem.first.to_i - 1) : point_count)

      #Rails.logger.debug "#{offset} :: #{type} :: #{other} :: #{next_poly}"

      points = attrs[:sdo_ordinates].instance_variable_get("@attributes")[offset...next_poly].map(&:to_f)

      s = 0
      e = dim - 1
      points_dim = []
      while e < points.size
        points_dim << points[s..e]
        s += dim
        e += dim
      end
      coords_dim << points_dim
    end
    
    #Rails.logger.debug "LEFT? #{elem.length}"
    #pp coords_dim
    
		coords_dim
  end

  def process_ordinates(attrs, dim)
		coords_dim = []
    
		coords = attrs[:sdo_ordinates].instance_variable_get("@attributes").inject([]) do |c,p|
			c << p.to_f
			c
		end

		s = 0
		e = dim - 1

		while e < coords.size
			coords_dim << coords[s..e]
			s += dim
			e += dim
		end
		coords_dim
	end

  # module Mdsys; def SdoGeometry
  def as_georuby
    raise "geom should be a OCI8::Object::Mdsys::SdoGeometry" unless self.kind_of?(OCI8::Object::Mdsys::SdoGeometry)
    attributes = self.instance_variable_get("@attributes") 
    # point?
    gtype = attributes[:sdo_gtype].to_i
    srid = attributes[:sdo_srid].to_i
    # gtype = dl0t (d=dim, l=?, t=type)
    m = gtype.to_s.match(/(\d)00(\d)/)
    d = m.values_at(1)[0].to_i
    t = m.values_at(2)[0].to_i
		case t
		when 1 #point
			self.build_point(attributes, d, srid)
		when 2 #linestring
			self.build_linestring(attributes, d, srid)
		when 3 #polygon?
			self.build_polygon(attributes, d, srid)
    when 7 #multipolygon
      self.build_multipolygon(attributes, d, srid)
   	else
     	raise "unidentified SDO_GEOMETRY type #{t}"
    end
  end
end
