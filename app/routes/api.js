const models = require('./../../models')
module.exports = function (server) {
    // Read all users
    server.get('/api/users', function (req, res){
        models.User.findAll({}).then(function (result){
            res.json(result)
        })
    })
    // Read user by ID
    server.get('/api/users/:id', function (req, res){
        models.User.findById(req.params.id).then(function (result){
            res.json(result)
        })
    })
}