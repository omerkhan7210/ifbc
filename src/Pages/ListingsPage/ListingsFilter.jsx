import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import SearchingComponent from "./SearchingComponent";

const ListingsFilter = () => {
  const { filters, setFilters, role, token } = useContext(MyContext);
  const [filterData, setFilterData] = useState([]);
  const [activeDD, setActiveDD] = useState(false);
  const dropdownRef = useRef(null);

  const roleCheck = !role || (role === "N" && !token);
  useEffect(() => {
    if (roleCheck) {
      const filterDataa = [
        {
          anotherText: "Select Category",
          normalText: "Category",
          property: "category",
        },

        {
          anotherText: "Select Investment Range",
          normalText: "Investment Range",
          property: "investmentRange",
        },
        // {
        //   anotherText: "Select Territories",
        //   normalText: "Territories",
        //   property: "territories",
        // },
        {
          anotherText: "Select Year Established",
          normalText: "Year Established",
          property: "yearEstablished",
        },
      ];
      setFilterData(filterDataa);
    } else {
      const filterDataa = [
        {
          anotherText: "Select Category",
          normalText: "Category",
          property: "category",
        },
        {
          anotherText: "Select Franchise Fee",
          normalText: "Franchise Fee",
          property: "franchiseFee",
        },
        {
          anotherText: "Select Investment Range",
          normalText: "Investment Range",
          property: "investmentRange",
        },

        {
          anotherText: "Select Owned Units",
          normalText: "Owned Units",
          property: "ownedUnits",
        },
        {
          anotherText: "Select Projected New Units",
          normalText: "Projected New Units",
          property: "projectedNewUnits",
        },

        {
          anotherText: "Select Month Cash",
          normalText: "Month Cash",
          property: "monthCash",
        },

        {
          anotherText: "Select Liquidity",
          normalText: "Liquidity",
          property: "liquidity",
        },

        {
          anotherText: "Select Year Established",
          normalText: "Year Established",
          property: "yearEstablished",
        },
      ];
      setFilterData(filterDataa);
    }
  }, [role]);

  // Check if any filters are not empty
  const hasActiveFilters =
    filters &&
    Object.values(filters).some((filterArray) => filterArray.length > 0);
  // Extract active filters
  const activeFilters =
    filters &&
    Object.entries(filters)?.filter(([key, value]) => value.length > 0);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDD("");
    }
  };

  useEffect(() => {
    if (activeDD) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDD]);

  // const handleRemoveFilter = (key, value) => {
  //   setFilters((prevFilters) => ({
  //     [key]: prevFilters[key].filter((filterValue) => filterValue !== value),
  //   }));
  // };
  return (
    <div id="main-filter-container" ref={dropdownRef}>
      {roleCheck && (
        <div className="w-full my-5">
          <SearchingComponent setFilters={setFilters} />
        </div>
      )}
      {hasActiveFilters && (
        <div className="mb-4">
          <button
            onClick={() => setFilters({})}
            className="font-bold cursor-pointer hover:bg-red-800 hover:text-white transition flex items-center gap-1 border-2 border-red-800 px-2 justify-between w-full not-prose uppercase text-red-950"
          >
            Clear All Filters <span className="text-red">X</span>
          </button>
          <div className="mt-2">
            <h3 className="font-semibold">Active Filters:</h3>
            <ul className="divide-y-2">
              {activeFilters.map(([key, values]) =>
                values.map((value) => (
                  <li
                    key={`${key}-${value}`}
                    className="text-gray-700 flex items-center capitalize justify-between py-2 text-xs"
                  >
                    <span className="font-bold">
                      {key.replace(/([A-Z])/g, " $1").trim()} :{" "}
                      {value.replace(/^.*?:/, "").trim()}
                    </span>
                    {/* <button
                      className="ml-2 text-red-600 font-bold cursor-pointer"
                      onClick={() => handleRemoveFilter(key, value)}
                    >
                      X
                    </button> */}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}

      {filterData.map((filter, index) => (
        <CategorySearch
          key={index}
          anotherText={filter.anotherText}
          normalText={filter.normalText}
          property={filter.property}
          activeDD={activeDD}
          setActiveDD={setActiveDD}
        />
      ))}
    </div>
  );
};

const CategorySearch = ({
  property,
  anotherText,
  normalText,
  activeDD,
  setActiveDD,
}) => {
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

  const handleDropdown = (property) => {
    if (activeDD === property) {
      setActiveDD("");
    } else {
      setActiveDD(property);
    }
  };

  const franchiseFee = generateRangeArray(1000, 150000, 10000, true);

  const franchisedUnits = generateRangeArray(0, 1000, 100, false);

  const investmentRange = generateRangeArray(10000, 300000, 30000, true);

  const ownedUnits = generateRangeArray(0, 200, 50, false);

  const projectedNewUnits = generateRangeArray(0, 200, 50, false);
  const liquidity = generateRangeArray(10000, 300000, 10000, true);
  const yearEstablished = generateRangeArray(1950, 2020, 5, false);
  const monthCash = generateRangeArray(5000, 150000, 20000, true);

  const categories = [
    "Advertising",
    "Automotive",
    "Beauty & Spa",
    "Business Management & Coaching",
    "Business Services",
    "Child Education, STEM & Tutoring",
    "Child Services & Products",
    "Cleaning: Residential & Commercial",
    "Computer Technology",
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
    "Moving, Storage & Junk Removal",
    "Painting",
    "Pet Care & Grooming",
    "Pest Control",
    "Print, Copy & Mailing",
    "Real Estate",
    "Restoration",
    "Retail",
    "Security",
    "Senior Care: Medical/Non-Medical Option",
    "Signs",
    "Special Event Planning",
    "Sports & Recreation",
    "Staffing",
    "Travel Planning",
    "Vending",
  ];

  const territories = [
    "United States",
    "Canada: Willing To Register",
    "International",
    "Canada: Registered",
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
  } else if (property === "territories") {
    uniqueFranchisedCats = territories;
  }

  return (
    <div className="relative w-full group flex flex-col gap-2 mb-5">
      <button
        className="py-2.5 px-3 w-full md:text-sm text-site hover:bg-custom-heading-color hover:text-white focus:bg-custom-heading-color focus:text-white transition-all duration-300 bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
        onClick={() => handleDropdown(property)}
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
          activeDD === property ? "h-48" : "h-0 opacity-0"
        } duration-200 bg-white  border border-dimmed text-sm md:text-sm overflow-auto`}
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

export default ListingsFilter;
