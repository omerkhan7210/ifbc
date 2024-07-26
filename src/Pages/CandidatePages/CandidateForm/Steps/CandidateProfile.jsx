import React, { useState } from "react";
import FormFirstRow from "../FormFirstRow";
import FormSecondRow from "../FormSecondRow";
import { useQuery } from "react-query";

import data from "../../../../../public/files/data.json"; // Adjust the path if necessary
import {
  validateEmail,
  validatePhone,
  validateUsername,
  validateZipcode,
} from "src/Utils/SanitizeInput";
const CandidateProfile = ({
  handleInputChange,
  formErrors,
  candDetails,
  candNames,
  setSelectedDocId,
  selectedDocId,
  selectedDetails,
  addContacts,
  setAddContacts,
  formFields,
  addTerritory,
  setAddTerritory,
  setFormFields,
  setStep,
  setFormErrors,
  listingNames,
}) => {
  const [citiesT, setCitiesT] = useState([]);
  const [citiesC, setCitiesC] = useState([]);

  const [selectedStateT, setSelectedStateT] = useState(null);
  const [selectedStateC, setSelectedStateC] = useState(null);

  const getAdditionalContacts = async () => {
    const response = await axios.get(additionalContactAddUrl);
    return response.data;
  };

  const getAdditionalTerritories = async () => {
    const response = await axios.get(additionalTerritoriesAddUrl);
    return response.data;
  };

  const { data: contacts, isLoading } = useQuery(
    "contacts",
    getAdditionalContacts,
    {
      select: (data) => {
        return data?.filter(
          (contact) => contact.candidateId === candDetails?.docId
        );
      },
      cacheTime: 24000,
      enabled: !!candDetails,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );

  const { data: territorys } = useQuery("territory", getAdditionalTerritories, {
    select: (data) => {
      return data?.filter(
        (territory) => territory.candidateId === candDetails?.docId
      );
    },
    cacheTime: 24000,
    enabled: !!candDetails,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  const stateDD = (name) => {
    return (
      <select
        onChange={(e) => handleStateChange(e, name)}
        name={`${name}state`}
        className="candidate-select w-full"
        style={{
          borderColor: formErrors[`${name}state`] ? "red" : undefined,
        }}
      >
        {!formFields[`${name}state`] && <option value="">Select State</option>}
        {states.map((state, index) => (
          <option
            key={index}
            value={state.value}
            {...(candNames
              ? candDetails
                ? { selected: state.value === candDetails[`${name}State`] }
                : {
                    selected: state.value === selectedDetails[`${name}State`],
                  }
              : { selected: formFields[`${name}state`] === state.value })}
          >
            {state.text}
          </option>
        ))}
      </select>
    );
  };

  const states = [
    { value: "AL", text: "Alabama" },
    { value: "AB", text: "Alberta" },
    { value: "AK", text: "Alaska" },
    { value: "AZ", text: "Arizona" },
    { value: "AR", text: "Arkansas" },
    { value: "BC", text: "British Columbia" },
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
    { value: "MB", text: "Manitoba" },
    { value: "MD", text: "Maryland" },
    { value: "MA", text: "Massachusetts" },
    { value: "MI", text: "Michigan" },
    { value: "MN", text: "Minnesota" },
    { value: "MS", text: "Mississippi" },
    { value: "MO", text: "Missouri" },
    { value: "MT", text: "Montana" },
    { value: "NE", text: "Nebraska" },
    { value: "NV", text: "Nevada" },
    { value: "NB", text: "New Brunswick" },
    { value: "NH", text: "New Hampshire" },
    { value: "NJ", text: "New Jersey" },
    { value: "NM", text: "New Mexico" },
    { value: "NY", text: "New York" },
    { value: "NL", text: "Newfoundland and Labrador" },
    { value: "NC", text: "North Carolina" },
    { value: "ND", text: "North Dakota" },
    { value: "NT", text: "Northwest Territories" },
    { value: "NS", text: "Nova Scotia" },
    { value: "NU", text: "Nunavut" },
    { value: "OH", text: "Ohio" },
    { value: "OK", text: "Oklahoma" },
    { value: "ON", text: "Ontario" },
    { value: "OR", text: "Oregon" },
    { value: "PA", text: "Pennsylvania" },
    { value: "PE", text: "Prince Edward Island" },
    { value: "QC", text: "Quebec" },
    { value: "RI", text: "Rhode Island" },
    { value: "SC", text: "South Carolina" },
    { value: "SD", text: "South Dakota" },
    { value: "SK", text: "Saskatchewan" },
    { value: "TN", text: "Tennessee" },
    { value: "TX", text: "Texas" },
    { value: "UT", text: "Utah" },
    { value: "VT", text: "Vermont" },
    { value: "VA", text: "Virginia" },
    { value: "WA", text: "Washington" },
    { value: "WV", text: "West Virginia" },
    { value: "WI", text: "Wisconsin" },
    { value: "WY", text: "Wyoming" },
    { value: "YT", text: "Yukon Territory" },
    { value: "INT", text: "International" },
  ];
  const getCitiesOfState = (stateCode) => {
    const state = states.find((s) => s.value === stateCode);

    if (state) {
      const stateName = state.text;
      return data[stateName] || [];
    } else {
      return [];
    }
  };

  const handleStateChange = (e, name) => {
    const stateCode = e.target.value;
    const cityList = getCitiesOfState(stateCode);

    if (name === "territory") {
      setSelectedStateT(stateCode);
      setCitiesT(cityList);
    } else {
      setSelectedStateC(stateCode);
      setCitiesC(cityList);
    }
    setFormFields((prev) => {
      return {
        ...prev,
        [`${name}state`]: stateCode,
      };
    });
  };

  const handleCanProfile = () => {
    const reqFields = [
      "firstname",
      "lastname",
      "phone",
      "email",
      "territorystate",
      "territorycity",
      "territoryzipcode",
      "franchiseInterested",
      "currentcity",
      "currentzipcode",
      "currentState",
    ];
    let allFieldsValid = true;
    let formErrors = {};

    reqFields.forEach((field) => {
      const newKey = field.toLowerCase().split(" ").join("");
      const value = formFields[newKey]?.trim() || "";

      if (!value) {
        formErrors[newKey] = "This field is required";
        allFieldsValid = false;
      } else {
        // Field-specific validations
        if (newKey === "email" && !validateEmail(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "phone" && !validatePhone(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "firstname" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "lastname" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "territoryzipcode" && !validateZipcode(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "currentzipcode" && !validateZipcode(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else {
          formErrors[newKey] = "";
        }
      }
    });

    setFormErrors(formErrors);

    if (allFieldsValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div className="md:max-w-3xl md:mx-auto max-md:mx-5">
      {" "}
      <FormFirstRow
        handleInputChange={handleInputChange}
        formErrors={formErrors}
        candDetails={candDetails}
        candNames={candNames}
        setSelectedDocId={setSelectedDocId}
        selectedDocId={selectedDocId}
        selectedDetails={selectedDetails}
        addContacts={addContacts}
        setAddContacts={setAddContacts}
        contacts={contacts}
        formFields={formFields}
      />
      <FormSecondRow
        stateDD={stateDD}
        handleInputChange={handleInputChange}
        formErrors={formErrors}
        candDetails={candDetails}
        candNames={candNames}
        selectedDetails={selectedDetails}
        selectedStateT={selectedStateT}
        formFields={formFields}
        citiesT={citiesT}
        addTerritory={addTerritory}
        setAddTerritory={setAddTerritory}
        territorys={territorys}
        citiesC={citiesC}
        listingNames={listingNames}
      />
      {/* <FormThirdRow
        stateDD={stateDD}
        handleInputChange={handleInputChange}
        setFormFields={setFormFields}
        formErrors={formErrors}
        candDetails={candDetails}
        candNames={candNames}
        selectedDetails={selectedDetails}
        selectedStateC={selectedStateC}
        formFields={formFields}
        citiesC={citiesC}
      /> */}
      {/* submit button ki jaga next button aega jo next step pr lekr jaega */}
      <div
        id="button-container-initial"
        className="flex items-center mt-5 gap-10"
      >
        <button
          className="candidate-btn w-40 flex items-center justify-between"
          onClick={handleCanProfile}
        >
          Next
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
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CandidateProfile;
