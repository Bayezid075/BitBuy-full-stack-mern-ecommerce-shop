const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    dscs: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: Array, required: true },
    size: { type: Array, required: true },
    color: { type: Array, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
