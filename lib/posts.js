Tickets = new Mongo.Collection("ticket");

Meteor.methods({
    addTickets: function (title, location, date, url, payment, price, qty, fbUrl) {
        Tickets.insert({
            title: title,
            location: locate,
            date: date,
            price: price,
            url: url,
            qty: qty,
            payment: payment,
            urlTitle: title.replace(/\s/g,'-'),
            dateAdded: new Date()
        });
    }
});