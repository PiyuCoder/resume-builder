import React from "react";
import { useResumeContext } from "../../context/context";

export default function ProjectCard({ index }) {
  const { state, updateNestedState, removeSectionState } = useResumeContext();

  const handleProgramChange = (e) => {
    updateNestedState("projects", index, e.target.name, e.target.value);
  };
  return (
    <div className=" flex px-3 py-4 flex-wrap flex-col gap-7 border-2 rounded-lg md:py-10 md:px-16">
      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Project</label>
        <input
          name="name"
          placeholder="Project name"
          value={state.projects[index].name}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">From</label>
        <input
          name="from"
          placeholder="From"
          value={state.projects[index].from}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Till</label>
        <input
          name="till"
          placeholder="till"
          value={state.projects[index].till}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Description</label>
        <textarea
          className=" h-28"
          name="description"
          placeholder="Description of the project.."
          value={state.projects[index].description}
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
          value={state.projects[index].responsibilities}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Technologies</label>
        <input
          name="technologies"
          placeholder="Technologies eg. HTML,CSS..."
          value={state.projects[index].technologies}
          onChange={handleProgramChange}
        />
      </div>

      <button
        className=" text-sm font-bold text-red-800"
        onClick={() => removeSectionState("projects", index)}
      >
        Remove
      </button>
    </div>
  );
}
