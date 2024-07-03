import axios from "axios";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import PageTransition from "src/Animations/PageTransition";
import { setToken, setUserDetails } from "src/Redux/listingReducer";

const Login = () => {
  const ref = useRef();
  const [error, setError] = useState({
    username: "",
    password: "",
    credentials: "",
  });

  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getUserDetails = async (token) => {
    const url =
      "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/users/userdata";

    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Handle successful response
      if (response.status === 200) {
        const someUserDetails = response.data;
        return {
          docId: someUserDetails.docId,
          firstName: someUserDetails.firstName,
          lastName: someUserDetails.lastName,
          email: someUserDetails.email,
          profileImage: someUserDetails.profileImage,
          userType: someUserDetails.userType,
        };
      } else {
        console.log("No user details found");
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching data:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    try {
      const baseUrl = `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/login`;
      const requestData = {
        email: user.username.value,
        password: user.password.value,
      };

      setLoading(true);
      const response = await axios.post(baseUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setLoading(false);
        const userToken = response.data.token;
        const someUserDetails = await getUserDetails(userToken);
        localStorage.setItem("token", userToken);
        dispatch(setToken(true));
        dispatch(setUserDetails(someUserDetails));
        setUserDetails(someUserDetails);
        setLoading(false);
        history("/");
      }
    } catch (error) {
      // HELLO
      if (error?.response?.status === 401) {
        setError({
          username: "",
          password: "",
          credentials: "Username or password incorrect",
        });
        setLoading(false);
        return;
      }
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
              <NavLink
                className="inline-block bg-custom-heading-color text-white hover:bg- focus:outline-none focus:shadow-outline font-semibold text-xs md:text-sm p-2 rounded w-full text-center uppercase"
                to="/forgot-password"
              >
                Forgot Password?
              </NavLink>
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
