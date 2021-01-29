class RemoveVotesFromFlavors < ActiveRecord::Migration[6.0]
  def change
    remove_column :flavors, :votes, :integer
  end
end
