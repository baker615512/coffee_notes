class Country < ApplicationRecord
  has_many :profiles
  has_many :flavors, through: :profiles
end
