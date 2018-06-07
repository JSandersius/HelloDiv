// why are we rendering a component within another component
// app.js renders hello app component
//we are using index.js to render compenent to tthe page 
// mpst of the time app.js will include multiple compoentes
// app.js will be the single wrapping component for whole app

import React from "react";
import HelloReact from "./components/HelloDiv";

const App = () => <HelloDiv />;

export default App;

// what we choose to have rendered will be what is shown in appication 