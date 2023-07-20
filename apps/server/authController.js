const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const tokenReq = req.cookies.authToken;
  if (!tokenReq) return res.status(401).send("Access Denied");

  try {
    const userVerificado = jwt.verify(tokenReq, "segredo");
    req.user = userVerificado;
    next();
  } catch (error) {
    res.status(401).send("Access Denied");
  }
};
