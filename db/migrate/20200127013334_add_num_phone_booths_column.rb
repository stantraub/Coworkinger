class AddNumPhoneBoothsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :phone_booths, :integer
  end
end
