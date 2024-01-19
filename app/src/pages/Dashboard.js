import React, { useEffect, useState } from "react";
import { useResumeContext } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import TemplateA from "../assets/TemplateA.png";
import TemplateB from "../assets/TemplateB.png";
import Resume from "../components/Resume/Resume";
import Editor from "../components/Editor";
import Crafter from "./Crafter";
import { deleteResume, getUserData } from "../axios/axios";

const templateImages = {
  TemplateA,
  TemplateB,
};

export default function Dashboard() {
  const { token, currentUser, setCurrentUser, state } = useResumeContext();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false); // New state

  const jwt = sessionStorage.getItem("token");

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        const res = await getUserData(token);
        setCurrentUser(res?.data?.user);
      }
    };

    fetchUserData();
  }, [token, isResumeOpen, isEditorOpen]);

  const closeResume = () => {
    setIsResumeOpen(false);
    setSelectedTemplate(null);
    setIsEditorOpen(false); // Close the editor when closing the resume
  };

  const deleteResumeHandler = async (resumeId) => {
    const res = await deleteResume(token, resumeId);
    console.log(res);
    setIsResumeOpen(false);
  };

  return (
    <div className="w-screen h-screen flex-wrap  flex-col p-0 relative text-center">
      {!isResumeOpen && !isEditorOpen && (
        <h1 className=" w-full hidden lg:block text-xl font-bold absolute top-20 left-1/2 -translate-x-1/2">
          Your Saved Resumes
        </h1>
      )}
      {!isResumeOpen && !isEditorOpen && (
        <Link
          className=" absolute bottom-5 right-3 p-3 bg-blue-800 rounded-3xl text-white lg:right-36 lg:bottom-10"
          to={"/crafter"}
        >
          Create Resume
        </Link>
      )}
      <div className="w-screen h-full pt-20   m-0 gap-5 flex flex-wrap items-center overflow-y-auto justify-center">
        {!currentUser?.resumes?.length ? (
          <h1>You don't have any saved resumes. Let's create!</h1>
        ) : (
          <>
            {currentUser?.resumes?.map((data, index) => (
              <div
                className={`flex flex-col  ${
                  isResumeOpen ? "w-3/4" : ""
                } items-center justify-center`}
                key={index}
              >
                {isResumeOpen && selectedTemplate === data._id ? (
                  <div className="w-full h-full top-0 left-0  z-50 flex items-center justify-center lg:w-3/4 overflow-y-auto">
                    <Resume
                      dashboard
                      userData={data}
                      setIsEditorOpen={setIsEditorOpen}
                      selectedTemplate={data.template}
                    />
                    <div
                      className="absolute top-2 bg-black w-full flex items-center 
                    justify-center gap-3 text-white z-50 lg:w-24 lg:left-10 lg:top-14 lg:justify-evenly lg:h-44 lg:rounded-2xl lg:flex-col"
                    >
                      <button
                        className=" p-2 px-3 lg:min-w-full rounded-3xl bg-blue-800"
                        onClick={() => deleteResumeHandler(data._id)}
                      >
                        Delete
                      </button>
                      <button
                        className=" p-2 px-3 lg:min-w-full rounded-3xl bg-blue-800"
                        onClick={closeResume}
                      >
                        Close
                      </button>
                      <button
                        className=" p-2 px-3 lg:min-w-full rounded-3xl bg-blue-800"
                        onClick={() => {
                          setIsEditorOpen(true);
                          setIsResumeOpen(false);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ) : (
                  !isResumeOpen &&
                  !isEditorOpen && (
                    <>
                      <div
                        className="w-36 h-52 border-2 border-slate-400 overflow-y-hidden lg:hover:scale-105 lg:hover:shadow-2xl transition-all"
                        onClick={(e) => {
                          setIsResumeOpen(true);
                          setSelectedTemplate(data._id);
                        }}
                      >
                        <img
                          src={templateImages[data.template]}
                          alt={`Template ${data.template}`}
                        />
                      </div>
                      <p>{data.template}</p>
                    </>
                  )
                )}

                {isEditorOpen && selectedTemplate === data._id && (
                  <Crafter
                    dashboard
                    template={data.template}
                    data={data}
                    onClose={() => setIsEditorOpen(false)}
                  />
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
