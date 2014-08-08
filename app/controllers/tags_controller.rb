class TagsController < ApplicationController

  def index
    @quotes = Quote.tags
  end
end
