
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firebaseUid: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        default: ""
    },

    address: {
        type: String,
        default: ""
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
