import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyTCFRContext } from "src/Context/TCFRDataContext";
import { MyContext } from "src/Context/ListingDataContext";
import { MyCandContext } from "src/Context/CandidatesDataContext";
import FormatRawDate from "src/Utils/FormatRawDate";
import { Link, NavLink } from "react-router-dom";
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
        <ToggleButton active={active} setActive={setActive} />
        <ActivityGridContainer
          listings={listings}
          cands={cands}
          newData={newData}
          active={active}
          loading={loading}
          loadingTCFR={loadingTCFR}
        />
      </motion.div>
    </>
  );
};

const ToggleButton = ({ active, setActive }) => {
  return (
    <button
      onClick={() => setActive(!active)}
      className={`absolute -top-16 right-0 bg-custom-heading-color px-4 py-5 flex items-center justify-center rounded-tl w-64 text-white z-[99999]`}
    >
      <div className="text-white text-base font-bold flex items-center">
        No Candidate Selected
        <motion.svg
          initial={{ rotate: 180 }}
          animate={{ rotate: active ? 0 : 180 }}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="-0.5 0 25 25"
          className="w-4 h-4 stroke-white ml-2"
          fill="none"
        >
          <path
            d="M2.5 8.1728L11.4706 16.6434C11.75 16.9081 12.1912 16.9081 12.4853 16.6434L21.5 8.15808"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </motion.svg>
      </div>
    </button>
  );
};

const ActivityGridContainer = ({
  loading,
  loadingTCFR,
  active,
  newData,
  cands,
  listings,
}) => {
  const [newDataNames, setNewDataNames] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCandId, setSelectedCandId] = useState("");

  useEffect(() => {
    if (newData && newData.length > 0) {
      const candids = new Set(newData.map((data) => data.candidateId));
      const uniqueids = Array.from(candids);
      const filteredCands = cands.filter((cand) =>
        uniqueids.includes(cand.docId)
      );
      const names = filteredCands.map((filteredCand) => ({
        value: filteredCand.docId,
        name: filteredCand.firstName + " " + filteredCand.lastName,
      }));
      setNewDataNames(names);
    }
  }, [newData]);

  useEffect(() => {
    if (selectedCandId && selectedCandId !== "0") {
      const filteredData = newData.filter(
        (data) => data.candidateId == selectedCandId
      );
      setFilteredData(filteredData.length > 0 ? filteredData : newData);
    } else {
      setFilteredData(newData);
    }
  }, [newData, selectedCandId]);

  return !loading && !loadingTCFR ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: active ? 1 : 0,
        transition: { duration: 1, ease: "backInOut" },
      }}
      className="side-bar-main-div p-10 flex flex-col gap-6 text-center h-full overflow-y-scroll"
    >
      <div id="top-candidate-sidebar" className="flex justify-between ">
        <h2 className="side-bar-first-heading text-3xl">Recent Activity</h2>

        <div id="select-candidate-container" className="flex gap-5">
          <NavLink to="/new-candidate" className="candidate-inverted-btn">
            Add New Candidate
          </NavLink>
          <select
            className="w-64 px-2 candidate-select capitalize"
            name="candidate-names"
            id="candidate-names"
            onChange={(e) => setSelectedCandId(e.target.value)}
          >
            <option value="0">No Candidates Selected</option>
            {newDataNames &&
              newDataNames.length > 0 &&
              newDataNames.map((name, index) => (
                <option key={index} value={name.value}>
                  {name.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div
        id="activity-grid-container"
        className="max-lg:block grid lg:max-xl:grid-cols-2 xl:max-2xl:grid-cols-3 2xl:grid-cols-4 gap-3"
      >
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((card, index) => (
            <Card key={index} card={card} listings={listings} cands={cands} />
          ))
        ) : (
          <h1>No Registrations</h1>
        )}
      </div>
    </motion.div>
  ) : (
    <div className="w-full flex justify-center h-full items-center">
      <BarLoader bgcolor={"white"} />
    </div>
  );
};

const Card = ({ card, cands, listings }) => {
  const [filteredListing, setFilteredListing] = useState();
  const [filteredCand, setFilteredCand] = useState();
  useEffect(() => {
    if (listings && listings.length > 0) {
      const filtered = listings.find(
        (listing) => listing.docId == card.listingsIds
      );
      setFilteredListing(filtered || null);
    }
  }, [listings, card.listingsIds]);

  useEffect(() => {
    if (cands && cands.length > 0) {
      const filtered = cands.find((cand) => cand.docId === card.candidateId);
      setFilteredCand(filtered || null);
    }
  }, [cands, card.candidateId]);

  return (
    <div
      key={card}
      className=" bg-white rounded-b-lg border-t-8 border-custom-grey px-4 py-5 flex flex-col justify-around shadow-md"
    >
      <div id="status-container" className="flex justify-between">
        <h1 className="candidate-territory">
          {card.docType.trim() === "TC"
            ? "Territory Check"
            : "Formal Registration"}
        </h1>
        <h1
          className={`${card.status.toLowerCase() === "pending" ? "candidate-pending" : "candidate-available"}`}
        >
          {card.status}
        </h1>
      </div>
      <div className="flex justify-center items-center w-full mt-4 gap-3">
        <img
          src={`/${filteredListing?.listingImageUrl}`}
          alt="smash"
          className="w-14"
        />
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
              {filteredCand?.firstName} {filteredCand?.lastName}
            </li>
            <li className="text-sm text-custom-grey">
              {filteredCand?.territoryCity} {filteredCand?.territoryState},{" "}
              {filteredCand?.territoryZipcode}
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
        <Link to={`/inbox/${card?.docId}`} className="candidate-btn w-full">
          MESSAGE
        </Link>
        <button className="candidate-btn w-full">SEND RE-CHECK</button>
      </div>
    </div>
  );
};

export default CandidateSideBar;
