import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body.formData;

    if (!email || !name || !password) {
      return res
        .status(400)
        .send({ success: false, message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).send({
        success: false,
        message: "Email already registered. Please Login",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashedpassword,
    }).save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(201).send({
      success: true,
      message: "Registration successfull!",
      newUser,
      token,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: "Server error" });
  }
};
