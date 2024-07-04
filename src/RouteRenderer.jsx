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
import Popups from "./Pages/StaticPages/Popups";
import ToolInformation from "./Pages/StaticPages/ToolInformation";
import ToolComparison from "./Pages/StaticPages/ToolComparison";
import LocationSelector from "./Context/LocationSelector";

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
      path: "/popups",
      element: <Popups />,
    },
    {
      path: "/tool-information",
      element: <ToolInformation />,
    },
    {
      path: "/tool-comparison",
      element: <ToolComparison />,
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
          <LocationSelector>
            <MainNewCand />
          </LocationSelector>
        </CandidatesDataContext>
      ),
    },
    {
      path: "/messages/:name",
      element: (
        <CandidatesDataContext>
          <MainMessages />
        </CandidatesDataContext>
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
              <LocationSelector>
                <MainCandidateProfile />
              </LocationSelector>
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
      element: (
        <LocationSelector>
          <FundingCalculator />
        </LocationSelector>
      ),
    },
    {
      path: "/results/:docId",
      element: <FundingResult />,
    },

    {
      path: "/contact",
      element: (
        <LocationSelector>
          <Contact />
        </LocationSelector>
      ),
    },
    {
      path: "/business-assessment",
      element: <BusinessAssessment />,
    },
    {
      path: "/terms-conditions",
      element: <TermsConditions />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
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

  // 2 roles hain hamare pass dono roles ke alag alag routes hain tum jo dalrhe the wo consultant wale may dalr the wahan bhi aengay lekn tumhe show isliye nhi horhe kunke tum normal yuser se logged in ho abhi (member hai normal user

  const normalUserRoutes = [
    {
      path: "/checkout",
      element: (
        <ListingDataContext>
          <LocationSelector>
            <CheckOutForm />
          </LocationSelector>
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
