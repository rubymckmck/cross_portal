Template.customer.helpers({
  isEditingCustomer: function(){
    return Session.get('isEditingCustomer') === this._id;
  }
});

Template.customer.events({
  "click a.edit": function(e, tpl){
    e.preventDefault();
    Session.set('isEditingCustomer', this._id);
  },
 
  "submit form.form-edit": function(e, tpl){
    e.preventDefault();
 
    var editCust = {
            name: tpl.find("#name").value,
            shipto: tpl.find("#shipto").value
        };
      
    if(editCust.name.length){
      Customers.update(this._id, {$set: {name: editCust.name, shipto: editCust.shipto}});
      Session.set('isEditingCustomer', null);
    }
  },
 
  "click a.cancel": function(e, tpl){
    e.preventDefault();
    Session.set('isEditingCustomer', null);
  },
 
  'click a.remove': function(e, tpl){
    e.preventDefault();
    Customers.remove(this._id);
  }
});