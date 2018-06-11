import React from "react";
import HelloDiv from "./components/HelloDiv";

const App = () => <HelloDiv />;

export default App;


//app.js renders the hello div component, why render a single component within another coponent?
//why not just render the compnent that contains content
//we are learnng to build coponents and their relationshipts
//we are using the index.js to render the component to the page, and we could have easily built the application 
	//in app.js 
//but most of the time app.js will include multiple components, 
//app.js will be the single wrapping component for the whole app

//all of the code will go within the HellpDiv component for this activity 
//what we choose to have rendered here will be what is shown in the finished app

