class ChangeParkingToBool < ActiveRecord::Migration[5.2]
  def change
    remove_column :spaces, :parking, :string
  end
end
