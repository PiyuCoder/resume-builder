import React, { useState } from "react";
import { useResumeContext } from "../../context/context";
import { eduData } from "../../utils/eduData";

export default function AcademicsCard({ index }) {
  const { state, updateNestedState, removeSectionState } = useResumeContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProgramChange = (e) => {
    updateNestedState("academics", index, e.target.name, e.target.value);
    console.log("currInd", currentIndex);
    if (e.target.name === "program") {
      setCurrentIndex(
        eduData.length - 1 &&
          eduData.indexOf(eduData.find((ed) => ed.program === e.target.value))
      );
    }
  };
  return (
    <div className=" flex px-3 py-4 flex-wrap flex-col gap-7 border-2 rounded-lg md:py-10 md:px-16">
      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Program</label>
        <select
          name="program"
          value={state.academics[index].program}
          onChange={handleProgramChange}
        >
          <option value="">--Select Program--</option>
          {eduData.map((ed, i) => (
            <option key={i} value={ed.program}>
              {ed.program}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="m-0 p-0 text-xs font-semibold">Course</label>
        <select
          name="course"
          value={state.academics[index].course}
          onChange={handleProgramChange}
        >
          <option value="">--Select Course--</option>
          {eduData
            .find((ed) => ed.program === state.academics[index].program)
            ?.courses?.map((course, i) => (
              <option key={i} value={course}>
                {course}
              </option>
            ))}
        </select>
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Institute</label>
        <input
          name="institute"
          value={state.academics[index].institute}
          onChange={handleProgramChange}
          placeholder="Institute name"
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Passing year</label>
        <input
          name="year"
          value={state.academics[index].year}
          onChange={handleProgramChange}
          placeholder="Passing year"
        />
      </div>
      <button
        className=" text-sm font-bold text-red-800"
        onClick={() => removeSectionState("academics", index)}
      >
        Remove
      </button>
    </div>
  );
}
