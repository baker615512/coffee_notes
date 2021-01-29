class Profile < ApplicationRecord
  belongs_to :country
  belongs_to :flavor
end
