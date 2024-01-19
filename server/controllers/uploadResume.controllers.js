import { User } from "../models/user.models.js";

export const uploadResume = async (req, res) => {
  try {
    const { state } = req.body;
    const userId = req.user.id;

    // Assuming you have a User model
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add the new resume to the user's resumes array
    user.resumes.push(state);

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "Resume added to user successfully" });
  } catch (error) {
    console.error("Error adding resume to user:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
