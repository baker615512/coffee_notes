class Api::V1::ProfilesController < ApplicationController

  def index
    @country = Country.find(params[:country_id].to_i)
    @profiles = @country.profiles
    render json: @profiles
  end

  def update
    @profile = Profile.find(params[:id].to_i)
    @profile.votes = @profile.votes + 1
    @profile.save
    render json: @profile
  end
end