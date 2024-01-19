import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  currDesignation: String,
  summary: String,
  academics: [
    {
      program: String,
      course: String,
      year: String,
      institute: String,
    },
  ],
  experience: [
    {
      company: String,
      from: String,
      till: String,
      designation: String,
      responsibilities: String,
      technologies: String,
    },
  ],
  projects: [
    {
      name: String,
      from: String,
      till: String,
      description: String,
      responsibilities: String,
      technologies: String,
    },
  ],
  skills: [
    {
      skill: String,
      year: String,
      rating: Number,
    },
  ],
  template: String,
});

export const Resume = mongoose.model("Resume", resumeSchema);
