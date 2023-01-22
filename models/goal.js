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
        name: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    vorlage1: {
        name: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    vorlage2: {
        name: {
            type: String
        },
        jersey: {
            type: Number
        }
    }
})

module.exports = mongoose.model('Goal', goal)