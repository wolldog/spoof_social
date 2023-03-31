const router = require('express').Router();

const {
    getThoughts,
    getThought,

} = require('../../controllers/thoughtController')

//GET all thoughts & POST a new thought
router.route('/').get(getThoughts)

//GET thought by ID
router.route('/:thoughtId').get(getThought)

module.exports = router;