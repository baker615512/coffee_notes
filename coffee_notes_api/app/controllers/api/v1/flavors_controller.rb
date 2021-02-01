class Api::V1::FlavorsController < ApplicationController

  def index
    @flavors = Country.find(params[:country_id]).flavors
    render json: @flavors
  end

  def create
    @country = Country.find(params[:country_id])
    @flavor = Flavor.where(name: params[:flavor_name]).first_or_initialize
    if !!@country && @flavor != nil && @flavor.country_id != @country.id
      @country.flavors << @flavor
      render json: @flavor
    else
      render json: @flavor.errors
    end
  end

  private

  def flavor_params
    params.require(:flavor).permit(:name, country_ids: [])
  end

end
