import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.scss";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container_character">
			<h2>Characters</h2>
			<div className="card_character">
				{store.personajes.map((el, index) => {
					return (
						<div className="card_character_item" key={index}>
							<img src={require(`../../img/${el.uid}.jpg`)} />
							<h5>{el.name}</h5>
							<div className="card_icons">
								<Link className="card_botton" to={`/detalle/${el.uid}`}>
									Ver Detalle
								</Link>
								<span>
									<i className="far fa-heart" />
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
