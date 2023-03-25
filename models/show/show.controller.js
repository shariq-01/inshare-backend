const { v4: uuidv4 } = require("uuid");
const File = require("../file/file.model");

exports.renderDownloadPage = async (req, res, next) => {
  try {
    const { uuid } = req.params;

    const file = await File.findOne({ uuid });

    // Link expired
    if (!file) {
      return res.render("download", { error: "Link has been expired." });
    }

    return res.render("download", {
      uuid: file.uuid,
      fileName: file.filename,
      fileSize: file.size,
      downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
    });
  } catch (err) {
    return res.render("download", { error: "Something went wrong." });
  }
};

exports.downloadFile = async (req, res, next) => {
  try {
    const { uuid } = req.params;

    const file = await File.findOne({ uuid });

    // Link expired
    if (!file) {
      return res.render("download", { error: "Link has been expired." });
    }

    return res.download(file.path);
  } catch (err) {
    return res.render("download", { error: "Something went wrong." });
  }
};
