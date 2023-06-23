import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './App.css';

function TypeWriter() {
return (
	<div className="App">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("srinivasa Reddy ")
		
	.pauseFor(1000)
	.deleteAll()
	.typeString("Welcomz You")
	.start();
	}}
	/>
	</div>
);
}

export default TypeWriter;
