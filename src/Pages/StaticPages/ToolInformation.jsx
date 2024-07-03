import React from "react";
import { useState } from "react";
import DialogBox from "src/Popups/DialogBox";
import { twMerge } from "tailwind-merge";

const ToolInformation = ({ handleChange }) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  return (
    <DialogBox show={show} setShow={setShow}>
      <div className="bg-white p-10 flex flex-col gap-8">
        <div className="flex justify-between">
          <p className="text-2xl text-center font-bold text-custom-heading-color">
            Candidate Info Sheet Fields
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex">
          <label className="icon-text mt-2" htmlFor="consulting">
            Consulting Specialties
          </label>
          <select
            name="consulting"
            className="candidate-input w-full"
            id="consulting"
            defaultValue={userDetails?.consulting}
            onChange={handleInputChange}
          >
            <option value="CB">Co-Breaking</option>
            <option value="EB">Emerging Brands</option>
            <option value="IF">International Franchises</option>
            <option value="FS">Financial Services & Analysis</option>
            ...
            <option value="FD">Franchise Development</option>
            <option value="IT">Information Technology</option>
            <option value="LC">Low Cost Franchises</option>
            <option value="MS">Management Skills</option>
            ...
            <option value="MA">Masters / Area Development</option>
            <option value="NS">Negotiation Skills</option>
            <option value="PF">Passive Franchises</option>
            <option value="PI">Process Improvemnet</option>
            ...
            <option value="PM">Project Management</option>
            ...
          </select>
        </div>
        <div className="">
          <button className="border-2 border-custom-heading-color bg-custom-heading-color  text-white px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold">
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </DialogBox>
  );
};

export default ToolInformation;
