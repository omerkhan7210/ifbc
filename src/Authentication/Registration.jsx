import { Select } from "@headlessui/react";
import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "src/Animations/PageTransition";
import { MyCandContext } from "src/Context/CandidatesDataContext";

const Registration = () => {
  const ref = useRef();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

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
    businessbroker: false,
    registeredin: "",
    openforgroup: false,
    password: "",
    confirmpassword: "",
    territorycheck: false,
    disablelogo: false,
    disablecover: false,
    disableprofile: false,
    disablebio: false,
    hidename: false,
    broker: "",
    allcandidates: false,
    allpastclient: false,
    sharefranchise: false,
    leademail: "",
    fbabadges: false,
    usertype: "",
    profileimage: "",
    coverimage: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: inputValue,
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

    try {
      const baseUrl = `http://siddiqiventures-001-site3.ktempurl.com/new_account.aspx`;

      setLoading(true);

      const response = await axios.post(baseUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (
        response.data === "Data inserted Successfully." &&
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
    } catch (err) {
      //setError({ credentials: err });
      setLoading(false);
    }
  };

  const checkboxInputs = [
    { name: "businessbroker", label: "Business Broker" },
    { name: "openforgroup", label: "Open For Group" },
    { name: "territorycheck", label: "Territory Check" },
    { name: "disablelogo", label: "Disable Logo" },
    { name: "disablecover", label: "Disable Cover" },
    { name: "disableprofile", label: "Disable Profile" },
    { name: "disablebio", label: "Disable Bio" },
    { name: "hidename", label: "Hide Name" },
    { name: "allcandidates", label: "All Candidates" },
    { name: "allpastclient", label: "All Past Client" },
    { name: "sharefranchise", label: "Share Franchise" },
    { name: "fbabadges", label: "FBA Badges" },
  ];

  return (
    <PageTransition>
      <div className="flex justify-center flex-col items-center ">
        <h2 className="text-5xl my-5 uppercase font-bold text-custom-heading-color">
          Registration
        </h2>
        <form
          className=" rounded px-3 md:px-8 pt-6 pb-8 mb-4  w-[90%] mx-auto grid grid-cols-12 gap-10"
          ref={ref}
        >
          <div id="left-form-container" className="col-span-9">
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
            <Profile
              formFields={formFields}
              handleInputChange={handleInputChange}
              error={error}
            />
            <Company
              formFields={formFields}
              handleInputChange={handleInputChange}
              error={error}
            />
            <Experience
              formFields={formFields}
              handleInputChange={handleInputChange}
              error={error}
            />
            <Settings
              formFields={formFields}
              handleInputChange={handleInputChange}
              error={error}
            />
          </div>
          <div od="right-side-container" className="col-span-3 p-5 relative">
            <div id="sticky-container" className="top-10 sticky">
              {checkboxInputs.map(({ name, label }) => (
                <CheckboxInput
                  key={name}
                  name={name}
                  label={label}
                  formFields={formFields}
                  error={formErrors}
                  handleInputChange={handleInputChange}
                />
              ))}
            </div>
          </div>
          {/* Button */}
          <div className="flex items-center gap-5 justify-center col-span-12 ">
            <button
              onClick={handleSubmit}
              className="candidate-btn"
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/" className="candidate-secondary-btn">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};
const Profile = ({ formFields, handleInputChange, error }) => {
  return (
    <>
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
            <p className="text-red-500 text-xs italic mt-2">{error.lastname}</p>
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
            <p className="text-red-500 text-xs italic mt-2">{error.email}</p>
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
          <label class="block text-gray-700 text-sm font-bold mb-2">
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
          <label class="block text-gray-700 text-sm font-bold mb-2">
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
    </>
  );
};
const Company = ({ formFields, handleInputChange, error }) => {
  return (
    <>
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
            <p className="text-red-500 text-xs italic mt-2">{error.notes}</p>
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
    </>
  );
};
const Experience = ({ formFields, handleInputChange, error }) => {
  return (
    <>
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

        {/* Registered In */}
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="registeredin"
          >
            Registered In
          </label>
          <Select
            className={`shadow appearance-none ${
              error.registeredin ? "border-red-500" : ""
            } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="registeredin"
            id="registeredin"
            type="text"
            placeholder="Registered In"
            value={formFields.registeredin}
            onChange={handleInputChange}
          >
            <option value="N">None</option>
            <option value="NY">New York</option>
            <option value="W">Washington</option>
            <option value="B">Both</option>
          </Select>
          {error.registeredin && (
            <p className="text-red-500 text-xs italic mt-2">
              {error.registeredin}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
const Settings = ({ formFields, handleInputChange, error }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="text-2xl my-5 uppercase font-bold text-custom-heading-color">
          Your Settings
        </h2>
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
            <p className="text-red-500 text-xs italic mt-2">{error.broker}</p>
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
            <p className="text-red-500 text-xs italic mt-2">{error.password}</p>
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
    </>
  );
};

const CheckboxInput = ({
  name,
  label,
  formFields,
  error,
  handleInputChange,
}) => {
  return (
    <div className="mb-4 w-full flex flex-col items-start">
      <label
        className="text-gray-700 text-sm font-bold mb-2 flex items-center"
        htmlFor={name}
      >
        <input
          className={`shadow appearance-none ${
            error[name] ? "border-red-500" : ""
          } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          name={name}
          id={name}
          type="checkbox"
          defaultChecked={formFields[name]}
          onChange={handleInputChange}
        />
        {label}
      </label>
      {error[name] && (
        <p className="text-red-500 text-xs italic mt-2">{error[name]}</p>
      )}
    </div>
  );
};

export default Registration;
