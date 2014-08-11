class TagsController < ApplicationController

  def index
    @tags = Quote.tags
  end
end
