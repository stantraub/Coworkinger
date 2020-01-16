class Space < ApplicationRecord
    validates :address, :phone, presence: true, uniqueness: true
    validates :state, :zipcode, :city, :description, :open_hour, :closing_hour, :name, presence: true

    has_many_attached :space_pics


end
