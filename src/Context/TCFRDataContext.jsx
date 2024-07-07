import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllRegistrations } from "src/Redux/listingReducer";
export const MyTCFRContext = createContext();

const TCFRDataContext = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const [all, setAll] = useState([]);
  const reduxRegistrations = useSelector(
    (state) => state.counter.registrations
  );
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [loadingTCFR, setLoading] = useState();
  const [loadingError, setLoadingError] = useState(false);
  const [newData, setNewData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (all && all.length > 0) {
      const sanitizelistingsIds = (listingsIds) => {
        // Remove any non-numeric and non-comma characters
        const sanitized = listingsIds.replace(/[^0-9,]/g, "");
        return sanitized.split(",").filter((id) => id.trim() !== "");
      };

      const transformedData = all.flatMap((item, index) => {
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
  }, [all]);

  const getAllRegistrations = async () => {
    setLoading(true);
    const url =
      "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/registrations";

    // Make a GET request to fetch the data
    axios
      .get(url)
      .then((response) => {
        // Handle successful response
        if (response.status === 200) {
          const allData = response.data.filter(
            (data) => data.agentId === userDetails.docId
          );

          dispatch(addAllRegistrations(response.data));
          setAll(allData);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle error
        setLoadingError(true);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (reduxRegistrations) {
      setNewData(reduxRegistrations);
    } else {
      getAllRegistrations();
    }
  }, [reduxRegistrations]); // Empty dependency array to run once on component mount

  return (
    <MyTCFRContext.Provider
      value={{
        newData,
        loadingError,
        loadingTCFR,
        filters,
        setFilters,
      }}
    >
      {children}
    </MyTCFRContext.Provider>
  );
};

export default TCFRDataContext;
