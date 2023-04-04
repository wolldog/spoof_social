// Define Mongoose
const { Schema, Types } = require("mongoose");

// Create a new instance of the Mongoose schema to define 'Reaction' document
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      require: true,
      maxLength: 280,
    },

    username: {
      type: String,
      require: true,
    },

    createdAt: {
      type: Date,
      //Set default createdAt date to today
      default: Date.now,
      //Format data using a get method
      get: (createdAt) => {
        return createdAt.toLocaleDateString();
      },
    },
  },
  {
    // Include virtuals with the response, overriding the default behavior
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
