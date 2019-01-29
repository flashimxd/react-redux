const jwt = require('jwt-simple')
const User = require('../models/User')
const config = require('../config')


function tokenForUser(user) {
    const timestamp = new Date().getTime()
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
} 

exports.signin = function(req, res, next) {
    res.send({ token: tokenForUser(req.user) })
}

exports.singup = function(req, res, next) {
    // grab email and password passed by request
    const email = req.body.email
    const password = req.body.password

    if(!email || !password){
        return res.status(422).send({error: 'Email and password are required'})
    }

    User.findOne({email: email}, (error, existed) => {
        if (error)
            return next(error)

        if (existed) {
            return res.status(422).send({ error: 'Email already existe' })
        }

        const user = new User({
            email: email,
            password: password
        })

        user.save((error) => {
            if(error)
                return next(error)

            return res.json({ token: tokenForUser(user) })
        })
    })
}