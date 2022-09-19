const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send("User Api");
});

router.post("/post", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("your name " + username);
});

module.exports = router;
