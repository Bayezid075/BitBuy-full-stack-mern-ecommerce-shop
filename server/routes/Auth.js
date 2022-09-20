const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
// Register User
router.post("/registar", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });
  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Login
router.post("/login", async (req, res) => {
  try {
    const LoignUser = await User.findOne({ username: req.body.username });
    !LoignUser &&
      res.status(404).json("User Not Found ! Please Try correct username");

    const hassedPass = CryptoJs.AES.decrypt(
      LoignUser.password,
      process.env.PASSWORD_SECRET
    );
    const OriginalPassword = hassedPass.toString(CryptoJs.enc.Utf8);
    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong Password !!");

    const accessToken = jwt.sign(
      {
        id: LoignUser._id,
        isAdmin: LoignUser.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = LoignUser._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
