@spaces.each do |space|
    json.set! space.id do
        json.id space.id
        json.name space.name
        json.address space.address
        json.city space.city
        json.state space.state
        json.zipcode space.zipcode
        json.phone space.phone
        json.description space.description
        json.email space.email
        json.parking space.parking
        json.wifi_included space.wifi_included
        json.website space.website
        json.cost space.cost
        json.open_hour space.open_hour
        json.closing_hour space.closing_hour
        json.main_pic url_for(space.main_pic)
    end
end
