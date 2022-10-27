import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/Config-firebase";
import { fetchMovies, getGenres } from "../../redux/Store";
import Navbar from "../../components/Navbar/Navbar";
import SelectGenre from "../../components/SelectGenre/SelectGenre";
import Slider from "../../components/Slider/Slider";
import { Container } from "./Styles";

const TVShows = () => {
	const [isScrolled, setIsScrolled] = useState(true);
	const movies = useSelector(state => state.netflix.movies);
	const genres = useSelector(state => state.netflix.genres);
	const genresLoaded = useSelector(state => state.netflix.genresLoaded);
	const dataLoading = useSelector(state => state.netflix.dataLoading);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!genres.length) dispatch(getGenres());
	}, []);

	useEffect(() => {
		if (genresLoaded) {
			dispatch(fetchMovies({ genres, type: "tv" }));
		}
	}, [genresLoaded]);

	const [user, setUser] = useState(undefined);

	onAuthStateChanged(firebaseAuth, currentUser => {
		if (currentUser) setUser(currentUser.uid);
		else navigate("/login");
	});

	window.onscroll = () => {
		setIsScrolled(window.scrollY === 1 ? true : true);
		return () => (window.onscroll = null);
	};

	return (
		<Container>
			<Navbar isScrolled={isScrolled} />
			<div className="data">
				<SelectGenre genres={genres} type="tv" />
				{movies.length ? (
					<>
						<Slider movies={movies} />
					</>
				) : (
					<h1 className="not-available">
						No TV Shows avaialble for the selected genre. Please select a
						different genre.
					</h1>
				)}
			</div>
		</Container>
	);
};

export default TVShows;
