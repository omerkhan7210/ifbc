import axios from "axios";
import { useEffect, useState } from "react";

const AddTerritoryDiv = ({
  territory,
  index,
  handleInputChange,
  formErrors,
  stateDD,
  selectedStateT,
  candNames,
  candDetails,
  setAddTerritory,
}) => {
  return (
    <div
      key={index}
      id={`additional-contact-row-${index}`}
      className="p-5 border-2 border-custom-heading-color shadow-lg"
    >
      <h1 className="candidate-sub-heading">Additional Territory</h1>
      <div
        id="first-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">State / Province*</p>

          {/* state dd */}
          {stateDD("territory")}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">City*</p>
          {selectedStateT && citiesT.length > 0 ? (
            <select
              className="candidate-select"
              name="territorycity"
              onChange={handleInputChange}
            >
              {!formFields.territorycity && (
                <option value="">Select City</option>
              )}
              {citiesT.map((city, index) => (
                <option
                  key={index}
                  value={city}
                  {...(candNames && candNames.length > 0
                    ? { selected: selectedDetails?.territoryCity }
                    : { selected: candDetails?.territoryCity })}
                >
                  {city}
                </option>
              ))}
            </select>
          ) : (
            <input
              onChange={handleInputChange}
              type="text"
              name="territorycity"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.territorycity ? "red" : undefined,
              }}
              required
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.territoryCity }
                : { defaultValue: candDetails?.territoryCity })}
            />
          )}
        </div>

        <div className="candidate-sub-childs">
          <p className="candidate-label">Zip / Postal Code*</p>
          <input
            type="number"
            name="territoryzipcode"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.territoryzipcode ? "red" : undefined,
            }}
            onChange={handleInputChange}
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.territoryZipcode }
              : { defaultValue: candDetails?.territoryZipcode })}
          />
        </div>
      </div>
      <div id="second-sub-row" className="gap-[15px] sm:flex-row sm:gap-[35px]">
        <div id="fourth-sub-row" className="candidate-sub-childs">
          <p className="candidate-label">Territory Notes</p>
          <textarea
            onChange={handleInputChange}
            name="territoryNotes"
            rows={10}
            className="candidate-input"
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.territoryNotes }
              : { defaultValue: candDetails?.territoryNotes })}
          ></textarea>
        </div>
      </div>

      <div id="button-container" className="w-full flex justify-center gap-5">
        <button
          className="candidate-btn"
          onClick={() => setAddTerritory((prevContacts) => prevContacts - 1)}
        >
          REMOVE TERRITORY
        </button>

        <button
          className="candidate-secondary-btn"
          // onClick={() => setAddTerritory((prevContacts) => prevContacts - 1)}
        >
          MAKE PRIMARY TERRITORY
        </button>
      </div>
    </div>
  );
};
const FormSecondRow = ({
  handleInputChange,
  stateDD,
  formErrors,
  candDetails,
  candNames,
  selectedDetails,
  selectedStateT,
  formFields,
  citiesT,
  addTerritory,
  setAddTerritory,
  territorys,
  citiesC,
  listingNames,
}) => {
  // hum blkl parent component may se lekr arhe taakay baar baar calling na ho api ki kunke parent component hamara ek hi dafa render hona hai bas to first time pr jab page load hoga tab hi srf api call hogy phr nhi hogy back ya aagay jaane pr
  // ab nhi hui dekha? loading wagera kch nhi aya han dekha agr koi cheez baar baar re render hori to usse parent component ya kisi context may rakhkr use krskte taakay ek hi cheez baar baar call na ho
  // in fields may bhi conditions lagengy saari jese baaki may lagi wi hain ye to required nahi hena?
  // req nhi lekn diukhni to chayein na jab koi dalega to gayab thori honi chayei sahi he han
  const [selectedFranchises, setSelectedFranchises] = useState(0);

  const handleFranchiseSelect = (e) => {
    const selecteddocId = e.target.value;
    handleInputChange(e);
    // setSelectedFranchises((previousId) => [...previousId, selecteddocId]);
    setSelectedFranchises(selecteddocId);
  };

  return (
    <div id="second-row" className="py-5">
      <h1 className="candidate-sub-heading">
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
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
        Requested Territory
      </h1>

      <div
        id="third-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">
            {" "}
            What franchises are you interested in?*
          </p>
          {listingNames?.length > 0 ? (
            <select
              name="franchiseinterested"
              className="candidate-select w-full"
              style={{
                borderColor: formErrors.franchiseinterested ? "red" : undefined,
              }}
              onChange={handleFranchiseSelect}
            >
              {listingNames
                // .filter((data) => {
                //   const selectFranchise = selectedFranchises.includes(
                //     data.docId.toString()
                //   );
                //   return !selectFranchise;
                // })

                .map((item) => (
                  <option
                    value={item.docId}
                    selected={formFields?.franchiseinterested == item.docId}
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        <div className="candidate-sub-childs">
          <p className="candidate-label">
            {" "}
            Requested Territory Zip / Postal Code*
          </p>
          <input
            type="number"
            name="territoryzipcode"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.territoryzipcode ? "red" : undefined,
            }}
            onChange={handleInputChange}
            {...(candNames
              ? candNames.length > 0
                ? { value: selectedDetails?.territoryZipcode }
                : { defaultValue: candDetails?.territoryZipcode }
              : { value: formFields?.territoryzipcode })}
          />
          {formErrors?.territoryzipcode === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid zipcode. It should be 5 digits long!
            </p>
          )}
        </div>
      </div>
      <div
        id="third-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">
            {" "}
            Requested Territory State / Province*
          </p>

          {/* state dd */}
          {stateDD("territory")}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label"> Requested Territory City*</p>
          {selectedStateT && citiesT.length > 0 ? (
            <select
              className="candidate-select"
              name="territorycity"
              onChange={handleInputChange}
              style={{
                borderColor: formErrors.territorycity ? "red" : undefined,
              }}
            >
              {!formFields.territorycity && (
                <option value="">Select City</option>
              )}
              {citiesT.map((city, index) => (
                <option
                  key={index}
                  value={city}
                  {...(candNames && candNames.length > 0
                    ? { selected: selectedDetails?.territoryCity }
                    : { selected: candDetails?.territoryCity })}
                >
                  {city}
                </option>
              ))}
            </select>
          ) : (
            <input
              onChange={handleInputChange}
              type="text"
              name="territorycity"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.territorycity ? "red" : undefined,
              }}
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.territoryCity }
                  : { defaultValue: candDetails?.territoryCity }
                : { value: formFields?.territorycity })}
            />
          )}
        </div>
      </div>

      <div
        id="third-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px]"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label"> Current State / Province*</p>

          {/* state dd */}
          {stateDD("current")}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label"> Current City*</p>
          {selectedStateT && citiesT.length > 0 ? (
            <select
              className="candidate-select"
              name="currentcity"
              onChange={handleInputChange}
              style={{
                borderColor: formErrors.currentcity ? "red" : undefined,
              }}
            >
              {!formFields.currentcity && <option value="">Select City</option>}
              {citiesC.map((city, index) => (
                <option
                  key={index}
                  value={city}
                  {...(candNames && candNames.length > 0
                    ? { selected: selectedDetails?.currentCity }
                    : { selected: candDetails?.currentCity })}
                >
                  {city}
                </option>
              ))}
            </select>
          ) : (
            <input
              onChange={handleInputChange}
              type="text"
              name="currentcity"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.currentcity ? "red" : undefined,
              }}
              required
              {...(candNames
                ? candNames.length > 0
                  ? { value: selectedDetails?.currentCity }
                  : { defaultValue: candDetails?.currentCity }
                : { value: formFields?.currentcity })}
            />
          )}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label"> Current Zip / Postal Code*</p>
          <input
            type="number"
            name="currentzipcode"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.currentzipcode ? "red" : undefined,
            }}
            onChange={handleInputChange}
            {...(candNames
              ? candNames.length > 0
                ? { value: selectedDetails?.currentZipcode }
                : { defaultValue: candDetails?.currentZipcode }
              : { value: formFields?.currentzipcode })}
          />
          {formErrors?.currentzipcode === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid zipcode. It should be 5 digits long!
            </p>
          )}
        </div>
      </div>

      {/* <div id="fourth-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">Territory Notes</p>
        <textarea
          onChange={handleInputChange}
          name="territoryNotes"
          rows={10}
          className="candidate-input"
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.territoryNotes }
            : { defaultValue: candDetails?.territoryNotes })}
        ></textarea>
      </div> */}

      {/* {territorys && territorys.length > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {territorys.map((territory, index) => (
            <AddTerritoryDiv
              territory={territory}
              index={index} 
              handleInputChange={handleInputChange}
              formErrors={formErrors}
              stateDD={stateDD}
              selectedStateT={selectedStateT}
              candNames={candNames}
              candDetails={candDetails}
              setAddTerritory={setAddTerritory}
            />
          ))}
        </div>
      )}
      <div id="button-container" className="w-full flex justify-center">
        <button
          className="candidate-btn"
          onClick={() => setAddTerritory((prevTerritory) => prevTerritory + 1)}
        >
          ADD ADDITIONAL TERRITORY
        </button>
      </div> */}

      {addTerritory > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {Array.from({ length: addTerritory }).map((_, index) => (
            <AddTerritoryDiv
              territory={null}
              index={index}
              handleInputChange={handleInputChange}
              formErrors={formErrors}
              stateDD={stateDD}
              selectedStateT={selectedStateT}
              candNames={candNames}
              candDetails={candDetails}
              setAddTerritory={setAddTerritory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FormSecondRow;
