const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const Avatar_path = path.join("/uploads/user/avatar");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      min: 3,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    uploadHouses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
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

const User = mongoose.model("User", userSchema);
module.exports = User;
