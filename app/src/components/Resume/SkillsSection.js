import React from "react";
import { FaStar } from "react-icons/fa";

const dummy = [1, 2, 3, 4, 5];

export default function SkillsSection({ state, color, px }) {
  return (
    <div className={`px-${px} lg:px-10 text-start`}>
      {state?.skills[0]?.skill && <h1 className=" font-bold">Skills</h1>}
      {state?.skills?.map((data, i) => (
        <div className=" px-1 mb-2" key={i}>
          <div className=" flex flex-wrap gap-1">
            <h1>{`${data?.skill}`}</h1>
            {data?.rating !== 0 && (
              <div className=" flex gap-1 items-center">
                {dummy.map((star, i) => (
                  <div className=" flex" key={i}>
                    <FaStar color={`${i < data?.rating ? color : "gray"}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* {data?.year && <p>{`Total experience: ${data?.year}`}</p>} */}
        </div>
      ))}
    </div>
  );
}
