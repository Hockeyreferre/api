const mongoose = require('mongoose');

const penalty = new mongoose.Schema({
    gameID: {
        type: String
    },
    time: {
        type: String
    },
    period: {
        type: Number
    },
    verein: {
        type: String
    },
    player: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    vergehen: {
        type: String
    },
    length: {
        type: String
    }
})

module.exports = mongoose.model('Penalty', penalty)