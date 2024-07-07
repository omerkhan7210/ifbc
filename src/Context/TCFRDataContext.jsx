import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const MyTCFRContext = createContext();
import ScrollToTop from "src/Globals/ScrollToTop";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { addAllRegistrations } from "src/Redux/listingReducer";

const TCFRDataContext = ({ children }) => {
  const [filters, setFilters] = useState(null);
  const userDetails = useSelector((state) => state.counter.userDetails);
  const [newData, setNewData] = useState();
  const dispatch = useDispatch();
  const sanitizelistingsIds = (listingsIds) => {
    // Remove any non-numeric and non-comma characters
    const sanitized = listingsIds?.replace(/[^0-9,]/g, "");
    return sanitized.split(",").filter((id) => id.trim() !== "");
  };

  const url =
    "http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/registrations";

  const { data, isLoading, isFetching, isError, error } = useQuery(
    "registrations",
    () => axios.get(url),
    { cacheTime: 86400 }
  );

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      const transformedData = data?.data.flatMap((item) => {
        const listingsIdsArray = sanitizelistingsIds(item.listingsIds);
        return listingsIdsArray.map((listingId) => ({
          ...item,
          listingsIds: listingId,
        }));
      });

      dispatch(addAllRegistrations(transformedData));
    }
  }, [isLoading, data]);

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
    <MyTCFRContext.Provider
      value={{
        newData,
        loadingError: error,
        loadingTCFR: isLoading,
        fetching: isFetching,
        filters,
        setFilters,
      }}
    >
      {children}
    </MyTCFRContext.Provider>
  );
};

export default TCFRDataContext;
