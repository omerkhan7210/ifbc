import { useContext, useEffect, useLayoutEffect, useState } from "react";
import AllListings from "./AllListings";
import ListingsFilter from "./Filters/ListingsFilter";
import { MyContext } from "src/Context/ListingDataContext";
import SearchingComponent from "./SearchingComponent";
import PageTransition from "src/Animations/PageTransition";
import RelatedListings from "src/Globals/RelatedListings";

const ExtraTools = ({ setShow, show }) => {
  const {
    handleTools,
    activeListings,
    setActiveListings,
    showActiveListings,
    setShowActiveListings,
    paginationListings,
    role,
  } = useContext(MyContext);

  const selectAllListings = () => {
    // Get an array of all listing names currently displayed on the page
    const allListingNames = paginationListings?.map((listing) => listing.name);
    // Update the activeListings state to include all listing names
    setActiveListings(allListingNames);
  };

  return (
    <div className="grid grid-cols-12 gap-3 items-center">
      {role == "C" && (
        <div
          id="form-button-container"
          className="flex flex-col gap-2 w-full justify-between h-full sm:col-span-6 col-span-12 lg:col-span-4"
        >
          <button
            className="candidate-btn w-full"
            value="tc"
            onClick={() => setTCheck(true)}
          >
            Territory Checks
          </button>
          <button
            className="candidate-btn w-full"
            value="fr"
            onClick={() => setformalRegCheck(true)}
          >
            Formal Registrations
          </button>
        </div>
      )}

      <div
        className={`grid grid-cols-12 col-span-12 sm:col-span-6 ${
          role === "C" ? "lg:col-span-4" : "lg:col-span-6"
        } w-full gap-3 sm:gap-3 `}
      >
        {role == "C" && (
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

        <button
          className={`${
            activeListings.length > 0
              ? role == "C"
                ? "col-span-6"
                : "col-span-12"
              : "col-span-12"
          } border-2 border-green-900 hover:bg-green-900 hover:text-white transition-all duration-500 py-2 px-5 w-full md:w-auto tertiary-button text-green-900`}
          onClick={selectAllListings}
        >
          Select All
        </button>

        {activeListings.length > 0 && (
          <button
            className={`${
              role == "C" ? "col-span-6" : "col-span-12"
            } border-2 border-red-900 hover:bg-red-900 hover:text-white transition-all duration-500 py-2 px-5  w-full md:w-auto tertiary-button text-red-900`}
            onClick={() => {
              setShowActiveListings(false);
              setActiveListings([]);
            }}
          >
            Clear All
          </button>
        )}
      </div>

      <div
        className={`col-span-12 ${
          role === "C" ? "lg:col-span-4" : "lg:col-span-6"
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
    </div>
  );
};

const MainListings = ({ setShow, show }) => {
  const { loading } = useContext(MyContext);

  useLayoutEffect(() => {
    if (loading) {
      document.querySelector("html").style.overflowY = "hidden";
      document.querySelector("html").style.height = "100%";
    }
    if (!loading) {
      document.querySelector("html").style.overflow = "auto";
      document.querySelector("html").style.height = "auto";
    }
  }, [loading]);

  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background: "url(/images/banners/alllistings.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-4xl md:text-7xl text-white font-bold text-center z-20">
          FRANCHISES SEARCH
        </h1>
      </div>
      <main
        className="	 pt-10 px-6 mx-auto w-full grid grid-cols-12 gap-6 relative"
        id="main"
      >
        <div className="col-span-12">
          <ExtraTools setShow={setShow} show={show} />
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
