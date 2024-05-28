import React, { useContext, useState } from "react";
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
import NotFoundPage from "./Pages/NotFoundPage";
import { MyContext } from "src/Context/ListingDataContext";
import Registration from "./Authentication/Registration";

const App = () => {
  const { tCheck, formalRegCheck, ifLogin, setIfLogin } = useContext(MyContext);
  const [mobileActive, setMobileActive] = useState(false);
  const loc = useLocation();

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
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>

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
