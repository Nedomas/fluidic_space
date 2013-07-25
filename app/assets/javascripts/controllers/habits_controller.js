FluidicSpace.HabitsNewController = Ember.ArrayController.extend({
  createHabit: function() {
    var title = this.get('newTitle');
    if (!title.trim()) { return; }

    // Create the new Todo model
    var habit = this.get('store').createRecord(FluidicSpace.Habit, {
      title: title,
      data: Date(),
      state: true,
      user_id: 1
    });


    // Save the new model
    this.get('store').commit();
  }
});
