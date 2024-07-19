import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tabs from "./Tabs";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import DialogBox from "src/Popups/DialogBox";
import {
  sanitizeInput,
  validateEmail,
  validatePhone,
  validateUsername,
  validateZipcode,
} from "src/Utils/SanitizeInput";
import { convertToMSSQLDate } from "src/Utils/ConvertDate";

import { useQuery } from "react-query";
import data from "../../../../public/files/data.json"; // Adjust the path if necessary

function convertKeysToLowercase(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToLowercase(item));
  }

  return Object.keys(obj).reduce((acc, key) => {
    const lowerKey = key.toLowerCase();
    acc[lowerKey] = convertKeysToLowercase(obj[key]);
    return acc;
  }, {});
}
const Form = ({ candDetails, candNames, activeListings }) => {
  const { userDetails } = useContext(MyCandContext);
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [selectedDocId, setSelectedDocId] = useState();
  const [selectedDetails, setSelectedDetails] = useState({});
  const [showsuccess, setShowSuccess] = useState(false);
  const [citiesT, setCitiesT] = useState([]);
  const [citiesC, setCitiesC] = useState([]);
  const [selectedStateT, setSelectedStateT] = useState(null);
  const [selectedStateC, setSelectedStateC] = useState(null);
  const [addContacts, setAddContacts] = useState(0);
  const [addTerritory, setAddTerritory] = useState(0);
  const [additionalContacts, setAdditionalContacts] = useState([]);
  const [additionalTerritories, setAdditionalTerritories] = useState([]);

  useEffect(() => {
    if (selectedDocId && selectedDocId !== "") {
      const filtered = candDetails.filter(
        (cand) => cand.docId == selectedDocId
      );
      if (filtered) {
        const selectedCand = filtered[0];
        setSelectedDetails(selectedCand);
      } else {
        setSelectedDetails({});
      }
    }
  }, [selectedDocId, candDetails]);

  const additionalContactAddUrl = `https://backend.ifbc.co/api/CandidateContacts`;
  const additionalTerritoriesAddUrl = `https://backend.ifbc.co/api/TerritoryDetails`;

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

  const { data: territory } = useQuery("territory", getAdditionalTerritories, {
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

  useEffect(() => {
    if (candDetails) {
      setFormFields(convertKeysToLowercase(candDetails));
    }
  }, [candDetails]);

  useEffect(() => {
    for (const [key, value] of Object.entries(formFields)) {
      if (key === "sameasterritoryrequested" && value) {
        formFields.currentcity && delete formFields.currentcity;
        formFields.currentzipcode && delete formFields.currentzipcode;
        formFields.currentstate && delete formFields.currentstate;
      }
    }
  }, [formFields]);

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
            {...(candDetails
              ? { selected: state.value === candDetails[`${name}State`] }
              : {
                  selected: state.value === selectedDetails[`${name}State`],
                })}
          >
            {state.text}
          </option>
        ))}
      </select>
    );
  };

  //Additional Contact

  const handleSubmitContact = async (docId) => {
    additionalContacts.map(async (object) => {
      const additionalContactAddUrl = `https://backend.ifbc.co/api/CandidateContacts`;
      try {
        // if (addContactDataValid) {
        const formData = {
          firstName: object.additionalFirstName,
          lastName: object.additionalLastName,
          email: object.additionalEmail,
          phone: object.additionalPhone,
          relationShip: object.additionalRelationship,
          candidateId: docId,
        };
        const response = await axios.post(additionalContactAddUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        //Additional Territories

        if (response.status === 201) {
          setSuccessMsg("Candidate Information Saved Successfully!");
          setLoading(false);
          setTimeout(() => {
            window.location.href = "/candidate-list";
          }, 3000);
        }
        // }
      } catch (error) {
        console.error(error);
      }
    });
  };

  const handleSubmitTerritory = async (docId) => {
    let formErrors = {};
    let allValid = true; // Flag to track if all validations pass

    await Promise.all(
      additionalTerritories.map(async (object) => {
        const additionalTerritoriesAddUrl = `https://backend.ifbc.co/api/TerritoryDetails`;

        // is wale may srf zipcode ko check krwana tha
        // Field-specific validations
        // agr object may territoryzipcode missing hoga to ye error aega
        // ab agr in teeno may se koi bhi empty hua ya hua hi nhi object may to error ajaega
        // ab agr in teeno may se koi bhi empty hua ye check nhi hora lekn mtlb
        // abhi srf ye hora
        // {territoryZipCode:"" } iska mtlb ke object may terrZip hai ya nhi bas ye check hora lekn ye nhi hora ke empty hai ya nhi
        // object?.territoryZipCode !== '' hum isse check krhe ke null to nhi hai value
        // issi tarah baaki sab ka bhi check krengay
        if (
          !object.territoryZipCode ||
          object?.territoryZipCode === "" ||
          !object.territoryState ||
          object?.territoryState === "" ||
          !object.territoryCity ||
          object?.territoryCity === ""
        ) {
          // ye wala
          formErrors["territoryZipCode"] = "This field is required";
          allFieldsValid = false;
        }
        // agr missing nhi hoga to else may jaega
        else {
          // else may phr zipcode validate hoga ke sahi hai ya nhi
          // humne ek method banaya wa already wo yahan pr nhi kahin or bana wa hai
          // agr sahi nhi daala hua to error aega invalid
          if (!validateZipcode(object.territoryZipCode)) {
            formErrors["territoryZipCode"] = "invalid";
            allValid = false;
          }
          // agr sahi hua to saare error hatjaengay or allValid wala boolean true hi rahega
          else {
            formErrors["territoryZipCode"] = "";
          }
        }

        setFormErrors(formErrors);
        // agr uper sab sahi hua or allValid true hi raha to hum if may chlejaengay
        // acha isme mene baaki sabka check nhi krwaya ke empty agr hon to uska bhi check krwana hoga
        if (allValid) {
          const formData = {
            territoryState: object.territoryState,
            territoryCity: object.territoryCity,
            territoryZipCode: object.territoryZipCode,
            territorynotes: object.territorynotes,
            parentId: docId,
            parent_Type: "R",
            isPrimary: false,
          };

          try {
            const response = await axios.post(
              additionalTerritoriesAddUrl,
              formData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          } catch (error) {
            console.error("Error saving territory information:", error);
            allValid = false;
          }
        }
      })
    );

    if (!allValid) {
      // Handle invalid form data
      console.error("Invalid form data");
      // Optionally, show user a message or take corrective action
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    const reqFields = [
      "firstname",
      "lastname",
      "phone",
      "email",
      "territorystate",
      "territorycity",
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

    try {
      if (allFieldsValid) {
        const formData = {
          ...(candDetails?.docId ? { DocId: candDetails?.docId } : {}),
          closeDate: formFields.closedate ?? "",
          firstName: formFields.firstname ?? "",
          lastName: formFields.lastname ?? "",
          Phone: formFields.phone ?? "",
          Email: formFields.email ?? "",
          territoryCity: formFields.territorycity ?? "",
          territoryState: formFields.territorystate ?? "",
          territoryZipcode: formFields.territoryzipcode ?? "",
          currentCity: formFields.currentcity ?? "",
          currentState: formFields.currentstate ?? "",
          currentZipcode: formFields.currentzipcode ?? "",
          territoryNotes: formFields.territorynotes ?? "",
          DealSource: formFields.dealsource ?? "",
          DealSourceCost: formFields.dealsourcecost ?? "",
          ZorackleValue: formFields.zoraclevalue ?? "",
          DealValue: formFields.dealvalue ?? "",
          About: formFields.about ?? "",
          InvestmentFranchise: formFields.investmentfranchise ?? "",
          Funding: formFields.funding ?? "",
          CreditScore: formFields.creditscore ?? "",
          InitialQualifyingNote: formFields.initialqualifyingnote ?? "",
          Activities: formFields.activities ?? "",
          AttendingNetworkFunction: formFields.attendingnetworkfunction ?? "",
          MultiUnitOps: formFields.multiunitops ?? "",
          BusinessPartner: formFields.businesspartner ?? "",
          FamilyFeel: formFields.familyfeel ?? "",
          EmployeesPrefer: formFields.employeesprefer ?? "",
          StaffSize: formFields.staffsize ?? "",
          ZorakleNotes: formFields.zoraklenotes ?? "",
          FundingBusiness: formFields.fundingbusiness ?? "",
          RetirementPlan: formFields.retirementplan ?? "",
          VALoan: formFields.valoan ?? "",
          CurrentNetworth: formFields.currentnetworth ?? "",
          TrafficViolation: formFields.trafficviolation ?? "",
          Unsatisfiedjudgment: formFields.unsatisfiedjudgment ?? "",
          Bankruptcy: formFields.bankruptcy ?? "",
          EligibilityNote: formFields.eligibilitynote ?? "",
          BusinessBefore: formFields.businessbefore ?? "",
          MarketingExperience: formFields.marketingexperience ?? "",
          ManagementExperice: formFields.managementexperience ?? "",
          SalesExperience: formFields.salesexperience ?? "",
          ReviewFinancialStatement: formFields.reviewfinancialstatement ?? "",
          CSExperience: formFields.csexperience ?? "",
          AttractiveBusinessOwner: formFields.attractivebusinessowner ?? "",
          HandleNewBusiness: formFields.handlenewbusiness ?? "",
          BusinessExpectations: formFields.businessexpectations ?? "",
          WantNote: formFields.wantnote ?? "",
          PreferB2b: formFields.preferb2b ?? "",
          PhysicalLocation: formFields.physicallocation ?? "",
          Inventory: formFields.inventory ?? "",
          ColdCalling: formFields.coldcalling ?? "",
          PassiveMode: formFields.passivemode ?? "",
          BusinessHours: formFields.businesshours ?? "",
          Networth: formFields.networth ?? "",
          LiquidCash: formFields.liquidcash ?? "",
          Competency1: formFields.competency1 ?? "",
          Competency2: formFields.competency2 ?? "",
          Competency3: formFields.competency3 ?? "",
          FranchiseCause: formFields.franchisecause ?? "",
          ProfessionalBackground: formFields.professionalbackground ?? "",
          FranchiseInterested: formFields.franchiseinterested ?? "",
          TimeFrame: formFields.timeframe ?? "",
          Status: formFields.status ?? "",
          PipelineStep: formFields.pipelinestep ?? "",
          LostReason: formFields.lostreason ?? "",
          CategoryRating: formFields.categoryrating ?? "",
          AgentUserId: userDetails.docId,
          isArchive: false,
        };

        const baseUrl = "https://backend.ifbc.co/api/candidates";
        let response = "";

        // Send the POST request using Axios
        if (candDetails) {
          // response = await axios.put(
          //   `${baseUrl}/${candDetails?.docId}`,
          //   formData,
          //   {
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }
          // );
        } else {
          response = await axios.post(baseUrl, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
        if (response.status === 201) {
          setFormErrors({});
          // iske andar krna tha btaya to tha
          const docId = response.data.docId;
          // yahan pr loop cchalao additionalContacts iska (map method) may ata hun phr ye kro jab tk ok
          // bhai har chez gpt se ku puchre khud bhi kro
          handleSubmitContact();

          handleSubmitTerritory();
        } else if (response.status === 204) {
          setSuccessMsg("Candidate Information Saved Successfully!");
          setShowSuccess(true);
          setLoading(false);
        } else {
          // setFormErrors({  });
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
        window.scrollTo(0, 400);

        // Handle invalid fields (e.g., show validation errors)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitRegistration = async () => {
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
        activeListings.map(async (id) => {
          const formData = {
            candidateId: selectedDocId,
            AgentId: userDetails.docId,
            listingsIds: id.toString(),
            InterRequest:
              selectedDetails.IncludeNameInTerritoryRequest ?? false,
            docType: "FR",
            Status: "Pending",
            Message: "",
          };

          const jsonData = JSON.stringify(formData);
          const baseUrl = "https://backend.ifbc.co/api/registrations";

          // Send the POST request using Axios
          const response = await axios.post(baseUrl, jsonData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.status === 200 || response.status === 201) {
            setFormErrors({});
            setSuccessMsg(`Congratulations! You have now sent your Formal Registration!
                          It will be delivered to the email account associated with the this concepts profile. For your records, a time stamped copy of this email will be sent to you as well.
                          Acceptance of your candidate can only be done by the concept you are referring them to. You will need a written response from a representative of this concept for confirmation of your submission.
                          This will count as a pre-registration of your candidate. Full registration requires complete contact information and a scheduled appointment with the franchisor. Certain franchisors may require additional requirements as well.
                          For your convenience, a full registration may be submitted by using the the Formal Registration button located on the concepts profile.
                          `);
            setShowSuccess(true);
            setLoading(false);
            setTimeout(() => {
              window.location.href = "/messages/formal-registration";
            }, 3000);
          } else {
            setFormErrors({ error: response.data });
            setLoading(false);
            window.scrollTo(0, 500);
            // Handle unexpected response
          }
        });
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

  const handleInputChange = async (e) => {
    const { name, value, type, checked } = e.target;
    let inputValue = type === "checkbox" ? checked : sanitizeInput(value);
    const newName = name.toLowerCase();

    if (newName === "closedate") {
      inputValue = convertToMSSQLDate(value);
    }

    if (name.startsWith("additional")) {
      const splittedName = name.split("_");
      const index = parseInt(splittedName[1]); // Extract index from name

      // Create a copy of additionalContacts array
      const updatedContacts = additionalContacts ? [...additionalContacts] : [];
      // Ensure updatedContacts[index] is initialized if it doesn't exist
      if (!updatedContacts[index]) {
        updatedContacts[index] = {};
      }

      // Check if both additionalFirstName and additionalLastName exist in updatedContacts[index]
      updatedContacts[index] = {
        ...updatedContacts[index],
        [splittedName[0]]: value,
      };

      // Update additionalContacts state
      setAdditionalContacts(
        updatedContacts.filter((contact) => Object.keys(contact).length > 0)
      );
    } else {
      // Update formFields state
      setFormFields((prevFields) => ({
        ...prevFields,
        [name]: inputValue,
      }));
    }

    // Reset form error for the current input
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [newName]: "",
    }));
  };

  return (
    <>
      <DialogBox show={showsuccess} setShow={setShowSuccess}>
        <div className="bg-white p-5 py-10 grid place-items-center text-3xl text-custom-heading-color">
          <button
            className="absolute top-5 right-10"
            onClick={() => setShowSuccess(false)}
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

          {successMsg}
        </div>
      </DialogBox>
      <div
        id="main-new-candidate-form-container"
        className={` divide-y-2 divide-custom-dark-blue/10   ${candDetails ? "" : "max-w-7xl mx-auto my-10 col-span-12"} `}
      >
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
          territory={territory}
        />
        <FormThirdRow
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
        />

        {/* tabs */}
        <Tabs
          handleInputChange={handleInputChange}
          candDetails={candDetails}
          candNames={candNames}
          selectedDetails={selectedDetails}
        />
        {/* submit button */}
      </div>

      <div
        id="button-container"
        className="flex flex-col gap-5 items-center justify-center my-10 col-span-12"
      >
        {!candDetails && (
          <p className="text-sm text-white text-left my-6 bg-custom-heading-color p-5">
            By submitting the form, you agree to receive calls, text messages,
            or emails from <a href="https://ifbc.co">ifbc.co</a> at the contact
            information provided. Message rates may apply. <br />
            Text STOP to cancel text messaging at any time. <br />
            See{" "}
            <a href="/terms-conditions" className=" font-extrabold underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className=" font-extrabold underline">
              Privacy Policy
            </a>{" "}
            for additional details.
          </p>
        )}
        {candNames && candDetails ? (
          <button
            className="candidate-btn w-96"
            onClick={handleSubmitRegistration}
          >
            {loading ? "Loading..." : "SEND APPLICATION"}
          </button>
        ) : (
          <button className="candidate-btn w-96" onClick={handleSubmit}>
            {loading
              ? "Loading..."
              : candDetails
                ? "EDIT CANDIDATE INFORMATION"
                : "SUBMIT CANDIDATE INFORMATION"}
          </button>
        )}
      </div>
    </>
  );
};

const FormFirstRow = ({
  handleInputChange,
  formErrors,
  candDetails,
  candNames,
  selectedDocId,
  setSelectedDocId,
  selectedDetails,
  addContacts,
  setAddContacts,
  contacts,
}) => {
  const addContactDiv = (contact, index) => {
    const relationships = ["Business Partner", "Spouse", "Family Member"];
    const handleRemoveAdditionalContact = async (docId) => {
      const additionalContactAddUrl = `https://backend.ifbc.co/api/CandidateContacts/${docId}`;
      await axios.delete(additionalContactAddUrl);
    };
    return (
      <div
        key={index}
        id={`additional-contact-row-${index}`}
        className="p-5 border-2 border-custom-heading-color shadow-lg my-5"
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
              name={`additionalFirstName_${index}`}
              className="candidate-input"
              // ye error agr aega to border red hojaega ye har jaga add kro
              // aese hoga har additional wali field pr smjhgye?  han ha ok krke btao phr ok
              style={{
                borderColor: formErrors.additionalFirstName ? "red" : undefined,
              }}
              required
              defaultValue={contact ? contact.firstName : ""}
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Last Name</p>
            <input
              onChange={handleInputChange}
              type="text"
              name={`additionalLastName_${index}`}
              className="candidate-input"
              style={{
                borderColor: formErrors.additionalLastName ? "red" : undefined,
              }}
              required
              defaultValue={contact ? contact.lastName : ""}
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
              type="tel"
              name={`additionalPhone_${index}`}
              className="candidate-input"
              style={{
                borderColor: formErrors.additionalPhone ? "red" : undefined,
              }}
              required
              defaultValue={contact ? contact.phone : ""}
            />
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Email</p>
            <input
              onChange={handleInputChange}
              type="email"
              name={`additionalEmail_${index}`}
              className="candidate-input"
              style={{
                borderColor: formErrors.additionalEmail ? "red" : undefined,
              }}
              required
              defaultValue={contact ? contact.email : ""}
            />
          </div>

          <div className="candidate-sub-childs">
            <p className="candidate-label">Relationship to Primary Candidate</p>
            <select
              onChange={handleInputChange}
              className="candidate-input"
              style={{
                borderColor: formErrors.additionalRelationship
                  ? "red"
                  : undefined,
              }}
              name={`additionalRelationship_${index}`}
            >
              <option value="">Select One</option>
              {relationships.map((relationship, idx) => (
                <option
                  key={idx}
                  value={relationship}
                  selected={
                    contact ? contact.relationShip === relationship : false
                  }
                >
                  {relationship}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div id="button-container" className="w-full flex justify-center">
          {contact ? (
            <button
              className="candidate-btn"
              onClick={() => handleRemoveAdditionalContact(contact.docId)}
            >
              REMOVE CONTACT
            </button>
          ) : (
            <button
              className="candidate-btn"
              onClick={() => setAddContacts((prevContacts) => prevContacts - 1)}
            >
              REMOVE CONTACT
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="first-row" className={`${candDetails ? "" : "py-10"} py-5`}>
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

          {candNames && candNames.length > 0 ? (
            <select
              name="firstname"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.firstname ? "red" : undefined,
              }}
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
          ) : (
            <input
              type="text"
              onChange={handleInputChange}
              name="firstname"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.firstname ? "red" : undefined,
              }}
              required
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.firstName }
                : { defaultValue: candDetails?.firstName })}
            />
          )}

          {formErrors.firstname && formErrors.firstname === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid username. It should be 3-16 characters long and can
              include letters, numbers, underscores, and spaces.
            </p>
          )}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Last Name*</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastname"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.lastname ? "red" : undefined,
            }}
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.lastName }
              : { defaultValue: candDetails?.lastName })}
          />
          {formErrors.lastname && formErrors.lastname === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid username. It should be 3-16 characters long and can
              include letters, numbers, underscores, and spaces.
            </p>
          )}
        </div>
      </div>
      <div
        id="second-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">Phone Number*</p>

          <input
            type="number"
            name="phone"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.phone ? "red" : undefined,
            }}
            onChange={handleInputChange}
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.phone }
              : { defaultValue: candDetails?.phone })}
          />
          {formErrors.phone && formErrors.phone === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid phone number. It should be 11 digits long.
            </p>
          )}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Email*</p>
          <input
            type="email"
            name="email"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.email ? "red" : undefined,
            }}
            required
            onChange={handleInputChange}
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.email }
              : { defaultValue: candDetails?.email })}
          />
          {formErrors.email && formErrors.email === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid Email (john@example.com)
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
        </div>
      </div>

      {contacts && contacts.length > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {contacts.map((contact, index) => addContactDiv(contact, index))}
        </div>
      )}

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
            addContactDiv(null, index)
          )}
        </div>
      )}
    </div>
  );
};

