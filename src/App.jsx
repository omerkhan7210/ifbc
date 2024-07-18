import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "src/Globals/Header";
import Footer from "src/Globals/Footer";
import MobileNav from "src/Globals/MobileNav";
import ListingDataContext from "src/Context/ListingDataContext";
import CandidatesDataContext from "./Context/CandidatesDataContext";
import CandidateSideBar from "./Pages/GlobalPageSections/CandidateSideBar";
import { useDispatch, useSelector } from "react-redux";
import { generateUuid } from "./Redux/listingReducer";
import RouteRenderer from "./RouteRenderer";
import TCFRDataContext from "./Context/TCFRDataContext";
import RegisterationPopup from "./Popups/RegistrationPopup";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
const App = () => {
  const dispatch = useDispatch();
  const [mobileActive, setMobileActive] = useState(false);
  const token = useSelector((state) => state.counter.token);
  const role = useSelector((state) => state.counter.role);
  const [show, setShow] = useState("");
  const [registrationType, setRegistrationType] = useState("");
  const loc = useLocation();

  const [active, setActive] = useState(false);
  const [selectedCandName, setSelectedCandName] = useState({});

  useEffect(() => {
    dispatch(generateUuid());
    dispatch;
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("userDetails");
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    setMobileActive(false);

    document
      .querySelector("#app")
      .classList.add("flex", "flex-col", "justify-between", "min-h-screen");
  }, [loc.pathname]);

  //const queryClient = new QueryClient();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24 * 3, // 5 days
      },
    },
  });

  const sessionStoragePersistor = createWebStoragePersistor({
    storage: window.sessionStorage,
  });

  persistQueryClient({
    queryClient,
    persistor: sessionStoragePersistor,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header
        mobileActive={mobileActive}
        setMobileActive={setMobileActive}
        active={active}
        setActive={setActive}
        selectedCandName={selectedCandName}
      />
      {mobileActive && <MobileNav setMobileActive={setMobileActive} />}

      <AnimatePresence mode="wait">
        <RouteRenderer
          isAuthenticated={token}
          setShow={setShow}
          setRegistrationType={setRegistrationType}
        />
      </AnimatePresence>
      <ListingDataContext>
        <CandidatesDataContext>
          <TCFRDataContext>
            <RegisterationPopup
              setShow={setShow}
              show={show}
              registrationType={registrationType}
            />
          </TCFRDataContext>
        </CandidatesDataContext>
      </ListingDataContext>

      <TCFRDataContext>
        {token && role && role === "C" && (
          <CandidateSideBar
            active={active}
            setActive={setActive}
            setSelectedCandName={setSelectedCandName}
          />
        )}
      </TCFRDataContext>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
