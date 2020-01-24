json.extract! space, :id, :name, :address, :city, :state, :zipcode, :phone, :description, :email, :website, :cost, :open_hour, :closing_hour 

json.space_pics @space.space_pics.map { |file| url_for(file) }

json.amenities do 
    json.wifi_included @space.wifi_included
    json.parking @space.parking
end
json.main_pic url_for(@space.main_pic)
