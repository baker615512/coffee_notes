Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :countries, only: [:index, :show] 
      resources :profiles, only: [:update]
    end
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
