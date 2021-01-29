class RemoveCountryIdFromFlavors < ActiveRecord::Migration[6.0]
  def change
    remove_column :flavors, :Country_id, :integer
  end
end
