Rails.application.routes.draw do
  resources :languages, only: [:index, :show]
  resources :words
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users, only: :create
  post '/languages/:language_id', to: 'words#create'
  put '/languages/:language_id/words/:id', to: 'words#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
