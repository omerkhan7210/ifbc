import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyTCFRContext = createContext();

const TCFRDataContext = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const [tcs, setTcs] = useState([]);
  const [frs, setFrs] = useState([]);
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState();
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = "http://siddiqiventures-001-site3.ktempurl.com/cfalist.aspx";

    // Make a GET request to fetch the data
    axios
      .get(url)
      .then((response) => {
        // Handle successful response
        if (response.data.length > 0) {
          const TC = response.data.filter((data) => data.DocType === "TC");
          const FR = response.data.filter((data) => data.DocType === "FR");
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
  }, []); // Empty dependency array to run once on component mount

  return (
    <MyTCFRContext.Provider
      value={{ all, frs, loadingError, loading, tcs, filters, setFilters }}
    >
      {children}
    </MyTCFRContext.Provider>
  );
};

export default TCFRDataContext;
