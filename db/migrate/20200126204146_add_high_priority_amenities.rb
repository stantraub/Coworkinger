class AddHighPriorityAmenities < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :shared_desk, :integer
    add_column :spaces, :meeting_rooms, :integer
    add_column :spaces, :hours_24_access, :boolean
    add_column :spaces, :transit_station_miles, :integer
    add_column :spaces, :wellness_room, :boolean
    

  end
end
