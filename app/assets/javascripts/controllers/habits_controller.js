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

FluidicSpace.myWeekdays = [];

FluidicSpace.DaysController = Ember.ArrayController.extend({

});

FluidicSpace.HabitsIndexController = Ember.ArrayController.extend({
  today: function() {
    return moment(new Date()).format('YYYY-MM-DD');
  }.property(),

  showHabits: function() {
    var today = new Date();

    _(7).times(function(n) {
      var day = moment().add('days', n).format('DD');
      FluidicSpace.myWeekdays.pushObject(day);
    });

    var habits = FluidicSpace.Habit.find();
    habits.forEach(function(habit) {
      console.log(habit.days);
    });
  }.property(),
  toggleDay: function(day) {

    var oldState = day.get('state');
    if (oldState) {
      day.set('state', false);
    } else {
      day.set('state', true);
    }

    day.save();
  },

  destroyHabit: function(habit) {
    habit.deleteRecord();
    habit.save();
  }

});
