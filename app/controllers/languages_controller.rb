class LanguagesController < ApplicationController

  # GET /languages
  def index
    @languages = Language.all

    render json: @languages
  end
end
