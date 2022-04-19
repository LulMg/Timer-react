//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

var contador = 0;
var Interval = setInterval(function Inter() {
	contador++;

	let reset = () => {
		contador = 0;
	};
	ReactDOM.render(<Home numero={contador} />, document.querySelector("#app"));
}, 1000);
export default Interval;
