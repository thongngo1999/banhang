import React from "react";
import ReactDOM from "react-dom"; // Đúng cách import ReactDOM
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.js'
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initalState";
import reducer from "./context/reducer";

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />,
        </StateProvider>
    </Router>,
    document.getElementById("root"));
