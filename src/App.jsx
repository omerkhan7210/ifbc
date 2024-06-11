import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
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
import CheckOutForm from "./Pages/CartPage/CheckOutForm";
import Franchise from "./Pages/GlobalPageSections/Franchise";
import { useDispatch } from "react-redux";
import { generateUuid } from "./Redux/Features/Counter/counterSlice";
import Profile from "./Pages/UserAccount/Profile";
import MainCandidateProfile from "./Pages/CandidatePages/CandidateList/MainCandidateProfile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateUuid());
  }, [dispatch]);
  const { tCheck, formalRegCheck, ifLogin, setIfLogin, loading } =
    useContext(MyContext);
  const [mobileActive, setMobileActive] = useState(false);
  const loc = useLocation();
  useLayoutEffect(() => {
    if (loading) {
      document.querySelector("html").style.overflowY = "hidden";
      document.querySelector("html").style.height = "100%";
    }
    if (!loading) {
      document.querySelector("html").style.overflow = "auto";
      document.querySelector("html").style.height = "auto";
    }
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {ifLogin ? (
        <>
          <header id="main-header" className="sticky top-0 z-[999]">
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
            <Route
              path="/profile"
              element={
                <CandidatesDataContext>
                  <Profile />
                </CandidatesDataContext>
              }
            />
            <Route path="/checkout" element={<CheckOutForm />} />
            <Route
              path="/candidate-profile/:name"
              element={
                <CandidatesDataContext>
                  <MainCandidateProfile />
                </CandidatesDataContext>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <CandidateSideBar />

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
