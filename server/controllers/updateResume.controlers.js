import { User } from "../models/user.models.js";

export const updateResume = async (req, res) => {
  try {
    const { state } = req.body;
    const userId = req.user.id;

    const user = await User.findOneAndUpdate(
      { "resumes._id": state._id }, // Find user with the matching resume ID
      {
        $set: { "resumes.$": state }, // Update the matching resume
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Resume added to user successfully" });
  } catch (error) {
    console.error("Error adding resume to user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const user = await User.findOneAndUpdate(
      { _id: userId }, // Find user by ID
      {
        $pull: { resumes: { _id: id } }, // Remove the resume with the specified ID
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Resume deleted successfully" });
  } catch (error) {
    console.error("Error deleting resume from user:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
