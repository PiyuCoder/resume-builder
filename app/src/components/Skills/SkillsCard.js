import React from "react";
import { useResumeContext } from "../../context/context";

const dummy = [1, 2, 3, 4, 5];

export default function SkillsCard({ index }) {
  const { state, updateNestedState, removeSectionState } = useResumeContext();

  const handleProgramChange = (e) => {
    updateNestedState("skills", index, e.target.name, e.target.value);
  };
  return (
    <div className=" flex px-3 py-4 flex-wrap flex-col gap-7 border-2 rounded-lg md:py-10 md:px-16">
      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Skill</label>
        <input
          name="skill"
          placeholder="Skill eg. HTML"
          value={state.skills[index].skill}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">
          Total experience
        </label>
        <input
          name="year"
          placeholder="Total experience"
          value={state.skills[index].year}
          onChange={handleProgramChange}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">
          Rating (min:1 & max:5)
        </label>
        <select
          name="rating"
          placeholder="Rating"
          value={state.skills[index].rating}
          onChange={handleProgramChange}
        >
          <option value="">--Select rating--</option>
          {dummy.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>

      <button
        className=" text-sm font-bold text-red-800"
        onClick={() => removeSectionState("skills", index)}
      >
        Remove
      </button>
    </div>
  );
}
