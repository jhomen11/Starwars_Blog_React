import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<header>
			<nav>
				<div className="logo">
					<img className="logo_imagen" src={require(`../../img/logo3.png`)} />
				</div>

				<div className="menu">
					<Link className="items" to={`/`}>
						Home
					</Link>
					<Link className="items" to={`/characters`}>
						Characters
					</Link>
					<Link className="items" to={`/planets`}>
						Planets
					</Link>
					<Link className="items" to={`/vehicles`}>
						Vehicles
					</Link>
					<Link className="items" to={`/pruebaUrl`}>
						Prueba
					</Link>
				</div>
			</nav>
		</header>
	);
};
