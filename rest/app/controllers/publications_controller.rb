class PublicationsController < ApplicationController
  respond_to :js, :json, :html

  caches_action :show, :expires_in => 1.hour

  def index
    @publications = Publication.active

    if params[:themes]
      #@publications = @publications.where(:themes => )
    end

    unless params[:keyword].nil? or params[:keyword].empty?
      sql = Keyword.subquery(:all, params[:keyword].split(/\s+/))
      @publications = @publications.where("#{Publication.table_name}.citation_id IN (#{sql})")
    end

    respond_with(@publications)
  end

  def show
    @publication = Publication.find_by_citation_id(params[:id])
    respond_with(@publication)
  end
end
