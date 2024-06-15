import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import DialogBox from "./DialogBox";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import handleInputChange from "src/Utils/handleInputChange";

const TerritoryCheck = ({ setShow, show }) => {
  const { cands, userDetails } = useContext(MyCandContext);
  const { activeListings } = useContext(MyContext);
  const [candNames, setNames] = useState([]);
  const [selectedDocId, setSelectedDocId] = useState();
  const [selectedDetails, setSelectedDetails] = useState({
    DocId: "",
    FirstName: "",
    LastName: "",
    TerritoryCity: "",
    TerritoryState: "",
    TerritoryZipcode: "",
    TerritoryNotes: "",
    IncludeNameInTerritoryRequest: false,
  });

  const [addContacts, setAddContacts] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [searchOn, setSearchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showsuccess, setShowSuccess] = useState(false);
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

  useEffect(() => {
    if (cands && cands.length > 0) {
      let names = cands.map((cand) => ({
        name: cand.FirstName,
        DocId: cand.DocId,
      }));
      setNames(names);
    }
  }, [cands]);

  useEffect(() => {
    if (selectedDocId && selectedDocId !== "") {
      const filtered = cands.filter((cand) => cand.DocId == selectedDocId);
      if (filtered) {
        const selectedCand = filtered[0];
        setSelectedDetails({
          DocId: selectedDocId,
          FirstName: selectedCand.FirstName,
          LastName: selectedCand.LastName,
          TerritoryCity: selectedCand.TerritoryCity,
          TerritoryState: selectedCand.TerritoryState,
          TerritoryZipcode: selectedCand.TerritoryZipcode,
          TerritoryNotes: selectedCand.TerritoryNotes,
          IncludeNameInTerritoryRequest: false,
        });
      } else {
        setSelectedDetails({
          DocId: "",
          FirstName: "",
          LastName: "",
          TerritoryCity: "",
          TerritoryState: "",
          TerritoryZipcode: "",
          TerritoryNotes: "",
          IncludeNameInTerritoryRequest: false,
        });
      }
    }
  }, [selectedDocId, cands]);

  const addContactDiv = (index) => {
    return (
      <div
        key={index}
        id={`additional-contact-row-${index}`}
        className="p-5 border-2 border-custom-heading-color shadow-lg"
      >
        <h1 className="candidate-sub-heading">Additional Territory</h1>
        <div
          id="first-sub-row"
          className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
        >
          <div className="candidate-sub-childs">
            <p className="candidate-label">City</p>
            <input
              onChange={handleInputChange}
              type="text"
              name={`additionalcity${index}`}
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Last Name</p>
            <input
              onChange={handleInputChange}
              type="text"
              name={`additionallastname${index}`}
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
            <p className="candidate-label">Zip</p>
            <input
              onChange={handleInputChange}
              type="text"
              name={`additionalzip${index}`}
              className="candidate-input"
              required
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Email</p>
            <input
              onChange={handleInputChange}
              type="text"
              name={`additionalemail${index}`}
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

  const handleSubmit = async () => {
    setLoading(true);
    const reqFields = [
      "FirstName",
      "LastName",
      "TerritoryState",
      "TerritoryZipcode",
      "TerritoryCity",
    ];
    let allFieldsValid = true;

    reqFields.forEach((field) => {
      if (!selectedDetails[field] || selectedDetails[field].trim() === "") {
        setFormErrors((prev) => ({ ...prev, [field]: "error" }));
        allFieldsValid = false;
      } else {
        setFormErrors((prev) => ({ ...prev, [field]: "" }));
      }
    });

    try {
      if (allFieldsValid) {
        const formData = {
          CandidateId: selectedDocId,
          AgentId: userDetails.Id,
          ListingsIds: JSON.stringify(activeListings),
          InterRequest: selectedDetails.IncludeNameInTerritoryRequest,
          DocType: "TC",
          Status: "Pending",
          Message: "",
        };

        const jsonData = JSON.stringify(formData);
        const baseUrl =
          "http://siddiqiventures-001-site3.ktempurl.com/cfabridge.aspx";

        // Send the POST request using Axios
        const response = await axios.post(baseUrl, jsonData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (
          response.status === 200 &&
          response.data === "Bridge Information Saved Successfully."
        ) {
          setFormErrors({});
          setSuccessMsg("Territory Check Send Successfully.");

          setLoading(false);

          setTimeout(() => {
            history("/candidate-list");
          }, 3000);
        } else {
          setFormErrors({ error: response.data });
          setLoading(false);
          window.scrollTo(0, 500);
          // Handle unexpected response
        }
      } else {
        setFormErrors((prev) => ({
          ...prev,
          error: "Please fill in all the required fields",
        }));
        setLoading(false);
        window.scrollTo(0, 500);

        // Handle invalid fields (e.g., show validation errors)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <DialogBox setShow={setShow} show={show}>
      <button
        className="absolute top-5 right-10"
        onClick={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <div
        id="territoryModal"
        className="bg-white overflow-y-scroll h-[500px] rounded-lg shadow-md p-10"
      >
        <h2 className="text-custom-heading-color font-bold text-5xl uppercase text-center">
          Territory Check
        </h2>

        {formErrors.error && (
          <p className="border-2 border-red-600 text-red-600 p-4 flex justify-between">
            {formErrors.error}
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

        <div id="fr-tcheck-popup" className="mt-10">
          <h2 className="candidate-sub-heading">Candidate Name*</h2>
          <div id="search-checkbox">
            <label htmlFor="" className="flex items-center mb-3 capitalize">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => setSearchOn(!searchOn)}
              />
              Already added candidates?
            </label>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col mr-5 w-[50%]">
              <p className="candidate-paragraph">First Name</p>
              {searchOn ? (
                <select
                  id="firstname"
                  name="FirstName"
                  className={`candidate-select capitalize${
                    formErrors.firstname ? "bg-red-300" : ""
                  }`}
                  onChange={(e) => {
                    setSelectedDocId(e.target.value);
                  }}
                >
                  {!selectedDocId && <option value="">Choose any name</option>}
                  {candNames &&
                    candNames.map((cand) => (
                      <option key={cand.DocId} value={cand.DocId}>
                        {cand.name}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  onChange={handleInputChange}
                  name="FirstName"
                  type="text"
                  className={`candidate-input ${
                    formErrors.FirstName ? "bg-red-300" : ""
                  }`}
                  required
                  value={selectedDetails?.FirstName}
                />
              )}
            </div>
            <div className="flex flex-col w-[50%]">
              <p className="candidate-paragraph">Last Name*</p>
              <input
                onChange={handleInputChange}
                name="LastName"
                type="text"
                className={`candidate-input ${
                  formErrors.LastName ? "bg-red-300" : ""
                }`}
                required
                value={selectedDetails?.LastName}
              />
            </div>
          </div>
        </div>

        <div id="sr-tcheck-popup" className="mt-10">
          <h2 className="candidate-sub-heading">Territory*</h2>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <p className="candidate-paragraph">City</p>
              <input
                onChange={handleInputChange}
                name="TerritoryCity"
                type="text"
                className={`candidate-input ${
                  formErrors.TerritoryCity ? "bg-red-300" : ""
                }`}
                required
                value={selectedDetails?.TerritoryCity}
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="candidate-paragraph">State/Province/Region</p>
              <select
                onChange={handleInputChange}
                value={selectedDetails?.TerritoryState}
                name={`${name}state`}
                id="state"
                className={twMerge(
                  "candidate-select",
                  formErrors.territorystate && name === "territory"
                    ? "bg-red-200 text-white"
                    : ""
                )}
              >
                {states.map((state, index) => (
                  <option key={index} value={state.value}>
                    {state.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <p className="candidate-paragraph">ZIP/Postal Code</p>
              <input
                onChange={handleInputChange}
                name="TerritoryZipcode"
                type="text"
                className={`candidate-input ${
                  formErrors.TerritoryZipcode ? "bg-red-300" : ""
                }`}
                required
                value={selectedDetails?.TerritoryZipcode}
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="message"
            className="text-gray-500 font-bold first-letter:text-xl"
          >
            Territory Note / Email Contents
          </label>
          <textarea
            id="message"
            rows={6}
            className="candidate-input"
            onChange={handleInputChange}
            name="TerritoryNotes"
            value={selectedDetails?.TerritoryNotes}
          />
        </div>
        <div>
          <button
            className="candidate-btn mt-6"
            onClick={() => setAddContacts((prevContacts) => prevContacts + 1)}
          >
            ADD ADDITIONAL TERRITORY
          </button>
        </div>
        {addContacts > 0 && (
          <div className="flex flex-col gap-8 mt-5">
            {Array.from({ length: addContacts }).map((_, index) =>
              addContactDiv(index + 1)
            )}
          </div>
        )}
        <label className="flex items-center gap-2 mt-6">
          <input
            onChange={handleInputChange}
            type="checkbox"
            name="IncludeNameInTerritoryRequest"
            className="accent-custom-heading-color"
            checked={selectedDetails?.IncludeNameInTerritoryRequest || false}
          />
          <p className="text-gray-500 font-bold first-letter:text-1xl">
            Include candidate name in Territory Request
          </p>
        </label>
        <div className="flex flex-row justify-center mt-6">
          <button className="candidate-btn w-64" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </DialogBox>
  );
};

export default TerritoryCheck;
