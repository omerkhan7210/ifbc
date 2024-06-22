/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllListings } from "src/Redux/listingReducer";

// Step 1: Create a new context
export const MyContext = createContext();

// Step 3: Define a context provider component
const ListingDataContext = ({ children }) => {
  const [showActiveListings, setShowActiveListings] = useState(false);
  const [filters, setFilters] = useState(null);
  const reduxListings = useSelector((state) => state.counter.listings);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState();
  const [loadingError, setLoadingError] = useState();
  const activeListings = useSelector((state) => state.counter.activeListings);
  const [paginationListings, setPaginationListings] = useState();
  const userDetails = useSelector((state) => state.counter.userDetails);
  const token = useSelector((state) => state.counter.token);
  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;
  const dispatch = useDispatch();

  const getAllListings = async () => {
    setLoading(true);
    const url =
      "https://siddiqiventures-001-site4.ktempurl.com/api/ListingsView";
    const responseData = await axios
      .get(url)
      .then(async (response) => {
        // Handle successful response
        if (response.data.length > 0) {
          setLoading(false);
          return response.data;
        }
      })
      .catch((error) => {
        // Handle error
        setLoadingError(true);
        console.error("Error fetching data:", error);
      });
    return responseData;
  };

  useEffect(() => {
    const GetData = async () => {
      if (reduxListings && reduxListings.length > 0) {
        setListings(reduxListings);
      } else {
        const listings = await getAllListings();
        if (listings) {
          const normalFLS = await listings.filter(
            (data) => data.listingMemberships !== ""
          );
          dispatch(addAllListings(normalFLS));
          setListings(normalFLS);
        }
      }
    };
    GetData();

    // Make a GET request to fetch the data
  }, [listings]); // Empty dependency array to run once on component mount

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
        token,
        role,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ListingDataContext;
