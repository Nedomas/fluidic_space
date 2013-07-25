test('should return Habit info', function() {
  var meditation = FluidicSpace.Habit.createRecord({ title: 'Meditation', state: false, date: '2013-07-25' });
  var title = meditation.get('title');
  equal(title, 'Meditation', 'title was ' + title);
});
