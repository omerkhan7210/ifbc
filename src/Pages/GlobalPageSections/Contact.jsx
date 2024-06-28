import React, { useState } from "react";
import PageTransition from "src/Animations/PageTransition";

const ServicesGrid = () => {
  const values = [
    {
      title: "Email",
      text: `<a href="mailto:ht@ifbc.co">ht@ifbc.co<a/>`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(33 118 255)"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
    },
    {
      title: "Phone",
      text: `<a href="tel:3103040870">(310) 304-0870<a/>`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(33 118 255)"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Corporate Office",
      text: `<a href="https://www.google.com/maps/place/9350+Wilshire+Blvd+%232023,+Beverly+Hills,+CA+90212,+USA/@34.0667836,-118.3954485,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bbfe63ec17af:0x98416f3289263677!8m2!3d34.0667836!4d-118.3954485?entry=ttu">9350 Wilshire Blvd, Suite 2023, Beverly Hills, CA 90212<a/>`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(33 118 255)"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="p-16">
      <h1 className="max-md:text-3xl md:text-6xl text-custom-heading-color  font-bold  ">
        Contact Us
      </h1>
      <p className="mt-3 font-bold text-custom-heading-color">
        We'd love to hear from you! Whether you have a question about our
        services, need assistance, or just want to provide feedback, feel free
        to reach out to us.
      </p>

<<<<<<< HEAD
      <div className="grid grid-cols-2 sm:max-lg:grid-cols-1 md:grid-cols-2 gap-5 py-5">
        {values.map((value, index) => (
          <div
            key={index}
            className="group border-4 border-custom-dark-blue min-h-[200px] rounded-2xl bg-white transition-all duration-300 hover:bg-it-gray overflow-hidden h5-story_slider_active_card w-full flex items-center flex-col justify-center"
          >
=======
      <div className="grid grid-cols-2 sm:max-lg:grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {values.map((value) => (
          <div className="group border-4 border-custom-dark-blue min-h-[200px] rounded-2xl bg-white transition-all duration-300 hover:bg-it-gray overflow-hidden h5-story_slider_active_card w-full flex items-center flex-col justify-center">
>>>>>>> 266721d884c3654255591e1006676517a369266f
            <div className="flex justify-center">{value.svg}</div>
            <h1 className="text-xl text-center font-semibold text-custom-dark-blue mt-5 mb-2.5 px-5">
              {value.title}
            </h1>
            <p
              className="text-sm text-center text-custom-dark-blue"
              dangerouslySetInnerHTML={{ __html: value.text }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const [contactReason, setContactReason] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactComments, setContactComments] = useState("");
  const [contactCopy, setContactCopy] = useState("");

  // tumne ye wala method istemaal hi nhi kiya wa onchange pr tumne direct wahan values save krwadi state pr ye submit krne pr show hoga phr submuit krwao form
  // nh horea us per bhi
  // ye refresh horha page after submit isliye tumhe kch show nhi horha
  // ye default behavior hota hai submut ke button ka// hume default behaviopur remove krna parta
  const handleInputChange = (e) => {
    e.preventDefault();
    // iske baaray may dekhlena prevent default ab krweakr dekho
    console.log("contact us");
    console.log(
      contactReason,
      contactName,
      contactCompany,
      contactEmail,
      contactPhone,
      contactComments,
      contactCopy
    );
    e.preventdefault();
  };
  const Reason = [
    { value: "", label: "My inquiry is about..." },
    { value: "0", label: "Product or service suggestion" },
    { value: "1", label: "Feedback on how we are doing" },
    { value: "2", label: "Account support" },
    { value: "3", label: "Additional advertising options" },
    { value: "5", label: "Technical support" },
    { value: "4", label: "General questions" },
  ];
  return (
    <PageTransition>
      <div className="py-20 bg-blue-100 grid grid-cols-2 px-10">
        <div>
          <ServicesGrid />
        </div>
        <div className="bg-custom-heading-color rounded-lg">
<<<<<<< HEAD
          <form className=" px-10 rounded-lg my-5" onSubmit={handleInputChange}>
            <div className="relative z-0 w-full mb-5 group ">
              <p className="text-white font-bold py-2">Contact Reason*</p>

              <select
                onChange={(e) => setContactReason(e.target.value)}
                id="reason"
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

=======
          <form className=" px-10 rounded-lg my-5 py-5">
>>>>>>> 266721d884c3654255591e1006676517a369266f
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="name" className="text-white font-bold py-2">
                Name
              </label>
              <input
                onChange={(e) => setContactName(e.target.value)}
                type="text"
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
                onChange={(e) => setContactCompany(e.target.value)}
                type="text"
                name="contactCompany"
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
                onChange={(e) => setContactEmail(e.target.value)}
                type="email"
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
                onChange={(e) => setContactPhone(e.target.value)}
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
                onChange={handleInputChange}
                id="reason"
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
                onChange={(e) => setContactComments(e.target.value)}
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
                  id=""
                  onChange={(e) => setContactCopy(e.target.checked)}
                />
                Send a copy of this message to me
              </label>
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="border-2 border-custom-heading-color bg-white  text-custom-heading-color px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold w-64 hover:animate-pulse"
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
