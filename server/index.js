// root (main point of the application)
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const mongoose = require('mongoose')

// DB setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true })
// express app instance
const app = express()
router(app)

// app setup
app.use(morgan('combined'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json( { type: '*/*' } ))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// server setup instance
const port =  process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listeing On:', port)