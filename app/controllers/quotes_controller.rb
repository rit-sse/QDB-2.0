class QuotesController < ApplicationController
  before_action :set_quote, only: [:show, :edit, :update, :destroy, :approve, :deny]
  before_action :authenticate, except: [:index, :show, :create]
  has_scope :by_tag
  has_scope :search

  # GET /quotes
  # GET /quotes.json
  def index
    @quotes = apply_scopes(Quote).approved.page(params[:page])
    respond_to do |format|
      format.json
      format.rss {render :layout => false}
    end
  end

  def admin_index
    @quotes = Quote.needs_approval
  end

  # GET /quotes/1
  # GET /quotes/1.json
  def show
    if signed_in?
      @quote = Quote.find_by_id(params[:id])
    else
      @quote = Quote.approved.find_by_id(params[:id])
    end

    respond_to do |format|
      unless @quote.nil?
        format.json { render :show, status: :ok, location: @quote }
      else
        format.json { render :show, status: :not_found }
      end
    end
  end

  # POST /quotes
  # POST /quotes.json
  def create
    @quote = Quote.new(quote_params)
    @quote.tag_list = params[:tags]

    respond_to do |format|
      if @quote.save
        format.json { render :show, status: :created, location: @quote }
      else
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /quotes/1
  # PATCH/PUT /quotes/1.json
  def update
    @quote.tag_list = params[:tags]
    respond_to do |format|
      if @quote.update(quote_params)
        format.json { render :show, status: :ok, location: @quote }
      else
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /quotes/1
  # DELETE /quotes/1.json
  def destroy
    @quote.destroy
    respond_to do |format|
      format.html { redirect_to quotes_url, notice: 'Quote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def approve
    @quote.approved = true
    respond_to do |format|
      if @quote.save
        format.json { render :show, status: :ok, location: @quote }
      else
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  def deny
    @quote.approved = false
    respond_to do |format|
      if @quote.save
        format.json { render :show, status: :ok, location: @quote }
      else
        format.json { render json: @quote.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quote
      @quote = Quote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def quote_params
      params.require(:quote).permit(:body, :description)
    end
end
