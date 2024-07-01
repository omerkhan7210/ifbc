import axios from "axios";
import React, { useState } from "react";
import PageTransition from "src/Animations/PageTransition";

const ServicesGrid = () => {
  return (
    <div className="max-md:p-2 md:p-16 flex flex-col gap-3">
      <h1 className="max-md:text-3xl md:text-7xl text-custom-heading-color  font-bold  ">
        Contact Us
      </h1>
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
          />
        </svg>

        <p className="font-bold text-custom-heading-color max-md:text-xl md:text-2xl">
          Email : <a href="mailto: info@ifbc.co">info@ifbc.co</a>
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
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

        <p className=" font-bold text-custom-heading-color max-md:text-xl md:text-2xl">
          Corporate Address :
          <a href="https://maps.app.goo.gl/qARmQNuMtTYL4fT29" target="blank">
            9350 Wilshire Blvd, Suite 203
          </a>
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <p className=" font-bold text-custom-heading-color max-md:text-xl md:text-2xl">
          Corporate Office Phone : <a href="tel:914-357-4322">914-357-4322</a>
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <p className="font-bold text-custom-heading-color max-md:text-xl md:text-2xl">
          Alternate Phone : <a href="tel:908-326-4322">908-326-4322</a>
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <p className=" font-bold text-custom-heading-color max-md:text-xl md:text-2xl ">
          FAX : <a href="tel:310-304-0871">310-304-0871</a>
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [data, setData] = useState({
    contactReason: "",
    contactName: "",
    contactCompany: "",
    contactEmail: "",
    contactPhone: "",
    contactReason: "",
    contactComments: "",
    contactCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setData({
      ...data,

      [name]: inputValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      contactReason: data.contactReason,
      contactName: data.contactName,
      contactCompany: data.contactCompany,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      contactReason: data.contactReason,
      contactComments: data.contactComments,
      contactCopy: data.contactCopy,
    };

    axios
      .post(
        "https://siddiqiventures-001-site4.ktempurl.com/api/contactus",
        formData
      )
      .then((response) => {
        console.log(response.status, response.data.token);
      });
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

  return (
    <PageTransition>
      <div className="max-md:p-2 md:p-10 bg-blue-100 grid grid-cols-2">
        <div>
          <ServicesGrid />
        </div>
        <div className="bg-custom-heading-color rounded-lg">
          <form className=" px-10 rounded-lg my-5" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="name" className="text-white font-bold py-2">
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                defaultValue={data.contactName}
                name="contactName"
                id="name"
                className="candidate-input"
                placeholder=" "
                required
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_company"
                className="text-white font-bold py-2"
              >
                Company (Ex. Google)
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="contactCompany"
                defaultValue={data.contactCompany}
                id="floating_company"
                className="candidate-input"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_email"
                className="text-white font-bold py-2"
              >
                Email address
              </label>
              <input
                onChange={handleChange}
                type="email"
                defaultValue={data.contactEmail}
                name="contactEmail"
                id="floating_email"
                className="candidate-input"
                placeholder=" "
                required
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_phone"
                className="text-white font-bold py-2"
              >
                Phone number (123-456-7890)
              </label>
              <input
                type="tel"
                defaultValue={data.contactPhone}
                onChange={handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="contactPhone"
                id="floating_phone"
                className="candidate-input"
                placeholder=" "
                required
              />
            </div>

            <div className="relative z-0 w-full mb-5 group ">
              <p className="text-white font-bold py-2">Contact Reason*</p>

              <select
                onChange={handleChange}
                id="reason"
                defaultValue={data.contactReason}
                name="contactReason"
                className="candidate-select w-full"
              >
                {Reason.map((option) => (
                  <option key={option.value} defaultValue={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-white font-bold py-2">
                Comments
              </label>
              <textarea
                onChange={handleChange}
                defaultValue={data.contactComments}
                name="contactComments"
                id="comments"
                rows={4}
                className="candidate-input"
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
                  defaultValue={data.contactCopy}
                  id=""
                  onChange={handleChange}
                />
                Send a copy of this message to me
              </label>
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="border-2 max-md:w-32 md:w-64 border-custom-heading-color bg-white  text-custom-heading-color px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold hover:animate-pulse"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
