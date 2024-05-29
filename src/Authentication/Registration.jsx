import axios from "axios";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PageTransition from "src/Animations/PageTransition";

const Registration = ({ setIfLogin }) => {
  const ref = useRef();
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    credentials: "",
  });

  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.username.value && !user.password.value && !user.email.value) {
      setError({
        username: "Please enter a username",
        email: "Please enter an email",
        password: "Please enter a password",
        credentials: "",
      });
      return;
    } else if (!user.username.value) {
      setError({
        username: "Please enter a username",
        email: "",
        password: "",
        credentials: "",
      });
      return;
    } else if (!user.password.value) {
      setError({
        username: "",
        email: "",
        password: "Please enter a password",
        credentials: "",
      });
      return;
    } else if (!user.email.value) {
      setError({
        username: "",
        email: "Please enter an email",
        password: "Please enter a password",
        credentials: "",
      });
      return;
    } else {
      setError({
        username: "",
        email: "",
        password: "",
        credentials: "",
      });
    }

    try {
      const page = "create_account.aspx";
      const baseUrl = `http://siddiqiventures-001-site3.ktempurl.com/${page}`;
      const proxyUrl = "https://corsproxy.io/";

      const url = `${proxyUrl}?${encodeURIComponent(baseUrl)}?USERID=${
        user.username.value
      }&USERNAME=${user.username.value}&PASSCODE=${user.password.value}`;
      setLoading(true);
      // Send the POST request using Axios
      const response = await axios.post(url);

      if (
        response.data === "Account Created Successfully." &&
        response.status === 200
      ) {
        localStorage.setItem("ifLogin", true);
        setSuccessMsg(response.data);
        setLoading(false);
        history("/login");
      } else {
        setError({
          username: "",
          email: "",
          password: "",
          credentials: "Username or password incorrect",
        });

        setLoading(false);
      }
    } catch (error) {
      setError({
        username: "",
        password: "",
        email: "",
        credentials: "Server Error",
      });

      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-[350px] md:w-[450px] flex justify-center flex-col items-center ">
          <h2 className="text-5xl my-5 uppercase font-bold">Registration</h2>
          <form
            className="bg-white w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded px-4 md:px-8 pt-6 pb-8 mb-4"
            ref={ref}
            onSubmit={handleSubmit}
          >
            {error.credentials && (
              <p className="text-red-500 font-bold text-sm mb-4 border border-red-500 p-2 rounded">
                {error.credentials}!
              </p>
            )}
            {successMsg && (
              <p className="text-green-500 font-bold text-sm mb-4 border border-green-500 p-2 rounded">
                {successMsg}!
              </p>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`shadow appearance-none ${
                  error.username ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="username"
                id="username"
                type="text"
                placeholder="Username"
              />
              {error.username && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.username}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none ${
                  error.email ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="email"
                id="email"
                type="email"
                placeholder="Email"
              />
              {error.email && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.email}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border ${
                  error.password ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                name="password"
                type="password"
                placeholder="******************"
              />
              {error.password && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-2">
              <button
                className="bg-blue-500 hover:bg-custom-dark-blue text-white font-bold p-2 uppercase text-center rounded w-full text-xs md:text-sm focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? "Loading.." : "Sign Up"}
              </button>
            </div>

            <NavLink
              to="/login"
              className="flex justify-center mt-4 bg-custom-grey hover:bg-gray-950 text-white font-bold p-2 uppercase text-center rounded w-full text-xs md:text-sm focus:outline-none focus:shadow-outline"
            >
              Already have an account? Login now!
            </NavLink>
          </form>
          {/* footer */}
          <p className="text-center text-gray-500 text-xs">
            ©2024 IFBC. All rights reserved.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Registration;
