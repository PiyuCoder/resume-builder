import React from "react";
import { useResumeContext } from "../../context/context";
import { experienceInitialState } from "../../utils/initialStates";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const { state, addNewSectionState } = useResumeContext();
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-2xl font-bold">Experience</h1>
      {state.experience.map((data, i) => (
        <ExperienceCard key={i} index={i} />
      ))}

      <button
        className=" text-lg font-bold text-blue-800"
        onClick={() => addNewSectionState("experience", experienceInitialState)}
      >
        Add Experience +
      </button>
    </div>
  );
}
