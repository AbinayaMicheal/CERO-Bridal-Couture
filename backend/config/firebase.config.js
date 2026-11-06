const { initializeApp, cert } = require('firebase-admin/app')
const { getAuth } = require('firebase-admin/auth')
const path = require('path')
const fs = require('fs')

let firebaseconfig

if (fs.existsSync('/etc/secrets/servicekey.json')) {
    firebaseconfig = require('/etc/secrets/servicekey.json')
} else {
    firebaseconfig = require('../cred/servicekey.json')
}

const app = initializeApp({
    credential: cert(firebaseconfig)
})

console.log("Firebase Admin connected")

module.exports = { getAuth }