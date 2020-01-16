class Space < ApplicationRecord
    validates :address, :phone, presence: true, uniqueness: true
    validates :state, :zipcode, :city, :description, :open_hour, :closing_hour, :name, presence: true
    validates :wifi, inclusion: { in: ['Yes', 'No']}
    
    has_many_attached :space_pics


end
