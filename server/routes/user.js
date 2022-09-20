const router = require("express").Router();
const User = require("../models/User");
const { VerifyToken, verifyAuthorization } = require("../routes/VerifyToken");

// Update User
router.put("/:id", verifyAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
