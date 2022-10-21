import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import backgroundImage from "../../assets/home.jpg";
import MovieLogo from "../../assets/homeTitle.webp";
import { Container } from "./Styles";

const Netflix = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const navigate = useNavigate();

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<Container>
			<Navbar isScrolled={isScrolled} />
			<div className="hero">
				<img
					src={backgroundImage}
					alt="background"
					className="background-image"
				/>
				<div className="container">
					<div className="logo">
						<img src={MovieLogo} alt="Movie Logo" />
					</div>
					<div className="buttons flex">
						<button
							onClick={() => navigate("/player")}
							className="flex j-center a-center"
						>
							<FaPlay />
							Play
						</button>
						<button className="flex j-center a-center">
							<AiOutlineInfoCircle />
							More Info
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Netflix;
