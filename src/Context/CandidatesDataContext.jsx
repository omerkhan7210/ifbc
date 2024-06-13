import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const [cands, setCands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.UserType
      : null;

  useEffect(() => {
    setLoading(true);

    const url = `http://siddiqiventures-001-site3.ktempurl.com/showcandidates.aspx`;

    // Make a GET request to fetch the data
    axios
      .get(url)
      .then((response) => {
        // Handle successful response
        if (response.data.length > 0 && response.status === 200) {
          setCands(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <MyCandContext.Provider
      value={{
        role,
        cands,
        setCands,
        loading,
        filters,
        setFilters,
        userDetails,
      }}
    >
      {children}
    </MyCandContext.Provider>
  );
};

export default CandidatesDataContext;
