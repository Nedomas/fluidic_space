FluidicSpace.Router.map(function() {
  this.resource('habits', function() {
    this.route('new');
  });
});

FluidicSpace.HabitsIndexRoute = Ember.Route.extend({
  model: function() {
    return FluidicSpace.Habit.find();
  }
});

FluidicSpace.HabitsNewRoute = Ember.Route.extend({
  model: function() {
    return FluidicSpace.Habit.find();
  }
});

FluidicSpace.UsersRoute = Ember.Route.extend({
  model: function() {
    return FluidicSpace.User.find();
  }
});
