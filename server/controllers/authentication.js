const User = require('../models/User')

exports.singup = function(req, res, next) {
    // grab email and password passed by request

    console.log(req.body)
    
    /*
    const email = req.body.email
    const password = req.body.password

    // find if the record alredy exist
    User.findOne({email: email}, (error, existed) => {
        if (error)
            return next(error)

        if (existed) {
            return res.status(422).send({ error: 'Email alredy existe' })
        }

        const user = new User({
            email: email,
            password: password
        })

        user.save((error) => {
            if(error)
                return next(error)

            res.json(user)
            // return req.status(200).send({success: 'true'})
        })
    })
    */
}