require "rails_helper"

RSpec.describe QuotesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "api/quotes").to route_to("quotes#index")
      expect(get: "quotes.rss").to route_to("quotes#index", format: :rss)
    end

    it "routes to #show" do
      expect(get: "api/quotes/1").to route_to("quotes#show", id: "1")
    end

    it "routes to #create" do
      expect(post: "api/quotes").to route_to("quotes#create")
    end

    it "routes to #update" do
      expect(put: "api/quotes/1").to route_to("quotes#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "api/quotes/1").to route_to("quotes#destroy", id: "1")
    end

    it "routes to #approve" do
      expect(put: "api/quotes/1/approve").to route_to("quotes#approve", id: "1")
    end

    it "routes to #deny" do
      expect(put: "api/quotes/1/deny").to route_to("quotes#deny", id: "1")
    end

    it "routes to #admin_index" do
      expect(get: "api/admin/quotes").to route_to("quotes#admin_index")
    end
  end
end
