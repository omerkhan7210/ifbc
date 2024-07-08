import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { addAllRegistrations } from "src/Redux/listingReducer";
export const MyTCFRContext = createContext();

const TCFRDataContext = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const [all, setAll] = useState([]);

  const userDetails = useSelector((state) => state.counter.userDetails);
  const [newData, setNewData] = useState();
  const dispatch = useDispatch();

  const url =
    "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/registrations";
  const { data, isLoading, error } = useQuery(
    "CANDIDATES",
    () => {
      return axios.get(url);
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

  return (
    <MyTCFRContext.Provider
      value={{
        newData,
        loadingError: error,
        loadingTCFR: isLoading,
        filters,
        setFilters,
      }}
    >
      {children}
    </MyTCFRContext.Provider>
  );
};

export default TCFRDataContext;
