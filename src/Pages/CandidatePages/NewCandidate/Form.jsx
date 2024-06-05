import axios, { formToJSON } from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PageTransition from "src/Animations/PageTransition";
import { twMerge } from "tailwind-merge";
import Tabs from "./Tabs";
import { useNavigate } from "react-router-dom";
import CandidateSideBar from "src/Pages/GlobalPageSections/CandidateSideBar";

const Form = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const states = [
    { value: "AL", text: "Alabama" },
    { value: "AK", text: "Alaska" },
    { value: "AZ", text: "Arizona" },
    { value: "AR", text: "Arkansas" },
    { value: "CA", text: "California" },
    { value: "CO", text: "Colorado" },
    { value: "CT", text: "Connecticut" },
    { value: "DE", text: "Delaware" },
    { value: "DC", text: "District Of Columbia" },
    { value: "FL", text: "Florida" },
    { value: "GA", text: "Georgia" },
    { value: "HI", text: "Hawaii" },
    { value: "ID", text: "Idaho" },
    { value: "IL", text: "Illinois" },
    { value: "IN", text: "Indiana" },
    { value: "IA", text: "Iowa" },
    { value: "KS", text: "Kansas" },
    { value: "KY", text: "Kentucky" },
    { value: "LA", text: "Louisiana" },
    { value: "ME", text: "Maine" },
    { value: "MD", text: "Maryland" },
    { value: "MA", text: "Massachusetts" },
    { value: "MI", text: "Michigan" },
    { value: "MN", text: "Minnesota" },
    { value: "MS", text: "Mississippi" },
    { value: "MO", text: "Missouri" },
    { value: "MT", text: "Montana" },
    { value: "NE", text: "Nebraska" },
    { value: "NV", text: "Nevada" },
    { value: "NH", text: "New Hampshire" },
    { value: "NJ", text: "New Jersey" },
    { value: "NM", text: "New Mexico" },
    { value: "NY", text: "New York" },
    { value: "NC", text: "North Carolina" },
    { value: "ND", text: "North Dakota" },
    { value: "OH", text: "Ohio" },
    { value: "OK", text: "Oklahoma" },
    { value: "OR", text: "Oregon" },
    { value: "PA", text: "Pennsylvania" },
    { value: "RI", text: "Rhode Island" },
    { value: "SC", text: "South Carolina" },
    { value: "SD", text: "South Dakota" },
    { value: "TN", text: "Tennessee" },
    { value: "TX", text: "Texas" },
    { value: "UT", text: "Utah" },
    { value: "VT", text: "Vermont" },
    { value: "VA", text: "Virginia" },
    { value: "WA", text: "Washington" },
    { value: "WV", text: "West Virginia" },
    { value: "WI", text: "Wisconsin" },
    { value: "WY", text: "Wyoming" },
    { value: "INT", text: "International" },
    { value: "AB", text: "Alberta" },
    { value: "BC", text: "British Columbia" },
    { value: "MB", text: "Manitoba" },
    { value: "NB", text: "New Brunswick" },
    { value: "NL", text: "Newfoundland and Labrador" },
    { value: "NT", text: "Northwest Territories" },
    { value: "NS", text: "Nova Scotia" },
    { value: "NU", text: "Nunavut" },
    { value: "ON", text: "Ontario" },
    { value: "PE", text: "Prince Edward Island" },
    { value: "QC", text: "Quebec" },
    { value: "SK", text: "Saskatchewan" },
    { value: "YT", text: "Yukon Territory" },
  ];

  const stateDD = (name) => {
    const className = twMerge(
      "candidate-select",
      formErrors.territorystate && name === "territory"
        ? "bg-red-200 text-white"
        : ""
    );
    return (
      <select
        onChange={handleInputChange}
        name={`${name}state`}
        id="state"
        className={className}
      >
        {states.map((state, index) => (
          <option key={index} value={state.value}>
            {state.text}
          </option>
        ))}
      </select>
    );
  };

  const handleInputChange = ({ target: { name, value } }) => {
    const newName = name.toLowerCase().split(" ").join("");
    // Remove the error for the field if there is a value
    if (
      formErrors &&
      Object.keys(formErrors).length > 0 &&
      value.trim() !== ""
    ) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      formErrors[name] && delete formErrors[name];
    }

    setFormFields((prev) => ({
      ...prev,
      [newName]: value,
    }));
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(formFields)) {
      if (key === "sameasterritoryrequested" && value) {
        formFields.currentcity && delete formFields.currentcity;
        formFields.currentzipcode && delete formFields.currentzipcode;
        formFields.currentstate && delete formFields.currentstate;
      }
    }
  }, [formFields]);

  const history = useNavigate();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const handleSubmit = async () => {
    const reqFields = [
      "firstname",
      "lastname",
      "territorystate",
      "territorycity",
    ];
    let allFieldsValid = true;

    reqFields.forEach((field) => {
      const newKey = field.toLowerCase().split(" ").join("");
      if (!formFields[newKey] || formFields[newKey].trim() === "") {
        setFormErrors((prev) => ({ ...prev, [newKey]: "error" }));
        allFieldsValid = false;
      } else {
        setFormErrors((prev) => ({ ...prev, [newKey]: "" }));
      }
    });

    try {
      if (allFieldsValid) {
        const baseUrl = `http://siddiqiventures-001-site3.ktempurl.com/candidateadd.aspx?FirstName=${
          formFields.firstname ?? ""
        }&LastName=${formFields.lastname ?? ""}&Phone=${
          formFields.phone ?? ""
        }&Email=${formFields.email ?? ""}&TerritoryCity=${
          formFields.territorycity ?? ""
        }&TerritoryState=${formFields.territorystate ?? ""}&TerritoryZipcode=${
          formFields.zipcode ?? ""
        }&CurrentCity=${formFields.currentcity ?? ""}&CurrentState=${
          formFields.currentstate ?? ""
        }&CurrentZipcode=${formFields.currentzipcode ?? ""}&TerritoryNotes=${
          formFields.territorynotes ?? ""
        }&DealSource=${formFields.dealsource ?? ""}&DealSourceCost=${
          formFields.dealsourcecost ?? ""
        }&ZorackleValue=${formFields.zoraclevalue ?? ""}&DealValue=${
          formFields.dealvalue ?? ""
        }&About=${formFields.about ?? ""}&CloseDate=${
          formFields.closedate ?? ""
        }`;

        const url = `https://corsproxy.io/${encodeURIComponent(baseUrl)}`;

        //setLoading(true);
        // Send the POST request using Axios
        const response = await axios.post(baseUrl, formFields, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (
          response.status === 200 &&
          response.data === '"Candidate Information Saved Successfully."'
        ) {
        }
        console.log(response);
      } else {
        window.scrollTo(0, 500);
      }
    } catch (error) {
      // setError({
      //   username: "",
      //   password: "",
      //   email: "",
      //   credentials: "Server Error",
      // });

      setLoading(false);
    }
  };

  return (
    <div
      id="left-side-container"
      className="col-span-12 divide-y-2 divide-custom-dark-blue/10  mx-10 my-5"
    >
      {formErrors && Object.keys(formErrors).length > 0 && (
        <p className="border-2 border-red-600 text-red-600 p-4 flex justify-between">
          Please fill in all required fields!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
            />
          </svg>
        </p>
      )}
      <FormFirstRow
        handleInputChange={handleInputChange}
        formErrors={formErrors}
      />
      <FormSecondRow
        stateDD={stateDD}
        handleInputChange={handleInputChange}
        formErrors={formErrors}
      />
      <FormThirdRow
        stateDD={stateDD}
        handleInputChange={handleInputChange}
        setFormFields={setFormFields}
      />

      {/* tabs */}
      <Tabs />
      {/* submit button */}
      <div id="button-container" className="w-full flex justify-center">
        <button className="candidate-btn" onClick={handleSubmit}>
          SUBMIT CANDIDATE INFORMATION
        </button>
      </div>
    </div>
  );
};

