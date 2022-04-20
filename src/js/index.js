//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

var contador = 0;

let Interval = setInterval(function () {
	contador++;

	let reset = () => {
		contador = 0;
		ReactDOM.render(
			<Home numero={contador} reset={reset} start={start} />,
			document.querySelector("#app")
		);
	};
	let start = () => {
		setInterval(() => {
			contador++;
			ReactDOM.render(
				<Home numero={contador} reset={reset} start={start} />,
				document.querySelector("#app")
			);
		}, 1000);
		ReactDOM.render(
			<Home numero={contador} reset={reset} start={start} />,
			document.querySelector("#app")
		);
	};

	ReactDOM.render(
		<Home numero={contador} reset={reset} start={start} />,
		document.querySelector("#app")
	);
}, 1000);

export default Interval;
