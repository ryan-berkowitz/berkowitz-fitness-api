let api = require('./app/routes/api.js')
let express = require('express')
let server = express()
let bodyParser = require("body-parser")
api(server)
const PORT = 3000
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.text())
server.use(bodyParser.json({ type: 'application/vnd.api+json' }))
server.use(express.static('app/public'))
server.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
  })