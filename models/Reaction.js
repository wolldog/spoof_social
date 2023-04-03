const { Schema, Types } = require("mongoose");

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
      default: Date.now,
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
