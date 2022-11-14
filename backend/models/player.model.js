
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const playerSchema = new mongoose.Schema(
    {
        player_id: {
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
                team:
                    { ref: 'Team', required: false, type: Schema.Types.ObjectId }
                ,
                goals: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                assists: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                shootsOnTarget: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                yellowCard: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                redCard: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                injuryStatus: {
                    type: Boolean,
                    required: true,
                    default: false,
                },
            }
        ],

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Player', playerSchema);
