import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import { extractMinValue, removeSpecificText } from "src/Utils/SanitizeInput";

const CategorySearch = ({ property, anotherText, normalText }) => {
  const [activeDD, setActiveDD] = useState(false);
  const { listings, filters, setFilters } = useContext(MyContext);
  const [selectedCats, setSelectedCats] = useState(
    (filters && filters[property]) || []
  );

  const handleCatSelection = (cat) => {
    const catLower = cat.toLowerCase();
    let newSelCats = [];
    const isCatSelected = selectedCats.includes(catLower);
    if (isCatSelected) {
      newSelCats = selectedCats.filter((item) => item !== catLower);
    } else {
      newSelCats = [catLower];
    }
    setActiveDD(false);
    setSelectedCats(newSelCats);
  };

  // useEffect(() => {
  //   setFilters({
  //     [property]: selectedCats,
  //   });
  // }, [selectedCats, property, setFilters]);

  const uniqueFranchisedCats =
    property === "investmentRange"
      ? [
          ...new Set(
            listings
              .map((listing) => listing[property])
              .filter(
                (value) => value !== "" && value !== null && value !== undefined
              )
          ),
        ].sort((a, b) => extractMinValue(a) - extractMinValue(b))
      : [
          ...new Set(
            listings
              .map((listing) => listing[property])
              .filter(
                (value) => value !== "" && value !== null && value !== undefined
              )
          ),
        ].sort((a, b) => a.localeCompare(b));
  return (
    <div className="relative w-full group flex flex-col gap-2 mb-5">
      <button
        className="py-2.5 px-3 w-full md:text-sm text-site hover:bg-custom-heading-color hover:text-white focus:bg-custom-heading-color focus:text-white transition-all duration-300 bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
        onClick={() => setActiveDD(!activeDD)}
      >
        {selectedCats.length > 0 ? anotherText : normalText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 5.25l7.5 7.5 7.5-7.5m-15 6l7.5 7.5 7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={`absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] shadow-lg w-full ${
          activeDD ? "h-96" : "h-0 opacity-0"
        } duration-200 bg-white  border border-dimmed text-sm md:text-sm overflow-y-scroll`}
      >
        {uniqueFranchisedCats.map((cat, index) => {
          const length = listings.filter(
            (listing) => listing[property] === cat
          ).length;
          return (
            <div className="flex justify-between items-center" key={index}>
              <div
                onClick={() => handleCatSelection(cat)}
                className={`text-black w-full block cursor-pointer hover:bg-slate-300 hover:text-link px-3 py-2`}
              >
                <span>
                  {cat}
                  {property !== "investmentRange" && `(${length})`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySearch;
