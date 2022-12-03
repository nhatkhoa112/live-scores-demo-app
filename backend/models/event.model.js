
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const { v4: uuidv4 } = require('uuid');


const eventSchema = new mongoose.Schema(
    {
        event_id: { type: String, trim: true, required: true, default: uuidv4() },
        timeAt: { type: String, trim: true, required: true, default: new Date() },
        match: {ref: "Match", required: true, type: Schema.Types.ObjectId},
        eventAtMinute: { type: String, trim: true, required: true },
        foul: {
            type: String, required: false, enum: ["yellow card", "red card"]
        },
        ballContext: {
            mainPlayer: { ref: "Player", required: true, type: Schema.Types.ObjectId },
            assistPlayer: { ref: "Player", required: false, type: Schema.Types.ObjectId },
            ballSituation: { type: String, trim: true, required: true },
            score: { 
                team: {ref: "Team", required: true, type: Schema.Types.ObjectId}
            }
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Event', eventSchema);
