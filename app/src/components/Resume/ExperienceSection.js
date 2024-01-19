import React from "react";

export default function ExperienceSection({ state }) {
  return (
    <div className="px-3 lg:px-10 text-start">
      {state?.experience[0]?.company && (
        <h1 className=" font-bold">Experience</h1>
      )}
      {state?.experience?.map((data, i) => (
        <div className=" px-4 mb-2" key={i}>
          {data?.company && (
            <h1 className=" font-bold">{`${data?.company},     ${data?.from}-${data?.till}`}</h1>
          )}
          <h1 className=" font-bold">{data?.designation}</h1>
          <ul className=" items-center px-4">
            {data?.responsibilities?.split("\n").map((resp, i) => (
              <li className={`${resp?.length ? " list-disc" : ""}`} key={i}>
                {resp}
              </li>
            ))}
          </ul>
          {data?.technologies && (
            <p className=" font-bold">{`Technologies: ${data?.technologies}`}</p>
          )}
        </div>
      ))}
    </div>
  );
}
