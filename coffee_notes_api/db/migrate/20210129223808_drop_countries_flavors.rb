class DropCountriesFlavors < ActiveRecord::Migration[6.0]
  def change
    drop_table :countries_flavors
  end
end
