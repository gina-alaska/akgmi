class ThemesController < ApplicationController
  respond_to :json, :js

  def index
    #@themes = Theme.top
    #respond_with(@themes.all.as_tree)
  end
end
