const { Schema, model } = require("mongoose");
const UserUser = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    photoUrl:{
        type: String,
        required: true
    },
    displayName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        default: null
    }
})

module.exports = model("Student", UserUser);