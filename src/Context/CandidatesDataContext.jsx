import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const token = useSelector((state) => state.counter.token);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [cands, setCands] = useState([]);

  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const url = `https://backend.ifbc.co/api/candidates`;
  const { data, isLoading, error } = useQuery("CANDIDATES", () => {
    if (role && role !== "N") {
      return axios.get(url);
    }
    return;
  });

  useEffect(() => {
    if (!isLoading && data) {
      const filtered = data?.data?.filter(
        (cand) => cand?.agentUserId === userDetails?.docId
      );
      setCands(filtered);
    }
    // Make a GET request to fetch the data
  }, [data, isLoading]); // Empty dependency array to run once on component mount

  return (
    <MyCandContext.Provider
      value={{
        role,
        cands,
        loading: isLoading,
        loadingError: error,
        userDetails,
        token,
      }}
    >
      {children}
    </MyCandContext.Provider>
  );
};

export default CandidatesDataContext;
