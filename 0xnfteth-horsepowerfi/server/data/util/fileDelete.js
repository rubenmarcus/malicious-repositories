const fs = require("fs");

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw new Error("dsadhas");
    }
  });
};

exports.fileDelete = deleteFile;
