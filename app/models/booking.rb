class Booking < ApplicationRecord
    belongs_to :space,
        foreign_key: :space_id,
        class_name: 'Space'
  
    belongs_to :user,
        foreign_key: :user_id,
        class_name: 'User'
end
