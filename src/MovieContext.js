import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
	const [movies, setMovies] = useState([
		{
			name: "Happy",
			price: "$10",
			id: 2312
		},
		{
			name: "Happy 2",
			price: "$10",
			id: 5212
		},
		{
			name: "Happy 4",
			price: "$10",
			id: 73312
		}
	]);
	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	);
};
