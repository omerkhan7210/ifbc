import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const token = useSelector((state) => state.counter.token);
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);

  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const url = `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/candidates`;
  const { data, isLoading, error } = useQuery(
    "CANDIDATES",
    () => {
      return axios.get(url);
    },
    {
      cacheTime: 86400 * 30,
      select: (data) => {
        const filtered = data?.data.filter(
          (cand) => cand.agentUserId === userDetails?.docId
        );
        return filtered;
      },
    }
  );
  return (
    <MyCandContext.Provider
      value={{
        role,
        cands: (!isLoading && data) || [],
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
