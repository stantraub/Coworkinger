json.array! @spaces do |space|
    json.extract! space, :id, :name, :address, :city, :state, :zipcode, :phone, :description, :email, :parking, :wifi_included, :website, :cost, :open_hour, :closing_hour 
end