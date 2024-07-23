import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
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

import { Stepper } from "react-form-stepper";
import Initial from "./Steps/Initial";
import CandidateProfile from "./Steps/CandidateProfile";
import Eligibility from "./Steps/Eligibility";
import Experience from "./Steps/Experience";
import Wants from "./Steps/Wants";
import FranchiseCategories from "./Steps/FranchiseCategories";

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

  const handleSubmit = async () => {
    setLoading(true);

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

    // if (name.startsWith("additional")) {
    //   const splittedName = name.split("_");
    //   const index = parseInt(splittedName[1]); // Extract index from name

    //   // Create a copy of additionalContacts array
    //   const updatedContacts = additionalContacts ? [...additionalContacts] : [];
    //   // Ensure updatedContacts[index] is initialized if it doesn't exist
    //   if (!updatedContacts[index]) {
    //     updatedContacts[index] = {};
    //   }

    //   // Check if both additionalFirstName and additionalLastName exist in updatedContacts[index]
    //   updatedContacts[index] = {
    //     ...updatedContacts[index],
    //     [splittedName[0]]: value,
    //   };

    //   // Update additionalContacts state
    //   setAdditionalContacts(
    //     updatedContacts.filter((contact) => Object.keys(contact).length > 0)
    //   );
    //   // Reset form error for the current input
    //   setFormErrors((prevErrors) => ({
    //     ...prevErrors,
    //     [name]: "",
    //   }));
    // } else {
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
    // }
  };

  // default step 0 hoga 0 se start hora
  const [step, setStep] = useState(0);
  const [listingNames, setListingNames] = useState([]);

  // this useEffect api is used for getting listing names with doc ids
  useEffect(() => {
    // const response = axios.get("https://backend.ifbc.co/api/listingsmstr");
    // console.log(response);
    axios.get("https://backend.ifbc.co/api/listingsmstr").then((response) => {
      const listingNames = response.data.map((listings) => ({
        name: listings.name,
        docId: listings.docId,
      }));
      setListingNames(listingNames);
    });
  }, []);

  const handleSwitchCase = () => {
    // window.scrollTo({
    //   top: window.innerWidth < 768 ? 1000 : 0,
    //   behavior: "smooth",
    // });
    switch (step) {
      // iska mtlb ye hai ke step jab 0 hoga to candprofile wala component render hoga
      case 0:
        return (
          <CandidateProfile
            addContacts={addContacts}
            candDetails={candDetails}
            candNames={candNames}
            formErrors={formErrors}
            formFields={formFields}
            handleInputChange={handleInputChange}
            selectedDetails={selectedDetails}
            selectedDocId={selectedDocId}
            setAddContacts={setAddContacts}
            setSelectedDocId={setSelectedDocId}
            addTerritory={addTerritory}
            setAddTerritory={setAddTerritory}
            setFormFields={setFormFields}
            setStep={setStep}
            setFormErrors={setFormErrors}
            listingNames={listingNames}
          />
        );

      // jab step 1 hoga mtlb next step hoga to initial ajaega
      case 1:
        return (
          <Initial
            handleInputChange={handleInputChange}
            candDetails={candDetails}
            candNames={candNames}
            selectedDetails={selectedDetails}
            setStep={setStep}
            formFields={formFields}
          />
        );

      // mene eligibility wale ko bhi separate krdya taake may usse bhi step ke tor pr use krskun
      // case 2 mtlb step 3
      // ek bhund ye hai uper scroll nhi hora pta nhi lagra change hua ya nhi wohi function chalao na paginate wala
      case 2:
        return (
          <Eligibility
            handleInputChange={handleInputChange}
            candDetails={candDetails}
            candNames={candNames}
            selectedDetails={selectedDetails}
            setStep={setStep}
            formFields={formFields}
          />
        );
      case 3:
        return (
          <Experience
            handleInputChange={handleInputChange}
            candDetails={candDetails}
            candNames={candNames}
            selectedDetails={selectedDetails}
            setStep={setStep}
            formFields={formFields}
          />
        );

      case 4:
        return (
          <Wants
            handleInputChange={handleInputChange}
            candDetails={candDetails}
            candNames={candNames}
            selectedDetails={selectedDetails}
            setStep={setStep}
            formFields={formFields}
          />
        );

      case 5:
        return (
          <FranchiseCategories
            setStep={setStep}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            formFields={formFields}
            candDetails={candDetails}
            candNames={candNames}
          />
        );
      default:
        break;
    }
  };

  return (
    <form>
      <DialogBox show={showsuccess} setShow={setShowSuccess}>
        <div className="bg-white p-5 py-10 grid place-items-center text-3xl text-custom-heading-color">
          {successMsg}
        </div>
      </DialogBox>

      {/* ye jo labels hain na inme hamare step ke names aengay tum is site se dekhkr daaldo yahan pr*/}
      {/* smjhgye?  han wo m dal dunga daldo may namaz prhkr arha k*/}
      {/* daldye?an humein tabs nhi laane*/}

      {/* hume ek state banani hogy step ke liye jisme step number aega 1 2 3 4 etc */}
      {/* aagay ka krskte ho? kerta hu koshish  */}
      <Stepper
        steps={[
          { label: "Candidate Profile" },
          { label: "Initial Qualifying" },
          { label: "Eligibility" },
          { label: "Experience" },
          { label: "Wants" },
          { label: "Franchise Categories" },
        ]}
        activeStep={step}
        styleConfig={{
          activeBgColor: "#2b7cff",
          activeTextColor: "#fff",
          inactiveBgColor: "#fff",
          inactiveBorderColor: "#2b7cff",
          inactiveTextColor: "#2b7cff",
          completedBgColor: "#fff",
          completedTextColor: "#2b7cff",
          size: "3em",
        }}
        className={"stepper"}
        stepClassName={"stepper__step border-stepper"}
      />

      <div
        id="main-new-candidate-form-container"
        className={`  ${candDetails ? "" : "md:max-w-[60%] mx-auto mb-10 col-span-12"} `}
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

        {/* mene ek separate component banadya step 1 ke liye kunke 1 2 3 rows jo thin wo step 1 may hi thin isliye un teeno ko ek may krdya ab mjhe switch case banana */}
        {/* switch or if else same hi hote lekn if else may condition tum sahi se define krskte switch may bas simple si hoskti */}

        {/* tabs */}
        {/* hum pehle tabs ko alag alag hisse may tordete abhi sab ek hi may arha */}
        {/* <Tabs
          handleInputChange={handleInputChange}
          candDetails={candDetails}
          candNames={candNames}
          selectedDetails={selectedDetails}
        /> */}

        {handleSwitchCase()}
      </div>

      {/* hume isme ye text bhi nhi laana ye last step may show hoga */}
      <div
        id="button-container"
        className="flex flex-col gap-5 items-center justify-center my-10 col-span-12"
      >
        {/* {!candDetails && (
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
        )} */}
        {/* {candNames && candDetails ? (
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
        )} */}
      </div>
    </form>
  );
};

export default Form;
