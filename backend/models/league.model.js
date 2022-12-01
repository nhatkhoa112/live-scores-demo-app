
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const leagueSchema = new mongoose.Schema(
    {
      
        name: { type: String, trim: true, required: true },
        isFav: {
            type: Boolean, required: false, default: false
        },
        isTab: {
            type: Boolean, required: false, default: false
        },
        seasons: [
            {
                season: { type: String, trim: true, required: true, default: "21/22" },
                teams: [
                    { ref: 'Team', required: false, type: Schema.Types.ObjectId }
                ],
                country: { ref: 'Country', required: true, type: Schema.Types.ObjectId },
                matches: [
                    { ref: "Match", required: false, type: Schema.Types.ObjectId }
                ],
                championLeagueTeams: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                euroPaLeagueTeams: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                relegation: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                promotion: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                promotionPlayOff: {
                    type: Number,
                    required: true,
                    default: 0,

                }
            }
        ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('League', leagueSchema);
