# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

puts 'Seeding...'
user = User.create(
  username: 'tester',
  password: 'testing'
)
habit = Habit.create(
  title: 'Meditation',
  state: false,
  date: Date.today,
  user_id: user.id
)
Day.create(
  date: Date.today,
  state: false,
  habit_id: habit.id
)
puts "Complete"
