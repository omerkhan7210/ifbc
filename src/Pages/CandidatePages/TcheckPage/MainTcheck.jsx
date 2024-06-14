import React from "react";
import PageTransition from "src/Animations/PageTransition";

const MainTcheck = () => {
  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background: "url(/images/banners/tcheck.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-4xl md:text-7xl text-white font-bold text-center z-20text-white font-bold text-center z-20">
          Territory Check
        </h1>
      </div>
      <div className=" my-20 max-w-7xl mx-auto flex flex-col gap-5">
        <div
          id="filter-options"
          className="grid grid-cols-1 md:grid-cols-3 gap-3 content-center"
        >
          <div id="compose-btn-container">
            <button className=" flex justify-center items-center gap-3 w-full candidate-btn">
              COMPOSE
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </div>
          <div id="inbox-container">
            <select
              name="inbox-dropdown"
              id="inbox-dropdown"
              className="candidate-select w-full"
            >
              <option value="inbox">Inbox</option>
              <option value="Archived">Archived</option>
              <option value="Trash">Trash</option>
            </select>
          </div>
          <div id="filter-container">
            <select
              name="filterby-dropdown"
              id="filterby-dropdown"
              className="candidate-select w-full"
            >
              <option value="">Filter By</option>
              <option value="Favorites">Favorites</option>
              <option value="Messages">Messages</option>
              <option value="Territory">Territory Checks</option>
              <option value="Formal">Formal Registration</option>
            </select>
          </div>
        </div>
        <div
          id="buttons-container"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <div
            id="bulkaction-container"
            className="flex gap-5 items-center justify-center"
          >
            <button
              id="select-all-btn"
              className="candidate-btn w-full flex justify-center items-center gap-3"
            >
              Select All
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
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </button>

            <select
              name="markread-dropdown"
              id="markread-dropdown"
              className="candidate-select w-full"
            >
              <option value="">Bulk Options</option>
              <option value="Markread">Mark read</option>
              <option value="Archive">Archive</option>
              <option value="Delete">Delete</option>
            </select>
          </div>
          {/* <div id="search">
          <input
            type="text"
            placeholder="Search"
            className="p-3 border-2 border-gray-200 rounded-sm"
          />
        </div> */}
          <div id="read-unread-btns" className="flex gap-3 justify-end">
            <button className="candidate-btn w-full flex justify-center items-center gap-3">
              READ
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <button className="candidate-btn w-full flex justify-center items-center gap-3">
              UNREAD
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
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="cards-container"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </PageTransition>
  );
};

const Card = () => {
  return (
    <div className=" bg-white rounded-b-lg border-t-8 border-custom-grey px-4 py-5 flex flex-col justify-around shadow-md">
      <div id="status-container" className="flex justify-end">
        <h1 className="candidate-pending">Status</h1>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-xl font-bold text-custom-heading-color">
          Smash My Trash
        </p>
      </div>
      <div className="flex justify-between  py-3 ">
        <div className="py-3  flex flex-col items-center">
          <p className="text-md font-bold  text-custom-dark-blue ">
            Candidate Information
          </p>
          <ul className="flex flex-col items-center">
            <li className="text-sm text-custom-grey">Nick Hart</li>
            <li className="text-sm text-custom-grey">Fresno CA 93711</li>
            <li className="text-sm text-custom-grey">05/30/2024 10:01 am</li>
          </ul>
        </div>
        <div className="py-3  flex flex-col items-center">
          <p className="text-md font-bold  text-custom-dark-blue ">
            Franchise Information
          </p>
          <ul className="flex flex-col items-center">
            <li className="text-sm text-custom-grey">David Curnich</li>
            <li className="text-sm text-custom-grey">317-601-7247</li>
          </ul>
        </div>
      </div>
      <div id="message">
        <p className="text-md font-bold  text-custom-dark-blue text-center">
          Territory Check for Nick Hart & Smash My Trash sent by Harjeet Tiwana
        </p>
      </div>
    </div>
  );
};

// const SearchingInput = () => {
//   const ref = useRef();
//   const { filters, setFilters } = useContext(MyCandContext);
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const handleSearchInputChange = () => {
//     const keyword = ref.current.value;
//     setSearchKeyword(keyword);

//     // Update the filters state with the search keyword
//     setFilters({
//       ...filters,
//       search: [keyword],
//     });
//   };

//   return (
//     <div className="relative w-full">
//       <input
//         type="search"
//         id="search-field"
//         placeholder="Search Any Candidate"
//         value={searchKeyword}
//         ref={ref}
//         onChange={handleSearchInputChange}
//         className="block w-full p-3 text-sm text-black pr-10 outline-none bg-gray-200"
//       />

//       <button
//         className=" absolute right-2.5 top-4 w-4 h-4"
//         onClick={handleSearchInputChange}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlSpace="preserve"
//           viewBox="0 0 487.95 487.95"
//         >
//           <path d="m481.8 453-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"></path>
//         </svg>
//       </button>
//     </div>
//   );
// };
export default MainTcheck;
