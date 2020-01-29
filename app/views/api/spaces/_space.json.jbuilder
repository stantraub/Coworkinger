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
    json.event_space @space.event_space if @space.event_space
    json.nearest_parking @space.parking if @space.parking
    json.bike_parking @space.bike_parking if @space.bike_parking
    json.event_space @space.event_space if @space.event_space
    json.printers @space.printers_included if @space.printers_included
    json.people_capacity @space.people_capacity if @space.people_capacity > 0
    json.office_capacity @space.office_capacity if @space.office_capacity > 0
    json.availability @space.availability if @space.availability
    json.day_pass_available @space.desk_day if @space.desk_day
    json.pet_friendly @space.pet_friendly if @space.pet_friendly
    json.snacks_drinks_included @space.snacks_drinks_included if @space.snacks_drinks_included
    json.tea_coffee_included @space.tea_coffee_included if @space.tea_coffee_included
    json.ping_pong @space.ping_pong if @space.ping_pong
    json.bocce_ball @space.bocce_ball if @space.bocce_ball
    json.billiards @space.billiards if @space.billiards
    json.foosball @space.foosball if @space.foosball
    json.showers @space.showers if @space.showers
    json.onsite_gym @space.onsite_gym if @space.onsite_gym
    json.nap_room @space.nap_room if @space.nap_room
end

json.amenityCategories do
    json.seating_and_space do 
        json.availability @space.availability if @space.availability
        json.day_pass_available @space.desk_day if @space.desk_day
        json.individual_desk_option @space.desk_day if @space.desk_day
        json.shared_desk_option @space.shared_desk if @space.shared_desk > 0
        json.event_space @space.event_space if @space.event_space
        json.people_capacity @space.people_capacity if @space.people_capacity > 0
        json.office_capacity @space.office_capacity if @space.office_capacity > 0
    end

    json.transportation do 
        json.bike_parking @space.bike_parking if @space.bike_parking
        json.transit_station_miles @space.transit_station_miles
        json.nearest_parking @space.parking if @space.parking
    end

    json.facilities do 
        json.phone_booths @space.phone_booths if @space.phone_booths > 0
        json.meeting_rooms @space.meeting_rooms if @space.meeting_rooms > 0
    end

    json.equipment do 
        json.printers_and_scanners_included @space.printers_included if @space.printers_included
    end

    json.accessibility do 
        json.hours_24_access @space.hours_24_access if @space.hours_24_access
    end

    json.life_enhancements do 
        json.wellness_room @space.wellness_room if @space.wellness_room
        json.nap_room @space.nap_room if @space.nap_room
        json.pet_friendly @space.pet_friendly if @space.pet_friendly
        json.showers @space.showers if @space.showers
        json.onsite_gym @space.onsite_gym if @space.onsite_gym
    end

    json.recreational_games do 
        json.ping_pong @space.ping_pong if @space.ping_pong
        json.bocce_ball @space.bocce_ball if @space.bocce_ball
        json.billiards @space.billiards if @space.billiards
        json.foosball @space.foosball if @space.foosball
    end

    json.food_and_drinks do
        json.snacks_drinks_included @space.snacks_drinks_included if @space.snacks_drinks_included
        json.tea_and_coffee_included @space.tea_coffee_included if @space.tea_coffee_included
    end


end

json.main_pic url_for(@space.main_pic)
