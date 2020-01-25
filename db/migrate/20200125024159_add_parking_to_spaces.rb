class AddParkingToSpaces < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :parking, :boolean
  end
end
