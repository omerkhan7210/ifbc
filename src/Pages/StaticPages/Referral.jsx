import React from "react";

const Referral = ({ handleInputChange }) => {
  return (
    <>
      <div className=" flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
        <div className="flex-1">
          <label className="text-custom-heading-color" htmlFor="firstname">
            First Name
          </label>
          <input
            onChange={handleInputChange}
            name="firstname"
            placeholder="First Name"
            className="candidate-select w-full"
            // style={{ borderColor: formErrors.firstname ? "red" : undefined }}
            type="text"
          />{" "}
          {/* {formErrors.firstname && formErrors.firstname === "invalid" && (
            <p className=" text-red text-xs py-2 flex justify-between">
              Invalid username. It should be 3-16 characters long and can
              include letters, numbers, underscores, and spaces.
            </p>
          )} */}
        </div>

        <div className="flex-1">
          <label className="text-custom-heading-color" htmlFor="firstname">
            Last Name
          </label>
          <input
            onChange={handleInputChange}
            name="lastname"
            placeholder="Last Name"
            className="candidate-select w-full"
            // style={{ borderColor: formErrors.lastname ? "red" : undefined }}
            type="text"
          />{" "}
          {/* {formErrors.lastname && formErrors.lastname === "invalid" && (
            <p className=" text-red text-xs py-2 flex justify-between">
              Invalid username. It should be 3-16 characters long and can
              include letters, numbers, underscores, and spaces.
            </p>
          )} */}
        </div>
      </div>
      <div className=" flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
        <div className="flex-1">
          <label className="text-custom-heading-color" htmlFor="state">
            Email
          </label>
          <input
            onChange={handleInputChange}
            name="email"
            placeholder="Email"
            className="candidate-input w-full"
            // style={{ borderColor: formErrors.email ? "red" : undefined }}
            id="email"
            type="email"
          />
          {/* {formErrors.email && formErrors.email === "invalid" && (
            <p className=" text-red text-xs py-2 flex justify-between">
              Invalid Email (john@example.com)
            </p>
          )} */}
        </div>

        <div className="flex-1">
          <label className="text-custom-heading-color">Phone</label>
          <input
            onChange={handleInputChange}
            name="phone"
            placeholder="Phone Number"
            className="candidate-input w-full"
            // style={{ borderColor: formErrors.phone ? "red" : undefined }}
            id="phone"
            type="tel"
            defaultValue={""}
          />{" "}
          {/* {formErrors.phone && formErrors.phone === "invalid" && (
            <p className=" text-red text-xs py-2 flex justify-between">
              Invalid Phone Number (Please use numbers only)
            </p>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Referral;
