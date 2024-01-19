import React, { useEffect, useState } from "react";
import Editor from "../components/Editor";
import Resume from "../components/Resume/Resume";
import { useResumeContext } from "../context/context";
import templateA from "../assets/TemplateA.png";
import templateB from "../assets/TemplateB.png";
import { initialState } from "../utils/initialStates";

export const templates = [
  { name: "TemplateA", image: templateA },
  { name: "TemplateB", image: templateB },
];

export default function Crafter({ dashboard, data, template, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const [isSelectorOn, setIsSelectorOn] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("TemplateA");
  const { updateState, setState } = useResumeContext();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (dashboard) {
      setIsSelectorOn(false);
      setSelectedTemplate(template);
      setState((prev) => ({
        ...prev,
        ...data,
      }));
    } else {
      setState(initialState);
    }
  }, [dashboard]);

  return (
    <div className=" w-screen h-screen flex relative pt-20">
      {!isMobile ? (
        <>
          <Editor data={data} />{" "}
          <Resume onClose={onClose} selectedTemplate={selectedTemplate} />
        </>
      ) : isMobile && isResume ? (
        <Resume onClose={onClose} selectedTemplate={selectedTemplate} />
      ) : (
        <Editor data={data} />
      )}
      {isMobile && (
        <button
          onClick={() => setIsResume((prev) => !prev)}
          className={`absolute top-16 text-sm bg-slate-400 bg-opacity-15 p-1 ${
            isResume ? " text-amber-800" : "text-blue-800"
          }  right-3`}
        >
          {`${isResume ? "Open Editor" : "Review Resume"}`}
        </button>
      )}
      {isSelectorOn && (
        <div className=" h-screen w-screen absolute top-0 bg-white bg-opacity-95 flex  flex-wrap items-center justify-center gap-3 flex-col">
          <h1 className=" text-xl font-bold">Choose Template</h1>
          <div className="flex  flex-wrap items-center justify-center gap-3">
            {templates.map((template, i) => (
              <div
                key={i}
                className=" flex flex-col items-center justify-center lg:hover:scale-105 transition-all cursor-pointer"
                onClick={() => {
                  setSelectedTemplate(template.name);
                  updateState("template", template.name);
                  setIsSelectorOn(false);
                }}
              >
                <div className=" w-36 h-52 border-2 border-slate-400 overflow-y-hidden ">
                  <img src={template.image} />
                </div>
                <p>{template.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
