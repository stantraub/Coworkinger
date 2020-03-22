class Review < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :space,
        foreign_key: :space_id,
        class_name: "Space"
end
