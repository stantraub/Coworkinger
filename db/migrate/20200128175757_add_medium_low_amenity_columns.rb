class AddMediumLowAmenityColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :spaces, :event_space, :boolean
    add_column :spaces, :bike_parking, :boolean
    add_column :spaces, :printers_incuded, :boolean
    add_column :spaces, :pet_friendly, :boolean
    add_column :spaces, :snacks_drinks_included, :boolean
    add_column :spaces, :tea_coffee_included, :boolean
    add_column :spaces, :ping_pong, :boolean
    add_column :spaces, :billiards, :boolean
    add_column :spaces, :foosball, :boolean
    add_column :spaces, :showers, :boolean
    add_column :spaces, :onsite_gym, :boolean
  end
end
