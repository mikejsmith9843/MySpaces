//Imports
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoute = require("./ThoughtRoute");

//Middleware
router.use("/users", userRoute);
router.use("/thought", thoughtRoute);

//Exports
module.exports = router;