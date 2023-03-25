require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const fileRouter = require("./routes/file.route");
const showRouter = require("./routes/show.route");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

//Basic middlwares

app.use(express.json());

//Making folder public
app.use(express.static(path.join(__dirname, "public")));

//Template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routes
app.use("/api/files", fileRouter);
app.use("/files", showRouter);

//Server listner
app.listen(PORT, "0.0.0.0", () => {
  connectDB();
  console.log("Server is listening on port", PORT);
});
