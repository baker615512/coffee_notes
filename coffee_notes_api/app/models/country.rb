class Country < ApplicationRecord
  has_one :profile
  has_many :flavors, through: :profile
end
