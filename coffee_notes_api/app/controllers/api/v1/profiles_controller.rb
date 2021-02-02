class Api::V1::ProfilesController < ApplicationController

  def index
    @profiles = Country.find(params[:country_id]).profiles
    render json: @profiles
  end
end