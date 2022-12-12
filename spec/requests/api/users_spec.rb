require "rails_helper"

RSpec.describe "Api::Users", type: :request do
  describe "GET show" do
  	let(:headers) do
  		{ "ACCEPT" => "application/json" }
  	end
  	
  	context "user exists" do
  		it "is successful" do
				user =  create(:user)
				get api_user_path(user), headers: headers
				expect(response).to be_successful
  		end
  	end

  	context "user not exists" do
			it "is not found" do
			end
  	end
  end
end
