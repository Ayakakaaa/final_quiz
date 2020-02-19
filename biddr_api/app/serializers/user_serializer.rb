class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :first_name, :last_name, :created_at, :updated_at
end
