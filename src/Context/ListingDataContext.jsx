/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import ScrollToTop from "src/Globals/ScrollToTop";
import { motion } from "framer-motion";

// Step 1: Create a new context
export const MyContext = createContext();

// Step 3: Define a context provider component
const ListingDataContext = ({ children }) => {
  const [showActiveListings, setShowActiveListings] = useState(false);
  const [filters, setFilters] = useState(null);
  const activeListings = useSelector((state) => state.counter.activeListings);
  const [paginationListings, setPaginationListings] = useState();
  const userDetails = useSelector((state) => state.counter.userDetails);
  const token = useSelector((state) => state.counter.token);
  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const endPoint = role !== "N" ? "Listings" : "ListingsView";
  const url = `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/${endPoint}`;

  const { data, isLoading, isFetching, isError, error } = useQuery(
    "franchises",
    () => axios.get(url),
    { cacheTime: 86400 }
  );
  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: isLoading ? [0, 1, 1, 1] : [0, 1, 1, 0],
      //scaleY: [0, 1, 1, 0],
    },
  };
  if (isLoading) {
    return (
      <>
        <ScrollToTop />
        <motion.div
          className="origin-bottom h-full w-full fixed top-0 left-0 z-[99999999] bg-custom-heading-color"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            id="image-container-transition"
            className="h-screen w-full grid place-items-center sticky top-0"
          >
            <motion.img
              animate={{
                opacity: isLoading ? [0, 1, 1, 1] : [0, 1, 1, 0],
                //opacity: [0, 1, 1, 0],
                transition: { duration: 1, delay: 0.1 },
              }}
              src="/images/logo/IFBC 3.png"
              alt="KPEG"
              className="w-72 md:w-96"
            />
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <MyContext.Provider
      value={{
        userDetails,
        listings: data?.data,
        loading: isLoading,
        fetching: isFetching,
        loadingError: error,
        activeListings,
        filters,
        setFilters,
        showActiveListings,
        setShowActiveListings,
        paginationListings,
        setPaginationListings,
        token,
        role,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ListingDataContext;
