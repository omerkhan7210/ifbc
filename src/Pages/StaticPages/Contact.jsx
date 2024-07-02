import axios from "axios";
import React, { useState } from "react";
import PageTransition from "src/Animations/PageTransition";
import DialogBox from "src/Popups/DialogBox";
import { twMerge } from "tailwind-merge";

const ServicesGrid = () => {
  return (
    <div className="max-md:p-2 max-md:w-full md:p-16 flex flex-col gap-3">
      <h1 className="max-md:text-3xl md:text-5xl text-custom-heading-color  font-bold  ">
        Contact Us
      </h1>
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(0, 17, 54)"
          class="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <p className="contact-para">
          <a href="mailto: info@ifbc.co">info@ifbc.co</a>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(0, 17, 54)"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <p className=" contact-para">
          <a href="https://maps.app.goo.gl/qARmQNuMtTYL4fT29" target="blank">
            9350 Wilshire Blvd, Suite 203
          </a>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(0, 17, 54)"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <p className=" contact-para">
          <a href="tel:914-357-4322">914-357-4322</a>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(0, 17, 54)"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <p className="contact-para">
          <a href="tel:908-326-4322">908-326-4322</a>
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(0, 17, 54)"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <p className=" contact-para ">
          FAX : <a href="tel:310-304-0871">310-304-0871</a>
        </p>
      </div>
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
    const inputValue = type === "checkbox" ? (checked ? 1 : 0) : value;

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

    reqFields.forEach((field) => {
      if (!data[field] || data[field].trim() === "") {
        setFormErrors((prev) => ({ ...prev, [field]: "error" }));
        allFieldsValid = false;
      } else {
        setFormErrors((prev) => ({ ...prev, [field]: "" }));
      }
    });

    try {
      if (allFieldsValid) {
        const formData = {
          contactReason: data.contactReason ?? "",
          contactName: data.contactName,
          contactCompany: data.contactCompany,
          contactEmail: data.contactEmail,
          contactPhone: data.contactPhone,
          contactReason: data.contactReason,
          contactComments: data.contactComments ?? "",
          contactCopy: data.contactCopy,
        };

        const response = await axios.post(
          "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/contactus",
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
        window.scrollTo(0, 0);

        // Handle invalid fields (e.g., show validation errors)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const Reason = [
    { value: "", label: "My inquiry is about..." },
    {
      value: "Product or service suggestion",
      label: "Product or service suggestion",
    },
    {
      value: "Feedback on how we are doing",
      label: "Feedback on how we are doing",
    },
    { value: "Account support", label: "Account support" },
    {
      value: "Additional advertising options",
      label: "Additional advertising options",
    },
    { value: "Technical support", label: "Technical support" },
    { value: "General questions", label: "General questions" },
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
      <div className="max-md:p-2 max-md:flex-col max-md:w-full md:p-10  grid md:grid-cols-2">
        <div>
          <ServicesGrid />
        </div>
        <div className="bg-custom-heading-color rounded-lg py-5">
          {formErrors.error && (
            <p className="border-2 border-white text-white p-4 flex justify-between mx-10">
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
          <form className=" px-10 rounded-lg my-5" onSubmit={handleSubmit}>
            <div className="flex gap-3 justify-between">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="contactName"
                  id="name"
                  placeholder="Your Name"
                  className={twMerge(
                    `contact-input`,
                    formErrors.contactName === "error" ? "bg-red-300" : ""
                  )}
                />
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="contactCompany"
                  id="floating_company"
                  className={twMerge(
                    `contact-input`,
                    formErrors.contactCompany === "error" ? "bg-red-300" : ""
                  )}
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
                  className={twMerge(
                    `contact-input`,
                    formErrors.contactEmail === "error" ? "bg-red-300" : ""
                  )}
                  placeholder="Email address"
                />
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
                  className={twMerge(
                    `contact-input`,
                    formErrors.contactPhone === "error" ? "bg-red-300" : ""
                  )}
                  placeholder="Phone number (123-456-7890)"
                />
              </div>
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

            <div>
              <textarea
                onChange={handleChange}
                name="contactComments"
                id="comments"
                rows={4}
                placeholder="Comments"
                className="contact-input"
              />
            </div>

            <div id="copy">
              <label
                htmlFor=""
                className="flex items-center text-white font-bold py-3"
              >
                <input
                  type="checkbox"
                  name="contactCopy"
                  id=""
                  onChange={handleChange}
                />
                Send a copy of this message to me
              </label>
            </div>

            {/* Terms and conditions message */}
            <p className="text-sm text-white ">
              By submitting this form, you agree to our{" "}
              <a href="/terms" className="text-blue-500">
                Terms and Conditions
              </a>
              .
            </p>
            <div className="my-3">
              <button
                type="submit"
                className="border-2 max-md:w-32 md:w-64 border-custom-heading-color bg-white  text-custom-heading-color px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold hover:animate-pulse"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
