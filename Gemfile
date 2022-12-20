source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

gem "rails", "~> 7.0.4"

#for authentication
gem "devise"

gem "sprockets-rails"

#for database
gem "pg", "~> 1.1"
gem 'jsonapi-serializer'
gem "puma", "~> 5.0"

gem "importmap-rails"
gem 'money-rails', '~>1.12'

#for frontend
gem "turbo-rails"

gem "stimulus-rails"

gem "tailwindcss-rails"

gem "jbuilder"
gem 'sass-rails'
gem "geocoder"


# gem "redis", "~> 4.0"

# gem "kredis"

# gem "bcrypt", "~> 3.1.7"

gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

gem "bootsnap", require: false

# gem "sassc-rails"

gem "image_processing", "~> 1.2"

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails', '~> 6.0.0'
  gem 'pry', '~> 0.14.1'
  gem 'factory_bot_rails'
  gem 'faker', '~> 3.0'

end

group :development do
  gem "web-console"

  # gem "rack-mini-profiler"

  # gem "spring"
end

group :test do
  gem 'shoulda-matchers', '~> 5.0'
end
