const mongoose = require('mongoose')
const Scheme = mongoose.Schema

// User schemme
const userScheme = new Scheme({
    email: { type: String, unique: true, lowercase: true},
    password: String
})

// User ModelClass
const modelClass = mongoose.model('User', userScheme)

// Export UserScheme
module.exports = modelClass