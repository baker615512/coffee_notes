class Api::V1::FlavorsController < ApplicationController

  def index
    @country = Country.find(params[:country_id].to_i)
    @flavors = @country.flavors
    render json: @flavors
  end

  #def create
  #  @country = Country.find(params[:country_id])
  #  @flavor = Flavor.new(name: params[:flavor_name])
  #  if @country && @flavor.save
  #    @profile = Profile.create(country_id: @country.id, flavor_id: @flavor.id, votes: 1)
  #    render json: @flavor
  #  else
  #    render json: @flavor.errors
  #  end
  #end

  # private

  # def flavor_params
  #   params.require(:flavor).permit(:name, country_ids: [])
  # end

end
