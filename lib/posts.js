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