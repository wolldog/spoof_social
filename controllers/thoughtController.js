const { Thought, User, Reaction } = require('../models');

//GET all thoughts
module.exports = {
    getThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getThought(req, res) {
        Thought.findOne({ _id : req.params.thoughtId})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    }



