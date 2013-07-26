class DaySerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :date, :state
  has_one :habit
end
