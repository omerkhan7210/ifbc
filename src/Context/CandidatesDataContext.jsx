import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const token = useSelector((state) => state.counter.token);
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [candIds, setCandIds] = useState([]);

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

  const fetchCandidatesByIds = async (candidateIds) => {
    const promises = candidateIds.map((id) =>
      axios.get(
        `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/candidates/${id}`
      )
    );
    const results = await Promise.all(promises);
    return results.map((result) => result.data);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const ids = data.map((data) => data.docId);
      const uniqueIds = [...new Set(ids)];
      setCandIds(uniqueIds);
    }
  }, [data]);
  console.log(data);

  const { data: newDataNames, isLoading: isLoadingNames } = useQuery(
    ["candidates", candIds],
    () => fetchCandidatesByIds(candIds),
    {
      enabled: candIds.length > 0,
      cacheTime: 86400 * 3,
      select: (data) => {
        return data.map((cand) => ({
          name: cand.firstName + " " + cand.lastName,
          value: cand.docId,
        }));
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
        newDataNames,
        isLoadingNames,
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
