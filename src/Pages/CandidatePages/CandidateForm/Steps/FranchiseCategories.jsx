import React, { useState } from "react";
import DialogBox from "src/Popups/DialogBox";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "src/Animations/PageTransition";
const FranchiseCategories = ({
  handleSubmit,
  handleInputChange,
  setStep,
  formFields,
  candDetails,
  candNames,
  show,
  setShow,
}) => {
  const [loading, setLoading] = useState(false);
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
  const handleFranchiseCategories = (e) => {
    e.preventDefault();

    setShow(true);

    setTimeout(() => {
      setShow(false);
      window.location.href = "/";
    }, 2000);
  };
  return (
    <>
      <DialogBox show={show} setShow={setShow}>
        <div className="bg-white p-10">
          <p className="text-xl text-center text-custom-heading-color">
            Thank you for taking the time to contact us.
            <br />A IFBC customer service representative will contact you within
            two business days. <br /> For the mean time you can indulge yourself
            in searching some franchises <br />
            <br />
            <NavLink to="/search-franchises" className="candidate-btn w-[50%]">
              SEARCH FRANCHISES
            </NavLink>
          </p>
        </div>
      </DialogBox>
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
            Franchise Categories
          </h1>

          <div id="container2" className="py-4 mb-2">
            <h1 className="text-lg text-[#2176ff] font-bold mb-2">
              Franchise Categories
            </h1>
            <p className="text-sm text-black font-semibold">
              Rank the Franchise Categories in order of preference, with 1 being
              the least favorite and 10 being the most favorite.
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
              className="flex md:justify-end mt-5 max-md:flex-col max-md:gap-5 md:mr-3"
            >
              <button
                className="candidate-btn  w-40  flex items-center justify-between"
                onClick={handleFranchiseCategories}
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
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
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
          className="candidate-select w-full"
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
