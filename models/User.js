const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [ true, "A username is required" ],
      trim: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: (userEmail) => `${userEmail.value} is not a valid email address!`,
      },
      required: [true, "User email address is required"],
      unique: true
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
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
