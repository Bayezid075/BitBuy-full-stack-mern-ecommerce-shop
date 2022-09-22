const router = require("express").Router();
const Order = require("../models/Order");
const {
  VerifyToken,
  verifyAuthorization,
  verifyAdminAuthorization,
} = require("../routes/VerifyToken");

// create Order

router.post("/add", VerifyToken, async (req, res) => {
  const newOrder = await new Order(req.body);

  try {
    const saveOrder = await newOrder.save();
    res.status(201).json(saveOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update Order

router.put("/update/:id", verifyAdminAuthorization, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Delete Order
router.delete("/delete/:id", verifyAdminAuthorization, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted ");
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Get Order by id

router.get("/find/:userId", VerifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});
// // // get all Order

router.get("/", verifyAdminAuthorization, async (req, res) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Monthly income
router.get("/income", verifyAdminAuthorization, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
