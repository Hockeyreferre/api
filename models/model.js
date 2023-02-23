const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    home: {
        name: {
            type: String
        },
        logo: {
            type: String
        }
    },
    away: {
        name: {
            type: String
        },
        logo: {
            type: String
        }
    },
    date: {
        required: true,
        type: String
    },
    stadion: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    },
    referre1: {
        required: true,
        type: String
    },
    referre2: {
        required: true,
        type: String
    },
    linesperson1: {
        required: false,
        type: String
    },
    linesperson2: {
        required: false,
        type: String
    },
    live: {
        required: false,
        type: Boolean
    },
    abgesagt: {
        required: false,
        type: Boolean
    },
    liga: {
        required: true,
        type: String
    },
    overtime: {
        required: false,
        type: Boolean
    },
    goalsHome: {
        required: false,
        type: Number
    },
    goalsAway: {
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)