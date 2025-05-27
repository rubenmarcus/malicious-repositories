const fs = require("fs");

//file
module.exports = (files) => {
  return Promise.all(
    files.map(
      (file) =>
        new Promise((res, rej) => {
          try {
            setTimeout(() => {
              fs.unlink(file, (err) => {
                if (err) throw err;
                res();
              });
            }, 10000);
          } catch (err) {
            console.error(err);
            rej(err);
          }
        })
    )
  );
};
