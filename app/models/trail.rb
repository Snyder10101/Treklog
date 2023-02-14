class Trail < ApplicationRecord
    validates :name, :location, :distance, :duration, :difficulty, :description, :image, presence: true
    validates :name, length: { minimum: 5 }
    validates :description, length: { minimum: 10 }
end
