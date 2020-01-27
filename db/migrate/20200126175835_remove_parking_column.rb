class RemoveParkingColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :spaces, :parking, :boolean
  end
end
