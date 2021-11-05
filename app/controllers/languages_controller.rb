class LanguagesController < ApplicationController
  before_action :set_language, only: [:show]
  # GET /languages
  def index
    @languages = Language.all

    render json: @languages
  end
# GET /languages/1
  def show
    
    render json: @language, include: :words
  end

  def add_word
    @language = Language.find(params[:language_id])
    @word = Word.find(params[:id])

    @language.words << @words

    render json: @language, include: :words
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_language
    @language = Language.find(params[:id])
  end
end
