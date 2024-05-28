/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Step 1: Create a new context
export const MyContext = createContext();

// Step 3: Define a context provider component
const ListingDataContext = ({ children }) => {
  const [showActiveListings, setShowActiveListings] = useState(false);
  const [filters, setFilters] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState();
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showComparisonPopup, setShowComparisonPopup] = useState(false);
  const [activeListings, setActiveListings] = useState([]);
  const [tCheck, setTCheck] = useState(false);
  const [formalRegCheck, setformalRegCheck] = useState(false);
  const [paginationListings, setPaginationListings] = useState();
  const [ifLogin, setIfLogin] = useState(
    JSON.parse(localStorage.getItem("ifLogin")) || false
  );

  const handleTools = (event) => {
    const value = event.target.value;
    if (value === "email") {
      setShowEmailPopup(true);
    } else if (value === "info") {
      setShowInfoPopup(true);
    } else if (value === "comparison") {
      setShowComparisonPopup(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        `http://siddiqiventures-001-site3.ktempurl.com/all_list.aspx`
      );
    // Make a GET request to fetch the data
    axios
      .get(url)
      .then((response) => {
        // Handle successful response

        if (response.data.length > 0) {
          const normalFLS = response.data.filter(
            (data) => data.Memberships !== undefined
          );
          setListings(normalFLS);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run once on component mount

  return (
    <MyContext.Provider
      value={{
        setShowComparisonPopup,
        setShowInfoPopup,
        showInfoPopup,
        showComparisonPopup,
        listings,
        loading,
        handleTools,
        setShowEmailPopup,
        showEmailPopup,
        activeListings,
        setActiveListings,
        tCheck,
        setTCheck,
        formalRegCheck,
        setformalRegCheck,
        filters,
        setFilters,
        showActiveListings,
        setShowActiveListings,
        paginationListings,
        setPaginationListings,
        ifLogin,
        setIfLogin,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ListingDataContext;
