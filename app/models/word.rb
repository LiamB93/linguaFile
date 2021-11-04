class Word < ApplicationRecord
  belongs_to :user
  # belongs_to :language
  has_and_belongs_to_many :languages
end
