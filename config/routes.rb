Rails.application.routes.draw do

  resources :quotes, except: [:new, :edit] do
    member do
      post 'approve'
      post 'deny'
    end
  end

  resources :tags, only: [:index]

  get '/admin/quotes' => 'quotes#admin_index'

  root 'home#index'
end
