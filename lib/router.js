Router.route('/', function () {
  this.render('allTicketPosts');
},{
  name:'news.all'
});

Router.route('/ticketfeed/add', function () {
  this.render('addTickets');
},{
  name: 'news.add'
});

Router.route('/ticketfeed/:title', function () {
  this.render('ticketView', {
    data: function () {
      return News.findOne({urlTitle: this.params.title});
    }
  });
},{
    name: 'news.single'
});


