Rails.application.routes.draw do

    namespace :api do
      get '/players/', to: 'players#players'
    end
  
  end