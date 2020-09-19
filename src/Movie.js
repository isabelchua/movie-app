import React from "react";
import MovieList from "./MovieList";

function Movie({ name, price }) {
	return (
		<div>
			{name}
			{price}
		</div>
	);
}

export default Movie;
