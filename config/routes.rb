Rails.application.routes.draw do

    namespace :api do
      get '/players/', to: 'players#players'
      post '/profiles/', to: 'profile#profile'
    end
  
  end