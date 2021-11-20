import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h2>Characters</h2>
			{store.personajes.map((el, index) => {
				return (
					<div key={index}>
						<img src={require(`../../img/${el.uid}.jpg`)} />
						<p>{el.name}</p>
						<Link to={`/detalle/${el.uid}`}>Ver Detalle</Link>
					</div>
				);
			})}
		</div>
	);
};
