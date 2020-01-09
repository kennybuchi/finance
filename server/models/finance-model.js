const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Finance = new Schema(
    {
        _id: Schema.Types.ObjectId,
        updated: { type: Date, default: Date.now },
        tempValue: Number,
        categories: Object
    },
    { timestamps: true },
)

module.exports = mongoose.model('finances', Finance)