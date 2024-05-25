import { useContext, useEffect, useState } from "react";
import ListingsColumns from "./ListingsColumns";
import BarLoader from "src/Animations/BarLoader";
import Pagination from "./Pagination";
import { MyContext } from "src/Context/ListingDataContext";

const AllListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    filters,
    paginationListings,
    setPaginationListings,
    listings,
    loading,
    activeListings,
    showActiveListings,
    setFilters,
  } = useContext(MyContext);
  const [filterListings, setFilterListings] = useState();
  const totalNoOfListings = window.innerWidth < 768 ? 10 : 25;

  const filterKeys = [
    "search",
    "category",
    "units",
    "memberships",
    "FranchiseFee",
    "InvestmentRange",
    "Item19",
    "Liquidity",
    "Memberships",
    "MinimumNetWorth",
    "MonthCash",
    "Multiple",
    "NationalAdvertising",
    "NumberofEmployees",
    "OwnedUnits",
    "PassiveOwnership",
    "ProjectedNewUnits",
    "RampUp",
    "Royalty",
    "RoyaltyDescription",
    "Single",
    "Territories",
    "TypeofBusiness",
    "YearEstablished",
  ];

  useEffect(() => {
    const searchKeyWordV = window.location.href.split("?")[1];

    if (searchKeyWordV) {
      const filterName = searchKeyWordV.split("=")[0];
      const filterProp = searchKeyWordV.split("=")[1];
      const filterPropString = filterProp.split("%20").join(" ").trim();
      if (filterName && filterPropString) {
        // Update the filters state with the search keyword
        setFilters({
          ...filters,
          [filterName]: [filterPropString],
        });
      }
    }
  }, []);

  useEffect(() => {
    if (listings.length > 0) {
      const filteredListings = filters
        ? listings.filter((listing) => {
            return filterKeys.every((key) => {
              if (filters.hasOwnProperty(key) && filters[key] !== "") {
                if (Array.isArray(filters[key])) {
                  return filters[key].some((filterValue) =>
                    listing[key]
                      ?.toLowerCase()
                      .includes(filterValue.toLowerCase())
                  );
                } else {
                  return listing[key]
                    ?.toLowerCase()
                    .includes(filters[key].toLowerCase());
                }
              }
              return true;
            });
          })
        : listings;
      setFilterListings(filteredListings);

      // Get current listings
      const indexOfLastListing = currentPage * totalNoOfListings;
      const indexOfFirstListing = indexOfLastListing - totalNoOfListings;
      let currentListings = filteredListings.slice(
        indexOfFirstListing,
        indexOfLastListing
      );
      setPaginationListings(currentListings);
    }
  }, [listings, currentPage, filters]);

  // Change page
  const paginate = (pageNumber) => {
    window.scrollTo({
      top: window.innerWidth < 768 ? 1150 : 0,
      behavior: "smooth",
    });
    setCurrentPage(pageNumber);
  };

  return loading ? (
    <div className="grid place-content-center">
      <BarLoader />
    </div>
  ) : (
    <>
      <div
        id="listing-columns"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {showActiveListings &&
          paginationListings &&
          paginationListings
            .filter((listing) => activeListings?.includes(listing.name))
            .map((listing, index) => (
              <ListingsColumns key={index} index={index} listing={listing} />
            ))}
        {!showActiveListings &&
          paginationListings?.map((listing, index) => (
            <ListingsColumns key={index} index={index} listing={listing} />
          ))}
      </div>
      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filterListings?.length / totalNoOfListings)}
        onPageChange={paginate}
      />
    </>
  );
};

export default AllListings;
