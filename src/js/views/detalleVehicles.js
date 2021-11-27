import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/detalle.scss";

const DetalleVehicles = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetalleStarships(id);
	}, []);
	return (
		<div className="container_detalle">
			<div className="card_detalle">
				<div className="card_item">
					<img src={require(`../../img/2-vehicle.jpg`)} />
					<h4>Name: {store.detalleStarships.name}</h4>
					<p>Model: {store.detalleStarships.model}</p>
					<p> starship_class: {store.detalleStarships.starship_class}</p>

					<Link className="card_botton" to={"/vehicles"}>
						Volver
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DetalleVehicles;
