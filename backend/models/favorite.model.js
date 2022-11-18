
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const favoriteSchma = new mongoose.Schema(
    {
        favMatches: [
            {matches: { ref: "Match", required: true, type: Schema.Types.ObjectId }}
        ],
        favLeagues: [
            {Leagues: { ref: "League", required: true, type: Schema.Types.ObjectId }}
        ],

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Favorite', favoriteSchma);
