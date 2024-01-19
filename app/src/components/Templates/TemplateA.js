import React from "react";
import AboutSection from "../Resume/AboutSection";
import SummarySection from "../Resume/SummarySection";
import EducationSection from "../Resume/EducationSection";
import ExperienceSection from "../Resume/ExperienceSection";
import ProjectSection from "../Resume/ProjectSection";
import SkillsSection from "../Resume/SkillsSection";

export default function TemplateA({ pdfContentRef, data }) {
  return (
    <div
      ref={pdfContentRef}
      className={`flex flex-col w-full h-full bg-white pb-10 overflow-y-auto min-h-screen border-2`}
    >
      <AboutSection state={data} color="blue" />
      <br />
      <SummarySection state={data} />
      <br />
      <EducationSection state={data} />
      <br />
      <ExperienceSection state={data} />
      <br />
      <ProjectSection state={data} />
      <br />
      <SkillsSection state={data} color="gold" px="4" />
    </div>
  );
}
