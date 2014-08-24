require 'rails_helper'

RSpec.describe TagsController, :type => :controller do

  let(:valid_attributes) {
    {body: "quote", description: "description" }
  }

  let(:valid_session) { {} }

  describe "GET index" do
    it "assigns all the approved tags as @tags" do
      quote = Quote.create! valid_attributes
      quote.approved = true
      quote.tag_list = "this is a quote"
      quote.save
      get :index, {format: :json}, valid_session
      expect(assigns(:tags)).to eq(ActsAsTaggableOn::Tag.named_any(["this", "is", "a", "quote"]))
    end
  end
end
