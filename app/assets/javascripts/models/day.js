FluidicSpace.Day = DS.Model.extend({
  date: DS.attr('date'),
  state: DS.attr('boolean'),
  habit: DS.belongsTo('FluidicSpace.Habit')
});