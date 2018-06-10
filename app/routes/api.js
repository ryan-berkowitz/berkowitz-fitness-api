const models = require('./../../models')
module.exports = function (server) {
    // Read all users
    server.get('/api/users', function (req, res) {
        models.User.findAll({}).then(function (result){
            res.json(result)
        })
    })
    // Read user by ID
    server.get('/api/users/:id', function (req, res) {
        models.User.findById(req.params.id).then(function (result) {
            res.json(result)
        })
    })
    // Create a User
    server.post('/api/users', function (req, res) {
        models.User.create({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthDay: req.body.birthDay,
            birthMonth: req.body.birthMonth,
            birthYear: req.body.birthYear,
            height: req.body.height,
            weight: req.body.weight
        }).then(function (result) {
            res.json(result)
        })
    })
    // Update a user
    server.put('/api/users/:id', function (req, res) {
        // (User, Option {where})
        models.User.update({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthDay: req.body.birthDay,
            birthMonth: req.body.birthMonth,
            birthYear: req.body.birthYear,
            height: req.body.height,
            weight: req.body.weight
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        })
    })
    // Delete user by ID
    server.delete('/api/users/:id', function (req, res) {

        models.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        })
    })
}