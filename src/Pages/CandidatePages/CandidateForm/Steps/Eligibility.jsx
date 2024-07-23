import React from "react";
import { motion } from "framer-motion";

const Eligibility = ({
  handleInputChange,
  candDetails,
  candNames,
  selectedDetails,
  setStep,
  formFields,
}) => {
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
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 3, type: "spring", bounce: 0.2 },
      }}
      id="eligibility"
      className="candidate-tabs-content"
    >
      <h1 className="candidate-sub-heading ">Eligibility</h1>

      <div className="flex md:flex-row md:gap-[15px] max-sm:flex-col ">
        <div className="candidate-sub-childs">
          <div>
            <p className="candidate-label">
              Have you been in the military or could you qualify for a VA loan?
              Do you qualify for any of these discounts
            </p>
          </div>
          <select
            onChange={handleInputChange}
            name="VALoan"
            id="Qualify"
            className="candidate-select w-full"
          >
            {militaryOptions.map((option, index) => (
              <option
                key={index}
                value={option.value}
                {...(candNames
                  ? candNames.length > 0
                    ? { selected: selectedDetails?.VALoan === option.value }
                    : { selected: candDetails?.VALoan === option.value }
                  : { selected: formFields?.VALoan === option.value })}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="candidate-sub-childs">
          <p className="candidate-label">
            Have you or your spouse ever declared bankruptcy? If yes, when was
            it discharged?
          </p>
          <input
            onChange={handleInputChange}
            name="Bankruptcy"
            type="text"
            className="candidate-input"
            required
            {...(candNames
              ? candNames.length > 0
                ? { value: selectedDetails?.bankruptcy }
                : { defaultValue: candDetails?.bankruptcy }
              : { value: formFields?.Bankruptcy })}
          />
        </div>
      </div>

      <div className="flex md:flex-row md:gap-[15px] max-sm:flex-col ">
        <div className="candidate-sub-childs">
          <p className="candidate-label">What is the value of your 401k/IRA?</p>
          <input
            onChange={handleInputChange}
            name="EligibilityValue"
            type="number"
            className="candidate-input"
            required
            {...(candNames
              ? candNames.length > 0
                ? { value: selectedDetails?.eligibilityValue }
                : { defaultValue: candDetails?.eligibilityValue }
              : { value: formFields?.EligibilityValue })}
          />
        </div>
      </div>

      <div className="flex md:flex-row md:gap-[15px] max-sm:flex-col ">
        <div className="flex flex-col">
          <p className="candidate-label">
            Have you or your spouse ever been convicted of something other than
            a minor traffic violation?
          </p>
          <ul className="flex mt-3 items-center">
            <li className="mr-4 flex items-center">
              <input
                onChange={handleInputChange}
                type="radio"
                className="mr-2"
                name="TrafficViolation"
                defaultValue="true"
                {...(candNames
                  ? candNames.length > 0
                    ? { checked: selectedDetails?.trafficViolation === "true" }
                    : {
                        defaultChecked:
                          candDetails?.trafficViolation === "true",
                      }
                  : { checked: formFields?.TrafficViolation === "true" })}
              />
              <label
                className="candidate-radio-text"
                htmlFor="Have you or your spouse ever been convicted of something other
          than a minor traffic violation?_yes"
              >
                Yes
              </label>
            </li>
            <li className="flex items-center">
              <input
                onChange={handleInputChange}
                type="radio"
                className="mr-2"
                name="TrafficViolation"
                defaultValue="false"
                {...(candNames
                  ? candNames.length > 0
                    ? { checked: selectedDetails?.trafficViolation === "false" }
                    : {
                        defaultChecked:
                          candDetails?.trafficViolation === "false",
                      }
                  : { checked: formFields?.TrafficViolation === "false" })}
              />
              <label
                className="candidate-radio-text"
                htmlFor="Have you or your spouse ever been convicted of something other
          than a minor traffic violation?_no"
              >
                No
              </label>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="candidate-label">
            Are you or your spouse subject to a pending litigation or
            unsatisfied judgment?
          </p>
          <ul className="flex mt-3 items-center mt-3">
            <li className="mr-4 flex items-center">
              <input
                onChange={handleInputChange}
                type="radio"
                className="mr-2"
                name="Unsatisfiedjudgment"
                defaultValue="true"
                {...(candNames
                  ? candNames.length > 0
                    ? {
                        checked:
                          selectedDetails?.unsatisfiedjudgment === "true",
                      }
                    : {
                        defaultChecked:
                          candDetails?.unsatisfiedjudgment === "true",
                      }
                  : { checked: formFields?.Unsatisfiedjudgment === "true" })}
              />
              <label
                className="candidate-radio-text"
                htmlFor="Are you or your spouse subject to a pending litigation or unsatisfied judgment?_yes"
              >
                Yes
              </label>
            </li>
            <li className="flex items-center">
              <input
                onChange={handleInputChange}
                type="radio"
                className="mr-2"
                name="Unsatisfiedjudgment"
                defaultValue="false"
                {...(candNames
                  ? candNames.length > 0
                    ? {
                        checked:
                          selectedDetails?.unsatisfiedjudgment === "false",
                      }
                    : {
                        defaultChecked:
                          candDetails?.unsatisfiedjudgment === "false",
                      }
                  : { checked: formFields?.Unsatisfiedjudgment === "false" })}
              />
              <label
                className="candidate-radio-text"
                htmlFor="Are you or your spouse subject to a pending litigation or unsatisfied judgment?_no"
              >
                No
              </label>
            </li>
          </ul>
        </div>
      </div>

      {/* button container */}
      {/* lekn hume pehle step ke ilawa baaki saaray steps may previous button bhi chaye hoga agr kisi ko back jana ho to */}
      <div
        id="button-container-initial"
        className="flex justify-center items-center mt-5 md:gap-10 max-md:flex-col max-md:gap-5"
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
          Initial
        </button>
        <button
          className="candidate-btn w-72 flex items-center justify-between"
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Experience
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
    </motion.div>
  );
};

export default Eligibility;
