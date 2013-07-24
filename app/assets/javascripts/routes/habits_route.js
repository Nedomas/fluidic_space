FluidicSpace.HabitsRoute = Ember.Route.extend({
  model: function() {
    return FluidicSpace.Habit.find();
  }
});
