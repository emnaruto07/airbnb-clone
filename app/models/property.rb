class Property < ApplicationRecord
	validates :name, presence: true
	validates :headline, presence: true
	validates :description, presence: true
	validates :address_1, presence: true
	validates :city, presence: true
	validates :state, presence: true
	validates :country, presence: true
	
	geocoded_by :address
	after_validation :geocode

	def address
	  [state, country].compact.join(', ')
	end

	# Property.all.each do |item|
	# 	item.latitude = “1”
	# 	item.longtitude = “2”
	# 	item.save
	# end
end
