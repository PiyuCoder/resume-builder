import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../axios/axios";
import { useResumeContext } from "../context/context";

export default function Login({ message, setIsLoggedIn, setIsRegistered }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setToken, token } = useResumeContext();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      console.log("login page", res);
      if (res.data.success) {
        // sessionStorage.setItem("user", JSON.stringify(res?.data?.user));
        sessionStorage.setItem("token", res?.data?.token);
        setToken(res?.data?.token);
        if (!message) navigate("/dashboard");
        else setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error.message);
    }
    setFormData({ email: "", password: "" });
  };

  useEffect(() => {
    if (token) {
      //   navigate("/dashboard");
    }
  }, []);
  return (
    <div
      className={` flex flex-col items-center justify-center ${
        message
          ? " absolute bg-black bg-opacity-80 w-full h-full"
          : "w-screen h-screen "
      }`}
    >
      <h1>{message}</h1>
      <form
        className=" flex flex-col w-80 p-10 gap-4 bg-blue-800 text-center rounded-2xl"
        onSubmit={submitHandler}
      >
        <h1 className=" text-2xl font-bold text-white">Login here</h1>

        <input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" border-2 p-2 rounded-3xl mt-2 text-white active:bg-white active:text-blue-800"
        >
          Login
        </button>
        <div>
          <p className=" text-white">
            New user?{" "}
            <Link
              onClick={() => (!message ? "" : setIsRegistered(false))}
              className=" font-bold underline"
              to={!message ? "/register" : ""}
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
