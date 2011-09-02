class PublicationsController < ApplicationController
  respond_to :js, :json, :html

  caches_action :show, :expires_in => 1.hour

  def index
    @publications = Publication.active

    if params[:themes]
      #@publications = @publications.where(:themes => )
    end

    if params[:keyword]
      ids = Keyword.citation_ids_for(:all, params[:keyword].split(/\s+/))
      @publications = @publications.where("#{Publication.table_name}.citation_id IN (?)", ids)
    end

    respond_with(@publications)
  end

  def show
    @publication = Publication.find_by_citation_id(params[:id])
    respond_with(@publication)
  end
end
