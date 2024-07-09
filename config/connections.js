const { connect, connection } = require("mongoose");

const connectionString = 
  process.env.MONGODB_URI || "mongodb://mongodb://localhost:27017/"

  connect(connectionString);

  module.exports = connection;
 