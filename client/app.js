if (Meteor.isClient) {

  Template.allTicketPosts.helpers({
    news: function () {
      return News.find({},{sort: {dateAdded: -1}});
    },
  });

  Template.addTickets.events({
    'submit .addNewsForm':function(e){
      var price= e.target.price.value;
      var qty= e.target.qty.value;
      var payment= e.target.payment.value;
      var title= e.target.title.value;
      var url= e.target.url.value;

      Meteor.call('addNews',title,url,payment,price,qty);
      Router.go('news.all');
      return false;
    }
  });

  Template.ticketsItem.events({
    'click .delete' :function() {
      News.remove(this._id);
    }
  });

}