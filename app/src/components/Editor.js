import React from "react";
import AboutMe from "./About/AboutMe";
import Academics from "./Academics/Academics";
import Experience from "./Experience/Experience";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";

export default function Editor() {
  return (
    <div className="w-screen px-2 py-5   overflow-y-auto lg:w-1/2  flex flex-col xl:px-28 xl:py-10 gap-4">
      <h1 className=" text-2xl font-bold text-center md:text-start">
        Create Your Resume
      </h1>
      <AboutMe />

      <br />
      <Academics />
      <br />

      <Experience />

      <br />
      <Project />
      <br />
      <Skills />
    </div>
  );
}
