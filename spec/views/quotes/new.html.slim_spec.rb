require 'rails_helper'

RSpec.describe "quotes/new", :type => :view do
  before(:each) do
    assign(:quote, Quote.new(
      :body => "MyText",
      :description => "MyText",
      :approved => false,
      :deleted => false,
      :flagged => false
    ))
  end

  it "renders new quote form" do
    render

    assert_select "form[action=?][method=?]", quotes_path, "post" do

      assert_select "textarea#quote_body[name=?]", "quote[body]"

      assert_select "textarea#quote_description[name=?]", "quote[description]"

      assert_select "input#quote_approved[name=?]", "quote[approved]"

      assert_select "input#quote_deleted[name=?]", "quote[deleted]"

      assert_select "input#quote_flagged[name=?]", "quote[flagged]"
    end
  end
end