const FormFirstRow = ({ handleInputChange, formErrors }) => {
  const [addContacts, setAddContacts] = useState(0);
  const addContactDiv = (index) => {
    return (
      <div
        key={index}
        id={`additional-contact-row-${index}`}
        className="p-5 border-2 border-custom-heading-color shadow-lg"
      >
        <h1 className="candidate-sub-heading">Additional Contact</h1>
        <div
          id="first-sub-row"
          className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
        >
          <div className="candidate-sub-childs">
            <p className="candidate-label">First Name</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="additionalfirstname"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Last Name</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="additionallastname"
              className="candidate-input"
              required
            />
          </div>
        </div>
        <div
          id="second-sub-row"
          className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
        >
          <div className="candidate-sub-childs">
            <p className="candidate-label">Phone Number</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="additionalphone"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Email</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="additionalemail"
              className="candidate-input"
              required
            />
          </div>
        </div>
        <div id="button-container" className="w-full flex justify-center">
          <button
            className="candidate-btn"
            onClick={() => setAddContacts((prevContacts) => prevContacts - 1)}
          >
            REMOVE CONTACT
          </button>
        </div>
      </div>
    );
  };
  return (
    <div id="first-row" className="py-5">
      <h1 className="candidate-sub-heading ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Primary Candidate Information
      </h1>
      <div
        id="first-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">First Name*</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstname"
            className={`candidate-input ${
              formErrors.firstname ? "bg-red-300" : ""
            }`}
            required
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Last Name*</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastname"
            className={`candidate-input ${
              formErrors.lastname ? "bg-red-300" : ""
            }`}
            required
          />
        </div>
      </div>
      <div
        id="second-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">Phone Number</p>
          <input
            type="text"
            name="phone"
            className="candidate-input"
            onChange={handleInputChange}
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Email</p>
          <input
            type="text"
            name="email"
            className="candidate-input"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div id="button-container" className="w-full flex justify-center">
        <button
          className="candidate-btn"
          onClick={() => setAddContacts((prevContacts) => prevContacts + 1)}
        >
          ADD ADDITIONAL CONTACTS
        </button>
      </div>
      {addContacts > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {Array.from({ length: addContacts }).map((_, index) =>
            addContactDiv(index + 1)
          )}
        </div>
      )}
    </div>
  );
};

