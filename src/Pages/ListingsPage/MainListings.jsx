import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AllListings from "./AllListings";
import ListingsFilter from "./Filters/ListingsFilter";
import { MyContext } from "src/Context/ListingDataContext";
import SearchingComponent from "./SearchingComponent";
import PageTransition from "src/Animations/PageTransition";
import RelatedListings from "src/Globals/RelatedListings";
import { useDispatch } from "react-redux";
import {
  decrementAllActiveListing,
  incrementActiveListing,
} from "src/Redux/listingReducer";

import ToolInformation from "src/Popups/ToolInformation";
import ToolEmail from "src/Popups/ToolEmail";
import ToolComparison from "src/Popups/ToolComparison";

const ExtraTools = ({ setShow, setRegistrationType }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const {
    activeListings,
    showActiveListings,
    setShowActiveListings,
    paginationListings,
    role,
  } = useContext(MyContext);
  const dispatch = useDispatch();

  const selectAllListings = () => {
    // Get an array of all listing names currently displayed on the page
    paginationListings?.map((listing) =>
      dispatch(incrementActiveListing(listing.docId))
    );

    // Update the activeListings state to include all listing names
  };

  const handleOpenRegistration = (type) => {
    setRegistrationType(type);
    setShow(true);
  };

  const handleTools = (e) => {
    // getting selected value from select
    const value = e.target.value;
    //select krne pr value arhi

    if (value === "email") {
      setShowEmail(true);
    }
    // issi tarah baaki dono ki bhi states true hongy
    else if (value === "info") {
      setShowInformation(true);
    } else if (value === "comparison") {
      setShowComparison(true);
    }
  };
  return (
    <div className="grid grid-cols-12 gap-3 items-center">
      {role && role !== "N" && (
        <div
          id="form-button-container"
          className="flex flex-col gap-2 w-full justify-between h-full sm:col-span-6 col-span-12 lg:col-span-4"
        >
          <button
            className="candidate-btn w-full"
            value="tc"
            onClick={() => handleOpenRegistration("TC")}
          >
            Territory Checks
          </button>
          <button
            className="candidate-btn w-full"
            value="fr"
            onClick={() => handleOpenRegistration("FR")}
          >
            Formal Registrations
          </button>
        </div>
      )}

      <div
        className={`grid grid-cols-12 col-span-12  ${
          role && role !== "N" ? "lg:col-span-4 " : "lg:col-span-12"
        } w-full gap-3 sm:gap-3 `}
      >
        {role && role !== "N" && (
          <div className="col-span-12">
            <select onChange={handleTools} className="candidate-select w-full">
              <option value="">Tools</option>
              <option value="email"> Email Selected Franchises </option>
              <option value="info"> Create Information Packet </option>
              <option value="comparison"> Create Comparison Report </option>
              <option value="2-min"> Download 2-Min Drill Packet </option>
              <option value="one-sheet"> Download One Sheet Packets </option>
            </select>
          </div>
        )}

        <ToolEmail showEmail={showEmail} setShowEmail={setShowEmail} />

        <ToolInformation
          showInformation={showInformation}
          setShowInformation={setShowInformation}
        />
        <ToolComparison
          showComparison={showComparison}
          setShowComparison={setShowComparison}
        />

        {role && role !== "N" && (
          <button
            className={`${
              activeListings.length > 0
                ? role && role !== "N"
                  ? "col-span-6"
                  : "col-span-12"
                : "col-span-12"
            } border-2 border-green-900 hover:bg-green-900 hover:text-white transition-all duration-500 py-2 px-5 w-full md:w-auto tertiary-button text-green-900`}
            onClick={selectAllListings}
          >
            Select All
          </button>
        )}

        {role && role !== "N" && activeListings.length > 0 && (
          <button
            className={`${
              role && role !== "N" ? "col-span-6" : "col-span-12"
            } border-2 border-red-900 hover:bg-red-900 hover:text-white transition-all duration-500 py-2 px-5  w-full md:w-auto tertiary-button text-red-900`}
            onClick={() => {
              setShowActiveListings(false);
              dispatch(decrementAllActiveListing());
            }}
          >
            Clear All
          </button>
        )}
      </div>

      {role && role !== "N" && (
        <div
          className={`col-span-12 ${
            role && role !== "N" ? "lg:col-span-4" : "lg:col-span-6"
          } md:flex md:mb-4 mb-0 flex-col h-full ${
            activeListings && activeListings.length > 0
              ? "justify-between "
              : "justify-start"
          } `}
        >
          <SearchingComponent />

          {activeListings && activeListings.length > 0 && (
            <button
              type="button"
              onClick={() => setShowActiveListings(!showActiveListings)}
              className={`border-2 border-custom-blue  hover:bg-custom-blue  hover:text-white transition-all duration-500 py-2 px-5 w-full whitespace-nowrap mr-4 ${
                showActiveListings
                  ? "text-white bg-custom-blue"
                  : "text-custom-blue"
              }`}
            >
              My Selection <span> ({activeListings.length}) </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const MainListings = ({ setShow, setRegistrationType }) => {
  return (
    <PageTransition>
      <main
        className="	   grid grid-cols-12 gap-6 relative px-10 py-5"
        id="main"
      >
        <div className="col-span-12">
          <ExtraTools
            setShow={setShow}
            setRegistrationType={setRegistrationType}
          />
        </div>

        <div
          id="left-sidebar"
          className="md:col-span-3  sm:col-span-6 col-span-12 my-5 bg-white"
        >
          <ListingsFilter />
        </div>

        <div
          id="right-sidebar"
          className="md:col-span-9 sm:col-span-6 col-span-12 my-5"
        >
          <AllListings />
        </div>
      </main>

      <RelatedListings />
    </PageTransition>
  );
};

export default MainListings;
