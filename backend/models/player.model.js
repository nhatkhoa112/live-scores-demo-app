
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const { v4: uuidv4 } = require('uuid');

const playerSchema = new mongoose.Schema(
    {
        player_id: {
            type: String,
            unique: true,
            trim: true,
            required: false,
            default: uuidv4(),
        },
        name: { type: String, trim: true, required: true },
        seasons: [
            {
                season: { type: String, trim: true, required: true },
                leagues: [
                    {
                        team:
                            { ref: 'Team', required: true, type: Schema.Types.ObjectId }
                        ,
                        league: { ref: 'League', required: true, type: Schema.Types.ObjectId },
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
                ]

            }
        ],

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Player', playerSchema);
