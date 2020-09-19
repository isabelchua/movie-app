import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Nav() {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			<h1>Movies</h1>
			<p>list of movies: {movies.length}</p>
		</div>
	);
}

export default Nav;
