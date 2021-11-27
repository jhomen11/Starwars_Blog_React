import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.scss";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h2>Planets</h2>
			<div className="card_character">
				{store.planetas.map((el, index) => {
					return (
						<div className="card_character_item" key={index}>
							<img src={require(`../../img/planetas/${el.uid}-planeta.jpg`)} />
							<h5>{el.name}</h5>
							<div className="card_icons">
								<Link className="card_botton" to={`/detallePlanets/${el.uid}`}>
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

export default Planets;
