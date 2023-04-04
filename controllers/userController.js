const { User, Thought } = require("../models");

//GET all users
module.exports = {
  getUsers(req, res) {
    User.find()
      //Populate 'friends' path with document from user colletion
      .populate({ path: "friends", select: "-__v" })
      //Populate 'thoughts' path with document from thought colletion
      .populate({ path: "thoughts", select: "-__v" })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //GET a single user by _id
  getUser(req, res) {
    User.findOne({ _id: req.params.userId })
      //Populate 'friends' path with document from user colletion
      .populate({ path: "friends", select: "-__v" })
      //Populate 'thoughts' path with document from thought colletion
      .populate({ path: "thoughts", select: "-__v" })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //POST a new user
  addUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //PUT to update a user by _id
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //DELETE a user by _id
  deleteUser(req, res) {
    User.findByIdAndDelete({ _id: req.params.userId })
      .then((user) =>
        //DELETE users thoughts when user is deleted
        Thought.deleteMany({ username: user.username })
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json({ message: "One user deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },
  //POST new friend to user friends array
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

