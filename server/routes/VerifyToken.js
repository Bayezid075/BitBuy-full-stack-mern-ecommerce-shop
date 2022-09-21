const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const AuthHeader = req.headers.token;
  if (AuthHeader) {
    const token = AuthHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("No valid Token !! ");
      req.user = user;
      next();
    }); //token form client
  } else {
    return res.status(401).json("Unauthorized !! ");
  }
};

const verifyAuthorization = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allow");
    }
  });
};
const verifyAdminAuthorization = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allow");
    }
  });
};

module.exports = { VerifyToken, verifyAuthorization, verifyAdminAuthorization };
