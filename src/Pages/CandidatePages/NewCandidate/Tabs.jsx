import { useState } from "react";

const Tabs = ({ handleInputChange, candDetails }) => {
  const [activeTab, setActiveTab] = useState("initial qualifying");
  return (
    <div className="md:flex mt-6">
      {/* Tabs list  */}
      <TabsList activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Fist tab description */}
      <Initial
        activeTab={activeTab}
        handleInputChange={handleInputChange}
        candDetails={candDetails}
      />
      {/* 2nd Tab Description */}
      <Zoracle
        activeTab={activeTab}
        handleInputChange={handleInputChange}
        candDetails={candDetails}
      />
      {/* 3rd Tab Description */}
      <Eligibility
        activeTab={activeTab}
        handleInputChange={handleInputChange}
        candDetails={candDetails}
      />
      {/* 4th Tab Description */}
      <Experience
        activeTab={activeTab}
        handleInputChange={handleInputChange}
        candDetails={candDetails}
      />
      {/* 5th Tab Description */}
      <Wants
        activeTab={activeTab}
        handleInputChange={handleInputChange}
        candDetails={candDetails}
      />
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

const Initial = ({ activeTab, handleInputChange, candDetails }) => {
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
  const creditScoreOptions = [
    { value: "", label: "Select one" },
    { value: "Excellent - 780 to 850", label: "Excellent - 780 to 850" },
    { value: "Very good - 740 to 779", label: "Very good - 740 to 779" },
    {
      value: "Above average - 720 to 739",
      label: "Above average - 720 to 739",
    },
    { value: "Average - 680 to 719", label: "Average - 680 to 719" },
    {
      value: "Below average - 620 to 679",
      label: "Below average - 620 to 679",
    },
    { value: "Poor - 580 to 619", label: "Poor - 580 to 619" },
    { value: "Very poor - Under 580", label: "Very poor - Under 580" },
    { value: "I do not know", label: "I do not know" },
  ];
  const netWorthOptions = [
    { value: "", label: "Select one" },
    { value: "$0 or Negative", label: "$0 or Negative" },
    { value: "$100,000 or less", label: "$100,000 or less" },
    { value: "$100,001 to $250,000", label: "$100,001 to $250,000" },
    { value: "$250,001 to $500,000", label: "$250,001 to $500,000" },
    { value: "$500,001 to $750,000", label: "$500,001 to $750,000" },
    { value: "$750,001 to $1,000,000", label: "$750,001 to $1,000,000" },
    { value: "$1,000,001 to $2,000,000", label: "$1,000,001 to $2,000,000" },
    { value: "$2,000,001 to $5,000,000", label: "$2,000,001 to $5,000,000" },
    { value: "$5,000,001 to $10,000,000", label: "$5,000,001 to $10,000,000" },
    { value: "$10,000,001 or more", label: "$10,000,001 or more" },
    { value: "I prefer not to answer", label: "I prefer not to answer" },
  ];
  const liquidCashOptions = [
    { value: "", label: "Select one" },
    { value: "$0", label: "$0" },
    { value: "$10,000 or under", label: "$10,000 or under" },
    { value: "$10,001 to $30,000", label: "$10,001 to $30,000" },
    { value: "$30,001 to $50,000", label: "$30,001 to $50,000" },
    { value: "$50,001 to $75,000", label: "$50,001 to $75,000" },
    { value: "$75,001 to $100,000", label: "$75,001 to $100,000" },
    { value: "$100,001 to $125,000", label: "$100,001 to $125,000" },
    { value: "$125,001 to $150,000", label: "$125,001 to $150,000" },
    { value: "$150,001 to $200,000", label: "$150,001 to $200,000" },
    { value: "$200,001 to $300,000", label: "$200,001 to $300,000" },
    { value: "$300,001 to $500,000", label: "$300,001 to $500,000" },
    { value: "$500,001 to $1,000,000", label: "$500,001 to $1,000,000" },
    { value: "$1,000,001 to $2,500,000", label: "$1,000,001 to $2,500,000" },
    { value: "$2,500,001 or more", label: "$2,500,001 or more" },
    { value: "I prefer not to answer", label: "I prefer not to answer" },
  ];
  const reasonOptions = [
    { value: "", label: "Select one" },
    {
      value: "I want to own my own business",
      label: "I want to own my own business",
    },
    {
      value: "I want to transition out of my job",
      label: "I want to transition out of my job",
    },
    {
      value: "I need more flexibility in my life",
      label: "I need more flexibility in my life",
    },
    {
      value: "I am looking for a side hustle while I'm still employed",
      label: "I am looking for a side hustle while I'm still employed",
    },
    {
      value: "I'm seeking another investment to add to my portfolio",
      label: "I'm seeking another investment to add to my portfolio",
    },
    {
      value: "I want to find a business for a family member",
      label: "I want to find a business for a family member",
    },
  ];
  const backgroundOptions = [
    { value: "", label: "Select one" },
    { value: "No Preference", label: "No Preference" },
    { value: "Sales", label: "Sales" },
    { value: "Executive", label: "Executive" },
    { value: "Manager", label: "Manager" },
    { value: "IT", label: "IT" },
    { value: "Admin", label: "Admin" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "HR" },
    { value: "Marketing", label: "Marketing" },
    { value: "Operations", label: "Operations" },
    { value: "Trades", label: "Trades" },
    { value: "Laborer", label: "Laborer" },
    { value: "Logistics", label: "Logistics" },
  ];
  const timeFrameOptions = [
    { value: "", label: "Select one" },
    { value: "As soon as possible", label: "As soon as possible" },
    { value: "1 to 3 months", label: "1 to 3 months" },
    { value: "4 to 6 months", label: "4 to 6 months" },
    { value: "6 to 12 months", label: "6 to 12 months" },
    { value: "7 to 9 months", label: "7 to 9 months" },
    { value: "10 to 12 months", label: "10 to 12 months" },
    { value: "More than a year away", label: "More than a year away" },
    { value: "Unsure at the moment", label: "Unsure at the moment" },
  ];
  console.log(candDetails);
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
        onChange={handleInputChange}
        name="InvestmentFranchise"
        id="money"
        className="candidate-select"
        defaultValue={candDetails?.InvestmentFranchise}
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
      <select
        onChange={handleInputChange}
        name="Funding"
        id="Funding"
        className="candidate-select"
        defaultValue={candDetails?.Funding}
      >
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
        onChange={handleInputChange}
        name="CreditScore"
        id="score"
        className="candidate-select"
        defaultValue={candDetails?.CreditScore}
      >
        {creditScoreOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="candidate-label">Net Worth?</p>
      </div>
      <select
        onChange={handleInputChange}
        name="Networth"
        id="worth"
        className="candidate-select"
        defaultValue={candDetails?.Networth}
      >
        {netWorthOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="candidate-label">Liquid Cash?</p>
      </div>
      <select
        onChange={handleInputChange}
        name="LiquidCash"
        id="liquid-cash"
        className="candidate-select"
        defaultValue={candDetails?.LiquidCash}
      >
        {liquidCashOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="candidate-paragraph">
          What caused you to start looking for a franchise?
        </p>
      </div>
      <select
        onChange={handleInputChange}
        name="FranchiseCause"
        id="franchise"
        className="candidate-select"
        defaultValue={candDetails?.FranchiseCause}
      >
        {reasonOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <p className="candidate-paragraph">
          What is your professional background?
        </p>
      </div>
      <select
        onChange={handleInputChange}
        name="ProfessionalBackground"
        id="background"
        className="candidate-select"
        defaultValue={candDetails?.ProfessionalBackground}
      >
        {backgroundOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
          defaultValue={candDetails?.FranchiseInterested}
        />
      </div>
      <div>
        <p className="candidate-paragraph">What is your time frame?</p>
      </div>
      <select
        onChange={handleInputChange}
        name="TimeFrame"
        id="time-frame"
        className="candidate-select"
        defaultValue={candDetails?.TimeFrame}
      >
        {timeFrameOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="text-gray-500 font-bold first-letter:text-xl"
        >
          Notes
        </label>
        <textarea
          onChange={handleInputChange}
          name="InitialQualifyingNote"
          id="message"
          rows={3}
          className="candidate-input"
          defaultValue={candDetails?.InitialQualifyingNote}
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};

const Zoracle = ({ activeTab, handleInputChange, candDetails }) => {
  const competencyOptions1 = [
    { value: "", label: "Select one" },
    { value: "Leadership-Vision", label: "Leadership & Vision" },
    { value: "Sales-Channel-Planning", label: "Sales & Channel Planning" },
    {
      value: "Marketing-Public-Relations",
      label: "Marketing & Public Relations",
    },
    { value: "Executive-Management", label: "Executive & Management" },
    { value: "Human-Resources-Training", label: "Human Resources & Training" },
    { value: "Admin-Customer-Service", label: "Admin & Customer Service" },
    { value: "Finance-Operations", label: "Finance & Operations" },
    { value: "R-D-Technical", label: "R&D & Technical" },
  ];
  const competencyOptions2 = [
    { value: "", label: "Select one" },
    { value: "Leadership-Vision", label: "Leadership & Vision" },
    { value: "Sales-Channel-Planning", label: "Sales & Channel Planning" },
    {
      value: "Marketing-Public-Relations",
      label: "Marketing & Public Relations",
    },
    { value: "Executive-Management", label: "Executive & Management" },
    { value: "Human-Resources-Training", label: "Human Resources & Training" },
    { value: "Admin-Customer-Service", label: "Admin & Customer Service" },
    { value: "Finance-Operations", label: "Finance & Operations" },
    { value: "R-D-Technical", label: "R&D & Technical" },
  ];
  const competencyOptions3 = [
    { value: "", label: "Select one" },
    { value: "Leadership-Vision", label: "Leadership & Vision" },
    { value: "Sales-Channel-Planning", label: "Sales & Channel Planning" },
    {
      value: "Marketing-Public-Relations",
      label: "Marketing & Public Relations",
    },
    { value: "Executive-Management", label: "Executive & Management" },
    { value: "Human-Resources-Training", label: "Human Resources & Training" },
    { value: "Admin-Customer-Service", label: "Admin & Customer Service" },
    { value: "Finance-Operations", label: "Finance & Operations" },
    { value: "R-D-Technical", label: "R&D & Technical" },
  ];
  const growth = [
    { value: "", label: "Select Stage" },
    {
      value: "Emerging / Entrepreneur(1-19)",
      label: "Emerging / Entrepreneur(1-19)",
    },
    { value: "Partner(20-99)", label: "Partner(20-99)" },
    { value: "Plug and Play(100-499)", label: "Plug and Play(100-499)" },
    { value: "Empire(1,000+)", label: "Empire(1,000+)" },
    { value: "Hybrid", label: "Hybrid" },
  ];
  const valueOptions = [
    { value: "", label: "Select one" },
    { value: "Emulator", label: "Emulator" },
    { value: "Belonger", label: "Belonger" },
    { value: "Achiever", label: "Achiever" },
    { value: "Societal", label: "Societal" },
  ];
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
          onChange={handleInputChange}
          name="Competency1"
          id="competency1"
          className="candidate-select w-full"
          defaultValue={candDetails?.Competency1}
        >
          {competencyOptions1.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Competency 2?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Competency2"
          id="competency2"
          className="candidate-select w-full"
          defaultValue={candDetails?.Competency2}
        >
          {competencyOptions2.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Competency 3?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Competency3"
          id="competency3"
          className="candidate-select w-full"
          defaultValue={candDetails?.Competency3}
        >
          {competencyOptions3.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Stage of Growth</p>
        </div>
        <select
          onChange={handleInputChange}
          name="StageofGrowth"
          id="stage-of-growth"
          className="candidate-select w-full"
          defaultValue={candDetails?.StageofGrowth}
        >
          {growth.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <p className="candidate-paragraph">Value</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Value"
          id="value"
          className="candidate-select w-full"
          defaultValue={candDetails?.Value}
        >
          {valueOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
          onChange={handleInputChange}
          name="Activities"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.Activities}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Are you comfortable attending networking functions to promote your new
          business?
        </p>
        <input
          onChange={handleInputChange}
          name="AttendingNetworkFunction"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.AttendingNetworkFunction}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Are you interested in Multiple-Unit Operation or Masters?
        </p>
        <input
          onChange={handleInputChange}
          name="MultiUnitOps"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.MultiUnitOps}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Are you planning on having a partner in the business?
        </p>
        <input
          onChange={handleInputChange}
          name="BusinessPartner"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.BusinessPartner}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          How does your family feel about your interest in this?
        </p>
        <input
          onChange={handleInputChange}
          name="FamilyFeel"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.FamilyFeel}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What types of employees would you prefer to work with (if any)?
        </p>
        <input
          onChange={handleInputChange}
          name="EmployeesPrefer"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.EmployeesPrefer}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What size staff are you comfortable with?
        </p>
        <input
          onChange={handleInputChange}
          name="StaffSize"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.StaffSize}
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
          onChange={handleInputChange}
          name="ZorakleNotes"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={candDetails?.ZorakleNotes}
        />
      </div>
      <div>
        <button className="candidate-buttons mt-6">SAVE</button>
      </div>
    </div>
  );
};

const Eligibility = ({ activeTab, handleInputChange, candDetails }) => {
  const militaryOptions = [
    { value: "", label: "Select one" },
    { value: "Veteran", label: "Veteran" },
    { value: "First Responder", label: "First Responder" },
    { value: "Minority", label: "Minority" },
    { value: "Woman", label: "Woman" },
    { value: "Conversion", label: "Conversion" },
    { value: "Existing Franchisee", label: "Existing Franchisee" },
  ];
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
          onChange={handleInputChange}
          name="FundingBusiness"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.FundingBusiness}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          What is the value of your 401k/IRA?
        </p>
        <input
          onChange={handleInputChange}
          name="EligibilityValue"
          type="number"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.EligibilityValue}
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
          onChange={handleInputChange}
          name="VALoan"
          id="Qualify"
          className="candidate-select w-full"
          defaultValue={candDetails?.VALoan}
        >
          {militaryOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">
          Is your current net worth over $500,000? If not, what is your current
          net worth?
        </p>
        <input
          onChange={handleInputChange}
          name="CurrentNetworth"
          type="text"
          className="candidate-normal-input"
          required
          defaultValue={candDetails?.CurrentNetworth}
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
              name="TrafficViolation"
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
              name="Unsatisfiedjudgment"
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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

const Experience = ({ activeTab, handleInputChange, candDetails }) => {
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          name="ManagementExperience"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">Do you have sales experience?</p>
        <input
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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

const Wants = ({ activeTab, handleInputChange, candDetails }) => {
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
              name="PreferB2b"
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
              name="PreferB2b"
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
              name="PhysicalLocation"
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
              name="PhysicalLocation"
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
              name="Inventory"
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
              name="Inventory"
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
              name="ColdCalling"
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
              name="ColdCalling"
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
              name="PassiveMode"
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
              name="PassiveMode"
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
              name="BusinessHours"
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
              name="BusinessHours"
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
          onChange={handleInputChange}
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
