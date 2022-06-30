import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);

/* 
import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));
*/
