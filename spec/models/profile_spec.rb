require 'rails_helper'

RSpec.describe Profile, type: :model do
  it { belong_to :user }
  # it { should validate_presence_of(:address_1) }
  # it { should validate_presence_of(:city) }
  # it { should validate_presence_of(:state) }
  # it { should validate_presence_of(:country) }
end
