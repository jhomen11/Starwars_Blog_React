import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container home">
			<h1>Start Wars Blog</h1>
			<div className="card_home">
				<div className="card_item">
					<img src={require("../../img/banner_1.jpg")} />
					<h3>Characters</h3>
					<p>the characters of the star wars saga</p>
					<Link className="card_botton" to={`/characters`}>
						Ver mas...
					</Link>
				</div>
				<div className="card_item">
					<img src={require("../../img/banner_2.jpg")} />
					<h3>Planets</h3>
					<p>the characters of the star wars saga</p>
					<Link className="card_botton" to={`/characters`}>
						Ver mas...
					</Link>
				</div>
				<div className="card_item">
					<img src={require("../../img/banner_3.jpg")} />
					<h3>Vehicles</h3>
					<p>the characters of the star wars saga</p>
					<Link className="card_botton" to={`/characters`}>
						Ver mas...
					</Link>
				</div>
			</div>
			<div />
		</div>
	);
};
