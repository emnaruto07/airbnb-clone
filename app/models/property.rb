class Property < ApplicationRecord
	validates :name, presence: true
	validates :headline, presence: true
	validates :description, presence: true
	validates :address_1, presence: true
	validates :city, presence: true
	validates :state, presence: true
	validates :country, presence: true
	monetize :price_cents, allow_nil: true

	geocoded_by :address
	after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }  


	has_many_attached :images, dependent: :destroy

	has_many :reviews, as: :reviewable
	has_many :favorites, dependent: :destroy
	has_many :favorited_users, through: :favorites, source: :user
  has_many :reservations, dependent: :destroy
  has_many :reserved_users, through: :reservations, source: :user


	

	def address
	  [state, country].compact.join(', ')
	end

	def default_image
		images.first
	end
	
	def favorited_by?(user)
		return if user.nil?

		favorited_users.include?(user)
	end

  def available_dates
    next_reservation = reservations.future_reservations.first
    return Date.tomorrow.strftime("%b %e")..Date.today.end_of_year.strftime("%b %e") if next_reservation.nil?
    Date.tomorrow.strftime("%b %e")..next_reservation.reservation_date.strftime("%b %e")
  end
  
end
