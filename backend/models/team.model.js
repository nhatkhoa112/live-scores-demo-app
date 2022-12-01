
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const teamSchema = new mongoose.Schema(
    {

        name: { type: String, required: false },
        flagUrl: { type: String, trim: true, required: false },
        seasons: [
            {
                season: { type: String, trim: true, required: true, default: "21/22" },
                leagues: [{
                    league: { ref: "League", required: true, type: Schema.Types.ObjectId },
                    players: [{ ref: "Player", required: false, type: Schema.Types.ObjectId }],
                    played: { type: Number, trim: true, required: false },
                    wins: { type: Number, trim: true, required: false },
                    draws: { type: Number, trim: true, required: false },
                    looses: { type: Number, trim: true, required: false },
                    goalsFor: { type: Number, trim: true, required: false },
                    goalsAgainst: { type: Number, trim: true, required: false },
                    goalsDiff: { type: Number, trim: true, required: false },
                    points: { type: Number, trim: true, required: false },
                    playedHome: { type: Number, trim: true, required: false },
                    winsHome: { type: Number, trim: true, required: false },
                    drawsHome: { type: Number, trim: true, required: false },
                    loosesHome: { type: Number, trim: true, required: false },
                    goalsForHome: { type: Number, trim: true, required: false },
                    goalsAgainstHome: { type: Number, trim: true, required: false },
                    goalsDiffHome: { type: Number, trim: true, required: false },
                    pointsHome: { type: Number, trim: true, required: false },
                    playedAway: { type: Number, trim: true, required: false },
                    winsAway: { type: Number, trim: true, required: false },
                    drawsAway: { type: Number, trim: true, required: false },
                    loosesAway: { type: Number, trim: true, required: false },
                    goalsForAway: { type: Number, trim: true, required: false },
                    goalsAgainstAway: { type: Number, trim: true, required: false },
                    goalsDiffAway: { type: Number, trim: true, required: false },
                    pointsAway: { type: Number, trim: true, required: false },
                }
                ],
            }
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Team', teamSchema);
