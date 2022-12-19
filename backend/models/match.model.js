const { v4: uuidv4 } = require('uuid');


const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const matchSchema = new mongoose.Schema(
    {

        time: { type: String, required: true, default: new Date() },
        status: { type: String, required: true, enum: ["FT", "Live", "Not yet"] },
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

        summaryEvents: [
            { event: { ref: "Event", required: false, type: Schema.Types.ObjectId } }
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
                        type: Boolean, trim: true, required: true, default: true
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
                        type: Boolean, trim: true, required: true, default: true
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
        teamStats: [
            {
                shots: [{ type: Number, required: true, defaut: 0 }],
                shotsOnTarget: [{ type: Number, required: true, defaut: 0 }],
                possession: [{ type: Number, required: true, defaut: 0 }],
                passes: [{ type: Number, required: true, defaut: 0 }],
                passAccuracy: [{ type: Number, required: true, defaut: 0 }],
                fouls: [{ type: Number, required: true, defaut: 0 }],
                yellowCards: [{ type: Number, required: true, defaut: 0 }],
                redCards: [{ type: Number, required: true, defaut: 0 }],
                offSides: [{ type: Number, required: true, defaut: 0 }],
                cornersx: [{ type: Number, required: true, defaut: 0 }],
            }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Match', matchSchema);


