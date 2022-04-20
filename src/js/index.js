//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
var trueFalse = false;
var Interval;
var contador = 0;

Interval = setInterval(function () {
	if (!trueFalse) {
		contador++;
	}

	let reset = () => {
		contador = 0;
		ReactDOM.render(
			<Home numero={contador} reset={reset} />,
			document.querySelector("#app")
		);
	};

	ReactDOM.render(
		<Home numero={contador} reset={reset} />,
		document.querySelector("#app")
	);
}, 1000);
//START
const Start = () => {
	trueFalse = false;
};
//STOP
const Detener = () => {
	trueFalse = true;
};
export { Start, Detener };
