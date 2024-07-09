/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

// Step 1: Create a new context
export const MyContext = createContext();

// Step 3: Define a context provider component
const ListingDataContext = ({ children }) => {
  const [showActiveListings, setShowActiveListings] = useState(false);
  const [filters, setFilters] = useState(null);
  const [listings, setListings] = useState([]);
  const activeListings = useSelector((state) => state.counter.activeListings);
  const [paginationListings, setPaginationListings] = useState();
  const userDetails = useSelector((state) => state.counter.userDetails);
  const token = useSelector((state) => state.counter.token);
  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const endPoint = role !== "N" ? "Listings" : "ListingsView";
  const url = `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/listingsmstr`;
  const { data, isLoading, error, isFetching } = useQuery("FRANCHISE", () => {
    return axios.get(url);
  });

  useEffect(() => {
    if (!isLoading && data) {
      const normalFLS = data?.data.filter(
        (data) => data.listingMemberships !== ""
      );
      setListings(normalFLS);
    }
    // Make a GET request to fetch the data
  }, [data, isLoading]); // Empty dependency array to run once on component mount

  return (
    <MyContext.Provider
      value={{
        userDetails,
        listings,
        loading: isLoading,
        loadingError: error,
        activeListings,
        filters,
        setFilters,
        showActiveListings,
        setShowActiveListings,
        paginationListings,
        setPaginationListings,
        token,
        role,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ListingDataContext;
