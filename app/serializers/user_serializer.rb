class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :username, :password
  has_many :habits
end
