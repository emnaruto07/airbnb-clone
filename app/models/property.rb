class Property < ApplicationRecord
	validates :name, presence: true
	validates :headline, presence: true
	validates :description, presence: true
	validates :address_1, presence: true
	validates :city, presence: true
	validates :state, presence: true
	validates :country, presence: true
	monetize :price_cents, allow_nil: true

	
	has_many_attached :images

	geocoded_by :address
	after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }

	def address
	  [state, country].compact.join(', ')
	end

	def default_image
		images.first
	end
	# Property.all.each do |item|
	# 	item.latitude = “1”
	# 	item.longtitude = “2”
	# 	item.save
	# end
end
