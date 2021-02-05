class Api::V1::CountriesController < ApplicationController

  def index
    @countries = Country.all 
    render json: @countries, include: {profiles: {methods: :flavor}}
  end

  def show
    @country = Country.find(params[:id].to_i)
    render json: @country
  end
end
