const mongoose = require('mongoose');

const goal = new mongoose.Schema({
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
    torschütze: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    vorlage1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    vorlage2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    }
})

module.exports = mongoose.model('Goal', goal)