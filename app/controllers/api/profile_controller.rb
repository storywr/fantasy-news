
class Api::ProfileController < ApplicationController
  
    def profile
      response = HTTParty.get("http://www77.myfantasyleague.com/2017/export?TYPE=playerProfile&L=18474&W=&JSON=1&P=#{profile_params[:id]}")
      render json: response
    end
  
    private
  
    def profile_params
      params.require(:profile).permit(:id)
    end
  
  end