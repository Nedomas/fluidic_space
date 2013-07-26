FluidicSpace.Habit = DS.Model.extend({
  title: DS.attr('string'),
  state: DS.attr('boolean'),
  date: DS.attr('date'),
  days: DS.hasMany('FluidicSpace.Day'),
  user: DS.belongsTo('FluidicSpace.User'),

  formattedDate: function() {
    var date = this.get('date');
    return moment(date).format('YYYY-MM-DD');
  }.property('date')
});
