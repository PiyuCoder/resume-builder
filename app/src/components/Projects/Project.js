import React from "react";
import { useResumeContext } from "../../context/context";
import { projectInitialState } from "../../utils/initialStates";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const { state, addNewSectionState } = useResumeContext();
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-2xl font-bold">Projects</h1>
      {state.projects.map((_, i) => (
        <ProjectCard key={i} index={i} />
      ))}

      <button
        className=" text-lg font-bold text-blue-800"
        onClick={() => addNewSectionState("projects", projectInitialState)}
      >
        Add Project +
      </button>
    </div>
  );
}
