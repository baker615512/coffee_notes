class Flavor < ApplicationRecord
  belongs_to :Country
  validates :name, presence: true
end
