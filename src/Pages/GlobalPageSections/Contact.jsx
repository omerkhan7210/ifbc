import React from "react";
import PageTransition from "src/Animations/PageTransition";

const ServicesGrid = () => {
  const values = [
    {
      title: "Incorporate 7 Sciences",
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
      title: "Fast And Reliable: Takes only 5-10 minutes",

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
      <h1 className="max-md:text-3xl md:text-7xl text-custom-heading-color  font-bold  ">
        Contact Us
      </h1>
      <div className="my-5">
        <h1 className="max-md:text-xl md:text-2xl text-custom-heading-color  font-bold ">
          <b>Website:</b> www.ifbc.co
        </h1>
        <h1 className="max-md:text-xl md:text-2xl text-custom-heading-color  font-bold  ">
          <b>Email: </b> ht@ifbc.co
        </h1>
        <h1 className="max-md:text-xl md:text-2xl text-custom-heading-color  font-bold  ">
          <b>Corporate Office:</b> (310) 304-0870
        </h1>
        <h1 className="max-md:text-xl md:text-2xl text-custom-heading-color  font-bold  ">
          <b>Corporate:</b> 9350 Wilshire Blvd, Suite 2023, Beverly Hills, CA
          90212
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:max-lg:grid-cols-1 md:grid-cols-2 gap-5 py-5">
        {values.map((value) => (
          <div className="group border-4 border-custom-dark-blue min-h-[200px] rounded-2xl bg-white transition-all duration-300 hover:bg-it-gray overflow-hidden h5-story_slider_active_card w-full flex items-center flex-col justify-center">
            <div className="flex justify-center">{value.svg}</div>
            <h1 className="text-xl text-center font-semibold text-custom-dark-blue mt-5 mb-2.5 px-5">
              {value.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    const newName = name.toLowerCase();

    setFormFields((prevFields) => ({
      ...prevFields,
      [newName]: inputValue,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [newName]: "",
    }));
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
      <div className="py-10 bg-blue-100 grid grid-cols-2">
        <div>
          <ServicesGrid />
        </div>
        <div className="bg-custom-heading-color rounded-lg">
          <form className=" px-10 rounded-lg my-5">
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

            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="name" className="text-white font-bold py-2">
                Name
              </label>
              <input
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="contactPhone"
                id="floating_phone"
                className="candidate-input"
                placeholder=" "
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-white font-bold py-2">
                Comments
              </label>
              <textarea
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
                Send a copy of this message to me
              </label>
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="border-2 border-custom-heading-color bg-white  text-custom-heading-color px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold"
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
