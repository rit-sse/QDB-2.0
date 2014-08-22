require "rails_helper"

RSpec.describe QuotesController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "api/quotes").to route_to("quotes#index")
    end

    it "routes to #show" do
      expect(:get => "api/quotes/1").to route_to("quotes#show", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "api/quotes").to route_to("quotes#create")
    end

    it "routes to #update" do
      expect(:put => "api/quotes/1").to route_to("quotes#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "api/quotes/1").to route_to("quotes#destroy", :id => "1")
    end

  end
end
