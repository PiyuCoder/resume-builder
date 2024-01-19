import jwt from "jsonwebtoken";

export const authenticator = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    // console.log(authorization);
    const token = authorization.split(" ")[1];

    if (!authorization)
      return res
        .status(400)
        .send({ success: false, message: "No token provided." });

    const verified = jwt.verify(token, process.env.SECRET_KEY);

    req.user = verified;

    next();
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Server error while verifying the token.",
    });
  }
};
