FluidicSpace.Router.map(function() {
  this.resource('habits', function() {
    this.route('new');
  });
});

FluidicSpace.HabitsIndexRoute = Ember.Route.extend({
  model: function() {
    var startDate = new Date;
    // Rails API matches week more here
    return FluidicSpace.Habit.find({ week_from: moment(startDate).format('YYYY-MM-DD') });
  },
  setupController: function(controller, model) {
    controller.set('content', model);
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
