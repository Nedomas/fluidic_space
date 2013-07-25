FluidicSpace.HabitsNewController = Ember.ArrayController.extend({
  createHabit: function() {
    var title = this.get('newTitle');
    if (!title.trim()) { return; }

    var habit = FluidicSpace.Habit.createRecord({
      title: title,
      state: false,
      date: new Date(),
      user: FluidicSpace.User.find(1)
    });

    habit.save();
    this.transitionToRoute('habits.index');
  }
});

FluidicSpace.HabitsIndexController = Ember.ArrayController.extend({
  today: function() {
    return moment(new Date()).format('YYYY-MM-DD');
  }.property(),
  week: function() {
    today = new Date();
    result = [];
    for(i = 0; i <= 7; i++) {
      var day = moment().add('days', i).format('DD');
      result.push(day);
    }
    return result;
  }.property(),
  destroyHabit: function(habit) {
    habit.deleteRecord();
    habit.save();
  }
});
