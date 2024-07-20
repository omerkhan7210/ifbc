import React from "react";

const Initial = ({
  handleInputChange,
  candDetails,
  candNames,
  selectedDetails,
  setStep,
}) => {
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
  // ye hamara dusra step hai idhr hum log dobara stepper laengay
  return (
    <>
      <div id="initial-qualifying" className="candidate-tabs-content">
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
          Initial Qualifying
        </h1>

        <div>
          <p className="candidate-questions">
            How much money are you wanting to invest in the franchise?
          </p>
        </div>
        <select
          onChange={handleInputChange}
          name="InvestmentFranchise"
          id="money"
          className="candidate-select"
        >
          {investmentOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.investmentFranchise
                  : candDetails?.investmentFranchise
              }
            >
              {option.label}
            </option>
          ))}
        </select>

        <div>
          <p className="candidate-questions">Do you have a need for funding?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Funding"
          id="Funding"
          className="candidate-select"
        >
          {fundingOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.funding
                  : candDetails?.funding
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <p className="candidate-questions">
            What is your approximate credit score?
          </p>
        </div>
        <select
          onChange={handleInputChange}
          name="CreditScore"
          id="score"
          className="candidate-select"
        >
          {creditScoreOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.creditScore
                  : candDetails?.creditScore
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <p className="candidate-questions">Net Worth?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="Networth"
          id="worth"
          className="candidate-select"
        >
          {netWorthOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.netWorth
                  : candDetails?.netWorth
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <p className="candidate-questions">Liquid Cash?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="LiquidCash"
          id="liquid-cash"
          className="candidate-select"
        >
          {liquidCashOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.liquidCash
                  : candDetails?.liquidCash
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <p className="candidate-questions">
            What caused you to start looking for a franchise?
          </p>
        </div>
        <select
          onChange={handleInputChange}
          name="FranchiseCause"
          id="franchise"
          className="candidate-select"
        >
          {reasonOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.franchiseCause
                  : candDetails?.franchiseCause
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <p className="candidate-questions">
            What is your professional background?
          </p>
        </div>
        <select
          onChange={handleInputChange}
          name="ProfessionalBackground"
          id="background"
          className="candidate-select"
        >
          {backgroundOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.professionalBackground
                  : candDetails?.professionalBackground
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="candidate-input-container">
          <p className="candidate-questions">
            What franchises are you interested in?
          </p>
          <input
            onChange={handleInputChange}
            type="text"
            name="FranchiseInterested"
            className="candidate-input"
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.franchiseInterested }
              : { defaultValue: candDetails?.franchiseInterested })}
          />
        </div>
        <div>
          <p className="candidate-questions">What is your time frame?</p>
        </div>
        <select
          onChange={handleInputChange}
          name="TimeFrame"
          id="time-frame"
          className="candidate-select"
        >
          {timeFrameOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={
                candNames && candNames.length > 0
                  ? selectedDetails?.timeFrame
                  : candDetails?.timeFrame
              }
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="mt-5">
          <label htmlFor="message" className="candidate-questions">
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

        {/* button container */}
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
            Candidate Profile
          </button>
          <button
            className="candidate-btn w-72 flex items-center justify-between"
            onClick={() => setStep((prevStep) => prevStep + 1)}
          >
            Eligibility
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
      {/* next step button */}
    </>
  );
};

export default Initial;
