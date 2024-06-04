/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "src/Context/ListingDataContext";

const ListingsColumns = ({ listing, index }) => {
  const { activeListings, setActiveListings, allowed } = useContext(MyContext);

  // Use a regular expression to find the investment range
  const investmentRangeMatch = listing?.InvestmentRange?.match(
    /Investment Range: \$[\d,]+ - \$[\d,]+/
  );

  const investmentRange = investmentRangeMatch
    ? investmentRangeMatch[0]?.split(":")[1]
    : "";

  const isActive = activeListings?.includes(listing.name) ? true : false;

  const handleCardClick = () => {
    setActiveListings((prevActiveListings) => {
      const isListingActive = prevActiveListings.includes(listing.name);

      if (isListingActive) {
        return prevActiveListings.filter((item) => item !== listing.name);
      } else {
        return [...prevActiveListings, listing.name];
      }
    });
  };

  return (
    <div className="relative">
      {isActive && (
        <div
          className={`container absolute ${
            isActive ? "" : "left-3 top-1"
          } w-16 p-4`}
        >
          <input
            type="checkbox"
            id="cbx2"
            style={{ display: "none" }}
            checked={true}
          />
          <label htmlFor="cbx2" className="check scale-150 relative z-50">
            <svg
              width="30px"
              className="border-green-200 border-2 bg-white rounded-full"
              height="30px"
              viewBox="0 0 18 18"
            >
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
              <polyline points="1 9 7 14 15 4" />
            </svg>
          </label>
        </div>
      )}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: isActive ? 0.9 : 1,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: isActive ? 0.95 : 0.9,
          transition: { duration: 1, delay: index * 0.1 },
        }}
        whileTap={{ scale: isActive ? 0.9 : 1 }}
        onClick={handleCardClick} // Correctly call handleCardClick here
        className="flex flex-col gap-8 bg-white rounded-3xl p-5 cursor-pointer shadow-[1px_1px_5px_grey] "
      >
        <div
          id="image-container"
          className="w-full h-full relative flex justify-center"
        >
          <img
            src={
              listing.imgUrl
                ? "/" + listing.imgUrl
                : "/images/listing-placeholder-img.png"
            }
            alt={listing.name}
            className="object-contain h-44 w-64"
          />

          <div
            id="text-content"
            className="absolute flex justify-center top-40 w-full"
          >
            {allowed && investmentRange && (
              <p className="bg-white py-2 text-xs font-bold px-4 rounded-full shadow-lg">
                Cash Required: {investmentRange}
              </p>
            )}
          </div>
        </div>

        <div
          id="heading-container"
          className="flex flex-col items-center justify-center"
        >
          <h1
            className={`text-custom-heading-color font-bold text-center text-sm lg:text-lg`}
          >
            {listing.name}
          </h1>

          {/* added anchor */}
          <a
            href={`/listings-details/${listing?.name
              ?.toLowerCase()
              .split(" ")
              .join("-")}`}
            className="bg-custom-dark-blue w-full mt-3 py-2 text-white text-xs font-semibold rounded-full flex justify-between items-center px-5"
          >
            <span>See More Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ListingsColumns;
