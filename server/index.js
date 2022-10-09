const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/Auth");
const ProductRoute = require("./routes/Product");
const CartRoute = require("./routes/Cart");
const OrderRoute = require("./routes/Order");
const PaymentRouter = require("./routes/Payment");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));
app.use(express.json()); // this will be allow take json post request
app.use("/api", UserRoute);
app.use("/api", AuthRoute);
app.use("/api/product", ProductRoute);
app.use("/api/cart", CartRoute);
app.use("/api/order", OrderRoute);
app.use("/api", PaymentRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running with 5000 Port !!");
});
