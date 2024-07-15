import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "src/Context/ListingDataContext";

const SearchingSection = () => {
  const [searchConfigs, setSearchConfigs] = useState([]);
  const ref = useRef();
  const { setFilters, role } = useContext(MyContext);
  const [selectedCats, setSelectedCats] = useState([]);
  const [activeDD, setActiveDD] = useState(false);
  const dropdownRef = useRef(null);
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
  const history = useNavigate();
  useEffect(() => {
    if (!role || role === "N") {
      const filterDataa = [
        {
          anotherText: "Select Category",
          normalText: "Category",
          property: "category",
          color: "#e3e4e6",
        },
        {
          anotherText: "Select Investment Range",
          normalText: "Investment Range",
          property: "investmentRange",
          color: "#e3e4e6",
        },
      ];
      setSearchConfigs(filterDataa);
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
          anotherText: "Select Franchise Units",
          normalText: "Franchise Units",
          property: "franchisedUnits",
        },

        {
          anotherText: "Select Investment Range",
          normalText: "Investment Range",
          property: "investmentRange",
        },
      ];
      setSearchConfigs(filterDataa);
    }
  }, [role]);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    const searchValue = ref.current.value;
    const uniqueFilters = selectedCats.reduce((acc, current) => {
      return { ...acc, ...current };
    }, {});

    if (searchValue === "") {
      setFilters({ ...uniqueFilters });
    } else {
      setFilters({
        search: [searchValue],
      });
    }

    history("/listings");
  };

  return (
    <form
      id="searching-contianer"
      className="grid grid-cols-12 gap-2   p-5"
      ref={dropdownRef}
      onSubmit={handleSearchInputChange}
    >
      <div className="relative col-span-12 md:col-span-4  flex items-center">
        <input
          type="search"
          id="search-field"
          placeholder="Search Any Listing"
          ref={ref}
          className="block w-full px-2 h-12 text-sm rounded-lg  text-black pr-10  outline-none bg-white"
        />

        <button className=" absolute right-2.5 top-5.5 w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 487.95 487.95"
          >
            <path d="m481.8 453-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"></path>
          </svg>
        </button>
      </div>
      {searchConfigs.map((config, index) => (
        <SearchDropdown
          key={index}
          config={config}
          setSelectedCats={setSelectedCats}
          selectedCats={selectedCats}
          activeDD={activeDD}
          setActiveDD={setActiveDD}
        />
      ))}
      <button
        type="submit"
        className="max-md:col-span-12 md:col-span-2 w-full  overflow-hidden font-medium transition-all duration-500 bg-[#1256c4] h-12 text-center text-white rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

const SearchDropdown = ({
  config,
  setSelectedCats,
  selectedCats,
  setActiveDD,
  activeDD,
}) => {
  const { property, anotherText, color } = config;
  const { loading } = useContext(MyContext);

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

  const investmentRange = generateRangeArray(10000, 1000000, 100000, true);

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
    "Moving,Storage & Junk Removal",
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

  let uniqueItems = [];
  if (property === "franchiseFee") {
    uniqueItems = franchiseFee;
  } else if (property === "franchisedUnits") {
    uniqueItems = franchisedUnits;
  } else if (property === "investmentRange") {
    uniqueItems = investmentRange;
  } else if (property === "category") {
    uniqueItems = categories;
  } else if (property === "yearEstablished") {
    uniqueItems = yearEstablished;
  }

  const handleRemoveCat = () => {
    setActiveDD(false);
    setSelectedCats([]);
  };

  const handleDropdown = (property) => {
    if (activeDD === property) {
      setActiveDD("");
    } else {
      setActiveDD(property);
    }
  };

  return (
    <div
      className="relative w-full group flex flex-col gap-2 col-span-12 md:col-span-3 h-12 rounded-lg "
      style={{ background: `${color}` }}
    >
      <button
        className={`h-full px-4 text-sm w-full capitalize text-[#000000]  transition-all duration-250  focus:outline-none focus:ring-0 peer flex items-center justify-between font-semibold  ${
          selectedCats &&
          selectedCats[property] &&
          selectedCats[0][property] !== ""
            ? "text-xs"
            : ""
        }`}
        onClick={() => handleDropdown(property)}
        type="button"
      >
        {selectedCats &&
        selectedCats.length > 0 &&
        Object.keys(selectedCats[0])[0] === property ? (
          <>
            {selectedCats[0][property]}
            <svg
              onClick={handleRemoveCat}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </>
        ) : (
          <>
            {anotherText !== "" && anotherText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
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
          </>
        )}
      </button>
      <div
        className={`absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] shadow-lg w-full rounded-lg mt-1 ${
          activeDD === property ? "h-[300px]" : "h-0 opacity-0"
        } duration-200 bg-white border border-dimmed text-sm md:text-sm overflow-x-hidden overflow-scroll ]`}
      >
        {!loading &&
          uniqueItems &&
          uniqueItems.map((item, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div
                onClick={() => {
                  setActiveDD(false);
                  setSelectedCats([{ [property]: [item] }]);
                }}
                className="text-black w-full block cursor-pointer hover:text-link px-3 
              py-2 hover:bg-slate-200"
              >
                <span>{item}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchingSection;
