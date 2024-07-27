import React from "react";
import { motion } from "framer-motion";
const Experience = ({
  setStep,
  handleInputChange,
  candDetails,
  candNames,
  selectedDetails,
  formFields,
}) => {
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
      <div className="md:max-w-3xl md:mx-auto max-md:mx-5 md:ml-[100px] md:mr-[100px]">
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
          Experience
        </h1>

        <div className="grid md:grid-cols-2 gap-[15px] max-sm:grid-cols-1">
          <div className="candidate-input-container">
            <p className="candidate-questions">
              Have you ever owned a business before?
            </p>
            <input
              onChange={handleInputChange}
              name="BusinessBefore"
              type="text"
              className="candidate-input"
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.businessBefore }
                  : { defaultValue: candDetails?.businessBefore }
                : { value: formFields?.BusinessBefore })}
            />
          </div>
          <div className="candidate-input-container">
            <p className="candidate-questions">
              Do you have any marketing experience?
            </p>
            <input
              onChange={handleInputChange}
              name="MarketingExperience"
              type="text"
              className="candidate-input"
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.marketingExperience }
                  : { defaultValue: candDetails?.marketingExperience }
                : { value: formFields?.MarketingExperience })}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-[15px] max-sm:grid-cols-1 ">
          <div className="candidate-input-container">
            <p className="candidate-questions">
              Do you have any management experience?
            </p>
            <input
              onChange={handleInputChange}
              name="ManagementExperience"
              type="text"
              className="candidate-input"
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.managementExperience }
                  : { defaultValue: candDetails?.managementExperience }
                : { value: formFields?.ManagementExperience })}
            />
          </div>
          <div className="candidate-input-container">
            <p className="candidate-questions md:mb-5">
              Do you have sales experience?
            </p>
            <input
              onChange={handleInputChange}
              name="SalesExperience"
              type="text"
              className="candidate-input"
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.salesExperience }
                  : { defaultValue: candDetails?.salesExperience }
                : { value: formFields?.SalesExperience })}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[15px] max-sm:grid-cols-1">
          <div className="candidate-input-container">
            <p className="candidate-questions">
              Do you have experience in reviewing financial statements?
            </p>
            <input
              onChange={handleInputChange}
              name="ReviewFinancialStatement"
              type="text"
              className="candidate-input"
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.reviewFinancialStatement }
                  : { defaultValue: candDetails?.reviewFinancialStatement }
                : { value: formFields?.ReviewFinancialStatement })}
            />
          </div>
          <div className="candidate-input-container">
            <p className="candidate-questions">
              Do you have customer and account management experience?
            </p>
            <input
              onChange={handleInputChange}
              name="CSExperience"
              type="text"
              className="candidate-input"
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.cSExperience }
                  : { defaultValue: candDetails?.cSExperience }
                : { value: formFields?.CSExperience })}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-sm:grid-cols-1">
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
              onClick={() => setStep((prevStep) => prevStep + 1)}
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
      </div>
    </motion.div>
  );
};

export default Experience;
