const {Schema, model, Types} = require("mongoose");
const StudentTilSchema = new Schema({
    
    creator:{
        type: Types.ObjectId,
        ref: 'Student'
    },
    eng: {
        type: String,
        // required: true,
        default: ''
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
        // required: true
        default: ''
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = model('StudentTil', StudentTilSchema);