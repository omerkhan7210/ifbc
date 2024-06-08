import axios from "axios";
import React, { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MyCandContext } from "src/Context/CandidatesDataContext";

const MainCandList = () => {
  const { cands, loading } = useContext(MyCandContext);
  console.log(cands);
  const objects = [
    {
      name: "umer",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer22",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer22",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer22",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
    {
      name: "umer22",
      phone: "317-777-5577",
      email: "subwaysingh1@gmail.com",
      heading: "Initial Call Attempt",
    },
  ];
  // useEffect(() => {
  //   axios
  //     .get("http://siddiqiventures-001-site4.ktempurl.com/GetAllProduct")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data:", error);
  //     });
  // }, []);

  return (
    // page banner
    <>
      <div
        id="top-text"
        className=" relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 min-h-[400px] before:z-10"
        style={{
          background: "url(/images/banners/candidatelist1.jpeg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-7xl text-white font-bold text-center z-20">
          Candidate List
        </h1>
      </div>
      <div className="flex flex-col gap-10 max-w-7xl pt-10 px-5 mx-auto my-10">
        <div id="cand-list-top" className="md:grid md:grid-cols-3 gap-5 ">
          <div className="  flex items-center ">
            <NavLink
              to="/new-candidate"
              className="candidate-btn w-full text-center"
            >
              New Candidate
            </NavLink>
          </div>
          <div className="flex items-center ">
            <SearchingInput />
          </div>
          <div className=" md:flex items-center ">
            <input type="date" className="candidate-input w-full" />
          </div>
        </div>
        <div id="cand-list-filters" className="hidden md:block ">
          <div className=" grid grid-cols-4">
            <div className="mr-3">
              <p className="text-slate-500 text-sm font-semibold mb-2">
                Deal Stage
              </p>
              <select id="countries" className="candidate-select">
                <option selected>Select Stage</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mr-3">
              <p className="text-slate-500 text-sm font-semibold mb-2">
                CoBroker or Agent
              </p>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-3"
              >
                <option selected>Select Stage</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mr-3">
              <p className="text-slate-500 text-sm font-semibold mb-2">
                Candidate Lead Source
              </p>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 font-bold text-[#2176ff] text-sm rounded-sm focus:font-semibold focus:text-black block w-full p-2 mb-3"
              >
                <option selected>Select Stage</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-2">
                Candidate Lead Source
              </p>
              <div className="flex items-center ">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-slate-500 "
                >
                  View Archived Candidates
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <button className="candidate-btn w-full"> EXPORT</button>
            <button className="candidate-btn w-full">IMPORT</button>
          </div>
        </div>

        <GridFormatData />
      </div>
    </>
  );
};

const TableFormatData = () => {
  return (
    <div id="cand-table-format" className="hidden sm:block mt-2 ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black ">
          <thead className="text-md text-center text-white uppercase bg-[#2176ff]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Info
              </th>
              <th scope="col" className="px-6 py-3">
                Deal Stage
              </th>
              <th scope="col" className="px-6 py-3">
                Worked On
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b text-center ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lg text-gray-900 whitespace-nowrap"
              >
                Lovedip Singh"
              </th>
              <td className="px-6 py-4 text-base">
                317-777-5577 <br />
                subwaysingh1@gmail.com
              </td>
              <td className="px-6 py-4 text-base">Initial Call Attempt</td>
              <td className="px-6 py-4 text-base">Apr 19, 2024 11:31 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GridFormatData = () => {
  return (
    <div
      id="container"
      className="divide-x-4 flex max-w-[100%] mx-auto overflow-x-scroll sm:hidden "
    >
      {objects.map((object) => (
        <Column
          name={object.name}
          phone={object.phone}
          email={object.email}
          heading={object.heading}
        />
      ))}
    </div>
  );
};

const Column = ({ name, phone, email, heading }) => {
  return (
    <div className=" w-1/4 ">
      <div className=" rounded-md ">
        <h1 className="text-white p-3 text-center bg-[#2176ff]">{heading}</h1>
      </div>
      <Card name={name} phone={phone} email={email} />
    </div>
  );
};
const Card = ({ name, phone, email }) => {
  return (
    <div className="p-4 mt-4">
      <div className="profile-card p-3 rounded-md border-2 border-[#2176ff] border-solid shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div className="headings">
          <p className="text-2xl text-center font-semibold text-[#434955]">
            {name}
          </p>
        </div>
        <div className="w-full items-center justify-center flex">
          <ul className="flex flex-col items-center gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
            <li>
              <svg
                id="phone"
                viewBox="0 0 24 24"
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height={15}
                width={15}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
              </svg>
              <p className="text-sm">
                <a href={`tel:${phone}`}> {phone}</a>
              </p>
            </li>
            <li>
              <svg
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height={15}
                width={15}
                id="mail"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                  fill="#231f20"
                />
                <path
                  d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                  fill="#231f20"
                />
              </svg>
              <p className="text-sm">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </li>
          </ul>
        </div>
        {/* <hr className="w-full group-hover:h-5 h-3 bg-[#2176ff] group-hover:transition-all group-hover:duration-300 transition-all duration-300 " /> */}
      </div>
    </div>
  );
};

const SearchingInput = () => {
  const ref = useRef();

  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearchInputChange = () => {};

  return (
    <div className="relative w-full">
      <input
        type="search"
        id="search-field"
        placeholder="Search Any Candidate"
        value={searchKeyword}
        ref={ref}
        onChange={handleSearchInputChange}
        className="block w-full p-3 text-sm text-black pr-10 outline-none bg-gray-200"
      />

      <button
        className=" absolute right-2.5 top-4 w-4 h-4"
        onClick={handleSearchInputChange}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 487.95 487.95"
        >
          <path d="m481.8 453-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"></path>
        </svg>
      </button>
    </div>
  );
};

export default MainCandList;
