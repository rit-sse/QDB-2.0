class AuthController < ApplicationController
  def authorize
    if Rails.env.development? and
      params[:username] == "admin" and
      params[:password] == "admin"

      set_current_user "admin", "admin"
      respond_to do |format|
        format.json { render json: current_user, status: :ok}
      end
    else
      username = params[:username]
      username = username[/\A\w+/].downcase
      user = username + "@ad.sofse.org"
      psw = params[:password]
      authorized = false

      ldap = Net::LDAP.new host: "dc1.ad.sofse.org",
           :port => 389,
           :auth => {
                 method: :simple,
                 username: user,
                 password: psw
           }

      officers = ['president', 'vp', 'tresurer', 'secretary']

      respond_to do |format|
        if ldap.bind && officers.include?(username)

          username = user
          role = "admin"

          set_current_user username, role
          format.json { render json: current_user, status: :ok}
        else
          format.json { render json:  { notice: 'Insufficient Privileges'} , status: :unauthorized}
        end
      end
    end
  end

  def logout
    reset_session
    respond_to do |format|
      format.json { render json: {notice: 'Signed Out Successfully'}, status: :ok}
    end
  end

  def logged_in
    respond_to do |format|
      if signed_in?
        format.json { render json: { signed_in: true }, status: :ok }
      else
        format.json { render json: { signed_in: false }, status: :ok }
      end
    end
  end

end
