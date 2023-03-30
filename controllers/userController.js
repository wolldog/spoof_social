const { User, Thought} = require('../models');

//GET all users
module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
//GET a single user by _id
        getUser(req, res) {
            User.findOne(({ _id: req.params.id}))
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
        },
};




//POST a new user

//PUT to update a user by _id

//DELETE a user by _id

//BONUS: Remove a user's associated thoughts when deleted


