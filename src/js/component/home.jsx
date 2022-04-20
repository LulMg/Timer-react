import propTypes from "prop-types";
import React from "react";
import Interval from "../../js/index.js";

//create your first component
const Home = (props) => {
	let numero = props.numero.toString();
	let unidad = numero[numero.length - 1];
	let decena = numero[numero.length - 2];
	let centena = numero[numero.length - 3];
	let mil = numero[numero.length - 4];
	let decMil = numero[numero.length - 5];
	let cenMil = numero[numero.length - 6];

	return (
		<div>
			<div className="container px-5 py-2 mt-2">
				<Contador
					unidad={unidad}
					decena={decena}
					centena={centena}
					mil={mil}
					decMil={decMil}
					cenMil={cenMil}
				/>
			</div>
			<div className="mt-1 rounded d-flex justify-content-center">
				<button className="btn btn-dark mx-1" onClick={props.Interval}>
					Start
				</button>
				<button className="btn btn-dark mx-1" onClick={detener}>
					Stop
				</button>
				<button className="btn btn-dark mx-1" onClick={props.reset}>
					Reset
				</button>
			</div>
		</div>
	);
};
//FUNCTIONS
//STOP
const detener = (props) => {
	clearInterval(Interval);
};

const Contador = (props) => {
	let clock = <i className="far fa-clock"></i>;

	return (
		<div className="d-flex">
			<Cajas text={clock} />
			<Cajas text={props.cenMil ? props.cenMil : "0"} />
			<Cajas text={props.decMil ? props.decMil : "0"} />
			<Cajas text={props.mil ? props.mil : "0"} />
			<Cajas text={props.centena ? props.centena : "0"} />
			<Cajas text={props.decena ? props.decena : "0"} />
			<Cajas text={props.unidad} />
		</div>
	);
};

const Cajas = (props) => {
	return (
		<div className="col mx-1">
			<div
				className="card text-white text-center py-1 bg-dark"
				id="numBox">
				<div className="card-body">
					<strong>
						<h1 className="card-text fw-bold">{props.text}</h1>
					</strong>
				</div>
			</div>
		</div>
	);
};

export default Home;
