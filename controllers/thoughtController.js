const { Thought, User, Reaction } = require("../models");

//GET all thoughts
module.exports = {
  getThoughts(req, res) {
    Thought.find()
    
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //GET a single thought by ID
  getThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  //POST a new thought and push thoughtId to user.thoughts array
  addThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created but found no user with that ID",
            })
          : res.json("Created a thought 💭")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Update a thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Delete a thought by ID
  deleteThought(req, res) {
    Thought.findByIdAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "One thought deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },

  //Add reaction to a thought
  addReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID " })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  //Delete a reaction from a thought
  deleteReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID " })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
