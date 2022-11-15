
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const categorySchema = new mongoose.Schema(
    {
        category_id: {
            type: String,
            unique: true,
            trim: true,
            required: false,
            default: Date.now(),
        },
        name: { type: String, trim: true, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Category', categorySchema);
