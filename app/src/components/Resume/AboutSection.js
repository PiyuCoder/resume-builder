import React from "react";

export default function AboutSection({ state, color }) {
  return (
    <div
      className={` bg-${color}-900 w-full py-3 px-1 h-36 text-white flex flex-col items-center justify-center `}
    >
      <div
        className={`${
          state?._id ? " " : ""
        } flex flex-col items-center justify-center`}
      >
        <h1 className={`font-bold text-lg`}>{state?.name}</h1>
        <p>{state?.currDesignation}</p>
        <p className=" text-xs scale-75 break-words lg:text-sm">
          {state?.phone}
        </p>
        <p className=" text-xs scale-75 break-words lg:text-sm">
          {state?.email}
        </p>
      </div>
    </div>
  );
}
