import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<Link to={`/`}>Home</Link>
			<Link to={`/characters`}>Characters</Link>
			<Link to={`/planets`}>Planets</Link>
			<Link to={`/vehicles`}>Vehicles</Link>
		</nav>
	);
};
