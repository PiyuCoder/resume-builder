import React from "react";

export default function SummarySection({ state }) {
  return (
    <div className=" text-start">
      {state?.summary && <p className=" px-3 lg:px-10 font-bold">Summary</p>}
      <p className=" px-7 lg:px-14">{state?.summary}</p>
    </div>
  );
}
