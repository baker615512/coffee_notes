class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.integer :votes
      t.belongs_to :country, null: false, foreign_key: true
      t.belongs_to :flavor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
