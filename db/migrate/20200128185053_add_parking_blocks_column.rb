class AddParkingBlocksColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :parking, :integer
  end
end
