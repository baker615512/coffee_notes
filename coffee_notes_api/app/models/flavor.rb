class Flavor < ApplicationRecord
  has_many :profiles
  has_many :countries, through: :profiles
  validates :name, presence: true
end
