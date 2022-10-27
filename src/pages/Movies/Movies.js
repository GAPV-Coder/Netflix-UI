import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { fetchMovies, getGenres } from "../../redux/Store";
import { firebaseAuth } from "../../utils/Config-firebase";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import NotAvailable from "../../components/NotAvailable/NotAvailable";
import SelectGenre from "../../components/SelectGenre/SelectGenre";
import { Container } from "./Styles";

const Movies = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [user, setUser] = useState(undefined);

	const movies = useSelector(state => state.netflix.movies);
	const genres = useSelector(state => state.netflix.genres);
	const genresLoaded = useSelector(state => state.netflix.genresLoaded);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	useEffect(() => {
		if (genresLoaded) {
			dispatch(fetchMovies({ genres, type: "movie" }));
		}
	}, [genresLoaded]);

	onAuthStateChanged(firebaseAuth, currentUser => {
		if (currentUser) setUser(currentUser.uid);
		else navigate("/login");
	});

	return (
		<Container>
			<div className="navbar">
				<Navbar isScrolled={isScrolled} />
			</div>
			<div className="data">
				<SelectGenre genres={genres} type="movie" />
				{movies.length ? <Slider movies={movies} /> : <NotAvailable />}
			</div>
		</Container>
	);
};

export default Movies;
