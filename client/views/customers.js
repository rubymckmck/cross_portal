Template.customers.helpers({
    isCreatingCustomer: function(){
        return Session.get('isCreatingCustomer');
    },
    
    customers: function(){
        return Customers.find();
    }
});

Template.customers.events({
  'click a.create': function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingCustomer', true);
  },

  'click a.cancel': function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingCustomer', false);
  },

  'submit form.create-customer': function(e, tpl){
    //var customerName = tpl.$('input[name=name]').val();
    //var shipto = tpl.$('input[name=shipto]').number();
    e.preventDefault();
    //console.log(customerName + ' ' + shipto);
    //Customers.insert({name: customerName, shipto: shipto});
    /*Customers.insert({name: customerName, shipto: shipto}, function(error, _id){
      if(error){
        alert(error);
        Session.set('isCreatingCustomer', true);
        Tracker.afterflush(function(){
            tpl.$('input[name=name]').val(customerName);
            tpl.$('input[name=name]').val(shipto);   
        });
        
      }
    });
    Session.set('isCreatingCustomer', false);
  }*/
  
    // create the new cust
        //var newshipto = number(tpl.find("#shipto"));
        var newCust = {
            name: tpl.find("#name").value,
            shipto: tpl.find("#shipto").value
        };
  
    // add the customer to the db
        Meteor.call(
            "addCustomer",
            newCust,
            function (err, result) {
                if (err) {
                    alert("Could not add Customer: " + err.reason);
                }
                else
                    Session.set('isCreatingCustomer', false);
            }
       );    
  },//end submit form.create-customer
  
  'click a.delete': function(e, tpl){
    e.preventDefault();
    // var _id = ?;
    Customers.remove(this._id);
  }
});