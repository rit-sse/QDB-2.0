class AuthController < ApplicationController
  def authorize
    if Rails.env.development? and
      params[:username] == "admin" and
      params[:password] == "admin"

      set_current_user "admin", "admin"

      redirect_to admin_events_path, notice:"Logged in successfully."
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
          format.json { render json: current_user}
        elsif ldap.bind
          error_notice = "Insufficient Privileges"
        else
          error_notice = "Error: #{ldap.get_operation_result.message}"
        end
      end
    end
  end

  def logout
    reset_session
    redirect_to root_path, notice: "Signed out successfully."
  end
end
