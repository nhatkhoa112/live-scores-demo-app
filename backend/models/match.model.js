const { v4: uuidv4 } = require('uuid');


const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const matchSchema = new mongoose.Schema(
    {
        
        time: {
            type: String, trim: true, required: true, default: Date.now()
        },
        status: {type: String, required: true, enum:[ "FT", "Live", "Not yes"]},
        league: {
            ref: "League", required: false, type: Schema.Types.ObjectId
        },
        season: {
            type: String, trim: true, required: true, default: "21/22"
        },
        stadium: {
            type: String, trim: true, required: true, default: 'Goodison Park'
        },
        referee: {
            type: String, trim: true, required: true, default: 'Michael Oliver (England)'
        },
        tiket: {
            type: Number, trim: true, required: true, default: 30000
        },
        isFav: {
            type: Boolean, required: true, default: false
        },
      
        summaryEvent: [
            {
                
                minute: {
                    type: String,
                    required: false,
                },
                team: {
                    type: String,
                    required: true,
                },
                mainPlayer: {
                    type: String,
                    required: false,
                },
                assistPlayer: {
                    type: String,
                    required: false,
                },
                event: {
                    type: String,
                    required: false,
                },
                cardType: {
                    type: String,
                    required: false,
                },
                score: {
                    type: String,
                    required: false,
                },
            }
        ],
        homeTeam:
        {
            team: { ref: "League", required: false, type: Schema.Types.ObjectId },
            lineUp: {
                type: String, trim: true, required: true, default: '1-4-3-3'
            },
            score: {
                type: Number, trim: true, required: true, default: 0
            },
            players: [
                {
                    player: { ref: "Player", required: false, type: Schema.Types.ObjectId },
                    position: {
                        type: String, trim: true, required: false
                    },
                    number: {
                        type: Number, trim: true, required: false
                    },
                    official: {
                        type: Boolean, trim: true, required: false
                    },
                    penaltyCard: {
                        type: Boolean, trim: true, required: false
                    },
                    cardType: {
                        type: String, trim: true, required: false
                    },
                    goal: {
                        type: Boolean, trim: true, required: false
                    },
                    change: {
                        type: Boolean, trim: true, required: false
                    },
                    changeType: {
                        type: String, trim: true, required: false
                    },
                    changeTime: {
                        type: String, trim: true, required: false
                    },
                    changePlayer: {
                        type: String, trim: true, required: false
                    },
                }
            ]


        },
        awayTeam:
        {
            team: { ref: "League", required: false, type: Schema.Types.ObjectId },
            lineUp: {
                type: String, trim: true, required: true, default: '1-4-3-3'
            },
            score: {
                type: Number, trim: true, required: true, default: 0
            },
            players: [
                {
                    player: { ref: "Player", required: false, type: Schema.Types.ObjectId },
                    position: {
                        type: String, trim: true, required: false
                    },
                    number: {
                        type: Number, trim: true, required: false
                    },
                    official: {
                        type: Boolean, trim: true, required: false
                    },
                    penaltyCard: {
                        type: Boolean, trim: true, required: false
                    },
                    cardType: {
                        type: String, trim: true, required: false
                    },
                    goal: {
                        type: Boolean, trim: true, required: false
                    },
                    change: {
                        type: Boolean, trim: true, required: false
                    },
                    changeType: {
                        type: String, trim: true, required: false
                    },
                    changeTime: {
                        type: String, trim: true, required: false
                    },
                    changePlayer: {
                        type: String, trim: true, required: false
                    },
                }
            ]
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Match', matchSchema);
