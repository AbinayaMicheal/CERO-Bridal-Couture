
const express = require('express');
const router = express.Router();

const User = require('../models/User');
const { getAuth } = require('../config/firebase.config');
// Create user profile
router.post('/create', async (req, res) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Authorization token missing'
            });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken = await getAuth().verifyIdToken(token);

        const firebaseUid = decodedToken.uid;
        const name = req.body.name;
        const email = decodedToken.email;

        // Check whether user already exists
        const existingUser = await User.findOne({ firebaseUid });

        if (existingUser) {
            return res.status(200).json({
                message: 'User profile already exists'
            });
        }

        // Create new user
        const newUser = new User({
            firebaseUid,
            name,
            email
        });

        await newUser.save();

        res.status(201).json({
            message: 'User saved successfully'
        });

    } catch (error) {

        console.log("User profile error:", error);

        res.status(500).json({
            message: error.message
        });

    }

});


// Get logged-in user's profile
router.get('/profile', async (req, res) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Authorization token missing'
            });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken = await getAuth().verifyIdToken(token);

        const firebaseUid = decodedToken.uid;

        const user = await User.findOne({ firebaseUid });

        if (!user) {
            return res.status(404).json({
                message: 'User profile not found'
            });
        }

        res.status(200).json(user);

    } catch (error) {

        console.log("Get profile error:", error);

        res.status(500).json({
            message: error.message
        });

    }

});


// Update user profile
router.put('/profile', async (req, res) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Authorization token missing'
            });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken = await getAuth().verifyIdToken(token);

        const firebaseUid = decodedToken.uid;

        const updatedUser = await User.findOneAndUpdate(
            { firebaseUid: firebaseUid },
            {
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: 'User profile not found'
            });
        }

        res.status(200).json({
            message: 'Profile updated successfully',
            user: updatedUser
        });

    } catch (error) {

        console.log("Update profile error:", error);

        res.status(500).json({
            message: error.message
        });

    }

});



module.exports = router;
