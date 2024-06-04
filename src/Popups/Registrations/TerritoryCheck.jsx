import React, { useContext, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import ListingsColumns from "src/Pages/ListingsPage/ListingsColumns";
import DialogBox from "../DialogBox";

const TerritoryCheck = () => {
  const { activeListings, tCheck, setTCheck, listings } = useContext(MyContext);
  const [active, setActive] = useState("candidate");
  return (
    <DialogBox>
      <div
        id="territoryModal"
        className="bg-white overflow-y-scroll h-[500px] rounded-lg shadow-md p-[30px]"
      >
        <h2 className="text-green-600 font-bold text-3xl mt-0 text-center">
          Territory Check
        </h2>

        <div id="fr-tcheck-popup" class="mt-10">
          <h2 className="candidate-sub-heading">Candidates Name*</h2>
          <div class="flex justify-between w-full">
            <div className="flex flex-col mr-5 w-[50%]">
              <p className="candidate-paragraph">First Name</p>
              <select
                id="firstname"
                name="firstname"
                className="candidate-select"
              ></select>
            </div>
            <div className="flex flex-col w-[50%]">
              <p className="candidate-paragraph">Last Name*</p>
              <input
                name="lastname"
                type="text"
                className="candidate-input"
                required
              />
            </div>
          </div>
        </div>

        <div id="sr-tcheck-popup" class="mt-10">
          <h2 className="candidate-sub-heading">Territory*</h2>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <p className="candidate-paragraph">City</p>
              <input
                name="City"
                type="text"
                className="candidate-input"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="candidate-paragraph">State/Province/Region</p>
              <select
                id="region"
                name="State/Province/Region"
                className="candidate-select"
              ></select>
            </div>
            <div className="flex flex-col w-full">
              <p className="candidate-paragraph">ZIP/Postal Code</p>
              <input
                name="ZIP/Postal Code"
                type="text"
                className="candidate-input"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor="message"
            className="text-gray-500 font-bold first-letter:text-xl"
          >
            Territory Note / Email Contents
          </label>
          <textarea
            id="message"
            rows={6}
            className="candidate-input"
            defaultValue={""}
          />
        </div>
        <div>
          <button className="candidate-buttons mt-6">
            ADD ADDITIONAL TERRITORY
          </button>
        </div>
        <label className="flex items-center gap-2 mt-6">
          <input type="checkbox" className="accent-green-600" />
          <text className="text-gray-500 font-bold first-letter:text-1xl">
            Include candidate name in Territory Request
          </text>
        </label>
        <div className="flex flex-row justify-center mt-6">
          <button className="candidate-btn">SAVE</button>
        </div>
      </div>
    </DialogBox>
  );
};

export default TerritoryCheck;
