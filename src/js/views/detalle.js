import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const Detalle = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.verDetalle(id);
	}, []);
	console.log(store.detallePersonaje);

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
