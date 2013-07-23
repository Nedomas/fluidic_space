test('fullName property returns both first and last', function() {
  // var person = FluidicSpace.Person.create({firstName: 'toran', lastName: 'billups'});
  // var result = person.get('fullName');
  equal('t', 'toran billups', "fullName was " + FluidicSpace);
});
