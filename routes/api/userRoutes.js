const router = require('express').Router();

const {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController')

//GET all users & POST a new user
router.route('/').get(getUsers).post(addUser)

//GET user by ID, Update a user by ID & DELETE a user by ID
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser)

//POST friend by ID to user by ID
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;