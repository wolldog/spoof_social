const router = require('express').Router();

const {
    getThoughts,
    getThought,
    addThought,
    updateThought,
    deleteThought,
   

} = require('../../controllers/thoughtController')

//GET all thoughts & POST a new thought
router.route('/').get(getThoughts).post(addThought)

//GET thought by ID & PUT thought by ID & DELETE thought by ID
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought)

//POST reaction to thought by ID & DELETE reaction

module.exports = router;