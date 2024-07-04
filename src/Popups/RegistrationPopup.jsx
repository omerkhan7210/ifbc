import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import DialogBox from "./DialogBox";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import Form from "src/Pages/CandidatePages/NewCandidate/Form";
import { CSCContext } from "../Context/LocationSelector";
import { getCitiesOfState } from "src/Utils/locationUtils";

const RegisterationPopup = ({ setShow, show, registrationType }) => {
  const { cands, userDetails } = useContext(MyCandContext);

  const { activeListings } = useContext(MyContext);
  const [candNames, setNames] = useState([]);
  const [selectedDocId, setSelectedDocId] = useState();
  const [selectedDetails, setSelectedDetails] = useState({
    DocId: "",
    firstName: "",
    lastName: "",
    territoryCity: "",
    territoryState: "",
    territoryZipcode: "",
    territoryNotes: "",
    IncludeNameInTerritoryRequest: false,
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [showsuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (cands && cands.length > 0) {
      let names = cands.map((cand) => ({
        name: cand.firstName,
        docId: cand.docId,
      }));
      setNames(names);
    }
  }, [cands]);

  useEffect(() => {
    if (selectedDocId && selectedDocId !== "") {
      const filtered = cands.filter((cand) => cand.docId == selectedDocId);
      if (filtered) {
        const selectedCand = filtered[0];
        setSelectedDetails({
          DocId: selectedDocId,
          firstName: selectedCand.firstName,
          lastName: selectedCand.lastName,
          territoryCity: selectedCand.territoryCity,
          territoryState: selectedCand.territoryState,
          territoryZipcode: selectedCand.territoryZipcode,
          territoryNotes: selectedCand.territoryNotes,
          IncludeNameInTerritoryRequest: false,
        });
      } else {
        setSelectedDetails({
          DocId: "",
          firstName: "",
          lastName: "",
          territoryCity: "",
          territoryState: "",
          territoryZipcode: "",
          territoryNotes: "",
          IncludeNameInTerritoryRequest: false,
        });
      }
    }
  }, [selectedDocId, cands]);

  return (
    <>
      {/* SUCCESS DIALOG BOX */}
      <DialogBox show={showsuccess} setShow={setShowSuccess}>
        <div className="p-10 text-2xl text-custom-heading-color text-center">
          {successMsg}
        </div>
      </DialogBox>
      {/* TCHECK DIALOG BOX */}
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
          id="registration-popup"
          className="bg-white overflow-y-scroll h-[500px] rounded-lg shadow-md p-10"
        >
          {activeListings && activeListings.length > 0 ? (
            <>
              <h2 className="text-custom-heading-color font-bold text-5xl uppercase text-center">
                {registrationType === "TC"
                  ? "Territory Check"
                  : "Formal Registration"}
              </h2>
              {registrationType === "TC" ? (
                <FormTC
                  selectedDetails={selectedDetails}
                  setSelectedDocId={setSelectedDocId}
                  candNames={candNames}
                  selectedDocId={selectedDocId}
                  userDetails={userDetails}
                  activeListings={activeListings}
                  setSelectedDetails={setSelectedDetails}
                  setShowSuccess={setShowSuccess}
                  setSuccessMsg={setSuccessMsg}
                />
              ) : (
                <Form
                  candNames={candNames}
                  candDetails={cands}
                  activeListings={activeListings}
                />
              )}
            </>
          ) : (
            <h1 className="text-3xl text-center font-semibold text-custom-heading-color h-full flex items-center">
              No Franchises Selected for the report. To send a territory check
              please make sure that you have checkmarked all franchise
              selections you wish to send a territory check to.
            </h1>
          )}
        </div>
      </DialogBox>
    </>
  );
};

const FormTC = ({
  selectedDocId,
  setSelectedDocId,
  candNames,
  selectedDetails,
  userDetails,
  setSelectedDetails,
  activeListings,
  setShowSuccess,
  setSuccessMsg,
}) => {
  const [addContacts, setAddContacts] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const handleStateChange = (e, name) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    const cityList = getCitiesOfState("US", stateCode);
    setCities(cityList);
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const reqFields = [
      "firstName",
      "lastName",
      "territoryState",
      "territoryZipcode",
      "territoryCity",
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
          candidateId: selectedDocId ?? 0,
          AgentId: userDetails.docId ?? 0,
          listingsIds:
            JSON.stringify(activeListings).replace(/[^0-9,]/g, "") ?? "",
          InterRequest: selectedDetails.IncludeNameInTerritoryRequest ?? false,
          docType: "TC",
          Status: "Pending",
          Message: "",
          email: "",
        };

        const baseUrl =
          "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/registrations";

        // Send the POST request using Axios
        const response = await axios.post(baseUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 201) {
          setFormErrors({});
          setSuccessMsg("Territory Check Send Successfully.");
          setShowSuccess(true);
          setLoading(false);
          setTimeout(() => {
            window.location.href = "/messages/territory-check";
          }, 3000);
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setSelectedDetails((prevFields) => ({
      ...prevFields,
      [name]: inputValue,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <form action="">
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

        <div className="flex justify-between w-full max-md:flex-col max-md:gap-5">
          <div className="flex flex-col w-full">
            <p className="candidate-paragraph">First Name</p>

            <select
              id="firstname"
              name="firstName"
              className={`candidate-select capitalize${
                formErrors.firstname ? "bg-red-300" : ""
              }`}
              onChange={(e) => {
                setSelectedDocId(e.target.value);
              }}
            >
              {!selectedDocId && <option value="">Choose any Candidate</option>}
              {candNames &&
                candNames.map((cand) => (
                  <option key={cand.docId} value={cand.docId}>
                    {cand.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full">
            <p className="candidate-paragraph">Last Name*</p>
            <input
              onChange={handleInputChange}
              name="lastName"
              type="text"
              className={`candidate-input ${
                formErrors.lastName ? "bg-red-300" : ""
              }`}
              required
              value={selectedDetails?.lastName}
            />
          </div>
        </div>
      </div>

      <div id="sr-tcheck-popup" className="mt-10">
        <h2 className="candidate-sub-heading">Territory*</h2>
        <div className="flex justify-between gap-4 max-md:flex-col">
          <div className="flex flex-col w-full">
            <p className="candidate-paragraph">State/Province/Region</p>
            <select
              onChange={handleStateChange}
              name={`${name}state`}
              id="state"
              className={twMerge(
                "candidate-select",
                formErrors.territorystate && name === "territory"
                  ? "bg-red-200 text-white"
                  : ""
              )}
            >
              {states.map((state, index) =>
                selectedState ? (
                  <option value="" disabled>
                    Select State
                  </option>
                ) : (
                  <option key={index} value={state.value}>
                    {state.text}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="flex flex-col w-full">
            <p className="candidate-paragraph">City</p>
            <select
              onChange={handleInputChange}
              name="territoryCity"
              className={twMerge(
                "candidate-select",
                formErrors.territorycity ? "bg-red-200 text-white" : ""
              )}
            >
              {cities.map((city, index) =>
                selectedState ? (
                  <option value="" disabled>
                    Select a state first
                  </option>
                ) : (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <p className="candidate-paragraph">ZIP/Postal Code</p>
            <input
              onChange={handleInputChange}
              name="territoryZipcode"
              type="text"
              className={`candidate-input ${
                formErrors.territoryZipcode ? "bg-red-300" : ""
              }`}
              required
              value={selectedDetails?.territoryZipcode}
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
          name="territoryNotes"
          value={selectedDetails?.territoryNotes}
        />
      </div>
      <div className="max-md:flex justify-center">
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
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default RegisterationPopup;
