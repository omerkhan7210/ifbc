import React, { useState } from "react";
import Form from "../NewCandidate/Form";

const CandidateProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="md:flex mt-6">
      {/* Tabs list  */}
      <TabsList activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Fist tab description */}
      <Profile activeTab={activeTab} />
      <Activity activeTab={activeTab} />
      <Flscriteria activeTab={activeTab} />
      <Resources activeTab={activeTab} />
      <Registerations activeTab={activeTab} />
    </div>
  );
};

const TabsList = ({ activeTab, setActiveTab }) => {
  const tabItems = [
    { text: "PROFILE" },
    { text: "ACTIVITY" },
    { text: "FLS-CRITERIA" },
    { text: "RESOURCES" },
    { text: "REGISTERATIONS" },
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

const Profile = ({ activeTab }) => {
  return (
    <div
      id="profile"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "profile" ? "" : "hidden"
      }`}
    >
      <Form />
    </div>
  );
};

const Activity = ({ activeTab }) => {
  return (
    <div
      id="activity"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "activity" ? "" : "hidden"
      }`}
    >
      <div className="flex w-full">
        <div className="mr-3 w-full">
          <select
            id="countries"
            className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
          >
            <option selected>Select Stage</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mr-3 w-full">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
          >
            <option selected>Select Stage</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="activity-search"
            id="activity-search"
            placeholder="Search Activity"
            className="p-[6px] mb-2 bg-gray-50 border-gray-300 border rounded-sm placeholder-[#2176ff] placeholder:text-sm placeholder:font-bold text-black"
          />
        </div>
      </div>
      <div id="container2" className="mt-4">
        <div className="flex border-2 border-gray-300  rounded-md">
          <div className=" border-r-2 border-gray-300 p-2">
            <h1 className="text-[#2176ff] text-sm font-bold ">
              Formal Registration
            </h1>
            <p className="text-xs font-medium">Apr 19, 2024 at 11:31AM</p>
          </div>
          <div className="text-black align-middle justify-center flex p-2">
            <p className="aligm-middle justify-center py-2 font-normal text-base">
              Sent a Formal Registration to Teriyaki Madness for AVON IN 46123
            </p>
          </div>
        </div>
        <div className="flex border-2 border-gray-300  rounded-md mt-3">
          <div className=" border-r-2 border-gray-300 p-2">
            <h1 className="text-[#2176ff] text-sm font-bold ">
              Updated Profile
            </h1>
            <p className="text-xs font-medium">Apr 19, 2024 at 11:31AM</p>
          </div>
          <div className="text-black align-middle justify-center flex p-2">
            <p className="aligm-middle justify-center py-2 font-normal text-base">
              The client was updated by Harjeet Tiwana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Flscriteria = ({ activeTab }) => {
  return (
    <div
      id="fls-criteria"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "fls-criteria" ? "" : "hidden"
      }`}
    >
      <div
        id="container1"
        className="flex justify-between border-b border-gray-300 pb-4"
      >
        <div>
          <h2 className="text-black font-semibold text-base">
            Section Settings
          </h2>
        </div>
        <div>
          <label className='class="flex gap-x-1 items-center mr-6 '>
            <input type="checkbox" name="Hide Section" />
            <span className="text-black">Hide Section</span>
          </label>
          <label className='class="flex gap-x-1 items-center'>
            <input type="checkbox" name="Hide Section" />
            <span className="text-black">Hide Section</span>
          </label>
        </div>
      </div>

      <div id="container2" className="py-4 mb-2">
        <h1 className="text-lg text-[#2176ff] font-bold mb-2">
          Franchise Categories
        </h1>
        <p className="text-sm text-black font-semibold">
          Rank the Franchise Categories in order of preference, with 1 being the
          least favorite and 10 being the most favorite.
        </p>
      </div>

      <div id="container3" className="border-b border-gray-300 py-2">
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Advertising</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Automotive</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Beauty & Spa</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">
                  Business Management & Coaching
                </span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Business Services</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">
                  Child Education, STEM & Tutoring
                </span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Child Services & Products</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">
                  Cleaning: Residential & Commercial
                </span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Computer Technology</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">
                  Select a rating Distribution Services
                </span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Dry Cleaning-Laundry</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Financial Services</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="inner1" className="flex w-full">
          <div className="w-full mr-4">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">Fitness</span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" mt-2">
              <label className='class="flex gap-x-1 items-center mr-6 '>
                <input type="checkbox" name="Hide Section" />
                <span className="text-black">
                  Food & Beverage: Restaurant/QSR/Catering
                </span>
              </label>
            </div>
            <div className="mt-2">
              <div className="mr-4 w-full">
                <select
                  id="countries"
                  className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-2"
                >
                  <option selected>Select a rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="container4" className="my-4">
        <h1 className="text-lg text-[#2176ff] font-bold">FLS Filters</h1>
        {/* Yahn Tabs Ayainge Fls filtes ke */}
      </div>
    </div>
  );
};

const Resources = ({ activeTab }) => {
  return (
    <div
      id="resources"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "resources" ? "" : "hidden"
      }`}
    >
      <h1 className="text-lg font-bold text-[#2176ff]">
        No resources available
      </h1>
    </div>
  );
};

