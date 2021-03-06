import "./overwolf.dev.mock";
import React from "react";
import ReactDOM from "react-dom";

import store from "app/store";
import { Provider } from "react-redux";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "locales";

import { App } from "./app/App";

overwolf.settings.getCurrentOverwolfLanguage(result => {
  i18next.use(initReactI18next).init(
    {
      resources,
      lng: result.language,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    },
    () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
      );
    }
  );
});
