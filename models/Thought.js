const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => {return createdAt.toLocaleDateString()}
      
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

thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });


// Initialize our User model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
