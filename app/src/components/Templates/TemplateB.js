import React from "react";
import AboutSection from "../Resume/AboutSection";
import SummarySection from "../Resume/SummarySection";
import EducationSection from "../Resume/EducationSection";
import ExperienceSection from "../Resume/ExperienceSection";
import ProjectSection from "../Resume/ProjectSection";
import SkillsSection from "../Resume/SkillsSection";

export default function TemplateB({ pdfContentRef, data }) {
  return (
    <div
      ref={pdfContentRef}
      className={`flex  w-full h-full bg-white  overflow-y-auto border-2`}
    >
      <div
        className={`flex flex-col  w-1/3 h-screen bg-yellow-600 text-center `}
      >
        <AboutSection state={data} color="yellow" />
        <br />
        <SkillsSection state={data} color="brown" px="0" />
      </div>

      <div className={`flex flex-col  h-full py-5 text-start `}>
        <SummarySection state={data} />
        <br />
        <EducationSection state={data} />
        <br />
        <ExperienceSection state={data} />
        <br />
        <ProjectSection state={data} />
        <br />
      </div>
    </div>
  );
}
