require 'rails_helper'

RSpec.describe "quotes/show", :type => :view do
  before(:each) do
    @quote = assign(:quote, Quote.create!(
      :body => "MyText",
      :description => "MyText",
      :approved => false,
      :deleted => false,
      :flagged => false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/false/)
  end
end
