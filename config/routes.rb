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

  resources :quotes, only: :index, format: {format: :rss}

  get '/*path' => redirect('/qdb/?goTo=%{path}')
  root 'home#index'
end
