import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import { useEffect } from "react";
import { useState } from "react";
import PageTransition from "src/Animations/PageTransition";
import DialogBox from "src/Popups/DialogBox";
import Form from "../NewCandidate/Form";

const MainCandidateProfile = () => {
  const { id } = useParams();
  const { cands } = useContext(MyCandContext);
  const [candDetails, setCandDetails] = useState();

  useEffect(() => {
    if (cands && cands.length > 0) {
      const filteredArray = cands.filter((cand) => cand.DocId == id);
      const filtered = filteredArray.length > 0 ? filteredArray[0] : null;
      setCandDetails(filtered || null);
    }
  }, [cands]);

  return (
    <PageTransition>
      <div className="grid grid-cols-12 gap-10 max-w-7xl pt-10 pb-10 px-6 mx-auto">
        {/* card end */}
        <LeftSideCardContainer candDetails={candDetails} />
        <RightSideDetailsContainer candDetails={candDetails} />
      </div>
    </PageTransition>
  );
};

const LeftSideCardContainer = ({ candDetails }) => {
  const [activityOn, setActivityOn] = useState(false);
  const [flsOn, setFlsOn] = useState(false);
  const [resourcesOn, setResourcesOn] = useState(false);
  const [regOn, setRegOn] = useState(false);

  const profileButtons = [
    {
      text: "Activity",
      setShow: setActivityOn,
    },
    {
      text: "FLS Criteria",
      setShow: setFlsOn,
    },
    {
      text: "Resources",
      setShow: setResourcesOn,
    },
    {
      text: "Registrations",
      setShow: setRegOn,
    },
  ];
  const handleEdit = async () => {};

  return (
    candDetails && (
      <div className="md:col-span-3 flex flex-col gap-5 items-start col-span-12">
        <div>
          <h1 className="font-semibold text-base"> Candidate Stage</h1>
          <div className="mr-3">
            <p className="text-slate-500 text-sm font-semibold mb-2">
              Deal Stage
            </p>
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
            <p className="text-sm mb-1 font-medium">
              To update the deal stage please update the contact's deal in
              HubSpot.
            </p>
            <div className=" flex items-center w-[100%]">
              <input type="checkbox" id="archived" defaultValue={1} />
              <label
                className="text-sm text-medium-gold font-serif ml-2 mb-0"
                htmlFor="archived"
              >
                Archived Candidates
              </label>
            </div>
          </div>
        </div>

        <div id="container-2" className="w-full">
          <h1 className="font-semibold text-base"> CoBrokers</h1>
          <div className="mr-3">
            <p className="text-slate-500 text-sm font-semibold mb-2">Brokers</p>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm   block w-full p-2 pr-3 mb-3"
            >
              <option selected>Select Stage</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>

        <div className="div w-[17em] bg-white  rounded-[1em] overflow-hidden relative group p-4 z-0 border-[#2176ff] border-2 ">
          <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[3.5em] rounded-full bg-[#2176ff] group-hover:scale-[1270%] duration-500 z-[-1] op " />

          {/* icons */}
          <ExtraButtonIcons />
          {/* button */}
          <div className="flex  align-middle">
            <button className="p-1 px-4 w-full font-semibold border-2 border-[#2176ff] group-hover:bg-white rounded-md mr-2 mb-3 mt-3">
              View Contact
            </button>
          </div>
        </div>

        {/* buttons */}
        {profileButtons.map((btn) => (
          <button
            className="candidate-btn w-full"
            onClick={() => btn.setShow(true)}
          >
            {btn.text}
          </button>
        ))}
        <DialogBox setShow={setActivityOn} show={activityOn}>
          <Activity setShow={setActivityOn} />
        </DialogBox>

        <DialogBox setShow={setFlsOn} show={flsOn}>
          <Flscriteria setShow={setFlsOn} />
        </DialogBox>

        <DialogBox setShow={setResourcesOn} show={resourcesOn}>
          <Resources setShow={setResourcesOn} />
        </DialogBox>

        <DialogBox setShow={setRegOn} show={regOn}>
          <Registerations setShow={setRegOn} />
        </DialogBox>

        <button className="candidate-btn w-full" onClick={handleEdit}>
          {/* {loading ? "Loading..." : "SAVE CANDIDATE INFORMATION"} */}
          Save
        </button>
      </div>
    )
  );
};

const Activity = ({ setShow }) => {
  return (
    <div id="activity" className="candidate-tabs-content">
      <button
        className="absolute top-5 right-10"
        onClick={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <div className="flex w-full mt-5">
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
const Flscriteria = ({ setShow }) => {
  return (
    <div id="fls-criteria" className="candidate-tabs-content p-5">
      <button
        className="absolute top-5 right-10"
        onClick={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
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

const Resources = ({ setShow }) => {
  return (
    <div id="resources" className="candidate-tabs-content p-5">
      <button
        className="absolute top-5 right-10"
        onClick={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <h1 className="text-lg font-bold text-[#2176ff]">
        No resources available
      </h1>
    </div>
  );
};

const Registerations = ({ setShow }) => {
  return (
    <div id="registerations" className="candidate-tabs-content p-5">
      <button
        className="absolute top-5 right-10"
        onClick={() => setShow(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
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

const RightSideDetailsContainer = ({ candDetails }) => {
  return (
    <div className="grid md:col-span-9 col-span-12  ">
      <Form candDetails={candDetails} />
    </div>
  );
};

const ExtraButtonIcons = () => {
  return (
    <div className="flex mt-3 mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 p-[6px] text-white rounded-2xl bg-[#2176ff] group-hover:bg-white group-hover:text-black mr-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 p-[6px] rounded-2xl text-white bg-[#2176ff] group-hover:bg-white group-hover:text-black mr-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 p-[6px] rounded-2xl text-white bg-[#2176ff] group-hover:bg-white group-hover:text-black mr-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 p-[6px] rounded-2xl text-white bg-[#2176ff] group-hover:bg-white group-hover:text-black mr-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 p-[6px] rounded-2xl text-white bg-[#2176ff] group-hover:bg-white group-hover:text-black "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    </div>
  );
};

export default MainCandidateProfile;
