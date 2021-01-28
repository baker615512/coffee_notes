class API::V1::FlavorsController < ApplicationController
  before_action :load_country

  def index
    render json: @country.flavors
  end

  def create
    @flavor = @country.flavor.new(flavor_params)
    if @flavor.save
      render json: @flavor
    else
      render json: @flavor.errors
    end
  end

  def show
    @flavor = @country.flavor.find(params[:id])
    render json: @flavor
  end

  private

  def flavor_params
    params.require(:flavor).permit(:name, :votes, :country_id)
  end

  def load_country
    @country = Country.find(params[:country_id])
  end

end
