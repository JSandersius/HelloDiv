import React from "react";

const HelloDiv = () => {
	const name = "Julian";
	return(
	<div>
		<h1> Hello my name is {name}</h1>
		<h2> Things about be </h2> 
		<ul>
			<li>Three Brothers</li>
			<li>Sublime or VS? </li>
			<li> Medium to big dogs </li>
		</ul>
	</div>
		
		);
}


export default HelloDiv;

//need to impoert react

// wrap everything in a parenthesis so that the arrow function understands that 
//the following lines are to be rendered

// lets talk about this arrow funstion => 
// in our case we're goung to add () because we want to take advantage of implicit return 
// within the arrow function 

//in block body, we're goint to need to wrap everything in brackets and we're going to need a return statement 

//start by creating a constant variable name
//next make a return statement with a return statment  with a () because it will be multiple lines 
//and replace name with consant variable with es6 syntax (name)
//and when this is rendered it will have the same result as before
//this is going to be helpful for large scale applications with greater understanding of the arrow function 


//implicit return within the arrow function 

