import { useContext, useEffect, useState } from "react";
import ListingsColumns from "./ListingsColumns";
import BarLoader from "src/Animations/BarLoader";
import Pagination from "./Pagination";
import { MyContext } from "src/Context/ListingDataContext";


const AllListings = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const { filters,paginationListings, setPaginationListings, listings, loading, activeListings, showActiveListings,setFilters } = useContext(MyContext)
  const [filterListings,setFilterListings] = useState()
  const totalNoOfListings = window.innerWidth < 768 ? 10 : 25

  
  useEffect(()=>{
    const searchKeyWordV = window.location.href.split("?")[1]
    if(searchKeyWordV){
      // Update the filters state with the search keyword
    setFilters({
      ...filters,
      search: searchKeyWordV
    });
    }
  },[])

  useEffect(() => {
    
    if (listings.length > 0) {
      const filteredListings = filters ? listings.filter(listing => {
        // Check if there is a search key in the filters array of objects
        const hasSearchKey = filters.hasOwnProperty("search");
        const hasCategoryKey = filters.hasOwnProperty("category");
        const hasUnitKey = filters.hasOwnProperty("units");
        const hasMembershipsKey = filters.hasOwnProperty("memberships");

        // Apply your filtering logic here based on the filters prop
        let matchesSearch = true;
        let matchesCategory = true;
        let matchesUnit = true;
        let matchesMemberships = true;

        if (hasSearchKey && filters.search !== '' ) {
          matchesSearch = listing.name?.toLowerCase().includes(filters.search.toLowerCase());
        } 
        if (hasCategoryKey && filters.category.length > 0) {
          filters.category.map((filterCat) => {
            matchesCategory = listing.category?.toLowerCase().includes(filterCat.toLowerCase());
          })
        }
        if (hasUnitKey && filters.units !== '') {
          matchesUnit = listing.franchisedUnits?.toLowerCase().includes(filters.units.toLowerCase());
        }
        if (hasMembershipsKey && filters.memberships !== '') {
          matchesMemberships = listing.memberships?.toLowerCase().includes(filters.memberships.toLowerCase());
        }

        return matchesSearch && matchesCategory && matchesUnit && matchesMemberships;
      }) : listings;
      setFilterListings(filteredListings)

      // Get current listings
      const indexOfLastListing = currentPage * totalNoOfListings;
      const indexOfFirstListing = indexOfLastListing - totalNoOfListings;
      let currentListings = filteredListings.slice(indexOfFirstListing, indexOfLastListing);
      setPaginationListings(currentListings)
    }
  }, [listings,currentPage,filters])

  // Change page
  const paginate = (pageNumber) => {
    window.scrollTo({ top: window.innerWidth < 768 ? 1150 : 0, behavior: "smooth" });
    setCurrentPage(pageNumber)
  };

  return (

    loading ?
      <div className="grid place-content-center">
        <BarLoader />
      </div>

      :
      <>
        <div id="listing-columns" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {showActiveListings &&
            paginationListings &&
            paginationListings
              .filter(listing => activeListings?.includes(listing.name))
              .map((listing, index) => (
                <ListingsColumns key={index} index={index} listing={listing} />
              ))}
          {!showActiveListings  && paginationListings?.map((listing, index) => (
            <ListingsColumns key={index} index={index} listing={listing} />
          ))}
         
        </div>
        {/* Pagination */}

        <Pagination currentPage={currentPage} totalPages={Math.ceil(filterListings?.length / totalNoOfListings)} onPageChange={paginate} />
      </>

  )
}

export default AllListings
