FluidicSpace.User = DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  habits: DS.hasMany('FluidicSpace.Habit')
});
