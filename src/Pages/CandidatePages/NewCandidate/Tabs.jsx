import { useState } from "react";

const Tabs = ({ handleInputChange }) => {
  const [activeTab, setActiveTab] = useState("initial qualifying");
  return (
    <div className="md:flex mt-6">
      {/* Tabs list  */}
      <TabsList activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Fist tab description */}
      <Initial activeTab={activeTab} handleInputChange={handleInputChange} />
      {/* 2nd Tab Description */}
      <Zoracle activeTab={activeTab} handleInputChange={handleInputChange} />
      {/* 3rd Tab Description */}
      <Eligibility
        activeTab={activeTab}
        handleInputChange={handleInputChange}
      />
      {/* 4th Tab Description */}
      <Experience activeTab={activeTab} handleInputChange={handleInputChange} />
      {/* 5th Tab Description */}
      <Wants activeTab={activeTab} handleInputChange={handleInputChange} />
    </div>
  );
};

export default Tabs;

const TabsList = ({ activeTab, setActiveTab }) => {
  const tabItems = [
    { text: "INITIAL QUALIFYING" },
    { text: "ZORAKLE SPOTON!" },
    { text: "ELIGIBILITY" },
    { text: "EXPERIENCE" },
    { text: "WANTS" },
  ];

  return (
    <ul
      id="tab-list"
      className="flex-column space-y space-y-4 text-sm font-medium text-gray-500  md:me-4 mb-4 md:mb-0"
    >
      {tabItems.map((item, index) => (
        <li key={index}>
          <a
            onClick={() => setActiveTab(item.text.toLowerCase())}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full cursor-pointer ${
              activeTab.toLowerCase() === item.text.toLowerCase()
                ? "text-white bg-blue-700 dark:bg-blue-600"
                : "bg-gray-100"
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Initial = ({ activeTab, handleInputChange }) => {
  const investmentOptions = [
    { value: "", label: "Select one" },
    { value: "$5,000 - $49,999", label: "$5,000 - $49,999" },
    { value: "$50,000 - $99,999", label: "$50,000 - $99,999" },
    { value: "$100,000 - $199,999", label: "$100,000 - $199,999" },
    { value: "$200,000 - $499,999", label: "$200,000 - $499,999" },
    { value: "$500,000 - $749,999", label: "$500,000 - $749,999" },
    { value: "More than $750,000", label: "More than $750,000" },
  ];
  const fundingOptions = [
    { value: "Required to move forward", label: "Required to move forward" },
    { value: "Looking for options", label: "Looking for options" },
    {
      value: "Seeking funding independently",
      label: "Seeking funding independently",
    },
    { value: "No funding required", label: "No funding required" },
  ];
  return (
    <div
      id="initial-qualifying"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "initial qualifying" ? "" : "hidden"
      }`}
    >
      <div>
        <p className="candidate-label">
          How much money are you wanting to invest in the franchise?
        </p>
      </div>
      <select
        name="InvestmentFranchise"
        id="money"
        className="candidate-select"
      >
        {investmentOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="text-xs font-bold text-gray-500 mt-2">
          Used as Maximum Investment
        </p>
      </div>
      <div>
        <p className="candidate-paragraph">Do you have a need for funding?</p>
      </div>
      <select name="Funding" id="Funding" className="candidate-select">
        {fundingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="candidate-paragraph">
          What is your approximate credit score?
        </p>
      </div>
      <select
        name="ApproximateCredit"
        id="score"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-label">Net Worth?</p>
      </div>
      <select name="Networth" id="worth" className="candidate-select"></select>
      <div>
        <p className="candidate-label">Liquid Cash?</p>
      </div>
      <select
        name="LiquidCash"
        id="liquid-cash"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-paragraph">
          What caused you to start looking for a franchise?
        </p>
      </div>
      <select
        name="FranchiseCause"
        id="franchise"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-paragraph">
          What is your professional background?
        </p>
      </div>
      <select
        name="ProfessionalBackground"
        id="background"
        className="candidate-select"
      ></select>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What franchises are you interested in?
        </p>
        <input
          onChange={handleInputChange}
          type="text"
          name="FranchiseInterested"
          className="candidate-normal-input"
          required
        />
      </div>
      <div>
        <p className="candidate-paragraph">What is your time frame?</p>
      </div>
      <select
        name="TimeFrame"
        id="time-frame"
        className="candidate-select"
      ></select>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="text-gray-500 font-bold first-letter:text-xl"
        >
          Notes
        </label>
        <textarea
          name="InitialQualifyingNote"
          id="message"
          rows={3}
          className="candidate-input"
          defaultValue={""}
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};

const Zoracle = ({ activeTab, handleInputChange }) => {
  return (
    <div
      id="zorakle-spoton!"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "zorakle spoton!" ? "" : "hidden"
      }`}
    >
      <div>
        <div>
          <p className="candidate-label">Competency 1?</p>
        </div>
        <select
          name="Competency1"
          id="competency1"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Competency 2?</p>
        </div>
        <select
          name="Competency2"
          id="competency2"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Competency 3?</p>
        </div>
        <select
          name="Competency3"
          id="competency3"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Stage of Growth</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Stage of Growth"
          id="stage-of-growth"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <div>
          <p className="candidate-paragraph">Value</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Value"
          id="value"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <p className="candidate-paragraph">
          Emulator - Motivated by an insatiable desire for success, they are
          driven to do whatever it takes to conquer a challenge. Recognition and
          money defines success for Emulators. They prefer prestigious,
          progressive concepts that offer heroic, innovative solutions for their
          clients. They are independent thinkers and require a high degree of
          flexibility. Belonger - Hands-on business builder focused on long-term
          relationships and customer satisfaction. Motivated by a deeply rooted
          moral code they are hardworking and committed to providing for and
          protecting their loved ones. Family and security defines success for
          the Belonger. They favor proven, practical service or solution-based
          businesses. Achiever - A tenacious business builder, never satisfied
          until they dominate the market. Motivated by accomplishment, they have
          a goal-oriented lifestyles and a deep commitment to success. Results,
          respect and control define success for the Achiever. They prefer
          unique, scalable, quality service and business-to-business or
          solution-oriented concepts. Societal - A visionary business builder
          committed to edify, inspire and change the world. Motivated to have an
          impact on others using their expertise, experience and education.
          Contribution and freedom defines success for the Societal. They prefer
          innovative, change, or cause-based concepts that promote others'
          growth and success.
        </p>
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What work activities do you enjoy?
        </p>
        <input
          name="Activities"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Are you comfortable attending networking functions to promote your new
          business?
        </p>
        <input
          name="AttendingNetworkFunction"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Are you interested in Multiple-Unit Operation or Masters?
        </p>
        <input
          name="MultiUnitOps"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Are you planning on having a partner in the business?
        </p>
        <input
          name="BusinessPartner"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          How does your family feel about your interest in this?
        </p>
        <input
          name="FamilyFeel"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What types of employees would you prefer to work with (if any)?
        </p>
        <input
          name="EmployeesPrefer"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What size staff are you comfortable with?
        </p>
        <input
          name="StaffSize"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-gray-500 font-bold first-letter:text-xl"
        >
          Summary / Notes
        </label>
        <textarea
          name="ZorakleNotes"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={""}
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};

const Eligibility = ({ activeTab, handleInputChange }) => {
  return (
    <div
      id="eligibility"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "eligibility" ? "" : "hidden"
      }`}
    >
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          How do you plan on funding the business?
        </p>
        <input
          name="FundingBusiness"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What is the value of your 401k/IRA?
        </p>
        <input
          name="Value"
          type="number"
          className="candidate-normal-input"
          required
        />
      </div>
      <div>
        <div>
          <p className="candidate-paragraph">
            Have you been in the military or could you qualify for a VA loan? Do
            you qualify for any of these discounts
          </p>
        </div>
        <select
          name="VALoan"
          id="Qualify"
          className="candidate-select"
        ></select>
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Is your current net worth over $500,000? If not, what is your current
          net worth?
        </p>
        <input
          name="CurrentNetworth"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="flex flex-col">
        <p className="candidate-paragraph">
          Have you or your spouse ever been convicted of something other than a
          minor traffic violation?
        </p>
        <ul className="flex">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="TrafficViolation"
              defaultValue="true"
            />
            <label
              className="mb-2 block"
              htmlFor="Have you or your spouse ever been convicted of something other
        than a minor traffic violation?_yes"
            >
              Yes
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Have you or your spouse ever been convicted of something other
          than a minor traffic violation?"
              defaultValue="false"
            />
            <label
              className="mb-2 block"
              htmlFor="Have you or your spouse ever been convicted of something other
        than a minor traffic violation?_no"
            >
              No
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-paragraph">
          Are you or your spouse subject to a pending litigation or unsatisfied
          judgment?
        </p>
        <ul className="flex">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Unsatisfiedjudgment"
              defaultValue="true"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you or your spouse subject to a pending litigation or unsatisfied judgment?_yes"
            >
              Yes
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Are you or your spouse subject to a pending litigation or unsatisfied judgment?"
              defaultValue="false"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you or your spouse subject to a pending litigation or unsatisfied judgment?_no"
            >
              No
            </label>
          </li>
        </ul>
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Have you or your spouse ever declared bankruptcy? If yes, when was it
          discharged?
        </p>
        <input
          name="Bankruptcy"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-gray-500 font-bold first-letter:text-xl"
        >
          Notes
        </label>
        <textarea
          name="EligibilityNote"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={""}
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};

const Experience = ({ activeTab, handleInputChange }) => {
  return (
    <div
      id="experience"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "experience" ? "" : "hidden"
      }`}
    >
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Have you ever owned a business before?
        </p>
        <input
          name="BusinessBefore"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Do you have any marketing experience?
        </p>
        <input
          name="MarketingExperience"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Do you have any management experience?
        </p>
        <input
          name="ManagementExperice"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">Do you have sales experience?</p>
        <input
          name="SalesExperience"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Do you have experience in reviewing financial statements?
        </p>
        <input
          name="ReviewFinancialStatement"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Do you have customer service and account management experience?
        </p>
        <input
          name="CSExperience"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};

const Wants = ({ activeTab, handleInputChange }) => {
  return (
    <div
      id="wants"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "wants" ? "" : "hidden"
      }`}
    >
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What do you find most attractive about being a business owner?
        </p>
        <input
          name="AttractiveBusinessOwner"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          From your past experience is there anything you prefer not to handle
          with your new business?
        </p>
        <input
          name="HandleNewBusiness"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-gray-500 font-bold first-letter:text-xl"
        >
          What are your expectations from the business? What type of lifestyle
          are you looking to achieve?
        </label>
        <textarea
          name="BusinessExpectations"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={""}
        />
      </div>
      <div className="flex flex-col">
        <p className="candidate-label">Do you prefer B2B or B2C?</p>
        <ul className="flex">
          <li className="flex mr-4">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PreferB2b"
              defaultValue="Both"
            />
            <label className="mb-2 block" htmlFor="_fba_b2b1">
              Both
            </label>
          </li>
          <li className="flex mr-4">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Do you prefer B2B or B2C?"
              defaultValue="B2B"
            />
            <label className="mb-2 block" htmlFor="_fba_b2b2">
              B2B
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Do you prefer B2B or B2C?"
              defaultValue="B2C"
            />
            <label className="mb-2 block" htmlFor="_fba_b2b3">
              B2C
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-label">
          Do you prefer a physical location or home-based business model?
        </p>
        <ul className="flex">
          <li className="flex mr-4">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PhysicalLocation"
              defaultValue="Both"
            />
            <label className="mb-2 block" htmlFor="Both">
              Both
            </label>
          </li>
          <li className="flex mr-4">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name=" Do you prefer a physical location or home-based business model?"
              defaultValue="Home-based"
            />
            <label className="mb-2 block" htmlFor="Home-based">
              Home-based
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name=" Do you prefer a physical location or home-based business model?"
              defaultValue="Physical"
            />
            <label className="mb-2 block" htmlFor="Physical">
              Physical
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-label">
          Would you prefer to have an inventory or service-based business model?
        </p>
        <ul className="flex">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Inventory"
              defaultValue="Both"
            />
            <label
              className="mb-2 block"
              htmlFor=" Would you prefer to have an inventory or service-based business
        models_Both"
            >
              Both
            </label>
          </li>
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="business_type"
              defaultValue="Inventory"
            />
            <label className="mb-2 block" htmlFor="type1">
              Inventory
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="business_type"
              defaultValue="Service"
            />
            <label className="mb-2 block" htmlFor="type2">
              Service
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-label">
          Are you comfortable with a business that requires cold calling?
        </p>
        <ul className="flex">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="ColdCalling"
              defaultValue="Both"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you comfortable with a business that requires cold calling?_Both"
            >
              Both
            </label>
          </li>
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="ColdCallingYes"
              defaultValue="Yes"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you comfortable with a business that requires cold calling?
          
          _Yes"
            >
              Yes
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="ColdCallingNo"
              defaultValue="No"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you comfortable with a business that requires cold calling?
          
          _no"
            >
              No
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-label">
          Are you going to be in this business as an owner/operator or do you
          prefer a passive model, semi-passive model? (Passive Ownership means
          the owner is working 15 hours or less per week in the business.)
        </p>
        <ul className="flex">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PassiveMode"
              defaultValue="Owner/Operator"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)Owner/Operator"
            >
              Owner/Operator
            </label>
          </li>
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)"
              defaultValue="Passive"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)
          
          _Passive"
            >
              Passive
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)"
              defaultValue="Semi"
            />
            <label
              className="mb-2 block"
              htmlFor="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)
          
          _Semi"
            >
              Semi
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-label">
          Is working standard business hours (9am-5pm) important to you?
        </p>
        <ul className="flex">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="BusinessHours"
              defaultValue="Both"
            />
            <label
              className="mb-2 block"
              htmlFor="Is working standard business hours (9am-5pm) important to you?_Both"
            >
              Both
            </label>
          </li>
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="BusinessHoursYes"
              defaultValue="Yes"
            />
            <label
              className="mb-2 block"
              htmlFor="Is working standard business hours (9am-5pm) important to you?
          
          _Yes"
            >
              Yes
            </label>
          </li>
          <li className="flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="BusinessHoursNo"
              defaultValue="No"
            />
            <label
              className="mb-2 block"
              htmlFor="Is working standard business hours (9am-5pm) important to you?
          
          _no"
            >
              No
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="text-gray-500 font-bold first-letter:text-xl"
        >
          Notes
        </label>
        <textarea
          name="WantNote"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={""}
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};
