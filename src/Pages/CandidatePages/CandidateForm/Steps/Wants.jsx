import React from "react";

const Wants = ({
  setStep,
  handleInputChange,
  candDetails,
  candNames,
  selectedDetails,
}) => {
  return (
    <div id="wants" className="candidate-tabs-content">
      <h1 className="candidate-sub-heading ">Wants</h1>
      <div className="candidate-input-container">
        <p className="candidate-questions">
          What do you find most attractive about being a business owner?
        </p>
        <input
          onChange={handleInputChange}
          name="AttractiveBusinessOwner"
          type="text"
          className="candidate-input"
          required
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.attractiveBusinessOwner }
            : { defaultValue: candDetails?.attractiveBusinessOwner })}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-questions">
          From your past experience is there anything you prefer not to handle
          with your new business?
        </p>
        <input
          onChange={handleInputChange}
          name="HandleNewBusiness"
          type="text"
          className="candidate-input"
          required
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.handleNewBusiness }
            : { defaultValue: candDetails?.handleNewBusiness })}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="candidate-questions">
          What are your expectations from the business? What type of lifestyle
          are you looking to achieve?
        </label>
        <textarea
          onChange={handleInputChange}
          name="BusinessExpectations"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={candDetails?.BusinessExpectations}
        />
      </div>
      <div className="flex flex-col">
        <p className="candidate-questions">Do you prefer B2B or B2C?</p>
        <ul className="flex mt-3 mt-3 items-center">
          <li className="flex mr-4">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PreferB2b"
              defaultValue="Both"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.preferB2b === "Both" }
                : { defaultChecked: candDetails?.preferB2b === "Both" })}
            />
            <label className="candidate-radio-text">Both</label>
          </li>
          <li className="flex mr-4 items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PreferB2b"
              defaultValue="B2B"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.preferB2b === "B2B" }
                : { defaultChecked: candDetails?.preferB2b === "B2B" })}
            />
            <label className="candidate-radio-text">B2B</label>
          </li>
          <li className="flex items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PreferB2b"
              defaultValue="B2C"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.preferB2b === "B2C" }
                : { defaultChecked: candDetails?.preferB2b === "B2C" })}
            />
            <label className="candidate-radio-text">B2C</label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-questions">
          Do you prefer a physical location or home-based business model?
        </p>
        <ul className="flex mt-3 items-center">
          <li className="flex mr-4 items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PhysicalLocation"
              defaultValue="Both"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.physicalLocation === "Both" }
                : { defaultChecked: candDetails?.physicalLocation === "Both" })}
            />
            <label className="candidate-radio-text" htmlFor="Both">
              Both
            </label>
          </li>
          <li className="flex items-center mr-4">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PhysicalLocation"
              defaultValue="Home-based"
              {...(candNames && candNames.length > 0
                ? {
                    checked: selectedDetails?.physicalLocation === "Home-based",
                  }
                : {
                    defaultChecked:
                      candDetails?.physicalLocation === "Home-based",
                  })}
            />
            <label className="candidate-radio-text" htmlFor="Home-based">
              Home-based
            </label>
          </li>
          <li className="flex items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PhysicalLocation"
              defaultValue="Physical"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.physicalLocation === "Physical" }
                : {
                    defaultChecked:
                      candDetails?.physicalLocation === "Physical",
                  })}
            />
            <label className="candidate-radio-text" htmlFor="Physical">
              Physical
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-questions">
          Would you prefer to have an inventory or service-based business model?
        </p>
        <ul className="flex mt-3 items-center">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Inventory"
              defaultValue="Both"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.inventory === "Both" }
                : { defaultChecked: candDetails?.inventory === "Both" })}
            />
            <label
              className="candidate-radio-text"
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
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.inventory === "Inventory" }
                : { defaultChecked: candDetails?.inventory === "Inventory" })}
            />
            <label className="candidate-radio-text" htmlFor="type1">
              Inventory
            </label>
          </li>
          <li className="flex items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="Inventory"
              defaultValue="Service"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.inventory === "Service" }
                : { defaultChecked: candDetails?.inventory === "Service" })}
            />
            <label className="candidate-radio-text" htmlFor="type2">
              Service
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-questions">
          Are you comfortable with a business that requires cold calling?
        </p>
        <ul className="flex mt-3 items-center">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="ColdCalling"
              defaultValue="Both"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.coldCalling === "Both" }
                : { defaultChecked: candDetails?.coldCalling === "Both" })}
            />
            <label
              className="candidate-radio-text"
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
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.coldCalling === "Yes" }
                : { defaultChecked: candDetails?.coldCalling === "Yes" })}
            />
            <label
              className="candidate-radio-text"
              htmlFor="Are you comfortable with a business that requires cold calling?
            
            _Yes"
            >
              Yes
            </label>
          </li>
          <li className="flex items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="ColdCalling"
              defaultValue="No"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.coldCalling === "No" }
                : { defaultChecked: candDetails?.coldCalling === "No" })}
            />
            <label
              className="candidate-radio-text"
              htmlFor="Are you comfortable with a business that requires cold calling?
            
            _no"
            >
              No
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-questions">
          Are you going to be in this business as an owner/operator or do you
          prefer a passive model, semi-passive model? (Passive Ownership means
          the owner is working 15 hours or less per week in the business.)
        </p>
        <ul className="flex mt-3 items-center">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PassiveMode"
              defaultValue="Owner/Operator"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.passiveMode === "Owner/Operator" }
                : {
                    defaultChecked:
                      candDetails?.passiveMode === "Owner/Operator",
                  })}
            />
            <label
              className="candidate-radio-text"
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
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.passiveMode === "Passive" }
                : {
                    defaultChecked: candDetails?.passiveMode === "Passive",
                  })}
            />
            <label
              className="candidate-radio-text"
              htmlFor="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)
            
            _Passive"
            >
              Passive
            </label>
          </li>
          <li className="flex items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="PassiveMode"
              defaultValue="Semi"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.passiveMode === "Semi" }
                : {
                    defaultChecked: candDetails?.passiveMode === "Semi",
                  })}
            />
            <label
              className="candidate-radio-text"
              htmlFor="Are you going to be in this business as an owner/operator or do you prefer a passive model, semi-passive model? (Passive Ownership means the owner is working 15 hours or less per week in the business.)
            
            _Semi"
            >
              Semi
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="candidate-questions">
          Is working standard business hours (9am-5pm) important to you?
        </p>
        <ul className="flex mt-3 items-center">
          <li className="mr-4 flex">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="BusinessHours"
              defaultValue="Both"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.businessHours === "Both" }
                : {
                    defaultChecked: candDetails?.businessHours === "Both",
                  })}
            />
            <label
              className="candidate-radio-text"
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
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.businessHours === "Yes" }
                : {
                    defaultChecked: candDetails?.businessHours === "Yes",
                  })}
            />
            <label
              className="candidate-radio-text"
              htmlFor="Is working standard business hours (9am-5pm) important to you?
            
            _Yes"
            >
              Yes
            </label>
          </li>
          <li className="flex items-center">
            <input
              onChange={handleInputChange}
              type="radio"
              className="mr-2"
              name="BusinessHours"
              defaultValue="No"
              {...(candNames && candNames.length > 0
                ? { checked: selectedDetails?.businessHours === "No" }
                : {
                    defaultChecked: candDetails?.businessHours === "No",
                  })}
            />
            <label
              className="candidate-radio-text"
              htmlFor="Is working standard business hours (9am-5pm) important to you?
            
            _no"
            >
              No
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="candidate-questions">
          Notes
        </label>
        <textarea
          onChange={handleInputChange}
          name="WantNote"
          id="message"
          rows={10}
          className="candidate-input"
          defaultValue={candDetails?.WantNote}
        />
      </div>

      <div
        id="button-container-initial"
        className="flex justify-center items-center mt-5 gap-10"
      >
        <button
          className="candidate-btn w-72 flex items-center justify-between"
          onClick={() => setStep((prevStep) => prevStep - 1)}
        >
          {" "}
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
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Experience
        </button>
        <button
          className="candidate-btn w-72 flex items-center justify-between"
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Franchise Category
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

export default Wants;
