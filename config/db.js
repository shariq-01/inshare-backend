const mongoose = require("mongoose");
function connectDB() {
  // Database connection 🥳
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;

  // If the connection throws an error
  connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
  });

  // When the connection is disconnected
  connection.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function () {
    connection.close(function () {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });

  // When the connection is established
  connection.once("open", () => {
    console.log("Database connected 🥳🥳🥳🥳");
  });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
