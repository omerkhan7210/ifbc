import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllRegistrations } from "src/Redux/listingReducer";
export const MyTCFRContext = createContext();

const TCFRDataContext = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const [tcs, setTcs] = useState([]);
  const [frs, setFrs] = useState([]);
  const [all, setAll] = useState([]);
  const reduxRegistrations = useSelector(
    (state) => state.counter.registrations
  );
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
      const transformedData = all.flatMap((item) => {
        const listingsIdsArray = sanitizelistingsIds(item.listingsIds);

        return listingsIdsArray.map((listingId) => ({
          ...item,
          listingsIds: listingId,
        }));
      });
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
        if (response.data.length > 0) {
          const TC = response.data.filter((data) => data.docType === "TC");
          const FR = response.data.filter((data) => data.docType === "FR");
          dispatch(addAllRegistrations(response.data));
          setAll(response.data);
          setTcs(TC);
          setFrs(FR);
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
    if (reduxRegistrations && reduxRegistrations.length > 0) {
      setNewData(reduxRegistrations);
    } else {
      getAllRegistrations();
    }
  }, [reduxRegistrations]); // Empty dependency array to run once on component mount

  return (
    <MyTCFRContext.Provider
      value={{
        newData,
        all,
        frs,
        loadingError,
        loadingTCFR,
        tcs,
        filters,
        setFilters,
      }}
    >
      {children}
    </MyTCFRContext.Provider>
  );
};

export default TCFRDataContext;