const Registerations = ({ activeTab }) => {
  return (
    <div
      id="registerations"
      className={`candidate-tabs-content ${
        activeTab.toLowerCase() === "registerations" ? "" : "hidden"
      }`}
    >
      {/* container 1 */}
      <div id="container1" className="flex">
        {/* first 2 inputs */}
        <div className="flex w-full">
          {/* input 1 */}
          <div className="mr-3 w-full">
            <select
              id="countries"
              className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-md focus:font-semibold focus:text-black block w-full p-2 mb-2"
            >
              <option selected>Select Stage</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          {/* input 2 */}
          <div className="mr-3 w-full">
            <select
              id="countries"
              className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-md focus:font-semibold focus:text-black block w-full p-2 mb-2"
            >
              <option selected>Select Stage</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>

        {/* second 2 inputs */}
        <div className="flex w-full">
          {/* input 1 */}
          <div className="mr-3 w-full">
            <select
              id="countries"
              className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-md focus:font-semibold focus:text-black block w-full p-2 mb-2"
            >
              <option selected>Select Stage</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          {/* input 2 */}
          <div className="mr-3 w-full">
            <div className="date-range">
              <div className="dp__main dp__theme_light">
                <div
                  aria-label="Datepicker input"
                  role="textbox"
                  aria-multiline="false"
                  aria-disabled="false"
                  aria-readonly="false"
                >
                  <div className="dp__input_wrap">
                    <input
                      className="dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg"
                      inputMode="none"
                      placeholder
                      autoComplete="off"
                    />
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      className="dp__icon dp__input_icon dp__input_icons"
                    >
                      <path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" />
                      <path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" />
                      <path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" />
                      <path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container 1 end */}

      {/* container 2 */}
      <div
        id="container2"
        className="grid grid-cols-12 divide-x-2 justify-center align-middle mt-4"
      >
        {/* column 1 */}
        <div className=" col-span-6 p-3 bg-[#2176ff] border-l rounded-l-lg">
          <div className="mr-3 w-full">
            <select
              id="countries"
              className=" bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-md focus:font-semibold focus:text-black block w-full p-2 mb-2"
            >
              <option selected>Select Stage</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        {/* column 2 */}
        <div className="col-span-2 p-4 bg-[#2176ff] align-middle">
          <h1 className="text-white font-bold text-sm">Type</h1>
        </div>
        {/* column3 */}
        <div className="col-span-2 p-4 bg-[#2176ff] align-middle">
          <h1 className="text-white font-bold text-sm">Sent Date</h1>
        </div>
        {/* column 4 */}
        <div className="col-span-2 p-4 bg-[#2176ff] align-middle border-r rounded-r-lg">
          <h1 className="text-white font-bold text-sm">Status</h1>
        </div>
      </div>
      {/* container 3  */}
      <div
        id="container 3"
        className="grid grid-cols-12 divide-x-2 mt-3 rounded-lg"
      >
        <div className="col-span-6 p-1  bg-gray-200 border-l rounded-l-lg align-middle justify-center">
          <label className='class="flex gap-x-1 items-center mr-6 '>
            <input type="checkbox" name="Hide Section" />
            <span className="text-black">Advertising</span>
          </label>
        </div>
        <div className="col-span-2 p-1 bg-gray-200">
          <p className="text-black font-bold text-sm">Formal Registeration</p>
        </div>
        <div className="col-span-2 p-1 bg-gray-200">
          <p className="text-black font-bold text-sm">04/19/2024 11:31 am</p>
        </div>
        <div className="col-span-2 p-1 bg-gray-200 border-r rounded-r-lg">
          <p className="text-black font-bold text-sm">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileTabs;
