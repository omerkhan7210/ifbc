import React, { useContext, useLayoutEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "src/Globals/Header";
import Footer from "src/Globals/Footer";
import MobileNav from "src/Globals/MobileNav";
import RelatedListings from "src/Globals/RelatedListings";
import FLSEmail from "src/Popups/FLSEmail";
import TerritoryCheck from "src/Popups/Registrations/TerritoryCheck";
import FormalReg from "src/Popups/Registrations/FormalReg";
import Login from "src/Authentication/Login";
import MainListings from "src/Pages/ListingsPage/MainListings";
import MainDetails from "src/Pages/ListingsDetails/MainDetails";
import MainHome from "src/Pages/HomePage/MainHome";
import NotFoundPage from "src/Pages/StaticPages/NotFoundPage";
import { MyContext } from "src/Context/ListingDataContext";
import Registration from "src/Authentication/Registration";
import FranchiseOwner from "src/Pages/StaticPages/FranchiseOwner";
import MainAbout from "./Pages/AboutPage/MainAbout";
import MainCandList from "./Pages/CandidatePages/CandidateList/MainCandList";
import MainNewCand from "./Pages/CandidatePages/NewCandidate/MainNewCand";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import CandidateSideBar from "./Pages/GlobalPageSections/CandidateSideBar";

const App = () => {
  const { tCheck, formalRegCheck, ifLogin, setIfLogin, loading } =
    useContext(MyContext);
  const [mobileActive, setMobileActive] = useState(false);
  const loc = useLocation();
  // useLayoutEffect(() => {
  //   if (loading) {
  //     document.querySelector("html").style.overflowY = "hidden";
  //     document.querySelector("html").style.height = "100%";
  //   }
  //   if (!loading) {
  //     document.querySelector("html").style.overflow = "auto";
  //     document.querySelector("html").style.height = "auto";
  //   }
  // }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {ifLogin ? (
        <>
          <header id="main-header">
            <Header
              mobileActive={mobileActive}
              setMobileActive={setMobileActive}
            />
            {mobileActive && <MobileNav setMobileActive={setMobileActive} />}
          </header>

          <Routes key={loc.pathname} location={loc}>
            <Route path="/listings" element={<MainListings />} />
            <Route path="/listings-details/:name" element={<MainDetails />} />
            <Route path="/" element={<MainHome />} />
            <Route path="/about" element={<MainAbout />} />
            <Route path="/franchise-owner" element={<FranchiseOwner />} />

            <Route
              path="/candidate-list"
              element={
                <CandidatesDataContext>
                  <MainCandList />
                </CandidatesDataContext>
              }
            />
            <Route
              path="/new-candidate"
              element={
                <CandidatesDataContext>
                  <MainNewCand />
                </CandidatesDataContext>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <CandidateSideBar />
          <RelatedListings />
          {tCheck && <TerritoryCheck />}
          {formalRegCheck && <FormalReg />}
          <FLSEmail />
          <Footer />
        </>
      ) : (
        <Routes key={loc.pathname} location={loc}>
          <Route path="*" element={<Login setIfLogin={setIfLogin} />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      )}
    </AnimatePresence>
  );
};

export default App;
