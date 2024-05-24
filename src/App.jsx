import Footer from "src/Globals/Footer";
import Header from "src/Globals/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainListings from "src/Pages/ListingsPage/MainListings";
import RelatedListings from "src/Globals/RelatedListings";
import { MyContext } from "src/Context/ListingDataContext";
import { useContext, useState } from "react";
import FLSEmail from "src/Popups/FLSEmail";
import TerritoryCheck from "src/Popups/Registrations/TerritoryCheck";
import FormalReg from "src/Popups/Registrations/FormalReg";
import MobileNav from "src/Globals/MobileNav"; // Ensure only one MobileNav import
import Login from "src/Authentication/Login"; // Assuming you have a Login component
import MainDetails from "src/Pages/ListingsDetails/MainDetails";
import MainHome from "src/Pages/HomePage/MainHome";

function App() {
  const { tCheck, formalRegCheck } = useContext(MyContext);
  const [mobileActive, setMobileActive] = useState(false);
  const [ifLogin, setIfLogin] = useState(localStorage.getItem('ifLogin'));

  return (
    
    ifLogin ? (
      <>
      <header id="main-header">
        <Header mobileActive={mobileActive} setMobileActive={setMobileActive} />
        {mobileActive && <MobileNav setMobileActive={setMobileActive} />}
      </header>
      <Routes>
        <Route path="/listings" element={<MainListings />} />
        <Route path="/listings-details/:name" element={<MainDetails />} />
        <Route path="/" element={<MainHome />} />
      </Routes>
      <RelatedListings />
      {tCheck && <TerritoryCheck />}
      {formalRegCheck && <FormalReg />}
      <FLSEmail />
      <Footer />
    </>
    ):(
      <Login setIfLogin={setIfLogin}/> 
    )
        
      
  );
}

export default App;
