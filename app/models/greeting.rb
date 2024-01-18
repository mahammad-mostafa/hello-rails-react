class Greeting < ApplicationRecord
  validates :text, presence: true, length: { maximum: 50 }
end
