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
  return (
    <div
      id="initial-qualifying"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "initial qualifying" ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between flex-col sm:flex-row">
        <div>
          <h3 className="font-bold text-black dark:text-white mb-2">
            Section Settings
          </h3>
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input
              onChange={handleInputChange}
              type="checkbox"
              className="accent-custom-heading-color"
              name="hide-section"
            />
            <text className="text-gray-500 font-bold first-letter:text-1xl">
              Hide Section
            </text>
          </label>
          <label className="flex  items-center gap-2">
            <input
              onChange={handleInputChange}
              type="checkbox"
              className="accent-custom-heading-color"
              name="lock-section"
            />
            <text className="text-gray-500 font-bold first-letter:text-1xl">
              Lock Section
            </text>
          </label>
        </div>
      </div>
      <div>
        <p className="candidate-label">
          How much money are you wanting to invest in the franchise?
        </p>
      </div>
      <select
        onChange={handleInputChange}
        name="How much money are you wanting to invest in the franchise?"
        id="money"
        className="candidate-select"
      ></select>
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
        name="Do you have a need for funding?"
        id="funding"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-paragraph">
          What is your approximate credit score?
        </p>
      </div>
      <select
        onChange={handleInputChange}
        name="What is your approximate credit score?"
        id="score"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-label">Net Worth?</p>
      </div>
      <select
        onChange={handleInputChange}
        name="Net Worth?"
        id="worth"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-label">Liquid Cash?</p>
      </div>
      <select
        onChange={handleInputChange}
        name="Liquid Cash?"
        id="liquid-cash"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-paragraph">
          What caused you to start looking for a franchise?
        </p>
      </div>
      <select
        onChange={handleInputChange}
        name="What caused you to start looking for a franchise?"
        id="franchise"
        className="candidate-select"
      ></select>
      <div>
        <p className="candidate-paragraph">
          What is your professional background?
        </p>
      </div>
      <select
        onChange={handleInputChange}
        name=" What is your professional background?"
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
          name="What franchises are you interested in?"
          className="candidate-normal-input"
          required
        />
      </div>
      <div>
        <p className="candidate-paragraph">What is your time frame?</p>
      </div>
      <select
        onChange={handleInputChange}
        name="What is your time frame?"
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
          onChange={handleInputChange}
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

const Zoracle = ({ activeTab }) => {
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
          name="Competency 1?"
          id="competency1"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Competency 2?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Competency 2?"
          id="competency2"
          className="candidate-select"
        ></select>
      </div>
      <div>
        <div>
          <p className="candidate-label">Competency 3?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Competency 3?"
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
          onChange={handleInputChange}
          name="What work activities do you enjoy?"
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
          onChange={handleInputChange}
          name="Are you comfortable attending networking functions to promote your new business?"
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
          onChange={handleInputChange}
          name="Are you interested in Multiple-Unit Operation or Masters?"
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
          onChange={handleInputChange}
          name="Are you planning on having a partner in the business?"
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
          onChange={handleInputChange}
          name="How does your family feel about your interest in this?"
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
          onChange={handleInputChange}
          name="What types of employees would you prefer to work with (if any)?"
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
          onChange={handleInputChange}
          name="What size staff are you comfortable with?"
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
          onChange={handleInputChange}
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

const Eligibility = ({ activeTab }) => {
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
          name="How do you plan on funding the business?"
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
          onChange={handleInputChange}
          name="What is the value of your 401k/IRA?"
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
          onChange={handleInputChange}
          name="Have you been in the military or could you qualify for a VA loan? Do you qualify for any of these discounts"
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
          onChange={handleInputChange}
          name="Is your current net worth over $500,000? If not, what is your current net worth?"
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
              name="Have you or your spouse ever been convicted of something other
          than a minor traffic violation?"
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
              name="Are you or your spouse subject to a pending litigation or unsatisfied judgment?"
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
          onChange={handleInputChange}
          name="Have you or your spouse ever declared bankruptcy? If yes, when was it discharged?"
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

const Experience = ({ activeTab }) => {
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
          name="Have you ever owned a business before?"
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
          name="Do you have any marketing experience?"
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
          name="Do you have any management experience?"
          type="text"
          className="candidate-normal-input"
          required
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-paragraph">Do you have sales experience?</p>
        <input
          onChange={handleInputChange}
          name="Do you have sales experience?"
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
          name="Do you have experience in reviewing financial statements?"
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
          name="Do you have customer service and account management experience?"
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

const Wants = ({ activeTab }) => {
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
          name="What do you find most attractive about being a business owner?"
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
          name="From your past experience is there anything you prefer not to handle with your new business?"
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
              name="Do you prefer B2B or B2C?"
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
              name=" Do you prefer a physical location or home-based business model?"
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
              name="business_type"
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
              name="Are you comfortable with a business that requires cold calling?"
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
              name="Are you comfortable with a business that requires cold calling?"
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
              name="Are you comfortable with a business that requires cold calling?"
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
              name="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)"
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
              name="Is working standard business hours (9am-5pm) important to you?"
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
              name="Is working standard business hours (9am-5pm) important to you?"
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
              name="Is working standard business hours (9am-5pm) important to you?"
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
