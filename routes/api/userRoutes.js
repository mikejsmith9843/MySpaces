//Imports
const router = require("express").Router();

//Import function written in userController.js file
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require("../../controllers/userController");

//Route -> http://localhost:3001/api/users
router.route("/").get(getUsers).post(createUser);

//Route -> https://localhost:3001/api/users/:userId
router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

  //Route -> http://localhost:3001/api/users/:userId/friends/:friendId
  router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

  //Exports
  module.exports = router;