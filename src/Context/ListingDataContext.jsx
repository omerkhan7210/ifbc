/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Step 1: Create a new context
export const MyContext = createContext();

// Step 3: Define a context provider component
const ListingDataContext = ({ children }) => {
  const [showActiveListings, setShowActiveListings] = useState(false);
  const [filters, setFilters] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState();
  const [loadingError, setLoadingError] = useState();
  const activeListings = useSelector((state) => state.counter.activeListings);
  const [paginationListings, setPaginationListings] = useState();
  const userDetails = useSelector((state) => state.counter.userDetails);
  const ifLogin = useSelector((state) => state.counter.ifLogin);
  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.UserType
      : null;

  useEffect(() => {
    setLoading(true);
    const url = "http://siddiqiventures-001-site3.ktempurl.com/all_list.aspx";

    // Make a GET request to fetch the data
    axios
      .get(url)
      .then((response) => {
        // Handle successful response
        if (response.data.length > 0) {
          const normalFLS = response.data.filter(
            (data) => data.Memberships !== null
          );
          setListings(normalFLS);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle error
        setLoadingError(true);
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run once on component mount

  return (
    <MyContext.Provider
      value={{
        userDetails,
        listings,
        loading,
        loadingError,
        activeListings,
        filters,
        setFilters,
        showActiveListings,
        setShowActiveListings,
        paginationListings,
        setPaginationListings,
        ifLogin,
        role,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ListingDataContext;
