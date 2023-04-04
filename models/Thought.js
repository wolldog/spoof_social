// Define Mongoose
const { Schema, model } = require("mongoose");
//Require the 'Reaction' schema in the 'Thought' model
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1, //minimum length of 1 character
      maxLength: 280, //minimum length of 1 character
    },

    createdAt: {
      type: Date,
      default: Date.now, //Set default createdAt date to today
      get: (createdAt) => {
        return createdAt.toLocaleDateString(); //Format data using a get method
      },
    },

    username: {
      type: String,
      require: true,
    },

    reactions: [reactionSchema],
  },
  {
    // Include virtuals with the response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//Provide a count of the number of reactions to a thought
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our User model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
