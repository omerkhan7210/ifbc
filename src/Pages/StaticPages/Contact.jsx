import axios from "axios";
import React, { useState } from "react";
import PageTransition from "src/Animations/PageTransition";
import DialogBox from "src/Popups/DialogBox";
import {
  sanitizeInput,
  validateEmail,
  validatePhone,
  validateUsername,
} from "src/Utils/SanitizeInput";
import { twMerge } from "tailwind-merge";

const ServicesGrid = () => {
  return (
    <div className=" max-md:w-full  flex flex-col gap-3 mb-16">
      <section class="bg-white ">
        <div class="text-center">
          <p class="font-medium text-blue-500 ">Contact us</p>

          <h1 class="mt-2 max-md:text-2xl font-semibold text-custom-heading-color md:text-5xl ">
            Get in touch
          </h1>

          <p class="mt-3 text-gray-500 ">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div class="grid max-md:grid-cols-1 gap-12 mt-10 md:grid-cols-4">
          <div class="flex flex-col items-center justify-center text-center">
            <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800 ">Email</h2>

            <p class="mt-2 text-blue-500 ">
              <a href="mailto: info@ifbc.co">info@ifbc.co</a>
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center">
            <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800 ">Office</h2>

            <p class="mt-2 text-blue-500 dark:text-blue-400">
              9350 Wilshire Blvd, Suite 203 Beverly Hills, CA 90212
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center">
            <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>

            <p class="mt-2 text-blue-500  flex flex-col gap-1">
              <a href="tel:914-357-4322">91-HELP-IFBC</a>
              <a href="tel:908-326-4322">90-TEAM-IFBC </a>
            </p>
          </div>

          <div class="flex flex-col items-center justify-center text-center">
            <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
            </span>

            <h2 class="mt-4 text-lg font-medium text-gray-800 ">FAX</h2>

            <p class="mt-2 text-blue-500  flex gap-5">
              <a href="tel:310-304-0871">310-304-0871</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue =
      type === "checkbox" ? (checked ? true : false) : sanitizeInput(value);

    setData({
      ...data,
      [name]: inputValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const reqFields = [
      "contactName",
      "contactEmail",
      "contactCompany",
      "contactPhone",
    ];
    let allFieldsValid = true;
    let formErrors = {};

    reqFields.forEach((field) => {
      const newKey = field;
      const value = data[newKey]?.trim() || "";

      if (!value) {
        formErrors[newKey] = "This field is required";
        allFieldsValid = false;
      } else {
        // Field-specific validations
        if (newKey === "contactEmail" && !validateEmail(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "contactPhone" && !validatePhone(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else if (newKey === "contactName" && !validateUsername(value)) {
          formErrors[newKey] = "invalid";
          allFieldsValid = false;
        } else {
          formErrors[newKey] = "";
        }
      }
    });

    setFormErrors(formErrors);

    try {
      if (allFieldsValid) {
        const formData = {
          contactReason: data.contactReason ?? "",
          contactName: data.contactName,
          contactCompany: data.contactCompany,
          contactEmail: data.contactEmail,
          contactPhone: data.contactPhone,
          contactComments: data.contactComments ?? "",
          contactCopy: data.contactCopy ?? false,
        };

        const response = await axios.post(
          "https://backend.ifbc.co/api/contactus",
          formData
        );

        if (response.status === 201) {
          setShow(true);
          setLoading(false);
          setTimeout(() => {
            setShow(false);
            window.location.href = "/";
          }, 3000);
        }
      } else {
        setFormErrors((prev) => ({
          ...prev,
          error: "Please fill in all the required fields",
        }));
        setLoading(false);
        window.scrollTo(0, 400);

        // Handle invalid fields (e.g., show validation errors)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Reason = [
    { value: "", label: "My Inquiry is About" },
    {
      value: "Product or Service Suggestion",
      label: "Product or Service Suggestion",
    },
    {
      value: "Feedback on How We Are Doing",
      label: "Feedback on How We Are Doing",
    },
    { value: "Account Support", label: "Account Support" },
    {
      value: "Additional Advertising Options",
      label: "Additional Advertising Options",
    },
    { value: "Technical Support", label: "Technical Support" },
    { value: "General Questions", label: "General Questions" },
  ];

  const contactPath = [
    { value: "", label: "Choose Your Path" },

    {
      value: "Schedule a Free Tour With IFBC ",
      label: "Schedule a Free Tour With IFBC",
    },

    {
      value: "Start a New Career as Franchise Consultant",
      label: "Start a New Career as Franchise Consultant",
    },

    {
      value: "Already a Consultant? Join IFBC!",
      label: "Already a Consultant? Join IFBC!",
    },

    {
      value: "Franchisors: Grow Your Franchise With IFBC",
      label: "Franchisors: Grow Your Franchise With IFBC",
    },

    {
      value: "Suppliers: Become an Approved IFBC Vendor Memeber",
      label: "Suppliers: Become an Approved IFBC Vendor Memeber",
    },

    { value: "Become a Franchise Owner", label: "Become a Franchise Owner" },

    { value: "Help Me Sell My Franchise", label: "Help Me Sell My Franchise" },

    { value: "Other", label: "Other" },
  ];
  // return
  return (
    <PageTransition>
      <DialogBox show={show} setShow={setShow}>
        <div className="bg-white p-10">
          <p className="text-3xl text-center text-custom-heading-color">
            Message send successfully! <br /> We will contact you soon{" "}
          </p>
        </div>
      </DialogBox>
      <div className="max-md:p-2 max-md:w-full md:p-10 max-w-[95%] mx-auto">
        <ServicesGrid />
        <div className="bg-custom-heading-color rounded-lg grid max-md:grid-cols-1 md:grid-cols-2 h-[750px] ">
          <img
            src="/images/banners/contact.jpg"
            alt=""
            className="h-[750px] w-full object-cover rounded-l-lg  "
          />
          <div id="form-right " className="flex flex-col justify-center w-full">
            <form className=" px-10 rounded-lg my-5 " onSubmit={handleSubmit}>
              {formErrors.error && (
                <p className="border-2 border-white text-white p-4 flex justify-between my-5">
                  {formErrors.error}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                    />
                  </svg>
                </p>
              )}
              <div className="flex gap-3 justify-between">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="contactName"
                    id="name"
                    placeholder="Your Name"
                    className="candidate-input w-full"
                    style={{
                      borderColor: formErrors.contactName ? "red" : "undefined",
                    }}
                  />
                  {formErrors.contactName &&
                    formErrors.contactName === "invalid" && (
                      <p className=" text-white text-xs py-2 flex justify-between">
                        Invalid username. It should be 3-16 characters long and
                        can include letters, numbers, underscores, and spaces.
                      </p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="contactCompany"
                    className="candidate-input w-full"
                    placeholder="Company (Ex. Google)"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-between">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    onChange={handleChange}
                    type="email"
                    name="contactEmail"
                    id="floating_email"
                    className="candidate-input w-full"
                    style={{
                      borderColor: formErrors.email ? "red" : undefined,
                    }}
                    placeholder="Email address"
                  />
                  {formErrors.contactEmail &&
                    formErrors.contactEmail === "invalid" && (
                      <p className=" text-white text-xs py-2 flex justify-between">
                        Invalid Email (john@example.com)
                      </p>
                    )}
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="floating_phone"
                    className="text-white font-bold py-2"
                  ></label>
                  <input
                    type="tel"
                    onChange={handleChange}
                    name="contactPhone"
                    className="candidate-input w-full"
                    style={{
                      borderColor: formErrors.contactPhone ? "red" : undefined,
                    }}
                    placeholder="Phone number (123-456-7890)"
                  />{" "}
                  {formErrors.contactPhone &&
                    formErrors.contactPhone === "invalid" && (
                      <p className=" text-white text-xs py-2 flex justify-between">
                        Invalid Phone Number (Please use numbers only)
                      </p>
                    )}
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group ">
                <select
                  onChange={handleChange}
                  id="contactPath"
                  name="contactPath"
                  className="contact-select w-full"
                >
                  {contactPath.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative z-0 w-full mb-5 group ">
                <select
                  onChange={handleChange}
                  id="reason"
                  name="contactReason"
                  className="contact-select w-full"
                >
                  {Reason.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                onChange={handleChange}
                name="contactComments"
                id="comments"
                rows={4}
                placeholder="Comments"
                className="contact-input"
              />

              <label htmlFor="" className="block  text-white font-bold py-3">
                <input
                  type="checkbox"
                  name="contactCopy"
                  id=""
                  onChange={handleChange}
                />
                Send a copy of this message to me
              </label>

              {/* Terms and conditions message */}
              <p className="text-sm text-white text-left">
                By submitting the form, you agree to receive calls, text
                messages, or emails from <a href="https://ifbc.co">ifbc.co</a>{" "}
                at the contact information provided. <br />
                Message rates may apply. <br />
                Text STOP to cancel text messaging at any time. <br />
                See{" "}
                <a
                  href="/terms-conditions"
                  className="text-white font-extrabold underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="text-white font-extrabold underline"
                >
                  Privacy Policy
                </a>{" "}
                for additional details.
              </p>
              <div className="my-3 flex justify-center">
                <button
                  type="submit"
                  className="border-2 w-full border-custom-heading-color bg-white  text-custom-heading-color px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold hover:animate-pulse"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
