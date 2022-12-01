
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const countrySchema = new mongoose.Schema(
    {
        country_id: {
            type: String,
            unique: true,
            trim: true,
            required: false,
            default: Date.now(),
        },
        name: { type: String, required: true },
        leagues: [
            { ref: 'League', required: false, type: Schema.Types.ObjectId }
        ],
        typeImage: {
            type: String,
            required: true,
            default: "flag"
        },
        imageUrl: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Country', countrySchema);
