Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :countries, only: [:index, :show] do
        resources :flavors, only: [:index, :create]
      end
      # resources :profiles, only: [:show, :update]
      resources :flavors, only: [:index, :show] # stretch goal
    end
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
