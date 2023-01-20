const mongoose = require('mongoose');

const aufstellung = new mongoose.Schema({
    teamName: {
        required: true,
        type: String
    },
    RF1: {
        required: true,
        type: Object
    },
    C1: {
        required: true,
        type: Object
    },
    LF1: {
        required: true,
        type: Object
    },
    RH1: {
        required: true,
        type: Object
    },
    LH1: {
        required: true,
        type: Object
    },
    RF2: {
        required: true,
        type: Object
    },
    C2: {
        required: true,
        type: Object
    },
    LF2: {
        required: true,
        type: Object
    },
    RH2: {
        required: true,
        type: Object
    },
    LH2: {
        required: true,
        type: Object
    },
    RF3: {
        required: false,
        type: Object
    },
    C3: {
        required: false,
        type: Object
    },
    LF3: {
        required: false,
        type: Object
    },
    RH3: {
        required: false,
        type: Object
    },
    LH3: {
        required: false,
        type: Object
    },
    RF4: {
        required: false,
        type: Object
    },
    C4: {
        required: false,
        type: Object
    },
    LF4: {
        required: false,
        type: Object
    },
    RH4: {
        required: false,
        type: Object
    },
    LH4: {
        required: false,
        type: Object
    },
    TW1: {
        required: true,
        type: Object
    },
    TW2: {
        required: false,
        type: Object
    }
})

module.exports = mongoose.model('Aufstellung', aufstellung)