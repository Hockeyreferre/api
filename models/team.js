const mongoose = require('mongoose');

const team = new mongoose.Schema({
    jersey: {
        type: Number
    },
    fullname: {
        type: String
    },
    teamName: {
        type: String
    },
    liga: {
        type: String
    }
})

module.exports = mongoose.model('Team', team)