import React, { useContext, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";

const Profile = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});

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
  return (
    <div
      id="main-profile-section"
      className="w-full grid grid-cols-12 p-5 gap-5 md:!flex contents h-auto "
    >
      <LeftSideBar
        formFields={formFields}
        formErrors={formErrors}
        handleInputChange={handleInputChange}
      />
      <RightSideBar
        formFields={formFields}
        formErrors={formErrors}
        handleInputChange={handleInputChange}
      />

      {/* <div
        id="main-bottom-container"
        className=" h-full w-full border border-green-700 p-5 gap-5 col-span-12 flex"
      >
        <div
          id="left-bottom-container"
          className="border border-green-700 h-[400px] w-full p-5 flex flex-col gap-5"
        ></div>
        <div
          id="right-bottom-container"
          className="border border-green-700 h-[400px] w-full  p-5 flex flex-col gap-5"
        ></div>
      </div> */}
    </div>
  );
};

const LeftSideBar = ({ formFields, formErrors, handleInputChange }) => {
  return (
    <div
      id="left-sidebar-profile"
      className=" h-full w-full col-span-3 p-5 flex flex-col gap-5"
    >
      <div
        id="user-icon-container"
        className="p-5 w-full col-span-4 flex flex-col "
      >
        <div className="flex items-center gap-5">
          <div id="image-container-profile">
            <img
              src="/images/accounts/harjeet.jpeg"
              alt=""
              className="rounded-full"
            />
          </div>
          <div id="profile-details-container">
            <h1 className="candidate-label">Harjeet Tiwana</h1>
            <h1 className="candidate-label">IFBC.CO</h1>
            <h1 className="candidate-label">Member Since September 10, 2023</h1>
            <h1 className="candidate-label border border-custom-dark-blue w-20 px-3">
              Broker
            </h1>
          </div>
        </div>

        <div id="language-container" className="h-full w-full py-5">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <h1 className="icon-text">Harjeet Tiwana</h1>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <h1 className="icon-text">559-313-1123</h1>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <h1 className="icon-text">ht@ifbc.co</h1>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <h1 className="icon-text">http://www.ifbc.co</h1>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>

            <h1 className="icon-text">LinkedIn</h1>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>

            <h1 className="icon-text">Meeting Link</h1>
          </div>

          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="blue"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <h1 className="icon-text">
              9350 Wilshire Blvd, Suite 203 Wilshire Blvd, Suite 203 Beverly
              Hills, CA 90212
            </h1>
          </div>
        </div>
      </div>

      <div id="settings" className="w-full col-span-4 p-4 flex flex-col gap-3">
        <h1 className="text-custom-heading-color font-bold text-2xl">
          Your Settings
        </h1>
        <div id="password">
          <div className="candidate-sub-childs">
            <p className="icon-text">New Password</p>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Create New Password"
              name="password"
              className="candidate-input"
              required
            />
          </div>
        </div>

        <div id="confirmpassword">
          <div className="candidate-sub-childs">
            <p className="icon-text">Confirm New Password</p>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Confirm New Password"
              name="confirmpassword"
              className="candidate-input"
              required
            />
          </div>
        </div>

        <div>
          <input
            name="territorycheck"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label htmlFor="default-checkbox" className="font-bold text-sm">
            Receive an email for each Territory Check or Formal Registration
            that is sent. (Default is to get a single email receipt for all TC's
            or FR's that are sent.)
          </label>
        </div>

        <h1 className="text-custom-heading-color font-bold text-2xl">
          System Settings
        </h1>
        <h1 className="font-bold text-sm">Client Info Sheet Settings</h1>

        <div className="flex items-center">
          <input
            name="disablelogo"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500"
          >
            Disable logo on client sheet
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="disablecover"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Disable Cover Sheet
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="disableprofile"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Disable profile image on client sheet
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="disablebio"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Disable Bio sheet
          </label>
        </div>
        <div className="flex items-center">
          <input
            name="hidename"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Hide my name on the leaderboard
          </label>
        </div>

        <h1 className="text-custom-heading-color font-bold text-2xl">
          Candidates and CoBroker Settings
        </h1>
        <div className="candidate-sub-childs">
          <p className="ms-2 text-sm font-bold text-slate-500">
            Share all candidates w/ sub accounts
          </p>
          <select
            id="countries"
            className="candidate-input p-3"
            name="broker"
            onChange={handleInputChange}
          >
            <option selected>Select Stage</option>
            <option value="US">Search for broker</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            name="allcandidates"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Share all candidates with sub-accounts
          </label>
        </div>

        <div className="flex items-center">
          <input
            name="allpastclient"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Share all past client
          </label>
        </div>
        <h2 className="font-bold italic text-sm mt-2">
          By default only new client will be shared with your co-brokers. In
          order to share all your past candidates check the box above and click
          save.
        </h2>

        <div className="flex items-center">
          <input
            name="sharefranchise"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Share all private franchise notes with sub-accounts
          </label>
        </div>

        <h1 className="text-custom-heading-color font-bold text-2xl">
          System Integrations
        </h1>

        <div className="candidate-sub-childs" id="leademail">
          <p className="icon-text">FBAMembers.com Lead Email</p>
          <input
            name="leademail"
            onChange={handleInputChange}
            type="text"
            readOnly
            placeholder="aa7ba8cbc02ffe5d77ad0a9fe4d815bf@reply.fbamembers.com"
            className="candidate-input"
            required
          />
        </div>

        <div className="candidate-sub-childs" id="leadendpoint">
          <p className="icon-text">Hubspot Lead Endpoint</p>
          <input
            onChange={handleInputChange}
            type="text"
            readOnly
            placeholder="https://fbamembers.com/hubspot-contact/RDZpMzBGTEppb1htQ1VoWUdaMk1Udz09"
            name="leadendpoint"
            className="candidate-input"
            required
          />
        </div>
        <h1 className="text-custom-heading-color font-bold text-2xl">
          Communication Settings
        </h1>
        <p className="ms-2 text-sm font-bold text-slate-500">
          FBA Certification and Badges
        </p>
        <div className="flex items-center">
          <input
            name="fbabadges"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Include your FBA badges and certificate in your signature.
          </label>
        </div>
        <p className="icon-text">Signature:</p>
        <div id="musicbtn">
          <button type="submit" className="candidate-btn inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
              />
            </svg>
            ADD MEDIA
          </button>
        </div>
      </div>

      {/* <div
        id="other-accounts-container"
        className="border border-red-400 h-[600px]  w-full col-span-4 shadow-2xl"
      ></div> */}
    </div>
  );
};
const RightSideBar = ({ formFields, formErrors, handleInputChange }) => {
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

  const FranchiseIndustryFocus = [
    { value: "Advertising", label: "Advertising" },
    { value: "Automotive", label: "Automotive" },
    { value: "Beauty & Spa", label: "Beauty & Spa" },
    {
      value: "Business Management & Coaching",
      label: "Business Management & Coaching",
    },
    { value: "Business Services", label: "Business Services" },
    {
      value: "Child Education, STEM & Tutoring",
      label: "Child Education, STEM & Tutoring",
    },
    { value: "Child Services & Products", label: "Child Services & Products" },
    {
      value: "Cleaning: Residential & Commercial",
      label: "Cleaning: Residential & Commercial",
    },
    { value: "CT", label: "Computer Technology" },
    { value: "DS", label: "Distribution Services" },
    { value: "DC", label: "Dry Cleaning-Laundry" },
    { value: "FS", label: "Financial Services" },
    { value: "FT", label: "Fitness" },
    { value: "FB", label: "Food & Beverage: Restaurant/QSR/Catering" },
    { value: 15, label: "Food: Coffee/Tea/Smoothies/Sweets" },
    { value: 16, label: "Food: Stores & Catering" },
    { value: 17, label: "Health/Medical" },
    { value: 18, label: "Health/Wellness" },
    { value: 19, label: "Home Improvement" },
    { value: 20, label: "Interior/Exterior Design" },
    { value: 21, label: "Maintenance & Repair" },
  ];

  const { listings } = useContext(MyContext);
  console.log(listings);

  return (
    <div
      id="right-sidebar-profile"
      className=" w-full col-span-9 p-5 h-auto sm:co]"
    >
      <div id="2-column-profile-inputs" className="flex gap-6">
        <div id="left-side-inputs" className="  w-full">
          <h1 className="text-custom-heading-color font-bold text-2xl">
            Your FBA Profile Information
          </h1>
          <div className="candidate-sub-childs">
            <p className="candidate-label">First Name</p>
            <input
              type="text"
              name="firstname"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Last Name</p>
            <input
              type="text"
              name="lastname"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Email</p>
            <input
              type="text"
              name="email"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Website URL</p>
            <input
              type="text"
              name="websiteurl"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">LinkedIn URL</p>
            <input
              type="text"
              name="linkedinurl"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Meeting Link</p>
            <input
              type="text"
              name="meetinglink"
              className="candidate-input"
              required
            />
          </div>
        </div>

        <div id="right-side-inputs" className="h-auto w-full">
          <h1 className="text-custom-heading-color font-bold text-2xl">
            Your Company Information
          </h1>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Company Name:</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="companyname"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Phone Number:</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="companyphonenumber"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Address:</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="companyaddress"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">City:</p>
            <input
              onChange={handleInputChange}
              type="text"
              name="city"
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">State/Province:</p>
            <select
              onChange={handleInputChange}
              id="countries"
              className="candidate-input p-3"
              name="zippostalcode"
            >
              {states.map((state, index) => (
                <option key={index} value={state.value}>
                  {state.text}
                </option>
              ))}
            </select>
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Zip/Postal Code</p>
            <input
              placeholder="90212"
              onChange={handleInputChange}
              type="text"
              name="zippostalcode"
              className="candidate-input"
              required
            />
          </div>
        </div>
      </div>
      <div className="candidate-sub-childs w-full col-span-8">
        <p className="candidate-label">Unit/Suite #:</p>
        <input
          onChange={handleInputChange}
          type="text"
          name="unitsuite"
          className="candidate-input"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="candidate-label">
          Notes
        </label>
        <textarea
          name="notes"
          onChange={handleInputChange}
          id="message"
          rows={5}
          defaultValue={
            "An International Franchise Business Consultant is a professional who provides guidance and advice to individuals or companies interested in franchising their business or investing in a franchise. They help clients navigate the complex process of franchising, from developing a business plan to finding the right franchise opportunity."
          }
        />
      </div>
      <div className="candidate-sub-childs">
        <p className="candidate-label">Short Description:</p>
        <input
          onChange={handleInputChange}
          type="text"
          name="shortdescription"
          className="candidate-input"
          required
        />
      </div>
      <div id="experience" className="h-auto w-full col-span-8 p-5">
        <h1 className="text-custom-heading-color font-bold text-2xl">
          Your Experience
        </h1>

        <div className="mt-3">
          <label className="icon-text mt-2" htmlFor="consulting">
            Consulting Specialties
          </label>
          <select
            name="consulting"
            className="candidate-input w-full"
            id="consulting"
            onChange={handleInputChange}
          >
            <option value="CB">Co-Breaking</option>
            <option value="EB">Emerging Brands</option>
            <option value="IF">International Franchises</option>
            <option value="FS">Financial Services & Analysis</option>
            ...
            <option value="FD">Franchise Development</option>
            <option value="IT">Information Technology</option>
            <option value="LC">Low Cost Franchises</option>
            <option value="MS">Management Skills</option>
            ...
            <option value="MA">Masters / Area Development</option>
            <option value="NS">Negotiation Skills</option>
            <option value="PF">Passive Franchises</option>
            <option value="PI">Process Improvemnet</option>
            ...
            <option value="PM">Project Management</option>
            ...
          </select>
        </div>

        <div className="mt-3">
          <label className="icon-text" htmlFor="franchiseindustryfocus">
            Franchise Industry Focus
          </label>
          <select
            name="franchiseindustryfocus"
            className="candidate-input w-full"
            id="franchiseindustryfocus"
            onChange={handleInputChange}
          >
            <option value="EB">Emerging Brands</option>
            <option value="CB">Co-Breaking</option>
            <option value="IF">International Franchises</option>
            <option value="FS">Financial Services & Analysis</option>
            ...
            <option value="FD">Franchise Development</option>
            <option value="IT">Information Technology</option>
            <option value="LC">Low Cost Franchises</option>
            <option value="MS">Management Skills</option>
            ...
            <option value="MA">Masters / Area Development</option>
            <option value="NS">Negotiation Skills</option>
            <option value="PF">Passive Franchises</option>
            <option value="PI">Process Improvemnet</option>
            ...
            <option value="PM">Project Management</option>
            ...
          </select>
        </div>
        <h1 className="text-custom-heading-color font-bold text-lg mt-3">
          Professions and Registrations
        </h1>
        <div className="mt-3 flex items-center">
          <input
            name="businessbroker"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Business Broker
          </label>
        </div>

        <div className="mt-3">
          <label className="icon-text" htmlFor="registered">
            Registered In
          </label>
          <select
            name="registeredin"
            className="candidate-input w-full"
            id="registered"
            onChange={handleInputChange}
          >
            <option value="N">None</option>
            <option value="NY">New York</option>
            <option value="W">Washington</option>
            <option value="B">Both</option>
          </select>
        </div>

        <div className="mt-3 flex items-center">
          <input
            name="openforgroup"
            onChange={handleInputChange}
            id="default-checkbox"
            type="checkbox"
            defaultValue
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-bold text-slate-500 "
          >
            Open for Group
          </label>
        </div>
        <h2 className="font-bold italic text-sm mt-2">
          The "Open for Group" setting signals your willingness to engage with
          fellow brokers in a collaborative way. This expresses your willingness
          to participate in discussions, share insights, and foster cooperation
          with other brokers.
        </h2>
      </div>
      <div id="Deal-Activity" className="h-auto w-full col-span-8 p-5">
        <h1 className="text-custom-heading-color font-bold text-2xl">
          Deal Activity
        </h1>
        <div className="flex items-center gap-1">
          <h1 className="icon-text">Franchise Fee:</h1>

          <h1 className="candidate-label text-xl">1</h1>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="icon-text">Deals:</h1>
          <h1 className="candidate-label text-xl">1</h1>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="icon-text">Units:</h1>
          <h1 className="candidate-label text-xl">1</h1>
        </div>
        <h1 className="text-custom-heading-color font-bold text-2xl">
          Research Activity
        </h1>
        <div className="flex items-center gap-1">
          <h1 className="icon-text">Territory Checks:</h1>
          <h1 className="candidate-label text-xl">129</h1>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="icon-text">Formal Registrations:</h1>
          <h1 className="candidate-label text-xl">25</h1>
        </div>
        <button className="candidate-btn mt-3">EDIT YOUR DEALS</button>
      </div>
    </div>
  );
};

export default Profile;
