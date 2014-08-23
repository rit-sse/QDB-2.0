require "rails_helper"

RSpec.describe AuthController, type: :routing do
  describe "routing" do
    it "routes to #authorize" do
      expect(post: "api/authorize").to route_to("auth#authorize")
    end

    it "routes to #logged_in" do
      expect(get: "api/logged_in").to route_to("auth#logged_in")
    end

    it "routes to #logout" do
      expect(post: "api/logout").to route_to("auth#logout")
    end
  end
end
