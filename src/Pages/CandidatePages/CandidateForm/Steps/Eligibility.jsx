import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import axios from "axios";
const Eligibility = ({
  handleInputChange,
  candDetails,
  candNames,
  selectedDetails,
  setStep,
  formFields,
}) => {

  const [trafficViolation, setTrafficViolation] = useState(
    candNames && candNames.length > 0
      ? selectedDetails?.trafficViolation
      : candDetails?.trafficViolation || formFields?.TrafficViolation
  );

  const [trafficViolationComments, setTrafficViolationComments] = useState("");

  const [unsatisfiedJudgment, setUnsatisfiedJudgment] = useState(
    candNames && candNames.length > 0
      ? selectedDetails?.unsatisfiedjudgment
      : candDetails?.unsatisfiedjudgment || formFields?.Unsatisfiedjudgment
  );

  const [unsatisfiedJudgmentComments, setUnsatisfiedJudgmentComments] = useState("");

  const militaryOptions = [
    { value: "AA", label: "Select one" },
    { value: "Veteran", label: "Veteran" },
    { value: "First Responder", label: "First Responder" },
    { value: "Minority", label: "Minority" },
    { value: "Woman", label: "Woman" },
    { value: "Conversion", label: "Conversion" },
    { value: "Existing Franchisee", label: "Existing Franchisee" },
    { value: "N/A", label: "N/A" },
  ];

  const handleEligibility = async (e) => {
    e.preventDefault();

    setStep((prevStep) => prevStep + 1);
  };

  // Sort the options alphabetically by value
  const sortedMilitaryOptions = militaryOptions.sort((a, b) =>
    a.value.localeCompare(b.value)
  );

  const handleInputChangeLocal = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    if (name === "TrafficViolation") {
      setTrafficViolation(value);
    } else if (name === "TrafficViolationComments") {
      setTrafficViolationComments(value);
    } else if (name === "Unsatisfiedjudgment") {
      setUnsatisfiedJudgment(value);
    } else if (name === "UnsatisfiedjudgmentComments") {
      setUnsatisfiedJudgmentComments(value);
    }

    handleInputChange(e);
  };
  
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
        Eligibility
      </h1>

      <div className="candidate-two-col ">
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
            className="candidate-select "
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

      <div className="candidate-two-col ">
        <div className="candidate-sub-childs">
          <p className="candidate-label">What is the value of your 401k/IRA?</p>
          <input
            onChange={handleInputChange}
            name="EligibilityValue"
            type="tel"
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

      <div className="candidate-two-col ">
        <div className="flex flex-col">
          <p className="candidate-label">
            Have you or your spouse ever been convicted of something other than
            a minor traffic violation?
          </p>
          <ul className="flex mt-3 items-center">
            <li className="mr-4 flex items-center">
              <input
                onChange={handleInputChangeLocal}
                type="radio"
                className="mr-2"
                name="TrafficViolation"
                defaultValue="true"
                {...(candNames
                  ? candNames.length > 0
                    ? {
                        checked: selectedDetails?.trafficViolation === "true",
                      }
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
                onChange={handleInputChangeLocal}
                type="radio"
                className="mr-2"
                name="TrafficViolation"
                defaultValue="false"
                {...(candNames
                  ? candNames.length > 0
                    ? {
                        checked: selectedDetails?.trafficViolation === "false",
                      }
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
          {trafficViolation === "true" && (
            <div className="mt-3">
              <label htmlFor="trafficViolationComments" className="candidate-label">
                Please provide details:
              </label>
              <input
                type="text"
                id="trafficViolationComments"
                name="TrafficViolationComments"
                value={trafficViolationComments}
                onChange={handleInputChangeLocal}
                className="candidate-input md:w-[80%] max-md:w-[90%]"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <p className="candidate-label">
            Are you or your spouse subject to a pending litigation or
            unsatisfied judgment?
          </p>
          <ul className="flex items-center mt-3">
            <li className="mr-4 flex items-center">
              <input
                onChange={handleInputChangeLocal}
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
                onChange={handleInputChangeLocal}
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
          {unsatisfiedJudgment === "true" && (
            <div className="mt-3">
              <label htmlFor="unsatisfiedJudgmentComments" className="candidate-label">
                Please provide details:
              </label>
              <input
                type="text"
                id="unsatisfiedJudgmentComments"
                name="UnsatisfiedjudgmentComments"
                value={unsatisfiedJudgmentComments}
                onChange={handleInputChangeLocal}
                className="candidate-input md:w-[100%] max-md:w-[90%]"
              />
            </div>
          )}
        </div>
      </div>

      {/* button container */}
      {/* lekn hume pehle step ke ilawa baaki saaray steps may previous button bhi chaye hoga agr kisi ko back jana ho to */}
      <div className="candidate-two-col">
        <div
          id="button-container-initial"
          className="flex md:justify-start mt-5 max-md:flex-col max-md:gap-5"
        >
          <button
            className="candidate-btn w-40 flex items-center justify-between"
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
            Previous
          </button>
        </div>
        <div
          id="button-container-initial"
          className="flex md:justify-end mt-5 max-md:flex-col max-md:gap-5 md:mr-6"
        >
          <button
            className="candidate-btn  w-40  flex items-center justify-between"
            onClick={handleEligibility}
          >
            Next
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
    </motion.div>
  );
};

export default Eligibility;
