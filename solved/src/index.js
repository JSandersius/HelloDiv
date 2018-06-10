import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//import is jsx syntax, similar to require 

// In a project I'm collaborating on, we have two choices on which module system we can use:
// Importing modules using require, and exporting using module.exports and exports.foo.
// Importing modules using ES6 import, and exporting using ES6 export
// Are there any performance benefits to using one over the other? Is 
//there anything else that we should know if we were to use ES6 modules over Node ones?

// There are several usage / capabilities you might want to consider:

// Require:

// You can have dynamic loading where the loaded module name isn't predefined /static, or where you conditionally 
//load a module only if it's "truly required" (depending on certain code flow).
// Loading is synchronous. That means if you have multiple requires, they are loaded and processed one by one.
// ES6 Imports:

// You can use named imports to selectively load only the pieces you need. That can save memory.
// Import can be asynchronous (and in current ES6 Module Loader, it in fact is) and can perform a little better.
// Also, the Require module system isn't standard based. It's is highly unlikely to become standard now that 
//ES6 modules exist. In the future there will be native support for ES6 Modules in various implementations which will be advantageous in terms of performance.