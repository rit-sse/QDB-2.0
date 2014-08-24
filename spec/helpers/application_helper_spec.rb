require "rails_helper"

RSpec.describe ApplicationHelper, type: :helper do
  context "html_import_tag" do
    it "should output properly" do
      expect(helper.html_import_tag("foo")).to have_tag("link", with: {rel: "import", href: "/qdb/assets/foo.html"})
    end
  end
end
