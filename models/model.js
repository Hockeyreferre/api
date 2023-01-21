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
    beendet: {
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
    scoreHome: {
        required: false,
        type: Number
    },
    scoreAway: {
        required: false,
        type: Number
    },
    scoreHome1: {
        required: false,
        type: Number
    },
    scoreAway1: {
        required: false,
        type: Number
    },
    scoreHome2: {
        required: false,
        type: Number
    },
    scoreAway2: {
        required: false,
        type: Number
    },
    scoreHome3: {
        required: false,
        type: Number
    },
    scoreAway3: {
        required: false,
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