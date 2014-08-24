require 'rails_helper'

RSpec.describe AuthController, :type => :controller do

  describe "POST authorize" do
    it "sets the current user" do
      post :authorize, { username: "admin", password: "admin", format: :json }
      expect(assigns(:current_user)).to eql({username: "admin", role: "admin" })
    end
  end

  describe "POST logout" do
    it 'logs out the user' do
      post :logout, { format: :json }
      expect(response).to have_http_status :ok
    end
  end

  describe "GET logged_in" do
    it 'should get the logged in user if someone is logged in' do
      post :authorize, { username: "admin", password: "admin", format: :json }
      get :logged_in, {format: :json}
      expect(response.body).to eql({signed_in: true}.to_json)
    end
  end
end
