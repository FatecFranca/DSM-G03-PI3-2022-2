const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb+srv://<username>:<password>@cluster0.qxxlirc.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}