//Imports
const router = require("express").Router();

//Import function written in thoughtcontroller.js file
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require("../../controllers/thoughtController");

//Route -> http://localhost:3001/api/thoughts
router.route("/").get(getThoughts).post(createThought);

//Route -> http://localhost3001/api/:thoughtId
router
 .route("/:thoughtId")
 .get(getThought)
 .put(updateThought)
 .delete(deleteThought);

//Route -> http://localhost:3001/api/thought/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

//Route -> https://localhost:3001/api/thought/:thoughtId/reaction/:reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

//Export
module.exports = router;