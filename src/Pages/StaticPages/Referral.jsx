import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "src/Animations/PageTransition";
import DialogBox from "src/Popups/DialogBox";
import {
  sanitizeInput,
  validateEmail,
  validatePhone,
  validateUsername,
} from "src/Utils/SanitizeInput";
const Referral = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [show, setShow] = useState(false);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : sanitizeInput(value);

    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: inputValue,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const allFieldsValid = validateFields();
      if (!allFieldsValid) {
        setFormErrors((prev) => ({
          ...prev,
          error: "Please fill in all the required fields correctly",
        }));
        setLoading(false);
        window.scrollTo(0, 500);
        return;
      }

      const formData = {
        firstname: formFields.firstname,
        lastname: formFields.lastname,
        phone: formFields.phone,
        email: formFields.email,
        franchiseinterested: formFields.franchiseinterested,
        desiredLoc: formFields.desiredLoc,
      };

      const jsonData = JSON.stringify(formData);
      const baseUrl = "https://backend.ifbc.co/api/referral";

      // Send the POST request using Axios
      const response = await axios.post(baseUrl, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setFormErrors({});
        setSuccessMsg("Thank you for referring!");
        setLoading(false);
        setShow(true);

        setTimeout(() => {
          setShow(false);

          history("/");
        }, 2000);
      } else {
        setFormErrors({ error: response.data });
        setLoading(false);
        window.scrollTo(0, 500);
        // Handle unexpected response
      }
    } catch (error) {
      console.error("Error:", error);
      setFormErrors({ error: error?.response?.data?.title });
      window.scrollTo(0, 500);
      // Handle unexpected response
      setLoading(false);
    }
  };

  const validateFields = () => {
    const reqFields = [
      "firstname",
      "lastname",
      "email",
      "phone",
      "franchiseinterested",
      "desiredLoc",
    ];
    let allFieldsValid = true;
    let formErrors = {};

    reqFields.forEach((field) => {
      const newKey = field;
      const value = formFields[newKey]?.trim() || "";

      if (!value) {
        formErrors[newKey] = "This field is required";
        allFieldsValid = false;
      } else {
        // Field-specific validations
        if (newKey === "email" && !validateEmail(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "phone" && !validatePhone(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "firstname" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "lastname" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (
          newKey === "franchiseinterested" &&
          !validateUsername(value)
        ) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "desiredLoc" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else {
          formErrors[newKey] = "";
        }
      }
    });

    setFormErrors(formErrors);
    return allFieldsValid;
  };
  return (
    <PageTransition>
      <div className="flex items-center justify-center p-6">
        <DialogBox setShow={setShow} show={show}>
          <button
            className="absolute top-5 right-10"
            onClick={() => setShow(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <div className="bg-white p-10 flex flex-col gap-3">
            <h1 className="text-3xl uppercase text-center">{successMsg}</h1>
            <p className="text-xl text-center">We will contact you soon.</p>
          </div>
        </DialogBox>
        <form
          className="p-8 flex flex-col gap-6 md:max-w-[45%] max-md:w-full text-gray-600 rounded-3xl w-full bg-custom-dark-blue/50 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                className="text-custom-heading-color font-semibold "
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                onChange={handleInputChange}
                name="firstname"
                placeholder="Enter First Name"
                className="candidate-input w-full"
                type="text"
                style={{
                  borderColor: formErrors.firstname ? "red" : undefined,
                }}
              />
              {formErrors.firstname && formErrors.firstname === "invalid" && (
                <p className=" text-red text-xs py-2 flex justify-between">
                  Invalid username. It should be 3-16 characters long and can
                  include letters, numbers, underscores, and spaces.
                </p>
              )}
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
                placeholder="Enter Last Name"
                className="candidate-select w-full"
                type="text"
                style={{
                  borderColor: formErrors.lastname ? "red" : undefined,
                }}
              />
              {formErrors.lastname && formErrors.lastname === "invalid" && (
                <p className=" text-red text-xs py-2 flex justify-between">
                  Invalid username. It should be 3-16 characters long and can
                  include letters, numbers, underscores, and spaces.
                </p>
              )}
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
                placeholder="Enter Email"
                className="candidate-input w-full"
                type="email"
                style={{
                  borderColor: formErrors.email ? "red" : undefined,
                }}
              />
              {formErrors.email && formErrors.email === "invalid" && (
                <p className=" text-red text-xs py-2 flex justify-between">
                  Invalid Email (john@example.com)
                </p>
              )}
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
                className="candidate-input w-full"
                type="tel"
                style={{
                  borderColor: formErrors.phone ? "red" : undefined,
                }}
              />
              {formErrors.phone && formErrors.phone === "invalid" && (
                <p className=" text-red text-xs py-2 flex justify-between">
                  Invalid Phone Number (Please use numbers only)
                </p>
              )}
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
                placeholder="Enter Franchise Name"
                className="candidate-input w-full"
                type="text"
                style={{
                  borderColor: formErrors.franchiseinterested
                    ? "red"
                    : undefined,
                }}
              />
              {formErrors.franchiseinterested &&
                formErrors.franchiseinterested === "invalid" && (
                  <p className=" text-red text-xs py-2 flex justify-between">
                    Invalid franchise name. It should be 3-16 characters long
                    and can include letters, numbers, underscores, and spaces.
                  </p>
                )}
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
                placeholder="Enter Desired Location"
                className="candidate-select w-full"
                type="text"
                style={{
                  borderColor: formErrors.desiredLoc ? "red" : undefined,
                }}
              />
              {formErrors.desiredLoc && formErrors.desiredLoc === "invalid" && (
                <p className=" text-red text-xs py-2 flex justify-between">
                  Invalid location. It should be 3-16 characters long and can
                  include letters, numbers, underscores, and spaces.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center w-full">
            <button
              className="candidate-btn md:w-44 max-md:w-full"
              type="submit"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};

export default Referral;
