import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "src/Globals/Header";
import Footer from "src/Globals/Footer";
import MobileNav from "src/Globals/MobileNav";
import FLSEmail from "src/Popups/FLSEmail";
import TerritoryCheck from "src/Popups/TerritoryCheck";
import FormalReg from "src/Popups/FormalReg";
import ListingDataContext from "src/Context/ListingDataContext";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import CandidateSideBar from "./Pages/GlobalPageSections/CandidateSideBar";
import { useDispatch, useSelector } from "react-redux";
import { generateUuid } from "./Redux/listingReducer";

const App = () => {
  const dispatch = useDispatch();
  const [mobileActive, setMobileActive] = useState(false);
  const ifLogin = useSelector((state) => state.counter.ifLogin);
  const role = useSelector((state) => state.counter.role);

  const [showF, setShowF] = useState("");
  const [showT, setShowT] = useState("");
  const loc = useLocation();

  useEffect(() => {
    dispatch(generateUuid());
    dispatch;
  }, [dispatch]);

  return (
    <>
      {ifLogin && (
        <ListingDataContext>
          <Header
            mobileActive={mobileActive}
            setMobileActive={setMobileActive}
          />
          {mobileActive && <MobileNav setMobileActive={setMobileActive} />}
        </ListingDataContext>
      )}
      <AnimatePresence mode="wait">
        <RouteRenderer
          isAuthenticated={ifLogin}
          setShowF={setShowF}
          setShowT={setShowT}
          showF={showF}
          showT={showT}
        />
      </AnimatePresence>
      <ListingDataContext>
        {(loc.pathname.includes("listings") ||
          loc.pathname.includes("candidate")) &&
          role !== "C" && <CandidateSideBar />}
        <CandidatesDataContext>
          <TerritoryCheck setShow={setShowT} show={showT} />
          <FormalReg setShow={setShowF} show={showF} />
        </CandidatesDataContext>
        <FLSEmail />
      </ListingDataContext>
      {ifLogin && <Footer />}
    </>
  );
};

export default App;
