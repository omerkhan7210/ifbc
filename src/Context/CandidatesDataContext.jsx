import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllCandidates } from "src/Redux/listingReducer";
export const MyCandContext = createContext();

const CandidatesDataContext = ({ children }) => {
  const reduxCands = useSelector((state) => state.counter.candidates);
  const token = useSelector((state) => state.counter.token);

  const [cands, setCands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);

  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const dispatch = useDispatch();

  const getAllCandidates = async () => {
    setLoading(true);

    const url = `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/candidates`;

    // Make a GET request to fetch the data
    axios
      .get(url)
      .then((response) => {
        // Handle successful response
        if (response.data.length > 0 && response.status === 200) {
          dispatch(addAllCandidates(response.data));
          setCands(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (reduxCands && reduxCands.length > 0) {
      setCands(reduxCands);
    } else {
      getAllCandidates();
    }
  }, [reduxCands]);

  return (
    <MyCandContext.Provider
      value={{
        role,
        cands,
        setCands,
        loading,
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
