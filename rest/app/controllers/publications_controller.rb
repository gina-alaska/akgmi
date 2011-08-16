class PublicationsController < ApplicationController
  respond_to :json, :html

  caches_action :show, :expires_in => 1.hour

  def index
    @publications = Publication.all
    respond_with(@publications)
  end

  def show
    @publication = Publication.find_by_citation_id(params[:id])

    respond_with(@publication)
  end
end