const FormSecondRow = ({
  handleInputChange,
  stateDD,
  formErrors,
  candDetails,
  candNames,
  selectedDetails,
  selectedStateT,
  formFields,
  citiesT,
  addTerritory,
  setAddTerritory,
}) => {
  const addTerritoryDiv = (index) => {
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
            <p className="candidate-label">State / Province*</p>

            {/* state dd */}
            {stateDD("territory")}
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">City*</p>
            {selectedStateT && citiesT.length > 0 ? (
              <select
                className="candidate-select"
                name="territorycity"
                onChange={handleInputChange}
              >
                {!formFields.territorycity && (
                  <option value="">Select City</option>
                )}
                {citiesT.map((city) => (
                  <option
                    key={city}
                    value={city}
                    {...(candNames && candNames.length > 0
                      ? { selected: selectedDetails?.territoryCity }
                      : { selected: candDetails?.territoryCity })}
                  >
                    {city}
                  </option>
                ))}
              </select>
            ) : (
              <input
                onChange={handleInputChange}
                type="text"
                name="territorycity"
                className="candidate-input w-full"
                style={{
                  borderColor: formErrors.territorycity ? "red" : undefined,
                }}
                required
                {...(candNames && candNames.length > 0
                  ? { value: selectedDetails?.territoryCity }
                  : { defaultValue: candDetails?.territoryCity })}
              />
            )}
          </div>

          <div className="candidate-sub-childs">
            <p className="candidate-label">Zip / Postal Code*</p>
            <input
              type="number"
              name="territoryzipcode"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.territoryzipcode ? "red" : undefined,
              }}
              onChange={handleInputChange}
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.territoryZipcode }
                : { defaultValue: candDetails?.territoryZipcode })}
            />
          </div>
        </div>
        <div
          id="second-sub-row"
          className="gap-[15px] sm:flex-row sm:gap-[35px]"
        >
          <div id="fourth-sub-row" className="candidate-sub-childs">
            <p className="candidate-label">Territory Notes</p>
            <textarea
              onChange={handleInputChange}
              name="territoryNotes"
              rows={10}
              className="candidate-input"
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.territoryNotes }
                : { defaultValue: candDetails?.territoryNotes })}
            ></textarea>
          </div>
        </div>
        <div id="button-container" className="w-full flex justify-center gap-5">
          <button
            className="candidate-btn"
            onClick={() => setAddTerritory((prevContacts) => prevContacts - 1)}
          >
            REMOVE TERRITORY
          </button>

          <button
            className="candidate-secondary-btn"
            // onClick={() => setAddTerritory((prevContacts) => prevContacts - 1)}
          >
            MAKE PRIMARY TERRITORY
          </button>
        </div>
      </div>
    );
  };
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
          <p className="candidate-label">State / Province*</p>

          {/* state dd */}
          {stateDD("territory")}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">City*</p>
          {selectedStateT && citiesT.length > 0 ? (
            <select
              className="candidate-select"
              name="territorycity"
              onChange={handleInputChange}
            >
              {!formFields.territorycity && (
                <option value="">Select City</option>
              )}
              {citiesT.map((city) => (
                <option
                  key={city}
                  value={city}
                  {...(candNames && candNames.length > 0
                    ? { selected: selectedDetails?.territoryCity }
                    : { selected: candDetails?.territoryCity })}
                >
                  {city}
                </option>
              ))}
            </select>
          ) : (
            <input
              onChange={handleInputChange}
              type="text"
              name="territorycity"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.territorycity ? "red" : undefined,
              }}
              required
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.territoryCity }
                : { defaultValue: candDetails?.territoryCity })}
            />
          )}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Zip / Postal Code*</p>
          <input
            type="number"
            name="territoryzipcode"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.territoryzipcode ? "red" : undefined,
            }}
            onChange={handleInputChange}
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.territoryZipcode }
              : { defaultValue: candDetails?.territoryZipcode })}
          />
        </div>
      </div>
      <div id="fourth-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">Territory Notes</p>
        <textarea
          onChange={handleInputChange}
          name="territoryNotes"
          rows={10}
          className="candidate-input"
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.territoryNotes }
            : { defaultValue: candDetails?.territoryNotes })}
        ></textarea>
      </div>

      {/* {territory && territory.length > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {territory.map((territory, index) =>
            addTerritoryDiv(territory, index)
          )}
        </div>
      )} */}
      <div id="button-container" className="w-full flex justify-center">
        <button
          className="candidate-btn"
          onClick={() => setAddTerritory((prevTerritory) => prevTerritory + 1)}
        >
          ADD ADDITIONAL TERRITORY
        </button>
      </div>

      {addTerritory > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {Array.from({ length: addTerritory }).map((_, index) =>
            addTerritoryDiv(null, index)
          )}
        </div>
      )}
    </div>
  );
};

