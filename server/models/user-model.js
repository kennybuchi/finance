const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        tempValue: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)