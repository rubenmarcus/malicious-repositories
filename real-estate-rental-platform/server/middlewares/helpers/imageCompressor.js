const Jimp = require("jimp"),
  path = require("path");

//upload
module.exports = async (e, r, i, o, t) => (
  Jimp.read(i)
    .then((i) => {
      i.resize(r, Jimp.AUTO).write(path.resolve(o, `${t}`, e));
    })
    .catch((e) => {
      console.log("Error at reducing size / converting picture : "),
        console.log(e);
    }),
  `${t}/${e}`
);
