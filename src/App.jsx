import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "src/Globals/Header";
import Footer from "src/Globals/Footer";
import MobileNav from "src/Globals/MobileNav";
import FLSEmail from "src/Popups/FLSEmail";
import ListingDataContext from "src/Context/ListingDataContext";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import CandidateSideBar from "./Pages/GlobalPageSections/CandidateSideBar";
import { useDispatch, useSelector } from "react-redux";
import { generateUuid } from "./Redux/listingReducer";
import RouteRenderer from "./RouteRenderer";
import TCFRDataContext from "./Context/TCFRDataContext";
import RegisterationPopup from "./Popups/RegistrationPopup";

const App = () => {
  const dispatch = useDispatch();
  const [mobileActive, setMobileActive] = useState(false);
  const ifLogin = useSelector((state) => state.counter.ifLogin);
  const role = useSelector((state) => state.counter.role);

  const [show, setShow] = useState("");
  const [registrationType, setRegistrationType] = useState("");
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
          setShow={setShow}
          setRegistrationType={setRegistrationType}
        />
      </AnimatePresence>
      <ListingDataContext>
        <CandidatesDataContext>
          <TCFRDataContext>
            {(loc.pathname.includes("listings") ||
              loc.pathname.includes("candidate") ||
              loc.pathname.includes("messages")) &&
              role !== "A" && <CandidateSideBar />}
            <RegisterationPopup
              setShow={setShow}
              show={show}
              registrationType={registrationType}
            />
          </TCFRDataContext>
        </CandidatesDataContext>
        <FLSEmail />
      </ListingDataContext>
      {ifLogin && <Footer />}
    </>
  );
};

export default App;
