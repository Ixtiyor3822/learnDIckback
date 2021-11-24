const {Schema, model} = require("mongoose");
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model('User', userSchema);