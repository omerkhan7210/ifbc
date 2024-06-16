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
import CheckOutForm from "./Pages/CartPage/CheckOutForm";
import { useRoutes } from "react-router-dom";
import ListingDataContext from "./Context/ListingDataContext";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import MainMessages from "./Pages/CandidatePages/Messages/MainMessages";
import Inbox from "./Pages/CandidatePages/CandidateList/Inbox";
import TCFRDataContext from "./Context/TCFRDataContext";

const RouteRenderer = ({ isAuthenticated, setShowF, setShowT }) => {
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
          <MainListings setShowF={setShowF} setShowT={setShowT} />
        </ListingDataContext>
      ),
    },
    {
      path: "/listings-details/:name",
      element: (
        <ListingDataContext>
          <MainDetails setShowF={setShowF} setShowT={setShowT} />
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
        <TCFRDataContext>
          <ListingDataContext>
            <CandidatesDataContext>
              <MainCandidateProfile />
            </CandidatesDataContext>
          </ListingDataContext>
        </TCFRDataContext>
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

export default RouteRenderer;
