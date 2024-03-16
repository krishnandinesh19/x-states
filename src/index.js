import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import CountryList from "./countries";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CountryList />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
