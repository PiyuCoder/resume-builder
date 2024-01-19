import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../axios/axios";
import { useResumeContext } from "../context/context";

export default function Register({ setIsRegistered, message, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setToken } = useResumeContext();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await register(formData);
      console.log("register page", res);
      if (res?.data?.success) {
        sessionStorage.setItem("user", JSON.stringify(res?.data?.newUser));
        sessionStorage.setItem("token", res?.data?.token);
        setToken(res?.data?.token);
        setIsLoggedIn(true);
        setIsRegistered(true);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
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
        <h1 className=" text-2xl font-bold text-white">Register here</h1>
        <input
          placeholder="Full name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
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
          Register
        </button>
        <div>
          <p className=" text-white">
            Already registerd?{" "}
            <Link
              onClick={() => (!message ? "" : setIsRegistered(true))}
              className=" font-bold underline"
              to={!message ? "/login" : ""}
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
