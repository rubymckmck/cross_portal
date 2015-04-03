Meteor.startup(function () {
  if (Customers.find().count() === 0) {
    [
      {name: "Customer 1", shipto: "1"},
      {name: "Customer 2", shipto: "2"},
      {name: "Customer 3", shipto: "3"}
    ].forEach(function(customer){
        Customers.insert(customer);
    })
  }
});