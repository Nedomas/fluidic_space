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

  hehe: function() {
    var something;
    debugger;
    return true;
  },
  weekHabits: function(controller) {
    var today = new Date();
    var result = {};

    _(7).times(function(n) {
      var day = moment().add('days', n).format('DD');
      result[day] = [];
    });

    var habits = FluidicSpace.Habit.find();

    habits.forEach(function(habit) {
      var weekday = moment(habit.get('date')).format('DD');
      result[weekday].push(habit);
    });

    _(7).times(function(n) {
      var day = moment().add('days', n).format('DD');
      FluidicSpace.saveMe.pushObject(FluidicSpace.Day.create({
        day: day,
        habits: result[day]
      }));
    });

  }.property(),

  destroyHabit: function(habit) {
    habit.deleteRecord();
    habit.save();
  }

});
FluidicSpace.saveMe = [];

FluidicSpace.Day = Ember.Object.extend({
   init: function() {
     this._super();
   }
});
