import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../utils/Config-firebase";
import { getUsersLikedMovies } from "../../redux/Store";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "./Styles";

function UserListedMovies() {
	const [isScrolled, setIsScrolled] = useState(true);
	const [email, setEmail] = useState(undefined);

	const movies = useSelector(state => state.netflix.movies);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	onAuthStateChanged(firebaseAuth, currentUser => {
		if (currentUser) setEmail(currentUser.email);
		else navigate("/login");
	});

	useEffect(() => {
		if (email) {
			dispatch(getUsersLikedMovies(email));
		}
	}, [email]);

	window.onscroll = () => {
		setIsScrolled(window.scrollY === 1 ? true : true);
		return () => (window.onscroll = null);
	};

	return (
		<Container>
			<Navbar isScrolled={isScrolled} />
			<div className="content flex column">
				<h1>My List</h1>
				<div className="grid flex">
					{movies.map((movie, index) => {
						return (
							<Card
								movieData={movie}
								index={index}
								key={movie.id}
								isLiked={true}
							/>
						);
					})}
				</div>
			</div>
		</Container>
	);
}

export default UserListedMovies;
