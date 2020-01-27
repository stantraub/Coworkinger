@spaces.each do |space|
    json.set! space.id do
        json.id space.id
        json.name space.name
        json.neighborhood space.neighborhood
        json.people_capacity space.people_capacity
        json.office_capacity space.office_capacity
        json.availability space.availability
        json.desk_day space.desk_day
        json.address space.address
        json.city space.city
        json.state space.state
        json.zipcode space.zipcode
        json.phone space.phone
        json.description space.description
        json.email space.email
        json.website space.website
        json.cost space.cost
        json.open_hour space.open_hour
        json.closing_hour space.closing_hour
        json.main_pic url_for(space.main_pic)
    end
end
