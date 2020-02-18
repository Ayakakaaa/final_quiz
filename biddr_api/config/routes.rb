Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    # The option `defaults: { format: :json }` will
    namespace :api, defaults: { format: :json } do 
      # /api...
      namespace :v1 do 
        # /api/v1...
        resources :auctions do
          resource :bids, only: [:create]
        # resource :session, only: [:create, :destroy]
        end
        
        resource :session, only: [:create, :destroy]
        #/api/v1/session 
        resources :users, only: [:create, :update] do
          #api/v1/users/current
          get :current, on: :collection 
          #default
          #api/v1/users/:id/current
        end
      end
    end

end
