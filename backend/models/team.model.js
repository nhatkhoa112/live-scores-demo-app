
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const teamSchema = new mongoose.Schema(
    {
        team_id: {
            type: String,
            unique: true,
            trim: true,
            required: false,
            default: Date.now(),
        },
        seasons: [
            {
                season: { type: String, trim: true, required: true },
                name: { type: String, trim: true, required: true },
                flagUrl: { type: String, trim: true, required: false },
                league: { ref: "League", required: false, type: Schema.Types.ObjectId },
                players: [{ ref: "Player", required: false, type: Schema.Types.ObjectId }],
                played: { type: Number, trim: true, required: true },
                wins: { type: Number, trim: true, required: true },
                draws: { type: Number, trim: true, required: true },
                looses: { type: Number, trim: true, required: true },
                goalsFor: { type: Number, trim: true, required: true },
                goalsDiff: { type: Number, trim: true, required: true },
                points: { type: Number, trim: true, required: true },
                playedHome: { type: Number, trim: true, required: true },
                winsHome: { type: Number, trim: true, required: true },
                drawsHome: { type: Number, trim: true, required: true },
                loosesHome: { type: Number, trim: true, required: true },
                goalsForHome: { type: Number, trim: true, required: true },
                goalsDiffHome: { type: Number, trim: true, required: true },
                pointsHome: { type: Number, trim: true, required: true },
                playedAway: { type: Number, trim: true, required: true },
                winsAway: { type: Number, trim: true, required: true },
                drawsAway: { type: Number, trim: true, required: true },
                loosesAway: { type: Number, trim: true, required: true },
                goalsForAway: { type: Number, trim: true, required: true },
                goalsDiffAway: { type: Number, trim: true, required: true },
                pointsAway: { type: Number, trim: true, required: true },
            }
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Team', teamSchema);
