import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen pt-20 px-3 flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-500 text-white">
      {/* Hero Section */}
      <div className="text-center p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Craft Your Perfect Resume
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Stand out with a professionally crafted resume.
        </p>
        <Link to="/crafter">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full">
            Get Started
          </button>
        </Link>
      </div>

      {/* Additional Content */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8">
          Crafting your resume with us comes with several benefits that set us
          apart. Here's why you should choose ResumeCrafter:
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="m-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Easy to Use
            </h3>
            <p>
              Our platform is designed to be user-friendly, ensuring a smooth
              and hassle-free experience in creating your resume.
            </p>
          </div>
          <div className="m-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Customizable
            </h3>
            <p>
              Tailor your resume to match your unique skills and experiences.
              Our customizable templates allow you to express yourself
              professionally.
            </p>
          </div>
          <div className="m-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Professional
            </h3>
            <p>
              Impress employers with a polished and professional resume. Our
              templates are designed to showcase your qualifications
              effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
