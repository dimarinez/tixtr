Router.route('/', function () {
  this.render('allTicketPosts');
},{
  name:'tickets.all'
});

Router.route('/ticketfeed/add', function () {
  this.render('addTickets');
},{
  name: 'tickets.add'
});

Router.route('/ticketfeed/:title', function () {
  this.render('ticketView', {
    data: function () {
      return Tickets.findOne({urlTitle: this.params.title});
    }
  });
},{
    name: 'tickets.single'
});


