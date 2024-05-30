import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListingDataContext from "src/Context/ListingDataContext.jsx";
import "src/assets/index.css";
import "src/assets/frontend.css";
import "src/assets/css/aos.css";
import "src/assets/css/style.css";
import "src/assets/css/swiper-bundle.min.css";
import "src/assets/css/output.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ListingDataContext>
              <App />
            </ListingDataContext>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
