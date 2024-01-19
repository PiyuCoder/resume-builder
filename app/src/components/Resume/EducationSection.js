import React from "react";

export default function EducationSection({ state }) {
  return (
    <div className=" px-3 lg:px-10 text-start">
      {state?.academics[0]?.program && (
        <h1 className=" font-bold">Education</h1>
      )}
      {state?.academics?.map((data, i) => (
        <div className=" px-4 mb-1" key={i}>
          <h1>{data?.program}</h1>

          <h1>{`${data?.course} ${data?.institute} ${data?.year} `}</h1>
        </div>
      ))}
    </div>
  );
}
