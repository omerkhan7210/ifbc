import { useContext, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import CategorySearch from "./CategorySearch";

const ListingsFilter = () => {
  const { filters, setFilters } = useContext(MyContext);
  const filterData = [
    {
      anotherText: "Select Category",
      normalText: "Category",
      property: "category",
    },
    {
      anotherText: "Select Franchise Fee",
      normalText: "Franchise Fee",
      property: "FranchiseFee",
    },
    {
      anotherText: "Select Investment Range",
      normalText: "Investment Range",
      property: "InvestmentRange",
    },
    {
      anotherText: "Select Item 19",
      normalText: "Item 19",
      property: "Item19",
    },
    {
      anotherText: "Select Liquidity",
      normalText: "Liquidity",
      property: "Liquidity",
    },
    {
      anotherText: "Select Memberships",
      normalText: "Memberships",
      property: "Memberships",
    },
    {
      anotherText: "Select Minimum Net Worth",
      normalText: "Minimum Net Worth",
      property: "MinimumNetWorth",
    },
    {
      anotherText: "Select Monthly Cash",
      normalText: "Monthly Cash",
      property: "MonthCash",
    },
    {
      anotherText: "Select Multiple",
      normalText: "Multiple",
      property: "Multiple",
    },
    {
      anotherText: "Select National Advertising",
      normalText: "National Advertising",
      property: "NationalAdvertising",
    },
    {
      anotherText: "Select Number of Employees",
      normalText: "Number of Employees",
      property: "NumberofEmployees",
    },
    {
      anotherText: "Select Owned Units",
      normalText: "Owned Units",
      property: "OwnedUnits",
    },
    {
      anotherText: "Select Passive Ownership",
      normalText: "Passive Ownership",
      property: "PassiveOwnership",
    },
    {
      anotherText: "Select Projected New Units",
      normalText: "Projected New Units",
      property: "ProjectedNewUnits",
    },
    {
      anotherText: "Select Ramp Up",
      normalText: "Ramp Up",
      property: "RampUp",
    },
    {
      anotherText: "Select Royalty",
      normalText: "Royalty",
      property: "Royalty",
    },
    {
      anotherText: "Select Royalty Description",
      normalText: "Royalty Description",
      property: "RoyaltyDescription",
    },
    { anotherText: "Select Single", normalText: "Single", property: "Single" },
    {
      anotherText: "Select Territories",
      normalText: "Territories",
      property: "Territories",
    },
    {
      anotherText: "Select Type of Business",
      normalText: "Type of Business",
      property: "TypeofBusiness",
    },
    {
      anotherText: "Select Year Established",
      normalText: "Year Established",
      property: "YearEstablished",
    },
  ];

  const [selectedCats, setSelectedCats] = useState([]);
  // Check if any filters are not empty
  const hasActiveFilters =
    filters &&
    Object.values(filters).some((filterArray) => filterArray.length > 0);
  // Extract active filters
  const activeFilters =
    filters &&
    Object.entries(filters)?.filter(([key, value]) => value.length > 0);

  const handleRemoveFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: prevFilters[key].filter((filterValue) => filterValue !== value),
    }));
  };
  return (
    <div id="main-filter-container" className="sticky top-0">
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
                    <button
                      className="ml-2 text-red-600 font-bold cursor-pointer"
                      onClick={() => handleRemoveFilter(key, value)}
                    >
                      X
                    </button>
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
          selectedCats={selectedCats}
          setSelectedCats={setSelectedCats}
        />
      ))}
    </div>
  );
};

export default ListingsFilter;
