import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import backgroundImage from "../../assets/home.jpg";
import MovieLogo from "../../assets/homeTitle.webp";
import { getGenres, fetchMovies } from "../../redux/Store";
import { Container } from "./Styles";

const Netflix = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const genresLoaded = useSelector(state => state.netflix.genresLoaded);
	const movies = useSelector(state => state.netflix.movies);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	useEffect(() => {
		if (genresLoaded) {
			dispatch(fetchMovies({ type: "all" }));
		}
	}, [dispatch, genresLoaded]);

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
			<Slider movies={movies} />
		</Container>
	);
};

export default Netflix;
