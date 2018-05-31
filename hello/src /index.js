import React from "react";   //like require --> read innotes
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// this renders the app component which is imported from app.js to the element with id-root
// this root element can be found in the index.html file, in the public folder 