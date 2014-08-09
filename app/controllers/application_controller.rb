class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

protected

  def current_user
    unless session[:user].nil?
      @current_user ||= session[:user]
    end

    @current_user
  end

  def set_current_user(username, role)
    user = User.new username: username, role: role
    session[:user] = user
    Rails.logger.debug "#{role}: #{user.role}"
    @current_user = user
  end

  def signed_in?
    true unless current_user.nil?
  end

  def authenticate
    unless current_user
      respond_to do |format|
        format.json { render json:  'Insufficient Privileges', status: :unauthorized}
      end
    end
  end
end
