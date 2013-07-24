class HabitSerializer < ActiveModel::Serializer
  attributes :id, :title, :state, :date
  has_one :user
end
