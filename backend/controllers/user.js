const User = require("../models/User");
const createNewUser = async (request, response) => {
  console.log(request.body);
  try {
    const user = await User.findOne({
      email: request.body.email,
    });
    if (user) {
      return response.status(422).json({
        message: "User already exist",
        data: { data: user },
      });
    } else {
      try {
        const newUser = new User({ ...request.body });
        await newUser.save();
        return response.status(200).json({
          message: "User registerd succesfully",
        });
      } catch (error) {
        console.log(error);
        return response.status(422).json({
          message: "Error while creating user",
        });
      }
    }
  } catch (error) {
    return response.status(500).json({
      message: "Internal server Error",
    });
  }
};
const userLogin = async (request, response) => {
  try {
    console.log(request.body);
    const user = await User.findOne({
      $or: [{ email: request.body.email }],
    }).select("password");

    if (user.password === request.body.password) {
      user["password"] = null;
      // const token = User.generateToken(user, "H@rsh", "30d");
      // response.cookie("userToken", token, {
      //   secure: true,
      //   httpOnly: true,
      //   expires: new Date("01 12 2024"),
      //   sameSite: "lax",
      // });
      return response
        .status(200)
        .json({ message: "User login details match", user: user });
    } else {
      return response
        .status(422)
        .json({ message: "User login details did'nt match" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createNewUser, userLogin };
