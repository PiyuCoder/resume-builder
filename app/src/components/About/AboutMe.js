import React, { useEffect, useState } from "react";
import { useResumeContext } from "../../context/context";

export default function AboutMe({ data }) {
  const { state, updateState } = useResumeContext();
  const [resumeData, setResumeData] = useState();

  // useEffect(()=>{
  //   if(data._id){
  //     setResumeData(data)
  //   }else{
  //     setResumeData(data)
  //   }
  // },[])

  return (
    <div className=" flex px-3 py-4 flex-wrap flex-col gap-7 border-2 rounded-lg md:py-10 md:px-16">
      <h1 className=" text-2xl font-bold">About Me</h1>
      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Full Name</label>
        <input
          placeholder="Full name"
          value={state?.name}
          onChange={(e) => updateState("name", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Phone number</label>
        <input
          placeholder="Phone no."
          value={state?.phone}
          onChange={(e) => updateState("phone", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">Email</label>
        <input
          placeholder="Email"
          value={state?.email}
          onChange={(e) => updateState("email", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">
          Current designation
        </label>
        <input
          placeholder="Current designation"
          value={state?.currDesignation}
          onChange={(e) => updateState("currDesignation", e.target.value)}
        />
      </div>

      <div className=" flex flex-col">
        <label className=" m-0 p-0 text-xs font-semibold">
          Professional summary
        </label>
        <textarea
          className=" h-36"
          placeholder="Summary"
          value={state?.summary}
          onChange={(e) => updateState("summary", e.target.value)}
        />
      </div>
    </div>
  );
}
