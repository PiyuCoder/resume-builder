import { User } from "../models/user.models.js";

export const userData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Assuming you have a User model
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Fetched user data successfully", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
