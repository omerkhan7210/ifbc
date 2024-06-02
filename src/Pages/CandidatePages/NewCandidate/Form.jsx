import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const states = [
    { value: "", text: "Select One" },
    { value: " ", text: "None" },
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
    return (
      <select
        onChange={handleInputChange}
        name={`${name}state`}
        id="state"
        className="candidate-select"
      >
        {states.map((state) => (
          <option value={state.value}>{state.text}</option>
        ))}
      </select>
    );
  };

  const handleInputChange = ({ target: { name, value } }) => {
    const newName = name.toLowerCase().split(" ").join("");

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

  const handleSubmit = () => {
    const reqFields = ["firstname", "lastname", "state", "city"];
    for (const [key] of Object.entries(formFields)) {
      const newKey = key.toLowerCase().split(" ").join("");

      if (!reqFields === newKey || formFields[newKey] === "") {
        setFormErrors((prev) => ({ ...prev, [newKey]: "error" }));
      } else {
        // submission logic here
      }
    }
  };

  return (
    <div className="flex flex-col w-full " id="main">
      <div
        id="top-text"
        className=" relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 min-h-[400px] before:z-10"
        style={{
          background: "url(/images/banners/candidate-banner.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-7xl text-white font-bold text-center z-20">
          New Candidate
        </h1>
        <p className="text-center text-xl relative text-white z-50 italic">
          Fields with a{" "}
          <span className="border-b-2 border-custom-dark-blue">blue</span>{" "}
          underline are included in Territory Checks submissions
        </p>
      </div>

      <div
        id="rows-container"
        className="relative divide-y-2 divide-custom-dark-blue/20 grid grid-cols-12 gap-5 px-5 md:px-0 "
      >
        <div
          id="left-side-container"
          className="col-span-8 max-w-[90%] mx-auto my-5"
        >
          <FormFirstRow handleInputChange={handleInputChange} />
          <FormSecondRow
            stateDD={stateDD}
            handleInputChange={handleInputChange}
          />
          <FormThirdRow
            stateDD={stateDD}
            handleInputChange={handleInputChange}
            setFormFields={setFormFields}
          />

          {/* submit button */}
          <div id="button-container" className="w-full flex justify-center">
            <button className="candidate-btn" onClick={handleSubmit}>
              SUBMIT CANDIDATE INFORMATION
            </button>
          </div>
        </div>

        <div
          id="right-side-container"
          className="h-full  bg-custom-dark-blue w-full col-span-4 "
        ></div>
      </div>
    </div>
  );
};

const FormFirstRow = ({ handleInputChange }) => {
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
            className="candidate-input"
            required
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Last Name*</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastname"
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

const FormSecondRow = ({ handleInputChange, stateDD }) => {
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
            className="candidate-input mr-2"
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
          {timezones.map((timeZone) => (
            <option value={timeZone.value}>{timeZone.text}</option>
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
