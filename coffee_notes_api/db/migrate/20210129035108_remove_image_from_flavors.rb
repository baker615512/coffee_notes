class RemoveImageFromFlavors < ActiveRecord::Migration[6.0]
  def change
    remove_column :flavors, :image, :string
  end
end
