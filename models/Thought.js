//Import
const { Schema, model } = require("mongoose");
const reactionSchema = requrie("./Reaction");

//Thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
          type: String,
          required: true,
          maxlength: 280,
          minlength: 1,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        username: {
          type: String,
          required: true,
        },
        reactions: [reactionSchema],
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

//Increases reaction count in thought model object when reaction are added to a thought
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

//Creates thought model with ThoughtSchema
const Thought = model("thought", thoughtSchema);

//Exports
module.exports = Thought;