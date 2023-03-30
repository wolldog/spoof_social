const router = require('express').Router();

const {
    getUsers,
    getUser
} = require('../../controllers/userController')

//Get all users
router.route('/').get(getUsers)

//Get user by ID
router.route('/:id').get(getUser)


module.exports = router;