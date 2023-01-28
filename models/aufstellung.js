const mongoose = require('mongoose');

const aufstellung = new mongoose.Schema({
    teamName: {
        required: true,
        type: String
    },
    RF1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    C1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LF1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RH1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LH1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RF2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    C2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LF2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RH2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LH2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RF3: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    C3: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LF3: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RH3: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LH3: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RF4: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    C4: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LF4: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    RH4: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    LH4: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    TW1: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    },
    TW2: {
        fullname: {
            type: String
        },
        jersey: {
            type: Number
        }
    }, 
    Trainer: {
        type: String
    }
})

module.exports = mongoose.model('Aufstellung', aufstellung)