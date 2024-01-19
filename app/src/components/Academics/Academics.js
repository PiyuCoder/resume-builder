import React from "react";
import { useResumeContext } from "../../context/context";
import { academicsInitialState } from "../../utils/initialStates";
import AcademicsCard from "./AcademicsCard";

export default function Academics() {
  const { state, addNewSectionState } = useResumeContext();
  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" text-2xl font-bold">Academics</h1>
      {state.academics.map((data, i) => (
        <AcademicsCard key={i} index={i} />
      ))}

      <button
        className=" text-lg font-bold text-blue-800"
        onClick={() => addNewSectionState("academics", academicsInitialState)}
      >
        Add Education +
      </button>
    </div>
  );
}
