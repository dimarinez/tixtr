Tickets = new Mongo.Collection("ticket");

Meteor.methods({
    addTickets: function (title, url, payment, price, qty) {
        Ticket.insert({
            title: title,
            payment: payment,
            qty: qty,
            price: price,
            url: url,
            urlTitle: title.replace(/\s/g,'-'),
            dateAdded: new Date()
        });
    }
});