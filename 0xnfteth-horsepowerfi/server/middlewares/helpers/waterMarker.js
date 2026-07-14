const Jimp = require("jimp");
module.exports = async (req, res, next) => {
  if (!req.files.length) {
    return next();
  }
  const options = {
    ratio: 0.6,
    opacity: 0.4,
    text: "K I N D E E M",
    textSize: Jimp.FONT_SANS_64_BLACK,
  };
  const getDimensions = (H, W, h, w, ratio) => {
    let hh, ww;
    if (H / W < h / w) {
      //GREATER HEIGHT
      hh = ratio * H;
      ww = (hh / h) * w;
    } else {
      //GREATER WIDTH
      ww = ratio * W;
      hh = (ww / w) * h;
    }
    return [hh, ww];
  };
  let results = req.files.map(async (file) => {
    const watermark = await Jimp.read("./public/uploads/logo.png");
    const imagePath = file.path;

    const main = await Jimp.read(imagePath);
    const [newHeight, newWidth] = getDimensions(
      main.getHeight(),
      main.getWidth(),
      watermark.getHeight(),
      watermark.getWidth(),
      options.ratio
    );
    watermark.resize(newWidth, newHeight);
    const positionX = (main.getWidth() - newWidth) / 2 + 250;
    const positionY = (main.getHeight() - newHeight) / 2 + 200;
    watermark.opacity(options.opacity);
    main.composite(
      watermark,
      positionX,
      positionY,
      Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
    );
    return main.quality(100).write(imagePath);
  });
  await Promise.all(results);
  next();
};
