import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const [cands, setCands] = useState([]);
  const [loading, setLoading] = useState(false);

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
        cands,
        setCands,
        loading,
      }}
    >
      {children}
    </MyCandContext.Provider>
  );
};

export default CandidatesDataContext;
