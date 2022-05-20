const User = require("../models/User");
const House = require("../models/House");

const AddHouse = async (request, response) => {
  try {
    const user = await User.findById(request.body.id);

    House.uploadPostImage(request, response, async (error) => {
      if (error) {
        console.log(error);
        return response.status(400).json({
          msessage: "error while createing a post",
        });
      }

      let house;
      console.log(request.file);
      if (request.file) {
        console.log("request.file");
        house = new House({
          content: request.body.content,
          user: request.user,
          image: House.HouseImgPath + "/" + request.file.filename,
        });
      } else {
        house = new House({
          content: request.body.content,
          user: request.user,
        });
      }

      await House.save();
      user.uploadHouses = [house._id, ...user.uploadHouses];

      await user.save();
      return response.status(200).json({
        message: "House Created",
        data: house,
      });
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { AddHouse };
