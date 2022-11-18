
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const leagueSchema = new mongoose.Schema(
    {
        league_id: {
            type: String,
            unique: true,
            trim: true,
            required: false,
            default: Date.now(),
        },
        name: { type: String, trim: true, required: true },
        isFav: {
            type: Boolean, required: true, default: false
        },
        seasons: [
            {
                season: { type: String, trim: true, required: true },
                teams: [
                    { ref: 'Team', required: false, type: Schema.Types.ObjectId }
                ],
                country: { ref: 'Country', required: true, type: Schema.Types.ObjectId },
                matches: [
                    { ref: "Match", required: false, type: Schema.Types.ObjectId }
                ],
                championLeagueTeams: {
                    type: Number,
                    required: false,
                    default: 0,
                },
                euroPaLeagueTeams: {
                    type: Number,
                    required: false,
                    default: 0,
                },
            }
        ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('League', leagueSchema);
