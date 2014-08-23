require "rails_helper"

RSpec.describe TagsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "api/tags").to route_to("tags#index")
    end
  end
end
