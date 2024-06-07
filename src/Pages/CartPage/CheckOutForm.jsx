import React from "react";

const CheckOutForm = () => {
  return (
    <div class="grid grid-cols-2">
      <div id="left-side-checkout-form">
        <div className="mt-4 flex flex-col rounded-lg p-4 shadow-sm ">
          <h2 className="text-custom-heading-color font-bold text-lg">
            Check-Out Form
          </h2>
          <div className="mt-4">
            <label className="text-custom-heading-color" htmlFor="name">
              Name
            </label>
            <input
              placeholder="Your name"
              className="candidate-input"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label className="text-custom-heading-color" htmlFor="address">
              Address
            </label>
            <textarea
              placeholder="Your address"
              className="candidate-input"
              id="address"
              defaultValue={""}
            />
          </div>
          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-custom-heading-color" htmlFor="city">
                City
              </label>
              <input
                placeholder="Your city"
                className="candidate-input"
                id="city"
                type="text"
              />
            </div>
            <div className="flex-1">
              <label className="text-custom-heading-color" htmlFor="state">
                State
              </label>
              <input
                placeholder="Your state"
                className="candidate-input"
                id="state"
                type="text"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row space-x-2">
            <div className="flex-1">
              <label className="text-custom-heading-color" htmlFor="zip">
                ZIP
              </label>
              <input
                placeholder="Your ZIP code"
                className="candidate-input"
                id="zip"
                type="text"
              />
            </div>
            <div className="flex-1">
              <label className="text-custom-heading-color" htmlFor="country">
                Country
              </label>
              <select className="candidate-input w-full" id="country">
                <option value>Select a country</option>
                <optgroup label="Africa">
                  <option value="AF">Afghanistan</option>
                  <option value="DZ">Algeria</option>
                  <option value="AO">Angola</option>
                  ...
                  <option value="ZW">Zimbabwe</option>
                </optgroup>
                <optgroup label="Asia">
                  <option value="AM">Armenia</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BH">Bahrain</option>
                  ...
                  <option value="YE">Yemen</option>
                </optgroup>
                <optgroup label="South America">
                  <option value="AR">Argentina</option>
                  <option value="BO">Bolivia</option>
                  <option value="BR">Brazil</option>
                  ...
                  <option value="VE">Venezuela</option>
                </optgroup>
                ...
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="candidate-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutForm;
