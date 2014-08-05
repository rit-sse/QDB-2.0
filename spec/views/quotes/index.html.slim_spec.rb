require 'rails_helper'

RSpec.describe "quotes/index", :type => :view do
  before(:each) do
    assign(:quotes, [
      Quote.create!(
        :body => "MyText",
        :description => "MyText",
        :approved => false,
        :deleted => false,
        :flagged => false
      ),
      Quote.create!(
        :body => "MyText",
        :description => "MyText",
        :approved => false,
        :deleted => false,
        :flagged => false
      )
    ])
  end

  it "renders a list of quotes" do
    render
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
  end
end
