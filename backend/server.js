
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/db.config');

require('dotenv').config();
require('./config/firebase.config');

const app = express();

app.use(cors());
app.use(express.json());

// User routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const wishlistRoutes = require('./routes/wishlistRoutes');

app.use('/wishlist', wishlistRoutes);

// MongoDB Connection
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("MongoDB Atlas connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:");
        console.log(error.message);

        if (error.reason && error.reason.servers) {
            for (const [address, server] of error.reason.servers) {
                console.log("\nServer:", address);
                console.log("Status:", server.type);
                console.log("Error:", server.error?.message);
            }
        }
    });

// Test route
app.get('/', (req, res) => {
    res.send("CERO Backend is running!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
