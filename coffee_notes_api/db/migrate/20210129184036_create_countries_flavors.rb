class CreateCountriesFlavors < ActiveRecord::Migration[6.0]
  def change
    create_table :countries_flavors do |t|
      t.integer :country_id
      t.integer :flavor_id
      t.integer :votes
    end
  end
end
