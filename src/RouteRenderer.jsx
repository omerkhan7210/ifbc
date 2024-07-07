import Profile from "./Pages/UserAccount/Profile";
import MainCandidateProfile from "./Pages/CandidatePages/CandidateList/MainCandidateProfile";
import ForgotPassword from "./Authentication/ForgotPassword";
import Registration from "src/Authentication/Registration";
import FranchiseOwner from "src/Pages/StaticPages/FranchiseOwner";
import MainAbout from "./Pages/AboutPage/MainAbout";
import MainCandList from "./Pages/CandidatePages/CandidateList/MainCandList";
import MainNewCand from "./Pages/CandidatePages/NewCandidate/MainNewCand";
import Login from "src/Authentication/Login";
import MainListings from "src/Pages/ListingsPage/MainListings";
import MainDetails from "src/Pages/ListingsDetails/MainDetails";
import MainHome from "src/Pages/HomePage/MainHome";
import NotFoundPage from "src/Pages/StaticPages/NotFoundPage";
import CheckOutForm from "./Pages/StaticPages/CheckOutForm";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import ListingDataContext from "./Context/ListingDataContext";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import MainMessages from "./Pages/CandidatePages/Messages/MainMessages";
import Inbox from "./Pages/CandidatePages/CandidateList/Inbox";
import FundingCalculator from "./Pages/StaticPages/FundingCalculator";
import TCFRDataContext from "./Context/TCFRDataContext";
import BusinessAssessment from "./Pages/StaticPages/BusinessAssessment";
import Contact from "./Pages/StaticPages/Contact";
import FundingResult from "./Pages/StaticPages/FundingResult";
import PrivacyPolicy from "./Pages/StaticPages/PrivacyPolicy";
import TermsConditions from "./Pages/StaticPages/TermsConditions";

const RouteRenderer = ({ isAuthenticated, setRegistrationType, setShow }) => {
  const userDetails = useSelector((state) => state.counter.userDetails);

  const role =
    userDetails && typeof userDetails === "object"
      ? userDetails.userType
      : null;

  const consultantRoutes = [
    {
      path: "/listings-details/:name",
      element: (
        <ListingDataContext>
          <MainDetails
            setShow={setShow}
            setRegistrationType={setRegistrationType}
          />
        </ListingDataContext>
      ),
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
      path: "/messages/:name",
      element: (
        <ListingDataContext>
          <CandidatesDataContext>
            <TCFRDataContext>
              <MainMessages />
            </TCFRDataContext>
          </CandidatesDataContext>
        </ListingDataContext>
      ),
    },
    {
      path: "/inbox",
      element: (
        <CandidatesDataContext>
          <Inbox />
        </CandidatesDataContext>
      ),
    },

    {
      path: "/candidate-profile/:id",
      element: (
        <TCFRDataContext>
          <ListingDataContext>
            <CandidatesDataContext>
              <MainCandidateProfile />
            </CandidatesDataContext>
          </ListingDataContext>
        </TCFRDataContext>
      ),
    },
  ];

  const staticRoutes = [
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
          <MainListings
            setShow={setShow}
            setRegistrationType={setRegistrationType}
          />
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
    { path: "*", element: <NotFoundPage /> },
    {
      path: "/terms-conditions",
      element: <TermsConditions />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/funding-calculator",
      element: <FundingCalculator />,
    },
    {
      path: "/results/:docId",
      element: <FundingResult />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/business-assessment",
      element: <BusinessAssessment />,
    },

    {
      path: "/profile",
      element: (
        <CandidatesDataContext>
          <Profile />
        </CandidatesDataContext>
      ),
    },
  ];

  const normalUserRoutes = [
    {
      path: "/checkout",
      element: (
        <ListingDataContext>
          <CheckOutForm />
        </ListingDataContext>
      ),
    },
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
    isAuthenticated
      ? role === "N"
        ? [...normalUserRoutes, ...staticRoutes]
        : [...consultantRoutes, ...staticRoutes]
      : unauthenticatedRoutes
  );
  return routes;
};

export default RouteRenderer;
