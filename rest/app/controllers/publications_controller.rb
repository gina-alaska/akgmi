class PublicationsController < ApplicationController
  respond_to :js, :json, :html, :pdf

  #caches_action :show, :expires_in => 1.hour

  def index
    @limit = params[:limit] || 200
    @page = 1 || params[:page]
 
    @publications = Publication.active

    if params[:themes]
      #@publications = @publications.where(:themes => )
    end

    if valid? :keyword
      sql = Keyword.subquery(params[:keyword].split(/\s+/))
      #@publications = @publications.where("#{Publication.table_name}.citation_id IN (#{sql})")
##{Publication.table_name}.citation_id IN (#{sql}) 
      params[:keyword].split(/\s+/).each do |word|
        @publications = @publications.where(
          "lower(keywords) like ? OR lower(biblio_ref_long) LIKE ?", "%#{word.downcase}%", "%#{word.downcase}%")
      end
    end

    if valid? :themes
      sql = Keyword.theme_subquery(params[:themes])
      @publications = @publications.where("#{Publication.table_name}.citation_id IN (#{sql})")
    end

    quads = params[:quadrangles].map {|v| v.empty? ? nil : v }.compact if params[:quadrangles]
    unless quads.nil? or quads.empty?
      sql = QuadrangleSearch.subquery(:all, params[:quadrangles])
      @publications = @publications.where("#{Publication.table_name}.citation_id IN (#{sql})")
    end

    unless params[:agency].nil? or params[:agency].empty?
      @publications = @publications.where("LOWER(#{Publication.table_name}.publisher) = ?", params[:agency].downcase)
    end

    unless params[:year_from].nil? or params[:year_from].empty?
      @publications = @publications.where("publication_year >= ?", params[:year_from])
    end

    unless params[:year_to].nil? or params[:year_to].empty?
      @publications = @publications.where("publication_year <= ?", params[:year_to])
    end

    if valid? :scale_from
      @publications = @publications.where("#{Outline.table_name}.map_scale_denominator >= ?", params[:scale_from].to_i)
    end
    if valid? :scale_to
      @publications = @publications.where("#{Outline.table_name}.map_scale_denominator <= ?", params[:scale_to].to_i)
    end

    unless params[:aoi_geographic].blank?
      @aoi_geographic = GeoRuby::SimpleFeatures::Polygon.from_ewkt(params[:aoi_geographic])
      @aoi_geographic.srid = 4326;
      @bounds = @aoi_geographic.envelope
    end

    unless params[:aoi].blank?
      @aoi = GeoRuby::SimpleFeatures::Polygon.from_ewkt(params[:aoi])
      @aoi.srid = 3338;

      @publications = @publications.where(
        "SDO_RELATE(#{Outline.table_name}.geometry, #{@aoi.as_sdo_rectangle}, 'mask=ANYINTERACT querytype = WINDOW') = 'TRUE'"
      )
    end

    @selected = params[:selected].split(',').map(&:to_i) unless params[:selected].blank?
    if @selected and params[:selected_only]
      @publications = @publications.where(:citation_id => @selected)
    end

    respond_to do |format|
      format.pdf do
        render :pdf => 'publications', 
                :layout => 'pdf.html', 
                :footer => {
                  :left => "Generated: #{Time.now.strftime('%F %T')}", 
                  :right => '[page]/[toPage]',
                  :line => true
                }
      end
      format.all do
        @publications = @publications.paginate(:page => @page, :per_page => @limit)
      end
    end
  end

  def show
    @publication = Publication.find_by_citation_id(params[:id])
    respond_with(@publication)
  end

  protected

  def valid?(field)
    not (params[field].nil? or params[field].empty?)
  end
end
