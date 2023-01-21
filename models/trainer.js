const mongoose = require('mongoose');

const trainer = new mongoose.Schema({
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

module.exports = mongoose.model('Trainer', trainer)