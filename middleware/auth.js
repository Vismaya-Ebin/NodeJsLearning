//create middleware
import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  try {
      //create token with name x-auth-token
    const token = req.header("x-auth-token");
    //verify token recieved with secret key
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (e) {
    res.status(401).send({ message: "invalid token" });
  }
};
