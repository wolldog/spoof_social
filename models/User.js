// Define Mongoose
const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "A username is required"], //username is required
      trim: true, //trim whitespace
      unique: true, //require username to be unique
    },

    email: {
      type: String,
      required: true, //username is required
      validate: {
        //regex to validate the email address
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: (userEmail) =>
          `${userEmail.value} is not a valid email address!`,
      },
      required: [true, "User email address is required"], //email is required
      unique: true, //require email to be unique
    },

    //path to include the users thoughts
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    //path to include the users friends
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    // Include virtuals with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the length of the friends array
userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
