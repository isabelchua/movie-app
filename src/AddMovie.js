import React, { useState } from "react";

function AddMovie() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const updateName = e => {
		setName(e.target.value);
	};
	const updatePrice = e => {
		setPrice(e.target.value);
	};

	const addMovie = e => {
		e.preventDefault();
	};

	return (
		<div>
			<form action="">
				<input type="text" name="name" value={name} onChange={updateName} />
				<input
					type="text"
					name="price"
					value={price}
					onChange={updatePrice}
				/>
			</form>
		</div>
	);
}

export default AddMovie;
