import React, { useContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
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
import ListingDataContext, { MyContext } from "src/Context/ListingDataContext";
import Registration from "src/Authentication/Registration";
import FranchiseOwner from "src/Pages/StaticPages/FranchiseOwner";
import MainAbout from "./Pages/AboutPage/MainAbout";
import MainCandList from "./Pages/CandidatePages/CandidateList/MainCandList";
import MainNewCand from "./Pages/CandidatePages/NewCandidate/MainNewCand";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import CandidateSideBar from "./Pages/GlobalPageSections/CandidateSideBar";
import CheckOutForm from "./Pages/CartPage/CheckOutForm";
import { useDispatch, useSelector } from "react-redux";
import { generateUuid } from "./Redux/listingReducer";
import Profile from "./Pages/UserAccount/Profile";
import MainCandidateProfile from "./Pages/CandidatePages/CandidateList/MainCandidateProfile";
import ForgotPassword from "./Authentication/ForgotPassword";
import MainTcheck from "./Pages/CandidatePages/TcheckPage/MainTcheck";

const RouteRenderer = ({ isAuthenticated, show, setShow }) => {
  const authenticatedRoutes = [
    {
      path: "/",
      element: (
        <ListingDataContext>
          <MainHome />
        </ListingDataContext>
      ),
    },
    {
      path: "/listings",
      element: (
        <ListingDataContext>
          <MainListings setShow={setShow} show={show} />
        </ListingDataContext>
      ),
    },
    {
      path: "/listings-details/:name",
      element: (
        <ListingDataContext>
          <MainDetails setShow={setShow} show={show} />
        </ListingDataContext>
      ),
    },
    {
      path: "/about",
      element: <MainAbout />,
    },
    {
      path: "/franchise-owner",
      element: <FranchiseOwner />,
    },
    {
      path: "/candidate-list",
      element: (
        <CandidatesDataContext>
          <MainCandList />
        </CandidatesDataContext>
      ),
    },
    {
      path: "/new-candidate",
      element: (
        <CandidatesDataContext>
          <MainNewCand />
        </CandidatesDataContext>
      ),
    },
    {
      path: "/territory-checks",
      element: (
        <CandidatesDataContext>
          <MainTcheck />
        </CandidatesDataContext>
      ),
    },
    {
      path: "/profile",
      element: (
        <CandidatesDataContext>
          <Profile />
        </CandidatesDataContext>
      ),
    },
    {
      path: "/candidate-profile/:id",
      element: (
        <CandidatesDataContext>
          <MainCandidateProfile />
        </CandidatesDataContext>
      ),
    },
    {
      path: "/checkout",
      element: (
        <ListingDataContext>
          <CheckOutForm />
        </ListingDataContext>
      ),
    },
    { path: "*", element: <NotFoundPage /> },
  ];

  const unauthenticatedRoutes = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ];
  const routes = useRoutes(
    isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes
  );
  return routes;
};

const App = () => {
  const dispatch = useDispatch();
  const [mobileActive, setMobileActive] = useState(false);
  const ifLogin = useSelector((state) => state.counter.ifLogin);
  const [show, setShow] = useState(false);

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
          show={show}
        />
      </AnimatePresence>
      <ListingDataContext>
        <CandidateSideBar />
        <TerritoryCheck setShow={setShow} show={show} />
        <CandidatesDataContext>
          <FormalReg setShow={setShow} show={show} />
        </CandidatesDataContext>
        <FLSEmail />
      </ListingDataContext>
      {ifLogin && <Footer />}
    </>
  );
};

export default App;
