import React from "react";
const Experience = ({
  setStep,
  handleInputChange,
  candDetails,
  candNames,
  selectedDetails,
}) => {
  return (
    <div id="experience" className="candidate-tabs-content">
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
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.businessBefore }
            : { defaultValue: candDetails?.businessBefore })}
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
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.marketingExperience }
            : { defaultValue: candDetails?.marketingExperience })}
        />
      </div>
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
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.managementExperience }
            : { defaultValue: candDetails?.managementExperience })}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-questions">Do you have sales experience?</p>
        <input
          onChange={handleInputChange}
          name="SalesExperience"
          type="text"
          className="candidate-input"
          required
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.salesExperience }
            : { defaultValue: candDetails?.salesExperience })}
        />
      </div>
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
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.reviewFinancialStatement }
            : { defaultValue: candDetails?.reviewFinancialStatement })}
        />
      </div>
      <div className="candidate-input-container">
        <p className="candidate-questions">
          Do you have customer service and account management experience?
        </p>
        <input
          onChange={handleInputChange}
          name="CSExperience"
          type="text"
          className="candidate-input"
          required
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.csExperience }
            : { defaultValue: candDetails?.csExperience })}
        />
      </div>

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
          Eligibility
        </button>
        <button
          className="candidate-btn w-72 flex items-center justify-between"
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Wants
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

export default Experience;
