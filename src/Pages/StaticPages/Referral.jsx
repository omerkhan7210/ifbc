import React from "react";

const Referral = ({ handleInputChange, formErrors }) => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="p-8 flex flex-col gap-6 max-w-4xl text-gray-600 rounded-3xl w-full bg-custom-dark-blue/50 shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              className="text-custom-heading-color font-semibold"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              onChange={handleInputChange}
              name="firstname"
              placeholder="Enter your first name"
              className="candidate-select w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-heading-color transition-shadow"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-custom-heading-color font-semibold"
              htmlFor="lastname"
            >
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              name="lastname"
              placeholder="Enter your last name"
              className="candidate-select w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-heading-color transition-shadow"
              type="text"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              className="text-custom-heading-color font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={handleInputChange}
              name="email"
              placeholder="you@example.com"
              className="candidate-input w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-heading-color transition-shadow"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-custom-heading-color font-semibold"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              onChange={handleInputChange}
              name="phone"
              placeholder="(123) 456-7890"
              className="candidate-input w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-heading-color transition-shadow"
              type="tel"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              className="text-custom-heading-color font-semibold"
              htmlFor="franchiseinterested"
            >
              Franchise Interested
            </label>
            <input
              onChange={handleInputChange}
              name="franchiseinterested"
              placeholder="Enter franchise name"
              className="candidate-input w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-heading-color transition-shadow"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-custom-heading-color font-semibold"
              htmlFor="desiredLoc"
            >
              Desired Location
            </label>
            <input
              onChange={handleInputChange}
              name="desiredLoc"
              placeholder="Enter desired location"
              className="candidate-select w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-custom-heading-color transition-shadow"
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="border-2 text-md w-full md:w-auto md:min-w-[150px] border-custom-heading-color bg-gradient-to-r from-custom-heading-color to-blue-600 text-white px-6 py-3 rounded-3xl hover:shadow-lg hover:bg-gradient-to-l hover:from-white hover:to-custom-heading-color hover:text-custom-heading-color transition-all duration-500 font-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referral;
