class HabitSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :title, :state, :date
  has_one :user
end
