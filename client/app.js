if (Meteor.isClient) {

  Template.allTicketPosts.helpers({
    tickets: function () {
      return Tickets.find({}, {sort: {dateAdded: -1}});
    },
  });

  Template.addTickets.events({
    'submit .addTicketsForm': function(e){
      var title = e.target.title.value;
      var locate = e.target.locate.value;
      var price = e.target.price.value;
      var date = e.target.date.value;
      var qty = e.target.qty.value;
      var payment = e.target.payment.value;
      var fbUrl = e.target.fbUrl.value;

      Meteor.call('addTickets', title, locate, price, date, fbUrl, url, payment, price, qty);
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