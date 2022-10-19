import React from "react";
import { Container } from "./Styles";
import background from "../../assets/login.jpg";

const BackgroundImage = () => {
	return (
		<Container>
			<img src={background} alt="background" />
		</Container>
	);
};

export default BackgroundImage;
