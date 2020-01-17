json.extract! space, :id, :name, :address, :city, :state, :zipcode, :phone, :description, :email, :parking, :wifi_included, :website, :cost, :open_hour, :closing_hour 

json.photosUrls @space.space_pics.map { |file| url_for(file) }