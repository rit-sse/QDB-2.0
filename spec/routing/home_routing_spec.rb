require "rails_helper"

RSpec.describe HomeController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/").to route_to("home#index")
      expect(get: "/*path").to route_to("home#index", path: "*path")
    end
  end
end
