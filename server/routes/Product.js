const router = require("express").Router();
const Product = require("../models/Product");
const {
  VerifyToken,
  verifyAuthorization,
  verifyAdminAuthorization,
} = require("../routes/VerifyToken");

router.post("/add", verifyAdminAuthorization, async (req, res) => {
  const newProduct = await new Product(req.body);

  try {
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update Product

router.put("/update/:id", verifyAdminAuthorization, async (req, res) => {
  if (req.body.password) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(201).json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

// Delete Product
router.delete("/delete/:id", verifyAdminAuthorization, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send(200).json("Product has been deleted ");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get Products by id

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});
// get all product

router.get("/", async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  try {
    let products;
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      products = await Product.find({
        category: {
          $in: [queryCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
