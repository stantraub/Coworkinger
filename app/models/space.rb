class Space < ApplicationRecord
    validates :address, :phone, presence: true, uniqueness: true
    validates :state, :zipcode, :city, :description, :open_hour, :closing_hour, :name, presence: true

    has_one_attached :main_pic
    has_many_attached :space_pics


end
