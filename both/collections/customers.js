Customers = new Meteor.Collection('customers');
//db.customers.ensureIndex( { "shipto": 1 }, { unique: true } );

Meteor.methods({
    addCustomer: function (newCust) {
        
        // Perform form validation
        if (newCust.name == "") {
            throw new Meteor.Error(413, "Missing Name!");
        }
        if (newCust.shipto == "") {
            throw new Meteor.Error(413, "Missing Shipto!");
        }
        //TODO test if shipto already exists
        //console.log('the shipto to add:' + newCust.shipto);
        //console.log('Customers with this shipto:' + Customers.find({shipto: newCust.shipto}).count());
        if (Customers.find({shipto: newCust.shipto}).count()>0){
            throw new Meteor.Error(413, "Shipto already exists!");
        }
        try {
            return Customers.insert(newCust);
        }
        catch(err) {
            throw new Meteor.Error(413, err.message);
        }
        
    }
 
});