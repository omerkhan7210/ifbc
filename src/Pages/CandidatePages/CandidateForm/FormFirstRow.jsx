import axios from "axios";
import React from "react";

const AddContactDiv = ({
  contact,
  index,
  handleInputChange,
  formErrors,
  setAddContacts,
}) => {
  const relationships = ["Business Partner", "Spouse", "Family Member"];
  const handleRemoveAdditionalContactDiv = () => {
    setAddContacts((prevContacts) => prevContacts - 1);
  };
  const handleRemoveAdditionalContact = async (docId) => {
    const additionalContactAddUrl = `https://backend.ifbc.co/api/CandidateContacts/${docId}`;
    await axios.delete(additionalContactAddUrl);
  };
  return (
    <div
      key={index}
      id={`additional-contact-row-${index}`}
      className="p-5 border-2 border-custom-heading-color shadow-lg my-5"
    >
      <h1 className="candidate-sub-heading">Additional Contact</h1>
      <div
        id="first-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px] justify-between jus"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">First Name</p>
          <input
            onChange={handleInputChange}
            type="text"
            name={`additionalFirstName_${index}`}
            className="candidate-input"
            style={{
              borderColor: `${formErrors.additionalFirstName}_${index}`
                ? "red"
                : undefined,
            }}
            required
            defaultValue={contact ? contact.firstName : ""}
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Last Name</p>
          <input
            onChange={handleInputChange}
            type="text"
            name={`additionalLastName_${index}`}
            className="candidate-input"
            style={{
              borderColor: `${formErrors.additionalLastName}_${index}`
                ? "red"
                : undefined,
            }}
            required
            defaultValue={contact ? contact.lastName : ""}
          />
        </div>
      </div>
      <div
        id="second-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px] justify-between"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">Phone Number</p>
          <input
            onChange={handleInputChange}
            type="tel"
            name={`additionalPhone_${index}`}
            className="candidate-input"
            style={{
              borderColor: `${formErrors.additionalPhone}_${index}`
                ? "red"
                : undefined,
            }}
            required
            defaultValue={contact ? contact.phone : ""}
          />
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Email</p>
          <input
            onChange={handleInputChange}
            type="email"
            name={`additionalEmail_${index}`}
            className="candidate-input"
            style={{
              borderColor: `${formErrors.additionalEmail}_${index}`
                ? "red"
                : undefined,
            }}
            required
            defaultValue={contact ? contact.email : ""}
          />
        </div>

        <div className="candidate-sub-childs">
          <p className="candidate-label">Relationship to Primary Candidate</p>
          <select
            onChange={handleInputChange}
            className="candidate-input"
            style={{
              borderColor: `${formErrors.additionalRelationship}_${index}`
                ? "red"
                : undefined,
            }}
            name={`additionalRelationship_${index}`}
          >
            <option value="">Select One</option>
            {relationships.map((relationship, idx) => (
              <option
                key={idx}
                value={relationship}
                selected={
                  contact ? contact.relationShip === relationship : false
                }
              >
                {relationship}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div id="button-container" className="w-full flex justify-center">
        {contact ? (
          <button
            className="candidate-btn"
            onClick={() => handleRemoveAdditionalContact(contact.docId)}
          >
            REMOVE CONTACT
          </button>
        ) : (
          <button
            className="candidate-btn"
            onClick={handleRemoveAdditionalContactDiv}
          >
            REMOVE CONTACT
          </button>
        )}
      </div>
    </div>
  );
};

const FormFirstRow = ({
  handleInputChange,
  formErrors,
  candDetails,
  candNames,
  selectedDocId,
  setSelectedDocId,
  selectedDetails,
  addContacts,
  setAddContacts,
  contacts,
}) => {
  return (
    <div id="first-row" className={`${candDetails ? "" : "py-10"} py-5`}>
      <h1 className="candidate-sub-heading ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Primary Candidate Information
      </h1>

      <div
        id="first-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px] justify-between"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">First Name*</p>

          {candNames && candNames.length > 0 ? (
            <select
              name="firstname"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.firstname ? "red" : undefined,
              }}
              onChange={(e) => {
                setSelectedDocId(e.target.value);
              }}
            >
              {!selectedDocId && <option value="">Choose any Candidate</option>}
              {candNames &&
                candNames.map((cand) => (
                  <option key={cand.docId} value={cand.docId}>
                    {cand.name}
                  </option>
                ))}
            </select>
          ) : (
            <input
              type="text"
              onChange={handleInputChange}
              name="firstname"
              className="candidate-input w-full"
              style={{
                borderColor: formErrors.firstname ? "red" : undefined,
              }}
              required
              {...(candNames && candNames.length > 0
                ? { value: selectedDetails?.firstName }
                : { defaultValue: candDetails?.firstName })}
            />
          )}

          {formErrors.firstname && formErrors.firstname === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid username. It should be 3-16 characters long and can
              include letters, numbers, underscores, and spaces.
            </p>
          )}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Last Name*</p>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastname"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.lastname ? "red" : undefined,
            }}
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.lastName }
              : { defaultValue: candDetails?.lastName })}
          />
          {formErrors.lastname && formErrors.lastname === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid username. It should be 3-16 characters long and can
              include letters, numbers, underscores, and spaces.
            </p>
          )}
        </div>
      </div>
      <div
        id="second-sub-row"
        className="flex flex-col gap-[15px] sm:flex-row sm:gap-[35px] justify-between"
      >
        <div className="candidate-sub-childs">
          <p className="candidate-label">Phone Number*</p>

          <input
            type="number"
            name="phone"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.phone ? "red" : undefined,
            }}
            onChange={handleInputChange}
            required
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.phone }
              : { defaultValue: candDetails?.phone })}
          />
          {formErrors.phone && formErrors.phone === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid phone number. It should be 11 digits long.
            </p>
          )}
        </div>
        <div className="candidate-sub-childs">
          <p className="candidate-label">Email*</p>
          <input
            type="email"
            name="email"
            className="candidate-input w-full"
            style={{
              borderColor: formErrors.email ? "red" : undefined,
            }}
            required
            onChange={handleInputChange}
            {...(candNames && candNames.length > 0
              ? { value: selectedDetails?.email }
              : { defaultValue: candDetails?.email })}
          />
          {formErrors.email && formErrors.email === "invalid" && (
            <p className=" text-red-600 py-2 flex justify-between">
              Invalid Email (john@example.com)
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
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                />
              </svg>
            </p>
          )}
        </div>
      </div>

      {/* {contacts && contacts.length > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {contacts.map((contact, index) => (
            <AddContactDiv
              contact={contact}
              index={index}
              handleInputChange={handleInputChange}
              formErrors={formErrors}
              setAddContacts={setAddContacts}
            />
          ))}
        </div>
      )} */}

      {/* <div id="button-container" className="w-full flex justify-center">
        <button
          className="candidate-btn"
          onClick={() => setAddContacts((prevContacts) => prevContacts + 1)}
        >
          ADD ADDITIONAL CONTACTS
        </button>
      </div> */}
      {addContacts > 0 && (
        <div className="flex flex-col gap-8 mt-5">
          {Array.from({ length: addContacts }).map((_, index) => (
            <AddContactDiv
              contact={null}
              index={index}
              handleInputChange={handleInputChange}
              formErrors={formErrors}
              setAddContacts={setAddContacts}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FormFirstRow;
