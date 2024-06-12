import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "src/Animations/PageTransition";

const Registration = ({ setIfLogin }) => {
  const ref = useRef();
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    credentials: "",
  });
  const [formFields, setFormFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    websiteurl: "",
    linkedinurl: "",
    meetinglink: "",
    companyname: "",
    companyphonenumber: "",
    companyaddress: "",
    city: "",
    zippostalcode: "",
    unitsuite: "",
    notes: "",
    shortdescription: "",
    consulting: "",
    franchiseindustryfocus: "",
    businessbroker: "",
    registeredin: "",
    openforgroup: "",
    password: "",
    confirmpassword: "",
    territorycheck: "",
    disablelogo: "",
    disablecover: "",
    disableprofile: "",
    disablebio: "",
    hidename: "",
    broker: "",
    allcandidates: "",
    allpastclient: "",
    sharefranchise: "",
    leademail: "",
    fbabadges: "",
    usertype: "",
    profileimage: "",
    coverimage: "",
  });
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateUsername = (username) => {
    const re = /^[A-Za-z][A-Za-z0-9]*$/;
    return re.test(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("INSIDE");
    try {
      const requestData = {
        firstname: formFields.firstname ?? "",
        lastname: formFields.lastname ?? "",
        email: formFields.email ?? "",
        websiteurl: formFields.websiteurl ?? "",
        linkedinurl: formFields.linkedinurl ?? "",
        meetinglink: formFields.meetinglink ?? "",
        companyname: formFields.companyname ?? "",
        companyphonenumber: formFields.companyphonenumber ?? "",
        companyaddress: formFields.companyaddress ?? "",
        city: formFields.city ?? "",
        zippostalcode: formFields.zippostalcode ?? "",
        unitsuite: formFields.unitsuite ?? "",
        notes: formFields.notes ?? "",
        shortdescription: formFields.shortdescription ?? "",
        consulting: formFields.consulting ?? "",
        franchiseindustryfocus: formFields.franchiseindustryfocus ?? "",
        businessbroker: formFields.businessbroker ?? "",
        registeredin: formFields.registeredin ?? "",
        openforgroup: formFields.openforgroup ?? "",
        password: formFields.password ?? "",
        confirmpassword: formFields.confirmpassword ?? "",
        territorycheck: formFields.territorycheck ?? "",
        disablelogo: formFields.disablelogo ?? "",
        disablecover: formFields.disablecover ?? "",
        disableprofile: formFields.disableprofile ?? "",
        disablebio: formFields.disablebio ?? "",
        hidename: formFields.hidename ?? "",
        broker: formFields.broker ?? "",
        allcandidates: formFields.allcandidates ?? "",
        allpastclient: formFields.allpastclient ?? "",
        sharefranchise: formFields.sharefranchise ?? "",
        leademail: formFields.leademail ?? "",
        fbabadges: formFields.fbabadges ?? "",
        usertype: "N",
        profileimage: formFields.profileimage ?? "",
        coverimage: formFields.coverimage ?? "",
      };
      const baseUrl = `http://siddiqiventures-001-site3.ktempurl.com/new_account.aspx`;
      console.log(requestData);
      setLoading(true);

      // Send the POST request using Axios
      // const response = await axios.post(baseUrl, requestData, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      if (
        response.data === "Account Created Successfully." &&
        response.status === 200
      ) {
        localStorage.setItem("ifLogin", true);
        setSuccessMsg({ success: response.data });
        setLoading(false);
        setTimeout(() => {
          history("/login");
        }, 3000);
      } else if (response.data === "Account Already Exist.") {
        setSuccessMsg({ alreadyexist: response.data });
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
      <div className="flex justify-center flex-col items-center ">
        <h2 className="text-5xl my-5 uppercase font-bold text-custom-heading-color">
          Registration
        </h2>
        <form
          className=" rounded px-3 md:px-8 pt-6 pb-8 mb-4  w-[65%] mx-auto"
          ref={ref}
        >
          {error.credentials && (
            <p className="text-red-500 font-bold text-sm mb-4 border border-red-500 p-2 rounded">
              {error.credentials}!
            </p>
          )}
          {successMsg && successMsg.alreadyexist && (
            <p className="text-red-500 font-bold text-sm mb-4 border border-red-500 p-2 rounded">
              {successMsg.alreadyexist}!
            </p>
          )}
          {successMsg && successMsg.success && (
            <p className="text-green-500 font-bold text-sm mb-4 border border-green-500 p-2 rounded">
              {successMsg.success}!
            </p>
          )}

          <div className="flex justify-center items-center">
            <h2 className="text-2xl my-5 uppercase font-bold text-custom-heading-color">
              Your FBA Profile Information
            </h2>
          </div>

          <div className="flex gap-2">
            {/* First Name */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className={`shadow appearance-none ${
                  error.firstname ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="firstname"
                id="firstname"
                type="text"
                placeholder="First Name"
                value={formFields.firstname}
                onChange={handleInputChange}
              />
              {error.firstname && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.firstname}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className={`shadow appearance-none ${
                  error.lastname ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Last Name"
                value={formFields.lastname}
                onChange={handleInputChange}
              />
              {error.lastname && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.lastname}
                </p>
              )}
            </div>
            {/* Last Name */}

            {/* Email */}
            <div className="mb-4 w-full">
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
                value={formFields.email}
                onChange={handleInputChange}
              />
              {error.email && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.email}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* LinkedIn URL */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="linkedinurl"
              >
                LinkedIn URL
              </label>
              <input
                className={`shadow appearance-none ${
                  error.linkedinurl ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="linkedinurl"
                id="linkedinurl"
                type="url"
                placeholder="LinkedIn URL"
                value={formFields.linkedinurl}
                onChange={handleInputChange}
              />
              {error.linkedinurl && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.linkedinurl}
                </p>
              )}
            </div>

            {/* Meeting Link */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="meetinglink"
              >
                Meeting Link
              </label>
              <input
                className={`shadow appearance-none ${
                  error.meetinglink ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="meetinglink"
                id="meetinglink"
                type="url"
                placeholder="Meeting Link"
                value={formFields.meetinglink}
                onChange={handleInputChange}
              />
              {error.meetinglink && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.meetinglink}
                </p>
              )}
            </div>
            {/* Website URL */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="websiteurl"
              >
                Website URL
              </label>
              <input
                className={`shadow appearance-none ${
                  error.websiteurl ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="websiteurl"
                id="websiteurl"
                type="url"
                placeholder="Website URL"
                value={formFields.websiteurl}
                onChange={handleInputChange}
              />
              {error.websiteurl && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.websiteurl}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-around">
            <div class="w-full max-w-xs items-center gap-1.5">
              <label class="text-sm text-custom-heading-color font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Profile Picture
              </label>
              <input
                onChange={handleInputChange}
                name="profileimage"
                class="flex w-full rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                type="file"
                id="picture"
              />
            </div>
            <div class="w-full max-w-xs items-center gap-1.5">
              <label class="text-sm text-custom-heading-color font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Cover Picture
              </label>
              <input
                onChange={handleInputChange}
                name="coverimage"
                class="flex w-full rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium"
                type="file"
                id="picture"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="text-2xl my-5 uppercase font-bold text-custom-heading-color">
              Your Company Information
            </h2>
          </div>

          <div className="flex gap-2">
            {/* Company Name */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyname"
              >
                Company Name
              </label>
              <input
                className={`shadow appearance-none ${
                  error.companyname ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="companyname"
                id="companyname"
                type="text"
                placeholder="Company Name"
                value={formFields.companyname}
                onChange={handleInputChange}
              />
              {error.companyname && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.companyname}
                </p>
              )}
            </div>

            {/* Company Phone Number */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyphonenumber"
              >
                Company Phone Number
              </label>
              <input
                className={`shadow appearance-none ${
                  error.companyphonenumber ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="companyphonenumber"
                id="companyphonenumber"
                type="tel"
                placeholder="Company Phone Number"
                value={formFields.companyphonenumber}
                onChange={handleInputChange}
              />
              {error.companyphonenumber && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.companyphonenumber}
                </p>
              )}
            </div>

            {/* Company Address */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyaddress"
              >
                Company Address
              </label>
              <input
                className={`shadow appearance-none ${
                  error.companyaddress ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="companyaddress"
                id="companyaddress"
                type="text"
                placeholder="Company Address"
                value={formFields.companyaddress}
                onChange={handleInputChange}
              />
              {error.companyaddress && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.companyaddress}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* City */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className={`shadow appearance-none ${
                  error.city ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="city"
                id="city"
                type="text"
                placeholder="City"
                value={formFields.city}
                onChange={handleInputChange}
              />
              {error.city && (
                <p className="text-red-500 text-xs italic mt-2">{error.city}</p>
              )}
            </div>
            {/* Zip/Postal Code */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="zippostalcode"
              >
                Zip/Postal Code
              </label>
              <input
                className={`shadow appearance-none ${
                  error.zippostalcode ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="zippostalcode"
                id="zippostalcode"
                type="text"
                placeholder="Zip/Postal Code"
                value={formFields.zippostalcode}
                onChange={handleInputChange}
              />
              {error.zippostalcode && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.zippostalcode}
                </p>
              )}
            </div>

            {/* Unit/Suite */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="unitsuite"
              >
                Unit/Suite
              </label>
              <input
                className={`shadow appearance-none ${
                  error.unitsuite ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="unitsuite"
                id="unitsuite"
                type="text"
                placeholder="Unit/Suite"
                value={formFields.unitsuite}
                onChange={handleInputChange}
              />
              {error.unitsuite && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.unitsuite}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Notes */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="notes"
              >
                Notes
              </label>
              <input
                className={`shadow appearance-none ${
                  error.notes ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="notes"
                id="notes"
                type="text"
                placeholder="Notes"
                value={formFields.notes}
                onChange={handleInputChange}
              />
              {error.notes && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.notes}
                </p>
              )}
            </div>
          </div>
          <div>
            {/* Short Description */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="shortdescription"
              >
                Short Description
              </label>
              <input
                className={`shadow appearance-none ${
                  error.shortdescription ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="shortdescription"
                id="shortdescription"
                type="text"
                placeholder="Short Description"
                value={formFields.shortdescription}
                onChange={handleInputChange}
              />
              {error.shortdescription && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.shortdescription}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="text-2xl my-5 uppercase font-bold text-custom-heading-color">
              Your Experience
            </h2>
          </div>
          <div className="flex gap-2">
            {/* Consulting */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="consulting"
              >
                Consulting
              </label>
              <input
                className={`shadow appearance-none ${
                  error.consulting ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="consulting"
                id="consulting"
                type="text"
                placeholder="Consulting"
                value={formFields.consulting}
                onChange={handleInputChange}
              />
              {error.consulting && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.consulting}
                </p>
              )}
            </div>

            {/* Franchise Industry Focus */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="franchiseindustryfocus"
              >
                Franchise Industry Focus
              </label>
              <input
                className={`shadow appearance-none ${
                  error.franchiseindustryfocus ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="franchiseindustryfocus"
                id="franchiseindustryfocus"
                type="text"
                placeholder="Franchise Industry Focus"
                value={formFields.franchiseindustryfocus}
                onChange={handleInputChange}
              />
              {error.franchiseindustryfocus && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.franchiseindustryfocus}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {/* Business Broker */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="businessbroker"
              >
                Business Broker
              </label>
              <input
                className={`shadow appearance-none ${
                  error.businessbroker ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="businessbroker"
                id="businessbroker"
                type="text"
                placeholder="Business Broker"
                value={formFields.businessbroker}
                onChange={handleInputChange}
              />
              {error.businessbroker && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.businessbroker}
                </p>
              )}
            </div>

            {/* Registered In */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="registeredin"
              >
                Registered In
              </label>
              <input
                className={`shadow appearance-none ${
                  error.registeredin ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="registeredin"
                id="registeredin"
                type="text"
                placeholder="Registered In"
                value={formFields.registeredin}
                onChange={handleInputChange}
              />
              {error.registeredin && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.registeredin}
                </p>
              )}
            </div>
            {/* Open For Group */}
            <div className="mb-4 w-full flex flex-col items-center justify-center">
              <label
                className=" text-gray-700 text-sm font-bold mb-2 flex items-center"
                htmlFor="openforgroup"
              >
                {" "}
                <input
                  className={`shadow appearance-none ${
                    error.openforgroup ? "border-red-500" : ""
                  } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  name="openforgroup"
                  id="openforgroup"
                  type="checkbox"
                  placeholder="Open For Group"
                  value={formFields.openforgroup}
                  onChange={handleInputChange}
                />
                Open For Group
              </label>

              {error.openforgroup && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.openforgroup}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="text-2xl my-5 uppercase font-bold text-custom-heading-color">
              Your Settings
            </h2>
          </div>
          <div className="flex gap-2">
            {/* Territory Check */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="territorycheck"
              >
                Territory Check
              </label>
              <input
                className={`shadow appearance-none ${
                  error.territorycheck ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="territorycheck"
                id="territorycheck"
                type="text"
                placeholder="Territory Check"
                value={formFields.territorycheck}
                onChange={handleInputChange}
              />
              {error.territorycheck && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.territorycheck}
                </p>
              )}
            </div>
            {/* Disable Logo */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="disablelogo"
              >
                Disable Logo
              </label>
              <input
                className={`shadow appearance-none ${
                  error.disablelogo ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="disablelogo"
                id="disablelogo"
                type="text"
                placeholder="Disable Logo"
                value={formFields.disablelogo}
                onChange={handleInputChange}
              />
              {error.disablelogo && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.disablelogo}
                </p>
              )}
            </div>

            {/* Disable Cover */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="disablecover"
              >
                Disable Cover
              </label>
              <input
                className={`shadow appearance-none ${
                  error.disablecover ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="disablecover"
                id="disablecover"
                type="text"
                placeholder="Disable Cover"
                value={formFields.disablecover}
                onChange={handleInputChange}
              />
              {error.disablecover && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.disablecover}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Disable Profile */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="disableprofile"
              >
                Disable Profile
              </label>
              <input
                className={`shadow appearance-none ${
                  error.disableprofile ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="disableprofile"
                id="disableprofile"
                type="text"
                placeholder="Disable Profile"
                value={formFields.disableprofile}
                onChange={handleInputChange}
              />
              {error.disableprofile && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.disableprofile}
                </p>
              )}
            </div>

            {/* Disable Bio */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="disablebio"
              >
                Disable Bio
              </label>
              <input
                className={`shadow appearance-none ${
                  error.disablebio ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="disablebio"
                id="disablebio"
                type="text"
                placeholder="Disable Bio"
                value={formFields.disablebio}
                onChange={handleInputChange}
              />
              {error.disablebio && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.disablebio}
                </p>
              )}
            </div>
            {/* Hide Name */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="hidename"
              >
                Hide Name
              </label>
              <input
                className={`shadow appearance-none ${
                  error.hidename ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="hidename"
                id="hidename"
                type="text"
                placeholder="Hide Name"
                value={formFields.hidename}
                onChange={handleInputChange}
              />
              {error.hidename && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.hidename}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Broker */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="broker"
              >
                Broker
              </label>
              <input
                className={`shadow appearance-none ${
                  error.broker ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="broker"
                id="broker"
                type="text"
                placeholder="Broker"
                value={formFields.broker}
                onChange={handleInputChange}
              />
              {error.broker && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.broker}
                </p>
              )}
            </div>
            {/* All Candidates */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="allcandidates"
              >
                All Candidates
              </label>
              <input
                className={`shadow appearance-none ${
                  error.allcandidates ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="allcandidates"
                id="allcandidates"
                type="text"
                placeholder="All Candidates"
                value={formFields.allcandidates}
                onChange={handleInputChange}
              />
              {error.allcandidates && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.allcandidates}
                </p>
              )}
            </div>

            {/* All Past Client */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="allpastclient"
              >
                All Past Client
              </label>
              <input
                className={`shadow appearance-none ${
                  error.allpastclient ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="allpastclient"
                id="allpastclient"
                type="text"
                placeholder="All Past Client"
                value={formFields.allpastclient}
                onChange={handleInputChange}
              />
              {error.allpastclient && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.allpastclient}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Share Franchise */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="sharefranchise"
              >
                Share Franchise
              </label>
              <input
                className={`shadow appearance-none ${
                  error.sharefranchise ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="sharefranchise"
                id="sharefranchise"
                type="text"
                placeholder="Share Franchise"
                value={formFields.sharefranchise}
                onChange={handleInputChange}
              />
              {error.sharefranchise && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.sharefranchise}
                </p>
              )}
            </div>

            {/* Lead Email */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="leademail"
              >
                Lead Email
              </label>
              <input
                className={`shadow appearance-none ${
                  error.leademail ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="leademail"
                id="leademail"
                type="email"
                placeholder="Lead Email"
                value={formFields.leademail}
                onChange={handleInputChange}
              />
              {error.leademail && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.leademail}
                </p>
              )}
            </div>
            {/* FBA Badges */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fbabadges"
              >
                FBA Badges
              </label>
              <input
                className={`shadow appearance-none ${
                  error.fbabadges ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="fbabadges"
                id="fbabadges"
                type="text"
                placeholder="FBA Badges"
                value={formFields.fbabadges}
                onChange={handleInputChange}
              />
              {error.fbabadges && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.fbabadges}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            {/* Phone 2 */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone2"
              >
                Phone 2
              </label>
              <input
                className={`shadow appearance-none ${
                  error.phone2 ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="phone2"
                id="phone2"
                type="text"
                placeholder="Phone 2"
                value={formFields.phone2}
                onChange={handleInputChange}
              />
              {error.phone2 && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.phone2}
                </p>
              )}
            </div>
            {/* Phone 3 */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone3"
              >
                Phone 3
              </label>
              <input
                className={`shadow appearance-none ${
                  error.phone3 ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="phone3"
                id="phone3"
                type="text"
                placeholder="Phone 3"
                value={formFields.phone3}
                onChange={handleInputChange}
              />
              {error.phone3 && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.phone3}
                </p>
              )}
            </div>

            {/* Secondary Email */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="secondaryemail"
              >
                Secondary Email
              </label>
              <input
                className={`shadow appearance-none ${
                  error.secondaryemail ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="secondaryemail"
                id="secondaryemail"
                type="email"
                placeholder="Secondary Email"
                value={formFields.secondaryemail}
                onChange={handleInputChange}
              />
              {error.secondaryemail && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.secondaryemail}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Final Step */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="finalstep"
              >
                Final Step
              </label>
              <input
                className={`shadow appearance-none ${
                  error.finalstep ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="finalstep"
                id="finalstep"
                type="text"
                placeholder="Final Step"
                value={formFields.finalstep}
                onChange={handleInputChange}
              />
              {error.finalstep && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.finalstep}
                </p>
              )}
            </div>

            {/* Final Notes */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="finalnotes"
              >
                Final Notes
              </label>
              <input
                className={`shadow appearance-none ${
                  error.finalnotes ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="finalnotes"
                id="finalnotes"
                type="text"
                placeholder="Final Notes"
                value={formFields.finalnotes}
                onChange={handleInputChange}
              />
              {error.finalnotes && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.finalnotes}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Business Entity */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="businessentity"
              >
                Business Entity
              </label>
              <input
                className={`shadow appearance-none ${
                  error.businessentity ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="businessentity"
                id="businessentity"
                type="text"
                placeholder="Business Entity"
                value={formFields.businessentity}
                onChange={handleInputChange}
              />
              {error.businessentity && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.businessentity}
                </p>
              )}
            </div>

            {/* Business Phone */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="businessphone"
              >
                Business Phone
              </label>
              <input
                className={`shadow appearance-none ${
                  error.businessphone ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="businessphone"
                id="businessphone"
                type="text"
                placeholder="Business Phone"
                value={formFields.businessphone}
                onChange={handleInputChange}
              />
              {error.businessphone && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.businessphone}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Team ID */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="teamid"
              >
                Team ID
              </label>
              <input
                className={`shadow appearance-none ${
                  error.teamid ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="teamid"
                id="teamid"
                type="text"
                placeholder="Team ID"
                value={formFields.teamid}
                onChange={handleInputChange}
              />
              {error.teamid && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.teamid}
                </p>
              )}
            </div>

            {/* Group Leader */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="groupleader"
              >
                Group Leader
              </label>
              <input
                className={`shadow appearance-none ${
                  error.groupleader ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="groupleader"
                id="groupleader"
                type="text"
                placeholder="Group Leader"
                value={formFields.groupleader}
                onChange={handleInputChange}
              />
              {error.groupleader && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.groupleader}
                </p>
              )}
            </div>

            {/* Billing Email */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="billingemail"
              >
                Billing Email
              </label>
              <input
                className={`shadow appearance-none ${
                  error.billingemail ? "border-red-500" : ""
                } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                name="billingemail"
                id="billingemail"
                type="email"
                placeholder="Billing Email"
                value={formFields.billingemail}
                onChange={handleInputChange}
              />
              {error.billingemail && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.billingemail}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            {/* Password */}
            <div className="mb-4 w-full">
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
                value={formFields.password}
                onChange={handleInputChange}
              />
              {error.password && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.password}
                </p>
              )}
            </div>
            {/* Confirm Password */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmpassword"
              >
                Confirm Password
              </label>
              <input
                className={`shadow appearance-none border ${
                  error.confirmpassword ? "border-red-500" : ""
                } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="******************"
                value={formFields.confirmpassword}
                onChange={handleInputChange}
              />
              {error.confirmpassword && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.confirmpassword}
                </p>
              )}
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              to="/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};

export default Registration;
