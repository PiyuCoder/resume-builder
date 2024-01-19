import React from "react";

export default function ProjectSection({ state }) {
  return (
    <div className="px-3 lg:px-10 text-start">
      {state?.projects[0]?.name && <h1 className=" font-bold">Projects</h1>}
      {state?.projects?.map((data, i) => (
        <div className=" px-4 mb-2" key={i}>
          {data?.name && (
            <h1 className=" font-bold">{`${data?.name},     ${data?.from}-${data?.till}`}</h1>
          )}
          <p>{data?.description}</p>
          <ul className="px-4">
            {data?.responsibilities?.split("\n").map((resp, i) => (
              <li className={`${resp.length ? "list-disc" : ""}`} key={i}>
                {resp}
              </li>
            ))}
          </ul>
          {data?.technologies && <p>{`Technologies: ${data.technologies}`}</p>}
        </div>
      ))}
    </div>
  );
}
