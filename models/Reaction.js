//Import
const { Schema, Types } = require("mongoose");

//This will not be a model, but rather will be used as the reaction field's sub-document schema in the thought model
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId(),
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 200,
    },
    username: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

//Export
module.exports = reactionSchema;