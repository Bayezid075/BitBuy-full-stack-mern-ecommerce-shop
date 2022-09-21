const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  VerifyToken,
  verifyAuthorization,
  verifyAdminAuthorization,
} = require("../routes/VerifyToken");

// create cart

router.post("/add", VerifyToken, async (req, res) => {
  const newCart = await new Cart(req.body);

  try {
    const saveCart = await newProduct.save();
    res.status(201).json(saveCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update cart

router.put("/update/:id", verifyAuthorization, async (req, res) => {
  if (req.body.password) {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(201).json(updatedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

// Delete cart
router.delete("/delete/:id", verifyAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.send(200).json("Cart has been deleted ");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Cart by id

router.get("/find/:userId", verifyAuthorization, async (req, res) => {
  try {
    const cart = await Cart.find({ userID: req.params.userId });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});
// // get all cart

router.get("/", verifyAdminAuthorization, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
