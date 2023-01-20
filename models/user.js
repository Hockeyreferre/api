const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    loggedIn: {
        type: Boolean
    }
})

module.exports = mongoose.model('User', user)