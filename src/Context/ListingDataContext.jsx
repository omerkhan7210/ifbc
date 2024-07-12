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
  const activeListings = useSelector((state) => state.counter.activeListings);
  const [paginationListings, setPaginationListings] = useState();
  const userDetails = useSelector((state) => state.counter.userDetails);
  const token = useSelector((state) => state.counter.token);
  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const url = `https://backend.ifbc.co/api/listingsmstr`;
  const { data, isLoading, error, isFetching } = useQuery(
    "FRANCHISE",
    () => {
      return axios.get(url);
    },
    {
      staleTime: 86400 * 30,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      select: (data) => {
        if (!role || role === "N") {
          return data?.data.map((d) => ({
            docId: d.docId,
            name: d.name,
            imgUrl: d.imgUrl,
            yearEstablished: d.yearEstablished,
            category: d.category,
            investmentRange: d.investmentRange,
            shortdescription: d.shortdescription,
          }));
        } else {
          const normalFLS = data?.data?.filter(
            (data) => data.listingMemberships !== ""
          );
          return normalFLS;
        }
      },
    }
  );

  return (
    <MyContext.Provider
      value={{
        userDetails,
        listings: data || [],
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
