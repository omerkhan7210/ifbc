import axios from "axios";
import React, { useState } from "react";
import PageTransition from "src/Animations/PageTransition";

const ServicesGrid = () => {
  return (
    <div className="max-md:p-8 md:p-16">
      <h1 className="max-md:text-3xl md:text-7xl text-custom-heading-color  font-bold  ">
        Contact Us
      </h1>
      <p className="mt-3 font-bold text-custom-heading-color">
        Email : info@ifbc.co
      </p>
      <p className="mt-3 font-bold text-custom-heading-color">
        Corporate : 9350 Wilshire Blvd, Suite 203
      </p>
      <p className="mt-3 font-bold text-custom-heading-color">
        Corporate Office : (914-357-4322)
      </p>
      <p className="mt-3 font-bold text-custom-heading-color">
        Office : (908-326-4322)
      </p>

      <p className="mt-3 font-bold text-custom-heading-color">
        FAX : 310-304-0871
      </p>
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
    contactCopy: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      contactReason: data.contactReason,
      contactName: data.contactName,
      contactCompany: data.contactCompany,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      contactReason: data.contactReason,
      contactComments: data.contactComments,
      contactCopy: data.contactCopy,
    };
    axios.post("", userData).then((response) => {
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
      <div className="p-10 bg-blue-100 grid grid-cols-2">
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
                value={data.contactName}
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
                value={data.contactCompany}
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
                value={data.contactEmail}
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
                value={data.contactPhone}
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
                value={data.contactReason}
                name="contactReason"
                className="candidate-select w-full"
              >
                {Reason.map((option) => (
                  <option key={option.value} value={option.value}>
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
                value={data.contactComments}
                name="contactComments"
                id="comments"
                rows={4}
                className="candidate-input"
                defaultValue={""}
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
                  value={data.contactCopy}
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
