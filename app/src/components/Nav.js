import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/context";

const Nav = () => {
  const { token } = useResumeContext();
  const navigate = useNavigate();

  const [loggedOut, setLoggedOut] = useState("");
  const logoutHandler = () => {
    setLoggedOut("Login");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (!storedToken) {
      setLoggedOut("Login");
    } else {
      setLoggedOut("Logout");
    }
  }, [token, loggedOut]);
  return (
    <nav className=" flex bg-blue-800 fixed w-screen px-9 h-16 items-center justify-between z-50">
      <Link to={"/"}>
        <h1 className=" font-bold italic text-2xl text-orange-600 cursor-pointer ">
          ResumeCrafter
        </h1>
      </Link>
      <ul className=" flex h-16 md:gap-24 items-center text-white font-bold ">
        <li>
          <Link
            className=" lg:hover:text-yellow-600 transition-all md:block hidden"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className=" lg:hover:text-yellow-600 transition-all md:block hidden"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className=" lg:hover:text-yellow-600 transition-all md:block hidden"
            to="/crafter"
          >
            Crafter
          </Link>
        </li>
        <li>
          <button
            className=" lg:hover:text-yellow-600 text-gray-800  transition-all bg-yellow-400 px-3 py-1 rounded-3xl"
            onClick={logoutHandler}
          >
            {loggedOut}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
