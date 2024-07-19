import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tabs from "../NewCandidate/Tabs";
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
import FormFirstRow from "./FormFirstRow";
import FormSecondRow from "./FormSecondRow";
import FormThirdRow from "./FormThirdRow";

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
  const { userDetails, role } = useContext(MyCandContext);
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
  const additionalContactAddUrl = `https://backend.ifbc.co/api/CandidateContacts`;
  const additionalTerritoriesAddUrl = `https://backend.ifbc.co/api/TerritoryDetails`;

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
  // const handleSubmitContact = async (docId) => {
  //   let allFieldsValid = true;
  //   let formErrors = {};

  //   if (additionalContacts.length > 0) {
  //     await Promise.all(
  //       additionalContacts.map(async (object, index) => {
  //         const reqFields = [
  //           "additionalFirstName",
  //           "additionalLastName",
  //           "additionalEmail",
  //           "additionalPhone",
  //           "additionalRelationship",
  //         ];

  //         reqFields.forEach((field) => {
  //           const newKey = field;
  //           const value = formFields[newKey]?.trim() || "";

  //           if (!value) {
  //             formErrors[newKey] = "This field is required";
  //             allFieldsValid = false;
  //           } else {
  //             // Field-specific validations
  //             if (newKey === "additionalEmail" && !validateEmail(value)) {
  //               formErrors[`${newKey}_${index}`] = "invalid";
  //               allFieldsValid = false;
  //             } else if (
  //               newKey === "additionalPhone" &&
  //               !validatePhone(value)
  //             ) {
  //               formErrors[`${newKey}_${index}`] = "invalid";
  //               allFieldsValid = false;
  //             } else if (
  //               newKey === "additionalFirstName" &&
  //               !validateUsername(value)
  //             ) {
  //               formErrors[`${newKey}_${index}`] = "invalid";
  //               allFieldsValid = false;
  //             } else if (
  //               newKey === "additionalLastName" &&
  //               !validateUsername(value)
  //             ) {
  //               formErrors[`${newKey}_${index}`] = "invalid";
  //               allFieldsValid = false;
  //             } else if (
  //               newKey === "additionalRelationship" &&
  //               !validateUsername(value)
  //             ) {
  //               formErrors[`${newKey}_${index}`] = "invalid";
  //               allFieldsValid = false;
  //             } else {
  //               formErrors[newKey] = "";
  //             }
  //           }
  //         });

  //         setFormErrors(formErrors);

  //         if (allFieldsValid) {
  //           const formData = {
  //             firstName: object.additionalFirstName,
  //             lastName: object.additionalLastName,
  //             email: object.additionalEmail,
  //             phone: object.additionalPhone,
  //             relationShip: object.additionalRelationship,
  //             candidateId: docId,
  //           };
  //           // try {
  //           //   await axios.post(additionalContactAddUrl, formData, {
  //           //     headers: {
  //           //       "Content-Type": "application/json",
  //           //     },
  //           //   });
  //           // } catch (error) {
  //           //   console.error(error);
  //           // }
  //         }
  //       })
  //     );
  //   } else {
  //     const reqFields = [
  //       "additionalFirstName",
  //       "additionalLastName",
  //       "additionalEmail",
  //       "additionalPhone",
  //       "additionalRelationship",
  //     ];

  //     reqFields.forEach((field) => {
  //       const newKey = field;
  //       const value = formFields[newKey]?.trim() || "";

  //       if (!value) {
  //         formErrors[`${newKey}_0`] = "This field is required";
  //         allFieldsValid = false;
  //       } else {
  //         // Field-specific validations
  //         if (newKey === "additionalEmail" && !validateEmail(value)) {
  //           formErrors[`${newKey}_1`] = "invalid";
  //           allFieldsValid = false;
  //         } else if (newKey === "additionalPhone" && !validatePhone(value)) {
  //           formErrors[`${newKey}_1`] = "invalid";
  //           allFieldsValid = false;
  //         } else if (
  //           newKey === "additionalFirstName" &&
  //           !validateUsername(value)
  //         ) {
  //           formErrors[`${newKey}_1`] = "invalid";
  //           allFieldsValid = false;
  //         } else if (
  //           newKey === "additionalLastName" &&
  //           !validateUsername(value)
  //         ) {
  //           formErrors[`${newKey}_1`] = "invalid";
  //           allFieldsValid = false;
  //         } else if (
  //           newKey === "additionalRelationship" &&
  //           !validateUsername(value)
  //         ) {
  //           formErrors[`${newKey}_1`] = "invalid";
  //           allFieldsValid = false;
  //         } else {
  //           formErrors[newKey] = "";
  //         }
  //       }
  //     });

  //     setFormErrors(formErrors);

  //     console.log(formErrors);
  //   }
  // };

  // const handleSubmitTerritory = async (docId) => {
  //   await Promise.all(
  //     additionalTerritories.map(async (object) => {
  //       const reqFields = [
  //         "territoryZipCode",
  //         "territoryState",
  //         "territoryCity",
  //       ];
  //       let allFieldsValid = true;
  //       let formErrors = {};

  //       reqFields.forEach((field) => {
  //         const newKey = field;
  //         const value = object[newKey]?.trim() || "";

  //         if (!value) {
  //           formErrors[newKey] = "This field is required";
  //           allFieldsValid = false;
  //         } else {
  //           if (newKey === "territoryCity" && !validateUsername(value)) {
  //             formErrors[`${newKey}_${index}`] = "invalid";
  //             allFieldsValid = false;
  //           } else if (
  //             newKey === "territoryZipCode" &&
  //             !validateZipcode(value)
  //           ) {
  //             formErrors[`${newKey}_${index}`] = "invalid";
  //             allFieldsValid = false;
  //           } else {
  //             formErrors[newKey] = "";
  //           }
  //         }
  //       });

  //       setFormErrors(formErrors);

  //       if (allFieldsValid) {
  //         const formData = {
  //           territoryState: object.territoryState,
  //           territoryCity: object.territoryCity,
  //           territoryZipCode: object.territoryZipCode,
  //           territorynotes: object.territorynotes,
  //           parentId: docId,
  //           parent_Type: "R",
  //           isPrimary: false,
  //         };

  //         try {
  //           await axios.post(additionalTerritoriesAddUrl, formData, {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           });
  //         } catch (error) {
  //           console.error("Error saving territory information:", error);
  //           allValid = false;
  //         }
  //       }
  //     })
  //   );

  //   if (!allValid) {
  //     // Handle invalid form data
  //     console.error("Invalid form data");
  //     // Optionally, show user a message or take corrective action
  //   }
  // };
  console.log(formErrors);

  const handleSubmit = async () => {
    setLoading(true);

    const reqFields = [
      "firstname",
      "lastname",
      "phone",
      "email",
      "territorystate",
      "territorycity",
      "territoryzipcode",
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
    console.log(formErrors);

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
          AgentUserId: userDetails?.docId ?? 0,
          isArchive: false,
        };

        const baseUrl = "https://backend.ifbc.co/api/candidates";
        let response = "";

        // Send the POST request using Axios
        if (candDetails) {
          response = await axios.put(
            `${baseUrl}/${candDetails?.docId}`,
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          response = await axios.post(baseUrl, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
        if (response.status === 201) {
          setFormErrors({});
          setShowSuccess(true);

          //const docId = response.data.docId;
          // if (addContacts > 0) {
          //   //await handleSubmitContact(docId);
          //   await handleSubmitContact(21);
          // }
          // if (addTerritory > 0) {
          //   // await handleSubmitTerritory(docId);
          //   await handleSubmitTerritory(21);
          // }
          setSuccessMsg(
            role && role === "C"
              ? "Candidate Information Saved Successfully!"
              : "Your Request has been submitted successfully!"
          );
          setLoading(false);
          setTimeout(() => {
            window.location.href =
              role && role === "C" ? "/candidate-list" : "/";
          }, 3000);
        } else if (response.status === 204) {
          setSuccessMsg("Candidate Information Saved Successfully!");
          setShowSuccess(true);
          setLoading(false);
        } else {
          // setFormErrors({  });
          setLoading(false);
          window.scrollTo(0, 100);
          // Handle unexpected response
        }
      } else {
        setFormErrors((prev) => ({
          ...prev,
          error: "Please fill in all the required fields",
        }));
        setLoading(false);
        window.scrollTo(0, 100);

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
      console.log(name, formErrors);
      // Reset form error for the current input
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    } else {
      // Update formFields state
      setFormFields((prevFields) => ({
        ...prevFields,
        [name]: inputValue,
      }));
      // Reset form error for the current input
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [newName]: "",
      }));
    }
  };

  return (
    <>
      <DialogBox show={showsuccess} setShow={setShowSuccess}>
        <div className="bg-white p-5 py-10 grid place-items-center text-3xl text-custom-heading-color">
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
          territorys={territorys}
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

export default Form;
