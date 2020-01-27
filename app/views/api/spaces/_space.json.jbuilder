json.extract! space, :id, :name, :address, :city, :state, :zipcode, :phone, :description, :email, :website, :cost, :open_hour, :closing_hour 

json.space_pics @space.space_pics.map { |file| url_for(file) }

json.amenities do 
    # json.nearby_parking @space.parking if @space.parking
    json.individual_desk_option @space.desk_day if @space.desk_day
    json.shared_desk @space.shared_desk if @space.shared_desk > 0
    json.phone_booths @space.phone_booths if @space.phone_booths > 0
    json.meeting_rooms @space.meeting_rooms if @space.meeting_rooms > 0
    json.hours_24_access @space.hours_24_access if @space.hours_24_access
    json.transit_station_miles @space.transit_station_miles
    json.wellness_room @space.wellness_room if @space.wellness_room

end
json.main_pic url_for(@space.main_pic)
