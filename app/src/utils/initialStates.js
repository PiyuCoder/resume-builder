export const academicsInitialState = {
  program: "",
  course: "",
  year: "",
  institute: "",
};

export const experienceInitialState = {
  company: "",
  from: "",
  till: "",
  designation: "",
  responsibilities: "",
  technologies: "",
};

export const projectInitialState = {
  name: "",
  from: "",
  till: "",
  description: "",
  responsibilities: "",
  technologies: "",
};

export const skillsInitialState = { skill: "", year: "", rating: 0 };

export const initialState = {
  template: "",
  name: "",
  phone: "",
  email: "",
  currDesignation: "",
  summary: "",
  academics: [{ program: "", course: "", year: "", institute: "" }],
  experience: [
    {
      company: "",
      from: "",
      till: "",
      designation: "",
      responsibilities: "",
      technologies: "",
    },
  ],
  projects: [
    {
      name: "",
      from: "",
      till: "",
      description: "",
      responsibilities: "",
      technologies: "",
    },
  ],
  skills: [{ skill: "", year: "", rating: 0 }],
};
