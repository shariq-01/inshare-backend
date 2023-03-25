const express = require("express");
const upload = require("../config/multer");
const { uploadFile, sendMail } = require("../models/file/file.controller");

const fileRouter = express.Router();

fileRouter.post("/", upload.single("myfile"), uploadFile);
fileRouter.post("/send", sendMail);

module.exports = fileRouter;
