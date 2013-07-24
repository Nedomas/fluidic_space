FluidicSpace.Habit = DS.Model.extend({
  title: DS.attr('string'),
  state: DS.attr('boolean'),
  date: DS.attr('date'),
  user: DS.belongsTo('FluidicSpace.User')
});