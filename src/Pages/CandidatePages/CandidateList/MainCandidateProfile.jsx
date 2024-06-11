import React from "react";
import CandidateProfileTabs from "./CandidateProfileTabs";
import { useParams } from "react-router-dom";

const MainCandidateProfile = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div className="grid grid-cols-12 gap-10 max-w-7xl pt-10 pb-10 px-6 mx-auto">
      {/* card start */}
      <div className="md:col-span-3 flex items-start col-span-12">
        <div className="div w-[17em] bg-white  rounded-[1em] overflow-hidden relative group p-4 z-0 border-[#2176ff] border-2 ">
          <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[3.5em] rounded-full bg-[#2176ff] group-hover:scale-[1270%] duration-500 z-[-1] op " />

          <div className="flex justify-between">
            <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
              Lovedip Singh
            </h1>
            {/* drop down menu */}
            <div>
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900  rounded-lg  "
                type="button"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 4 15"
                >
                  <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </button>
              <div
                id="dropdownDots"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs font-semibold group-hover:text-white mb-6">
            Last Updated:Apr 19, 2024 11:31 AM
          </p>

          {/* details */}
          <div className="mb-4">
            <p className="text-sm font-semibold group-hover:text-white mb-1">
              Email: subwaysingh1@gmail.com
            </p>
            <p className="text-sm font-semibold group-hover:text-white mb-1">
              Phone: 317-777-5577
            </p>
            <p className="text-sm font-semibold group-hover:text-white mb-1">
              Zorakle Value:
            </p>
            <p className="text-sm font-semibold group-hover:text-white mb-1">
              Stage of Growth:
            </p>
            <p className="text-sm font-semibold group-hover:text-white mb-1">
              Max Investment: $200,000 - $499,999
            </p>
          </div>
          {/* icons */}
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

          {/* button */}
          <div className="flex  align-middle">
            <button className="p-1 px-4 w-full font-semibold border-2 border-[#2176ff] group-hover:bg-white rounded-md mr-2 mb-3 mt-3">
              View Contact
            </button>
          </div>

          <div className="align-middle justify-center mt-1">
            <input
              type="checkbox"
              id="auto-sync"
              defaultValue="true"
              className="text-sm"
            />
            <label htmlFor="auto-sync">
              <span className="text-black text-sm font-semibold group-hover:text-white">
                {" "}
                Auto Sync{" "}
              </span>
            </label>
            <p className="text-xs font-semibold ml-7 group-hover:text-white">
              Jun 7th, 2024 1:57 pm
            </p>
          </div>
        </div>
      </div>
      {/* card end */}

      <div className="grid md:col-span-9 col-span-12  ">
        {/* top section start */}
        <div className=" grid grid-cols-2 flex-col md:flex-row">
          <div id="Container-1" className="flex w-full">
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
                    className="text-sm mb-2 text-medium-gold font-serif ml-2 mb-0"
                    htmlFor="archived"
                  >
                    Archived Candidates
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div id="container-2" className="w-full">
            <h1 className="font-semibold text-base"> CoBrokers</h1>
            <div className="mr-3">
              <p className="text-slate-500 text-sm font-semibold mb-2">
                Brokers
              </p>
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
        </div>
        <CandidateProfileTabs />
      </div>
    </div>
  );
};

export default MainCandidateProfile;
