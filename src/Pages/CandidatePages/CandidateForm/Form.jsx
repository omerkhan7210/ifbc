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
  const [step, setStep] = useState(0);
  const [listingNames, setListingNames] = useState([]);
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const docidSelected = searchParams.get("id");
  const [visitedSteps, setVisitedSteps] = useState({
    candprofile: false,
    intitial: false,
    elig: false,
    exp: false,
    wants: false,
    fc: false,
  });

  const fetchCandidates = async () => {
    const url = `https://backend.ifbc.co/api/candidateprofile/${docidSelected}`;
    const response = await axios.get(url);
    return response.data;
  };

  // Use the query with enabled option based on docid
  const { data, isLoading, error } = useQuery(
    ["CANDIDATESFORM", docidSelected], // Query key including docid
    fetchCandidates, // Query function
    {
      enabled: !!docidSelected, // Only enable if docid and name are available
    }
  );

  // Optionally handle effects based on data, loading, and error
  useEffect(() => {
    if (data && !visitedSteps.candprofile) {
      setFormFields((prev) => ({
        ...prev,
        ...data,
      }));
    }
  }, [data]);

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

  const handleSubmitCandProfileApi = async () => {
    try {
      const formData = {
        ...(candDetails?.docId
          ? { DocId: candDetails?.docId }
          : formFields?.docid
            ? { DocId: formFields?.docid }
            : {}),
        firstName: formFields.firstName ?? "",
        lastName: formFields.lastName ?? "",
        Phone: formFields.phone ?? "",
        Email: formFields.email ?? "",
        additionalFirstName: formFields.additionalFirstName ?? "",
        additionalLastName: formFields.additionalLastName ?? "",
        additionalPhone: formFields.additionalPhone ?? "",
        additionalEmail: formFields.additionalEmail ?? "",
        additionalRelationship: formFields.additionalRelationship ?? "",
        franchiseInterested: formFields.franchiseInterested ?? "",
        territoryCity: formFields.territoryCity ?? "",
        territoryState: formFields.territoryState ?? "",
        territoryZipcode: formFields.territoryZipcode ?? "",
        currentCity: formFields.currentCity ?? "",
        currentState: formFields.currentState ?? "",
        currentZipcode: formFields.currentZipcode ?? "",
        Status: formFields.status ?? "",
        PipelineStep: formFields.pipelinestep ?? "",
        lostReason: "string",
        AgentUserId: userDetails?.docId ?? 19,
        isArchive: false,
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/candidateprofile";
      let response = "";

      // Send the POST request using Axios
      if (candDetails || docidSelected) {
        const newUrl = candDetails?.docId
          ? `${baseUrl}/${candDetails.docId}`
          : `${baseUrl}/${docidSelected}`;
        response = await axios.put(newUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      const resolvedDocId = candDetails?.docId || formFields?.docid || docid;

      const formData = {
        docId: resolvedDocId,
        funding: formFields.funding ?? "",
        investmentFranchise: formFields.investmentFranchise ?? "",
        creditScore: formFields.creditScore ?? "",
        networth: formFields.networth ?? "",
        liquidCash: formFields.liquidCash ?? "",
        franchiseCause: formFields.FranchiseCause ?? "",
        professionalBackground: formFields.professionalBackground ?? "",
        timeFrame: formFields.timeFrame ?? "",
        isCompleted: true,
      };

      const baseUrl = "https://backend.ifbc.co/api/initialqualify";
      let response = "";

      if (candDetails || docidSelected) {
        const newUrl = candDetails?.docId
          ? `${baseUrl}/${candDetails.docId}`
          : `${baseUrl}/${docidSelected}`;
        response = await axios.put(newUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      const resolvedDocId = candDetails?.docId || formFields?.docid || docid;

      const formData = {
        docId: resolvedDocId,
        VALoan: formFields.vaLoan ?? "",
        EligibilityValue: formFields.eligibilityValue ?? "",
        TrafficViolation: formFields.trafficViolation ?? "",
        Unsatisfiedjudgment: formFields.unsatisfiedjudgment ?? "",
        Bankruptcy: formFields.bankruptcy ?? "",
        TrafficViolationReason: formFields.trafficViolationReason ?? "",
        UnsatisfiedjudgmentReason: formFields.unsatisfiedjudgmentReason ?? "",
        isCompleted: true,
      };

      const baseUrl = "https://backend.ifbc.co/api/eligibility";
      let response = "";

      if (candDetails || docidSelected) {
        const newUrl = candDetails?.docId
          ? `${baseUrl}/${candDetails.docId}`
          : `${baseUrl}/${docidSelected}`;
        response = await axios.put(newUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      const resolvedDocId = candDetails?.docId || formFields?.docid || docid;

      const formData = {
        docId: resolvedDocId,
        BusinessBefore: formFields.businessBefore ?? "",
        MarketingExperience: formFields.marketingExperience ?? "",
        ManagementExperience: formFields.managementExperience ?? "",
        SalesExperience: formFields.salesExperience ?? "",
        ReviewFinancialStatement: formFields.reviewFinancialStatement ?? "",
        CSExperience: formFields.csExperience ?? "",
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/experience";
      let response = "";

      if (candDetails || docidSelected) {
        const newUrl = candDetails?.docId
          ? `${baseUrl}/${candDetails.docId}`
          : `${baseUrl}/${docidSelected}`;
        response = await axios.put(newUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      const resolvedDocId = candDetails?.docId || formFields?.docid || docid;

      const formData = {
        docId: resolvedDocId,
        AttractiveBusinessOwner: formFields.attractiveBusinessOwner ?? "",
        HandleNewBusiness: formFields.handleNewBusiness ?? "",
        BusinessExpectations: formFields.husinessExpectations ?? "",
        PreferB2b: formFields.preferb2b ?? "",
        PhysicalLocation: formFields.physicalLocation ?? "",
        Inventory: formFields.inventory ?? "",
        ColdCalling: formFields.coldCalling ?? "",
        PassiveMode: formFields.passiveMode ?? "",
        BusinessHours: formFields.businessHours ?? "",
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/wants";
      let response = "";

      if (candDetails || docidSelected) {
        const newUrl = candDetails?.docId
          ? `${baseUrl}/${candDetails.docId}`
          : `${baseUrl}/${docidSelected}`;
        response = await axios.put(newUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      const resolvedDocId = candDetails?.docId || formFields?.docid || docid;

      const formData = {
        docId: resolvedDocId,
        firstName: formFields.firstName ?? "",
        lastName: formFields.lastName ?? "",
        Phone: formFields.phone ?? "",
        Email: formFields.email ?? "",
        additionalFirstName: formFields.additionalFirstName ?? "",
        additionalLastName: formFields.additionalLastName ?? "",
        additionalPhone: formFields.additionalPhone ?? "",
        additionalEmail: formFields.additionalEmail ?? "",
        additionalRelationship: formFields.additionalRelationship ?? "",
        franchiseInterested: formFields.franchiseInterested ?? "",
        territoryCity: formFields.territoryCity ?? "",
        territoryState: formFields.territoryState ?? "",
        territoryZipcode: formFields.territoryZipcode ?? "",
        currentCity: formFields.currentCity ?? "",
        currentState: formFields.currentState ?? "",
        currentZipcode: formFields.currentZipcode ?? "",
        Status: formFields.status ?? "",
        PipelineStep: formFields.pipelinestep ?? "",
        lostReason: "string",
        funding: formFields.funding ?? "",
        investmentFranchise: formFields.investmentFranchise ?? "",
        creditScore: formFields.creditScore ?? "",
        networth: formFields.networth ?? "",
        liquidCash: formFields.liquidCash ?? "",
        franchiseCause: formFields.franchiseCause ?? "",
        professionalBackground: formFields.professionalBackground ?? "",
        timeFrame: formFields.timeFrame ?? "",
        VALoan: formFields.vaLoan ?? "",
        EligibilityValue: formFields.eligibilityValue ?? "",
        TrafficViolation: formFields.trafficViolation ?? "",
        Unsatisfiedjudgment: formFields.unsatisfiedjudgment ?? "",
        Bankruptcy: formFields.bankruptcy ?? "",
        BusinessBefore: formFields.businessBefore ?? "",
        MarketingExperience: formFields.marketingExperience ?? "",
        ManagementExperience: formFields.managementExperience ?? "",
        SalesExperience: formFields.salesExperience ?? "",
        ReviewFinancialStatement: formFields.reviewFinancialStatement ?? "",
        CSExperience: formFields.csExperience ?? "",
        AttractiveBusinessOwner: formFields.attractiveBusinessOwner ?? "",
        HandleNewBusiness: formFields.handleNewBusiness ?? "",
        BusinessExpectations: formFields.businessExpectations ?? "",
        PreferB2b: formFields.preferB2b ?? "",
        PhysicalLocation: formFields.physicalLocation ?? "",
        Inventory: formFields.inventory ?? "",
        ColdCalling: formFields.coldCalling ?? "",
        PassiveMode: formFields.passiveMode ?? "",
        BusinessHours: formFields.businessHours ?? "",

        Advertising: formFields.advertising ?? "",
        Automotive: formFields.automotive ?? "",
        BeautySpa: formFields.beautySpa ?? "",
        BusinessManagementCoaching: formFields.businessManagementCoaching ?? "",
        BusinessServices: formFields.businessServices ?? "",
        ChildEducationStemTutoring: formFields.childEducationStemTutoring ?? "",
        ChildServicesProducts: formFields.childServicesProducts ?? "",
        CleaningResidentialCommercial:
          formFields.cleaningResidentialCommercial ?? "",
        ComputerTechnology: formFields.computerTechnology ?? "",
        DistributionServices: formFields.distributionServices ?? "",
        DryCleaningLaundry: formFields.dryCleaningLaundry ?? "",
        FinancialServices: formFields.financialServices ?? "",
        Fitness: formFields.fitness ?? "",
        FoodBeverageRestaurantQSR: formFields.foodBeverageRestaurantQSR ?? "",
        FoodCoffeeTeaSmoothiesSweets:
          formFields.foodCoffeeTeaSmoothiesSweets ?? "",
        FoodStoresCatering: formFields.foodStoresCatering ?? "",
        HealthMedical: formFields.healthMedical ?? "",
        HealthWellness: formFields.healthWellness ?? "",
        HomeImprovement: formFields.homeImprovement ?? "",
        InteriorExteriorDesign: formFields.interiorExteriorDesign ?? "",
        MaintenanceRepair: formFields.maintenanceRepair ?? "",
        MovingStorageJunkRemoval: formFields.movingStorageJunkRemoval ?? "",
        Painting: formFields.painting ?? "",
        PestControl: formFields.pestControl ?? "",
        PetCareGrooming: formFields.petCareGrooming ?? "",
        PrintCopyMailing: formFields.printCopyMailing ?? "",
        RealState: formFields.realState ?? "",
        Restoration: formFields.restoration ?? "",
        Retail: formFields.retail ?? "",
        Security: formFields.security ?? "",
        SeniorCareMedicalNonMedical:
          formFields.seniorCareMedicalNonMedical ?? "",
        Signs: formFields.signs ?? "",
        SpecialEventPlanning: formFields.specialEventPlanning ?? "",
        SportsRecreation: formFields.sportsRecreation ?? "",
        Staffing: formFields.staffing ?? "",
        TravelPlanning: formFields.travelPlanning ?? "",
        Vending: formFields.vending ?? "",
        Timezone: formFields.timezone ?? "",
        PreferredCallTime: formFields.preferredCallTime ?? "",
        RealEstate: formFields.realEstate ?? "",
        isCompleted: true,
      };
      const baseUrl = "https://backend.ifbc.co/api/franchisecategories";
      let response = "";

      if (candDetails || docidSelected) {
        const newUrl = candDetails?.docId
          ? `${baseUrl}/${candDetails.docId}`
          : `${baseUrl}/${docidSelected}`;
        response = await axios.put(newUrl, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
        fcResStatus === 201
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
      } else if (
        candProfileResStatus === 204 &&
        initialResStatus === 204 &&
        eligResStatus === 204 &&
        expResStatus === 204 &&
        wantsResStatus === 204 &&
        fcResStatus === 204
      ) {
        setFormErrors({});
        setShowSuccess(true);

        setSuccessMsg(
          role && role === "C"
            ? "Candidate Information Updated Successfully!"
            : "Your details has been updated successfully!"
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
      const moreListingNames = [...listingNames, { name: "Others", docId: 0 }];
      setListingNames(moreListingNames);
    });
  }, []);

  const handleSwitchCase = () => {
    switch (step) {
      case 0:
        return (
          <CandidateProfile
            candDetails={candDetails}
            candNames={candNames}
            formErrors={formErrors}
            formFields={formFields}
            handleInputChange={handleInputChange}
            selectedDetails={selectedDetails}
            selectedDocId={selectedDocId}
            setSelectedDocId={setSelectedDocId}
            setFormFields={setFormFields}
            setStep={setStep}
            setFormErrors={setFormErrors}
            listingNames={listingNames}
            docid={docidSelected}
            visitedSteps={visitedSteps}
            setVisitedSteps={setVisitedSteps}
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
            docid={docidSelected}
            setFormFields={setFormFields}
            visitedSteps={visitedSteps}
            setVisitedSteps={setVisitedSteps}
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
            docid={docidSelected}
            setFormFields={setFormFields}
            visitedSteps={visitedSteps}
            setVisitedSteps={setVisitedSteps}
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
            docid={docidSelected}
            setFormFields={setFormFields}
            visitedSteps={visitedSteps}
            setVisitedSteps={setVisitedSteps}
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
            docid={docidSelected}
            setFormFields={setFormFields}
            visitedSteps={visitedSteps}
            setVisitedSteps={setVisitedSteps}
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
            docid={docidSelected}
            setFormFields={setFormFields}
            visitedSteps={visitedSteps}
            setVisitedSteps={setVisitedSteps}
          />
        );
      default:
        break;
    }
  };

  return (
    <form>
      <DialogBox show={showsuccess} setShow={setShowSuccess}>
        <div className="bg-white p-5 py-10 capitalize grid place-items-center text-3xl text-custom-heading-color">
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
        className={
          "stepper md:max-w-7xl max-md:max-w-[100%] max-md:mb-3 mx-auto"
        }
        stepClassName={"stepper__step border-stepper"}
      />

      <div
        id="main-new-candidate-form-container"
        className={`  ${candDetails ? "" : "max-md:max-w-[100%] items-center justify-center mx-auto mb-10 col-span-12 md:max-2xl:max-w-[50%] 2xl:max-w-[40%]"}  `}
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
