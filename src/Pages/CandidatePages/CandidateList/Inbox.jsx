import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageTransition from "src/Animations/PageTransition";

const Inbox = ({ handleInputChange, userDetails }) => {
  const [editorHtml, setEditorHtml] = useState("");
  const handleChange = (html) => {
    setEditorHtml(html);
  };
  const territoryAvailability = [
    { value: "", label: "Pending" },
    { value: "available", label: "Available" },
    { value: "alternate", label: "Alternate Territory" },
    { value: "not-available", label: "NOT Available" },
  ];

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background: "url(/images/accounts/inbox.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-4xl md:text-7xl text-white z-20text-white font-bold text-center z-20">
          Inbox
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <h2 className="text-custom-heading-color font-bold text-xl text-center">
          Territory Check for Nick Hart & Smash My Trash sent by Harjeet Tiwana
        </h2>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Territory Availability</p>
          <select
            onChange={handleInputChange}
            id="Availability"
            className="candidate-input p-3"
            name="territoryavailability"
            defaultValue={userDetails?.territoryavailability}
          >
            {territoryAvailability.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <ReactQuill
            theme="snow" // pass 'snow' or 'bubble' for rich text editor theme
            value={editorHtml}
            onChange={handleChange}
            modules={modules}
          />
        </div>

        <h2 className="text-custom-heading-color font-bold text-xl">
          Messages
        </h2>
        <div className="flex justify-between">
          <img
            src="/images/accounts/harjeet.jpeg"
            className="rounded-full"
            width={80}
            height={80}
            alt="Logo"
          />
          <h2 className="candidate-label">Harjeet Tiwana</h2>
          <h2 className="candidate-label">June 15, 2024 at 10:01AM</h2>
        </div>
        <h2 className="text-custom-heading-color font-bold text-xl">
          Territory Check
        </h2>

        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Candidate Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Nick Hart
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-blue-500 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Territory
                </th>
                <td class="px-6 py-4">Fresno CA, 93711</td>
              </tr>
              <tr class="bg-blue-600 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Franchise
                </th>
                <td class="px-6 py-4">Smash My Trash</td>
              </tr>
              <tr class="bg-blue-500 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Franchise Email
                </th>
                <td class="px-6 py-4">franchiseinquiry@smashmytrash.com</td>
              </tr>
              <tr class="bg-blue-600 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Franchise Contact
                </th>
                <td class="px-6 py-4">David Curnich</td>
              </tr>
              <tr class="bg-blue-500 border-blue-40">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Broker Email
                </th>
                <td class="px-6 py-4">ht@ifbc.co</td>
              </tr>

              <tr class="bg-blue-600 border-b border-blue-400">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Broker Name
                </th>
                <td class="px-6 py-4">Harjeet Tiwana</td>
              </tr>
              <tr class="bg-blue-500 border-blue-40">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  Broker Company
                </th>
                <td class="px-6 py-4">IFBC.CO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageTransition>
  );
};

export default Inbox;
