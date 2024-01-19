import React from "react";
import { useResumeContext } from "../../context/context";

export default function ExperienceCard({ index }) {
  const { state, updateNestedState, removeSectionState } = useResumeContext();

  const handleProgramChange = (e) => {
    updateNestedState("experience", index, e.target.name, e.target.value);
  };
  return (
    <div className=" flex px-3 py-4 flex-wrap flex-col gap-7 border-2 rounded-lg md:py-10 md:px-16">
      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Company</label>
        <input
          name="company"
          placeholder="Company name"
          value={state.experience[index].company}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Designation</label>
        <input
          name="designation"
          placeholder="Designation"
          value={state.experience[index].designation}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">From</label>
        <input
          name="from"
          placeholder="From"
          value={state.experience[index].from}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Till</label>
        <input
          name="till"
          placeholder="till"
          value={state.experience[index].till}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Technologies</label>
        <input
          name="technologies"
          placeholder="Technologies eg. HTML,CSS..."
          value={state.experience[index].technologies}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">
          Responsibilities
        </label>
        <textarea
          className=" h-40"
          name="responsibilities"
          placeholder="Responsibilities"
          value={state.experience[index].responsibilities}
          onChange={handleProgramChange}
        />
      </div>

      <button
        className=" text-sm font-bold text-red-800"
        onClick={() => removeSectionState("experience", index)}
      >
        Remove
      </button>
    </div>
  );
}
