import React from "react";
import handleInputChange from "src/Utils/handleInputChange";

const FranchiseCategories = ({
  handleSubmit,
  handleInputChange,
  setStep,
  formFields,
  candDetails,
  candNames,
}) => {
  const selectData = [
    { name: "advertising", label: "Advertising" },
    { name: "automotive", label: "Automotive" },
    { name: "beautyspa", label: "Beauty & Spa" },
    { name: "businessmanagement", label: "Business Management & Coaching" },
    { name: "businessservices", label: "Business Services" },
    { name: "childeducation", label: "Child Education, STEM & Tutoring" },
    { name: "childservices", label: "Child Services & Products" },
    {
      name: "cleaningresidential",
      label: "Cleaning: Residential & Commercial",
    },
    { name: "computertechnology", label: "Computer Technology" },
    {
      name: "ratingdistribution",
      label: "Select a rating Distribution Services",
    },
    { name: "drycleaning", label: "Dry Cleaning-Laundry" },
    { name: "financialservices", label: "Financial Services" },
    { name: "fitness", label: "Fitness" },
    { name: "foodbeverage", label: "Food & Beverage: Restaurant/QSR/Catering" },
    { name: "foodcoffee", label: "Food: Coffee/Tea/Smoothies/Sweets" },
    { name: "foodstores", label: "Food: Stores & Catering" },
    { name: "healthmedical", label: "Health/Medical" },
    { name: "healthwellness", label: "Health/Wellness" },
    { name: "homeimprovement", label: "Home Improvement" },
    { name: "design", label: "Interior/Exterior Design" },
    { name: "maintenance", label: "Maintenance & Repair" },
    { name: "moving", label: "Moving, Storage & Junk Removal" },
    { name: "painting", label: "Painting" },
    { name: "pestcontrol", label: "Pest Control" },
    { name: "petcare", label: "Pet Care & Grooming" },
    { name: "print", label: "Print, Copy & Mailing" },
    { name: "realstate", label: "Real Estate" },
    { name: "restoration", label: "Restoration" },
    { name: "retail", label: "Retail" },
    { name: "security", label: "Security" },
    { name: "seniorcare", label: "Senior Care: Medical/Non-Medical" },

    { name: "signs", label: "Signs" },
    { name: "eventplanning", label: "Special Event Planning" },
    { name: "sportsrecreation", label: "Sports & Recreation" },
    { name: "staffing", label: "Staffing" },
    { name: "travelplanning", label: "Travel Planning" },
    { name: "vending", label: "Vending" },
  ];

  return (
    <div id="fls-criteria" className="md:max-w-3xl md:mx-auto max-md:mx-5">
      <h1 className="candidate-sub-heading ">Franchise Categories</h1>

      <div id="container2" className="py-4 mb-2">
        <h1 className="text-lg text-[#2176ff] font-bold mb-2">
          Franchise Categories
        </h1>
        <p className="text-sm text-black font-semibold">
          Rank the Franchise Categories in order of preference, with 1 being the
          least favorite and 10 being the most favorite.
        </p>
      </div>

      <div
        id="container3"
        className="border-b border-gray-300  grid grid-cols-2 gap-x-10"
      >
        {selectData.map((item, index) => (
          <div key={index} className="w-full mr-4">
            <div className="mt-2">
              <label className="flex gap-x-1 items-center mr-6 text-sm">
                <span className="text-black">{item.label}</span>
              </label>
            </div>
            <Select
              name={item.name}
              handleInputChange={handleInputChange}
              candNames={candNames}
              formFields={formFields}
              candDetails={candDetails}
            />
          </div>
        ))}
        {/* <h1 className="text-lg text-[#2176ff] font-bold">FLS Filters</h1> */}
        {/* Yahn Tabs Ayainge Fls filtes ke */}
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
          Previous
        </button>
        <button
          className="candidate-btn w-72 flex items-center justify-between"
          onClick={handleSubmit}
        >
          Submit
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
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Select = ({ name, handleInputChange, candNames, formFields }) => {
  const franchiseRating = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="mt-2">
      <div className="mr-4 w-full">
        <select
          onChange={handleInputChange}
          id={name}
          name={name}
          className=" candidate-select w-full"
        >
          <option selected>Select a rating</option>
          {franchiseRating.map((option, index) => {
            console.log(formFields && formFields[name]);
            return (
              <option
                key={index}
                value={option}
                {...(candNames
                  ? candNames.length > 0
                    ? {
                        selected:
                          selectedDetails &&
                          selectedDetails[name] &&
                          selectedDetails[name] === option,
                      }
                    : {
                        selected:
                          candDetails &&
                          candDetails[name] &&
                          candDetails[name] === option,
                      }
                  : {
                      selected:
                        formFields &&
                        formFields[name] &&
                        formFields[name] === option,
                    })}
              >
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FranchiseCategories;
