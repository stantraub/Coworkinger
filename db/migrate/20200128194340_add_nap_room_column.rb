class AddNapRoomColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :nap_room, :boolean
  end
end
