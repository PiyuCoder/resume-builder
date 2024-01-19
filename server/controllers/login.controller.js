import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body.formData;
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email is not registered. Please register",
      });
    }

    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (!verifiedPassword) {
      return res
        .status(400)
        .send({ success: false, message: "Incorrect credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user.password = undefined;
    user._id = undefined;
    return res
      .status(201)
      .send({ success: true, message: "Login successfull!", user, token });
  } catch (error) {
    return res.status(500).send({ success: false, message: "Server error" });
  }
};