const FormSecondRow = ({ handleInputChange, stateDD, formErrors }) => {
  return (
    <div id="second-row" className="py-5">
      <h1 className="candidate-sub-heading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
        Requested Territory
      </h1>
      <div
        id="third-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">City*</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="territorycity"
            className={`candidate-input mr-2 ${
              formErrors.territorycity ? "bg-red-300" : ""
            }`}
            required
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">State / Province*</p>

          {/* state dd */}
          {stateDD("territory")}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Zip / Postal Code</p>
          <input
            type="text"
            name="territoryzipcode"
            className="candidate-input"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div id="fourth-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">Territory Notes</p>
        <textarea
          onChange={handleInputChange}
          name="Territory Notes"
          rows={10}
          className="candidate-input"
        ></textarea>
      </div>
      <div id="button-container" className="w-full flex justify-center">
        <button className="candidate-btn">ADD ADDITIONAL TERRITORY</button>
      </div>
    </div>
  );
};

const FormThirdRow = ({ handleInputChange, stateDD, setFormFields }) => {
  const [check, setChecked] = useState(false);

  const timezones = [
    { value: "", text: "Select One" },
    { value: "America/Anchorage", text: "America/Anchorage" },
    { value: "America/Boise", text: "America/Boise" },
    { value: "America/Chicago", text: "America/Chicago" },
    { value: "America/Denver", text: "America/Denver" },
    { value: "America/Detroit", text: "America/Detroit" },
    {
      value: "America/Indiana/Indianapolis",
      text: "America/Indiana/Indianapolis",
    },
    {
      value: "America/Kentucky/Louisville",
      text: "America/Kentucky/Louisville",
    },
    { value: "America/Los_Angeles", text: "America/Los_Angeles" },
    { value: "America/New_York", text: "America/New_York" },
    {
      value: "America/North_Dakota/Center",
      text: "America/North_Dakota/Center",
    },
    { value: "America/Phoenix", text: "America/Phoenix" },
    { value: "Pacific/Honolulu", text: "Pacific/Honolulu" },
    { value: "America/St_Johns", text: "America/St_Johns" },
    { value: "America/Halifax", text: "America/Halifax" },
  ];
  return (
    <div id="third-row" className="py-5">
      <h1 className="candidate-sub-heading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        Current Address
      </h1>
      <div id="checkboc-territory" className="w-full flex justify-center mb-5">
        <label className="mt-3 flex items-center candidate-label">
          <input
            name="Same as Territory Requested"
            type="checkbox"
            className="accent-custom-heading-color "
            onClick={() => {
              setFormFields((prev) => ({
                ...prev,
                sameasterritoryrequested: check,
              }));
              setChecked(!check);
            }}
          />
          Same as Territory Requested.
        </label>
      </div>
      {!check && (
        <div
          id="fifth-sub-row"
          className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
        >
          <div className="candidate-sub-childs">
            <p className="candidate-label">City</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="currentcity"
              className="candidate-input mr-2"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">State / Province*</p>

            {/* state dd */}
            {stateDD("current")}
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Zip / Postal Code</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="currentzipcode"
              className="candidate-input"
              required
            />
          </div>
        </div>
      )}
      <div id="sixth-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">Timezone</p>
        <select
          onChange={handleInputChange}
          name="timezone"
          className="candidate-select"
        >
          {timezones.map((timeZone, index) => (
            <option key={index} value={timeZone.value}>
              {timeZone.text}
            </option>
          ))}
        </select>
      </div>
      <div id="seventh-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">About This Candidate / Email Contents</p>
        <textarea
          onChange={handleInputChange}
          name="about"
          rows={10}
          className="candidate-input"
          defaultValue={""}
        />
      </div>
      <div id="eigth-sub-row" className="flex flex-col md:flex-row gap-2">
        <div className="candidate-sub-childs">
          <p className="candidate-label">Deal Value</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="dealvalue"
            className="candidate-input"
            required
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Lead Source Cost</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="Lead Source Cost"
            className="candidate-input"
            required
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Close Date</p>
          <input
            onChange={handleInputChange}
            name="Close Date"
            type="date"
            className="candidate-input"
            placeholder="Select date"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
