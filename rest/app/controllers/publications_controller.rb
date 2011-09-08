class PublicationsController < ApplicationController
  respond_to :js, :json, :html

  #caches_action :show, :expires_in => 1.hour

  def index
    @publications = Publication.active

    if params[:themes]
      #@publications = @publications.where(:themes => )
    end

    unless params[:keyword].nil? or params[:keyword].empty?
      sql = Keyword.subquery(:all, params[:keyword].split(/\s+/))
      @publications = @publications.where("#{Publication.table_name}.citation_id IN (#{sql})")
    end

    quads = params[:quadrangles].map {|v| v.empty? ? nil : v }.compact if params[:quadrangles]
    unless quads.nil? or quads.empty?
      sql = QuadrangleSearch.subquery(:all, params[:quadrangles])
      @publications = @publications.where("#{Publication.table_name}.citation_id IN (#{sql})")
    end

    unless params[:agency].nil? or params[:agency].empty?
      @publications = @publications.where("LOWER(#{Publication.table_name}.publisher) = LOWER(?)", params[:agency])
    end

    unless params[:year_from].nil? or params[:year_from].empty?
      @publications = @publications.where("publication_year >= ?", params[:year_from])
    end
    unless params[:year_to].nil? or params[:year_to].empty?
      @publications = @publications.where("publication_year <= ?", params[:year_to])
    end

    respond_with(@publications.all.uniq!)
  end

  def show
    @publication = Publication.find_by_citation_id(params[:id])
    respond_with(@publication)
  end
end
