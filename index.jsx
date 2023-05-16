import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import Avtoriz_main from "./Avtoriz_main";
// import HeaderAv from "./components/HeaderAv";
import App_test from "./App_test";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <App_test />
</BrowserRouter>
);
