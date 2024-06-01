import axios from "axios";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PageTransition from "src/Animations/PageTransition";
import { MyContext } from "src/Context/ListingDataContext";

const Login = ({ setIfLogin }) => {
  const ref = useRef();
  const [error, setError] = useState({
    username: "",
    password: "",
    credentials: "",
  });

  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUserDetails } = useContext(MyContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.username.value && !user.password.value) {
      setError({
        username: "Please enter a username",
        password: "Please enter a password",
        credentials: "",
      });
      return;
    } else if (!user.username.value) {
      setError({
        username: "Please enter a username",
        password: "",
        credentials: "",
      });
      return;
    } else if (!user.password.value) {
      setError({
        username: "",
        password: "Please enter a password",
        credentials: "",
      });
      return;
    } else {
      setError({
        username: "",
        password: "",
        credentials: "",
      });
    }

    try {
      const baseUrl = `http://siddiqiventures-001-site3.ktempurl.com/login_api.aspx`;

      const url = `${baseUrl}?UNAME=${user.username.value}&PWD=${user.password.value}`;
      setLoading(true);
      // Send the POST request using Axios
      const response = await axios.post(url);

      if (response.data.length > 0 && response.status === 200) {
        localStorage.setItem("ifLogin", true);
        setIfLogin(true);
        setLoading(false);
        setUserDetails(response?.data[0]);
        localStorage.setItem("userDetails", JSON.stringify(response?.data[0]));
        history("/");
      } else {
        setError({
          username: "",
          password: "",
          credentials: "Username or password incorrect",
        });

        setLoading(false);
      }
    } catch (error) {
      setError({
        username: "",
        password: "",
        credentials: "Server Error",
      });

      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-[350px] md:w-[450px] flex justify-center flex-col items-center ">
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
                {loading ? "Loading.." : "Sign In"}
              </button>
              <a
                className="inline-block bg-custom-heading-color text-white hover:bg- focus:outline-none focus:shadow-outline font-semibold text-xs md:text-sm p-2 rounded w-full text-center uppercase"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <NavLink
              to="/registration"
              className="flex justify-center mt-4 bg-custom-grey hover:bg-gray-950 text-white font-bold p-2 uppercase text-center rounded w-full text-xs md:text-sm focus:outline-none focus:shadow-outline"
            >
              Don't have an account? Create now!
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

export default Login;
