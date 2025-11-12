const path = require("path");
const multer = require("multer");

//user's..
const storageByUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        req.user._id +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

//admin's..
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        req.profile._id +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
//superadmin's..
const storageBySuperAdmin = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        req.admin.role +
        req.admin._id +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, callback) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".JPG" && ext !== ".jpeg") {
    return callback(new Error("Not Image"));
  }
  callback(null, true);
};
const limits = { fileSize: 2480 * 3230 };

// exports.uploadAdminDoc = multer({ storage, fileFilter, limits }).fields([
//   { name: "citizenshipFront", maxCount: 1 },
//   { name: "citizenshipBack", maxCount: 1 },
//   { name: "businessLicence", maxCount: 1 }
// ]);
exports.uploadAdminDoc = multer({ storage, fileFilter, limits }).single("doc");
exports.uploadAdminPhoto = multer({ storage, fileFilter, limits }).single(
  "photo"
);
exports.uploadUserPhoto = multer({
  storage: storageByUser,
  fileFilter,
  limits,
}).single("photo");

exports.uploadProductImages = multer({ storage, fileFilter, limits }).array(
  "productImages",
  5
);
exports.uploadBannerPhoto = multer({
  storage: storageBySuperAdmin,
  fileFilter,
  limits: { fileSize: 8480 * 4230 },
}).single("bannerPhoto");
