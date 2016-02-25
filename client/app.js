if (Meteor.isClient) {

  Template.allTicketPosts.helpers({
    tickets: function () {
      return Tickets.find({}, {sort: {dateAdded: -1}});
    },
  });

  Template.addTickets.events({
    'submit .addTicketsForm': function(e){
      var price = e.target.price.value;
      var qty = e.target.qty.value;
      var payment = e.target.payment.value;
      var title = e.target.title.value;
      var url = e.target.url.value;
      var url = e.target.date.value;
      var url = e.target.locate.value;

      Meteor.call('addTickets', title, url, payment, price, qty);
      Router.go('tickets.all');
      return false;
    }
  });

  Template.ticketsItem.events({
    'click .delete': function () {
      Tickets.remove(this._id);
    }
  });

}