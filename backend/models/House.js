const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const Avatar_path = path.join("/uploads/user/avatar");
const multer = require("multer");
const path = require("path");
const HOUSE_PATH = path.join("/uploads/house");

const userSchema = mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

// userSchema.statics.generateToken = (data, key, exprire = "10d") => {
//   return `Bearer ${jwt.sign(data.toJSON(), key, { expiresIn: exprire })}`;
// };
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "..", Avatar_path));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// userSchema.statics.uploadAvatar = multer({ storage: storage }).single("avatar");
// userSchema.statics.avatarPath = Avatar_path;

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, path.join(__dirname, "..", POST_PATH));
  },
  filename: function (request, file, cb) {
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// static Methods
postSchema.statics.uploadPostImage = multer({ storage: storage }).single(
  "image"
);
postSchema.statics.HouseImgPath = HOUSE_PATH;

const User = mongoose.model("User", userSchema);
module.exports = User;
