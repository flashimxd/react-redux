const mongoose = require('mongoose')
const Scheme = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// User schemme
const userScheme = new Scheme({
    email: { type: String, unique: true, lowercase: true},
    password: String
})

// on save hook, encrypt the password
userScheme.pre('save', function(next) {
    const user = this
    bcrypt.genSalt(10, function(err, salt){
        if(err)
            return next(err)

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err)
                return next(err)

            user.password = hash
            next()
        })
    })
})

// inject a comparePassword method into user schema
userScheme.methods.comparePassword = function(candidatePassword, callBack){
    bcrypt.compare(candidatePassword, this.password, function(error, isMatch){
        if(error)
            return callBack(error)
        callBack(null, isMatch)
    })
}

// User ModelClass
const modelClass = mongoose.model('User', userScheme)

// Export UserScheme
module.exports = modelClass