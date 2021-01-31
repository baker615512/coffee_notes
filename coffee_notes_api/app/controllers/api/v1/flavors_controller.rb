class Api::V1::FlavorsController < ApplicationController

  def create
    @flavor = flavor.new(flavor_params)
    if @flavor.save
      render json: @flavor
    else
      render json: @flavor.errors
    end
  end

  private

  def flavor_params
    params.require(:flavor).permit(:name)
  end

end
