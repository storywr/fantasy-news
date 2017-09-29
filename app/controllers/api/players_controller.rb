class Api::PlayersController < ApplicationController
    
    def players
      response = HTTParty.get('https://www54.myfantasyleague.com/2017/export?TYPE=players&DETAILS=&SINCE=&PLAYERS=&JSON=1')
      render json: response
    end
  
  end