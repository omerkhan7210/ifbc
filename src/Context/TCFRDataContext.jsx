import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { addAllRegistrations } from "src/Redux/listingReducer";
export const MyTCFRContext = createContext();

const TCFRDataContext = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [newData, setNewData] = useState();
  const dispatch = useDispatch();
  const [candIds, setCandIds] = useState([]);

  const url = `https://backend.ifbc.co/api`;

  const { data, isLoading, error } = useQuery(
    "MESSAGES",
    () => {
      return axios.get(`${url}/registrations`);
    },
    {
      cacheTime: 86400,
      select: (data) => {
        const allData = data?.data.filter(
          (msg) => msg.agentId === userDetails.docId
        );
        return allData;
      },
    }
  );

  useEffect(() => {
    if (data && data.length > 0) {
      const sanitizelistingsIds = (listingsIds) => {
        // Remove any non-numeric and non-comma characters
        const sanitized = listingsIds.replace(/[^0-9,]/g, "");
        return sanitized.split(",").filter((id) => id.trim() !== "");
      };

      const transformedData = data.flatMap((item) => {
        const listingsIdsArray = sanitizelistingsIds(item.listingsIds);

        return listingsIdsArray.map((listingId, index) => ({
          ...item,
          listingsIds: listingId,
          serialNumber: index + 1, // Add serial number starting from 1
        }));
      });

      dispatch(addAllRegistrations(transformedData));
      setNewData(transformedData);
    }
  }, [data]);

  const fetchCandidatesByIds = async (candidateIds) => {
    const promises = candidateIds.map((id) =>
      axios.get(`${url}/candidates/${id}`)
    );
    const results = await Promise.all(promises);
    return results.map((result) => result.data);
  };

  useEffect(() => {
    if (newData && newData.length > 0) {
      const ids = newData.map((data) => data.candidateId);
      const uniqueIds = [...new Set(ids)];
      setCandIds(uniqueIds);
    }
  }, [newData]);

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
    <MyTCFRContext.Provider
      value={{
        newData,
        loadingError: error,
        loadingTCFR: isLoading,
        newDataNames,
        isLoadingNames,
        filters,
        setFilters,
      }}
    >
      {children}
    </MyTCFRContext.Provider>
  );
};

export default TCFRDataContext;
