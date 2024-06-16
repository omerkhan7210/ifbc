import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyTCFRContext } from "src/Context/TCFRDataContext";
import { MyContext } from "src/Context/ListingDataContext";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import FormatRawDate from "src/Utils/FormatRawDate";
import { Link } from "react-router-dom";
import BarLoader from "src/Animations/BarLoader";

const CandidateSideBar = () => {
  const [active, setActive] = useState(false);
  const { newData, loadingTCFR } = useContext(MyTCFRContext);
  const { listings, loading } = useContext(MyContext);
  const { cands } = useContext(MyCandContext);

  useEffect(() => {
    document.querySelector("html").style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <>
      {active && (
        <div
          id="bg-on-active"
          className="fixed z-[9999] w-full h-full top-0 bg-custom-heading-color/50"
        />
      )}
      <motion.div
        initial={{ y: "100%" }}
        animate={{
          y: active ? 0 : "100%",
          transformOrigin: "bottom",
          transition: { duration: 1, type: "spring", bounce: 0.1 },
        }}
        id="right-side-container"
        className={`bg-custom-heading-color fixed bottom-0  right-0 w-full h-[60%] transition-[width] z-[99999] drop-shadow-md`}
      >
        <button
          onClick={() => setActive(!active)}
          className={`absolute -top-16 right-0 bg-custom-heading-color px-4 py-5 flex items-center justify-center rounded-tl w-64 text-white z-[99999]`}
        >
          <div class="text-white text-base font-bold flex items-center">
            No Candidate Selected{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="-0.5 0 25 25"
              class="w-4 h-4 stroke-white ml-2"
              fill="none"
            >
              <path
                d="M2.5 8.1728L11.4706 16.6434C11.75 16.9081 12.1912 16.9081 12.4853 16.6434L21.5 8.15808"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </button>
        {!loading && !loadingTCFR ? (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: 1, ease: "backInOut" },
            }}
            className="side-bar-main-div p-10 flex flex-col gap-4 text-center h-full overflow-y-scroll"
          >
            <h2 className="side-bar-first-heading text-2xl">Recent Activity</h2>

            <div
              id="activity-grid-container"
              className="max-lg:block grid lg:max-xl:grid-cols-2 xl:max-2xl:grid-cols-3 2xl:grid-cols-4 gap-3"
            >
              {newData &&
                newData.length > 0 &&
                newData.map((card) => (
                  <Card card={card} listings={listings} cands={cands} />
                ))}
            </div>
          </motion.div>
        ) : (
          <div className="w-full flex justify-center h-full items-center">
            <BarLoader bgcolor={"white"} />
          </div>
        )}
      </motion.div>
    </>
  );
};

const Card = ({ card, cands, listings }) => {
  const [filteredListing, setFilteredListing] = useState();
  const [filteredCand, setFilteredCand] = useState();
  useEffect(() => {
    if (listings && listings.length > 0) {
      const filtered = listings.filter(
        (listing) => listing.DocId == card.ListingsIds
      );
      if (filtered) {
        setFilteredListing(filtered[0]);
      }
    }
  }, [listings]);
  useEffect(() => {
    if (cands && cands.length > 0) {
      const filteredCand = cands.filter(
        (cand) => cand.DocId === card.CandidateId
      );
      if (filteredCand) {
        setFilteredCand(filteredCand[0]);
      }
    }
  }, [cands]);
  return (
    <div className=" bg-white rounded-b-lg border-t-8 border-custom-grey px-4 py-5 flex flex-col justify-around shadow-md">
      <div id="status-container" className="flex justify-between">
        <h1 className="candidate-territory">
          {card.DocType.trim() === "TC"
            ? "Territory Check"
            : "Formal Registration"}
        </h1>
        <h1
          className={`${card.Status.toLowerCase() === "pending" ? "candidate-pending" : "candidate-available"}`}
        >
          {card.Status}
        </h1>
      </div>
      <div className="flex justify-center items-center w-full mt-4 gap-3">
        <img src={`/${filteredListing?.imgUrl}`} alt="smash" className="w-14" />
        <p className="text-lg font-bold text-custom-heading-color">
          {filteredListing?.name}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="py-3">
          <p className="text-md font-bold  text-custom-dark-blue ">
            Candidate Information
          </p>
          <ul>
            <li className="text-sm text-custom-grey">
              {filteredCand?.FirstName} {filteredCand?.LastName}
            </li>
            <li className="text-sm text-custom-grey">
              {filteredCand?.TerritoryCity} {filteredCand?.TerritoryState},{" "}
              {filteredCand?.TerritoryZipcode}
            </li>
            <li className="text-sm text-custom-grey"> {FormatRawDate(card)}</li>
          </ul>
        </div>
        <div className="py-3 ml-8">
          <p className="text-md font-bold  text-custom-dark-blue ">
            Company Information
          </p>
          <ul>
            <li className="text-sm text-custom-grey">
              {filteredListing?.username}
            </li>
            <li className="text-sm text-custom-grey underline">
              <a href={"tel:" + filteredListing?.phone}>
                {filteredListing?.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm flex gap-2 items-center justify-between">
        <Link to={`/inbox/${card?.DocId}`} className="candidate-btn w-full">
          MESSAGE
        </Link>
        <button className="candidate-btn w-full">SEND RE-CHECK</button>
      </div>
    </div>
  );
};

export default CandidateSideBar;
