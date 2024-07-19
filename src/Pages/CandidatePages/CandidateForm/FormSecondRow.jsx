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
}) => {
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

      {territorys && territorys.length > 0 && (
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
      </div>

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
