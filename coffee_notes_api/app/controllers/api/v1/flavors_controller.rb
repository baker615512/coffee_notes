class API::V1::FlavorsController < ApplicationController

  def index
    @flavors = Flavor.all
    render json: @flavors
  end

  def create
    @flavor = Flavor.new(flavor_params)
    if @flavor.save
      render json: @flavor
    else
      render json: @flavor.errors
    end
  end

  def show
    @flavor = Flavor.find(params[:id])
    render json: @flavor
  end

  private

  def flavor_params
    params.require(:flavor).permit(:name, :votes, :country_id)
  end
  
end
