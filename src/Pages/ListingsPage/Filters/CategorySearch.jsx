import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";

const CategorySearch = ({
  property,
  anotherText,
  normalText,
  selectedCats,
  setSelectedCats,
}) => {
  const [activeDD, setActiveDD] = useState(false);
  const { listings, filters, setFilters } = useContext(MyContext);
  const ref = useRef();
  const [propName, setPropName] = useState("");

  const handleSelectDD = (cat, e) => {
    setPropName(e.target.id);
    const catLower = cat.toLowerCase();
    let newSelCats = [];
    const isCatSelected = selectedCats.includes(catLower);
    if (isCatSelected) {
      newSelCats = selectedCats.filter((item) => item !== catLower);
    } else {
      newSelCats = [...selectedCats, catLower];
    }
    setSelectedCats(newSelCats);
  };

  // Use useEffect to log selectedCats after it updates
  useEffect(() => {
    // Update the filters state with the selected categories
    if (selectedCats.length > 0) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [propName]: [...selectedCats],
      }));
    }
  }, [selectedCats, normalText]);

  const handleRemoveCat = (cat) => {
    const catLower = cat.toLowerCase();

    // Update the filters state with the remaining selected categories
    setFilters((prevFilters) => ({
      ...prevFilters,
      [propName]: selectedCats.filter((item) => item !== catLower),
    }));
  };

  const uniqueFranchisedCats = [
    ...new Set(
      listings
        .map((listing) => listing[property])
        .filter(
          (value) => value !== "" && value !== null && value !== undefined
        )
    ),
  ];

  return (
    <div className="relative w-full group flex flex-col gap-2 mb-5 ">
      <button
        className="py-2.5 px-3 w-full md:text-sm text-site hover:bg-custom-heading-color hover:text-white focus:bg-custom-heading-color focus:text-white transition-all duration-300  bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
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
        } duration-200  bg-white dark:bg-gray-800 border border-dimmed text-sm md:text-sm  overflow-scroll`}
      >
        {uniqueFranchisedCats.map((cat, index) => {
          const isActive = selectedCats.includes(cat.toLowerCase());

          return (
            <div className="flex justify-between items-center">
              <div
                key={index}
                id={property}
                ref={ref}
                onClick={(e) => handleSelectDD(cat, e)}
                className={`${
                  isActive
                    ? "border-l-4 border-custom-heading-color"
                    : "text-black"
                } w-full block cursor-pointer hover:bg-slate-300 dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 `}
              >
                <span>
                  {cat} (
                  {
                    listings.filter((listing) => listing[property] === cat)
                      .length
                  }
                  )
                </span>
              </div>
              {isActive && (
                <span
                  className="text-red-950 font-bold cursor-pointer"
                  onClick={() => handleRemoveCat(cat?.toLowerCase())}
                >
                  X
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySearch;
