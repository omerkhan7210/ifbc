import React, { useState } from "react";

const FormThirdRow = ({
  handleInputChange,
  stateDD,
  setFormFields,
  candDetails,
  candNames,
  selectedDetails,
  selectedStateC,
  citiesC,
  formFields,
  formErrors,
}) => {
  const [check, setChecked] = useState(false);

  return (
    <div id="third-row" className="py-5">
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
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        Current Address
      </h1>
      <div id="checkboc-territory" className="w-full flex justify-center mb-5">
        <label className="mt-3 flex items-center candidate-label">
          <input
            name="Same as Territory Requested"
            type="checkbox"
            className="accent-custom-heading-color "
            onClick={() => {
              setFormFields((prev) => ({
                ...prev,
                sameasterritoryrequested: check,
              }));
              setChecked(!check);
            }}
          />
          Same as Territory Requested.
        </label>
      </div>
      {!check && (
        <div
          id="fifth-sub-row"
          className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px] justify-between"
        >
          <div className="candidate-sub-childs">
            <p className="candidate-label">State / Province</p>

            {/* state dd */}
            {stateDD("current")}
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">City</p>
            {selectedStateC && citiesC.length > 0 ? (
              <select
                className="candidate-select"
                name="currentcity"
                onChange={handleInputChange}
              >
                {!formFields.currentcity && (
                  <option value="">Select City</option>
                )}
                {citiesC.map((city) => (
                  <option
                    key={city}
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
                required
                {...(candNames && candNames.length > 0
                  ? { value: selectedDetails?.currentCity }
                  : { defaultValue: candDetails?.currentCity })}
              />
            )}
          </div>
          <div className="candidate-sub-childs">
            <p className="candidate-label">Zip / Postal Code</p>
            <input
              onChange={handleInputChange}
              type="number"
              name="currentzipcode"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.currentzipcode ? "red" : undefined,
              }}
              required
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.currentZipcode }
                : { defaultValue: candDetails?.currentZipcode })}
            />
          </div>
        </div>
      )}

      <div id="seventh-sub-row" className="candidate-sub-childs">
        <p className="candidate-label">About This Candidate / Email Contents</p>
        <textarea
          onChange={handleInputChange}
          name="About"
          rows={10}
          className="candidate-input"
          {...(candNames && candNames.length > 0
            ? { value: selectedDetails?.about }
            : { defaultValue: candDetails?.about })}
        />
      </div>
      <div id="eigth-sub-row" className="flex flex-col md:flex-row gap-2">
        <div className="candidate-sub-childs">
          <p className="candidate-label">Deal Source</p>
          <input
            onChange={handleInputChange}
            type="number"
            name="DealSource"
            className="candidate-input"
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.dealSource }
              : { defaultValue: candDetails?.dealSource })}
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Deal Source Cost</p>
          <input
            onChange={handleInputChange}
            type="number"
            name="DealSourceCost"
            className="candidate-input"
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.dealSourceCost }
              : { defaultValue: candDetails?.dealSourceCost })}
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Close Date</p>
          <input
            onChange={handleInputChange}
            name="closeDate"
            type="datetime-local"
            className="candidate-input max-md:w-full"
            placeholder="Select date"
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.closeDate }
              : { defaultValue: candDetails?.closeDate })}
          />
        </div>
      </div>
    </div>
  );
};

export default FormThirdRow;
