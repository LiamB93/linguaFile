class WordsController < ApplicationController
  before_action :set_word, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_word, only: [:update, :destroy]

  # GET /words
  def index
    @words = Word.all

    render json: @words
  end

  # GET /words/1
  def show
    
    render json: @word, include: :languages
  end

  # POST /words
  def create
    
    @word = Word.new(word_params)
    @word.user = @current_user
    if @word.save
      @language = Language.find(params[:language_id])
      @language.words << @word
      render json: @word, status: :created
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /words/1
  def update
    if @word.update(word_params)
      render json: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /words/1
  def destroy
    @word.destroy
  end

  def add_word
    @word = Word.find(params[:language_id])
    @word = Word.find(params[:id])

    @word.languages << @languages

    render json: @word, include: :languages
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_word
    @word = Word.find(params[:id])
  end

  def set_user_word
    @word = @current_user.words.find(params[:id])
  end
  
  # Only allow a list of trusted parameters through.
  def word_params
    params.require(:word).permit(:name, :user_id, :term, :example, :img_url, :translation)
  end
end
