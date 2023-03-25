const express = require("express");
const {
  renderDownloadPage,
  downloadFile,
} = require("../models/show/show.controller");

const showRouter = express.Router();

showRouter.get("/:uuid", renderDownloadPage);
showRouter.get("/download/:uuid", downloadFile);

module.exports = showRouter;
