import React from "react";
import { useState } from "react";

const Form = () => {
  const [check, setChecked] = useState(false);
  const [addContacts, setAddContacts] = useState(0);

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

  const stateDD = () => {
    return (
      <select id="state" className="candidate-select">
        {states.map((state) => (
          <option value={state.value}>{state.text}</option>
        ))}
      </select>
    );
  };

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
              type="text"
              id="first_name"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Last Name</p>
            <input
              type="text"
              id="first_name"
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
              id="first_name"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Email</p>
            <input
              type="text"
              id="first_name"
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
    <div className="flex flex-col w-full " id="main">
      <div
        id="top-text"
        className="py-24  relative flex flex-col gap-2 before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/50 before:z-10"
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
        className="divide-y-2 divide-custom-dark-blue/20 md:max-w-7xl mx-auto flex flex-col gap-5 px-5 md:px-0 "
      >
        {/* first row */}
        <div id="first-row" className="py-5">
          <h1 className="candidate-sub-heading">
            Primary Candidate Information
          </h1>
          <div
            id="first-sub-row"
            className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
          >
            <div className="candidate-sub-childs">
              <p className="candidate-label">First Name</p>
              <input
                type="text"
                id="first_name"
                className="candidate-input"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Last Name*</p>
              <input
                type="text"
                id="first_name"
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
                id="first_name"
                className="candidate-input"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Email</p>
              <input
                type="text"
                id="first_name"
                className="candidate-input"
                required
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

        {/* second row */}
        <div id="second-row" className="py-5">
          <h1 className="candidate-sub-heading">Requested Territory</h1>
          <div
            id="third-sub-row"
            className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
          >
            <div className="candidate-sub-childs">
              <p className="candidate-label">City*</p>
              <input
                type="text"
                id="first_name"
                className="candidate-input mr-2"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">State / Province*</p>

              {/* state dd */}
              {stateDD()}
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Zip / Postal Code</p>
              <input
                type="text"
                id="first_name"
                className="candidate-input"
                required
              />
            </div>
          </div>
          <div id="fourth-sub-row" className="candidate-sub-childs">
            <p className="candidate-label">Territory Notes</p>
            <input
              type="text"
              id="first_name"
              className="candidate-input w-full"
              required
            />
          </div>
          <div id="button-container" className="w-full flex justify-center">
            <button className="candidate-btn">ADD ADDITIONAL TERRITORY</button>
          </div>
        </div>

        {/* third row */}
        <div id="third-row" className="py-5">
          <h1 className="candidate-sub-heading">Current Address</h1>
          <div
            id="checkboc-territory"
            className="w-full flex justify-center mb-5"
          >
            <label className="mt-3 flex items-center candidate-label">
              <input
                type="checkbox"
                className="accent-custom-heading-color "
                onClick={() => setChecked(!check)}
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
                <p className="candidate-label">City*</p>
                <input
                  type="text"
                  id="first_name"
                  className="candidate-input mr-2"
                  required
                />
              </div>
              <div className="candidate-sub-childs">
                <p className="candidate-label">State / Province*</p>

                {/* state dd */}
                {stateDD()}
              </div>
              <div className="candidate-sub-childs">
                <p className="candidate-label">Zip / Postal Code</p>
                <input
                  type="text"
                  id="first_name"
                  className="candidate-input"
                  required
                />
              </div>
            </div>
          )}
          <div id="sixth-sub-row" className="candidate-sub-childs">
            <p className="candidate-label">Timezone</p>
            <select id="timeZone" className="candidate-select">
              {timezones.map((timeZone) => (
                <option value={timeZone.value}>{timeZone.text}</option>
              ))}
            </select>
          </div>
          <div id="seventh-sub-row" className="candidate-sub-childs">
            <p className="candidate-label">
              About This Candidate / Email Contents
            </p>
            <textarea
              id="message"
              rows={10}
              className="candidate-input"
              defaultValue={""}
            />
          </div>
          <div id="eigth-sub-row" className="flex flex-col md:flex-row gap-2">
            <div className="candidate-sub-childs">
              <p className="candidate-label">Deal Value</p>
              <input
                type="text"
                id="first_name"
                className="candidate-input"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Lead Source Cost</p>
              <input
                type="text"
                id="first_name"
                className="candidate-input"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Close Date</p>
              <input
                type="date"
                className="candidate-input"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
