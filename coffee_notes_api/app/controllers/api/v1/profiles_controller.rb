class Api::V1::ProfilesController < ApplicationController

  def index
    @profiles = Country.find(params[:country_id]).profiles
    render json: @profiles
  end

  def update
    @profile = Profile.find(params[:id])
    @profile.votes = @profile.votes + 1
    @profile.save
    render json: @profile
  end
end