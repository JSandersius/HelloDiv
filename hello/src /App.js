// why are we rendering a component within another component
// app.js renders hello app component
//we are using index.js to render compenent to tthe page 
// app.js will be the single wrapping componet for whole app

import React from "react";
import HelloReact from "./components/HelloReact";

const App = () => <HelloReact />;

export default App;
