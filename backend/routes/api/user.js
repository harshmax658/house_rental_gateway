const express = require("express");
const router = express.Router();

const { createNewUser, userLogin } = require("../../controllers/user");

router.post("/create-user", createNewUser);
router.post("/user-login", userLogin);

module.exports = router;
