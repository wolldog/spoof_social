const router = require('express').Router();

const {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController')

//GET all users & POST a new user
router.route('/').get(getUsers).post(addUser)

//GET user by ID, Update a user by ID & DELETE a user by ID
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)


//PUT to update a user by _id


//DELETE a user by _id



module.exports = router;