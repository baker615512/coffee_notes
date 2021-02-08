class Api::V1::ProfilesController < ApplicationController

  def update
    @profile = Profile.find(params[:id].to_i)
    @profile.votes = @profile.votes + 1
    @profile.save
    render json: @profile
  end
end