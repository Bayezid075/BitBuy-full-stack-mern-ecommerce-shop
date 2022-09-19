const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const UserRoute = require("./routes/user");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));
app.use(express.json()); // this will be allow take json post request
app.use("/api", UserRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running with 5000 Port !!");
});
