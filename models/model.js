const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    home: {
        required: true,
        type: String
    },
    away: {
        required: true,
        type: String
    },
    logoHome: {
        required: true,
        type: String
    },
    logoAway: {
        required: true,
        type: String
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
        required: true,
        type: String
    },
    linesperson2: {
        required: true,
        type: String
    },
    live: {
        required: false,
        type: Boolean
    },
    beendet: {
        required: false,
        type: Boolean
    },
    abgesagt: {
        required: false,
        type: Boolean
    },
    stream: {
        required: true,
        type: String
    },
    liga: {
        required: true,
        type: String
    },
    scoreHome: {
        required: true,
        type: Number
    },
    scoreAway: {
        required: true,
        type: Number
    },
    scoreHome1: {
        required: true,
        type: Number
    },
    scoreAway1: {
        required: true,
        type: Number
    },
    scoreHome2: {
        required: true,
        type: Number
    },
    scoreAway2: {
        required: true,
        type: Number
    },
    scoreHome3: {
        required: true,
        type: Number
    },
    scoreAway3: {
        required: true,
        type: Number
    },
    overtime: {
        required: false,
        type: Boolean
    },
    scoreHomeOT: {
        required: false,
        type: Number
    },
    scoreAwayOT: {
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)