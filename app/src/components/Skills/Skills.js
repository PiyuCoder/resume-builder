import React from "react";
import { useResumeContext } from "../../context/context";
import { skillsInitialState } from "../../utils/initialStates";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  const { state, addNewSectionState } = useResumeContext();
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-2xl font-bold">Skills</h1>
      {state.skills.map((data, i) => (
        <SkillsCard key={i} index={i} />
      ))}

      <button
        className=" text-lg font-bold text-blue-800"
        onClick={() => addNewSectionState("skills", skillsInitialState)}
      >
        Add Skills +
      </button>
    </div>
  );
}
