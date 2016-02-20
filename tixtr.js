News = new Mongo.Collection("news");




Meteor.methods({
    addNews: function (title,url,payment,price,qty) {
        News.insert({
            title: title,
            payment: payment,
            qty:qty,
            price:price,
            url:url,
            urlTitle:title.replace(/\s/g,'-'),
            dateAdded:new Date()
        });
    }
});


 

if (Meteor.isClient) {

    Template.allNewsView.helpers({
        news: function () {
            return News.find({},{sort: {dateAdded: -1}});
        },
    });

   
   

    Template.addNews.events({
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


  Template.newsItem.events({
      'click .delete' :function() {
        News.remove(this._id);

      }
  });

}


Router.route('/', function () {
    this.render('allNewsView');
},{
    name:'news.all'
});



Router.route('/ticketfeed/add', function () {
    this.render('addNews');
},{
    name: 'news.add'
});

Router.route('/ticketfeed/:title', function () {
    this.render('newsView', {
        data: function () {
            return News.findOne({urlTitle: this.params.title});
        }
    });
},{
    name: 'news.single'
});
