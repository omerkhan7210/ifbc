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
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

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
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const [selectedDocId, setSelectedDocId] = useState();
  const [selectedDetails, setSelectedDetails] = useState({});
  const [showsuccess, setShowSuccess] = useState(false);
  const [addContacts, setAddContacts] = useState(0);
  const [addTerritory, setAddTerritory] = useState(0);
  const [step, setStep] = useState(0);
  const [listingNames, setListingNames] = useState([]);
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const docid = searchParams.get("id");

  const fetchCandidates = async () => {
    const url = `https://backend.ifbc.co/api/candidateprofile/${docid}`;
    const response = await axios.get(url);
    return response.data;
  };

  // Use the query with enabled option based on docid
  const { data, isLoading, error } = useQuery(
    ["CANDIDATESFORM", docid], // Query key including docid
    fetchCandidates, // Query function
    {
      enabled: !!docid, // Only enable if docid and name are available
    }
  );

  // Optionally handle effects based on data, loading, and error
  useEffect(() => {
    if (data) {
      // Handle the data
      setFormFields(data);
    }
  }, [data]);
  console.log(formFields);

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

  const handleSubmitCandProfileApi = async () => {
    try {
      const formData = {
        ...(candDetails?.docId
          ? { DocId: candDetails?.docId }
          : formFields?.docid
            ? { DocId: formFields?.docid }
            : {}),
        firstName: formFields.firstname ?? "",
        lastName: formFields.lastname ?? "",
        Phone: formFields.phone ?? "",
        Email: formFields.email ?? "",
        additionalFirstName: formFields.additionalfirstname ?? "",
        additionalLastName: formFields.additionallastname ?? "",
        additionalPhone: formFields.additionalphone ?? "",
        additionalEmail: formFields.additionalemail ?? "",
        additionalRelationship: formFields.additionalrelationship ?? "",
        franchiseInterested: formFields.franchiseinterested ?? "",
        territoryCity: formFields.territorycity ?? "",
        territoryState: formFields.territorystate ?? "",
        territoryZipcode: formFields.territoryzipcode ?? "",
        currentCity: formFields.currentcity ?? "",
        currentState: formFields.currentstate ?? "",
        currentZipcode: formFields.currentzipcode ?? "",
        Status: formFields.status ?? "",
        PipelineStep: formFields.pipelinestep ?? "",
        lostReason: "string",
        AgentUserId: userDetails?.docId ?? 19,
        isArchive: false,
        isCompleted: true,
        updateDt: "2024-07-27T15:00:45.871Z",
      };
      const baseUrl = "https://backend.ifbc.co/api/candidateprofile";
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
        return {
          candProfileResStatus: response.status,
          docid: response.data.docid,
        };
      } else if (response.status === 204) {
        return {
          candProfileResStatus: response.status,
          docid: formFields?.docid,
        };
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitInitialApi = async (docid) => {
    try {
      const formData = {
        docid,
        funding: formFields.Funding ?? "",
        investmentFranchise: formFields.InvestmentFranchise ?? "",
        creditScore: formFields.CreditScore ?? "",
        networth: formFields.Networth ?? "",
        liquidCash: formFields.LiquidCash ?? "",
        franchiseCause: formFields.FranchiseCause ?? "",
        professionalBackground: formFields.ProfessionalBackground ?? "",
        timeFrame: formFields.TimeFrame ?? "",
        isCompleted: true,
      };

      const baseUrl = "https://backend.ifbc.co/api/initialqualify";
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
      return response.status;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitEligApi = async (docid) => {
    try {
      const formData = {
        docid,
        VALoan: formFields.VALoan ?? "",
        EligibilityValue: formFields.EligibilityValue ?? "",
        TrafficViolation: formFields.TrafficViolation ?? "",
        Unsatisfiedjudgment: formFields.Unsatisfiedjudgment ?? "",
        Bankruptcy: formFields.Bankruptcy ?? "",
        TrafficViolationReason: formFields.TrafficViolationReason ?? "",
        UnsatisfiedjudgmentReason: formFields.UnsatisfiedjudgmentReason ?? "",
        isCompleted: true,
      };

      const baseUrl = "https://backend.ifbc.co/api/eligibility";
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
      return response.status;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitExpApi = async (docid) => {
    try {
      const formData = {
        docid,
        BusinessBefore: formFields.BusinessBefore ?? "",
        MarketingExperience: formFields.MarketingExperience ?? "",
        ManagementExperience: formFields.ManagementExperience ?? "",
        SalesExperience: formFields.SalesExperience ?? "",
        ReviewFinancialStatement: formFields.ReviewFinancialStatement ?? "",
        CSExperience: formFields.CSExperience ?? "",
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/experience";
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
      return response.status;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitWantsApi = async (docid) => {
    try {
      const formData = {
        docid,
        AttractiveBusinessOwner: formFields.AttractiveBusinessOwner ?? "",
        HandleNewBusiness: formFields.HandleNewBusiness ?? "",
        BusinessExpectations: formFields.BusinessExpectations ?? "",
        PreferB2b: formFields.PreferB2b ?? "",
        PhysicalLocation: formFields.PhysicalLocation ?? "",
        Inventory: formFields.Inventory ?? "",
        ColdCalling: formFields.ColdCalling ?? "",
        PassiveMode: formFields.PassiveMode ?? "",
        BusinessHours: formFields.BusinessHours ?? "",
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/wants";
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
      return response.status;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitFCApi = async (docid) => {
    try {
      const formData = {
        docid,
        firstName: formFields.firstname ?? "",
        lastName: formFields.lastname ?? "",
        Phone: formFields.phone ?? "",
        Email: formFields.email ?? "",
        additionalFirstName: formFields.additionalfirstname ?? "",
        additionalLastName: formFields.additionallastname ?? "",
        additionalPhone: formFields.additionalphone ?? "",
        additionalEmail: formFields.additionalemail ?? "",
        additionalRelationship: formFields.additionalrelationship ?? "",
        franchiseInterested: formFields.franchiseinterested ?? "",
        territoryCity: formFields.territorycity ?? "",
        territoryState: formFields.territorystate ?? "",
        territoryZipcode: formFields.territoryzipcode ?? "",
        currentCity: formFields.currentcity ?? "",
        currentState: formFields.currentstate ?? "",
        currentZipcode: formFields.currentzipcode ?? "",
        Status: formFields.status ?? "",
        PipelineStep: formFields.pipelinestep ?? "",
        lostReason: "string",
        funding: formFields.Funding ?? "",
        investmentFranchise: formFields.InvestmentFranchise ?? "",
        creditScore: formFields.CreditScore ?? "",
        networth: formFields.Networth ?? "",
        liquidCash: formFields.LiquidCash ?? "",
        franchiseCause: formFields.FranchiseCause ?? "",
        professionalBackground: formFields.ProfessionalBackground ?? "",
        timeFrame: formFields.TimeFrame ?? "",
        VALoan: formFields.VALoan ?? "",
        EligibilityValue: formFields.EligibilityValue ?? "",
        TrafficViolation: formFields.TrafficViolation ?? "",
        Unsatisfiedjudgment: formFields.Unsatisfiedjudgment ?? "",
        Bankruptcy: formFields.Bankruptcy ?? "",
        BusinessBefore: formFields.BusinessBefore ?? "",
        MarketingExperience: formFields.MarketingExperience ?? "",
        ManagementExperience: formFields.ManagementExperience ?? "",
        SalesExperience: formFields.SalesExperience ?? "",
        ReviewFinancialStatement: formFields.ReviewFinancialStatement ?? "",
        CSExperience: formFields.CSExperience ?? "",
        AttractiveBusinessOwner: formFields.AttractiveBusinessOwner ?? "",
        HandleNewBusiness: formFields.HandleNewBusiness ?? "",
        BusinessExpectations: formFields.BusinessExpectations ?? "",
        PreferB2b: formFields.PreferB2b ?? "",
        PhysicalLocation: formFields.PhysicalLocation ?? "",
        Inventory: formFields.Inventory ?? "",
        ColdCalling: formFields.ColdCalling ?? "",
        PassiveMode: formFields.PassiveMode ?? "",
        BusinessHours: formFields.BusinessHours ?? "",

        Advertising: formFields.Advertising ?? "",
        Automotive: formFields.Automotive ?? "",
        BeautySpa: formFields.BeautySpa ?? "",
        BusinessManagementCoaching: formFields.BusinessManagementCoaching ?? "",
        BusinessServices: formFields.BusinessServices ?? "",
        ChildEducationStemTutoring: formFields.ChildEducationStemTutoring ?? "",
        ChildServicesProducts: formFields.ChildServicesProducts ?? "",
        CleaningResidentialCommercial:
          formFields.CleaningResidentialCommercial ?? "",
        ComputerTechnology: formFields.ComputerTechnology ?? "",
        DistributionServices: formFields.DistributionServices ?? "",
        DryCleaningLaundry: formFields.DryCleaningLaundry ?? "",
        FinancialServices: formFields.FinancialServices ?? "",
        Fitness: formFields.Fitness ?? "",
        FoodBeverageRestaurantQSR: formFields.FoodBeverageRestaurantQSR ?? "",
        FoodCoffeeTeaSmoothiesSweets:
          formFields.FoodCoffeeTeaSmoothiesSweets ?? "",
        FoodStoresCatering: formFields.FoodStoresCatering ?? "",
        HealthMedical: formFields.HealthMedical ?? "",
        HealthWellness: formFields.HealthWellness ?? "",
        HomeImprovement: formFields.HomeImprovement ?? "",
        InteriorExteriorDesign: formFields.InteriorExteriorDesign ?? "",
        MaintenanceRepair: formFields.MaintenanceRepair ?? "",
        MovingStorageJunkRemoval: formFields.MovingStorageJunkRemoval ?? "",
        Painting: formFields.Painting ?? "",
        PestControl: formFields.PestControl ?? "",
        PetCareGrooming: formFields.PetCareGrooming ?? "",
        PrintCopyMailing: formFields.PrintCopyMailing ?? "",
        RealState: formFields.RealState ?? "",
        Restoration: formFields.Restoration ?? "",
        Retail: formFields.Retail ?? "",
        Security: formFields.Security ?? "",
        SeniorCareMedicalNonMedical:
          formFields.SeniorCareMedicalNonMedical ?? "",
        Signs: formFields.Signs ?? "",
        SpecialEventPlanning: formFields.SpecialEventPlanning ?? "",
        SportsRecreation: formFields.SportsRecreation ?? "",
        Staffing: formFields.Staffing ?? "",
        TravelPlanning: formFields.TravelPlanning ?? "",
        Vending: formFields.Vending ?? "",
        Timezone: formFields.Timezone ?? "",
        PreferredCallTime: formFields.PreferredCallTime ?? "",
        RealEstate: formFields.RealEstate ?? "",
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/franchisecategories";
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
      return response.status;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { candProfileResStatus, docid } = await handleSubmitCandProfileApi();
    if (docid !== 0) {
      const initialResStatus = await handleSubmitInitialApi(docid);
      const eligResStatus = await handleSubmitEligApi(docid);
      const expResStatus = await handleSubmitExpApi(docid);
      const wantsResStatus = await handleSubmitWantsApi(docid);
      const fcResStatus = await handleSubmitFCApi(docid);

      if (
        candProfileResStatus === 201 &&
        initialResStatus === 201 &&
        eligResStatus === 201 &&
        expResStatus === 201 &&
        wantsResStatus === 201 &&
        fcResStatus
      ) {
        setFormErrors({});
        setShowSuccess(true);

        setSuccessMsg(
          role && role === "C"
            ? "Candidate Information Saved Successfully!"
            : "Your Request has been submitted successfully!"
        );
        setLoading(false);
        setTimeout(() => {
          window.location.href = role && role === "C" ? "/candidate-list" : "/";
        }, 5000);
      }
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

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [newName]: "",
    }));
  };

  useEffect(() => {
    axios.get("https://backend.ifbc.co/api/listingsmstr").then((response) => {
      const listingNames = response.data.map((listings) => ({
        name: listings.name,
        docId: listings.docId,
      }));
      setListingNames(listingNames);
    });
  }, []);

  const handleSwitchCase = () => {
    switch (step) {
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
      case 1:
        return (
          <Initial
            handleInputChange={handleInputChange}
            candDetails={candDetails}
            candNames={candNames}
            selectedDetails={selectedDetails}
            setStep={setStep}
            formFields={formFields}
            setFormErrors={setFormErrors}
          />
        );

      case 2:
        return (
          <Eligibility
            handleInputChange={handleInputChange}
            candDetails={candDetails}
            candNames={candNames}
            selectedDetails={selectedDetails}
            setStep={setStep}
            formFields={formFields}
            setFormErrors={setFormErrors}
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
            setFormErrors={setFormErrors}
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
            setFormErrors={setFormErrors}
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
            setFormErrors={setFormErrors}
            setShow={setShow}
            show={show}
            loading={loading}
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
        className={"stepper md:max-w-7xl mx-auto"}
        stepClassName={"stepper__step border-stepper"}
      />

      <div
        id="main-new-candidate-form-container"
        className={`  ${candDetails ? "" : " items-center justify-center mx-auto mb-10 col-span-12 "} ${step > 0 ? "md:max-w-[45%] " : "md:max-xl:max-w-[95%] xl:max-w-[75%] max-md:max-w-[100%]"}  `}
      >
        {handleSwitchCase()}
      </div>

      {/* hume isme ye text bhi nhi laana ye last step may show hoga */}
      <div
        id="button-container"
        className="flex flex-col gap-5 items-center justify-center my-10 col-span-12"
      >
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
