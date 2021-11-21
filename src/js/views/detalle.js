import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/detalle.scss";

const Detalle = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetalle(id);
	}, []);

	return (
		<>
			<Link to={`/`}>Volver</Link>

			<img src={require(`../../img/${id}.jpg`)} />

			<p>Name: {store.detallePersonaje.name}</p>
			<p> Height: {store.detallePersonaje.height}</p>
			<p>Hair Color: {store.detallePersonaje.hair_color}</p>
		</>
	);
};

export default Detalle;
