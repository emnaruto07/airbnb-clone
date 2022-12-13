Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  devise_for :users

  # Defines the root path route ("/")
  root "home#index"

  namespace :api do
    resources :users, only: :show
    get "/users_by_email" => "users_by_emails#show", as: :users_by_email, format: :json
  end

end
