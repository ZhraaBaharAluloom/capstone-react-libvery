import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import Loader from "./components/Loader";
import "react-toastify/dist/ReactToastify.css";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar", "ku"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: { loadPath: "assets/locales/{{lng}}/translation.json" },
  });

ReactDOM.render(
  <Suspense
    fallback={
      <Loader
        className="flex w-screen h-screen justify-center items-center bg-white"
        color="#F2E1D9"
      />
    }
  >
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
