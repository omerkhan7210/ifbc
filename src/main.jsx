import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "src/assets/index.css";
import "src/assets/frontend.css";
import "src/assets/css/aos.css";
import "src/assets/css/style.css";
import "src/assets/css/swiper-bundle.min.css";
import "src/assets/css/output.css";
import { store } from "./Redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
