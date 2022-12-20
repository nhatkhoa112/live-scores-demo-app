
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const { v4: uuidv4 } = require('uuid');


const eventSchema = new mongoose.Schema(
    {
        match: { ref: "Match", required: true, type: Schema.Types.ObjectId },
        eventAtMinute: { type: String, trim: true, required: true },
        foul: {
            player: { ref: "Player", required: false, type: Schema.Types.ObjectId },
            cardType: {
                type: String, required: false, enum: ["yellow card", "red card", "yellow douple"]
            }
        },
        ballContext: {
            mainPlayer: { ref: "Player", required: false, type: Schema.Types.ObjectId },
            assistPlayer: { ref: "Player", required: false, type: Schema.Types.ObjectId },
            ballSituation: { type: String, required: false },
            scoreStatus: {
                score: { type: Boolean, required: false },
                unAllow: { type: String, required: false },
                penatyScore: { type: Boolean, required: false },
                team: { ref: "Team", required: false, type: Schema.Types.ObjectId }
            }
        },
        penaltyShootout: [
            {
                round: { type: Number, required: false },
                homePlayer: {
                    player: { ref: "Player", required: false, type: Schema.Types.ObjectId },
                    score: { type: Boolean, required: false },
                },
                awayPlayer: {
                    player: { ref: "Player", required: false, type: Schema.Types.ObjectId },
                    score: { type: Boolean, required: false },
                }

            }
        ]


    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Event', eventSchema);
