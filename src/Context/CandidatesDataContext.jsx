import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const token = useSelector((state) => state.counter.token);
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [cands, setCands] = useState([]);

  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const url = `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/candidates`;
  const { data, isLoading, error } = useQuery("CANDIDATES", () => {
    return axios.get(url);
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
        filters,
        setFilters,
        userDetails,
        token,
      }}
    >
      {children}
    </MyCandContext.Provider>
  );
};

export default CandidatesDataContext;
