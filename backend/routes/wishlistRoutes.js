
const express = require('express');
const router = express.Router();

const Wishlist = require('../models/Wishlist');
const { getAuth } = require('../config/firebase.config');

// Add product to wishlist
router.post('/add', async (req, res) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await getAuth().verifyIdToken(token);

        const firebaseUid = decodedToken.uid;
        const productId = req.body.productId;

        let wishlist = await Wishlist.findOne({ firebaseUid });

        if (!wishlist) {
            wishlist = new Wishlist({
                firebaseUid,
                productIds: [productId]
            });
        } else if (!wishlist.productIds.includes(productId)) {
            wishlist.productIds.push(productId);
        }

        await wishlist.save();

        res.status(200).json(wishlist);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

// Get wishlist
router.get('/', async (req, res) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await getAuth().verifyIdToken(token);

        const wishlist = await Wishlist.findOne({
            firebaseUid: decodedToken.uid
        });

        res.status(200).json(wishlist || { productIds: [] });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

// Remove product from wishlist
router.delete('/remove/:productId', async (req, res) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await getAuth().verifyIdToken(token);

        await Wishlist.findOneAndUpdate(
            { firebaseUid: decodedToken.uid },
            { $pull: { productIds: Number(req.params.productId) } }
        );

        res.status(200).json({ message: 'Product removed from wishlist' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

module.exports = router;
