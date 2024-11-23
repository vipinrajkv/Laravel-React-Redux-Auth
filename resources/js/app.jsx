import "./bootstrap";
import "../css/app.css";

import ReactDOM from "react-dom/client";
import Home from "./Home";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <Provider store={store}>         
            <Home />
        </Provider>
    </React.StrictMode>
);