import React, { useEffect, useRef, useState } from "react";
import { useResumeContext } from "../../context/context";

import jsPDF from "jspdf";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { updateResume, uploadResume } from "../../axios/axios";
import TemplateA from "../Templates/TemplateA";
import TemplateB from "../Templates/TemplateB";
import { useNavigate } from "react-router-dom";

export default function Resume({
  dashboard,
  userData,
  selectedTemplate,
  onClose,
}) {
  const { state, token } = useResumeContext();
  const pdfContentRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isRegistered, setIsRegistered] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState();

  // const storedResume = JSON.parse(sessionStorage.getItem("resume"));

  useEffect(() => {
    if (dashboard) {
      setData(userData);
    } else {
      setData(state);
    }
  }, [state]);

  const saveResume = async () => {
    if (!token) {
      setIsLoggedIn(false);
    } else {
      if (state._id) {
        const res = await updateResume(token, state);
        console.log(res);

        if (res?.data?.success) {
          navigate("/dashboard");
        }
      } else {
        const res = await uploadResume(token, state);
        console.log(res);
        if (res?.data?.success) {
          navigate("/dashboard");
        }
      }
    }
    if (dashboard) onClose();
  };

  const generatePDF = async () => {
    if (!token) {
      setIsLoggedIn(false);
      // sessionStorage.setItem("resume", JSON.stringify(state));
    } else {
      if (state._id) {
        const res = await updateResume(token, state);
        console.log(res);
      } else {
        const res = await uploadResume(token, state);
        console.log(res);
      }

      const pdfContent = pdfContentRef.current;
      const pdf = new jsPDF("p", "mm", "a4");

      pdf.internal.pageSize.height = 297 + 20; // Assuming A4 size, increase by 20 units

      const contentWidth = pdfContent.clientWidth;
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const scale = pdfWidth / contentWidth;

      // Explicitly set the font size in the CSS
      pdfContent.style.fontSize = "12px";

      try {
        await pdf.html(pdfContent, {
          html2canvas: {
            scale: scale,
            onclone: (clonedDoc) => {
              // Check if the content overflows
              const contentHeight = pdfContent.scrollHeight;
              const visibleHeight = pdfContent.offsetHeight;

              let currentPosition = 0;

              // Add pages as long as there is overflow
              while (currentPosition + visibleHeight < contentHeight) {
                pdf.addPage();
                currentPosition += visibleHeight;
              }
            },
          },
        });
        pdf.save("resume.pdf");
      } finally {
        pdfContent.style.fontSize = "";
        navigate("/dashboard");
      }
    }
  };

  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case "TemplateA":
        return <TemplateA data={data} pdfContentRef={pdfContentRef} />;
      case "TemplateB":
        return <TemplateB data={data} pdfContentRef={pdfContentRef} />;

      default:
        return null;
    }
  };

  return (
    <div
      className={`${
        dashboard ? " lg:px-0 lg:w-full shadow-xl" : "lg:px-24 lg:w-1/2"
      } w-screen px-2 flex flex-col  bg-slate-800 pt-20 py-4 text-xs relative 
      items-center justify-center  `}
    >
      {!isLoggedIn && (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          message="Login to download this Resume for free."
          setIsRegistered={setIsRegistered}
        />
      )}

      {!isRegistered && (
        <Register
          setIsRegistered={setIsRegistered}
          message="Register to download this Resume for free."
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {renderSelectedTemplate()}

      <div className=" flex p-3 gap-3">
        <button className=" p-2 bg-blue-800" onClick={generatePDF}>
          Download PDF
        </button>
        <button className=" p-2 bg-blue-800" onClick={saveResume}>
          Save & Close
        </button>
      </div>
    </div>
  );
}
