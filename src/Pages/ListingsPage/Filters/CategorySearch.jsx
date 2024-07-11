import React, { useContext, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";

const CategorySearch = ({ property, anotherText, normalText }) => {
  const [activeDD, setActiveDD] = useState(false);
  const { listings, filters, setFilters } = useContext(MyContext);
  const [selectedCats, setSelectedCats] = useState(
    (filters && filters[property]) || []
  );

  const handleCatSelection = (cat, property) => {
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
    setFilters({ [property]: newSelCats });
  };

  const generateRangeArray = (start, end, step, check) => {
    let rangeArray = [];
    for (let i = start; i < end; i += step) {
      let rangeEnd = i + step;
      if (rangeEnd > end) rangeEnd = end; // Ensure the final range does not exceed 'end'

      if (check) {
        rangeArray.push(
          `$${i.toLocaleString()} - $${rangeEnd.toLocaleString()}`
        );
      } else {
        rangeArray.push(`${i} - ${rangeEnd}`);
      }
    }
    if (check) {
      rangeArray.push(`> $${end}`);
    } else {
      rangeArray.push(`> ${end}`);
    }
    return rangeArray;
  };

  const franchiseFee = generateRangeArray(1000, 150000, 10000, true);

  const franchisedUnits = generateRangeArray(0, 1000, 100, false);

  const investmentRange = generateRangeArray(5000, 300000, 10000, true);

  const ownedUnits = generateRangeArray(0, 200, 50, false);

  const projectedNewUnits = generateRangeArray(0, 200, 50, false);
  const liquidity = generateRangeArray(10000, 300000, 10000, true);
  const yearEstablished = generateRangeArray(1950, 2020, 5, false);
  const monthCash = generateRangeArray(5000, 150000, 20000, false);

  const categories = [
    "Advertising",
    "Automotive",
    "Beauty & Spa",
    "Business Management & Coaching",
    "Business Services",
    "Child Education",
    "Child Services & Products",
    "Cleaning: Residential & Commercial",
    "Computer Technology",
    "Copy & Mailing",
    "Distribution Services",
    "Dry Cleaning-Laundry",
    "Financial Services",
    "Fitness",
    "Food & Beverage: Restaurant/QSR/Catering",
    "Food: Coffee/Tea/Smoothies/Sweets",
    "Food: Stores & Catering",
    "Health/Medical",
    "Health/Wellness",
    "Home Improvement",
    "Interior/Exterior Design",
    "Maintenance & Repair",
    "Pet Care & Grooming",
    "Print",
    "Real Estate",
    "Restoration",
    "Retail",
    "Senior Care: Medical/Non-Medical Option",
    "Signs",
    "Special Event Planning",
    "Sports & Recreation",
    "Staffing",
    "STEM & Tutoring",
  ];

  let uniqueFranchisedCats = [];
  if (property === "franchiseFee") {
    uniqueFranchisedCats = franchiseFee;
  } else if (property === "franchisedUnits") {
    uniqueFranchisedCats = franchisedUnits;
  } else if (property === "investmentRange") {
    uniqueFranchisedCats = investmentRange;
  } else if (property === "category") {
    uniqueFranchisedCats = categories;
  } else if (property === "ownedUnits") {
    uniqueFranchisedCats = ownedUnits;
  } else if (property === "projectedNewUnits") {
    uniqueFranchisedCats = projectedNewUnits;
  } else if (property === "liquidity") {
    uniqueFranchisedCats = liquidity;
  } else if (property === "yearEstablished") {
    uniqueFranchisedCats = yearEstablished;
  } else if (property === "monthCash") {
    uniqueFranchisedCats = monthCash;
  }

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
                onClick={() => handleCatSelection(cat, property)}
                className={`text-black w-full block cursor-pointer hover:bg-slate-300 hover:text-link px-3 py-2`}
              >
                <span>{cat}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySearch;
