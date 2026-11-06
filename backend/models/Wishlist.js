
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({

    firebaseUid: {
        type: String,
        required: true,
        unique: true
    },

    productIds: {
        type: [Number],
        default: []
    }

});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
