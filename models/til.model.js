const {Schema, model} = require("mongoose");
const tilSchema = new Schema({
    eng: {
        type: String,
        required: true,
    },
    rus: {
        type: String,
        // required: true
        default: ''
    },
    qr: {
        type: String,
        default: ''
    },
    uzb: {
        type: String,
        required: true
    },
    descriptionuzb: {
        type: String,
        default: ''
    },
    descriptionqr: {
        type: String,
        default: ''
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model('Til', tilSchema);