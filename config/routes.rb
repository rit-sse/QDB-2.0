Rails.application.routes.draw do

  scope '/api' do
    resources :quotes, except: [:new, :edit] do
      member do
        post 'approve'
        post 'deny'
      end
    end

    resources :tags, only: [:index]

    get '/admin/quotes' => 'quotes#admin_index'
    post '/authorize' => 'auth#authorize'
    get '/logged_in' => 'auth#logged_in'
    post '/logout' => 'auth#logout'
  end

  get '/quotes.rss' => 'quotes#index', format: :false, defaults: {format: :rss}

  get '/*path' => redirect{ |params, request| "/qdb/?goTo=#{request.params[:path]}&" +  (request.params[:page].nil? ? "" : "page=#{request.params[:page]}") }
  root 'home#index'
end