const FormThirdRow = ({
  handleInputChange,
  stateDD,
  setFormFields,
  candDetails,
  candNames,
  selectedDetails,
  selectedStateC,
  citiesC,
  formFields,
  formErrors,
}) => {
  const [check, setChecked] = useState(false);

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
            <p className="candidate-label">State / Province*</p>

            {/* state dd */}
            {stateDD("current")}
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">City*</p>
            {selectedStateC && citiesC.length > 0 ? (
              <select
                className="candidate-select"
                name="currentcity"
                onChange={handleInputChange}
              >
                {!formFields.currentcity && (
                  <option value="">Select City</option>
                )}
                {citiesC.map((city) => (
                  <option
                    key={city}
                    value={city}
                    {...(candNames && candNames.length > 0
                      ? { selected: selectedDetails?.currentCity }
                      : { selected: candDetails?.currentCity })}
                  >
                    {city}
                  </option>
                ))}
              </select>
            ) : (
              <input
                onChange={handleInputChange}
                type="text"
                name="currentcity"
                className="candidate-input w-full"
                required
                {...(candNames && candNames.length > 0
                  ? { value: selectedDetails?.currentCity }
                  : { defaultValue: candDetails?.currentCity })}
              />
            )}
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Zip / Postal Code*</p>
            <input
              onChange={handleInputChange}
              type="number"
              name="currentzipcode"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.currentzipcode ? "red" : undefined,
              }}
              required
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.currentZipcode }
                : { defaultValue: candDetails?.currentZipcode })}
            />
          </div>
        </div>
      )}

      <div id="seventh-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">About This Candidate / Email Contents</p>
        <textarea
          onChange={handleInputChange}
          name="About"
          rows={10}
          className="candidate-input"
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.about }
            : { defaultValue: candDetails?.about })}
        />
      </div>
      <div id="eigth-sub-row" className="flex flex-col md:flex-row gap-2">
        <div className="candidate-sub-childs">
          <p className="candidate-label">Deal Source</p>
          <input
            onChange={handleInputChange}
            type="number"
            name="DealSource"
            className="candidate-input"
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.dealSource }
              : { defaultValue: candDetails?.dealSource })}
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Deal Source Cost</p>
          <input
            onChange={handleInputChange}
            type="number"
            name="DealSourceCost"
            className="candidate-input"
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.dealSourceCost }
              : { defaultValue: candDetails?.dealSourceCost })}
          />
        </div>
        <div className="candidate-sub-childs max-md:w-full">
          <p className="candidate-label">Close Date</p>
          <input
            onChange={handleInputChange}
            name="closeDate"
            type="datetime-local"
            className="candidate-input max-md:w-full"
            placeholder="Select date"
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.closeDate }
              : { defaultValue: candDetails?.closeDate })}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
