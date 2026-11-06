const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

require('dotenv').config();

const firebaseconfig = require('../cred/servicekey.json');

const app = initializeApp({
    credential: cert(firebaseconfig)
});

console.log("Firebase Admin connected");

module.exports = { getAuth };