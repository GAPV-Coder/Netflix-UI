import React from "react";
import { Container } from "./Styles";

const NotAvailable = () => {
	return (
		<Container>
			<h1 className="not-available">
				No Movies avaialble for the selected genre. Please select a different
				genre.
			</h1>
		</Container>
	);
};

export default NotAvailable;
